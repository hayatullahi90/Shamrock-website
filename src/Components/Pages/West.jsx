import React from 'react';
import Image1 from '../../assets/UpdatedHackathonPrize.jpg';
import Image2 from '../../assets/ncc.jpg';
import Image3 from '../../assets/ehealth.jpg';
import Image4 from '../../assets/zainpay.jpg';

const West = () => {
  return (
    <div>
      <div className='my-5 mx-32'>
        <div className='mb-20 grid grid-flow-col gap-5'>
        <div className='col-span-8'>
          <h1 className='text-blue-700 font-bold text-7xl'>North-west</h1>
          <h1 className='text-pink-600 font-bold text-6xl'>Health Innovations Hackathon</h1>
          <p className='text-gray-500 text-xl mt-4 mb-4'>The North West region of Nigeria faces unique challenges in ensuring accessible and quality healthcare for its diverse population. This hackathon aims to bring together brilliant minds from various backgrounds to develop innovative solutions that address these challenges.</p>
          <div>
            <button className='text-white font-bold bg-black rounded-xl py-3 px-4'>Register Now</button>
          </div>
        </div>
        <div className='col-span-4'>
          <img className='rounded' src={Image1}/>
        </div>
      </div>
      <div className='mb-20'>
        <h1 className='text-blue-800 txet-5xl font-bold text-5xl mb-2'>Objectives</h1>
        <p className='text-gray-500 text-xl'>The objective of this Hackathon is to harness local talent and bring together a diverse group of individuals, including programmers, designers, and healthcare professionals; to collaborate and foster the development of indigenous solutions to address pressing health challenges faced in the North-west region.</p>
        <ul className='decoration-clone'>
          <li className='text-gray-500 text-xl'>Encourage local talents to create innovative, homegrown solutions that address unique health challenges faced in the North.</li>
          <li className='text-gray-500 text-xl'>Foster collaboration between the technology experts, and healthcare professionals to create sustainable and impactful solutions.</li>
          <li className='text-gray-500 text-xl'>Provide a platform for skill development, knowledge sharing, and capacity building among participants, contributing to the growth of the local innovation ecosystem.</li>
          <li className='text-gray-500 text-xl'>Encourage the development of health technology startups by providing a supportive environment for ideation and prototype development.</li>
        </ul>
      </div>
      </div>

      <div className= 'py-28 px-40 bg-gradient-to-b from-white to-gray-100'>
        <div className='row'>
          <div className='mb-10'>
            <h1 className='text-blue-800 font-bold text-5xl'>Focus Area</h1>
          </div>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-4'>
            <h4 className='text-blue-800 font-bold text-xl'>Rural Healthcare Accessibility</h4>
            <p className='text-gray-500 text-xl'>Developing affordable and sustainable solutions for delivering healthcare services to remote and underserved communities. Leveraging technology to bridge the gap between healthcare providers and rural populations.</p>
          </div>
          <div className='col-span-4'>
            <h4 className='text-blue-800 font-bold text-xl'>Maternal and Child Health</h4>
            <p className='text-gray-500 text-xl'>Improving maternal and child health outcomes through innovative approaches. Addressing challenges such as prenatal care, childbirth complications, and childhood diseases.</p>
          </div>
          <div className='col-span-4'>
            <h4 className='text-blue-800 font-bold text-xl'>Disease Prevention and Management</h4>
            <p className='text-gray-500 text-xl'>Developing innovative strategies for disease prevention, early detection, and effective management. Focusing on prevalent diseases in the region, including malaria, tuberculosis, and non-communicable diseases.</p>
          </div>
          <div className='col-span-4'>
            <h4 className='text-blue-800 font-bold text-xl'>Healthcare Infrastructure and Logistics</h4>
            <p className='text-gray-500 text-xl'>Optimizing healthcare supply chains and logistics for efficient distribution of medical supplies and equipment. Enhancing healthcare infrastructure through cost-effective and sustainable solutions</p>
          </div>
          <div className='col-span-4'>
            <h4 className='text-blue-800 font-bold text-xl'>Digital Health Solutions</h4>
            <p className='text-gray-500 text-xl'>Developing affordable and sustainable solutions for delivering healthcare services to remote and underserved communities. Leveraging technology to bridge the gap between healthcare providers and rural populations.</p>
          </div>
          </div>
      </div>

          </div>
      <div className='my-5 mx-32'>
        <div className='grid grid-cols-12 mb-20 gap-6'>
        <div className='col-span-4'>
          <h4 className='text-blue-800 font-bold mb-2 text-2xl'>Benefit</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>Prizes will be awarded to the top 3 performing projects, as determined by the judging panel.</li>
            <li className='text-gray-500 text-xl'>1st Place 1,000,000 2nd Place 300,000 3rd place 200,000</li>
            <li className='text-gray-500 text-xl'>The top 5 will get mentorship & Training on building their startups.</li>
            <li className='text-gray-500 text-xl'>Opportunity to Network with Private and public stakeholders.</li>
            <li className='text-gray-500 text-xl'>Participants tackle real-world challenges, encouraging innovative and creative solutions.</li>
          </ul>
        </div>
        <div className='col-span-4'>
          <h4 className='text-blue-800 font-bold mb-2 text-2xl'>Application Process</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>Step 1 -- Apply and fill out the online application form.</li>
            <li className='text-gray-500 text-xl'>Step 2 -- Register a team( Team is made up of 2-3 participants).</li>
            <li className='text-gray-500 text-xl'>Step 3 -- Once the team lead registers the team, please wait for a follow up email.</li>
            <li className='text-gray-500 text-xl'>Step 4 -- Hackers will be invited for an in-person hackathon.</li>
            <li className='text-gray-500 text-xl'>step 5 -- Questions regarding the competition must be submitted via email to nwhih@shamrockinnovations.com.ng.</li>
          </ul>
        </div>
        <div className='col-span-4'>
          <h4 className='text-blue-800 font-bold mb-2 text-2xl'>Eligibility</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>To be eligible the team lead must be 18 above</li>
            <li className='text-gray-500 text-xl'>Participants must be residents of Kano or can be able to transport Themselves to Kano</li>
            <li className='text-gray-500 text-xl'>All participants must apply through the official Hackathon Link portal.</li>
            <li className='text-gray-500 text-xl'>Applicant must be willing to abide by the rule sets for the hackathon.</li>
          </ul>
        </div>
        <div className='col-span-5'><button className='text-white font-bold text-xl bg-black rounded-xl py-3 px-12'>Register Now</button></div>
      </div>

      <div className='row'>
        <div className='mb-4'><h1 className='text-blue-800 font-bold text-5xl'>Important Dates</h1></div>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-3'>
          <h4 className='text-blue-800 font-bold text-2xl'>Application Open</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>Time: 11:59pm</li>
            <li className='text-gray-500 text-xl'>Date: 24th May - 14th June 2024</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <h4 className='text-blue-800 font-bold text-2xl'>In-person hackathon Participants selected</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>Time: 11:59pm</li>
            <li className='text-gray-500 text-xl'>Date: 17th - 19th June 2024</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <h4 className='text-blue-800 font-bold text-2xl'>Hackathon Starts</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>Time: 9am - 5pm</li>
            <li className='text-gray-500 text-xl'>Date: 25th - 26th June 2024</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <h4 className='text-blue-800 font-bold text-2xl'>Pitching</h4>
          <ul className='list-disc'>
            <li className='text-gray-500 text-xl'>Time: 11:59pm</li>
            <li className='text-gray-500 text-xl'>Date: 27th June 2024</li>
          </ul>
        </div>
        </div>
      </div>
      <div className='mt-20 mb-3'>
        <h1 className='text-blue-800 font-bold text-5xl'>Call For Mentors</h1>
        <p className='text-gray-500 text-xl'>Mentors and skilled experts from all disciplines are welcome. Attend for a couple of hours or the whole days. Mentors can assist teams with their subject matter expertise and experience while enhancing their own skills as leaders, educators, and communicators by guiding rising talent.</p>
        <button className='text-white font-bold bg-black rounded py-2 px-4 mt-3'>Mentor registration</button>
      </div>

      <div className='flex flex-col items-center mt-40'>
        <div className='mb-2'><h1 className='text-blue-800 text-5xl font-bold'>Partners</h1></div>
        <div className='flex flex-row justify-center items-center gap-2'>
          <div><img className='h-fit w-60' src={Image2}/></div>
          <div><img className='h-fit w-60' src={Image3}/></div>
          <div><img className='h-fit w-60' src={Image4}/></div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default West;
