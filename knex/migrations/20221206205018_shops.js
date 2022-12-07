/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable('shops', (table) => {
		table.increments();
		table.foreign('branch_id').references('branches.id');
		table.string('name', 255);
		table.string('description');
		table.string('location', 255);
		table.string('contact');
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema
		.alterTable('shops', (table) => {
			table.dropForeign('branch_id');
		})
		.then(() => {
			return knex.schema.dropTableIfExists('shops');
		});
}
