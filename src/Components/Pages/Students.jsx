import React from 'react';
import Image3 from '../../assets/logo.png';

const Students = () => {
  return (
    <div className='mx-4'>
      <div className='bg-black flex flex-row justify-between gap-96 items-center px-96 mb-10 mt-0 py-2'>
        <img className='h-20 w-40' src={Image3}/>
        <div className='text-white gont-bold text-2xl'>SHAMROCK INNOVATION</div>
      </div>
      <div className='bg-blue-50 h-auto items-center px-64 py-24'>
        <div className='bg-white flex flex-col px-24 py-10'>
          <h2 className='text-center mb-10'>ENTER YOUR CODE TO HAVE ACCESS</h2>
          <input className='bg-blue-50 p-1 font-bold' placeholder='ENTER YOUR CODE'/>
          <button className='text-black bg-gray-100 font-bold px-2 mt-4 w-16 rounded-sm text-center'>Check</button>
        </div>
      </div>
    </div>
  )
}

export default Students
