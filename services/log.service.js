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

export {printError, printSuccesss, printHelp};

