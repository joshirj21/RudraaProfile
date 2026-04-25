import React from "react";
import { skills, education } from "../data/mock";

const Pill = ({ children }) => (
  <span className="px-3 py-1.5 text-sm rounded-full border border-[color:var(--rule)] bg-[color:var(--cream-2)]/40 text-[color:var(--ink-2)] hover:border-[color:var(--terracotta)] hover:text-[color:var(--terracotta)] transition-colors">
    {children}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[color:var(--rule)] bg-[color:var(--cream-2)]/40">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="eyebrow">§ 05 — Toolkit & Schooling</span>
          <span className="flex-1 rule" />
        </div>

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em] mb-10">
              The <span className="serif-italic text-[color:var(--terracotta)]">instruments</span> on the bench.
            </h2>

            <div className="space-y-10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-4">
                  Practice
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.expertise.map((s) => <Pill key={s}>{s}</Pill>)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-4">
                  Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((s) => <Pill key={s}>{s}</Pill>)}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-4">
                  Sensibilities
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((s) => <Pill key={s}>{s}</Pill>)}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-4">
              Schooling
            </div>
            <ul className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
              {education.map((ed) => (
                <li key={ed.school + ed.period} className="py-5">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <div>
                      <div className="font-display text-2xl text-[color:var(--ink)]">{ed.school}</div>
                      <div className="text-sm text-[color:var(--ink-3)] mt-1">
                        {ed.degree}{ed.location ? ` · ${ed.location}` : ""}
                      </div>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                      {ed.period}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-sm border border-[color:var(--rule)] bg-[color:var(--cream)]">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--terracotta)] mb-3">
                Recognition
              </div>
              <p className="font-display text-xl leading-snug text-[color:var(--ink)]">
                Grounded in product thinking, structured UI systems, and a stubborn belief that interfaces should
                <span className="serif-italic"> respect the user’s time</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
