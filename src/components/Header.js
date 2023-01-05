import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWRImmutable from 'swr';
import { useTheme } from 'next-themes';
import { ArrowLeftIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	const { systemTheme, theme, setTheme } = useTheme();

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className="w-8 h-8"
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className="w-8 h-8"
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	const router = useRouter();
	const path = router.pathname;

	const { data } = useSWRImmutable('/api/get_auto_terms', fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

	return (
		<>
			<div className="flex flex-col h-40 w-full max-w-screen-2xl mx-auto top-0 sticky z-10 bg-slate-900">
				<h1
					className="text-white text-5xl text-center mt-4 hover:cursor-pointer"
					onClick={() => router.push('/shops')}>
					SorftWair Shoops
				</h1>
				<div className="w-full mt-6 ">
					<button
						className={`btn absolute left-3 ${
							path !== '/' ? 'visible' : 'invisible'
						}`}
						onClick={() => {
							router.back();
						}}>
						<ArrowLeftIcon className="h-8 w-8 flex-shrink-0" />
					</button>
					<input
						className="w-1/2 py-2 px-2 rounded text-black absolute right-1/4 focus:outline-none"
						list="autocomplete-data"
						type="text"></input>
					<datalist id="autocomplete-data">
						{data?.map((term, index) => (
							<option key={index} value={term} />
						))}
					</datalist>
					<button className="btn absolute right-3">
						{renderThemeChanger()}
					</button>
				</div>
			</div>
		</>
	);
};

export default Header;
