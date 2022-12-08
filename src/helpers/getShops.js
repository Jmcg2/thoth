import db from '../../knex/knex';

const handleShops = async () => {
	const data = await db('shops').select();
	return data;
};

export default handleShops;
