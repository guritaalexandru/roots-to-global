import { NextResponse, } from 'next/server';
import {getRegistrationById, postRegistration, updateRegistrationById,} from '@/js/utils/serverCalls.js';
import {REGISTRATION_TYPES,} from '@/js/utils/constants.js';

const getRegistrationObjectFromBody = body => {
	const registrationObject = {
		lastName: body.lastName,
		email: body.email,
		firstName: body.firstName,
		phone: body.phone,
		choice: body.choice,
	};

	console.log('registrationObject', registrationObject);

	if(!registrationObject.lastName || !registrationObject.email || !registrationObject.firstName || !registrationObject.phone || !registrationObject.choice) {
		const missingField = Object.keys(registrationObject).find(key => !registrationObject[key]);
		throw new Error(`Missing registration data: ${missingField}`);
	}

	// if choice is not in the list of choices from the constants file, throw an error
	if(!Object.values(REGISTRATION_TYPES).includes(registrationObject.choice)) {
		throw new Error('Invalid registration choice');
	}

	return registrationObject;
};

const handlePayment = async (registrationId, registrationType) => {
	const { createMollieClient, } = require('@mollie/api-client');
	const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY, });

	let amount = '';
	switch(registrationType) {
		case REGISTRATION_TYPES.COMBO:
			amount = '290.00';
			break;
		case REGISTRATION_TYPES.WORKSHOP_1:
		case REGISTRATION_TYPES.WORKSHOP_2:
		case REGISTRATION_TYPES.WORKSHOP_3:
			amount = '1.00';
			break;
		default:
			throw new Error('Invalid registration type');
	}

	const payment = await mollieClient.payments.create({
		amount: {
			currency: 'EUR',
			value: amount,
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
				lastName: dbGetResponse.lastName,
				email: dbGetResponse.email,
				firstName: dbGetResponse.firstName,
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

		const payment = await handlePayment(newRegistrationId, registrationObject.choice);
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