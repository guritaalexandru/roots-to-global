import React from 'react';
import {CONNECT_CONTENT, HOST_CONTENT,} from '@/js/utils/content';

function ConnectSection(props) {
	return (
		<section id={ 'ConnectSection' }>
			<div className={ 'bg-main text-light-shade' }>
				<div className={ 'content-container py-10' }>
					<h2>
						{CONNECT_CONTENT.TITLE}
					</h2>
					<div className={ 'flex justify-center' }>
						<a href={ CONNECT_CONTENT.FACEBOOK_LINK }>
							facebook
						</a>
						<a href={ CONNECT_CONTENT.LINKEDIN_LINK }>
							linkedin
						</a>
					</div>
					<div>
						<div>WhatsApp</div>
						<span>{CONNECT_CONTENT.WHATSAPP_NUMBER}</span>
					</div>
					<div>
						<div>Mail</div>
						<span>{CONNECT_CONTENT.EMAIL}</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ConnectSection;