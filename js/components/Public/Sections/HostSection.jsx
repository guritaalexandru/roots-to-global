import React from 'react';
import {HOST_CONTENT,} from '@/js/utils/content';
import Image from 'next/image';

function HostSection(props) {
	return (
		<section id={ 'HostSection' }>
			<div className={ 'bg-light-shade text-dark-shade' }>
				<div className={ 'content-container py-10 flex' }>
					<div className={ 'w-1/2 pr-20' }>
						<div className={ 'relative' }>
							<Image
								style={{ position: 'relative', width: '100%', height: '100%',}}
								className={ 'object-contain rounded-tl-[8rem]' }
								src={ HOST_CONTENT.IMAGE_SRC }
								alt={ HOST_CONTENT.IMAGE_ALT }
								width={ 800 }
								height={ 1200 }
							/>
						</div>
					</div>
					<div className={ 'w-1/2' }>
						<h2>
							{HOST_CONTENT.TITLE}
						</h2>
						<p>
							{HOST_CONTENT.DESCRIPTION}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HostSection;