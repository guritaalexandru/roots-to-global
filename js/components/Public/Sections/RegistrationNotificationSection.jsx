'use client';

import React from 'react';
import {useSearchParams  ,} from 'next/navigation';
export default function RegistrationNotificationSection() {
	const params  = useSearchParams ();
	const id = params.get('id') ;
	let message, message2;

	const [bookingData, setBookingData] = React.useState(null);

	React.useEffect(() => {
		const getBookingData = async () => {
			const response = await fetch(`/api/registration?id=${id}`);
			const data = await response.json();
			console.log(data);
			if (!data?.registrationId){
				setBookingData({});
			}
			else{
				setBookingData(data);
			}
		};

		getBookingData();
	}, []);

	if (!bookingData) {
		message = 'Loading...';
	}
	else if(!bookingData?.registrationId){
		message = 'Acest număr de înregistrare nu a fost găsit';
	}
	else if(bookingData?.paymentStatus === 'expired'){
		message = 'Înregistrarea a expirat.';
		message2 = `Numărul de înregistrare: ${bookingData?.registrationId}`;
	}
	else if(bookingData?.paymentStatus === 'failed'){
		message = 'Înregistrarea a eșuat.';
		message2 = `Numărul de înregistrare: ${bookingData?.registrationId}`;

	}
	else if(bookingData?.paymentStatus === 'cancelled'){
		message = 'Înregistrarea  a fost anulată.';
		message2 = `Numărul de înregistrare: ${bookingData?.registrationId}`;

	}
	else if(bookingData?.paymentStatus === 'paid'){
		message = `Înregistrarea a fost confirmată cu succes! Vei primi un email cu detaliile înregistrării pe adresa ${bookingData?.email}.`;
		message2 = `Numărul de înregistrare: ${bookingData?.registrationId}`;

	}
	else{
		message = 'Înregistrarea este în curs de procesare.';
		message2 = `Numărul de înregistrare: ${bookingData?.registrationId}`;
	}

	return (
		<main className="page-container relative">
			<div className="flex flex-wrap justify-center items-center h-screen text-center py-18 px-20">
				<h1 className="text-xl sm:text-4xl">{message}</h1>
				<h3 className="text-xl break-all">
					{message2}
				</h3>
			</div>
		</main>
	);
}