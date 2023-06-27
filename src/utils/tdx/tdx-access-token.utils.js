export const getTdxAccessToken = async () => {
	const url = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';

	const response = await fetch(url, {
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			grant_type: 'client_credentials',
			client_id: process.env.REACT_APP_TDX_CLIENT_ID,
			client_secret: process.env.REACT_APP_TDX_CLIENT_SECRET,
		}),
	});

	const acessToken = await response.json();
	return acessToken.access_token;
};
