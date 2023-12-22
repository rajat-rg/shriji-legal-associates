import React from 'react'
import { usefulLinks } from '../static/constant'
const UsefulLinks = () => {
  return (
    <div className='container'>
      <h1 className='text-4xl text-center mb-4'>Useful Links</h1>
      <ul className='flex flex-col'>

        {usefulLinks.map((e) => {
          return <a href={`http://${e}`} target='_blank' rel='noreferrer' className='even:bg-gray-300 odd:bg-gray-400 capitalize font-medium text-lg p-2'><li>{e}</li></a>
        })}
      </ul>
    </div>
  )
}

export default UsefulLinks