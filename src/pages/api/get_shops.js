import db from '../../knex/knex';
const handleShops = async (req, res) => {
	const data = await db('shops').select();
	res.status(200).json(data);
};

export default handleShops;
