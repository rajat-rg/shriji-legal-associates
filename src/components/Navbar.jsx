import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../asset/slalogo.png'
import { navLinks } from '../static/constant'
import VerticalNav from './VerticalNav'
const Navbar = () => {
    const location = useLocation()
    return (
        <nav className=' border-0 border-b-primary border-b-2' >
            <div className='flex flex-col items-center justify-around    text-primary mx-5 '>
                <div className='p-1 flex justify-between items-center md:w-full'>
                    <Link to='/'><img src={logo} alt="logo" className='w-[10vw] md:w-[30vw] h-auto' /></Link>
                    <div className=''>
                    <VerticalNav/>

                    </div>
                </div>
                <ul className='flex flex-row md:hidden   justify-center  mb-1 w-full'>
                    {navLinks.map((e) => {
                        return <Link to={e.link} key={e.link} className={`${location.pathname===e.link?'bg-primary text-black':'text-primary'}    first:border-l  border border-gray-700 border-y-0 border-l-0 py-4 px-2  underline-offset-4 font-semibold text-xl hover:bg-primary hover:text-black`}><li>{e.name}</li></Link>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar