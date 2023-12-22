import React from 'react'
import address from '../asset/address.svg'
import email from '../asset/email.svg'
import phone from '../asset/phone.svg'
const ContactUs = () => {
  return (
    <div>
      <div className='flex min-h-[90vh] md:block items-center justify-around m-5 p-4'>
        <div className=' w-[40vw] md:min-w-full '>
          <h1 className='text-4xl font-semibold'>Reach out to us at</h1>
          <h2 className='text-4xl font-light'>
            iThum Tower, Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301</h2>
          <div className='flex justify-evenly p-3 font-n text-lg md:block '>
            <span className='flex'>
              <img className='mx-3' src={email} alt="email" /> <p>shriji@gmail.com</p> </span>|
            <span className='flex'>
              <img src={phone} alt="phone" className='mx-3' /> <p>98412512351</p> </span>
          </div>
        </div>
        <img src={address} alt="address" className='h-auto w-[40vw] md:min-w-[60vw] md:m-auto md:h-auto' />
      </div>
    </div>
  )
}

export default ContactUs