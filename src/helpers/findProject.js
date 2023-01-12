import db from '../../knex/knex';

const findProject = async (name) => {
	return db.transaction(async (trx) => {
		const data = await trx('projects')
			.select('*')
			.where({ project_name: name });

		return data[0];
	});
};

export default findProject;
