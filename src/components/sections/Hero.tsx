"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, MessageCircle } from "lucide-react";

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

/* ===========================
   ✅ SectionFrame (Desktop same)
   Only mobile padding/overflow fix
   =========================== */
function SectionFrame({
  children,
  className = "",
  showTopBorder = true,
}: {
  children: React.ReactNode;
  className?: string;
  showTopBorder?: boolean;
}) {
  return (
    <section className={["relative", className].join(" ")}>
      {/* ✅ Desktop same: container-xl ms-auto
          ✅ Mobile fix: add px-4 sm:px-6 so content doesn't stick to edges */}
      <div className="ms-auto container-xl px-4 sm:px-6 lg:px-0">
        <div
          className={[
            "grid grid-cols-12",
            "overflow-hidden", // ✅ prevents border overflow on mobile
            showTopBorder ? "border-t" : "",
          ].join(" ")}
          style={{
            borderColor: showTopBorder ? COLORS.gridLine : "transparent",
            borderLeft: `1px solid ${COLORS.gridLine}`,
            borderRight: `1px solid ${COLORS.gridLine}`,
          }}
        >
          <div className="col-span-12 lg:col-span-12">{children}</div>
        </div>
      </div>
    </section>
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

/* HERO (Desktop same) */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <GlassVideoBackground />
      <div className="relative z-10">
        <SectionFrame showTopBorder={false}>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            {/* ✅ Desktop same: px-6 lg:px-12
                ✅ Mobile improvement: add sm:px-6 already covered by px-6 (so keep) */}
            <div className="px-6 lg:px-12 pt-10 lg:pt-16 pb-10">
              <motion.h1
                variants={fadeUp}
                className="text-[30px] sm:text-[42px] text-[36px] sm:text-[62px] lg:text-[84px] font-semibold leading-[1.2] tracking-tight text-white"
              >
                Artificial intelligence software development: Where innovation drives real-world results
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-10 max-w-[760px] text-base sm:text-lg leading-relaxed text-white/75">
                Our formula for AI software development? (High-quality data + robust algorithms + efficient infrastructure) × (top talent + flawless execution +
                ongoing monitoring) = success, every time.
              </motion.p>
            </div>

            <motion.div variants={fade} className="border-t" style={{ borderColor: COLORS.gridLine }}>
              <div className="px-6 lg:px-12 py-10">
                <div
                  className="h-[56px] w-full sm:w-[460px] max-w-[90vw] flex items-center justify-between px-8 text-black font-semibold"
                  style={{ background: COLORS.pink }}
                >
                  Get a quote
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </SectionFrame>
      </div>
    </section>
  );
}

