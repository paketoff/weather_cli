import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccesss = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		
		dedent`${chalk.bgMagenta(' HELP ')} 
		Без параметров - вывод погоды
		-s [CITY] для установки города 
		-h для вывода помощи
		-t [API_KEY] для сохранения токена 
		`

		);
};

const printWeather = (res) => {
	console.log(
		
		dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
		Температура: ${res.main.temp} гр. (ощущаеться как ${res.main.feels_like} гр.) 
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed} м/с
		`
		);
};


export {printError, printSuccesss, printHelp, printWeather};

