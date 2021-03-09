import React from 'react';
import Head from 'next/head';

const Layout: React.FC = ({ children }) => (
	<>
		<Head>
			<meta key="robots" name="robots" content="noindex,follow" />
			<meta key="googlebot" name="googlebot" content="noindex,follow" />
		</Head>
		<main className="container px-4 pt-12 mx-auto">{children}</main>
	</>
);

export default Layout;
