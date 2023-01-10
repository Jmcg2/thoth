import handleShops from '../../helpers/getShops';
import findShop from '../../helpers/findShop';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import CardList from '../../components/CardList';

const shopDetails = ({ shop }) => {
	const notify = () => {
		toast('Contact Copied!', {
			duration: 1000,
			position: 'bottom-center',
			style: {
				background: '#373A40',
				color: '#F8F9FA'
			}
		});
	};
	return (
		<>
			<div className="card text-center flex mt-4 py-4 flex-row">
				<div className="p-4 border-r border-slate-500">
					<Image
						className="mx-auto"
						src={`/images/${shop.img}.png`}
						alt="shop logo"
						width={200}
						height={200}
					/>
					<h1 className="text-3xl">{shop.name}</h1>
					<h3 className="text-2xl">
						Contact:&nbsp;
						<span
							className="hover:cursor-pointer"
							onClick={(e) => {
								notify();
								navigator.clipboard.writeText(
									e.currentTarget.innerText.replace('Contact: ', '')
								);
							}}>
							{shop.contact}
						</span>
					</h3>
					<h3 className="text-2xl">{shop.location}</h3>
					<Toaster />
				</div>
				<div className="my-auto p-5">
					<h3 className="text-left text-lg font-bold pb-2">{`Description:`}</h3>
					<p className="text-left">{shop.description}</p>
				</div>
			</div>
			<div className="card">
				<div>
					<CardList data={shop.projects} data_type="Project" />
				</div>
			</div>
		</>
	);
};

export const getStaticPaths = async () => {
	const shops = await handleShops();

	const paths = await shops.map((shop) => ({
		params: { shop: shop.name }
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const shop = await findShop(params.shop);

	return {
		props: { shop }
	};
};

export default shopDetails;
