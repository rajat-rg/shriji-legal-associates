import React from 'react'
import address from '../asset/address.svg'
import email from '../asset/email.svg'
import phone from '../asset/phone.svg'
import map from '../asset/location-dot-solid.svg'
const ContactUs = () => {
  return (
    <div>
      <div className='flex min-h-[90vh] md:block items-center justify-around m-5 p-4'>
        <div className=' w-[40vw] md:min-w-full '>
          <h1 className='text-4xl font-semibold'>Reach out to us at</h1>
          <h2 className='text-4xl font-light my-4'>
          <img className='mx-3 h-12 w-8 inline' src={map} alt="map" />183, Lawyer's Chamber, Block II, Delhi High Court, New Delhi - 110003 </h2><hr />
          <h2 className='text-4xl font-light my-4'>
          <img className='mx-3 h-12 w-8 inline' src={map} alt="map" />523, Chamber Block, Dwarka District Court, Dwarka, Delhi - 110075 </h2>
          <div className=' justify-evenly p-3 font-n text-lg block '>
            <span className='flex'>
              <img className='mx-3' src={email} alt="email" /> <p>Litigationwork@gmail.com</p> </span>
            <span className='flex'>
              <img src={email} alt="phone" className='mx-3' /> <p>ShrijiLegalAssociates@gmail.com</p> </span>
          </div>
          <div className='flex justify-evenly p-3 font-n text-lg md:block '>
            <span className='flex'>
              <img className='mx-3' src={phone} alt="email" /> <p>+91 9910112385</p> </span>|
            <span className='flex'>
              <img src={phone} alt="phone" className='mx-3' /> <p>+91 7017027091</p> </span>
          </div>
        </div>
        <img src={address} alt="address" className='h-auto w-[40vw] md:min-w-[60vw] md:m-auto md:h-auto' />
      </div>
    </div>
  )
}

export default ContactUs