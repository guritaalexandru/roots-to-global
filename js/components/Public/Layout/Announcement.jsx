import React from 'react';
import {ANNOUNCEMENT_TEXTS,} from '@/js/utils/texts';

function Announcement(props) {
	return (
		<div id={ 'AnnouncementSection' }>
			<div className={ 'bg-dark-accent text-light-shade' }>
				<div className={ 'content-container py-2.5 flex tablet:flex-wrap justify-between tablet:justify-center items-center' }>
					<span className={ 'text-xl tablet:w-full tablet:mb-2 text-center' }>
						{ ANNOUNCEMENT_TEXTS.ANNOUNCEMENT }
					</span>
					<button className={ 'bg-light-shade text-dark-accent font-bold py-2 px-4 rounded' }>
						<a
							href={ '' }>
							{ ANNOUNCEMENT_TEXTS.CTA }
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Announcement;