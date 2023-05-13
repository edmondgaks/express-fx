import { AiFillAndroid } from "react-icons/ai";
const Market = () => {
    return (
        <div className="flex flex-col w-full items-center gap-3 items-center h-[40vh] justify-center">
            <div className="text-4xl font-bold">EXPRESSFXMARKET  <span className="text-[#fd961a]">APP</span></div>
            <div className="text-sm font-light opacity-70">ENJOY A BETTER EXPERIENCE AS YOU INVEST WITH US USING OUR ANDROID APP</div>
            <button className="w-[35vh] rounded-md justify-center items-center flex flex-col py-4 bg-[#5cb85c]">
                <div className="flex flex-row justify-center">
                    <AiFillAndroid size={24} />
                    <div>Download</div>
                </div>
                <div className="text-xs">ExpressFxMarket Android App</div>
            </button>
        </div>
    )
}

export default Market