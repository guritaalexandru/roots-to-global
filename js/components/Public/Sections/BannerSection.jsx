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
						className={ 'object-cover' }
						src={ BANNER_CONTENT.IMAGE_SRC }
						alt={ BANNER_CONTENT.IMAGE_ALT }
						fill={ true }
					/>
				</div>
				<div className="content-container text-light-shade">
					<div className={ 'flex flex-col py-[180px] laptop:py-[100px] tablet:py-[50px] w-[55%] m-tablet:w-[75%] tablet:w-full' }>
						<h1 className="">
							{BANNER_CONTENT.TITLE}
						</h1>
						<p className="mb-6">
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