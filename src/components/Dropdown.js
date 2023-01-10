import useSWRImmutable from 'swr';
import { useState } from 'react';

const Dropdown = ({ onChange }) => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data } = useSWRImmutable('/api/get_auto_terms', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	const [search, setSearch] = useState({
		query: '',
		list: []
	});

	const options = data?.map((term) => ({ value: term, label: term }));

	return (
		<div className="flex justify-center">
			<input
				className="py-2 px-2 w-[600px] rounded text-black focus:outline-none focus:appearance-none dark:text-white"
				list="autocomplete-data"
				placeholder="Search..."
				type="search"
				onChange={onChange}
			/>
			<datalist id="autocomplete-data">
				{data?.map((term, index) => (
					<option key={index} value={term} />
				))}
			</datalist>
			<ul className=""></ul>
		</div>
	);
};

export default Dropdown;

{
	/* <div className="w-1/3 mx-auto">
		// 	<Select */
}
// 		options={options}
// 		inputValue={searchValue}
// 		instanceId="1"
// 		className="text-black"
// 		menuPlacement="auto"
// 		menuPosition="fixed"
// 		placeholder="Search..."
// 		openMenuOnClick={false}
// 		onInputChange={(value, action) => {
// 			if (action.action === 'input-change') setSearchValue(value);
// 		}}
// 		onChange={(e) => {
// 			setSearchValue(e);
// 		}}
// 		isClearable={true}
// 		onCloseResetsInput={false}
// 		onBlurResetsInput={false}
// 		escapeClearsValue={false}
// 		components={{
// 			DropdownIndicator: () => null,
// 			IndicatorSeparator: () => null
// 		}}
// 	/>
// </div>
