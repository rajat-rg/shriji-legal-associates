import React, { useState } from 'react'
import contactus from '../asset/contactus-new.svg'
const ClientQuery = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' })
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (contactForm.name.length < 3 || contactForm.email.length < 3 || contactForm.phone.length < 10 || contactForm.message.length < 3) {
      console.log('Provide valid inputs')
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactForm.email))
    {
      console.log('valid na h email')
    }
    else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i.test(contactForm.phone))
    {
      console.log('valid na h phone')
    }
    else {

      const response = await fetch('http://localhost:5000/contact',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactForm)
        })
      const data = await response.json()
      console.log(data.data)
      setContactForm({ name: '', email: '', phone: '', message: '' })
    }
  }
  return (
    <div className='flex min-h-[90vh] md:block items-center justify-around m-5 p-5 '>

      <img src={contactus} alt='contact us' className='h-auto w-[40vw] md:min-w-[60vw] md:m-auto md:h-auto' />

      <div className="form flex-col flex justify-evenly p-3 font-n text-lg md:block ">

        <h3 className='text-3xl mb-1'>Connect with us</h3>
        <h4 className='text-lg mb-3 font-light'>Send us your message and we will get back to you</h4>
        <form action="" className='flex flex-col'>

          <label htmlFor="name">Name</label>
          <input className='bg-transparent border border-b-primary-500 border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-b-black mb-2 p-2'
            type="text" name="name" id="name" required
            value={contactForm.name} onChange={(e) => { setContactForm({ ...contactForm, [e.target.name]: e.target.value }) }} />
          <label htmlFor="email">Email</label>
          <input className='bg-transparent border border-b-primary-500 border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-b-black mb-2 p-2'
            type="email" name="email" id="email" required
            value={contactForm.email} onChange={(e) => { setContactForm({ ...contactForm, [e.target.name]: e.target.value }) }} />
          <label htmlFor="phone">Phone</label>
          <input className='bg-transparent border border-b-primary-500 border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-b-black mb-2 p-2' required
            type="text" name="phone" id="phone"
            value={contactForm.phone} onChange={(e) => { setContactForm({ ...contactForm, [e.target.name]: e.target.value }) }} />
          <label htmlFor="message">Message</label>
          <textarea className='bg-transparent border border-b-primary-500 border-b-2  focus:outline-none focus:border-b-black mb-2 p-2'
            type="text" name="message" id="message" aria-required
            value={contactForm.message} onChange={(e) => { setContactForm({ ...contactForm, [e.target.name]: e.target.value }) }} />
        <button className='bg-primary px-6 py-2 font-semibold rounded-lg text-white my-3 hover:shadow-xl hover:bg-[#2b6e63] shadow-lg focus:outline-none focus:ring focus:ring-black '
        onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ClientQuery