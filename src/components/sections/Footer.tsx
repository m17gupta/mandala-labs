"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function FooterGrid() {
  const [mode] = useState<"dark" | "light">("dark");

  const isDark = mode === "dark";

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: isDark ? "#1f2022" : "#f7f7f8" }}
    >
      {/* Grid lines (full footer) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "320px 220px",
        }}
      />

      {/* Container */}
      <div className="relative mx-auto max-w-[1400px]">
        {/* ✅ RESPONSIVE WRAPPER (desktop same) */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT (Newsletter) */}
          

          {/* RIGHT (Links) */}
          <div className="col-span-12 lg:col-span-12 px-6 sm:px-8 md:px-12 py-10 md:py-14">
            {/* ✅ desktop same (grid-cols-4), mobile responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Column 1 */}
              <div>
                <h3 className="text-[30px] font-semibold text-white">
                  Mandala Labs{" "}
                  <span className="text-[14px] tracking-widest text-white/60 font-medium">
                    .xyz
                  </span>
                </h3>
              </div>

              <div>
                <div className="text-sm text-white/45 mb-5">About</div>
                <ul className="space-y-3">
                  {[
                    "Company",
                    "Portfolio",
                    "Partnerships",
                    "Newsroom",
                    "Media kit",
                    "Careers",
                    "Contact",
                  ].map((t) => (
                    <li key={t}>
                      <a
                        className="text-white/80 hover:text-white transition"
                        href="#"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-sm text-white/45 mb-5">
                  Delivery models
                </div>
                <ul className="space-y-3">
                  {[
                    "Dedicated development teams",
                    "Project-based delivery",
                  ].map((t) => (
                    <li key={t}>
                      <a
                        className="text-white/80 hover:text-white transition"
                        href="#"
                      >
                        {t}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-white/80 leading-relaxed">
                <div className="text-sm text-white/45 mb-5">Address</div>

                <div className="mb-5">
                  <div className="text-white/90 font-medium">
                    US: +1 (718) 374-5043
                  </div>
                  <div className="text-white/55">(Global)</div>
                </div>

                <div className="mb-5">
                  <div className="text-white/90 font-medium">
                    US: +1 (800) 338-4090
                  </div>
                  <div className="text-white/55">Toll-free</div>
                </div>

                <div>
                  <div className="text-white/90 font-medium">
                    575 Lexington Avenue, 14th Floor
                  </div>
                  <div className="text-white/55">New York, NY 10022</div>
                </div>
              </div>
            </div>

            {/* Badges row (responsive, desktop unchanged) */}
            <div className="mt-10 flex flex-wrap items-center gap-4 justify-center lg:justify-start gap-x-6 gap-y-4">
              <div className="rounded-xl bg-white/95 px-4 py-2 text-black text-sm font-semibold">
                4.9 ★★★★★{" "}
                <span className="text-black/60 font-medium">Based on reviews</span>
              </div>

              <div className="rounded-xl bg-[#2d3356] px-4 py-2 text-white text-sm font-semibold">
                ISO{" "}
                <span className="font-medium text-white/80">
                  27001 Certified
                </span>
              </div>

              <div className="rounded-xl bg-[#0b5c74] px-4 py-2 text-white text-sm font-semibold">
                BBB{" "}
                <span className="font-medium text-white/80">Accredited</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-12 px-6 sm:px-8 md:px-12 py-10 md:py-14 lg:border-r border-white/10">
            <h3
              className="text-[22px] sm:text-[26px] md:text-[34px] leading-[1.2] font-medium tracking-tight"
              style={{ color: isDark ? "rgba(255,255,255,0.92)" : "#111" }}
            >
              Subscribe to our newsletter for software{" "}
              <br className="hidden md:block" />
              and AI industry insights and company{" "}
              <br className="hidden md:block" />
              news!
            </h3>

            {/* Email row */}
            <div className="mt-8 md:mt-10">
              <div className="flex items-center gap-3 border-b border-white/15 pb-4">
                <input
                  placeholder="Email address*"
                  className="w-full bg-transparent text-sm sm:text-base outline-none placeholder:text-white/35"
                  style={{ color: isDark ? "rgba(255,255,255,0.9)" : "#111" }}
                />
                <button
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-white/30 transition"
                  aria-label="submit"
                >
                  <ArrowRight
                    className="h-5 w-5"
                    style={{ color: isDark ? "rgba(255,255,255,0.85)" : "#111" }}
                  />
                </button>
              </div>

              {/* Consent */}
              <label className="mt-4 flex items-start gap-3 text-xs sm:text-sm text-white/45">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-white/80"
                />
                <span className="leading-relaxed">
                  I agree to the{" "}
                  <a
                    className="underline underline-offset-4 text-white/55 hover:text-white/80"
                    href="#"
                  >
                    Privacy Policy
                  </a>{" "}
                  and give my permission to process my personal data for the
                  purposes specified in the Privacy Policy.
                </span>
              </label>

              {/* ✅ SOCIAL ICONS (added; desktop layout unchanged) */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {[
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                  { Icon: FaTwitter, label: "Twitter" },
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaYoutube, label: "YouTube" },
                  { Icon: FaFacebookF, label: "Facebook" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* tiny bottom line */}
        <div className="mt-10 py-6 border-t border-white/10 text-xs sm:text-sm text-white/45 text-center">
          © {new Date().getFullYear()} Mandala Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
