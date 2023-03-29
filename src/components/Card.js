import Link from 'next/link';
import Image from 'next/image';

const Card = ({ data, index, data_type }) => {
	return (
		<a
			href={
				data_type === 'shop'
					? `/shops/${data.name}`
					: `/projects/${data.project_name}`
			}
			className="relative p-2 rounded-lg  bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-500 group max-w-md w-full mx-auto"
			key={index}>
			<Image
				className="group-hover:blur-md group-hover:grayscale-60 transition ease-in-out p-5 mx-auto w-full h-full"
				src={`/images/${
					data_type === 'shop' ? data.img : data.project_img
				}.png`}
				alt={`${data_type} logo`}
				width={400}
				height={400}
				priority={index <= 6}
			/>
			<p className="text-white text-4xl px-2 hidden leading-tight group-hover:absolute w-fit h-fit text-center right-0 left-0 top-0 bottom-0 m-auto z-0 p-0 group-hover:block text-shadow shadow-black font-bold">
				{data_type === 'shop' ? data.name : data.project_name}
			</p>
		</a>
	);
};

export default Card;
