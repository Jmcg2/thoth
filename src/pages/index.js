import handleShops from '../../src/helpers/getShops';
import Image from 'next/image';

export default function Home({ shops }) {
	return (
		<div className="flex justify-evenly">
			{shops.map((shop) => (
				<div
					className="text-2xl text-center w-1/3 h-auto p-5 border-solid border-white border-2 m-3 "
					key={shop.id}>
					<h1>{shop.name}</h1>
					<Image
						src={`/images/${shop.img}.png`}
						alt="shop logo"
						width={500}
						height={500}
						layout="responsive"
					/>
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
