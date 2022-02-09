import axios from 'axios';
import https from 'https';
import {getKeyValue} from './storage.service.js';

const getWeather = async (city) => {
	const token = await getKeyValue('token');
	if(!token) {
		throw new Error("API key don't set, please set him by -t [API_KEY] command.");
	}
	const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token, 
			lang: 'ru',
			units: 'metric'
		}
	});
	return data;
};
export {getWeather};