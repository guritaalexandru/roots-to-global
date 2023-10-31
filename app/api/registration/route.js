import { NextResponse, } from 'next/server';
import {getRegistrationById, postRegistration, updateRegistrationById,} from '@/js/utils/serverCalls';

const getRegistrationObjectFromBody = body => {
	const registrationObject = {
		name: body.name,
		email: body.email,
		surname: body.surname,
		phone: body.phone,
		time: body.time,
	};

	if(!registrationObject.name || !registrationObject.email || !registrationObject.surname || !registrationObject.phone || !registrationObject.time) {
		throw new Error('Missing registration data');
	}

	return registrationObject;
};

const handlePayment = async registrationId => {
	const { createMollieClient, } = require('@mollie/api-client');
	const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY, });

	const payment = await mollieClient.payments.create({
		amount: {
			currency: 'EUR',
			value: '10.00',
		},
		description: `Order #${registrationId}`,
		redirectUrl: `${process.env.FRONTEND_URL}/book?id=${registrationId}`,
		webhookUrl: `${process.env.FRONTEND_URL}/api/payments/webhook`,
		metadata: {
			order_id: registrationId,
		},
	});

	return payment;
};

export async function GET(request) {
	try{
		console.log('Incoming request: ', request.url);
		const url = new URL(request.url);
		const registrationId = url.searchParams.get('id');

		if (!registrationId) {
			throw new Error('Registration not found');
		}

		const dbGetResponse = await getRegistrationById(registrationId);
		if (!dbGetResponse) {
			throw new Error('Registration not found');
		}

		const paymentStatus = dbGetResponse.paymentStatus;
		if (!paymentStatus) {
			throw new Error('Payment not found');
		}

		return NextResponse.json(
			{
				message: 'Payment found',
				paymentStatus: paymentStatus,
				name: dbGetResponse.name,
				email: dbGetResponse.email,
				surname: dbGetResponse.surname,
				registrationId: registrationId,
			},
			{ status: 200, });
	}
	catch(error) {
		console.error(error);
		return NextResponse.json({ message: error.message, }, { status: 400, });
	}
}

export async function POST(request) {
	try{
		const body = await request.json();
		const registrationObject = getRegistrationObjectFromBody(body);

		const dbPostResponse = await postRegistration(registrationObject);
		const newRegistrationId = dbPostResponse?.insertedId?.toString();
		if (!newRegistrationId) {
			throw new Error('Registration failed');
		}

		// const dbGetResponse = await getRegistrationById(newRegistrationId);

		const payment = await handlePayment(newRegistrationId);
		if (!payment) {
			throw new Error('Payment failed');
		}

		const paymentId = payment.id;
		const paymentUrl = payment._links.checkout?.href;
		if (!paymentId || !paymentUrl) {
			throw new Error('Payment failed');
		}

		const dbUpdateResponse = await updateRegistrationById(newRegistrationId,
			{ rawPaymentObj: payment,
				paymentId: payment.id,
				paymentStatus: 'unpaid',
			}
		);
		if (!dbUpdateResponse) {
			throw new Error('Payment failed');
		}

		console.log('dbUpdateResponse', dbUpdateResponse);

		return NextResponse.json(
			{
				message: 'Registration successful',
				registrationId: newRegistrationId,
				paymentId: paymentId,
				paymentUrl: paymentUrl,
			},
			{ status: 200, });
	}
	catch(error) {
		console.error(error);
		return NextResponse.json({ message: error.message, }, { status: 400, });
	}
}