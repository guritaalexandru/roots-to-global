import React from 'react';
import {ABOUT_CONTENT,} from '@/js/utils/content';
import Image from 'next/image';

function AboutSection(props) {
	return (
		<section id={ 'AboutSection' }>
			<div className={ 'bg-dark-shade text-light-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{ABOUT_CONTENT.TITLE}
					</h2>
					<p className={ 'text-center' }>
						{ABOUT_CONTENT.DESCRIPTION}
					</p>
					<div className={ 'flex tablet:flex-wrap justify-center mt-6 space-x-6' }>
						{
							ABOUT_CONTENT.T1_CARDS.map((card, index) => {
								return (
									<div
										key={ index }
										className={ 'bg-light-shade rounded text-dark-shade w-1/3 tablet:w-full mt-12 p-6 pb-8' }>
										<div className={ 'relative h-64' }>
											<div className={ 'absolute h-full w-full top-[-56px]' }>
												<Image
													className={ 'rounded-xl shadow-2xl' }
													src={ card.IMAGE_SRC }
													alt={ card.IMAGE_ALT }
													fill={ true }
												/>
											</div>
										</div>
										<div className={ 'mt-[-28px]' }>
											<h3 className={ '' }>
												{card.TITLE}
											</h3>
											<p className={ 'text-[20px]' }>
												{card.DESCRIPTION}
											</p>
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

export default AboutSection;