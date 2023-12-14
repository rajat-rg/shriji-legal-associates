import React from 'react'
import {ReactComponent as Instagram} from '../asset/instagram.svg'
import {ReactComponent as Facebook}  from '../asset/facebook.svg'
import {ReactComponent as X} from '../asset/x-twitter.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='py-16 mt-10 text-center border border-t-2'>
      <div className="social flex justify-center items-center self-center">
      <p className='text-gray-500 mr-2'>Follow us on</p>
      <Link to="https://www.instagram.com/rajat__rg" target='_blank'><Instagram height={30} width={30} className='mr-2 hover:fill-pink-700 fill-slate-500' /></Link>
      <Facebook  height={30} width={30} className='mr-2 hover:fill-blue-700 fill-slate-500' />
      <X  height={30} width={30} className='mr-2 hover:fill-black fill-slate-500' />
      
      </div>
      <p className='text-gray-500 mt-6'>&copy; Shriji Legal Associates 2023 </p>
    </div>
  )
}

export default Footer