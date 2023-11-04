import './globals.css';
import { Inter, } from 'next/font/google';
import React from 'react';
import { Analytics, } from '@vercel/analytics/react';
import { GoogleTagManager, } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'], });

export const metadata = {
	title: 'De la cultură la succes!',
	description: 'Un program exclusiv dedicat românilor care trăiesc și lucrează în străinătate. "De la cultură la succes" vă ajută să vă înțelegeți comportamentele și cum să le valorificați pentru a reuși într-un mediu diferit!',
};

export default function RootLayout({ children, }) {
	return (
		<html lang="en">
			<head>
				<GoogleTagManager gtmId="G-ZGJPLS6979" />
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;600;700&display=swap"
					rel="stylesheet"/>
				<title>From Roots to Global Success</title>
				<meta
					name="description"
					content="An exclusive online program catering to Romanians living and working abroad. Our program is specifically designed to help you leverage your cultural background to thrive professionally in diverse settings"
				/>
			</head>
			<body className={ inter.className }>
				<div>{children}</div>
				<Analytics />
			</body>
		</html>
	);
}
