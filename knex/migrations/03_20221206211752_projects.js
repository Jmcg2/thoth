/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('projects', (table) => {
		table.increments();
		table.string('project_name');
		table.integer('shop_id');
		table.foreign('shop_id').references('shops.id');
		table.specificType('tags', 'text ARRAY');
		table.specificType('lang', 'text ARRAY');
		table.text('short_desc');
		table.string('project_img');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.alterTable('projects', (table) => {
			table.dropForeign('shop_id');
		})
		.then(() => {
			return knex.schema.dropTableIfExists('projects');
		});
};
