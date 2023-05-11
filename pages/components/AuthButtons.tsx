import Link from "next/link"
const AuthButtons = () => {
    return (
        <div className="flex flex-row justify-center items-center gap-5">
            <Link href="/login" className="font-normal px-8 py-3 text-orange-400 border border-[#fd961a]">SIGN IN</Link>
            <Link href="/signup" className="px-10 py-3 bg-[#fd961a] text-white font-normal">REGISTER</Link>
        </div>
    )
}
export default AuthButtons