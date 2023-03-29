import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const ThemeButton = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, [mounted]);
	const { systemTheme, theme, setTheme } = useTheme();

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className="w-6 h-10"
					role="button"
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className="w-6 h-10"
					role="button"
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return (
		<button className="bg-slate-700 hover:bg-slate-500 text-white font-bold  rounded px-4">
			{renderThemeChanger()}
		</button>
	);
};

export default ThemeButton;
