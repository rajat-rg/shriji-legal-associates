import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/slalogo.png'
const Navbar = () => {
    return (
        <nav className='flex flex-row justify-around bg-black py-4 px-3 text-primary bg-[#000]'>
            <div className='p-1'><Link to='/'><img src={logo} alt="logo" className='w-[8vw] h-auto' /></Link></div>
            <ul className='flex flex-row gap-3'>
                <Link to='/' className='hover:text-white text-primary hover:underline p-1 underline-offset-4 '>Home</Link>
                <Link to='/services' className='hover:text-white text-primary hover:underline p-1 underline-offset-4 '>Our Services</Link>
                <Link to='/about' className='hover:text-white text-primary hover:underline p-1 underline-offset-4 '>About Us</Link>
                <Link to='/contact' className='hover:text-white text-primary hover:underline p-1 underline-offset-4 '>Contact Us</Link>
            </ul>
        </nav>
    )
}

export default Navbar