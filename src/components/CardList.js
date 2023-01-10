import Link from 'next/link';
import Image from 'next/image';

const CardList = ({ data }) => {
	return (
		<>
			<div className="grid justify-center grid-flow-row gap-2 mt-5 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{data.map((shop, index) => (
					<Link
						href={`/shops/${shop.name}`}
						className="relative p-2 rounded-lg  bg-slate-800 hover:bg-slate-700 group max-w-md"
						key={index}>
						<Image
							className="group-hover:blur-md group-hover:grayscale-60 transition ease-in-out p-5 mx-auto"
							src={`/images/${shop.img}.png`}
							alt="shop logo"
							width={400}
							height={400}
							priority={index <= 6}
						/>
						<p className="text-white text-4xl hidden group-hover:absolute top-1/2 text-center right-0 z-0 p-0 w-full h-full group-hover:block text-shadow shadow-black font-bold">
							{shop.name}
						</p>
					</Link>
				))}
			</div>
		</>
	);
};

export default CardList;
