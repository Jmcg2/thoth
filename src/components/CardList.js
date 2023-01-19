import Card from './Card';

const CardList = ({ data, data_type }) => {
	if (data.length === 0) {
		return (
			<>
				<div className=" mt-5 w-11/12 mx-auto ">
					<p className="text-center text-2xl">{`No ${
						data_type === 'shop' ? 'Shops' : 'Projects'
					} to display`}</p>
				</div>
			</>
		);
	}
	return (
		<>
			<div className="grid justify-center grid-flow-row gap-2 mt-5 w-11/12 mx-auto mb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{data.length === 0 ? (
					<p className="text-center text-2x">No Projects to display</p>
				) : (
					data.map((shop, index) => (
						<Card key={index} data={shop} index={index} data_type={data_type} />
					))
				)}
			</div>
		</>
	);
};

export default CardList;
