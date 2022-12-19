import handleShops from '../../src/helpers/getShops';
import Image from 'next/image';

export default function Home({ shops }) {
	return (
		<div className="flex justify-around flex-wrap ">
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
					<p className="text-white text-4xl hidden group-hover:absolute top-1/2 right-0 left-0 z-0 p-0 m-auto w-full h-full group-hover:block">
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
