import React from 'react';
import {HOST_CONTENT,} from '@/js/utils/content.js';
import Image from 'next/image';

function HostSection(props) {
	return (
		<section id={ 'HostSection' }>
			<div className={ 'bg-light-shade text-dark-shade' }>
				<div className={ 'content-container py-10 flex m-tablet:flex-wrap m-tablet:justify-center' }>
					<div className={ 'relative w-[45%] laptop:w-1/2 m-tablet:w-full m-tablet:max-w-[350px]' }>
						<div className={ 'relative pr-32 pb-32 laptop:pr-16 laptop:pb-16 m-tablet:px-6' }>
							<Image
								style={{ position: 'relative', width: '100%', height: '100%',}}
								className={ 'object-contain rounded-tl-[8rem]' }
								src={ HOST_CONTENT.IMAGE_SRC }
								alt={ HOST_CONTENT.IMAGE_ALT }
								width={ 800 }
								height={ 1200 }
							/>
						</div>
						{/*<div className={ 'absolute rounded bottom-12 right-12 laptop:bottom-8 laptop:right-8 m-tablet:bottom-6 m-tablet:-right-6 tablet:bottom-4 tablet:-right-1 w-52 h-52 laptop:w-32 laptop:h-32 bg-main text-light-shade flex justify-center p-4 shadow-xl' }>*/}
						{/*	<div className={ 'self-center h-fit text-center' }>*/}
						{/*		<span className={ 'block text-[50px] laptop:text-[40px] font-bold text-center' }>15</span>*/}
						{/*		<span className={ 'block' }>Years of experience</span>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</div>
					<div className={ 'flex w-[55%] laptop:w-1/2 m-tablet:w-full' }>
						<div className={ 'self-center h-fit pb-20 m-tablet:pb-0' }>
							<h3 className={ '' }>
								{HOST_CONTENT.TITLE}
							</h3>
							<p className={ 'italic pb-5' }>
								{HOST_CONTENT.SUBTITLE}
							</p>
							<p className={ 'pb-5' } >
								{HOST_CONTENT.DESCRIPTION}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HostSection;