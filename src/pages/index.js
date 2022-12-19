import handleShops from '../../src/helpers/getShops';
import Image from 'next/image';

export default function Home({ shops }) {
	return (
		<div className="flex justify-start flex-wrap w-full">
			{shops.map((shop) => (
				<div
					className="relative p-2 rounded-lg shadow-lg bg-white m-2 group"
					key={shop.id}>
					<Image
						className="group-hover:blur-lg group-hover:grayscale-60 transition ease-in-out peer"
						src={`/images/${shop.img}.png`}
						alt="shop logo"
						width={400}
						height={400}
					/>
					<p className="text-white text-4xl hidden group-hover:absolute top-1/2 text-center right-0 z-0 p-0 w-full h-full group-hover:block text-shadow shadow-black font-bold">
						{shop.name}
					</p>
				</div>
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
