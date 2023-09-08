import React from 'react';
import parse from 'html-react-parser';
import {ABOUT_CONTENT_T2,} from '@/js/utils/content.js';
import Image from 'next/image';

function AboutSection_T2(props) {
	return (
		<section id={ 'AboutSection' }>
			<div className={ 'bg-dark-shade text-light-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{ABOUT_CONTENT_T2.TITLE}
					</h2>
					<div className={ 'flex flex-wrap justify-center pt-6 space-y-6' }>
						{
							ABOUT_CONTENT_T2.T2_CARDS.map((card, index) => {
								return (
									<div
										key={ index }
										className={ 'w-full flex bg-light-shade rounded text-dark-shade py-6 ml-[56px]' }>
										<div className={ 'relative h-72 w-1/3' }>
											<div className={ 'absolute h-full w-full left-[-56px]' }>
												<Image
													className={ 'object-cover rounded-xl shadow-2xl' }
													src={ card.IMAGE_SRC }
													alt={ card.IMAGE_ALT }
													fill={ true }
												/>
											</div>
										</div>
										<div className={ 'flex flex-col justify-center' }>
											<h3 className={ '' }>
												{card.NUMBER} - {card.TITLE}
											</h3>
											<div className={ 'rte disc' }>{parse(card.DESCRIPTION)}</div>
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

export default AboutSection_T2;