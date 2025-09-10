import React from "react";

export default function Contact() {
  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#5c3d2e]">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            Let’s talk about your next project whether it’s Residential, 
            Commercial, or Renovation. We’re here to make your vision a reality.
          </p>

          <div className="space-y-4 text-gray-800">
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span> 123 ADEDOYIN Avenue, Lagos, Nigeria
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span> +234 915 656 1079
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">✉️</span> contact@nielads123@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white border shadow-lg rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-[#5c3d2e] font-poppins">
            Book a Consultation
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            />
            <input
              type="text"
              placeholder="Project Type (Residential, Commercial...)"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-[#5c3d2e] hover:bg-[#7b4f37] text-white rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
