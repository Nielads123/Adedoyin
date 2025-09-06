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
        <img src={adira} alt="" />
          <img src={adhmix} alt="" />
             <img src={holmc} alt="" />
                <img src={mnc} alt="" />
                   <img src={telk} alt="" />
                    
    </div>
   </>
  )
}