/* SERVICES GRID (Desktop same) */
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
    <SectionFrame>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b" style={{ borderColor: COLORS.gridLine }}>
        {cards.map((c, i) => (
          <a
            key={c.title}
            href="#"
            className="group relative px-6 lg:px-12 py-14 hover:bg-white/[0.03] transition"
            style={{
              borderRight: i % 2 === 0 ? `1px solid ${COLORS.gridLine}` : "none",
              borderBottom: i < 2 ? `1px solid ${COLORS.gridLine}` : "none",
            }}
          >
            <div className="text-2xl sm:text-3xl font-semibold text-white">{c.title}</div>
            <p className="mt-6 max-w-[520px] text-sm sm:text-base leading-relaxed text-white/70">{c.desc}</p>

            <div className="mt-10 inline-flex items-center gap-2 text-white/80">
              Learn more
              <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="absolute left-6 lg:left-12 right-6 lg:right-12 bottom-10 h-[1px] bg-white/0 group-hover:bg-white/25 transition" />
            </div>
          </a>
        ))}
      </div>

      {/* Workshop split (Desktop same) */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-[280px] lg:h-[320px] hidden lg:block md:block" style={{ borderRight: `1px solid ${COLORS.gridLine}` }}>
          <div className="h-full w-full bg-black/25" />
        </div>
        <div className="px-6 lg:px-12 py-14 lg:py-16">
          <div className="text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.03] font-semibold text-white">
            Not sure where to start? Start with an AI workshop.
          </div>
        </div>
      </div>

      {/* CTA (Desktop same) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t" style={{ borderColor: COLORS.gridLine }}>
        <div className="h-[200px] hidden lg:block" style={{ borderRight: `1px solid ${COLORS.gridLine}` }}>
          <div className="h-full w-full bg-black/25" />
        </div>
        <div className="h-[200px] flex items-start justify-end p-6 lg:p-10">
          <a
            href="#"
            className="group w-full max-w-[520px] flex items-center justify-between px-10 lg:px-12 py-10 text-xl sm:text-2xl font-semibold text-black"
            style={{ background: COLORS.pink }}
          >
            Explore workshop details
            <ArrowUpRight className="h-7 w-7 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </SectionFrame>
  );
}

/* SOLUTIONS LIST (Desktop same) */
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
    <SectionFrame>
      <div className="px-6 lg:px-12 py-10 text-lg sm:text-2xl text-white/85">
        Mandala Labs transforms AI into a powerful growth engine, delivering top-of-the-line solutions that redefine efficiency and drive profit.
      </div>

      {rows.map((r, idx) => (
        <button
          key={r.no}
          type="button"
          onMouseEnter={() => setActive(idx)}
          onFocus={() => setActive(idx)}
          className="w-full text-left border-t"
          style={{ borderColor: COLORS.gridDarkLine }}
        >
          <div
            className="px-6 lg:px-12 py-12 sm:py-14 transition"
            style={{ background: idx === active ? "rgba(255,77,242,0.35)" : "transparent" }}
          >
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-2 text-3xl sm:text-4xl font-semibold text-white">{r.no}</div>

              <div className="col-span-12 md:col-span-10">
                <div className="text-2xl sm:text-3xl font-semibold text-white">{r.title}</div>
                <div className="mt-6 text-lg sm:text-2xl text-white/80">{r.lead}</div>

                <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-base sm:text-lg text-white/75">
                  {r.bullets.map((b) => (
                    <li key={b} className="list-disc ml-6">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </button>
      ))}
    </SectionFrame>
  );
}

/* BY SECTOR accordion (Desktop same, only mobile spacing improved) */
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

  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionFrame>
      <div className="px-6 lg:px-0 py-12 sm:py-16">
        {sectors.map((s, idx) => {
          const isOpen = open === idx;

          return (
            <div key={s.name} className="border-b" style={{ borderColor: COLORS.gridLine }}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full text-left py-8 group hover:bg-white/[0.03] transition ps-6 sm:ps-10 pe-6 sm:pe-14"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">{s.name}</div>
                  <div className="text-white/80">{isOpen ? <Minus className="h-7 w-7" /> : <Plus className="h-7 w-7" />}</div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pt-2 ps-6 sm:ps-10 pe-6 sm:pe-14">
                      {s.items.map((it) => (
                        <div key={it.h} className="mb-8">
                          <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{it.h}</div>
                          <p className="mt-3 text-sm sm:text-base lg:text-lg leading-relaxed text-white/70">{it.p}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionFrame>
  );
}

/* WHY */
function WhySection() {
  return (
    <SectionFrame>
      <a
        href="#"
        className="flex items-center justify-between px-6 lg:px-12 py-10 text-xl sm:text-2xl lg:text-3xl font-semibold text-black"
        style={{ background: COLORS.pink }}
      >
        Connect with our experts today
        <ArrowUpRight className="h-8 w-8" />
      </a>

      <div className="px-6 lg:px-12 py-12 sm:py-16">
        <div className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">Why Mandala Labs?</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t" style={{ borderColor: COLORS.gridLine }}>
        {[
          { big: "20", label: "Years of experience in\ncustom development" },
          { big: "100+", label: "AI professionals" },
          { big: "150+", label: "Completed AI projects" },
          { big: "☁", label: "Partnerships with AWS,\nMicrosoft, and Google" },
        ].map((s, i) => (
          <div
            key={i}
            className="px-6 sm:px-10 py-12 sm:py-14 hover:bg-white/[0.03] transition"
            style={{ borderRight: i !== 3 ? `1px solid ${COLORS.gridLine}` : "none" }}
          >
            <div className="text-[64px] sm:text-[86px] leading-none font-semibold" style={{ color: COLORS.pinkSoft }}>
              {s.big}
            </div>
            <div className="mt-8 whitespace-pre-line text-base sm:text-lg text-white/75">{s.label}</div>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

/* CASE STUDIES */
function CaseStudies() {
  return (
    <SectionFrame>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <a
          href="#"
          className="px-6 lg:px-12 py-14 group"
          style={{ background: COLORS.coral, borderRight: `1px solid ${COLORS.gridLine}` }}
        >
          <div className="text-sm font-semibold text-black/70">Case study</div>
          <div className="mt-8 text-2xl sm:text-3xl font-semibold text-black underline underline-offset-8 decoration-black/40 group-hover:decoration-black transition">
            EliseAI: Turning leads into leases
          </div>
          <p className="mt-8 max-w-[540px] text-base sm:text-lg leading-relaxed text-black/75">
            Mandala Labs developed an AI-powered leasing assistant that provides automatic replies about properties and rentals.
          </p>
        </a>

        <a href="#" className="px-6 lg:px-12 py-14 group hover:bg-white/[0.03] transition">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-5">
              <img src="./assets/Image/team-working-together-project.jpg" className="w-full h-auto" alt="" />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="text-sm font-semibold text-white/60">Case study</div>
              <div className="mt-8 text-2xl sm:text-3xl font-semibold text-white underline underline-offset-8 decoration-white/25 group-hover:decoration-white/60 transition">
                AI product development for Comet
              </div>
              <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/70">
                Monitoring solution that tracks neural network training and refines the process on the go.
              </p>
            </div>
          </div>
        </a>
      </div>

      <div
        className="border-t px-6 lg:px-12 py-12 sm:py-16 text-2xl sm:text-4xl font-semibold text-black"
        style={{ borderColor: COLORS.gridLine, background: COLORS.pink }}
      >
        Our clients say it best
      </div>
    </SectionFrame>
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
    <SectionFrame>
      <div className="grid grid-cols-1 lg:grid-cols-3 border-t" style={{ borderColor: COLORS.gridLine }}>
        {items.map((t, idx) => (
          <div
            key={t.who}
            className="px-6 lg:px-12 py-12 sm:py-16 border-b lg:border-b-0 hover:bg-white/[0.03] transition"
            style={{ borderColor: COLORS.gridLine, borderRight: idx !== 2 ? `1px solid ${COLORS.gridLine}` : "none" }}
          >
            <div className="text-base sm:text-lg leading-relaxed text-white/80">“{t.quote}”</div>
            <div className="mt-10 text-sm font-semibold text-white/60">{t.who}</div>
          </div>
        ))}
      </div>
    </SectionFrame>
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
    <SectionFrame>
      <div className="px-6 lg:px-12 py-12 sm:py-16">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">Seven pillars of AI model development process</div>
        <p className="mt-8 max-w-[760px] text-base sm:text-lg text-white/70">
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
            className="grid grid-cols-12 px-6 lg:px-12 py-12 sm:py-14 transition"
            style={{ background: idx === active ? "rgba(255,77,242,0.22)" : "transparent", color: "white" }}
          >
            <div className="col-span-12 md:col-span-3 text-[56px] sm:text-[72px] md:text-[86px] leading-none font-semibold opacity-90">
              {s.no}
            </div>
            <div className="col-span-12 md:col-span-9 mt-4 md:mt-0">
              <div className="text-2xl sm:text-3xl font-semibold">{s.title}</div>
              <p className="mt-6 max-w-[820px] text-base sm:text-lg leading-relaxed text-white/75">{s.desc}</p>
            </div>
          </div>
        </button>
      ))}
    </SectionFrame>
  );
}

/* Big quote */
function BigQuote() {
  return (
    <SectionFrame>
      <div className="px-6 lg:px-12 py-14 sm:py-20">
        <div className="text-sm font-semibold" style={{ color: COLORS.pinkSoft }}>
          Trusted methods for building innovative solutions
        </div>

        <div className="mt-10 text-[34px] sm:text-[46px] lg:text-[64px] leading-[1.08] font-semibold text-white">
          At Mandala Labs, our expertise in{" "}
          <span className="underline underline-offset-8 decoration-white/35">machine learning</span>{" "}
          subsets — supervised, unsupervised, and deep learning — helps us deliver solutions that are not only state-of-the-art.
        </div>

        <div className="mt-16 max-w-[520px] text-base sm:text-lg text-white/70 lg:ml-auto">
          When providing engineering services, we handpick the best of the AI and ML worlds for you.
        </div>
      </div>
    </SectionFrame>
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
    <SectionFrame>
      <div className="px-6 lg:px-12 pt-12 sm:pt-16 pb-10">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">Tech stack we use</div>
        <p className="mt-6 text-base sm:text-lg text-white/70">We craft custom AI solutions, blending the sharpest tech to sharpen your edge.</p>
      </div>

      <div className="border-t" style={{ borderColor: COLORS.gridLine }}>
        {rows.map((r, idx) => (
          <div
            key={r.left}
            onMouseEnter={() => setActive(idx)}
            className="grid grid-cols-12 px-6 lg:px-12 py-10 sm:py-12 border-b transition hover:bg-white/[0.03]"
            style={{ borderColor: COLORS.gridLine, background: active === idx ? "rgba(255,255,255,0.04)" : "transparent" }}
          >
            <div className="col-span-12 lg:col-span-4 text-2xl sm:text-3xl font-semibold text-white">{r.left}</div>
            <div className="col-span-12 lg:col-span-4 mt-6 lg:mt-0 text-base sm:text-lg text-white/80 space-y-4">
              {r.mid.map((x) => (
                <div key={x}>{x}</div>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-4 mt-6 lg:mt-0 text-base sm:text-lg text-white/70 space-y-4">
              {r.right.map((x) => (
                <div key={x}>{x}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionFrame>
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
