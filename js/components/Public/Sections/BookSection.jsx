'use client';

import React from 'react';
import {BOOKING_CONTENT,} from '@/js/utils/content.js';
import { useRouter, } from 'next/navigation';
import {REGISTRATION_TYPES,} from '@/js/utils/constants.js';

function BookSection(props) {
	const [sendingForm, setSendingForm] = React.useState(false);
	const router = useRouter();

	const handleBooking = async event =>  {
		try{
			event.preventDefault();
			setSendingForm(true);

			const lastName = event.target.lastName.value;
			const firstName = event.target.firstName.value;
			const email = event.target.email.value;
			const phone = event.target.phone.value;
			const choice = event.nativeEvent.submitter.id;

			const bookingObj = {
				lastName,
				firstName,
				email,
				phone,
				choice,
			};

			//send bookingObj to backend
			const registrationResponse = await fetch('/api/registration', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(bookingObj),
			});
			const registrationResponseData = await registrationResponse.json();

			setSendingForm(false);

			const paymentUrl = registrationResponseData?.paymentUrl;

			if(paymentUrl){
				router.push(paymentUrl);
			}
		}
		catch(error){
			console.log(error);
		}
		finally{
			setSendingForm(false);
		}
	};

	return (
		<section id={ 'BookSection' }>
			<div className={ 'bg-light-shade text-dark-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{BOOKING_CONTENT.TITLE}
					</h2>
					<form
						onSubmit={ handleBooking }
						className={ ' max-w-[1000px] mx-auto' }>
						<div className="mb-6">
							<label
								htmlFor="lastName"
								className="block mb-2">
								Nume
							</label>
							<input
								type="name"
								id="lastName"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="firstName"
								className="block mb-2 font-medium text-gray-900 dark:text-white">
								Prenume
							</label>
							<input
								type="surname"
								id="firstName"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block mb-2 font-medium text-gray-900 dark:text-white">
								E-mail
							</label>
							<input
								type="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="phone"
								className="block mb-2 font-medium text-gray-900 dark:text-white">
								Număr de telefon
							</label>
							<input
								type="phone"
								id="phone"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required/>
						</div>
						<div className={ 'mb-6 flex' }>
							<input
								type="checkbox"
								id="gdpr"
								name="gdpr"
								className="mr-2"
								required/>
							<label
								htmlFor="gdpr"
								className="block font-medium text-gray-900 dark:text-white">
								{'Am citit și sunt de acord cu '}
								<a
									target="_blank"
									href={ '/Termeni_si_conditii.pdf' }
									className="underline"
									rel="noreferrer">
									termenii și condițiile
								</a>
							</label>
						</div>
						<div className={ 'mb-6 flex' }>
							<input
								type="checkbox"
								id="terms"
								name="terms"
								className="mr-2"
								required/>
							<label
								htmlFor="terms"
								className="block font-medium text-gray-900 dark:text-white">
								{'Am citit și sunt de acord cu '}
								<a
									target="_blank"
									href={ '/Politica_de_confidentialitate.pdf' }
									className="underline"
									rel="noreferrer">
									politica de confidențialitate
								</a>
							</label>
						</div>
						<div className={ 'grid grid-cols-3 tablet:grid-cols-1 grid-rows-4 gap-2' }>
							{/*<button*/}
							{/*	type="submit"*/}
							{/*	id={ REGISTRATION_TYPES.WORKSHOP_1 }*/}
							{/*	disabled={ true }*/}
							{/*	className="main-button-register col-span-3 tablet:col-span-1">*/}
							{/*	{*/}
							{/*		sendingForm*/}
							{/*			? <div>Se trimite...</div>*/}
							{/*			: (*/}
							{/*				<div>*/}
							{/*					<div>35 EUR - Înscrie-te la Workshop-ul 1! Locuri epuizate!</div>*/}
							{/*					<div>05.02.2024 - 8.00PM</div>*/}
							{/*				</div>*/}
							{/*			)*/}
							{/*	}*/}
							{/*</button>*/}
							<button
								type="submit"
								id={ REGISTRATION_TYPES.WORKSHOP_2 }
								className="main-button-register col-span-3 tablet:col-span-1">
								{
									sendingForm
										? <div>Se trimite...</div>
										: (
											<div>
												<div>35 EUR - Înscrie-te la Workshop!</div>
												<div>05.03.2024 - 19.00 CET</div>
											</div>
										)
								}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default BookSection;