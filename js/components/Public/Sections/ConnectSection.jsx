import React from 'react';
import {CONNECT_CONTENT,} from '@/js/utils/content';
import Image from 'next/image';

function ConnectSection(props) {
	return (
		<section id={ 'ConnectSection' }>
			<div className={ 'bg-dark-shade text-light-shade' }>
				<div className={ 'content-container py-14' }>
					<h2 className={ 'text-center mb-2' }>
						{CONNECT_CONTENT.TITLE}
					</h2>
					<div className={ 'flex justify-center space-x-2' }>
						<a href={ CONNECT_CONTENT.FACEBOOK_LINK }>
							<Image
								src={ '/SVGs/facebook.svg' }
								alt={ 'Facebook icon' }
								width={ 50 }
								height={ 50 }
							/>
						</a>
						<a href={ CONNECT_CONTENT.LINKEDIN_LINK }>
							<Image
								src={ '/SVGs/linkedin.svg' }
								alt={ 'LinkedIn icon' }
								width={ 50 }
								height={ 50 }
							/>
						</a>
						<a href={ CONNECT_CONTENT.INSTAGRAM_LINK }>
							<Image
								src={ '/SVGs/instagram.svg' }
								alt={ 'Instagram icon' }
								width={ 50 }
								height={ 50 }
							/>
						</a>
					</div>
					<div className={ 'flex justify-center space-x-12 mt-4' }>
						<div>
							<span>WhatsApp: </span>
							<span>{CONNECT_CONTENT.WHATSAPP_NUMBER}</span>
						</div>
						<div>
							<span>Mail: </span>
							<span>{CONNECT_CONTENT.EMAIL}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ConnectSection;