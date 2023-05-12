import React, { useState } from "react"
import Image from "next/image";
import AuthButtons from "./AuthButtons";
import NavLinks from "./NavLinks";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import BannerAccount from "./BannerAccount";
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
            <BannerAccount />
           
            <AboutUs />
        </>
    )
}
export default Navbar