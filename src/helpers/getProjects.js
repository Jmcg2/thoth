import db from '../../knex/knex';

const handleProjects = async () => {
	return db.transaction(async (trx) => {
		const data = await trx('projects')
			.join('shops', 'shop_id', 'shops.id')
			.select(
				'name',
				'project_name',
				'tags',
				'lang',
				'short_desc',
				'project_img'
			);

		return data;
	});
};

export default handleProjects;
