import React from 'react';
import { GoStopwatch } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";

const ClassesCard = ({title, time, complexity, image, price}) => {
  return (
                    <div className="card p-0 rounded-xl overflow-hidden shadow-lg">
                      <a href='#'><img className='h-fit' src={image} /></a>
                      <div className="card-body py-4 px-4">
                      <h5 className="mb-2 hover:text-pink-500">Robotic For Kids</h5>
                      <div className='flex flex-row items-center gap-1'>
                          <GoStopwatch size={16}/>
                          <p className="text-xl text-gray-500 m-0">{time}</p>
                          <GiNetworkBars size={16} />
                          <p className="text-xl text-gray-500 m-0">{complexity}</p>
                      </div>
                      <p className='text-xl text-gray-500 m-0'>Price - ₦ {price}</p>
                  </div>
                  </div>
  )
}

export default ClassesCard;