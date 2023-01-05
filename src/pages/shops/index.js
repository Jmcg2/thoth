import handleShops from '../../../src/helpers/getShops';
import Image from 'next/image';
import Link from 'next/link';

export default function Shops({ shops }) {
	return (
		<div className="flex justify-start flex-wrap w-11/12 mx-auto overflow-hidden">
			{shops.map((shop, index) => (
				<Link
					href={`/shops/${shop.name}`}
					className="relative p-2 rounded-lg  bg-slate-800 hover:bg-slate-700 m-2 group"
					key={shop.id}>
					<Image
						className="group-hover:blur-md group-hover:grayscale-60 transition ease-in-out p-5"
						src={`/images/${shop.img}.png`}
						alt="shop logo"
						width={400}
						height={400}
						priority={index <= 1}
					/>
					<p className="text-white text-4xl hidden group-hover:absolute top-1/2 text-center right-0 z-0 p-0 w-full h-full group-hover:block text-shadow shadow-black font-bold">
						{shop.name}
					</p>
				</Link>
			))}
		</div>
	);
}

export const getStaticProps = async () => {
	const shops = await handleShops();

	return {
		props: { shops }
	};
};
