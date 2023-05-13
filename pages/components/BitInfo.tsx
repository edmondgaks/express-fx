import Image from "next/image"
const slides = [
    {
        id: "1",
        imageSrc: "/strong-security.png",
        name: "STRONG SECURITY",
        description: "Protection against DDoS attacks, full data encryption",
    },
    {
        id: "2",
        imageSrc: "/world-coverage.png",
        name: "WORLD COVERAGE",
        description: "Providing services in 99% countries around all the globe"
    },
    {
        id: "3",
        imageSrc: "/payment-options.png",
        name: "PAYMENT OPTIONS",
        description: "Popular methods: Visa, MasterCard, bank transfer, cryptocurrency"
    },
    {
        id: "4",
        imageSrc: "/mobile-app.png",
        name: "MOBILE APP",
        description: "Trading via our Mobile App, Available in Play Store & App Store"
    },
    {
        id: "5",
        imageSrc: "/cost-efficiency.png",
        name: "COST EFFICIENCY",
        description: "Reasonable trading fees for takers and all market makers"
    },
    {
        id: "6",
        imageSrc: "/high-liquidity.png",
        name: "HIGH LIQUIDITY",
        description: "Fast access to high liquidity orderbook for top currency pairs"
    },
]
const BitInfo = () => {
    return (
        <div className="w-[100%] h-[100vh] flex flex-row mb-20">
            <div className="w-[65%] bg-[#303030] px-20 grid grid-cols-2 gap-10 place-content-center">
                {slides.map((slide) => (
                    <div id={slide.id} className="flex flex-col gap-4 items-center">
                        <Image src={slide.imageSrc} alt="strong security" height={30} width={30} />
                        <div className="font-bold text-md">{slide.name}</div>
                        <div className="opacity-70 text-center">{slide.description}</div>
                    </div>
                ))}
                
            </div>
            <div style={{ backgroundImage: `url(/bg-video.jpg)`}} className="w-[35%] opacity-40"></div>
        </div>
    )
}

export default BitInfo