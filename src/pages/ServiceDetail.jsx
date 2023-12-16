import React from 'react'
import { services } from '../static/constant'
import { useLocation } from 'react-router-dom'
const ServiceDetail = () => {
    const location = useLocation()
    const slug = location.pathname
    const service = services.filter((e) => (e.id === slug.slice(10)))[0]
    return (
        <div className='flex'>
            <div className='flex min-h-[90vh] md:block items-center justify-around m-5 p-4'>
                <div className=' w-[40vw] md:min-w-full '>
                    <h1 className='text-4xl font-semibold'>{service.title}</h1>
                    <h2 className=' font-light'>
                        {service.desc}</h2>
                </div>
                <img src={service.img} alt="address" className='h-auto w-[40vw] md:min-w-[60vw] md:m-auto md:h-auto' />
            </div>
        </div>
    )
}

export default ServiceDetail