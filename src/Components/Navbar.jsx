import React, {useState} from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";


function Navbar(){
    const [nav, setNav]=useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }



    return(
        <div className="z-50 flex flex-row justify-center items-center sticky top-0 bg-white text-white font-bold p-4">
            <ul className="hidden md:flex flex-row gap-10 items-center justify-center">
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/'>Home</Link> 
            </li>
            <li onMouseLeave={() => setDropdown(false)} onMouseEnter={()=> setDropdown(true)} >
                <Link className='flex flex-row gap-1 items-center justify-center no-underline text-black hover:text-pink-500' to='/'>Programmes <IoIosArrowDown size={16}/></Link>
                 <ul className={`${dropdown? "flex flex-col gap-2 bg-white py-3 px-3 justify-center absolute" : "hidden"} `}>
                    <li>
                        <Link className='hover:text-pink-500 no-underline text-black' to='/west'>North-West Health Hackhaton 2024</Link>
                    </li>
                     <li>
                        <Link className='hover:text-pink-500 no-underline text-black' to='/kids'>Kids Programmes</Link>
                    </li>
                     <li>
                        <Link className='hover:text-pink-500 no-underline text-black' to='/classes'>Our Classes</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/'>Blog</Link>
            </li>
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/'>Startups</Link>
            </li>
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/students'>Students</Link>
            </li>
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/about'>About Us</Link>
            </li>
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link className='hover:text-pink-500 no-underline text-black' to='/signup'>Sign Up</Link>
            </li>
            </ul>
            <div className="md:hidden" onClick={handleNav}>
                {nav? <FaTimes/> : <HiMenu/>}
            </div>
            <ul className={`${nav? "text-white opacity-100 transform translate-x-0" : "opacity-0 transform -translate-y-full"}
            transition-translate top-0 left-0 absolute h-screen w-60 flex flex-col justify-center items-center text-yellow-900 text-2xl`} onClick={()=> setNav(false)}>
            <li>
                <Link to='/location'>Location</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='menu'>Menu</Link>
            </li>
            <li>
                <Link to='services'>Services</Link>
            </li>
            </ul>
        </div>
    )
}
export default Navbar;