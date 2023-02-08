import handleShops from '../../helpers/getProjects';

const handler = async (req, res) => {
	const data = await handleShops();
	res.status(200).json(data);
};

export default handler;
