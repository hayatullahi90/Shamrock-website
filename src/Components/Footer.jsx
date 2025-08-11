import React from 'react';
import Image3 from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelopeOpenFill } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-2 mb-3 mt-40'>
      <div> <img className='h-12 w-28' src={Image3} /></div>
      <div className='flex flex-row mb-2 gap-2'>
        <div><FaFacebook size={24} /></div>
        <div><FaXTwitter size={24} /></div>
        <div><FaInstagram size={24} /></div>
        <div><BsTelephone size={24} /></div>
        <div><BsEnvelopeOpenFill size={24} /></div>
      </div>
      <div className='text-gray-500 text-xl'>© 2024 Shamrock Innovations. All Rights Reserved</div>
    </div>
  )
}

export default Footer;

