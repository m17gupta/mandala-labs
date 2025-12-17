"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

type MenuKey = "expertise" | "industries" | "engagement" | "about" | null;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState<MenuKey>(null);

  // close drawer on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll when drawer open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const data = useMemo(
    () => ({
      expertise: [
        {
          title: "Services",
          items: [
            "Software development",
            "Web development",
            "Mobile development",
            "Quality Assurance",
            "DevOps",
            "Cloud consulting",
            "Cybersecurity",
          ],
        },
        {
          title: "Technologies",
          items: [
            "AI",
            "Backend",
            "Frontend",
            "AR / VR",
            "Blockchain",
            "Big data",
            "All technologies",
          ],
        },
        {
          title: "Platforms",
          items: ["AWS", "Azure", "Google Cloud", "Salesforce", "SharePoint"],
        },
      ],
      industries: [
        {
          title: "Industries",
          items: ["Healthcare", "Fintech", "Retail", "Manufacturing", "Education"],
        },
        { title: "Solutions", items: ["Enterprise", "Startups", "SMEs"] },
        { title: "Markets", items: ["USA", "Europe", "Asia"] },
      ],
      engagement: [
        { title: "Models", items: ["Dedicated team", "Fixed price", "Time & material"] },
        { title: "Approach", items: ["Agile", "Scrum", "Kanban"] },
        { title: "Support", items: ["24/7", "SLA based"] },
      ],
      about: [
        { title: "Company", items: ["About us", "Leadership", "Careers"] },
        { title: "Culture", items: ["Values", "Life at company"] },
        { title: "Media", items: ["Blog", "News", "Events"] },
      ],
    }),
    []
  );

  return (
    <header
      className="relative bg-[#1c1e21] text-white sticky top-0 z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="flex h-[72px] items-center justify-between gap-2">
            {/* LEFT: Mobile Menu Button + Logo */}
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>

              <div className="flex items-baseline gap-1">
                <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-semibold text-white leading-none">
                  Mandala Labs
                  {/* <span className="ml-1 text-[12px] sm:text-[14px] tracking-widest text-white/60 font-medium">
                    .xyz
                  </span> */}
                </h3>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex h-full items-center gap-10 text-[15px]">
              <NavItem
                label="Expertise"
                active={activeMenu === "expertise"}
                onHover={() => setActiveMenu("expertise")}
              />
              <NavItem
                label="Industries"
                active={activeMenu === "industries"}
                onHover={() => setActiveMenu("industries")}
              />
              <NavItem
                label="Engagement models"
                active={activeMenu === "engagement"}
                onHover={() => setActiveMenu("engagement")}
              />
              <NavText label="Portfolio" />
              <NavItem
                label="About us"
                active={activeMenu === "about"}
                onHover={() => setActiveMenu("about")}
              />
              <NavText label="Insights" />
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3 sm:gap-6">
              <button
                className="hidden sm:inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <button className="bg-[#ff4df2] px-4 sm:px-6 py-3 text-sm font-medium text-white">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      {activeMenu && (
        <MegaMenu type={activeMenu} data={data} />
      )}

      {/* MOBILE OFF-CANVAS */}
      {mobileOpen && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/60 z-[60]"
            onClick={() => setMobileOpen(false)}
          />

          {/* drawer */}
          <aside className="fixed left-0 top-0 z-[70] h-full w-[86%] max-w-[360px] bg-[#15171a] border-r border-white/10">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <div className="text-lg font-semibold">
                Mandala Labs
                {/* <span className="text-white/60 text-sm ml-1">.xyz</span> */}
              </div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* content */}
            <div className="px-4 py-2 overflow-y-auto h-[calc(100%-72px)]">
              {/* quick links */}
              <div className="space-y-2 mb-4">
                <MobileLink label="Portfolio" onClick={() => setMobileOpen(false)} />
                <MobileLink label="Insights" onClick={() => setMobileOpen(false)} />
              </div>

              {/* accordions */}
              <MobileAccordion
                title="Expertise"
                isOpen={openAcc === "expertise"}
                onToggle={() => setOpenAcc(openAcc === "expertise" ? null : "expertise")}
              >
                <MobileColumns blocks={data.expertise} onItem={() => setMobileOpen(false)} />
              </MobileAccordion>

              <MobileAccordion
                title="Industries"
                isOpen={openAcc === "industries"}
                onToggle={() => setOpenAcc(openAcc === "industries" ? null : "industries")}
              >
                <MobileColumns blocks={data.industries} onItem={() => setMobileOpen(false)} />
              </MobileAccordion>

              <MobileAccordion
                title="Engagement models"
                isOpen={openAcc === "engagement"}
                onToggle={() => setOpenAcc(openAcc === "engagement" ? null : "engagement")}
              >
                <MobileColumns blocks={data.engagement} onItem={() => setMobileOpen(false)} />
              </MobileAccordion>

              <MobileAccordion
                title="About us"
                isOpen={openAcc === "about"}
                onToggle={() => setOpenAcc(openAcc === "about" ? null : "about")}
              >
                <MobileColumns blocks={data.about} onItem={() => setMobileOpen(false)} />
              </MobileAccordion>

              {/* footer CTA */}
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/80">
                  Want to start a project with us but need cost details?
                </p>
                <button
                  className="mt-3 w-full bg-[#ff4df2] py-3 text-sm font-semibold text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Get an estimate ↗
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}

