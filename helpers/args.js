const getArgs = (args) => { //получает на вход аргументы и добавляет их в объект, который возвращаеться с ними.
	const res = {};
	const [executer, file, ...rest] = args; //executer & file это первые два аргумента
	rest.forEach((value, index, array) => {
		if (value.charAt(0) == '-') { //первая буква равна дефису
			if (index == array.length - 1) {
				res[value.substring(1)] = true;
			} else if (array[index + 1].charAt(0) != '-') { //следующий аргумент за дефисом,если он не равен так же дефису, то
				res[value.substring(1)] = array[index + 1]; //берём value (то что после первого арга) и откидываем дефис
			} else {
				res[value.substring(1)] = true;
			}
		}
	});
	return res;
};

export {
	getArgs
};