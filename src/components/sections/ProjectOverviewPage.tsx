"use client";
import { motion } from "framer-motion";
import React from "react";

const ProjectOverviewPage = () => {
  return (
    <div className="bg-[#F7F8F6] text-gray-800">
      {/* ---------- Hero Section ---------- */}

      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Project Overview
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ---------- Content Section ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#008a2c] mb-8 text-center">
          Strengthening Agriculture-Based Livelihoods (SABL)
        </motion.h2> */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-gray-700 mb-2">
          The SABL (Strengthening Agriculture-Based Livelihoods through Women
          and Youth Empowerment in the Thar Desert, India) project is a 60-month
          initiative undertaken by Gramin Vikas Vigyan Samiti (GRAVIS) and
          financially supported by the European Union (EU). This project aims to
          empower women and youth economically by strengthening
          Agriculture-based Livelihoods (ABL) in 20 drought-prone villages
          across Barmer, Jaisalmer, Pali and Phalodi districts of the Thar
          Desert in Rajasthan, India. The region faces severe challenges
          including water scarcity, low crop yields, food insecurity, and
          significant gender inequality.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg leading-relaxed text-gray-700 mb-6">
          The overall objective is to contribute to strengthened ABL, leading to
          economic empowerment through gender equality and youth empowerment.
          Specifically, the project seeks to enhance the participation of women
          and youth in ABL by building their capacities and facilitating
          entrepreneurship through targeted training and market linkages.
        </motion.p>


         <motion.img
              src="./assets/Image/project-overview.jpg"
              alt="Community Empowerment"
              className="rounded-2xl shadow-lg w-full object-cover md:h-[680px]"
            />

  
  <div className="space-y-2 mt-10">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-700 hover:shadow-xl transition-all duration-300"> */}
          <p className="text-gray-700 leading-relaxed text-lg">
            Key activities include strengthening Community Based Organizations
            (CBOs), such as Self Help Groups (SHGs) and Intergenerational
            Learning groups (ILGs), and providing them with training in improved
            rainwater harvesting techniques, sustainable agriculture practices,
            and crop diversification. The project will implement 650 khadins
            (rainwater harvesting structures) across 2,600 hectares of land to
            boost crop production by 50-100%. Additionally, 586 Arid
            Horticultural Units (AHUs) and 20 silvipasture units will be
            developed to enhance food and fodder security for approximately
            20,000 people and 80,000 cattle.
          </p>
        {/* </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-700 hover:shadow-xl transition-all duration-300"> */}
          <p className="text-gray-700 leading-relaxed text-lg">
            A crucial component involves equipping 2,400 women and youth with
            financial and digital skills, facilitating their access to capital
            and markets, and providing income generating support to 100 trained
            women and youth for establishing food processing units. The project
            additionally prioritizes capturing lessons learned and promoting its
            objectives through various documentation and advocacy initiatives.
            These efforts aim to inform policy-making and encourage the
            widespread adoption of effective ABL practices.
          </p>
        {/* </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-700 hover:shadow-xl transition-all duration-300"> */}
          <p className="text-gray-700 leading-relaxed text-lg">
            GRAVIS will collaborate with local authorities, the private sector,
            and research organizations to ensure sustainability and maximize
            impact. The project's approach integrates cross-cutting issues such
            as gender equality, environmental conservation, and good governance,
            aligning with the EU's development goals and India's national
            programmes for rural livelihoods and climate change adaptation. The
            ultimate goal is to create a replicable model for sustainable
            economic empowerment in arid zones, fostering resilient and
            equitable communities.
          </p>
        {/* </motion.div> */}
</div>
       
      </section>
    </div>
  );
};

export default ProjectOverviewPage;
