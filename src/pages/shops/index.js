import handleShops from '../../../src/helpers/getShops';
import CardList from '../../components/CardList';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';
import search from '../../helpers/search';

export default function Shops({ shops }) {
	const [searchValue, setSearchValue] = useState('');

	const filteredShops = search(shops, searchValue);

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
			<CardList data={filteredShops} data_type="Shop" />
		</>
	);
}

export const getStaticProps = async () => {
	const shops = await handleShops();

	return {
		props: { shops }
	};
};
