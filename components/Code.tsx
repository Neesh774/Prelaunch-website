import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';

export default function Code({
	code,
	plugins,
	language,
	className
}: {
	code: string;
	plugins?: string[];
	language: string;
	className?: string;
}) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return (
		<pre className={`${className} ${!plugins ? '' : plugins.join(' ')}`}>
			<code className={`language-${language}`}>{code.trim()}</code>
		</pre>
	);
}
