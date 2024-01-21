import { NextResponse, } from 'next/server';
import {getRegistrationById, updateRegistrationById,} from '@/js/utils/serverCalls.js';
import {sendEmail,} from '@/lib/sengrid.js';
import {REGISTRATION_TYPES,} from '@/js/utils/constants.js';

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
		let workshopText = '';
		let calendarFile = '';

		switch(registrationType) {
			case REGISTRATION_TYPES.COMBO:
				workshopText = 'Workshop-urile',
				calendarFile = 'calendar-event.ics';
				break;
			case REGISTRATION_TYPES.WORKSHOP_1:
				workshopText = '"Definitia succesului"',
				calendarFile = 'calendar-event.ics';
				break;
			case REGISTRATION_TYPES.WORKSHOP_2:
				workshopText = 'Workshop-ul 2',
				calendarFile = 'calendar-event.ics';
				break;
			case REGISTRATION_TYPES.WORKSHOP_3:
				workshopText = 'Workshop-ul 3',
				calendarFile = 'calendar-event.ics';
				break;
			default:
				throw new Error('Invalid registration type');
		}

		const personalizationsObject = {
			firstName,
			workshopText,
			calendarFile,
		};

		await sendEmail(email, personalizationsObject);
	}

	return NextResponse.json({ message: 'Success', }, { status: 200, });
}