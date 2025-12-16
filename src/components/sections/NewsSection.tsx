"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title:
        "Empowering Rural Communities to Restore Farmland and Water Sources",
      description:
        "Our new initiative helps farmers in Rajasthan revive drylands through sustainable irrigation and soil restoration practices.",
      date: "November 5, 2025",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title:
        "Youth Leadership Program Launched to Promote Climate Awareness",
      description:
        "Young volunteers are being trained to lead climate education sessions in over 30 rural schools, inspiring action from the next generation.",
      date: "October 29, 2025",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title:
        "Advancing Women’s Rights in Land Ownership Across South Asia",
      description:
        "Our women-led advocacy network continues to support land rights campaigns and policy change efforts across India, Nepal, and Bangladesh.",
      date: "October 15, 2025",
      image:
        "/assets/Image/blog-img.jpg",
    },
  ];

  return (
    <section className="relative bg-[#F8F7F2] py-20">
      {/* subtle topographic pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gray-lines.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What’s New
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <div className="mt-4 text-sm text-gray-500">{item.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 ">
          <button className="inline-flex items-center gap-2 bg-[#008a2c] hover:bg-[#5B8A35] text-white px-6 py-3 font-semibold transition-colors duration-300"
          style={{borderRadius:"6px"}}
          >
            See All News
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
