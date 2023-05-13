import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BannerAccount from './components/BannerAccount'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Market from './components/Market'
import BitInfo from './components/BitInfo'
import Calculator from './components/Calculator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BannerAccount />
      <AboutUs />
      <Features />
      <Market />
      <BitInfo />
      <Calculator />
    </main>
  )
}
