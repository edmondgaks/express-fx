import React from "react"
import Image from "next/image";
import AuthButtons from "./AuthButtons";
const Navbar = () => {
    return (
        <div className="flex flex-row  w-[100%] gap-10 p-8 bg-[#1d1d1d] justify-between place-items-cente">
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
    )
}
export default Navbar