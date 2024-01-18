import React from 'react';
import Announcement from '@/js/components/Public/Layout/Announcement.jsx';
import BannerSection from '@/js/components/Public/Sections/BannerSection.jsx';
import AboutSection from '@/js/components/Public/Sections/AboutSection.jsx';
import HostSection from '@/js/components/Public/Sections/HostSection.jsx';
import BookSection from '@/js/components/Public/Sections/BookSection.jsx';
import ConnectSection from '@/js/components/Public/Sections/ConnectSection.jsx';
import AboutSection_T2 from '@/js/components/Public/Sections/AboutSection_T2.jsx';
import AboutSection_T3 from '@/js/components/Public/Sections/AboutSection_T3';
import AboutSection_T4 from '@/js/components/Public/Sections/AboutSection_T4';

export default function Home() {
	if(process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'){
		return (
			<main className={ 'page-container relative' }>
				Coming soon...
			</main>
		);
	}
	return (
		<main className="page-container relative">
			<Announcement />
			<BannerSection />
			<AboutSection />
			<HostSection />
			{/*<AboutSection_T2 />*/}
			{/*<AboutSection_T3 />*/}
			<AboutSection_T4 />
			<BookSection />
			<ConnectSection />
		</main>
	);
}
