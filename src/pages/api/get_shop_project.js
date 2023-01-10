import db from '../../../knex/knex';

const handler = async (req, res) => {
	const data = await db('projects').select();
	res.status(200).json(data);
};

export default handler;
