import knex from 'knex';
import config from '../knexfile';

const envir = process.env.ENVIRONMENT || 'development';
const db = knex(config.envir);
export default db;
