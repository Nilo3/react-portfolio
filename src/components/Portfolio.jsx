import React from 'react';
import movies from '../assets/portfolio/movies.jpg';
import rick from '../assets/portfolio/RickAndMorty.jpg';
import weather from '../assets/portfolio/reactWeather.jpg';
import todo from '../assets/portfolio/Todo.jpg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: todo,
			link: 'https://ecommerce-store-git-main-nilo3.vercel.app/',
			technologies: "Next, Clerk, Shadcn, MongoDb, Cloudinary",
			code: "https://github.com/Nilo3/EcommerceStore"
		},
		{
			id: 2,
			src: weather,
			link: 'https://pruebas-psi-lilac.vercel.app/',
			technologies: "React, Sass, Css, Bootstrap",
			code: "https://github.com/Nilo3/pruebas"
		},
		{
			id: 3,
			src: movies,
			link: 'https://sweet-home-w1rt.onrender.com/',
			technologies: "Vite, React, MongoDb, Tailwind, Css, Firebase, Cloudinary",
			code: "https://github.com/Nilo3/Sweet-Home"
		},
		{
			id: 4,
			src: rick,
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