/* ---------------- NAV ITEMS ---------------- */

function NavItem({
  label,
  active,
  onHover,
}: {
  label: string;
  active: boolean;
  onHover: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      className="relative flex h-[72px] cursor-pointer items-center gap-1"
    >
      <span>{label}</span>
      <ChevronDown size={14} />
      {active && (
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff6a3d]" />
      )}
    </div>
  );
}

function NavText({ label }: { label: string }) {
  return (
    <div className="flex h-[72px] items-center">
      <span>{label}</span>
    </div>
  );
}

/* ---------------- MEGA MENU (DESKTOP) ---------------- */

function MegaMenu({
  type,
  data,
}: {
  type: Exclude<MenuKey, null>;
  data: Record<string, { title: string; items: string[] }[]>;
}) {
  return (
    <div className="absolute left-0 top-full w-full bg-[#202225] shadow-lg z-50 hidden lg:block">
      <div className="mx-auto max-w-[1440px] px-10 py-16">
        <div className="grid grid-cols-12">
          {/* LEFT COLOR BLOCK */}
          <div className="col-span-3 bg-gradient-to-b from-[#4c63d2] to-[#2b2f55]" />

          {/* CONTENT */}
          {data[type].map((block) => (
            <Column key={block.title} title={block.title} items={block.items} />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex items-center justify-between bg-gradient-to-r from-[#3b5bff] to-[#6a5cff] px-10 py-6">
          <p className="text-[18px] font-medium">
            Want to start a project with us but need cost details? Click here for
            an estimate
          </p>
          <span className="text-2xl">↗</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COLUMN ---------------- */

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="col-span-3 pl-14">
      <p className="mb-6 text-[14px] text-white/40">{title}</p>
      <ul className="space-y-5 text-[18px]">
        {items.map((item) => (
          <li key={item} className="hover:text-white/90 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- MOBILE UI ---------------- */

function MobileLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-lg  px-4 py-3 text-white/90  hover:bg-white/10"
    >
      {label}
    </button>
  );
}

function MobileAccordion({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-left text-white/90 "
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          size={16}
          className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

function MobileColumns({
  blocks,
  onItem,
}: {
  blocks: { title: string; items: string[] }[];
  onItem: () => void;
}) {
  return (
    <div className="space-y-4">
      {blocks.map((b) => (
        <div key={b.title}>
          <div className="text-xs uppercase tracking-widest text-white/50 mb-2">
            {b.title}
          </div>
          <div className="grid grid-cols-1 gap-2">
            {b.items.map((x) => (
              <button
                key={x}
                onClick={onItem}
                className="text-left rounded-lg px-3 py-2 text-white/85 hover:bg-white/10"
              >
                {x}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
