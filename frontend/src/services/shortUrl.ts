import 'dotenv/config';

export const createShortUrl = async (longUrl: string) => {
	const response = await fetch(
		'https://encurta.gustavo-sotero.dev/api/shorten',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ longUrl })
		}
	);

	const data = await response.json();

	return {
		success: true,
		shortUrl: data.shortUrl
	};
};

export const getLongUrl = async (shortUrl: string) => {
	const response = await fetch(
		`https://encurta.gustavo-sotero.dev/api/shorten/${shortUrl}`
	);
	if (response.status === 404) {
		return {
			success: false,
			longUrl: null
		};
	}

	const data = await response.json();

	return {
		success: true,
		longUrl: data.longUrl
	};
};
