import React, { useEffect, useState } from 'react'

const Disclaimer = () => {
    const [display, setDisplay] = useState('hidden')
    const handleDisplay = ()=>{
        display==='block'?setDisplay('hidden'):setDisplay('block')
    }
    useEffect(() => {
        if(sessionStorage.getItem('disclaimer')!=='shrijiLegalAssociates')
        {
            setDisplay('block')
            sessionStorage.setItem('disclaimer', 'shrijiLegalAssociates');
            setTimeout(() => {
                handleDisplay()
            }, 10000);
        }
      
    }, [])
    
    return (
        <>
            <div className={`${display}  overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full m-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-primary ">
                                Disclaimer
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleDisplay}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.ShrijiLegalAssociates.in, you acknowledge and confirm that you are seeking information relating to Shriji Legal Associates of your own accord and that there has been no form of solicitation, advertisement or inducement by Shriji Legal Associates or its members.
                                
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                             The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Shriji Legal Associates shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Shriji Legal Associates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Disclaimer