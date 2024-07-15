import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa";
import cv from "/images/cv.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(false)
    const [open, setOpen] = useState(false)
    const items = [
      {link:"Home" , path:"home"},
      {link:"About" , path:"about"},
      {link:"Services" , path:"services"},
      {link:"Skills" , path:"skills"},
      {link:"Resume" , path:"resume"},
      {link:"Portfolio" , path:"portfolio"},
      {link:"Contact" , path:"contact"},

    ]

    const toggle = () => {
      setOpen(!open)
    }
    
  return (
    <div>
      <nav className="bg-gray-950 fixed top-0 w-full text-white flex items-center justify-between px-5 md:px-10 z-30 lg:justify-evenly py-4">
        <div className="font-bold md:text-3xl text-xl cursor-pointer flex items-center">
        <img src={cv} alt="" className="md:h-16 md:w-16 h-10 w-10" /> <span className="text-orange-400">J</span>ahanzaib
        </div>
        <div className="block lg:hidden" onClick={toggle}>
          <button>
            {open ? <RxCross2 className="text-2xl text-gray-500" /> :<RxHamburgerMenu className="text-2xl text-gray-500"/>}
          </button>
        
        
        </div>
        <div className="hidden lg:block">
            <ul className="lg:flex  gap-6 text-lg">
                {
                 items.map(({link, path}) => (
                 
                   <Link to={path} key={path}
                   className={`cursor-pointer ${activeIndex === path ? "text-orange-400" : "text-white"}`}
                   onClick={()=>setActiveIndex(path)}
                   smooth={true} duration={500}
                   >
                  {link}
                   </Link>
                 ))
                }
            </ul>
        </div>
    
        <div className="text-lg lg:block hidden">
            <span className="text-orange-400 flex items-center gap-2"><FaPhoneAlt className="text-white"/>+3134964026</span>
        </div>





        {/* Responsive */}


      <div className={`absolute transition-transform duration-300 ease-in-out transform ${open ? 'translate-y-16 md:translate-y-24' : '-translate-y-full'} top-0 left-0 z-10 w-full border border-gray-800 bg-black`}>
            <ul className=" lg:text-lg ps-5 space-y-3 my-3 lg:hidden">
                {
                 items.map(({link, path}) => (
                 
                   <Link to={path} key={path}
                   className={`cursor-pointer ${activeIndex === path ? "text-orange-400" : "text-gray-500"} my-4`}
                   onClick={()=>setActiveIndex(path)}
                   smooth={true} duration={500}
                   >
                  <div onClick={()=> setOpen(!open)} className="mt-3">
                  {link}
                  </div>
                   </Link>
                 ))
                }
            </ul>
        </div>
      </nav>


      


    </div>
  )
}

export default Navbar
