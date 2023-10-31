'use client';

import React from 'react';
import {useRouter,} from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const { id, } = router.query || {};
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
	else if(bookingData?.status === 'expired'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a expirat.`;
	}
	else if(bookingData?.status === 'failed'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a eșuat.`;
	}
	else if(bookingData?.status === 'cancelled'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a fost anulată.`;
	}
	else if(bookingData?.status === 'paid'){
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} a fost confirmată cu succes! Vei primi un email cu detaliile înregistrării pe adresa ${bookingData?.email}.`;
	}
	else{
		message = `Înregistrarea cu numărul ${bookingData?.registrationId} este în curs de procesare.`;
	}

	return (
		<main className="page-container relative">
			<div className="flex justify-center items-center h-screen">
				<h1 className="text-4xl">{message}</h1>
			</div>
		</main>
	);
}