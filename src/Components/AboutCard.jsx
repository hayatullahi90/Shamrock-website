import React from 'react'

const AboutCard = ({image, value, description, headingClassName}) => {
  return (
    <div className="card p-0 rounded-xl overflow-hidden border-2">
              <img className="h-fit" src={image}/>
              <div className="card-body px-4 py-4 my-12">
              <h1 className={`text-green-700 ${headingClassName}`}>{value}</h1>
              <p className='text-gray-500 text-xl'>{description}</p>
              </div>
              </div>
  )
}

export default AboutCard;