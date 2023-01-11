import knex from 'knex';
import dbConfig from '../knexfile';

// let cachedConnection;

// export const getDatabaseConnector = () => {
// 	if (cachedConnection) {
// 		console.log('Cached Connection');
// 		return cachedConnection;
// 	}
// 	const configByEnvironment = dbConfig['development'];

// 	if (!configByEnvironment) {
// 		throw new Error(`Failed to get knex configuration for env: development`);
// 	}
// 	console.log('New Connection');
// 	const connection = knex(configByEnvironment);
// 	cachedConnection = connection;
// 	return connection;
// };

const db = knex(dbConfig['development']);
export default db;
