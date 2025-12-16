"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const RainwaterFarming = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ---------- Hero Section ---------- */}
      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Rainwater Harvesting and Dryland Farming
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-100/90"
          >
          Boosting agricultural productivity and food security in the arid Thar Desert by focusing on advanced rainwater harvesting and water-smart farming techniques
          </motion.p>
        </motion.div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 leading-relaxed">

        {/* ---------- SECTION 1 ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/assets/Image/Agricultural-Productivity-First-Image.jpg"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />

          <p className="text-gray-700 text-lg text-justify">
            The project's foundational approach to elevating agricultural
            productivity and guaranteeing food security within the arid Thar
            Desert region centres on the vigorous advancement of rainwater
            harvesting and dryland farming techniques. The initiative aims to
            significantly increase crop yields and farmers' incomes by 50-100%
            through the implementation of these practices.
          </p>
        </motion.div>

        {/* ---------- SECTION 2 ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-10 items-center"
        >
          <p className="text-gray-700 text-lg text-justify">
          A key activity involves supporting the construction of 650 khadins, (traditional farming dykes) that are highly effective in retaining monsoon rainwater and improving soil fertility across approximately 2,600 hectares of land. These khadins will be strategically built on 650 farms, primarily benefiting marginalized households selected by ILG and SHG members. GRAVIS will procure necessary materials such as stone slabs, cement, and murrum, and manage transportation and skilled labor, with unskilled labor contributed by beneficiary families. Technical guidance will be provided by a civil engineering consultant.
          </p>

          <img
            src="/assets/Image/Khadin-Second-image.jpg"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </motion.div>

        {/* ---------- SECTION 3 ---------- */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="/assets/Image/Community-Seed Bank-Third-Image.jpg"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />

          <p className="text-gray-700 text-lg text-justify">
          To address seed availability and affordability, 300 Community Seed Banks (CSBs) will be established (15 per village), managed by ILGs and SHGs, ensuring access to good quality seeds, especially during the short and unpredictable rainy season. The project will also organize community-level trainings on rainwater management for farming and innovative dryland farming methods, including crop diversification, mixed cropping, and the cultivation of drought-resistant crops. These trainings, led by expert resource persons, will be held across the four districts, aiming to enhance the knowledge base of at least 1,000 community members. The overall goal is to build resilience against water scarcity, directly contributing to economic stability and the widespread adoption of sustainable rain-fed farming practices.


          </p>
        </motion.div>

      </section>
    </div>
  );
};

export default RainwaterFarming;
