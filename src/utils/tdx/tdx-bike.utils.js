import { getTdxAccessToken } from './tdx-access-token.utils';
import cities from '../../data/taiwan-cities.json';

export const TDX_BIKE_API_TYPE = {
	STAION: 'STAION',
	AVAILABILITY: 'AVAILABILITY',
	CYCLING_SHAPE: 'CYCLING_SHAPE',
	NEAR_BY_STAION: 'NEAR_BY_STAION',
	NEAR_BY_AVAILABILITY: 'NEAR_BY_AVAILABILITY',
};

const TDX_BIKE_API_URL = {
	[TDX_BIKE_API_TYPE.STAION]: 'https://tdx.transportdata.tw/api/basic/v2/Bike/Station/City/',
	[TDX_BIKE_API_TYPE.AVAILABILITY]:
		'https://tdx.transportdata.tw/api/basic/v2/Bike/Availability/City/',
	[TDX_BIKE_API_TYPE.CYCLING_SHAPE]:
		'https://tdx.transportdata.tw/api/basic/v2/Cycling/Shape/City/',
};

const API_INITIAL_PARAMETERS = {
	$format: 'JSON',
	// $select: 'StationID,StationName,StationPosition,StationAddress',
};

const combineUrlAndParameters = (url = '', parameters = {}) => {
	const parmetersToString = Object.keys(parameters)
		.map(objectKey => {
			return objectKey + '=' + parameters[objectKey];
		})
		.join('&');

	const fetchUrl = url + '?' + parmetersToString;
	return fetchUrl;
};

export const fetchTdxBike = async (bikeApiType, city, addintionlParameters = {}) => {
	if (!bikeApiType || !city) return;
	const apiUrl = TDX_BIKE_API_URL[bikeApiType] + city;

	const apiParameters = {
		...API_INITIAL_PARAMETERS,
		...addintionlParameters,
	};

	const fetchUrl = combineUrlAndParameters(apiUrl, apiParameters);

	const accessToken = await getTdxAccessToken();

	const response = await fetch(fetchUrl, { headers: { authorization: `Bearer ${accessToken}` } });

	if (response.status === 200) {
		const bikeData = await response.json();
		return bikeData;
	} else {
		const error = await response.json();
		throw error;
	}
};

export const fetchAllCitiesBikeData = async (bikeApiType, addintionlParameters = {}) => {
	const apiParameters = {
		...API_INITIAL_PARAMETERS,
		...addintionlParameters,
	};

	const accessToken = await getTdxAccessToken();

	const allBikeData = await Promise.all(
		cities.map(async item => {
			const { City: city } = item;
			const apiUrl = TDX_BIKE_API_URL[bikeApiType] + city;
			const fetchUrl = combineUrlAndParameters(apiUrl, apiParameters);

			const response = await fetch(fetchUrl, {
				headers: { authorization: `Bearer ${accessToken}` },
			});

			if (response.status === 200) {
				const data = await response.json();
				return data;
			} else {
				return [];
			}
		})
	);

	const allBikeDataSlice = allBikeData.reduce((pre, cur) => {
		return pre.concat([...cur]);
	}, []);

	return allBikeDataSlice;
};
