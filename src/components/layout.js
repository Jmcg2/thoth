import Header from './Header';
import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
	const HeaderMemo = React.memo(Header);
	return (
		<>
			<Head>
				<title>Sorftwair Shoops</title>
			</Head>
			<HeaderMemo />
			<main>{children}</main>
		</>
	);
}
