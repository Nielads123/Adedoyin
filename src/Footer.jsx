import React, { useState, useEffect } from "react";
import Blackman from "./assets/blackman.jpg";
import Blackman2 from "./assets/blackwoman.jpg";
import Blackman3 from "./assets/Whiteman.jpg";
import Blackman4 from "./assets/Whitewoman.jpg";


const testimonials = [
  {
    img: Blackman,
    name: "Jacob Molen",
    text: "I like the final result, this project is extraordinary and also provides the best service for clients.",
  },
  {
    img: Blackman2,
    name: "Sophia White",
    text: "Working with this team was smooth. The building design exceeded our expectations!",
  },
  {
    img: Blackman3,
    name: "Michael Chen",
    text: "Their architectural vision is unique, blending functionality with stunning design.",
  },
  {
    img: Blackman4,
    name: "Amira Johnson",
    text: "Excellent service! They truly listen to client needs and deliver quality results.",
  },
];

export default function Footer() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <>
     <div className="main">
       <div className="flex flex-col py-16 lg:flex-row items-center justify-between lg:ml-[200px] lg:px-10 mt-[100px] text-center w-full h-[1000px] md:h-[900px] lg:h-[500px] lg:w-[1000px] rounded-xl bg-[#5c3d2e]">
        {/* left (Image + box) */}
        <div className="mt-2 relative md:mt-12 lg:mt-0">
          <img
            src={testimonial.img}
            className="w-[300px] h-[400px] object-cover rounded-md"
            alt={testimonial.name}
          />

          <div className="bg-white text-center py-5 px-4 h-[170px] absolute top-[230px] w-[300px]">
            <div className="mx-auto font-poppins text-[40px] pt-6 bg-[#5c3d2e] flex items-center justify-center w-[50px] h-[50px] rounded-full text-white font-medium absolute -top-6 left-1/2 -translate-x-1/2">
              "
            </div>
            <div className="font-poppins text-[22px] my-1 text-[#5c3d2e] font-medium">
              {testimonial.name}
            </div>
            <div className="text-[16px] font-medium text-[#5c3d2e] font-poppins">
              {testimonial.text}
            </div>
          </div>
        </div>

        {/* right (heading + description) */}
        <div className="lg:space-y-8 md:mb-[120px] lg:mt-[110px]">
          <div className="text-[40px] text-white font-poppins font-medium">
            What we have done & <br /> what our Customer say
          </div>
          <div className="text-[18px] text-white font-poppins font-medium">
            We are here to help you build an excellent building. <br /> With us,
            nothing is impossible. See what we have done <br /> and what they
            have to say about our performance.
          </div>
        </div>
      </div>

     </div>
        


    </>
  );
}
