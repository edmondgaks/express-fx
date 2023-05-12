import Image from "next/image"
const BannerAccount = () => {
    return (
        <div className="w-[90%] h-[30vh] bg-[#1d1d1d] flex flex-row mx-auto justify-around gap-10 py-16 px-4 -translate-y-20">
                <Image src="/bitcoin.png" alt="Bitcoint 1" width={60} height={30} />
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Create Your Account</div>
                    <div className="text-sm text-normal text-gray-400">Create your trading account with few and easy steps</div>
                </div>
                <Image src="/bitcoin2.png" alt="Bitcoint 3" width={60} height={30} />
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Fund your trading account</div>
                    <div className="text-sm text-normal text-gray-400">Create your trading account with few and easy steps</div>
                </div>
                <Image src="/bitcoin3.png" alt="Bitcoint 2" width={60} height={30} />
                <div className="flex flex-col gap-2">
                    <div className="font-bold">Withdraw your profit securedly</div>
                    <div className="text-sm text-normal text-gray-400">Create your trading account with few and easy steps</div>
                </div>
            </div>
    )
}

export default BannerAccount