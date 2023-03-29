import Header from './Header';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';

export default function Layout({ children }) {
	const HeaderMemo = React.memo(Header);
	return (
		<div className="h-screen">
			<Head>
				<title>DoD Software Factories</title>
			</Head>
			<HeaderMemo />
			<main className="h-fit">{children}</main>
			<Footer />
		</div>
	);
}
