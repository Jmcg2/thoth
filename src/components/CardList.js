// import Link from 'next/link';
// import Image from 'next/image';
import Card from './Card';

const CardList = ({ data, data_type }) => {
	return (
		<>
			<div className="grid justify-center grid-flow-row gap-2 mt-5 w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{data.map((shop, index) => (
					<Card key={index} data={shop} index={index} data_type={data_type} />
				))}
			</div>
		</>
	);
};

export default CardList;
