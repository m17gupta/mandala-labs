"use client";
import { motion } from "framer-motion";
import React from "react";

const MissionVisionPage = () => {
  return (
    <div className="w-full">
      {/* 🌿 Hero Section (Same as Overview / What We Do) */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
        {/* Gradient + Pattern Background */}
        <div className="absolute inset-0 bg-[#123751]">
          {/* Decorative Texture */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/cubes.png')",
            }}></div>

          {/* Floating light effect */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.15),transparent_60%)] animate-pulse-slow"></div> */}
        </div>

        {/* Foreground Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
            Mission and  Vision 
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed"
          >
           GRAVIS is inspired by Gandhian principles for community-led development
          </motion.p>
          
        </motion.div>

        {/* Decorative Bottom Wave */}
      </div>

      {/* 📸 Mission Section */}
      <section className="bg-[#F7F8F6] py-20 px-6 md:px-20 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-10 items-center">
          {/* Left: Image */}
           <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden ">
            <img
              src="/assets/Image/mission-image.png"
              alt="Mission Image"
              className="w-full md:h-[680px] object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            <p className="text-lg leading-relaxed text-gray-700">
              GRAVIS is guided by two foundational Gandhian principles:
              Sarvodaya, meaning "all rising, but the last person first," which
              emphasizes a bottom-up approach for inclusive socio-economic
              progress. We champion the collective advancement of all
              individuals, irrespective of their economic status, age, caste, or
              religion.
            </p>

             <p className="text-lg leading-relaxed text-gray-700 pt-4">
              To achieve this, GRAVIS embraces Gram Swaraj, or village
              self-rule. This philosophy promotes independent, self-sufficient
              villages. Our interventions are therefore planned and executed
              with extensive community involvement, ensuring local ownership,
              maintenance, and monitoring. Strong CBOs are central to GRAVIS' work, actively engaging members in
              projects to foster self-empowerment rather than merely
              supplementing failing systems.
            </p>

          </motion.div>

         

        </div>

        {/* <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-10 items-center mt-10">

           <img
              src="/assets/Image/img (6).jpg"
              alt="Vision Image"
              className="w-full md:h-[700px] object-cover rounded-2xl"
            />
 </div> */}
      </section>

   
    </div>
  );
};

export default MissionVisionPage;
