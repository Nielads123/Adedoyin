import industrial from "./assets/industry.png"
import commercial from "./assets/commercial.png"
import Residential from "./assets/residential.png"

function Services(){
    return (
        <>
            <div className="flex flex-col items-center justify-between  lg:mt-[100px] bg-[#F6F6F6] ">
               
               {/* first-section */}
               <div className="flex flex-col lg:flex-row lg:mx-28 lg:gap-x-56 space-y-4" >
                    {/* left */}
                    <div className="lg:text-[50px] font-poppins font-semibold text-[20px] lg:text-left text-center mt-10">
                        Our Excellent <br /> Service
                    </div>
                    {/* left */}

                    {/* right */}
                    <div className="lg:text-[16px] font-poppins font-medium text-center lg:pt-10 ">
                        Check out our best service you can possibly orders in building  <br />
                        your company and don't forget  to ask via  our email or our <br />
                        customer service if you are interested in using our services
                    </div>
                    {/* right */}
               </div>
               {/* first-section */}

               {/* second-section */}
               <div className="flex flex-col lg:flex-row items-center justify-between gap-x-28 py-10">
                    {/* img-1 */}
                    <div className="flex flex-col gap-y-10">
                        <div className="bg-white p-2 w-[273px] h-[220px] flex items-center justify-center shadow">
                            <img src={industrial} alt="Industrial" className="max-w-[350px] max-h-[204px] object-contain mb-2" />
                        </div>
                        <div className="text-[20px] font-poppins font-semibold">Industrial</div>
                    </div>
                    {/* img-1 */}

                    {/* img-2 */}
                    <div className="flex flex-col gap-y-10">
                        <div className="bg-white p-2 w-[273px] h-[220px] flex items-center justify-center shadow">
                            <img src={commercial} alt="Commercial" className="max-w-[350px] max-h-[204px] object-contain mb-2" />
                        </div>
                        <div className="text-[20px] font-poppins font-semibold">Commercial</div>
                    </div>
                    {/* img-2 */}

                    {/* img-3 */}
                    <div className="flex flex-col gap-y-10">
                        <div className="bg-white p-2 w-[273px] h-[220px] flex items-center justify-center shadow">
                            <img src={Residential} alt="Residential" className="max-w-[350px] max-h-[204px] object-contain mb-2" />
                        </div>
                        <div className="text-[20px] font-poppins font-semibold ">Residential</div>
                    </div>
                    {/* img-3 */}
               </div>
               {/* second-section */}
            </div>

            
        </>
    )
}

export default Services
