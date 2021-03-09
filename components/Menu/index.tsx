import React from 'react';
import Link from 'next/link';

interface Props {
	menu: any;
}

const renderMenuItem = (item: any) => (
	<li key={item.url} className="mr-8">
		<Link href={`${item.url}`}>{item.title}</Link>
		{item.items?.length > 0 && <ul>{item.items.map(renderMenuItem)}</ul>}
	</li>
);

const Menu: React.FC<Props> = ({ menu }) => {
	if (!menu || menu.length === 0) {
		return null;
	}

	return (
		<nav aria-label="Menu" className="prose">
			<h2>Meny</h2>
			<ul>
				<li className="mr-8">
					<Link href="/">Start</Link>
				</li>
				{menu.map(renderMenuItem)}
			</ul>
		</nav>
	);
};

export default Menu;
