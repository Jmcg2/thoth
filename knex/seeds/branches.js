/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex('branches').del();
	await knex('branches').insert([
		{ name: 'Air Force' },
		{ name: 'Navy' },
		{ name: 'Army' },
		{ name: 'Space Force' },
		{ name: 'Marines' }
	]);
}
