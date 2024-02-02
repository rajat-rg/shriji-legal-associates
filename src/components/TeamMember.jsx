import React from 'react'
import { useOutletContext } from "react-router-dom"

const TeamMember = () => {

    const {name, heading, desc, img } = useOutletContext()
    console.log(img)
    return (
        <div className='container my-4'>
            <div className='flex justify-around items-center my-4'>
                <h1 className='text-4xl font-semibold capitalize underline decoration-primary mr-6'>{name}</h1>
                <img src={img} alt={name} className='w-[15vw] h-auto border-2 border-primary  rounded-lg' />
            </div>
            <h2 className='text-2xl font-normal capitalize text-primary'>{heading}</h2>
            <p className='text-lg my-1'>{desc}</p>
        </div>
    )
}

export default TeamMember