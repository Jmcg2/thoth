import handleShops from '../../../helpers/getShops';
import findShop from '../../../helpers/findShop';
import Image from 'next/image';
import { LinkIcon } from '@heroicons/react/24/solid';
import ProjectsList from '../../../components/ProjectsList';

const ShopDetails = ({ shop }) => {
	return (
		<>
			<div className="text-center w-11/12 flex py-2 md:flex-row flex-col mx-auto">
				<div className="bg-slate-400 dark:bg-slate-900 rounded-xl p-4 md:w-1/3 w-full">
					<h1 className="text-3xl">{shop.name}</h1>
					<Image
						className="mx-auto "
						src={`/images/${shop.img}.png`}
						alt="shop logo"
						width={200}
						height={200}
					/>
					<h3 className="text-2xl">{shop.location}</h3>
					<div
						className="hover:cursor-pointer w-full "
						onClick={() => {
							window.open(`mailto:${shop.contact}`);
						}}>
						<h3 className="flex justify-center text-xl break-all hover:underline">
							{shop.contact}
							<span className=" my-auto ml-1 h-full">
								<LinkIcon className=" w-5 h-5" />
							</span>
						</h3>
					</div>
				</div>
				<div className="bg-slate-400 dark:bg-slate-900 md:w-2/3 mt-2 md:mt-0 sm:w-full md:ml-2 rounded-xl p-5">
					<h3 className="text-left text-lg font-bold pb-2">{`Description:`}</h3>
					<p className="text-left">{shop.description}</p>
				</div>
			</div>
			<ProjectsList projects={shop.projects} />
		</>
	);
};

export const getStaticPaths = async () => {
	const shops = await handleShops();

	const paths = shops.map((shop) => ({
		params: { shop: shop.name }
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const shop = await findShop(params.shop);

	return {
		props: { shop },
		revalidate: 600
	};
};

export default ShopDetails;
