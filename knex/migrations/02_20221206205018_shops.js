/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('shops', (table) => {
		table.increments();
		table.integer('branch_id');
		table.foreign('branch_id').references('branches.id');
		table.text('name');
		table.text('description');
		table.text('location');
		table.text('contact');
		table.text('img');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.alterTable('shops', (table) => {
			table.dropForeign('branch_id');
		})
		.then(() => {
			return knex.schema.dropTableIfExists('shops');
		});
};
