import React from 'react';
import Announcement from '@/js/components/Public/Layout/Announcement.jsx';
import BannerSection from '@/js/components/Public/Sections/BannerSection.jsx';
import AboutSection from '@/js/components/Public/Sections/AboutSection.jsx';
import HostSection from '@/js/components/Public/Sections/HostSection.jsx';
import BookSection from '@/js/components/Public/Sections/BookSection.jsx';
import ConnectSection from '@/js/components/Public/Sections/ConnectSection.jsx';
import AboutSection_T2 from '@/js/components/Public/Sections/AboutSection_T2.jsx';

export default function Home() {
	return (
		<main className="page-container relative">
			<Announcement />
			<BannerSection />
			<AboutSection />
			<HostSection />
			<AboutSection_T2 />
			<BookSection />
			<ConnectSection />
		</main>
	);
}
