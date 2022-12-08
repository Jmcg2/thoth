import { createMocks } from 'node-mocks-http';
import handleShops from '../pages/api/get_shops';

describe('/api/get_shops', () => {
	test('return 5 shop objects', async () => {
		const { req, res } = createMocks({
			method: 'GET'
		});

		await handleShops(req, res);
		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData())).toHaveLength(5);
	});
});
