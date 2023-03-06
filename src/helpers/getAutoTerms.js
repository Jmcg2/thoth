const getAutoTerms = (dataArr) => {
	let values = dataArr.map((proj) => Object.values(proj)).flat(2);

	let upperCaseValues = values.map((value) => {
		if (typeof value === 'string') return value.toUpperCase();
	});

	let uniqueTerms = [...new Set(upperCaseValues.sort())];

	return uniqueTerms;
};

export default getAutoTerms;
