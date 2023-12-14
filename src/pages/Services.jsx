import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../static/constant'
const Services = () => {
  return (
    <div className='grid gap-4 grid-cols-3'>
        {
            services.map((s)=>{
                return (
                    <div className='w-1/4'>
                        <ServiceCard title={s.title} shortdesc={s.short_desc} desc={s.desc} img={s.img} />
                    </div>
                )
                

            })
        }
    </div>
  )
}

export default Services