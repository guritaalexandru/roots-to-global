import { NextResponse, } from 'next/server';
import {postRegistration,} from '@/js/utils/serverCalls';

export async function POST(request) {
	const body = await request.json();
	const paymentId = body.id;
	console.log('MOLLIE paymentId', paymentId);
	const dbPostResponse = await postRegistration(body);

	const { createMollieClient, } = require('@mollie/api-client');
	const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY, });

	const payment = await mollieClient.payments.get(paymentId);
	console.log('MOLLIE payment', payment);

	const dbPostResponse2 = await postRegistration(payment);

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}