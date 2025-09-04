import React from 'react'
import Home from "./assets/home.png"

export default function BodyOne() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:mt-[-130px] ">
        
        {/* left */}
        <div className="ml-[20px] lg:ml-[40px] text-center lg:text-left"> 
          <div className="text-[25px] md:text-[40px] lg:text-[50px] lg:mt-[300px] font-bold font-poppins">
            We Provide  Architectural design and Construction
          </div>

          <div className="font-poppins my-6 mt-[20px] text-[14px] md:text-[16px]">
            More than 100 building and housing projects that we have built. <br /> 
            The building owner chose us over other contractos in Nigeria, <br /> 
            because our work is different
          </div>

          <div className="font-poppins cursor-pointer bg-gradient-to-r from-[#5c3d2e] to-[#352f2f] text-white px-6 py-4 mt-[20px] rounded-sm inline-block"> 
            Discover More
          </div>

          {/* numbers */}
          <div className="flex flex-col sm:flex-row sm:space-x-12 py-10 justify-center lg:justify-start space-y-6 sm:space-y-0">
            
            {/* one */}
            <div className="block">
              <div className="text-black font-bold text-[30px] font-poppins">
                300<span className="text-[#5c3d2e]">+</span>
              </div>
              <div className="text-black font-semibold">Happy <br /> Client</div>
            </div>

            {/* two */}
            <div className="block">
              <div className="text-black font-bold text-[30px] font-poppins">
                900<span className="text-[#5c3d2e]">+</span>
              </div>
              <div className="text-black font-semibold">Amazing <br />Projects</div>
            </div>

            {/* three */}
            <div className="block">
              <div className="text-black font-bold text-[30px] font-poppins">
                20<span className="text-[#5c3d2e]">+</span>
              </div>
              <div className="text-black font-semibold">Awards <br /> Winning</div>
            </div>
          </div>
          {/* numbers */}
        </div>
        {/* left */}

        {/* right */}
        <div className="relative w-full flex justify-center mt-3 lg:mt-0">
          {/* image */}
          <img 
            src={Home} 
            className="w-full lg:ml-20 sm:w-[400px] md:w-[900px] lg:mt-0 md:mt-[-120px] lg:w-[600px]"  
            alt="home"
          />

          {/* card */}
          <div className="absolute bottom-[-20%] md:space-y-12 md:pt-[44px] md:bottom-[-15%] md:w-[750px] lg:h-[150px] md:h-[450px] lg:bottom-[-12%] bg-gradient-to-r from-[#5c3d2e] to-[#352f2f] text-white p-6 lg:py-12 lg:pl-[16px] rounded-sm w-[90%] sm:w-[500px] lg:w-[690px] mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
            
            {/* one */}
            <div className='lg:ml-0 md:ml-[250px] lg:text-base md:text-[30px] ml-[100px]'>
              General <br /> 
              <span className="font-poppins text-[20px] md:text-[34px] lg:text-[24px] font-semibold">Project</span>
            </div>

            {/* Two */}
            <div className="flex items-start lg:ml-0 md:ml-0 ml-[100px]">
              <span className="font-poppins text-[30px] lg:text-[30px] md:text-[65px] font-bold lg:ml-0 md:ml-[250px]">25</span>
              <div className="pl-2">
                <div className="font-semibold lg:text-base md:text-[24px]">Years</div>
                <div className='lg:text-base md:text-[24px]'>Operated</div>
              </div>
            </div>

            {/* Three */}
            <div className="font-poppins text-sm md:text-[25px] lg:text-[16px]">
              As a trusted general project that has been operating for 25 years, 
              our commitment is always to prioritize our client satisfaction
            </div>
          </div>
          {/* card */}
        </div>
        {/* right */}
      </div>
   
    </>
  )
}
