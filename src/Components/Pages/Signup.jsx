import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Image2 from '../../assets/shecreate.jpg';

const Signup = () => {
  const [firstname, setFirstname]           = useState("");
  const [email, setEmail]                   = useState("");
  const [contact, setContact]               = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [year, setYear] = useState("");

  return (
    <div>
      <div className='grid lg:grid-cols-12 md:grid-cols-6'>
        <div className='col-span-6'>
          <div className='px-40 py-16'>
            <img className='h-12 w-28 mb-10' src={Logo} />
            <img className='h-auto w-auto mb-10' src={Image2} />
            <p className='text-gray-500 text-2xl'>If you are seeking support please visit our support portal before reaching out directly.</p>
          </div>
        </div>

          <div className='col-span-6 bg-pink-100'>
          <form className='px-40 py-24'>
            <div className='pt-6'>
              <label htmlFor='firstname'>First Name:*<br/>
              <input className='w-full py-2 px-2 bg-white' type='text' id='firstname' placeholder='First Name'
                onChange={(e) => setFirstname(e.target.value)} required />
              </label>
            </div>
            <div className='pt-6'>
              <label htmlFor='email'>Email*<br/>
              <input className='w-full py-2 px-2 bg-white' type='email' id='email' placeholder='Email'
                onChange={(e) => setEmail(e.target.value)} required />
              </label>
            </div>
            <div className='pt-6'>
              <label htmlFor='contact'>Phone Number*<br/>
              <input className='w-full py-2 px-2 bg-white' type='tel' id='contact' placeholder='Phone'
                onChange={(e) => setContact(e.target.value)} required />
              </label>  
            </div>
            <div className='pt-6'>
              <label htmlFor='program'>Program*</label>
              <select  className='w-full py-2 px-2 bg-white' id='select' value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)} required >
                <option value="" disabled>Select</option>
                <option>Intern</option>
                <option>SIWES</option>
                <option>Classes</option>
                <option>Events/Programs</option>
                <option>Training</option>
                <option>Visit</option>
              </select>
            </div>
            <div className='pt-6 mb-3'>
              <label htmlFor='year'>Year*</label>
              <input className='w-full py-2 px-2' type='number' id='year' min='1900' max='2025' placeholder='Select Year'
                onChange={(e) => setYear(e.target.value)} required />
            </div>
            <button className='mt-6 px-4 py-2 text-white font-bold rounded-xl bg-blue-800' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;


