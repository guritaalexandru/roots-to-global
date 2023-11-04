import { NextResponse, } from 'next/server';
import {getRegistrationById, updateRegistrationById,} from '@/js/utils/serverCalls.js';
import {sendEmail,} from '@/lib/sengrid.js';
import {REGISTRATION_TYPES,} from '@/js/utils/constants';
import {getObjectById,} from '@/js/utils/mongoMethods';

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
	if (!dbUpdateResponse) {
		throw new Error('Registration not found');
	}

	const registrationObject = await getRegistrationById(registrationId);

	const registrationType = registrationObject?.choice;
	if(paymentStatus === 'paid' && registrationType) {
		const {email, firstName,} = registrationObject;
		let workshopNumber = '';
		let workshopOrder = '';

		switch(registrationType) {
			case REGISTRATION_TYPES.COMBO:
			case REGISTRATION_TYPES.WORKSHOP_1:
				workshopNumber = '1';
				workshopOrder = 'primul';
				break;
			case REGISTRATION_TYPES.WORKSHOP_2:
				workshopNumber = '2';
				workshopOrder = 'al doilea';
				break;
			case REGISTRATION_TYPES.WORKSHOP_3:
				workshopNumber = '3';
				workshopOrder = 'al treilea';
				break;
			default:
				throw new Error('Invalid registration type');
		}

		const personalizationsObject = {
			firstName,
			workshopOrder,
			workshopNumber,
		};

		await sendEmail(email, personalizationsObject);
	}

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}