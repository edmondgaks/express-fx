import Image from "next/image"

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full items-center gap-3 justify-center">
                <div className="text-4xl font-bold">ABOUT <span className="text-[#fd961a]">US</span></div>
                <div className="text-sm font-light opacity-70">A COMMERCIAL WEBSITE THAT POINTS YOU TO THE FUTURE OF INVESTMENT</div>
                <div className="flex justify-around w-[100%] mt-14">
                    <Image src="/about-us.png" alt="about us" width={300} height={300} />
                    <div className="flex flex-col gap-3 w-[50%]">
                        <div className="text-3xl font-semibold">WE ARE EXPRESSFXMARKET</div>
                        <div className="text-base font-light opacity-70">ExpressFxMarket INC is a fully certified and licensed company under the name Bitcoin Explore Limited with Company number 11188393. Established in 2017 first as a cloud mining provider and listed as one of the best sites to double bitcoins in 2018, we have now become a fully functional and trusted cryptocurrency investment company, verified by a lot of users. ExpressFxMarket offers automatic BTC doubling programme, providing access to high liquidity orderbook for top currency pairs in the market. Our investment options are made to meet the needs and requirements of all investors with various ranges of financial capabilitties.</div>
                        <div></div>
                    </div>
                </div>
        </div>
    )
}

export default AboutUs