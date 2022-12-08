/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('shops').del();
	await knex('shops').insert([
		{
			name: 'Conjure',
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			location: 'Scott AFB, Illinois',
			contact: 'aflcmc.hbmc.conjure@us.af.mil',
			branch_id: 1,
			img: 'conjure'
		},
		{
			name: 'Bespin',
			description: 'Not as good as Conjure',
			location: 'Alabamer',
			contact: 'bespin@us.af.mil',
			branch_id: 1,
			img: 'bespin'
		},
		{
			name: 'Kessel Run',
			description: 'Not as good as Bespin',
			location: 'Boston',
			contact: 'kr@us.af.mil',
			branch_id: 1,
			img: 'kesselrun'
		},
		{
			name: 'Army Software Factory',
			description:
				'The Army Software Factory (ASWF) is an Army Futures Command unit that enables Soldiers to become software professionals. We are prototyping a future force design with Soldier-led agile application teams while demonstrating a strategic joint capability for 2040. We find hidden tech talent in the Army and build proficiency and mastery in emerging technologies and processes. This results in an upskilled technical force that will enable the Army to become more data-centric and conduct operations in contested environments. Our process already resulted in applications and tools used by over 20,000 Soldiers. Every six months, we welcome cohorts of 25 and immerse them in fields of software design and development. With over 100 participants as of October 2022, ASWF exposes Soldiers and select Department of the Army (DA) Civilians to industry best practices in the tech hub of Austin, Texas.',
			location: 'Austin, TX',
			contact:
				'usarmy.austin-tx.futures-cmd.mbx.afc-hq-software-factory@mail.mil',
			branch_id: 3,
			img: 'armysoftwarefactory'
		},
		{
			name: 'Scorpion Camp',
			description:
				'Scorpion CAMP directly supports the 552 ACW with mission support software for both web and Electronic Flight Bags. Additionally, we are focused on providing Air Force Mission Defense Teams with tailored software capabilities in order to detect, defend, and deter cyber threats across high-value weapons systems.',
			location: 'Tinker AFB, OK',
			contact: '552ACNS.DOUP.ScorpionCAMP@us.af.mil',
			branch_id: 1,
			img: 'scorpioncamp'
		}
	]);
};
