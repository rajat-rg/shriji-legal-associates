import React, { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import right from '../asset/arrow-right-solid.svg'
import left from '../asset/arrow-left-solid.svg'
import img from '../asset/sci.jpg'
import img1 from '../asset/Employee.svg'
const HomeCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const images = [img, img1, img, img1, img, img1, img, img1, img, img1, img, img1, img,]




    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <div>
                <h2 className="text-center text-3xl my-3 font-semibold">Setting example everyday of doing work professionally.</h2>
            </div>
            <ReactSimplyCarousel

                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "space-between",
                        userSelect: "none"
                    }
                }}
                preventScrollOnSwipe
                swipeTreshold={60}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        border: ' 10px solid #39897c',
                        margin: '10px'
                    }
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: <img src={right} className="h-10 w-5 m-auto" alt=">" />,
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center",
                        background: '#39897c',
                        borderRadius: '50%',
                        color: 'white',
                        marginRight: '3em',
                        visibility: windowDimensions.width >= 1200 ? 'visible' : 'hidden'
                    }
                }}
                backwardBtnProps={{
                    children: <img src={left} className="h-10 w-5 m-auto" alt="<" />,
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        alignSelf: "center",
                        background: '#39897c',
                        borderRadius: '50%',
                        color: 'white',
                        marginLeft: '3em',
                        visibility: windowDimensions.width >= 1200 ? 'visible' : 'hidden'
                    }
                }}

                itemsToShow={3}
                speed={400}
                centerMode
            >
                {images.map((item, index) => (
                    <div
                        style={{

                            width: 300,
                            height: 300,
                            border: "10px solid black",
                            textAlign: "center",
                            lineHeight: "240px",
                            boxSizing: "border-box",
                            position: 'relative',
                            margin: '10px'
                        }}
                        key={index}
                    >
                        <img src={item} alt={index} className="h-full w-full bg-black absolute" />
                        <div className={`h-full w-full ${index === activeSlide ? '' : 'bg-[rgba(0,0,0,0.4)]'} absolute`}></div>
                    </div>
                ))}
            </ReactSimplyCarousel>
        </div>
    );
}



export default HomeCarousel