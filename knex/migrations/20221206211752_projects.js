/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	knex.schema.createTable('projects', (table) => {
		table.increments();
		table.string('name', 255);
		table.foreign('shop_id').references('shops.id');
		table.specificType('tags', 'text ARRAY');
		table.specificType('langs', 'text ARRAY');
		table.string('description');
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema
		.alterTable('projects', (table) => {
			table.dropForeign('shop_id');
		})
		.then(() => {
			return knex.schema.dropTableIfExists('projects');
		});
}
