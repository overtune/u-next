import React from 'react';
import { GetStaticProps } from 'next';
import { fetchCmsData } from '@lib/fetchFromCms';
import PreviewBar from '@components/PreviewBar';
import Layout from '@components/Layout';
import Article from '@components/Article';

interface Props {
	page: any;
	preview?: boolean;
}

const Startpage: React.FC<Props> = ({ page, preview }) => {
	return (
		<>
			{preview && <PreviewBar />}
			<Layout>{page && <Article page={page} preview={preview} />}</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const page = await fetchCmsData('/');

	if (!page) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			page,
			preview: context?.preview || false,
		},
	};
};

export default Startpage;
