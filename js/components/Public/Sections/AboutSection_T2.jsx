import React from 'react';
import {ABOUT_CONTENT_T2,} from '@/js/utils/content.js';

function AboutSection_T2(props) {
	return (
		<section id={ 'AboutSection' }>
			<div className={ 'bg-dark-shade text-light-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{ABOUT_CONTENT_T2.TITLE}
					</h2>
					<div className={ 'flex tablet:flex-wrap justify-center pt-6 space-x-12' }>
						{
							ABOUT_CONTENT_T2.T2_CARDS.map((card, index) => {
								return (
									<div
										key={ index }
										className={ 'w-1/3 tablet:w-full' }>
										<div className={ '' }>
											<span className={ 'block' }>
												{card.NUMBER}
											</span>
											<h3 className={ '' }>
												{card.TITLE}
											</h3>
											<p className={ '' }>
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

export default AboutSection_T2;