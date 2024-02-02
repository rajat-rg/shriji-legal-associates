import React from 'react'
import logofull from '../asset/slalogofull.png'
import HomeCarousel from '../components/HomeCarousel'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div>


            <div className='m-4'>

                <div className="hero min-h-[80vh] flex flex-row sm:flex-wrap xs justify-center items-center container">
                    <img src={logofull} alt='sla' className='h-[40%] w-[40%] sm:h-[80%] sm:w-[80%] inline' />
                    <div className='m-4'>
                        <p className=' text-lg pl-3 border-l-4 border-primary'>Shriji Legal Associates is a law firm based in Delhi-NCR, with a mission-driven approach to serve our clients and satisfy their needs. We aim to benefit our clients and give them affordable access to legal counsel. We're here to simplify the law for you, ensuring your rights are protected and justice is served.</p>
                        <div className='mt-6 px-4'>
                            <p className='text-xl text-gray-700'> Ready to start your legal journey with us</p>
                            <button className='bg-primary px-6 py-2 font-semibold rounded-lg text-white my-3 hover:shadow-xl hover:bg-[#2b6e63] shadow-lg focus:outline-none focus:ring focus:ring-black' onClick={() => { navigate('/clientQuery') }} >Let's Begin</button>
                        </div>
                    </div>

                </div>
                <HomeCarousel />
            </div>
            <div className='m-4'>
                <h3 className='font-semibold text-3xl text-center'>Areas of practice</h3>
                <div className='sm:block grid md:grid-cols-2 grid-cols-3'>

                    <div className='p-4 border hover:border-primary m-3'>
                        <h4 className='text-2xl '>family law</h4>
                        <p>the family is a good thing</p>
                        <p className='underline text-primary m-auto text-end'>read more</p>
                    </div>
                    <div className='p-4 border hover:border-primary m-3'>
                        <h4 className='text-2xl '>family law</h4>
                        <p>the family is a good thing</p>
                        <p className='underline text-primary m-auto text-end'>read more</p>
                    </div>
                    <div className='p-4 border hover:border-primary m-3'>
                        <h4 className='text-2xl '>family law</h4>
                        <p>the family is a good thing</p>
                        <p className='underline text-primary m-auto text-end'>read more</p>
                    </div>
                    <div className='p-4 border hover:border-primary m-3'>
                        <h4 className='text-2xl '>family law</h4>
                        <p>the family is a good thing</p>
                        <p className='underline text-primary m-auto text-end'>read more</p>
                    </div>
                    <div className='p-4 border hover:border-primary m-3'>
                        <h4 className='text-2xl '>family law</h4>
                        <p>the family is a good thing</p>
                        <p className='underline text-primary m-auto text-end'>read more</p>
                    </div>
                    
                    
                </div>
                <button className='bg-primary px-6 py-2 font-semibold rounded-lg text-white m-4 hover:shadow-xl hover:bg-[#2b6e63] shadow-lg focus:outline-none focus:ring focus:ring-black ' onClick={() => { navigate('/services') }} >Explore more</button>
            </div>

        </div>
    )
}

export default Home