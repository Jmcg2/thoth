import findShop from '../../helpers/findShop';

const handler = async (req, res) => {
	const data = await findShop('Conjure');

	res.status(200).json(data);
};

export default handler;
