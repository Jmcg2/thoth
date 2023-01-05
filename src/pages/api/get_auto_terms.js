import db from '../../../knex/knex';

const handleAutoTerms = async (req, res) => {
	const projObj = await db('projects').select('project_name', 'tags', 'lang');
	let values = projObj.map((proj) => Object.values(proj)).flat(2);
	let uniqueTerms = [...new Set(values)];
	res.status(200).json(uniqueTerms);
};

export default handleAutoTerms;
