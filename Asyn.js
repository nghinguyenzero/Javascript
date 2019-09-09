// asyn await
let sum = (a, b) => {
	return new promise((resolve, reject) => {
		setTimeOut(() => {
			if (typeof (a) !== 'number' || typeof (b !== 'number'))
				reject(new Error('The param must be numeric'));
			resolve(a + b);
		}, 1)
	})
}

let totalAsync = async (a, b) => {
	try {
		let ab = await sum(a, b);
		return ab;
	} catch (error) {
		return
	}
}

let total = (a, b, c) => {
	return sum(a, b).then((res) => sum(res, c))
}

