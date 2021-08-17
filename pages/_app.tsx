import { ThemeProvider } from 'next-themes';
import NavBar from '../components/NavBar';
import 'styles/global.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<NavBar />
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;