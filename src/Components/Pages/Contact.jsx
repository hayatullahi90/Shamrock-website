import React, {useState} from 'react';
import { FiMail } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Image3 from '../../assets/logo.png';

const Contact = () => {

  const[firstname, setFirstname] = useState("");
  const[lastname, setLastname] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[reason, setReason] = useState("");
  const[message, setMessage] = useState("");
  
  return (
    <div className='h-screen'>
      <div className='grid grid-flow-col grid-cols-12'>
        <div className=' mt-0 pt-20 col-span-6'>
          <div className='px-40'>
             <img className='h-12 w-28' src={Image3} />
          <h1 className='text-blue-900 font-sans font-bold text-5xl mt-10 mb-3'>Get In Touch.</h1>
          <p className='text-2xl text-blue-800'>Fill in the form to the right to get in touch with someone on our team, and we will reach out shortly.</p>

          <p className="text-gray-400 text-2xl mt-16 mb-10">If you are seeking support please visit our support portal before reaching out directly.</p>
          <div className='flex flex-row gap-4 mb-6 items-center'>
            <div className='text-pink-800'><BsTelephone  size={24}/></div>
            <span className='text-gray-500 font-bold'>+ (234) 813 816 474 6</span>
          </div>
          <div className='flex flex-row gap-4 mb-6 items-center'>
            <div className='text-pink-800'><FiMail  size={24}/></div>
            <span className='text-gray-500 font-bold'> info@shamrockinnovations.com</span>
          </div>
          <div className='flex flex-row gap-4 mb-6 items-center'>
            <div className='text-pink-800'><CiLocationOn  size={24}/></div>
            <span className='text-gray-500 font-bold'>No 257 Sani kamfani Street Giginyu, Opp. Muhammad Buhari Specialist Hospital Kano, Kano State</span>
          </div>
          </div>
        </div>

          <div className='col-span-6 bg-pink-100'>
            <div className='px-40 py-24'>
              <div className='flex flex-row justify-between items-center'>
              <div className='pt-6'>
                <label className='text-gray-800 font-bold' htmlFor='firstname'>First Name:<span className='text-red-800'>*</span></label>
                <input className='py-2 px-2' typeof='text' id='fname' name='fname' required 
                placeholder='First Name' onChange={(e)=> setFirstname(e.target.value)}/>
              </div>
              <div className='pt-6'>
                <label className='t.ext-gray-800 font-bold' htmlFor='lastname'>Last Name:<span className='text-red-800'>*</span></label>
                <input className='py-2 px-2' type='text' name='lname' id='lname' required
                placeholder='Last Name' onChange={(e)=> setLastname(e.target.value)}/>
              </div>
              </div>
              <div className='flex flex-row justify-between gap-16 items-center'>
              <div className='pt-6'>
                <label className='text-gray-800 font-bold' htmlFor='email'>Email:<span className='text-red-800'>*</span></label>
                <input className='py-2 px-2' typeof='email' id='email' name='email' required 
                placeholder='Email' onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className='pt-6'>
                <label className='text-gray-800 font-bold' htmlFor='phone'>Phone Number:<span className='text-red-800'>*</span></label>
                <input className='py-2 px-2' type='tel' name='phone' id='phone' required
                placeholder='Phone' onChange={(e)=> setPhone(e.target.value)}/>
              </div>
              </div>
              <div className='pt-10'>
                <label className='text-gray-800 font-bold' htmlFor='reason'>Contact Reason:<span className='text-red-800'>*</span></label>
                <select className='w-full py-2 px-2' id='reason' name='reason' value={setReason} onChange={()=> setReason(e.target.value)}>
                  <option value="" disabled selected={setReason ===""}>Select</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>Others</option>
                  <option>SIWES</option>
                </select>
              </div>
              <div className='pt-10 pb-10'>
                <label className='text-blue-800 font-bold' htmlFor='message'>Message:</label>
                <textarea className='w-full py-2 px-2' cols={4} rows={4} placeholder='Message' name='message' id='message' onChange={(e)=> setMessage(e.target.value)} />
              </div>
                <button className='bg-blue-900 text-xl py-2 px-2 rounded-xl text-white w-32'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
