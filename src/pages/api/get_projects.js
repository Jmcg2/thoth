import db from '../../../knex/knex';

const handleProjects = async (req, res) => {
	const data = await db('projects')
		.join('shops', 'projects.shop_id', 'shops.id')
		.select(
			'shops.name',
			'project_name',
			'tags',
			'lang',
			'projects.id',
			'short_desc'
		);
	res.status(200).json(data);
};

export default handleProjects;
