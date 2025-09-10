import React from 'react'
import Blackman from "./assets/blackman.jpg"
export default function Footer() {
  return (
    <>
      <div className='flex flex-col  py-16 lg:flex-row items-center justify-between lg:ml-[200px] lg:px-10 mt-[100px] md:space-y-1 text-center w-full h-[1000px]  md:h-[900px] lg:h-[500px] lg:w-[1000px]  rounded-xl bg-[#5c3d2e]'>

        {/* left */}
        <div className="mt-2 relative md:mt-12 lg:mt-0">
          <img src={Blackman} className='w-[300px] h-[400px] object-cover ' alt="" />

          <div className="bg-white text-center py-5 px-4 h-[170px] absolute top-[230px]">
            <div className='ml-28 font-poppins text-[50px] bg-[#5c3d2e] text-center py-2 w-[50px] h-[50px] rounded-full text-[white] font-medium absolute -top-6'>"</div>
          <div className='font-poppins text-[30px] my-1 text-[#5c3d2e] font-medium'>Jacob Molen</div>
        <div className='text-[16px] font-medium text-[#5c3d2e] font-poppins'> like the final result this project <br /> is extraodinary and also provides <br /> the best service for client</div>
          </div>

        </div>
         {/* left */}

         {/* right */}
              <div className="lg:space-y-8 md:mb-[120px] lg:mt-[110px]">
                  <div className='text-[40px] text-white  font-poppins font-medium'>What we have done &  <br />what our Customer say</div>
                  <div className='text-[18px] text-white  font-poppins fot-medium'>We are to help you build an excellent building, with <br /> us, nothing is impossible. See what we have done <br /> and what they have to say about our perform.</div>
              </div>
         {/* right */}
      </div>
      <div>dd</div>
    </>
  )
}
