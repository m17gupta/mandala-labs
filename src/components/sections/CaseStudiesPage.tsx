import React from "react";
import NewsSection from "./NewsSection";
import OurWork from "./OurWork";
import { AnimatePresence, motion } from "framer-motion";

const CaseStudiesPage = () => {
  return (
    <div>
     



                  <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 text-center text-white px-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
                        Case Studies
                        </h1>
                      </motion.div>
                    </div>
                  </div>
      

      {/* <OurWork /> */}

       {/* Coming Soon Section */}
            <div className="flex items-center justify-center py-20 bg-gray-100 h-[45vh]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-700 mb-4">Coming Soon</h2>
                <p className="text-gray-500 text-lg">
                 We’re working on gathering the relevant information. It will be published here in the near future. Stay tuned!          </p>
              </motion.div>
            </div>
            
      {/* </div> */}
    </div>
  );
};

export default CaseStudiesPage;
