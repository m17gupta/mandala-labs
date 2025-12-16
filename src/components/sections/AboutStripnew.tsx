"use client";

import React from "react";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

export default function AboutApproach() {
  const sections = [
    {
      id: 1,
      icon: <Lightbulb className="w-10 h-10 text-[#008a2c]" />,
      title: "Our Approach",
      points: [
        "Capacity Building",
        "Blending traditional wisdom with new technology",
        "Inclusion",
        "Community participation",
        "Stakeholder cooperation",
      ],
      bg: "bg-[#f8fbf5]",
      border: "border-[#008a2c]",
    },
    {
      id: 2,
      icon: <Target className="w-10 h-10 text-[#FF914D]" />,
      title: "Key Interventions",
      points: [
        "Formation and strengthening of CBOs",
        "Rainwater harvesting and dryland farming",
        "Horticulture and Animal Husbandry",
        "Skill development and entrepreneurship",
        "Documentation and Advocacy",
      ],
      bg: "bg-[#fffaf5]",
      border: "border-[#FF914D]",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-10 h-10 text-[#5082C3]" />,
      title: "Expected Outcomes",
      points: [
        "CBOs and CSOs in the Thar trained in sustainable farming and water harvesting",
        "Improved crop yields and farmers' income",
        "Drylands restored, enhanced nutrition status of communities",
        "Women and youth equipped with financial, digital, and entrepreneurial skills",
        "ABL policies supported and best practices documented and disseminated",
      ],
      bg: "bg-[#f5f8fc]",
      border: "border-[#5082C3]",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-[#fff]">
      <div className="container-xl mx-auto">
      {/* <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-5">
          Strengthening Agricultural Livelihoods
        </h2>
        <p className="text-gray-600 text-lg">
          Our integrated approach combines community participation, innovation,
          and sustainability to empower rural livelihoods.
        </p>
      </div> */}

      {/* 3 Blobs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`relative rounded-2xl shadow-md p-8 text-left border-t-4 ${section.border} ${section.bg} transition-transform hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-5">
              {section.icon}
              <h3 className="text-2xl font-semibold text-[#333]">
                {section.title}
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#008a2c] mt-1.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
        <div className="flex justify-end mt-6">
  <button
    className="group inline-flex items-center gap-2 bg-transprent hover:bg-transprent  text-[#008a2c] font-medium px-0 py-2.5  transition-all duration-300 "
  >
    <span>Read More</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
