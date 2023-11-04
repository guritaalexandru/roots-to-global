import sgMail from '@sendgrid/mail';
import {DYNAMIC_MAIL_ID,} from '@/js/utils/constants.js';

export const sendEmail = async (to, personalizationsObject) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const msg = {
		from: 'hello@fromyourroots.com',
		template_id: DYNAMIC_MAIL_ID,
		personalizations: [
			{
				to: [
					{
						email: to,
					}
				],
				dynamic_template_data: personalizationsObject,
			}
		],
	};

	try {
		await sgMail.send(msg);
		console.log(`Email sent to ${to}`);
	} catch (error) {
		console.error(error);
	}
};