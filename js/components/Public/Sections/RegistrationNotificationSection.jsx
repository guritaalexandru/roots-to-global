'use client';

import React from 'react';
import {useSearchParams  ,} from 'next/navigation';
export default function RegistrationNotificationSection() {
	const params  = useSearchParams ();
	const id = params.get('id') ;
	let message;

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
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a expirat.`;
	}
	else if(bookingData?.paymentStatus === 'failed'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a eșuat.`;
	}
	else if(bookingData?.paymentStatus === 'cancelled'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a fost anulată.`;
	}
	else if(bookingData?.paymentStatus === 'paid'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a fost confirmată cu succes! Vei primi un email cu detaliile înregistrării pe adresa ${bookingData?.email}.`;
	}
	else{
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} este în curs de procesare.`;
	}

	return (
		<main className="page-container relative">
			<div className="flex justify-center items-center h-screen text-justify p-36">
				<h1 className="text-4xl">{message}</h1>
			</div>
		</main>
	);
}