import React from 'react'
import HeroImage from "../assets/heroImage.png";
import {RiArrowRightSLine} from "react-icons/ri"
import {Link} from "react-scroll"

const Home = () => {
    return (
      <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:justify-between'>
          <div className='flex flex-col justify-center md:w-1/3'>
            <h4 className='text-4xl sm:text-6xl font-bold text-white'>Nilo Echezarreta</h4>
            <br />
            <h4 className='text-1xl sm:text-4xl font-bold text-white'>Full Stack Developer</h4>
            <p className='text-gray-500 py-4 max-w-screen-md'>
              Experienced software developer with a year of expertise in web application development using React, Tailwind, and Node.js. Passionate about creating intuitive and responsive user interfaces.
            </p>
  
            <div>
              <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <RiArrowRightSLine size={25} className='ml-1' />
                </span>
              </Link>
            </div>
          </div>
          <div className='flex justify-center mt-8 md:mt-0'>
            <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
