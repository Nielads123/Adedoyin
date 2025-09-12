import React from 'react'
import adira from "./assets/adira.png"
import adhmix from "./assets/ADHMIX.png"
import holmc from "./assets/holmc.png"
import mnc from "./assets/mnc.png"
import telk from "./assets/Telkomsel.png"

export default function Brand() {
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-between mt-[140px] gap-y-8 lg:mt-[100px] lg:px-16'>
        
        <img 
          src={adira} 
          alt="Adira" 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="100"
        />

        <img 
          src={adhmix} 
          alt="Adhmix" 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="200"
        />

        <img 
          src={holmc} 
          alt="Holmc" 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="300"
        />

        <img 
          src={mnc} 
          alt="MNC" 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="400"
        />

        <img 
          src={telk} 
          alt="Telkomsel" 
          data-aos="fade-up" 
          data-aos-duration="800"
          data-aos-delay="500"
        />
      </div>
    </>
  )
}
