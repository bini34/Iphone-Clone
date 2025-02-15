import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg } from "../utils"
function Highlights() {
  useGSAP(() => {
    gsap.to('#title', {opacity: 1, y: 0})
    gsap.to('.link', {opacity: 1, y: 0})
  }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5 bg-zinc">
      <div className="screen-max-width">
        <div className="mb- w-full items-end justify-between  ">
        <h1 id="title" className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-1 translate-y-20">
          Get the highlights.
        </h1>
        <div className="flex flex-warp items-end gap-5">
          <p className="text-blue-500 hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20 link gap-2">
            Watch the film
            <img src={watchImg} alt="watch" className="" />
          </p>

        </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
