import useSWRImmutable from 'swr';

const Dropdown = ({ onChange }) => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	const { data } = useSWRImmutable('/api/get_auto_terms', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	return (
		<div className="flex justify-center">
			<input
				className="py-2 px-2 w-[600px] rounded dark:bg-slate-600 text-black focus:outline-none focus:appearance-none dark:text-white"
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
