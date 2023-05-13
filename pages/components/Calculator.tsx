import { url } from "inspector"

const Calculator = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(/bg-calculator.jpg)`}} className="h-[40vh] w-full opacity-40 bg-fixed"></div>
            <div className="w-[90%] h-[60vh] bg-[#1d1d1d] flex flex-col mx-auto gap-3 justify-center items-center -translate-y-72">
                <div className="text-6xl font-bold text-[#fd961a]">BITCOIN <span className="text-white">CALCULATOR</span></div>
                <div className="opacity-60">FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE CONVERTER</div>
                <div></div>
            </div>

        </>
    )
}

export default Calculator