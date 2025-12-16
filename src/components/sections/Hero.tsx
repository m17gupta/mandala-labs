"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Search, Plus, Minus, MessageCircle } from "lucide-react";

/* ----------------------------- motion helpers ---------------------------- */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* --------------------------------- colors -------------------------------- */
const COLORS = {
  bg: "#151518",
  header1: "#121215",
  header2: "#2b0f3f",
  pink: "#ff4df2",
  pinkSoft: "#f39cff",
  coral: "#f08e86",
  gridLine: "rgba(255,255,255,0.12)",
  gridDarkLine: "rgba(255,255,255,0.10)",
};

/* ------------------------------ page utilities --------------------------- */
/**
 * FIXES:
 * 1) Left gutter now "hidden lg:block" => mobile pe blank row nahi banega (gap gone)
 * 2) Removed any bg on left gutter (no white block)
 */
function PageGrid({
  children,
  className = "",
  showTopBorder = true,
}: {
  children: React.ReactNode;
  className?: string;
  showTopBorder?: boolean;
}) {
  return (
    <div
      className={[
        "",
        showTopBorder ? "border-t" : "",
        className,
      ].join(" ")}
      style={{ borderColor: showTopBorder ? COLORS.gridLine : "transparent" }}
    >
      <div
        className="grid grid-cols-12"
        style={{
          borderLeft: `1px solid ${COLORS.gridLine}`,
          borderRight: `1px solid ${COLORS.gridLine}`,
        }}
      >
        {/* Left gutter like video (ONLY desktop) */}
        <div
          className="hidden lg:block lg:col-span-3"
          style={{ borderRight: `1px solid ${COLORS.gridLine}` }}
        />
        <div className="col-span-12 lg:col-span-9">{children}</div>
      </div>
    </div>
  );
}

/* ---------------------------- background video fx ------------------------- */
function GlassVideoBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: COLORS.bg }} />

      <div className="absolute inset-0 opacity-[0.95]">
        <div className="absolute inset-[-35%] rotate-[-18deg] overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src="https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/video/glass-animation-5-f0gPcjmKFIV3ot5MGOdNy2r4QHBoXt.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* dark fades */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/75 to-transparent" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* subtle dots */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.26) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "2px 2px",
        }}
      />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}



/* --------------------------------- floating chat -------------------------- */
function FloatingChat() {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        className="grid h-14 w-14 place-items-center rounded-full text-black shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
        style={{ background: COLORS.pink }}
        aria-label="chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

/* HERO */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <GlassVideoBackground />

      <div className="relative z-10">
        <PageGrid showTopBorder={false}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* FIX: header sticky offset add (content hidden nahi hoga) */}
            <div className="px-0 lg:px-12 pt-10 lg:pt-16 pb-10">
              <motion.h1
                variants={fadeUp}
                className="text-[44px] sm:text-[62px] lg:text-[84px] font-semibold leading-[1.02] tracking-tight text-white"
              >
                Artificial intelligence software development: Where innovation drives real-world results
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-10 max-w-[760px] text-lg leading-relaxed text-white/75">
                Our formula for AI software development? (High-quality data + robust algorithms + efficient infrastructure) ×
                (top talent + flawless execution + ongoing monitoring) = success, every time.
              </motion.p>
            </div>

            {/* bottom split image strip */}
            <motion.div variants={fade} className="border-t" style={{ borderColor: COLORS.gridLine }}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* <div className="h-[220px] lg:h-[260px]" style={{ borderRight: `1px solid ${COLORS.gridLine}` }}>
                  <div className="h-full w-full bg-black/25" />
                </div> */}
                <div className="h-[220px] lg:h-[260px]">
                  <div className="h-full w-full bg-black/10" />
                </div>
              </div>

              {/* magenta bar */}
              <div className="relative">
                <div
                  className="absolute left-0 -top-[56px] h-[56px] w-[460px] max-w-[90vw] flex items-center justify-between px-8 text-black font-semibold"
                  style={{ background: COLORS.pink }}
                >
                  Get a quote
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </PageGrid>
      </div>
    </section>
  );
}

