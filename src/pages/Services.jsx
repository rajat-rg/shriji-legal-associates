import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../static/constant'
const Services = () => {
  return (
    <>
    <div className='text-center my-4'>

        <h1 className='text-6xl mb-2'>Our Services</h1>
        <h2 className='text-4xl mb-2'>We offer services that matters</h2>
        <h3 className='text-xl'>Empowering You with Legal Excellence and Peace of Mind.</h3>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 m-4'>
        {
            services.map((service)=>{
                return (
                    <div className=''>
                        <ServiceCard service={service} />
                    </div>
                )
                
                
            })
        }
    </div>
        </>
  )
}

export default Services