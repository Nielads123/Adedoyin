import React from 'react'
import Adedoyin from "./assets/2-removebg-preview.png"
export default function Footertwo() {
  return (
    <div>
                
  <div className="bg-gradient-to-r from-[#5c3d2e] via-[#9c6b4d] to-[#7b4f37] h-auto mt-[50px] flex flex-col lg:flex-row items-center justify-between px-6 py-1 rounded-t-3xl">
  {/* Logo */}
  <img
    src={Adedoyin}
    className="w-[120px] h-auto object-contain mb-4 lg:mb-0"
    alt="ADEDOYIN Logo"
  />

  {/* Text */}
  <p className="text-white text-center lg:text-right font-poppins text-sm md:text-base">
    &#169; ADEDOYIN All Rights Reserved
  </p>
</div>

    </div>
  )
}
