const Dropdown = ({ onChange, termData }) => {
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
				{termData?.map((term, index) => (
					<option key={index} value={term} />
				))}
			</datalist>
			<ul className=""></ul>
		</div>
	);
};

export default Dropdown;
