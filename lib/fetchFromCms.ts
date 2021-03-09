const API_URL = process.env.API_URL;

export async function fetchCmsData(
	slug: string,
) {
	if (slug === '/' || slug === '') {
		slug = 'index';
	}

	const res = await fetch(`${API_URL}/${slug}.json`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const json = await res.json();
	if (json.errors) {
		// eslint-disable-next-line no-console
		console.error(JSON.stringify(json.errors));
		throw new Error('Failed to fetch API');
	}

	return json;
}


export async function getAllPages(
) {
	const res = await fetch(`${API_URL}/index.json`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const json = await res.json();
	if (json.errors) {
		// eslint-disable-next-line no-console
		console.error(JSON.stringify(json.errors));
		throw new Error('Failed to fetch API');
	}

	return json.navigation.items;
}
