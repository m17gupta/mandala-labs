"use client";
import React from "react";
import { ArrowRight, Download } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Center for Women’s Land Rights",
    image: "https://gravis.org.in/wp-content/uploads/2023/05/AR2021-22.png",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
    year: "2023-2024",
  },
  {
    id: 2,
    title: "Climate Change",
    image: "https://gravis.org.in/wp-content/uploads/2023/05/AR2021-22.png",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
    year: "2023-2024",
  },
  {
    id: 3,
    title: "Corporate Engagement",
    image: "https://gravis.org.in/wp-content/uploads/2023/05/AR2021-22.png",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
    year: "2023-2024",
  },
   {
    id: 4,
    title: "Corporate Engagement",
    image: "https://gravis.org.in/wp-content/uploads/2023/05/AR2021-22.png",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
    year: "2023-2024",
  },
   {
    id: 5,
    title: "Corporate Engagement",
    image: "https://gravis.org.in/wp-content/uploads/2023/05/AR2021-22.png",
    pdfUrl: "/assets/Image/Gravis-Annual-Report-2021-22.pdf",
    year: "2023-2024",
  },
];

export default function OurWork() {
  return (
    <section className="bg-[#F8F7F2] py-20">
      <div className="container-xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {programs.map((program) => (
            <a
              key={program.id}
              href={program.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group relative"
            >
              {/* IMAGE */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />

                {/* 🔥 HOVER DOWNLOAD OVERLAY */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white">
                  <Download size={38} className="mb-2" />
                  <span className="text-lg font-semibold">{program.year}</span>
                </div>
              </div>

              {/* TITLE + ARROW */}
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-xs font-semibold text-gray-900">
                  {program.title}
                </h3>
                <ArrowRight
                  className="text-gray-800 transition-transform duration-300 group-hover:translate-x-1"
                  size={16}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
