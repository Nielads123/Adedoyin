import React from 'react'
import Boxhouse from "./assets/box4.jpg"
import Human from "./assets/human.jpg"

export default function Meet() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:px-10 mt-[100px] gap-12">
        {/* left */}
        <div className="relative flex justify-center">
          {/* main image */}
          <img src={Boxhouse} className="w-[300px]  sm:w-[350px] lg:w-[400px]" alt="box" />

          {/* overlay card */}
          <div className="absolute -bottom-[170px] sm:-bottom-[170px] lg:bottom-auto lg:top-[80px] lg:left-[400px] lg:-translate-x-1/2 bg-[#222222] h-[350px] w-[280px] sm:w-[320px] lg:w-[350px] flex flex-col items-center pt-10 shadow-lg">
            <img
              src={Human}
              className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
              alt="human"
            />

            <div className="text-white font-poppins mt-6 text-[24px] sm:text-[28px] lg:text-[30px] font-medium text-center">
              Dianne Russell
            </div>

            <div className="text-white font-poppins text-center text-[14px] sm:text-[16px] mx-6 sm:mx-10">
              More than 20 years experience in the field architecture and has
              worked on project up to 100+
            </div>
          </div>
        </div>
        {/* left */}

        {/* right */}
        <div className="text-center mt-[200px] lg:text-left lg:ml-10 lg:mt-0 xl:ml-[150px]">
          <div className="text-[32px] sm:text-[40px] lg:text-[50px] font-poppins font-semibold leading-snug">
            Meet and talk with <br /> our best architecture
          </div>
          <div className="text-[14px] sm:text-[16px] mt-[20px] font-medium text-[#dbdbdb] font-poppins leading-relaxed">
            All our team are professional and competent in their <br className="hidden sm:block" />
            field and will help you realize your dream building <br className="hidden sm:block" />
            with the excellent result.
          </div>
          <div className="font-poppins cursor-pointer bg-[#0a71ad] text-white px-6 py-3 sm:py-4 mt-[40px] rounded-sm inline-block">
            See all team
          </div>
        </div>
        {/* right */}
      </div>

      <div>d</div>
    </>
  )
}
