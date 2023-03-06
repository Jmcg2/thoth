const getProjectAutoTerms = (projArr) => {
	let autoTags = projArr.map((project) => ({
		tags: project.tags,
		lang: project.lang,
		name: project.project_name
	}));

	let values = autoTags.map((proj) => Object.values(proj)).flat(2);

	let upperCaseValues = values.map((value) => {
		if (typeof value === 'string') return value.toUpperCase();
	});

	let uniqueTerms = [...new Set(upperCaseValues.sort())];

	return uniqueTerms;
};

export default getProjectAutoTerms;
