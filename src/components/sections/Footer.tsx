"use client";
import React, { useState } from "react";
import { Globe, Mail, MapPin, Menu, PhoneCall, X } from "lucide-react";
import footerLogo from "../../../public/assets/Image/logo-footer.svg";
import appStore from "../../../public/assets/Image/appStore.png";
import googlePlay from "../../../public/assets/Image/googlePlay.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaHeadset,
} from "react-icons/fa";

/* ---------------- FOOTER ---------------- */
const Footer = () => {
  return (
    <footer className="bg-[#008a2c] text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-[50%_50%] gap-12">
        {/* Brand */}
        <div className="w-[100%] md:w-[75%]">
        
          <div className="flex items-center gap-3">
            <span className="text-[#fff] font-bold text-2xl md:text-3xl">
             Strengthening Agriculture-Based Livelihoods In The Thar Desert (SABL)
            </span>
          </div>

          <div className="mt-4">
            <img src="./assets/Image/EN_FundedbytheEU_RGB_WHITE Outline.png" alt="Eu Logo" className="w-96"></img>
          </div>
          {/* <p className="mt-4 text-white leading-relaxed text-base">
            Empowering sustainable agriculture and innovative technology to
            build a better future for rural communities.
          </p> */}



        
        
        </div>

        {/* Quick Links */}
        {/* <div>
          <h4 className="text-xl font-semibold text-white mb-5 border-l-4 border-[#fff] pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-white">
            {[
              "Home",
              "About Gravis",
              "SABL Project",
              "Resources",
              "Photo Gallery",
              "Get Involved",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#f1f1f1] transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Customer Area */}
        {/* <div>
          <h4 className="text-xl font-semibold mb-5 text-white border-l-4 border-[#fff] pl-3">
            Customer Area 
          </h4>
          <ul className="space-y-3  text-white">
            {[
              // "My Account",

              // "Tracking List",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#fff] transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact */}
         <div>
      <h4 className="text-xl font-semibold mb-5 text-white border-l-4 border-[#fff] pl-3">
        Contact
      </h4>

      {/* <p className="text-white">
        Have any questions or need help? Reach out to us anytime.
      </p> */}

      {/* 🔹 Phone */}
      <div className="mt-3 flex items-center gap-3">
        <PhoneCall className="w-5 h-5 text-white" />
        <a
          href="tel:+912912785116"
          className="text-base font-medium text-white hover:text-[#f1f1f1]"
        >
          +91-291-2785-116
        </a>
      </div>


      {/* 🔹 Email */}
      <div className="mt-3 flex items-center gap-3">
        <Mail className="w-5 h-5 text-white" />
        <a
          href="mailto:email@gravis.org.in"
          className="text-base font-medium text-white hover:text-[#f1f1f1]"
        >
          email@gravis.org.in
        </a>
      </div>

      {/* 🔹 Address */}
      <div className="mt-3 flex items-center gap-3 max-w-[90%]">
        <MapPin className="md:w-6  w-12 h-12 md:h-6  text-white mt-1" />
        <p className="text-base font-medium text-white leading-snug">
          3/437, 458, M.M Colony, Pal Road,
           Jodhpur – 342008, Rajasthan, India
        </p>
      </div>

       
    </div>

    
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 text-center" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex justify-center font-semibold text-white  text-sm">
        <p>© 2025 SABL. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

/* ---------------- LAYOUT WRAPPER ---------------- */
export default function MainLayout(
  {
    //   children,
    // }: {
    //   //children: React.ReactNode;
    //
  }
) {
  return (
    <div className="flex flex-col bg-white text-gray-900">
      <Footer />
    </div>
  );
}
