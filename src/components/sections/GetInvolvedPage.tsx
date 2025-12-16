import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import React from "react";
import { TfiWorld } from "react-icons/tfi";


const GetInvolvedPage = () => {
  return (
    <>
     <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div className="max-w-xl ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
           Get Involved
            </h1>

              <p className="text-white text-lg leading-relaxed pt-4">
                 We would love to hear from you. To know more about the EU funded SABL project or our other initiatives, write to us.
              </p>
          </motion.div>
        </div>
      </div>
   
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./assets/Image/image (7).png')", // ⭐ yaha tumhari image ka path
      }}
    >
      {/* Overlay */}
      <div className="w-full min-h-screen bg-black/40 flex items-center py-16 px-4">
        <div className="max-w-5xl w-full mx-auto bg-white/80 rounded-xl shadow-xl p-8 md:p-10">
          
      


          {/* LAYOUT: LEFT INFO + RIGHT FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE (Address removed, only Email + Website allowed) */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Us 
              </h3>

              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg pt-1">  <Mail className="w-5 h-5 text-black" /></span>
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600"><a href="mailto:info@sabl.org.in">info@sabl.org.in</a></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-600 text-lg pt-1"><TfiWorld className="w-5 h-5 text-black" /></span>
                <div>
              

                  <p className="text-gray-900 font-medium">Website</p>
                  <a href="https://www.sabl.org.in" target="_blank" rel="noopener noreferrer">
                    www.sabl.org.in
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — FORM SECTION */}
            <div className="bg-gray-50 p-6 rounded-md ">
              <form className="space-y-4 ">

                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md text-lg font-medium hover:bg-green-700 transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>

        </div>
      </div>
    </div>

     </>
  );
};

export default GetInvolvedPage;
