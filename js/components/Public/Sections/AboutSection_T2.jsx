import React from 'react';
import parse from 'html-react-parser';
import {ABOUT_CONTENT_T2,} from '@/js/utils/content.js';

function AboutSection_T2(props) {
	return (
		<section id={ 'AboutSection' }>
			<div className={ 'bg-dark-shade text-light-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center' }>
						{ABOUT_CONTENT_T2.TITLE}
					</h2>
					<div className={ 'flex flex-wrap justify-center pt-6 tablet:space-y-6' }>
						{
							ABOUT_CONTENT_T2.T2_CARDS.map((card, index) => {
								return (
									<div
										key={ index }
										className={ 'w-1/3 tablet:w-full px-2 py-6' }>
										<div className={ '' }>
											<span className={ 'block' }>
												{card.NUMBER}
											</span>
											<h3 className={ '' }>
												{card.TITLE}
											</h3>
											<div className={ 'rte' }>
												{
													parse(card.DESCRIPTION)
												}
											</div>
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