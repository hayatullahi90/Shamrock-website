import React from 'react';
import Image2 from '../../assets/shecreate.jpg';
import Image3 from '../../assets/pic1.jpg';
import Image4 from '../../assets/pic2.jpg';
import Image5 from '../../assets/pic3.jpg';
import Image6 from '../../assets/pic4.jpg';
import Image11 from '../../assets/transparency.svg';
import Image12 from '../../assets/excellence.svg';
import Image13 from '../../assets/stepping.svg';
import Image14 from '../../assets/fittingpieces.svg';
import Image15 from '../../assets/woman.svg';
import Image16 from '../../assets/board_team2.jpg';
import Image17 from '../../assets/board_team1.jpg';
import Image18 from '../../assets/board_team4.jpg';
import Image19 from '../../assets/board_team3.jpg';
import AboutCard from '../AboutCard';
import Image21 from '../../assets/partner-1.jpg';
import Image22 from '../../assets/partner-2.jpg';
import Image23 from '../../assets/partner-3.jpg';
import Image24 from '../../assets/partner-4.jpg';
import Image25 from '../../assets/partner-5.png';
import Image26 from '../../assets/partner-6.jpg';

const About = () => {
  return (
    <div className='lg:px-24 lg:py-20 md:px-16 md:py-10 sm:px-12 sm:py-8'>
      <div className='mb-5 grid lg:grid-cols-12 md:grid-cols-6 gap-4'>
        <div className='col-span-6'>
          <h1 className='text-blue-900 text-7xl'>Hi there, we're</h1>
          <h1 className='text-pink-700 text-6xl'>Shamrock Innovations</h1>
          <p className='text-2xl text-blue-900 font-bold mt-10'>Shamrock Innovations is a women and youth-centered innovation hub in Kano, established in 2019, dedicated to empowering the next generation of leaders in business and technology. We provide a dynamic space where women and youth can collaborate, innovate, explore, and create solutions that address real-world challenges. Our hub fosters growth through education, mentorship, and hands-on learning, offering access to a professional, supportive environment where ideas flourish, and businesses thrive; all built on the foundation of a powerful, inclusive community.</p>
        </div>
        <div className='col-span-6'>
          <img className='h-auto w-auto rounded-xl' src={Image2} />
        </div>
      </div>

      <div className='grid lg:grid-cols-12 md:grid-cols-8 gap-4'>
        <div className='col-span-5 '><img className=' h-72 w-full rounded-xl' src={Image3}/></div>
        <div className='col-span-3 ' ><img className=' h-72 w-full rounded-xl' src={Image4}/></div>
        <div className='col-span-4'><img className=' h-72 w-full rounded-xl' src={Image5}/></div>
        <div className='col-span-4'><img className=' h-72 w-full rounded-xl' src={Image6}/></div>
        <div className='col-span-5'><img className=' h-72 w-full rounded-xl' src={Image3}/></div>
        <div className='col-span-3'><img className=' h-72 w-full rounded-xl' src={Image5}/></div>
      </div>

     <div className='grid grid-flow-row mt-40 mb-20'>
       <div className='col-span-6'>
        <h1 className='text-blue-800 font-bold text-3xl'>Our core values</h1>
       </div>
       <div className='col-span-6'>
         <p className='text-gray-500 text-2xl'>Our core values are the fundamental beliefs of a person or<br/> organization geeks academy. We help people understand the<br/> difference between right and wrong.</p>
     </div>
    </div>
    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <AboutCard headingClassName={"text-green-700 text-3xl font-bold"}  image={Image11} value="Transparency" description="We belive in honesty and open communication."/>
      <AboutCard headingClassName={"text-yellow-500 text-3xl font-bold"} image={Image12} value="Excellence" description="We strive to produce the best products and services."/>
      <AboutCard headingClassName={"text-green-400 text-3xl font-bold"} image={Image13} value="Goal Driven" description="We are focused and motivated by our work."/>
      <AboutCard headingClassName={"text-red-500 text-3xl font-bold"} image={Image14} value="Innovation" description="we are trailblazers in innovation."/>
      <AboutCard headingClassName={"text-indigo-500 text-3xl font-bold"} image={Image15} value="Creative" description="we are masters of creativity"/>
    </div>

      <div className='mt-40 mb-20'>
        <h1 className='text-blue-800 font-bold text-3xl'>Our Team</h1>
        <p className='text-gray-500 text-2xl'>Want to work with some of the best global talent and build a tool used<br/> by all the companies you know and love? Join the Geeks team and<br/> help shape the future of design.</p>
      </div>

     <div className='grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-3 lg:justify-content-center sm:gap-5 md:gap-8 lg:gap-10 place-content-center'>
          <div className='col-span-3 flex flex-col items-center'>
            <img className='h-72 w-72 rounded-full' src={Image16}/>
            <h3 className='text-blue-700'>Sa'adat Aliyu</h3>
            <p className='text-gray-500 text-xl'>Founder</p>
          </div>
          <div className='col-span-3 flex flex-col items-center'>
            <img className='h-72 w-72 rounded-full' src={Image17}/>
            <h3 className='text-blue-700'>Ibrahim S Muhammad</h3>
            <p className='text-gray-500 text-xl'>Head of Operations</p>
          </div>
          <div className='col-span-3 flex flex-col items-center'>
            <img className='h-72 w-72 rounded-full' src={Image18}/>
            <h3 className='text-blue-700'>Abdul Ahmad</h3>
            <p className='text-gray-500 text-xl'>Head of Partnership & Marketing</p>
          </div>
          <div className='col-span-3 flex flex-col items-center'>
            <img className='h-72 w-72 rounded-full' src={Image19}/>
            <h3 className='text-blue-700'>Shafa'atu Aliyu</h3>
            <p className='text-gray-500 text-xl'>Head of Gender, Diversity & Social Inclusion</p>
          </div>
     </div>

     <div>
           <h5 className='text-red-700 mt-40 mb-10 text-center'>OUR PARTNERS</h5>
           <div className='grid lg:grid-cols-12 md:grid-col-8 sm:grid-cols-4 gap-8 justify-content-center place-content-center'>
           <img className='h-24 w-60 col-span-2' src={Image24}/>
           <img className='h-24 w-60 col-span-2'  src={Image22}/>
           <img className='h-24 w-60 col-span-2' src={Image21}/>
           <img className='h-24 w-60 col-span-2' src={Image26}/>
           <img className='h-24 w-60 col-span-2' src={Image25}/>
           <img className='h-24 w-60 col-span-2' src={Image23}/>
           </div>

     </div>
     </div>
  )
}

export default About
