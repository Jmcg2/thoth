const getAutoTerms = (dataArr) => {
	let values = dataArr.map((proj) => Object.values(proj)).flat(2);

	let UpperCaseValues = values.map((value) => {
		if (typeof value === 'string') return value.toUpperCase();
	});

	let uniqueTerms = [...new Set(UpperCaseValues.sort())];

	return uniqueTerms;
};

export default getAutoTerms;
