import React from 'react'
import logofull from '../asset/slalogofull.png'
import Hero from '../components/Hero'
const Home = () => {
    return (
        <div className='m-4'>
            
                <Hero img={logofull} imgAlign={'left'} title={''} desc={`Shriji Legal Associates is a law firm based in Delhi-NCR, with a mission-driven approach to serve our clients and satisfy their needs. We aim to benefit our clients and give them affordable access to legal counsel.
                We're here to simplify the law for you, ensuring your rights are protected and justice is served.Let's navigate the legal journey together.`} customStyle={'text-primary'} />
            
            <div className="dsiclaimer text-center mx-auto min-h-full px-14">
                <h2 className='text-4xl text-gray-800 font-bold m3-4'>Disclaimer</h2>
                <p className='font-light text-left text-gray-500'>The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.kanoon-e.in, you acknowledge and confirm that you are seeking information relating to Kanoon-e of your own accord and that there has been no form of solicitation, advertisement or inducement by Kanoon-e or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Kanoon-e shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Kanoon-e.</p>
            </div>
        </div>
    )
}

export default Home