/* SERVICES GRID */
function ServicesGrid() {
  const cards = [
    {
      title: "AI product development services",
      desc: "Improve your business workflows with AI capabilities or elevate your product’s success with AI-driven features.",
    },
    {
      title: "MVP development services",
      desc: "Start with proof of concept (PoC) or MVP to validate feasibility and gather early user feedback.",
    },
    {
      title: "Consulting and advisory services",
      desc: "Need help selecting a strategy, defining optimal models and tech stack, or enhancing software with advanced algorithms?",
    },
    {
      title: "AI training and support services",
      desc: "Prepare comprehensive datasets and train AI/ML models for peak performance—plus assess and improve existing systems.",
    },
  ];

  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b" style={{ borderColor: COLORS.gridLine }}>
          {cards.map((c, i) => (
            <a
              key={c.title}
              href="#"
              className="group relative px-12 py-14 hover:bg-white/[0.03] transition"
              style={{
                borderColor: COLORS.gridLine,
                borderRight: i % 2 === 0 ? `1px solid ${COLORS.gridLine}` : "none",
                borderBottom: i < 2 ? `1px solid ${COLORS.gridLine}` : "none",
              }}
            >
              <div className="text-3xl font-semibold text-white">{c.title}</div>
              <p className="mt-6 max-w-[520px] text-base leading-relaxed text-white/70">{c.desc}</p>

              <div className="mt-10 inline-flex items-center gap-2 text-white/80">
                Learn more
                <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute left-12 right-12 bottom-10 h-[1px] bg-white/0 group-hover:bg-white/25 transition" />
              </div>
            </a>
          ))}
        </div>
      </PageGrid>

      {/* Workshop split */}
      <PageGrid>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[280px] lg:h-[320px]" style={{ borderRight: `1px solid ${COLORS.gridLine}` }}>
            <div className="h-full w-full bg-black/25" />
          </div>
          <div className="px-12 py-14 lg:py-16">
            <div className="text-[44px] lg:text-[54px] leading-[1.03] font-semibold text-white">
              Not sure where to start? Start with an AI workshop.
            </div>
          </div>
        </div>
      </PageGrid>

      {/* CTA row */}
      <div className="mx-auto max-w-[1320px] px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 border-t"
          style={{
            borderColor: COLORS.gridLine,
            borderLeft: `1px solid ${COLORS.gridLine}`,
            borderRight: `1px solid ${COLORS.gridLine}`,
          }}
        >
          <div className="h-[200px]" style={{ borderRight: `1px solid ${COLORS.gridLine}` }}>
            <div className="h-full w-full bg-black/25" />
          </div>
          <div className="h-[200px] flex items-start justify-end p-10">
            <a
              href="#"
              className="group w-full max-w-[520px] flex items-center justify-between px-12 py-10 text-2xl font-semibold text-black"
              style={{ background: COLORS.pink }}
            >
              Explore workshop details
              <ArrowUpRight className="h-7 w-7 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ✅ SOLUTIONS LIST (FIXED: DARK BG + WHITE TEXT + no invisible content) */
function SolutionsList() {
  const rows = useMemo(
    () => [
      {
        no: "01",
        title: "Natural language processing (NLP)",
        lead: "Use machines to handle text and speech challenges at speed and scale.",
        bullets: [
          "Chatbots and virtual assistants",
          "Speech recognition",
          "Text-to-speech",
          "Text analysis and summarization",
          "Sentiment analysis",
          "Machine translation",
          "Email response automation",
          "Content localization",
        ],
      },
      {
        no: "02",
        title: "Computer vision",
        lead: "Analyze images and video to automate decisions and workflows.",
        bullets: ["Object detection", "Segmentation", "Quality control", "Document understanding", "Visual search", "Defect detection"],
      },
      {
        no: "03",
        title: "Predictive analytics",
        lead: "Forecast outcomes and optimize operations with data-driven models.",
        bullets: ["Demand forecasting", "Risk scoring", "Churn prediction", "Anomaly detection", "Capacity planning"],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section
     className="bg-transparent relative z-10"
    >
      {/* subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative">
        {/* statement strip */}
        <div className="mx-auto max-w-[1320px] px-6">
          <div
            className="grid grid-cols-12 border-t"
            style={{
              borderColor: COLORS.gridDarkLine,
              borderLeft: `1px solid ${COLORS.gridDarkLine}`,
              borderRight: `1px solid ${COLORS.gridDarkLine}`,
            }}
          >
            <div className="hidden lg:block lg:col-span-3" style={{ borderRight: `1px solid ${COLORS.gridDarkLine}` }} />
            <div className="col-span-12 lg:col-span-9 px-12 py-10 text-2xl text-white/85">
              Vention transforms AI into a powerful growth engine, delivering top-of-the-line solutions that redefine efficiency and drive profit.
            </div>
          </div>
        </div>

        {/* rows */}
        {rows.map((r, idx) => (
          <div key={r.no} className="mx-auto max-w-[1320px] px-6">
            <div
              className="grid grid-cols-12 border-t"
              style={{
                borderColor: COLORS.gridDarkLine,
                borderLeft: `1px solid ${COLORS.gridDarkLine}`,
                borderRight: `1px solid ${COLORS.gridDarkLine}`,
              }}
            >
              <div className="hidden lg:block lg:col-span-3" style={{ borderRight: `1px solid ${COLORS.gridDarkLine}` }} />

              <button
                type="button"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                className="col-span-12 lg:col-span-9 w-full text-left px-12 py-14 transition"
                style={{
                  background: idx === active ? "rgba(255,77,242,0.35)" : "transparent",
                }}
              >
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-2 text-4xl font-semibold text-white">
                    {r.no}
                  </div>

                  <div className="col-span-12 md:col-span-10">
                    <div className="text-3xl font-semibold text-white">{r.title}</div>
                    <div className="mt-6 text-2xl text-white/80">{r.lead}</div>

                    <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-lg text-white/75">
                      {r.bullets.map((b) => (
                        <li key={b} className="list-disc ml-6">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* BY SECTOR accordion */
function BySectorAccordion() {
  const sectors = useMemo(
    () => [
      {
        name: "Fintech",
        items: [
          { h: "Portfolio management", p: "Evaluate investment risks, identify high-performing assets, and construct portfolios that meet performance targets." },
          { h: "Algorithmic trading", p: "Process vast market data in real time and execute trades automatically when specific conditions are met." },
          { h: "Customer service", p: "Address frequent queries in seconds and gauge customer sentiment to improve satisfaction and reduce costs." },
        ],
      },
      {
        name: "Healthtech",
        items: [
          { h: "Clinical decision support", p: "Assist clinicians with risk scoring and decision insights." },
          { h: "Medical imaging", p: "Detect, segment, and prioritize findings from scans faster." },
        ],
      },
      {
        name: "Retail",
        items: [
          { h: "Demand forecasting", p: "Predict demand to optimize inventory and pricing." },
          { h: "Personalization", p: "Recommend products and content across channels." },
        ],
      },
    ],
    []
  );

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-12 py-16" style={{ borderRight: `1px solid ${COLORS.gridLine}` }}>
            {sectors.map((s, idx) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setOpen(idx)}
                className="w-full text-left py-10 border-b group hover:bg-white/[0.03] transition"
                style={{ borderColor: COLORS.gridLine }}
              >
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-semibold text-white">{s.name}</div>
                  <div className="text-white/80">{open === idx ? <Minus className="h-8 w-8" /> : <Plus className="h-8 w-8" />}</div>
                </div>
                <div className="mt-4 h-[1px] bg-white/0 group-hover:bg-white/20 transition" />
              </button>
            ))}
          </div>

          <div className="px-12 py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={sectors[open].name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease } }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.35, ease } }}
              >
                {sectors[open].items.map((it) => (
                  <div key={it.h} className="mb-10">
                    <div className="text-2xl font-semibold text-white">{it.h}</div>
                    <p className="mt-4 text-lg leading-relaxed text-white/70">{it.p}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PageGrid>
    </section>
  );
}

/* CTA + WHY */
function WhySection() {
  return (
    <section className="bg-transparent relative z-10">
      <div className="mx-auto max-w-[1320px] px-6">
        <div
          className="grid grid-cols-12 border-t"
          style={{
            borderColor: COLORS.gridLine,
            borderLeft: `1px solid ${COLORS.gridLine}`,
            borderRight: `1px solid ${COLORS.gridLine}`,
          }}
        >
          <div className="hidden lg:block lg:col-span-3" style={{ borderRight: `1px solid ${COLORS.gridLine}` }} />
          <a
            href="#"
            className="col-span-12 lg:col-span-9 flex items-center justify-between px-12 py-10 text-3xl font-semibold text-black"
            style={{ background: COLORS.pink }}
          >
            Connect with our experts today
            <ArrowUpRight className="h-8 w-8" />
          </a>
        </div>
      </div>

      <PageGrid>
        <div className="px-12 py-18 py-16">
          <div className="text-center text-6xl font-semibold text-white">Why Vention?</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t" style={{ borderColor: COLORS.gridLine }}>
          {[
            { big: "20", label: "Years of experience in\ncustom development" },
            { big: "100+", label: "AI professionals" },
            { big: "150+", label: "Completed AI projects" },
            { big: "☁", label: "Partnerships with AWS,\nMicrosoft, and Google" },
          ].map((s, i) => (
            <div
              key={i}
              className="px-10 py-14 hover:bg-white/[0.03] transition"
              style={{ borderRight: i !== 3 ? `1px solid ${COLORS.gridLine}` : "none" }}
            >
              <div className="text-[86px] leading-none font-semibold" style={{ color: COLORS.pinkSoft }}>
                {s.big}
              </div>
              <div className="mt-8 whitespace-pre-line text-lg text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </PageGrid>
    </section>
  );
}

/* CASE STUDIES */
function CaseStudies() {
  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <a
            href="#"
            className="px-12 py-14 group"
            style={{ background: COLORS.coral, borderRight: `1px solid ${COLORS.gridLine}` }}
          >
            <div className="text-sm font-semibold text-black/70">Case study</div>
            <div className="mt-8 text-3xl font-semibold text-black underline underline-offset-8 decoration-black/40 group-hover:decoration-black transition">
              EliseAI: Turning leads into leases
            </div>
            <p className="mt-8 max-w-[540px] text-lg leading-relaxed text-black/75">
              Vention developed an AI-powered leasing assistant that provides automatic replies about properties and rentals.
            </p>
          </a>

          <a href="#" className="px-12 py-14 group hover:bg-white/[0.03] transition">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-5">
                <div className="h-[220px] w-full bg-white/10" />
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="text-sm font-semibold text-white/60">Case study</div>
                <div className="mt-8 text-3xl font-semibold text-white underline underline-offset-8 decoration-white/25 group-hover:decoration-white/60 transition">
                  AI product development for Comet
                </div>
                <p className="mt-8 text-lg leading-relaxed text-white/70">
                  Monitoring solution that tracks neural network training and refines the process on the go.
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-0 border-t px-12 py-16 text-4xl font-semibold text-black" style={{ borderColor: COLORS.gridLine, background: COLORS.pink }}>
          Our clients say it best
        </div>
      </PageGrid>
    </section>
  );
}

/* TESTIMONIALS */
function Testimonials() {
  const items = [
    { quote: "They integrated AI into our product seamlessly and improved accuracy while keeping latency low.", who: "Product Lead, SaaS" },
    { quote: "Clear communication, strong engineering, and delivery that matched our timeline.", who: "CTO, Fintech" },
    { quote: "Great partner for PoC → production. Monitoring + iteration was handled properly.", who: "Head of Data, Retail" },
  ];

  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t" style={{ borderColor: COLORS.gridLine }}>
          {items.map((t, idx) => (
            <div
              key={t.who}
              className="px-12 py-16 border-b lg:border-b-0 group hover:bg-white/[0.03] transition"
              style={{ borderColor: COLORS.gridLine, borderRight: idx !== 2 ? `1px solid ${COLORS.gridLine}` : "none" }}
            >
              <div className="text-lg leading-relaxed text-white/80">“{t.quote}”</div>
              <div className="mt-10 text-sm font-semibold text-white/60">{t.who}</div>
              <div className="mt-10 h-[1px] bg-white/0 group-hover:bg-white/20 transition" />
            </div>
          ))}
        </div>
      </PageGrid>
    </section>
  );
}

/* 7 PILLARS */
function SevenPillars() {
  const steps = useMemo(
    () => [
      { no: "01", title: "Mathematical formalization", desc: "Define clear outcomes and KPIs. Establish evaluation metrics like accuracy, precision, recall, and F1 score." },
      { no: "02", title: "Data collection", desc: "Aggregate, label, and validate high-quality datasets." },
      { no: "03", title: "Exploratory data analysis", desc: "Inspect distributions, outliers, leakage, and bias." },
      { no: "04", title: "Model development", desc: "Select algorithms, train, tune, and benchmark baselines." },
      { no: "05", title: "Validation", desc: "Stress-test on edge cases and measure real-world performance." },
      { no: "06", title: "Deployment", desc: "Ship safely with observability, rollback, and SLAs." },
      { no: "07", title: "Ongoing monitoring", desc: "Track drift, retrain when needed, and improve continuously." },
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="px-12 py-16">
          <div className="text-6xl font-semibold text-white">Seven pillars of AI model development process</div>
          <p className="mt-8 max-w-[760px] text-lg text-white/70">
            From setting goals to ongoing monitoring — check out how we ensure smooth delivery of AI components.
          </p>
        </div>

        {steps.map((s, idx) => (
          <button
            key={s.no}
            type="button"
            onMouseEnter={() => setActive(idx)}
            onFocus={() => setActive(idx)}
            className="w-full text-left border-t"
            style={{ borderColor: COLORS.gridLine }}
          >
            <div
              className="grid grid-cols-12 px-12 py-14 transition"
              style={{
                background: idx === active ? "rgba(255,77,242,0.22)" : "transparent",
                color: "white",
              }}
            >
              <div className="col-span-12 md:col-span-3 text-[86px] leading-none font-semibold opacity-90">{s.no}</div>
              <div className="col-span-12 md:col-span-9">
                <div className="text-3xl font-semibold">{s.title}</div>
                <p className="mt-6 max-w-[820px] text-lg leading-relaxed text-white/75">{s.desc}</p>
              </div>
            </div>
          </button>
        ))}
      </PageGrid>
    </section>
  );
}

/* Big quote */
function BigQuote() {
  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="px-12 py-20">
          <div className="text-sm font-semibold" style={{ color: COLORS.pinkSoft }}>
            Trusted methods for building innovative solutions
          </div>

          <div className="mt-10 text-[46px] sm:text-[56px] lg:text-[64px] leading-[1.08] font-semibold text-white">
            At Vention, our expertise in{" "}
            <span className="underline underline-offset-8 decoration-white/35">machine learning</span>{" "}
            subsets — supervised, unsupervised, and deep learning — helps us deliver solutions that are not only state-of-the-art.
          </div>

          <div className="mt-16 max-w-[520px] text-lg text-white/70 lg:ml-auto">
            When providing engineering services, we handpick the best of the AI and ML worlds for you.
          </div>
        </div>
      </PageGrid>
    </section>
  );
}

/* Methods table */
function MethodsTable() {
  const rows = [
    { left: "Supervised learning", mid: ["Linear regression", "Random forest", "XGBoost"], right: ["Classification", "Regression", "Ranking"] },
    { left: "Unsupervised learning", mid: ["Clustering", "Dimensionality reduction", "Anomaly detection"], right: ["K-means", "PCA", "Isolation forest"] },
    { left: "Deep learning", mid: ["Convolutional neural networks", "Recurrent neural networks", "Encoder-decoder + transformers"], right: ["ResNet, U-Net, YOLO, BERT", "Autoencoders", "GANs"] },
  ];

  const [active, setActive] = useState(2);

  return (
    <section className="bg-transparent relative z-10">
      <PageGrid>
        <div className="px-12 pt-16 pb-10">
          <div className="text-6xl font-semibold text-white">Tech stack we use</div>
          <p className="mt-6 text-lg text-white/70">We craft custom AI solutions, blending the sharpest tech to sharpen your edge.</p>
        </div>

        <div className="border-t" style={{ borderColor: COLORS.gridLine }}>
          {rows.map((r, idx) => (
            <div
              key={r.left}
              onMouseEnter={() => setActive(idx)}
              className="grid grid-cols-12 px-12 py-12 border-b transition hover:bg-white/[0.03]"
              style={{
                borderColor: COLORS.gridLine,
                background: active === idx ? "rgba(255,255,255,0.04)" : "transparent",
              }}
            >
              <div className="col-span-12 lg:col-span-4 text-3xl font-semibold text-white">{r.left}</div>
              <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 text-lg text-white/80 space-y-4">
                {r.mid.map((x) => <div key={x}>{x}</div>)}
              </div>
              <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 text-lg text-white/70 space-y-4">
                {r.right.map((x) => <div key={x}>{x}</div>)}
              </div>
            </div>
          ))}
        </div>
      </PageGrid>



      {/* Footer */}
      <div className="mx-auto max-w-[1320px] px-6">
        <div
          className="grid grid-cols-12 border-t py-12 text-white/60"
          style={{
            borderColor: COLORS.gridLine,
            borderLeft: `1px solid ${COLORS.gridLine}`,
            borderRight: `1px solid ${COLORS.gridLine}`,
          }}
        >
          <div className="hidden lg:block lg:col-span-3" />
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-8 px-12">
            <div className="text-2xl font-semibold text-white">vention</div>
            <div className="text-sm">© {new Date().getFullYear()} — Fixed gaps + all text white</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- main page ------------------------------ */
export default function HomePage() {
  return (
    <main className="min-h-screen text-white" style={{ background: COLORS.bg }}>
      
      <FloatingChat />

      <HeroSection />
      <ServicesGrid />
      <SolutionsList />

      <BySectorAccordion />
      <WhySection />
      <CaseStudies />
      <Testimonials />
      <SevenPillars />
      <BigQuote />
      <MethodsTable />
    </main>
  );

}
