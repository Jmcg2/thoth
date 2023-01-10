import db from '../../knex/knex';

const findShop = async (name) => {
	const data = await db('shops').select('*').where({ name: name });

	const finalShop = {
		...data[0],
		projects: await db('projects')
			.select('*')
			.where({ shop_id: data[0].id })
			.then((data) => data)
	};

	return finalShop;
};

export default findShop;
