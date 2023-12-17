import React from 'react'

const Hero = ({img,imgAlign, title, desc, customStyle}) => {
  return (
    <div>
            <div className="hero min-h-[80vh] flex flex-row sm:flex-wrap xs justify-center items-center container">
                <img src={img} alt={title} className={`h-[40%] w-[40%] sm:h-[80%] sm:w-[80%] ${imgAlign==='left'?'inline':'hidden'}`} />
                <div className='m-4'>
                    <h1 className={`${customStyle} text-5xl xl:6xl  font-bold`}>{title}</h1>
                    <p className='text-gray-700 text-lg'>{desc}</p>
                </div>
                <img src={img} alt={title} className={`h-[40%] w-[40%] sm:h-[80%] sm:w-[80%] ${imgAlign==='right'?'block':'hidden'}`} />
            </div>

        </div>
  )
}

export default Hero