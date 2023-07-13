import React from 'react';
import {BOOKING_CONTENT,} from '@/js/utils/content';

function BookSection(props) {
	return (
		<section id={ 'BookSection' }>
			<div className={ 'bg-light-shade text-dark-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{BOOKING_CONTENT.TITLE}
					</h2>
					<form className={ ' max-w-xl mx-auto' }>
						<div className="mb-6">
							<label
								htmlFor="name"
								className="block mb-2">
								Nume
							</label>
							<input
								type="name"
								id="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="John"
								required/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="surname"
								className="block mb-2 font-medium text-gray-900 dark:text-white">
								Prenume
							</label>
							<input
								type="surname"
								id="surname"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Doe"
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
								placeholder="name@flowbite.com"
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
								placeholder=" +40 721 123 456"
								required/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="countries"
								className="block mb-2 font-medium text-gray-900 dark:text-white">
								Alege data
							</label>
							<select
								id="countries"
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option>08.07.2023 - 20:00</option>
								<option>09.07.2023 - 20:00</option>
								<option>10.07.2023 - 20:00</option>
								<option>11.07.2023 - 20:00</option>
							</select>
						</div>
						<button
							type="submit"
							className="main-button bg-dark-shade text-light-shade">Trimite
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default BookSection;