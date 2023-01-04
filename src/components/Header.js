const Header = () => {
	return (
		<>
			<div className="flex flex-col h-36 w-full max-w-screen-2xl mx-auto top-0 sticky z-10 bg-slate-900">
				<h1 className="text-white text-5xl text-center mt-2">
					SorftWair Shoops
				</h1>
				<div className="w-full my-5 ">
					<button className="btn absolute left-3">Back</button>
					<input
						className="w-1/2 py-2 px-2 rounded text-black absolute right-1/4 focus:outline-none"
						type="text"></input>
					<button className="btn absolute right-3">Theme</button>
				</div>
			</div>
		</>
	);
};

export default Header;
