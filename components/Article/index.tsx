import React from 'react';
import Menu from '@components/Menu';

interface Props {
	page: any;
	preview?: boolean;
}

const Article: React.FC<Props> = ({ page, preview }) => (
	<div className="container px-4 pt-12 mx-auto prose lg:prose-xl">
		{preview && (
			<h1
				data-epi-property-name="heading"
				data-epi-property-render="none"
			>
				{page?.content?.heading}
			</h1>
		)}
		{!preview && <h1>{page?.content?.heading}</h1>}

		{preview && (
			<p
				data-epi-property-name="preamble"
				data-epi-property-render="none"
			>
				{page?.content?.preamble}
			</p>
		)}
		{!preview && page?.content?.preamble && (
			<p>{page?.content?.preamble}</p>
		)}

		{page?.navigation?.items && <Menu menu={page?.navigation?.items} />}
	</div>
);

export default Article;
