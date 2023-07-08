import React from 'react';
import {ANNOUNCEMENT_TEXTS,} from '@/js/utils/content.js';

function Announcement(props) {
	return (
		<div
			id={ 'AnnouncementSection' }
			className={ 'h-8' }>
			<div className={ 'bg-main text-light-shade border-b-2 fixed w-full z-50' }>
				<div className={ 'content-container py-2.5 flex tablet:flex-wrap justify-between tablet:justify-center items-center' }>
					<span className={ 'tablet:w-full tablet:mb-2 text-center' }>
						{ ANNOUNCEMENT_TEXTS.ANNOUNCEMENT }
					</span>
					<button className={ 'main-button' }>
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