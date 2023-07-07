import React from 'react';
import {HOST_CONTENT,} from '@/js/utils/content.js';
import Image from 'next/image';

function HostSection(props) {
	return (
		<section id={ 'HostSection' }>
			<div className={ 'bg-light-shade text-dark-shade' }>
				<div className={ 'content-container py-10 flex' }>
					<div className={ 'relative w-1/2' }>
						<div className={ 'relative pr-32 pb-32' }>
							<Image
								style={{ position: 'relative', width: '100%', height: '100%',}}
								className={ 'object-contain rounded-tl-[8rem]' }
								src={ HOST_CONTENT.IMAGE_SRC }
								alt={ HOST_CONTENT.IMAGE_ALT }
								width={ 800 }
								height={ 1200 }
							/>
						</div>
						<div className={ 'absolute rounded bottom-12 right-12 w-52 h-52 bg-main text-light-shade flex p-4' }>
							<div className={ 'self-center h-fit text-center' }>
								<span className={ 'block text-[50px] font-bold' }>15</span>
								<span className={ 'block' }>Years of experience</span>
							</div>
						</div>
					</div>
					<div className={ 'flex w-1/2' }>
						<div className={ 'self-center h-fit' }>
							<h2>
								{HOST_CONTENT.TITLE}
							</h2>
							<p className={ 'italic pb-5' }>
								{HOST_CONTENT.SUBTITLE}
							</p>
							<p className={ 'pb-5' } >
								{HOST_CONTENT.DESCRIPTION}
							</p>
							<ul className={ 'list-disc' }>
								<li>
									Lorem ipsum
								</li>
								<li>
									Lorem ipsum
								</li>
								<li>
									Lorem ipsum
								</li>
								<li>
									Lorem ipsum
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HostSection;