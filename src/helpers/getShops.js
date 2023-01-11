import db from '../../knex/knex';
// import connectionHandler from '../../knex/connection-handler';

const handleShops = async () => {
	return db.transaction(async (trx) => {
		// const shops = await trx('shops').select();
		// const shops = await connectionHandler()('shops').select();
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

		// db.destroy();

		return shopsWithProjects;
	});
};

export default handleShops;
