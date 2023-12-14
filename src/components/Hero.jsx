import React from 'react'

const Hero = ({img,imgAlign, title, desc}) => {
  return (
    <div>
            <div className="hero min-h-screen flex flex-row sm:flex-wrap xs justify-center items-center">
                <img src={img} alt={title} className={`h-[40%] w-[40%] sm:h-[80%] sm:w-[80%] ${imgAlign==='left'?'inline':'hidden'}`} />
                <div className='m-4'>
                    <h1 className='text-5xl xl:6xl  font-bold mb-4'>{title}</h1>
                    <p className='text-gray-700 text-lg'>{desc}</p>
                </div>
                <img src={img} alt={title} className={`h-[40%] w-[40%] sm:h-[80%] sm:w-[80%] ${imgAlign==='right'?'block':'hidden'}`} />
            </div>

        </div>
  )
}

export default Hero