import { useEffect, useState } from 'react';

export default function ThemeBtn() {
	const [theme, setTheme] = useState(true);

	useEffect(() => {
		theme ?
			document.body.classList.remove('dark') :
			document.body.classList.add('dark');
	}, [theme]);
		
	return (
		<>
			<h3 className={theme ? 'sr-only' : null}>Light</h3> 

			<input
				id="toggle"
				type="checkbox"
				className="toggle-checkbox"
				onClick={()=>setTheme(!theme)}
			/>

			<label htmlFor="toggle" className="toggle-label">
				<span className="toggle-label-bg"></span>
			</label>

			<h3 className={!theme ? 'sr-only' : null}>Dark</h3> 
		</>
	);
}