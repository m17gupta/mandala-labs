"use client";

import React from "react";
import { ArrowRight, Check, Sparkles, Shield, Zap, Boxes, Cpu } from "lucide-react";
import Hero from "@/components/sections/Hero";
import AIWorkshopSection from "@/components/sections/AIWorkshopSection";

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* Diagonal streaks / aurora beams (Payload-like) */}
      <div className="absolute inset-0 opacity-[0.85]">
      <div className="absolute inset-[-40%] rotate-[-18deg] overflow-hidden">
  <video
    className="w-full h-full object-cover"
    src="https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/video/glass-animation-5-f0gPcjmKFIV3ot5MGOdNy2r4QHBoXt.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

      </div>

      {/* Soft top/bottom fades */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/75 to-transparent" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Dots */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.30) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "2px 2px",
        }}
      />

      {/* Noise overlay */}
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

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 backdrop-blur">
    <Sparkles className="h-4 w-4 text-white/70" />
    {children}
  </span>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
    <div className="mt-1 text-sm text-white/60">{label}</div>
  </div>
);

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition">
    <div className="flex items-center gap-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/90">
        {icon}
      </div>
      <div className="text-lg font-semibold text-white">{title}</div>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
    <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
      Learn more <ArrowRight className="h-4 w-4" />
    </div>
  </div>
);

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white">
      <BackgroundFX />


     <Hero/>

     <AIWorkshopSection/>

      {/* HERO */}
      <section id="product" className="relative">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-20">
          <Pill>Code-first for developers • Content-first for teams</Pill>

          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                The backend to build the{" "}
                <span className="text-white/90 underline decoration-white/20 underline-offset-8">
                  modern web
                </span>
                .
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Ship fast with a premium dark UI, structured sections, and a Payload/Vercel-like
                background system (grid + dots + noise + diagonal beams).
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/85 hover:border-white/25">
                  View docs <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/70">
                {[
                  "Fast performance",
                  "SEO-ready layout",
                  "Design system friendly",
                  "Reusable sections",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-white/70" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* HERO MOCK UI */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-white/5 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-black/35 p-4 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="text-xs text-white/55">Admin / Studio</div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">Collections</div>
                    <div className="mt-3 space-y-2 text-sm text-white/65">
                      {["Pages", "Posts", "Media", "Forms", "Users"].map((x) => (
                        <div key={x} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                          {x}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">Preview</div>
                    <div className="mt-3 h-44 rounded-xl border border-white/10 bg-black/25" />
                    <div className="mt-3 h-16 rounded-xl border border-white/10 bg-black/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Stat value="2–6 weeks" label="Typical MVP timeline" />
            <Stat value="99.9%" label="Uptime-ready architecture" />
            <Stat value="A+ UI" label="Grid + beams + noise polish" />
          </div>
        </div>
      </section>
     
    

      {/* FEATURES */}
      <section id="features" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="text-xs uppercase tracking-widest text-white/45">Features</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
            Built to feel premium in dark mode
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/65 md:text-base">
            Same vibe like your screenshot: modern, layered, grid-based, subtle glow, and clean sections.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature icon={<Zap className="h-5 w-5" />} title="Fast UI" desc="Performance-focused layout with lightweight effects." />
            <Feature icon={<Boxes className="h-5 w-5" />} title="Scalable Structure" desc="Sections you can reuse across pages easily." />
            <Feature icon={<Cpu className="h-5 w-5" />} title="AI Ready" desc="Perfect for AI products, dashboards and admin panels." />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Feature icon={<Shield className="h-5 w-5" />} title="Secure" desc="Auth + RBAC friendly structure for SaaS." />
            <Feature icon={<Sparkles className="h-5 w-5" />} title="Design System" desc="Tailwind tokens + component patterns." />
            <Feature icon={<ArrowRight className="h-5 w-5" />} title="Conversion" desc="Hero + CTA + proof blocks like SaaS sites." />
          </div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section id="customers" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            <div className="text-xs uppercase tracking-widest text-white/45">Customers</div>
            <div className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">
              From startups to enterprise teams
            </div>
            <p className="mt-3 max-w-2xl text-sm text-white/65 md:text-base">
              Replace with your client logos/testimonials.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {["ACME", "Northwind", "Umbrella", "Globex", "Initech", "Aperture", "Stark", "Wayne"].map(
                (x) => (
                  <div
                    key={x}
                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 px-4 py-6 text-sm text-white/70"
                  >
                    {x}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="text-xs uppercase tracking-widest text-white/45">Pricing</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">Simple plans</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { name: "Starter", price: "$29", note: "For small teams" },
              { name: "Pro", price: "$99", note: "For scaling SaaS", popular: true },
              { name: "Enterprise", price: "Custom", note: "Security + SLA" },
            ].map((p) => (
              <div
                key={p.name}
                className={[
                  "rounded-3xl border p-7 backdrop-blur",
                  p.popular ? "border-white/25 bg-white/10" : "border-white/10 bg-white/5",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.name}</div>
                  {p.popular && (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-4 text-4xl font-semibold">{p.price}</div>
                <div className="mt-1 text-sm text-white/55">{p.note}</div>

                <div className="mt-6 space-y-3 text-sm text-white/70">
                  {["Premium dark theme", "Grid + beams background", "Responsive", "Clean sections"].map((x) => (
                    <div key={x} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-white/70" />
                      {x}
                    </div>
                  ))}
                </div>

                <button
                  className={[
                    "mt-7 w-full rounded-full px-5 py-3 text-sm font-semibold",
                    p.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/15 bg-white/5 text-white/85 hover:border-white/25",
                  ].join(" ")}
                >
                  Choose {p.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Want this exact background style?
                </div>
                <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
                  Tell me your brand colors (primary/secondary) — main beams ko same palette me tune kar dunga.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90">
                  Get started <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/85 hover:border-white/25">
                  Contact <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
              <div className="text-base font-semibold">YourBrand</div>
              <div className="mt-2 max-w-sm text-sm text-white/55">
                Premium dark homepage with Payload/Vercel-like background layers.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-white/70">Company</div>
                <a className="block text-white/55 hover:text-white" href="#product">Product</a>
                <a className="block text-white/55 hover:text-white" href="#features">Features</a>
                <a className="block text-white/55 hover:text-white" href="#pricing">Pricing</a>
              </div>
              <div className="space-y-2">
                <div className="text-white/70">Resources</div>
                <a className="block text-white/55 hover:text-white" href="#">Docs</a>
                <a className="block text-white/55 hover:text-white" href="#">Guides</a>
                <a className="block text-white/55 hover:text-white" href="#">Support</a>
              </div>
              <div className="space-y-2">
                <div className="text-white/70">Legal</div>
                <a className="block text-white/55 hover:text-white" href="#">Privacy</a>
                <a className="block text-white/55 hover:text-white" href="#">Terms</a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/45">
            © {new Date().getFullYear()} YourBrand — Dark Mode • Grid • Dots • Noise • Beams
          </div>
        </div>
      </footer>
    </main>
  );
}
