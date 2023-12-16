import React from 'react'
import {useNavigate } from 'react-router-dom'
const ServiceCard = ({ service}) => {
  // https://storyset.com/illustration/lawyer/rafiki
  const navigate = useNavigate()
  return (
    <div
      className=" block rounded-lg w-fit bg-[rgba(0,0,0,0.2)] border-black border md:max-w-[80vw] sm:min-h-[80vh] md:min-h-[80vh] min-w-fit h-auto  md:min-w-[80vw] md:max-h-[50vh] m-auto">
      <img
        className="rounded-t-lg h-[50vh] w-[100vw]"
        src={service.img}
        alt={service.title} />

      <div className="p-6">
        <h5
          className="mb-2 text-xl font-medium leading-tight">
          {service.title}
        </h5>
        <p className="mb-4 text-base " >
          {service.short_desc}
        </p>
        <button onClick={()=>{navigate(`/services/${service.id}`)}}
        className='bg-primary px-6 py-2 font-semibold rounded-lg text-white my-3 hover:shadow-xl hover:bg-[#F48200] shadow-lg focus:outline-none focus:ring focus:ring-orange-300 '>Read more</button>
        </div>
    </div>
  )
}

export default ServiceCard