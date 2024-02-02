import React, { useState } from 'react'
import { ourTeam } from '../static/constant'
import { Link, Outlet, useLocation } from 'react-router-dom'
const OurTeam = () => {
  const location = useLocation()
  const [member, setMember] = useState(ourTeam[0])
  return (
    <div className='min-h-[80vh]'>
      <h1 className='font-semibold text-5xl text-center my-2'>Our Team</h1>
      <div className='flex md:block container justify-between '>
        <div className=' min-w-[25vw] py-4 md:min-w-full '>
          <ul className='flex flex-col'>
            {ourTeam.map((e) => {
              return <Link to={`/ourTeam/${e.id}`} onClick={() => setMember(e)} id={e.id} className={` capitalize font-medium text-lg p-2 active:text-primary active:bg-black ${location.pathname[location.pathname.length - 1] == e.id ? 'bg-black text-primary' : 'even:bg-gray-300 odd:bg-gray-400'}`}><li>{e.name}</li></Link>
            })}
          </ul>
        </div>
        <div className='w-full'>
          <Outlet context={member} />
        </div>
      </div>
    </div>
  )
}

export default OurTeam