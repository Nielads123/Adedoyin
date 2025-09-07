import React from 'react'
import Brown from "./assets/brown3.jpg"

export default function Story() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:mx-32 py-12 lg:py-16 lg:mt-[100px]">
        {/* left */}
        <div className="text-center lg:text-left">
          <div className="text-black font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[60px] leading-snug">
            Our Story <br />Who are we
          </div>

          <div className="pt-4 lg:pt-6 font-poppins text-[14px] sm:text-[15px] lg:text-[16px]  leading-relaxed">
            Established in 2025, Adedoyin operate as a general <br /> Contracting company 
            with a footprint that we have planted <br /> throughout Nigeria. Initially, we
            focused on construction in <br /> the field of residential housing development in 
            Lagos. <br /> As the company grows, now we are present as reliable
          </div>

          <div className="bg-[#5c3d2e] text-white px-6 py-3 mt-[30px] lg:mt-[40px] rounded-sm inline-block shadow-lg shadow-[#5c3d2e]/50">
            See More
          </div>
        </div>
        {/* left */}

        {/* right */}
        <div className="bg-white p-2 w-full max-w-[383px] h-[250px] sm:h-[300px] lg:h-[380px] shadow overflow-hidden mt-8 lg:mt-0">
          <img
            src={Brown}
            alt="Brown-Home"
            className="w-full h-full object-cover"
          />
        </div>
        {/* right */}
      </div>
    </>
  )
}
