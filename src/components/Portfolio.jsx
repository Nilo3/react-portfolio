import React from 'react';
import countries from "../assets/portfolio/Countries-App.jpg"
import movies from "../assets/portfolio/movies.jpg"
import rick from "../assets/portfolio/RickAndMorty.jpg"
import weather from "../assets/portfolio/reactWeather.jpg"
import todo from "../assets/portfolio/Todo.jpg"
import cv from "../assets/portfolio/Cv.jpg"
import {Link} from "react-router-dom"

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: todo,
            link: "https://github.com/Nilo3/toDo_App"
        },
        {
            id:2,
            src: weather,
            link: "https://github.com/Nilo3/Weather_App"
        },
        {
            id:3,
            src: movies,
            link: "https://github.com/Nilo3/movies"
        },
        {
            id:4,
            src: rick,
            link: "https://github.com/Nilo3/Rick_And_Morty"
        },
        {
            id:5,
            src: countries,
            link: "https://github.com/Nilo3/Countries-App"
        },
        {
            id:6,
            src: cv,
            link: "https://github.com/Nilo3/curriculum"
        }

    ]




  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen overflow-auto'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center min-h-screen'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work rigth here</p>
            </div>

         
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12  sm:px-0'>
            {
                portfolios.map(({id,src,link})=> (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        
                        <Link to={link} className='px-6 py-3 m-4 duration-200 hover:scale-105'>Code</Link>
                    </div>
                </div>
                ))
            }
                

            </div>
        </div>

    </div>
  )
}

export default Portfolio
