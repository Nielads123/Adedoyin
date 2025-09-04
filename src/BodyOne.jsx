import React from 'react'
import Home from "./assets/home.png"
export default function BodyOne() {
  return (
    <>
        <div className='flex items-center justify-between my-16'>
          {/* left */}
          <div className=' ml-[40px]'> 
              <div className="text-[50px] font-bold font-poppins">We Provide <br /> Architectural design <br /> and Construction</div>
              <div className='font-poppins my-6 mt-[30px]  text-[16px]'> More than 100 building and housing projects that we have built. <br /> The building owner chose us over other contractos in Nigeria, <br /> because our work is different</div>
      <div className="font-poppins cursor-pointer bg-gradient-to-r from-[#5c3d2e] to-[#352f2f] text-white px-6 py-4 mt-[20px] rounded-sm inline-block"> 
        Discover More</div>

              {/* numbers */}
                  <div className="flex space-x-12 py-10" >
                        {/* one */}
                    <div className="block">
                      <div className='text-black font-bold text-[30px] font-poppins'>300<span className='text-[#5c3d2e]'>+</span></div>
                      <div className='text-black font-semibold'>Happy <br /> Client</div>
                    </div>
                        {/* one */}

                    {/* two */}

                    <div className="block">
                      <div className='text-black font-bold text-[30px] font-poppins'>900<span className='text-[#5c3d2e]'>+</span></div>
                      <div className='text-black font-semibold'>Amazing <br />Projects</div>
                    </div>
                        {/* two */}

                   {/* three */}

                    <div className="block">
                      <div className='text-black font-bold text-[30px] font-poppins'>20<span className='text-[#5c3d2e]'>+</span></div>
                      <div className='text-black font-semibold'>Awards <br /> Winning</div>
                    </div>
                        {/* three */}

                  </div>
               {/* numbers */}

            </div>
           {/* left */}

           {/* right */}
              <div className=''>
                <img src={Home} width="450px" alt="" />
                {/* card */}
                  <div  className=" flex font-poppins cursor-pointer bg-gradient-to-r from-[#5c3d2e] to-[#352f2f] space-x-8 text-white pl-[19px] w-[690px] py-12 ml-[-240px] absolute bottom-[-42%] rounded-sm">
                      {/* one */}
                          <div className=''>General <br /> <span className='font-poppins text-[24px] font-semibold'>Project</span></div>
                      {/* one */}

                        {/* Two */}
                       <div className='flex'>
                        <span className='font-poppins text-[35px] font-bold'>25</span>
                        <span className="pt-[10px] pl-[10px] font-semibold">Years</span>
                        <span className='pt-[10px] pl-[4px]'>Operated</span>
                       </div>
                      {/* Two */}

                        {/* Three */}
                         <div className='font-poppins'>As a trusted general project that has been 
                                operating for 25 years, our commitment is
                                always to prioritize our client satisfaction</div>
                      {/* Three */}

                  </div>
                    {/* card */}
              </div>
           {/* right */}
        </div>
        <div>sd</div>
    </>
  )
}
