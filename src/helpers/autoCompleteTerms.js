import db from '../../knex/knex';

const handleAutoTerms = async () => {
	const data = await db('shops').select('*');
	return data;
};

export default handleAutoTerms;
