import React, { useState } from "react"
import { Menu, X } from "lucide-react"
import Adedoyin from "./assets/2-removebg-preview.png"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="">
        <nav className="flex items-center justify-between px-6 mt-[] h-[100px] bg-[#352f2f]">
          
          <div>
            <img src={Adedoyin} width="180px" alt="Adedoyin" />
          </div>

         
          <ul className="hidden lg:flex gap-8 text-[#C4C4C4] font-poppins">
            <li>
              <a href="#" className="bg-[#636060] text-white w-[90px] h-[35px] rounded-md flex items-center justify-center"  > Home </a>
            </li>

            <li>
              <a href="#" className="hover:bg-[#636060] hover:text-white w-[90px] h-[35px] rounded-md flex items-center justify-center"> Service     </a>
            </li>
            
            <li>
              <a
                href="#"
                className="hover:bg-[#636060] hover:text-white w-[120px] h-[35px] rounded-md flex items-center justify-center"
              >
                Find a team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#636060] hover:text-white w-[100px] h-[35px] rounded-md flex items-center justify-center"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#636060] hover:text-white w-[90px] h-[35px] rounded-md flex items-center justify-center"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#636060] hover:text-white w-[110px] h-[35px] rounded-md flex items-center justify-center"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-[#636060] hover:text-white w-[120px] h-[35px] rounded-md flex items-center justify-center"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger (visible on phone + tablet) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile/Tablet Menu */}
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center gap-6  text-[#C4C4C4] font-poppins bg-black">
            <a
              href="#"
              className="bg-[#636060] text-white w-[90px] h-[35px] rounded-md flex items-center justify-center"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-[#636060] hover:text-white w-[90px] h-[35px] rounded-md flex items-center justify-center"
            >
              Service
            </a>
            <a
              href="#"
              className="hover:bg-[#636060] hover:text-white w-[120px] h-[35px] rounded-md flex items-center justify-center"
            >
              Find a team
            </a>
            <a
              href="#"
              className="hover:bg-[#636060] hover:text-white w-[100px] h-[35px] rounded-md flex items-center justify-center"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:bg-[#636060] hover:text-white w-[90px] h-[35px] rounded-md flex items-center justify-center"
            >
              Articles
            </a>
            <a
              href="#"
              className="hover:bg-[#636060] hover:text-white w-[110px] h-[35px] rounded-md flex items-center justify-center"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="hover:bg-[#636060] hover:text-white w-[120px] h-[35px] rounded-md flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        )}

       
      </div>
    </>
  )
}
