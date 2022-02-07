#!/usr/bin/env node 
//сверху мы говорим, что файл будем запускать с приставкой node. (она будет добавлена автоматом)

import {getArgs} from './helpers/args.js';
import { printHelp } from './services/log.service.js';

const initCLI = () => {
	const args = getArgs(process.argv);
	if(args.h) {
		//вывод help
		printHelp();
	}
	if(args.s) {
		//сохранить город
	}
	if(args.t) {
		//сохранить токен
	}

	//вывести погоду
};

initCLI();