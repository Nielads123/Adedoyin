import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  { 
    img: "./src/assets/building10.jpg", 
    title: "Switzerland", 
    desc: "A contemporary alpine retreat designed to harmonize with the surrounding mountains." 
  },
  { 
    img: "./src/assets/building7.jpg", 
    title: "Finland", 
    desc: "Minimalist architecture that embraces natural light and sustainable materials." 
  },
  { 
    img: "./src/assets/building11.jpg", 
    title: "Iceland", 
    desc: "A bold modern structure built to withstand the Nordic climate with elegance." 
  },
  { 
    img: "./src/assets/building9.jpg", 
    title: "Australia", 
    desc: "An innovative urban design combining glass, steel, and open green spaces." 
  },
  { 
    img: "./src/assets/building5.jpg", 
    title: "Netherlands", 
    desc: "A waterfront development blending modern living with cultural heritage." 
  },
  { 
    img: "./src/assets/building6.jpg", 
    title: "Netherlands", 
    desc: "Sustainable residential architecture with a focus on community and aesthetics." 
  },
];

export default function Slider() {
  const [items, setItems] = useState(slides);

  const handleNext = () => {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setItems((prev) => {
      const last = prev[prev.length - 1];
      return [last, ...prev.slice(0, prev.length - 1)];
    });
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      
      {/* Title (independent of slider) */}
      <h2 className="text-center font-poppins text-[20px] sm:text-[28px] md:text-[35px] lg:text-[50px] font-medium mb-8">
        Our Collection Best Project
      </h2>

      {/* Slider container */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl">
        
        {/* Slides */}
        <div className="relative w-full h-full">
          {items.map((slide, index) => (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 shadow-xl bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url(${slide.img})`,

                // Small screens → only active slide
                width: index === 1 ? "100%" : "0",
                height: index === 1 ? "100%" : "0",

                // Medium+ → show previews
                ...(window.innerWidth >= 640 && {
                  width: index === 1 ? "100%" : "140px",
                  height: index === 1 ? "100%" : "180px",
                  left:
                    index === 1
                      ? "0"
                      : index === 0
                      ? "-160px"
                      : `calc(50% + ${(index - 2) * 160}px)`,
                }),

                opacity: index === 1 ? 1 : window.innerWidth >= 640 ? 1 : 0,
                borderRadius: index === 1 ? "0" : "12px",
              }}
            >
              {/* Active slide content */}
              {index === 1 && (
                <div className="absolute top-14 md:top-[120px] lg:top-[150px] left-4 sm:left-8 w-[85%] sm:w-[300px] font-poppins text-left text-white space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase">
                    {slide.title}
                  </h3>
                  <p className="text-sm sm:text-base">{slide.desc}</p>
                  <button className="px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm bg-[#5c3d2e] text-white rounded-md">
                    View Project
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="absolute ml-0 md:ml-12 bottom-4  sm:bottom-18 lg:bottom-20 w-full flex justify-center gap-3 sm:gap-4">
          <button
            onClick={handlePrev}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white shadow hover:bg-gray-300 flex items-center justify-center"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white shadow hover:bg-gray-300 flex items-center justify-center"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
