import React, { useState } from 'react'
import bars from '../asset/bars-solid.svg'
import close from '../asset/xmark-solid.svg'
import { navLinks } from '../static/constant'
import { Link } from 'react-router-dom'
const VerticalNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className=''>
      <img src={bars} onClick={() => setIsOpen(!isOpen)} alt="bars" className={`z-10 hidden w-10 h-10 ${!isOpen ? 'md:block' : 'hidden'}`} />
      <img src={close} onClick={() => setIsOpen(!isOpen)} alt="bars" className={`z-10 hidden w-10 h-10 ${isOpen ? 'md:block' : 'hidden'}`} />
      {isOpen ?

        <div className="absolute right-5 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-primary text-white" aria-orientation="vertical" tabindex="-1">
          {navLinks.map((e) => { return <Link to={e.link} onClick={() => setIsOpen(!isOpen)}><div className='p-2 m-2 border font-semibold text-lg rounded-lg border-white' >
            {e.name}</div></Link> })}
        </div> : ''
      }
    </div>
  )
}

export default VerticalNav