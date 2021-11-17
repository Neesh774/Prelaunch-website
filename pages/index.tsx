import Link from 'next/link';
import MetaTags from 'components/MetaTags';
import Divider from 'components/Divider';
import Code from 'components/Code';
const snippetCode = `
export default function App(props) {
	return (
		<div>
			<h1> Monad </h1>
			<div>Share snippets in seconds</div>
		</div>
	);
};`;

export default function Home() {
	return (
		<>
			<MetaTags />
			<section className='left'>
				<div id='content'>
					<h1 className='header'>
						Share <span className='blue'>snippets</span> in seconds
					</h1>
					<img src={'/Collaboration.svg'} alt="Collaboration"/>
				</div>
				<Divider />
			</section>
			<section className='foreground right' id='about'>
				<div id='content' className='inline'>
					<pre>
						<Code language='javascript' code={snippetCode} />
					</pre>
					<span className='text'>
						<p className='badge green'>Built Socially</p>
						<h1>Share With Everyone</h1>
						<p>
							It has never been easier to assign tags and share your short code snippets
							with the dev community. Monad was created with SEO in mind so your snippets
							can always be found!
						</p>
					</span>
				</div>
				<Divider foreground={true} />
			</section>
			<section className='left'>
				<div id='content'>
					<span className='text'>
						<p className='badge red'>Collaborate With Ease</p>
						<h1>Work in Private</h1>
						<p>
							Easily share snippets with everyone in Monad, or just a couple people you
							trust. Keep your snippets unlisted, or public to anyone to view.
						</p>
					</span>
					<img src={'/Security.svg'} alt="Security"/>
				</div>
				<Divider />
			</section>
			<section className='foreground right' id='integrations'>
				<div id='content' className='inline'>
					<img src={'/Integrations.svg'} alt="Integrations"/>
					<span className='text'>
						<p className='badge blue'>Use Monad Everywhere</p>
						<h1>Integrations</h1>
						<p>
							Monad will have plenty of integrations with other services like VSCode, Discord,
							and more. You&apos;ll be able to share your snippets from all your favorite code resources.
						</p>
					</span>
				</div>
			</section>
			<div className="footer">
				<footer>
					<div>
						<h3>Monad</h3>
						<Link href="/terms">Terms and Conditions</Link>
						<Link href="/privacy">Privacy Policy</Link>
					</div>
					<div>
						<h3>Contact Us</h3>
						<a href="https://discord.gg/b8ugMm7nvc">Discord</a>
						<a href="https://twitter.com/IliosLabs">Twitter</a>
						<a href="mailto:Kanishq0106@gmail.com">Email</a>
					</div>
				</footer>
				<div className="copyright">Made by Monad © 2021	</div>
			</div>
		</>
	);
}
