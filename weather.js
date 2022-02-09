#!/usr/bin/env node 
//сверху мы говорим, что файл будем запускать с приставкой node. (она будет добавлена автоматом)

import {getArgs} from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccesss, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
	if(!token.length) {
		printError("Token wasn't received!");
		return;
	}
	try{
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccesss('TOKEN SAVED!');
	} catch (e) {
		printError(e.message);
	}
};

const saveCity = async (city) => {
	if(!city.length) {
		printError("City wasn't received!");
		return;
	}
	try{
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccesss('CITY SAVED!');
	} catch (e) {
		printError(e.message);
	}
};

const getForcast = async () => {
	try {
	const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
	const weather = await getWeather(city);
	printWeather(weather);
	} catch (e) {
		if(e?.response?.status == 404) {
			printError('Wrong city name!');
		}
		else if(e?.response?.status == 401) {
			printError('Wrong token!');
		} else {
			printError(e.message);
		}
	}
	
};

const initCLI = () => {
	const args = getArgs(process.argv);
	if(args.h) {
		//вывод help
		return printHelp();
	}
	if(args.s) {
		//сохранить город
		return saveCity(args.s);
	}
	if(args.t) {
		//сохранить токен
		return saveToken(args.t);
	}
	return getForcast();
};

initCLI();