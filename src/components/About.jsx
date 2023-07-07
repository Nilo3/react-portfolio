import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  bg-gradient-to-b from-gray-800 to-black text-white overflow-auto'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center min-h-screen'>
        <div className='text-4xl font-bold inline border-b-4 border-gray-500'> 
            <p>About </p>
        </div>

        <p className='text-xl mt-20'>
            I am a passionate Full Stack web developer, ready to take on new challenges in the technology industry. Since a young age, technology has been my passion, and I am now excited to turn that interest into a rewarding career.
        </p>

        <br />

        <p className='text-xl'>Throughout my journey, I have acquired extensive knowledge in web development and have created various applications that showcase my ability to tackle projects from start to finish. Although my experience may be considered "fresh" in the professional field, it has not diminished my enthusiasm or dedication.</p>
        <br />
        <p className='text-xl'>I am a self-learner who has invested countless hours in learning and refining my technical skills. My determination and passion drive me to face challenges and find creative solutions. I am always open to learning new technologies and tools, and I adapt quickly to changes.</p>
        <br />
        <p className='text-xl'> While my path has been different from many others, my passion and dedication have led me to become a competent web developer. I am eager to join an energetic and collaborative team where I can learn and grow professionally, bringing my unique skills and perspectives.</p>
        <br />
        <p className='text-xl'>I am excited about the opportunities the technology industry has to offer and I am ready to embark on this new and exciting chapter!</p>
      </div>
    </div>
  )
}

export default About
