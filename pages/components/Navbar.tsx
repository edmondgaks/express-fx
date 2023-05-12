import React, { useState } from "react"
import Image from "next/image";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import HeroSection from "./HeroSection";
const Navbar = () => {
    return (
        <>
            <div className="flex flex-col w-[100%] p-6 bg-[#1d1d1d] ">
                <div className="flex flex-row gap-10 justify-between place-items-center">
                    <Image src="/logo.png" width={200} height={80} alt="Logoo" />
                    <div className="flex gap-10 text-semibold">
                        <div className="flex flex-col">
                            <div className="font-semibold">9,450 USD</div>
                            <div className="font-light text-xs">Last trade price</div>
                        </div>
                        <div>
                            <div className="font-semibold">+5.26%</div>
                            <div className="font-light text-xs">24 hour price</div>
                        </div>
                        <div>
                            <div className="font-semibold">12.820 BTC</div>
                            <div className="font-light text-xs">24 hour volume</div>
                        </div>
                        <div>
                            <div className="font-semibold">2,231,775 </div>
                            <div className="font-light text-xs">Active traders</div>
                        </div>
                        <div>
                            <div className="font-semibold text-[#fd961a]">26854.84</div>
                            <div className="font-light text-xs">Live bitcoin price</div>
                        </div>
                    </div>
                    <AuthButtons />
                </div>
            </div>
            <NavLinks />
            <div className="flex flex-col bg-[#1d1d1d] h-[40px]">
                <div>Selectioner un language</div>
            </div>
            <HeroSection />
            <div className="w-[90%] h-[30vh] bg-[#1d1d1d] flex flex-row mx-auto py-20 justify-around">
                <div className="flex flex-row gap-3">
                    <Image src="/bitcoin.png" alt="Bitcoint 1" width={20} height={10} />
                    <div className="flex flex-col gap-2">
                        <div>CREATE YOUR ACCOUNT</div>
                        <div className="text-xs text-light">Create your trading account with few and easy steps</div>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <Image src="/bitcoin2.png" alt="Bitcoint 1" width={20} height={10} />
                    <div className="flex flex-col gap-2">
                        <div>FUND YOUR TRADING ACCOUNT</div>
                        <div className="text-xs text-light">Create your trading account with few and easy steps</div>
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <Image src="/bitcoin3.png" alt="Bitcoint 1" width={20} height={10} />
                    <div className="flex flex-col gap-2">
                        <div>WITHDRAW YOUR PROFIT SECURELY</div>
                        <div className="text-xs text-light">Create your trading account with few and easy steps</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar