import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"
const Navbar = () => {
  return (
    <header className="w-full sm:px-10 px-5 flex justify-between items-center py-5">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((item, index) => (
                <div key={index} className="px-5 text-sm text-gray-500 cursor-pointer hover:text-white transition-all">
                {item}
                </div>
            ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
           <img src={searchImg} alt="search" width={18} height={18}/> 
           <img src={bagImg} alt="bag" width={18} height={18}/> 
        </div>
      </nav>
    </header>
  )
}

export default Navbar
