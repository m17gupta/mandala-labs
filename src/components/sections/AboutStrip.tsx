"use client";

import React from "react";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

export default function AboutApproach() {
  const sections = [
    {
      id: 1,
      icon: <Lightbulb className="w-10 h-10 text-white" />, // Icon color changed to white for contrast
      title: "Our Approach",
      points: [
        "Capacity building",
        "Blending traditional wisdom with new technology",
        "Inclusion",
        "Community participation",
        "Stakeholder cooperation",
      ],
      // Placeholder image URL - REPLACE WITH YOUR ACTUAL IMAGE URLs
      image: "./assets/Image/our-apporch-img.jpg", 
      link: "/approach", // Placeholder link
    },
    {
      id: 2,
      icon: <Target className="w-10 h-10 text-white" />, // Icon color changed to white for contrast
      title: "Key Interventions",
      points: [
        "Formation and strengthening of CBOs",
        "Rainwater harvesting and dryland farming",
        "Horticulture and animal husbandry",
        "Skill development and entrepreneurship",
        "Documentation and advocacy",
      ],
      // Placeholder image URL - REPLACE WITH YOUR ACTUAL IMAGE URLs
          image: "./assets/Image/slider-img2.png", 

      link: "/project-overview", // Placeholder link
    },
    {
      id: 3,
      icon: <TrendingUp className="w-10 h-10 text-white" />, // Icon color changed to white for contrast
      title: "Expected Outcomes",
      points: [
        "CBOs and CSOs in the Thar trained in sustainable farming and water harvesting",
        "Improved crop yields and farmers' income",
        "Drylands restored, enhanced nutrition status of communities",
        "Women and youth equipped with financial, digital, and entrepreneurial skills",
        "ABL policies supported and best practices documented and disseminated",
      ],
      // Placeholder image URL - REPLACE WITH YOUR ACTUAL IMAGE URLs
      image: "./assets/Image/slider-img3.png", 
      link: "/impact", // Placeholder link
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 bg-[#fff]">
      <div className="container-xl mx-auto">
        {/* The 3 Blobs structure is retained for side-by-side layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              // Container div for the background image and content overlay
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl h-full min-h-[400px]`} 
            >
              {/* Background Image with Dark Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${section.image})` }}
                aria-hidden="true"
              >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/60"></div> 
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-8 text-left h-full flex flex-col justify-between text-white">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    {section.icon}
                    <h3 className="text-2xl font-bold">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {/* Bullet point color is now white */}
                        <span className="text-white ">•</span> 
                        <span className="text-gray-100">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read More Button */}
                <div className="flex justify-end mt-6">
                  <a
                    href={section.link} // Changed button to 'a' tag for linking purposes
                    className="group inline-flex items-center gap-2 text-white font-medium px-0 py-2.5 transition-all duration-300 border-b-2 border-white hover:border-[#008a2c] hover:text-[#008a2c]"
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}