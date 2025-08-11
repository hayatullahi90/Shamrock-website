import React from 'react';
import Image1 from '../../assets/course4.jpeg';
import Image2 from '../../assets/course5.jpeg';
import Image3 from '../../assets/course1.jpeg';
import Image4 from '../../assets/course3.jpeg';
import Image5 from '../../assets/course2.jpg';
import { GoStopwatch } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";
import ClassesCard from '../ClassesCard';

const Classes = () => {
  return (
     <div className='lg:py-16 lg:px-32 md:py-12 md:px-24 sm:py-8 sm:px-16 bg-gradient-to-b from-white to-gray-100'>
          <div className="mb-10 flex flex-col items-center">
          <h5 className='text-red-400 font-bold mb-3'>BROWSE FROM OUR</h5>
          <h3 className="text-blue-900 font-bold text-5xl">Classes</h3>
          <p className='text-gray-700 text-2xl mb-4'>Here are some classes we offer at Shamrock Innovations with their plans and prices.</p>
          </div>
    
          <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <ClassesCard title="Robotic for Kids" time="2 Days/8 Weeks" complexity="easy" image={Image1} price="50000.00"/>
            <ClassesCard title="Kids Coding" time="2 Days/8 Weeks" complexity="easy" image={Image2} price="50000.00"/>
            <ClassesCard title="Data Science For Beginners" time="2 Days/8 Weeks" complexity="easy" image={Image3} price="70000.00"/>
            <ClassesCard title="Programmimng <br/> (Python/Javascript)" time="2 Days/8 Weeks" complexity="mediun" image={Image4} price="70000.00"/>
            <ClassesCard title="kids coding" time="2 Days/8 Weeks" complexity="mediun" image={Image5} price="50000.00"/>     
          </div>                
          
        </div>
  )
}

export default Classes
