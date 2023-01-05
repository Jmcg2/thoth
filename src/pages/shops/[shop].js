import handleShops from '../../helpers/getShops';
import findShop from '../../helpers/findShop';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

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
			<div className="card">
				<h1 className="text-4xl">{shop.name}</h1>
				<Image
					className="mx-auto my-4"
					src={`/images/${shop.img}.png`}
					alt="shop logo"
					width={400}
					height={400}
				/>
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
				<Toaster />
			</div>
			<div className="card">
				<h3 className="p-4 pb-0 font-bold">{`Location:`}</h3>
				<p className="p-4 pb-0">{shop.location}</p>
				<h3 className="p-4 pb-0 font-bold">{`Description:`}</h3>
				<p className="p-4">{shop.description}</p>
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
