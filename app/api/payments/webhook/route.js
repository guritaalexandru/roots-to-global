import { NextResponse, } from 'next/server';
import { updateRegistrationById,} from '@/js/utils/serverCalls.js';

export async function POST(request) {
	const { createMollieClient, } = require('@mollie/api-client');
	const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY, });

	const body = await request.formData();
	const paymentId = body.get('id');

	const payment = await mollieClient.payments.get(paymentId);
	const registrationId = payment.metadata.order_id;

	const paymentStatus = payment.status;
	const dbUpdateResponse = await updateRegistrationById(registrationId,
		{ rawPaymentUpdateObj: payment,
			paymentStatus: paymentStatus,
		}
	);

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}