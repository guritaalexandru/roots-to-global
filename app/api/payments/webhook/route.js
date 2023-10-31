import { NextResponse, } from 'next/server';
import { updateRegistrationById,} from '@/js/utils/serverCalls.js';

export async function POST(request) {
	const { createMollieClient, } = require('@mollie/api-client');
	const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY, });

	const body = await request.formData();
	const paymentId = body.get('id');
	const paymentMetadata = body.get('metadata');
	const registrationId = paymentMetadata.order_id;

	console.log('MOLLIE paymentId', paymentId);
	console.log('MOLLIE registrationId', registrationId);

	const payment = await mollieClient.payments.get(paymentId);
	console.log('MOLLIE payment', payment);

	const paymentStatus = payment.status;
	const dbUpdateResponse = await updateRegistrationById(registrationId,
		{ rawPaymentUpdateObj: payment,
			paymentStatus: paymentStatus,
		}
	);

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}