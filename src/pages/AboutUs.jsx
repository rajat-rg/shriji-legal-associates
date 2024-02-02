import React from 'react'
import about from '../asset/About us page-amico.svg'
import lawyer from '../asset/Lawyer-rafiki.svg'
import { aboutUs } from '../static/constant'
import Hero from '../components/Hero'

const AboutUs = () => {
    return (
        <div className='container'>
        <Hero img={about} imgAlign={'left'} title={'Shriji Legal Associates'} desc={aboutUs}/>
        <Hero img={lawyer} imgAlign={'right'} title={'Nandan Goyal'} desc={aboutUs}/>
        </div>
        
    )
}

export default AboutUs