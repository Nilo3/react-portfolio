import React from 'react';
import MovieBox from '../assets/portfolio/MovieBox.jpg'
import ecopetrol from '../assets/portfolio/Ecopetrol.jpg';
import Nike from '../assets/portfolio/Nike.jpg';
import Saia from '../assets/portfolio/Saia.jpg';
import Nefro from '../assets/portfolio/Nefro.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: ecopetrol,
			link: 'https://www.eiacampoguamal.com/',
			technologies: "Next, Aws, Tailwind, Typescript",
			code: "https://github.com/Brace-Developers/estudio-guamal-web"
		},
		{
			id: 2,
			src: Saia,
			link: 'https://saia.ar/',
			technologies: "React, Tailwind, Javascript",
			code: "https://github.com/Brace-Developers/estudio-guamal-web"
		},
		{
			id: 3,
			src: Nefro,
			link: 'https://develop.premiumhct.com/',
			technologies: "Next, Nest, Tailwind, Typescript, Aws",
			code: "https://github.com/Brace-Developers/nefroproteccion"
		},
		{
			id: 4,
			src: MovieBox,
			link: 'https://pruebas-psi-lilac.vercel.app/',
			technologies: "React, Sass, Css, Bootstrap",
			code: "https://github.com/Nilo3/pruebas"
		},
		{
			id: 5,
			src: Nike,
			name: "Nike Clone Only Front",
			technologies: "React, Tailwind",
			link: 'https://nikepagenilo.netlify.app/',
			code: "https://github.com/Nilo3/nikeclonefront"
		},
	];

	return (
		<div
			name='portfolio'
			className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen overflow-auto'
		>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center min-h-screen'>
				<div className='pb-8 '>
					<p className='text-4xl font-bold inline border-b-4 border-gray-500'>
						Portfolio
					</p>
					<p className='py-6'>Check out some of my work rigth here</p>
				</div>

				<div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12  sm:px-0'>
					{portfolios.map(({ id, src, name, link, code }) => (
						<div
							key={id}
							className='shadow-md shadow-gray-600 rounded-lg'
						>
							<img
								src={src}
								alt=''
								className='rounded-md duration-200 hover:scale-105'
							/>
							<div className='flex items-center justify-center'>
								<Link
									to={link}
									className='px-6 py-3 m-4 duration-200 hover:scale-105'
								>
									Demo
								</Link>
								<Link
									to={code}
									className='px-6 py-3 m-4 duration-200 hover:scale-105'
								>
									Code
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
