import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-around bg-black py-4 px-3 text-[#F49200] '>
            <div className='p-1'>Shriji Legal Assocoates</div>
            <ul className='flex flex-row gap-3'>
                <Link to='/' className='hover:text-white text-[#F49200] hover:underline p-1 underline-offset-4 '>Home</Link>
                <Link to='/services' className='hover:text-white text-[#F49200] hover:underline p-1 underline-offset-4 '>Our Services</Link>
                <Link to='/about' className='hover:text-white text-[#F49200] hover:underline p-1 underline-offset-4 '>About Us</Link>
                <Link to='/contact' className='hover:text-white text-[#F49200] hover:underline p-1 underline-offset-4 '>Contact Us</Link>
            </ul>
        </nav>
    )
}

export default Navbar