import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { fetchCmsData, getAllPages } from '@lib/fetchFromCms';
import PreviewBar from '@components/PreviewBar';
import Layout from '@components/Layout';
import Article from '@components/Article';

interface Props {
	page: any;
	preview?: boolean;
}

const Page: React.FC<Props> = ({ page, preview }) => {
	return (
		<>
			{preview && <PreviewBar />}
			<Layout>{page && <Article page={page} preview={preview} />}</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async context => {
	const slug = context?.params?.slug;
	const page = await fetchCmsData(
		Array.isArray(slug) ? slug.join('/') : slug
	);

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

export const getStaticPaths: GetStaticPaths = async () => {
	const allPages = await getAllPages();
	const slugs = [];
	const getAllItemsUrls = (item: any) => {
		if (item.url.substring(0, 4) !== 'http') {
			slugs.push({
				params: { slug: item.url.replace(/^\/|\/$/g, '').split('/') },
			});
		}
		if (item.items) {
			return item.items.map(getAllItemsUrls);
		}
	};
	allPages.map(getAllItemsUrls);

	return {
		paths: slugs,
		fallback: false,
	};
};

export default Page;
