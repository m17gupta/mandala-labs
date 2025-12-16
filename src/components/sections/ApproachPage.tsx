"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ApproachPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ---------- Hero Section ---------- */}

      <div className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center bg-[#123751]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg tracking-tight">
              Our Approach
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ---------- Main Section ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 leading-relaxed">
        {/* ---------- Section 1 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/apporch-img3.JPG"
            alt="Community Empowerment"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Community-centric empowerment
            </h2>
            <p>
              The strategy prioritizes active involvement of local communities,
              particularly women and youth, through the formation and
              strengthening of Community-Based Organizations (CBOs) like
              Self-Help Groups (SHGs) and Intergenerational Learning groups
              (ILGs). These CBOs will be in leadership roles for planning,
              implementation, and monitoring, fostering local ownership and
              sustainability.
            </p>
          </motion.div>
        </div>

        {/* ---------- Section 2 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Integrated livelihood approach
            </h2>
            <p>
              GRAVIS recognizes that agricultural livelihoods are
              interconnected. The strategy emphasizes integrating agriculture
              with allied sectors such as horticulture and animal husbandry.
              This includes developing Arid Horticultural Units (AHUs) and
              silvipasture units to enhance food and fodder security and
              diversify income sources.
            </p>
          </motion.div>
          <motion.img
            src="/assets/Image/apporch-img5.jpg"
            alt="Integrated Livelihood"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ---------- Section 3 (Capacity Building) ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/apporch-img2.jpeg"
            alt="Capacity Building"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Capacity building and knowledge transfer
            </h2>
            <p className="mb-4">
              A significant aspect of the strategy is to enhance knowledge and
              skills at multiple levels. This involves:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Training CBO members in improved rainwater harvesting,
                sustainable agriculture practices, crop diversification, and
                rain-fed farming.
              </li>
              <li>
                Equipping women and youth with financial and digital literacy,
                crucial for accessing markets and capital.
              </li>
              <li>
                Strengthening the capacity of GRAVIS and other local CSOs to
                lead similar initiatives in the future.
              </li>
              <li>
                Facilitating knowledge exchange with national and international
                stakeholders.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ---------- Section 4 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Entrepreneurship and market linkages
            </h2>
            <p>
              The project aims to move beyond subsistence farming by fostering
              entrepreneurship. This includes providing income-generating
              support for establishing food processing units and developing
              marketing linkages to ensure that produce reaches markets
              effectively, thereby boosting incomes.
            </p>
          </motion.div>
          <motion.img
            src="/assets/Image/apporch-img4.jpg"
            alt="Market Linkages"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ---------- Section 5 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/approch-img8.jpg"
            alt="Traditional Wisdom"
            className="rounded-2xl shadow-lg w-full h-[440px] object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Leveraging traditional wisdom and modern techniques
            </h2>
            <p>
              The strategy blends traditional knowledge, such as the use of
              khadins for rainwater harvesting, with modern, innovative rain-fed
              farming techniques and crop diversification to improve
              agricultural productivity in the arid environment.
            </p>
          </motion.div>
        </div>

        {/* ---------- Section 6 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Advocacy and policy influence
            </h2>
            <p>
              GRAVIS plans to document learning and develop advocacy briefs to
              influence government policies related to agriculture, dryland
              farming, rural livelihoods, and women and youth empowerment. This
              aims to promote replication of successful practices by government
              agencies and other CSOs.
            </p>
          </motion.div>
          <motion.img
            src="/assets/Image/apporch-img1.JPG"
            alt="Advocacy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* ---------- Section 7 ---------- */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/assets/Image/apporch-img6.JPG"
            alt="Partnerships"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <motion.div>
            <h2 className="text-2xl font-semibold text-[#166534] mb-4">
              Partnerships and synergy
            </h2>
            <p>
              The approach involves collaboration with various stakeholders,
              including local authorities, the private sector, and research
              organizations. This is intended to leverage existing government
              programs and infrastructure, gain technical support, and amplify
              the project's impact.
            </p>
          </motion.div>
        </div>

        {/* ---------- Closing ---------- */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <p className="text-gray-700 leading-relaxed text-lg">
            By combining these strategic elements, GRAVIS seeks to create a
            replicable model for strengthening agriculture-based livelihoods,
            leading to economic empowerment and improved well-being for
            vulnerable communities in the Thar Desert.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default ApproachPage;
