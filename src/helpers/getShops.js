import db from '../../knex/knex';

const handleShops = async () => {
	const shops = await db('shops').select();
	const data = await db('shops').select('*');

	const shopsWithProjects = Promise.all(
		await data.map(async (item) => {
			const projects = await db('projects')
				.select('*')
				.where({ shop_id: item.id })
				.then((data) => data);

			return {
				...item,
				projects: projects
			};
		})
	);

	return shopsWithProjects;
};

export default handleShops;
