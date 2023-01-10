import Link from 'next/link';
import Image from 'next/image';

const Card = ({ data, index, data_type }) => {
	return (
		<Link
			href={`/shops/${data.name}`}
			className="relative p-2 rounded-lg  bg-slate-800 hover:bg-slate-700 group max-w-md"
			key={index}>
			<Image
				className="group-hover:blur-md group-hover:grayscale-60 transition ease-in-out p-5 mx-auto"
				src={`/images/${
					data_type === 'Shop'
						? data.img
						: data.project_name.toLowerCase().replace(' ', '')
				}.png`}
				alt={`${data_type} logo`}
				width={400}
				height={400}
				priority={index <= 6}
			/>
			<p className="text-white text-4xl hidden leading-tight group-hover:absolute w-fit h-fit text-center right-0 left-0 top-0 bottom-0 m-auto z-0 p-0 group-hover:block text-shadow shadow-black font-bold">
				{data_type === 'Shop' ? data.name : data.project_name}
			</p>
		</Link>
	);
};

export default Card;
