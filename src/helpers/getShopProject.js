import db from '../../knex/knex';

const handleShopsProjects = async () => {
	const data = await db('projects')
		.join('shops', 'projects.shop_id', 'shops.id')
		.select(
			'tags',
			'lang',
			'short_desc',
			'name',
			'description',
			'location',
			'contact',
			'img'
		);
	return data;
};

export default handleShopsProjects;
