import db from '../../knex/knex';

const findShop = async (name) => {
	const data = await db('shops').select('*').where({ name: name });
	return data[0];
};

export default findShop;
