import { NextResponse, } from 'next/server';

export async function POST(request) {
	const body = await request.json();
	const paymentId = body.id;
	console.log('MOLLIE paymentId', paymentId);

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}