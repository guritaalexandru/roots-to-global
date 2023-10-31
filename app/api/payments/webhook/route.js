import { NextResponse, } from 'next/server';
import {postRegistration,} from '@/js/utils/serverCalls';

export async function POST(request) {
	const body = await request.formData();
	console.log('MOLLIE webhook request body', body);
	const paymentId = body.get('id');

	console.log('MOLLIE paymentId', paymentId);

	const { createMollieClient, } = require('@mollie/api-client');
	const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY, });

	const payment = await mollieClient.payments.get(paymentId);
	console.log('MOLLIE payment', payment);

	const dbPostResponse3 = await postRegistration(payment);

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}