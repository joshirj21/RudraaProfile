import React from "react";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "../data/mock";

const MarqueeRow = () => {
  const items = [
    "Product Design",
    "—",
    "Design Systems",
    "—",
    "SaaS",
    "—",
    "AI Interfaces",
    "—",
    "Dashboards",
    "—",
    "Enterprise UX",
    "—",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden no-scrollbar border-y border-[color:var(--rule)] py-5">
      <div className="marquee-track font-display text-2xl md:text-3xl text-[color:var(--ink-2)]">
        {doubled.map((t, i) => (
          <span key={i} className={i % 4 === 0 ? "serif-italic text-[color:var(--terracotta)]" : ""}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="index" className="relative pt-28 md:pt-36 pb-10 grain">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-8 md:mb-12 fade-up">
          <span className="eyebrow">§ Index 2025/26</span>
          <span className="flex-1 rule" />
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[color:var(--muted)] flex items-center gap-1.5">
            <MapPin size={12} /> {profile.location}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-6 md:gap-x-8 fade-up" style={{ animationDelay: "60ms" }}>
          <div className="col-span-12 md:col-span-1 flex md:block items-baseline gap-3">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[color:var(--muted)]">
              No. 01
            </span>
          </div>
          <div className="col-span-12 md:col-span-11">
            <h1 className="font-display tracking-[-0.02em] text-[clamp(3rem,11vw,11rem)] leading-[0.9] text-[color:var(--ink)]">
              Rudraa
              <br />
              <span className="serif-italic text-[color:var(--terracotta)]">Joshi</span>
              <span className="text-[color:var(--ink)]">.</span>
            </h1>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-1" />
          <div className="col-span-12 md:col-span-6">
            <p className="font-display text-2xl md:text-[2rem] leading-[1.25] text-[color:var(--ink)]">
              {profile.role}
              <span className="text-[color:var(--muted)]"> — </span>
              <span className="serif-italic">{profile.tagline}</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-end">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 text-[color:var(--ink)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Selected work
              </span>
              <span className="w-12 h-12 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] flex items-center justify-center transition-all duration-300 group-hover:bg-[color:var(--terracotta)] group-hover:rotate-45">
                <ArrowDownRight size={18} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <MarqueeRow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
