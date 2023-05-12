import React, { useState } from "react";
import Image from "next/image";
const slides = [
    {
        url: "/bg1.jpg",
        desc1: "SECURE",
        desc2: "EASY WAY",
        description: "AND",
        small: "TO INVESTMENT"
    },
    {
        url: "/bg2.jpg",
        desc1: "RELIABLE",
        desc2: "TRUST",
        description: "INVESTMENT",
        small: "YOU CAN"
    }
];
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Link from "next/link";
const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newSlide);
    }
    return (
        <>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className="w-[100%] h-[90vh] flex flex-col justify-center">
                {currentIndex == 0 ? (
                    <>
                    <div className="flex flex-row gap-3 justify-center">
                        <span className="text-[#fd961a] text-6xl font-bold">{slides[currentIndex].desc1}</span>
                        <span className="text-6xl font-bold text-white">{slides[currentIndex].description}</span>
                        <span className="text-[#fd961a] text-6xl font-bold">{slides[currentIndex].desc2}</span>
                    </div>
                    <div className="flex flex-row justify-center text-6xl text-white font-bold">{slides[currentIndex].small}</div>
                    <div className="flex flex-row justify-center">
                        <Link href="/signup" className="bg-transparent border-2 border-[#fd961a] text-[#fd961a] px-10 py-3 mt-10 text-white font-normal w-36">REGISTER</Link>
                    </div>
                    </>
                ): (
                    <>
                    <div className="flex flex-row gap-3 justify-center">
                        <span className="text-[#fd961a] text-6xl font-bold">{slides[currentIndex].desc1}</span>
                        <span className="text-6xl font-bold text-white">{slides[currentIndex].description}</span>
                    </div>
                    <div className="flex flex-row justify-center gap-3 text-6xl text-white font-bold">
                        <span  className="text-6xl font-bold text-white">{slides[currentIndex].small}</span>
                        <span className="text-[#fd961a] text-6xl font-bold">{slides[currentIndex].desc2}</span>
                    </div>
                    <div className="flex flex-row justify-center">
                        <Link href="/signup" className="bg-transparent border-2 border-[#fd961a] text-[#fd961a] px-10 py-3 mt-10 text-white font-normal w-36">REGISTER</Link>
                    </div>
                    </>
                )}
               
            <div className="absolute top-[70%]  left-0 text-2xl rounded-full bg-black/20 text-orange-300 p-2 cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="absolute top-[70%]  right-0 text-2xl rounded-full bg-black/20 text-orange-300 p-2 cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>    
        </>
    )
}

export default HeroSection