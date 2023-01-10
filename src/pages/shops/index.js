import handleShops from '../../../src/helpers/getShops';
// import handleShopsProjects from '../../../src/helpers/getShopProject';
import CardList from '../../components/CardList';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

export default function Shops({ shops }) {
	const [searchValue, setSearchValue] = useState('');

	let filteredShops = shops.filter((shop) => {
		let searchQuery = Object.values(shop)
			// Check each of the values to see if it is an array
			.map((item) => {
				// Item is array
				if (Array.isArray(item)) {
					// If the items in the array are strings, return the strings
					if (typeof item[0] === 'string') {
						return item.toUpperCase();
						// If the items inside of the array are also arrays get the values from the objects in that array
					} else {
						return item.map((arrItem) => Object.values(arrItem));
					}
					// Item is not an array just return the string
				} else {
					return item;
				}
			})
			// convert multidimensional array to a single level array
			.flat(3);

		if (searchQuery === '') return shop;
		if (searchQuery.join().toUpperCase().includes(searchValue.toUpperCase()))
			return shop;
	});

	return (
		<>
			<div className="mt-5 w-11/12 mx-auto">
				<Dropdown
					className="mx-auto"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<CardList data={filteredShops} />
		</>
	);
}

export const getStaticProps = async () => {
	const shops = await handleShops();

	return {
		props: { shops }
	};
};
