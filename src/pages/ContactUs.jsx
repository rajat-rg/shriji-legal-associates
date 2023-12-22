import React from 'react'
import contactus from '../asset/contactus-new.svg'
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




      <div className='flex min-h-[90vh] md:block items-center justify-around m-5 p-5 '>

          <img src={contactus} alt='contact us' className='h-auto w-[40vw] md:min-w-[60vw] md:m-auto md:h-auto' />
        
        <div className="form flex-col flex justify-evenly p-3 font-n text-lg md:block ">
          <h3 className='text-3xl mb-1'>Connect with us</h3>
          <h4 className='text-lg mb-3 font-light'>Send us your message and we will get back to you</h4>
          <form action="" className='flex flex-col'>

          <label htmlFor="name">Name</label>
          <input className='bg-transparent border border-b-orange-500 border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-b-black mb-2 p-2'
           type="text" name="name" id="email" />
          <label htmlFor="email">Email</label>
          <input className='bg-transparent border border-b-orange-500 border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-b-black mb-2 p-2'
           type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea className='bg-transparent border border-b-orange-500 border-b-2  focus:outline-none focus:border-b-black mb-2 p-2'
           type="text" name="message" id="message" />
          </form>
          <button className='bg-primary px-6 py-2 font-semibold rounded-lg text-white my-3 hover:shadow-xl hover:bg-[#F48200] shadow-lg focus:outline-none focus:ring focus:ring-orange-300 '>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs