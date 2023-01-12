import db from '../../knex/knex';

const handleShops = async () => {
	return db.transaction(async (trx) => {
		const data = await trx('shops').select('*');

		const shopsWithProjects = Promise.all(
			await data.map(async (item) => {
				const projects = await trx('projects')
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
	});
};

export default handleShops;
