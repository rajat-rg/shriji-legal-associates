import React from 'react'
import { ReactComponent as Instagram } from '../asset/instagram.svg'
import { ReactComponent as Facebook } from '../asset/facebook.svg'
import { ReactComponent as X } from '../asset/x-twitter.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='py-16 mt-10 text-center border border-t-2'>
      <div className='flex flex-row justify-around border-b-2 pb-2 mb-2'>
        <div className="left">shriji legal associates
          <p>www.shriji.com</p>
          <p>shrii@email.com</p>
          <p>452145214521</p>
          <p>address 123 noida</p>
        </div>
        <div className="right flex flex-row gap-4">
          <div>
            our services
            <p>service 1</p>
            <p>service 1</p>
            <p>service 1</p>
            <p>service 1</p>
          </div>
          <div>
            our team
            <p>service 1</p>
            <p>service 1</p>
            <p>service 1</p>
            <p>service 1</p>
          </div>
        </div>
      </div>
      <div className="social flex justify-center items-center self-center">
        <p className='text-gray-500 mr-2'>Follow us on</p>
        <Link to="https://www.instagram.com/rajat__rg" target='_blank'><Instagram height={30} width={30} className='mr-2 hover:fill-pink-700 fill-slate-500' /></Link>
        <Facebook height={30} width={30} className='mr-2 hover:fill-blue-700 fill-slate-500' />
        <X height={30} width={30} className='mr-2 hover:fill-black fill-slate-500' />

      </div>
      <p className='text-gray-500 mt-6'>&copy; Shriji Legal Associates 2023 </p>
    </footer>
  )
}

export default Footer