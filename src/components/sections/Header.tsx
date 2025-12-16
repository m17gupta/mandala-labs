"use client";

import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

type MenuKey =
  | "expertise"
  | "industries"
  | "engagement"
  | "about"
  | null;

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);

  return (
    <header
      className="relative bg-[#1c1e21] text-white sticky top-0 z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px] px-10">
          <div className="flex h-[72px] items-center justify-between">
            {/* LOGO */}
            <div className="text-[28px] font-medium">venton</div>

            {/* NAV */}
            <nav className="flex h-full items-center gap-10 text-[15px]">
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

            {/* ACTION */}
            <div className="flex items-center gap-6">
              <Search size={18} />
              <button className="bg-[#ff6a3d] px-6 py-3 text-sm font-medium text-black">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MEGA MENU */}
      {activeMenu && <MegaMenu type={activeMenu} />}
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

/* ---------------- MEGA MENU ---------------- */

function MegaMenu({ type }: { type: MenuKey }) {
  return (
    <div className="absolute left-0 top-full w-full bg-[#202225] shadow-lg z-50">
      <div className="mx-auto max-w-[1440px] px-10 py-16">
        <div className="grid grid-cols-12">
          {/* LEFT COLOR BLOCK */}
          <div className="col-span-3 bg-gradient-to-b from-[#4c63d2] to-[#2b2f55]" />

          {/* CONTENT */}
          {type === "expertise" && <ExpertiseContent />}
          {type === "industries" && <IndustriesContent />}
          {type === "engagement" && <EngagementContent />}
          {type === "about" && <AboutContent />}
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

/* ---------------- CONTENT BLOCKS ---------------- */

function ExpertiseContent() {
  return (
    <>
      <Column
        title="Services"
        items={[
          "Software development",
          "Web development",
          "Mobile development",
          "Quality Assurance",
          "DevOps",
          "Cloud consulting",
          "Cybersecurity",
        ]}
      />
      <Column
        title="Technologies"
        items={[
          "AI",
          "Backend",
          "Frontend",
          "AR / VR",
          "Blockchain",
          "Big data",
          "All technologies",
        ]}
      />
      <Column
        title="Platforms"
        items={[
          "AWS",
          "Azure",
          "Google Cloud",
          "Salesforce",
          "SharePoint",
        ]}
      />
    </>
  );
}

function IndustriesContent() {
  return (
    <>
      <Column
        title="Industries"
        items={[
          "Healthcare",
          "Fintech",
          "Retail",
          "Manufacturing",
          "Education",
        ]}
      />
      <Column title="Solutions" items={["Enterprise", "Startups", "SMEs"]} />
      <Column title="Markets" items={["USA", "Europe", "Asia"]} />
    </>
  );
}

function EngagementContent() {
  return (
    <>
      <Column
        title="Models"
        items={["Dedicated team", "Fixed price", "Time & material"]}
      />
      <Column title="Approach" items={["Agile", "Scrum", "Kanban"]} />
      <Column title="Support" items={["24/7", "SLA based"]} />
    </>
  );
}

function AboutContent() {
  return (
    <>
      <Column title="Company" items={["About us", "Leadership", "Careers"]} />
      <Column title="Culture" items={["Values", "Life at company"]} />
      <Column title="Media" items={["Blog", "News", "Events"]} />
    </>
  );
}

/* ---------------- COLUMN ---------------- */

function Column({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="col-span-3 pl-14">
      <p className="mb-6 text-[14px] text-white/40">{title}</p>
      <ul className="space-y-5 text-[18px]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
