import db from '../../knex/knex';

const findProject = async (name) => {
	return db.transaction(async (trx) => {
		const data = await trx('projects')
			.select('*')
			.where({ project_name: name });

		return data[0];
	});
};

const findShop = async (name) => {
	return db.transaction(async (trx) => {
		const data = await trx('shops').select('*').where({ name: name });

		const finalShop = {
			...data[0],
			projects: await db('projects')
				.select('*')
				.where({ shop_id: data[0].id })
				.then((data) => data)
		};

		return finalShop;
	});
};

const handleProjects = async () => {
	return db.transaction(async (trx) => {
		const data = await trx('projects')
			.join('shops', 'shop_id', 'shops.id')
			.select('name', 'project_name', 'tags', 'lang', 'short_desc');

		return data;
	});
};

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

export { findProject, findShop, handleProjects, handleShops };
