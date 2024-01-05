import React from 'react';
import parse from 'html-react-parser';
import {ABOUT_CONTENT_T3,} from '@/js/utils/content.js';
import Image from 'next/image';

function AboutSection_T3(props) {
	return (
		<section id={ 'AboutSection' }>
			<div className={ 'bg-light-shade text-dark-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{ABOUT_CONTENT_T3.TITLE}
					</h2>
					<div className={ 'flex flex-wrap justify-center pt-6 space-y-6 tablet:space-y-12' }>
						{
							ABOUT_CONTENT_T3.T2_CARDS.map((card, index) => {
								return (
									<div
										key={ index }
										className={ 'w-full flex tablet:flex-wrap bg-dark-shade rounded text-light-shade py-6 pr-6 ml-[56px] tablet:ml-0 tablet:p-6 tablet:pb-8 tablet:max-w-[450px]' }>
										<div className={ 'relative h-72 tablet:h-64 w-1/3 m-tablet:w-5/12 tablet:w-full' }>
											<div className={ 'absolute h-full w-full left-[-56px] tablet:left-0 tablet:top-[-56px]' }>
												<Image
													className={ 'object-cover rounded-xl shadow-2xl' }
													src={ card.IMAGE_SRC }
													alt={ card.IMAGE_ALT }
													fill={ true }
												/>
											</div>
										</div>
										<div className={ 'flex flex-col justify-center w-2/3 m-tablet:w-7/12 tablet:w-full tablet:mt-[-28px]' }>
											<h3 className={ '' }>
												{card.TITLE}
											</h3>
											<div className={ 'disc' }>{parse(card.DESCRIPTION)}</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutSection_T3;