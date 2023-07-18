import React from 'react';
import Image from 'next/image';
import {BANNER_CONTENT,} from '@/js/utils/content.js';

function BannerSection(props) {
	return (
		<section
			id="BannerSection">
			<div className="relative">
				<div className="background-image">
					<Image
						className={ 'object-cover object-banner' }
						src={ BANNER_CONTENT.IMAGE_SRC }
						alt={ BANNER_CONTENT.IMAGE_ALT }
						fill={ true }
					/>
					<div id={ 'Overlay' }></div>
				</div>
				<div className="content-container text-dark-shade">
					<div className={ 'flex flex-col py-[180px] laptop:pt-[160px] laptop:pb-[60px] tablet:pt-[100px] tablet:pb-[20px] w-[55%] m-tablet:w-[75%] tablet:w-full' }>
						<h1 className="font-bold">
							{BANNER_CONTENT.TITLE}
						</h1>
						<p className="mb-6 font-bold">
							{BANNER_CONTENT.DESCRIPTION}
						</p>
						<button className="main-button w-fit">
							<a
								href={ '#BookSection' }>
								{BANNER_CONTENT.CTA}
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BannerSection;