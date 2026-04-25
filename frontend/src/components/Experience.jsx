import React from "react";
import { experiences } from "../data/mock";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="eyebrow">§ 04 — Journal</span>
          <span className="flex-1 rule" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Six chapters &middot; 2024–2026
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-14">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.01em]">
              A field log of <span className="serif-italic text-[color:var(--terracotta)]">working hours</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--ink-3)]">
              From ergonomic redesigns of power tools at a manufacturing floor, to chatbot UI for AI products,
              to mentoring the next group of designers — here’s where I’ve been useful.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
          {experiences.map((exp, i) => (
            <div
              key={exp.company + exp.period}
              className="group grid grid-cols-12 gap-2 md:gap-6 py-6 md:py-8 transition-colors hover:bg-[color:var(--cream-2)]/40"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-[color:var(--muted)] tracking-[0.2em] pt-1">
                0{i + 1}
              </div>
              <div className="col-span-10 md:col-span-4">
                <div className="font-display text-2xl md:text-3xl leading-tight text-[color:var(--ink)] group-hover:text-[color:var(--terracotta)] transition-colors">
                  {exp.company}
                </div>
                <div className="text-sm text-[color:var(--muted)] mt-1">{exp.role}</div>
              </div>
              <div className="col-span-12 md:col-span-5 text-base text-[color:var(--ink-3)] leading-relaxed">
                {exp.description}
              </div>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-3)]">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
