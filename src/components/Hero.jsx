import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"
function Hero() {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo)
  useGSAP(() => {
    gsap.to('#hero', {opacity: 1, delay: 1.5})
    gsap.to('#cta', {opacity: 1, y: -50, delay: 1.5})
}, [])
const handelVideoSrcSet = () => {
  if(window.innerWidth > 760) {
    setVideoSrc(heroVideo)
  } else {
    setVideoSrc(smallHeroVideo)
  }
}
useEffect(() => {
  window.addEventListener('resize', handelVideoSrcSet)
 return () => {
   window.removeEventListener('resize', handelVideoSrcSet)
 }
})
  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative flex flex-col items-center justify-center">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
      <p id="hero" className="text-center font-semibold text-3xl text-gray-500 opacity-0 max-md:mb-10">iPhone 15 Pro</p>
      <div className="md:w-10/12 w-9/12">
      <video autoPlay muted playsInline={true} key={videoSrc}className="pointer-events-none w-full">
        <source src={videoSrc}/>
      </video>

      </div>
      </div>
      <div id="cta"
      className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="px-5 py-2 rounded-3xl bg-blue-500 my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
