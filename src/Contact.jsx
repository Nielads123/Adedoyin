import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    date: "",
    time: "",
    meetingType: "Zoom Meeting",
  });

  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [modal, setModal] = useState({ show: false, message: "", success: false }); // Modal state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Send email to YOU
    emailjs
      .send(
        "service_7pixfrk",
        "template_yvgjx1n",
        formData,
        "7ryyYyCJABHDgO7MU"
      )
      .then(
        (result) => {
          console.log("Notification email sent:", result.text);

          // Send Auto-Reply to CLIENT
          emailjs
            .send(
              "service_7pixfrk",
              "template_8t9c1rz", // Your auto-reply template
              formData,
              "7ryyYyCJABHDgO7MU"
            )
            .then(() => {
              setIsLoading(false);
              setModal({
                show: true,
                message:
                  "✅ Your consultation request has been sent! Check your email for confirmation.",
                success: true,
              });
              setFormData({
                name: "",
                email: "",
                projectType: "",
                message: "",
                date: "",
                time: "",
                meetingType: "Zoom Meeting",
              });
            })
            .catch((error) => {
              console.error("Auto-reply failed:", error.text);
              setIsLoading(false);
              setModal({
                show: true,
                message: "⚠️ Booking sent, but auto-reply failed.",
                success: false,
              });
            });
        },
        (error) => {
          console.error("Notification failed:", error.text);
          setIsLoading(false);
          setModal({
            show: true,
            message: "❌ Failed to send booking. Try again.",
            success: false,
          });
        }
      );
  };

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
            Commercial, or Renovation. Book a consultation with our architects
            and let’s bring your ideas to life.
          </p>

          <div className="space-y-4 text-gray-800">
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span> 123 ADEDOYIN Avenue, Lagos,
              Nigeria
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            />
            <input
              type="text"
              name="projectType"
              placeholder="Project Type (Residential, Commercial...)"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            ></textarea>

            {/* Date & Time */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
              />
            </div>

            {/* Meeting Type */}
            <select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e]"
            >
              <option>Zoom Meeting</option>
              <option>On-site Visit</option>
              <option>Office Meeting</option>
            </select>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#5c3d2e] hover:bg-[#7b4f37] text-white rounded-lg font-semibold transition flex items-center justify-center"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Confirm Booking"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
            <h3
              className={`text-lg font-semibold ${
                modal.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {modal.message}
            </h3>
            <button
              onClick={() => setModal({ ...modal, show: false })}
              className="mt-4 px-4 py-2 bg-[#5c3d2e] text-white rounded-lg hover:bg-[#7b4f37]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
