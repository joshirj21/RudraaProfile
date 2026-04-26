import React from "react";
import { profile, philosophy } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-10 md:mb-16">
          <span className="eyebrow">§ 02 — About</span>
          <span className="flex-1 rule" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Designer profile
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg"
                alt="Designer workspace flatlay"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[color:var(--ink)]/10" />
              <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-[color:var(--cream)]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
                  Studio · Bengaluru
                </span>
                <span className="font-display text-xl serif-italic">2025</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="border-t border-[color:var(--rule)] pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mb-1">
                  Years
                </div>
                <div className="font-display text-3xl text-[color:var(--ink)]">1+</div>
              </div>
              <div className="border-t border-[color:var(--rule)] pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mb-1">
                  Products shipped
                </div>
                <div className="font-display text-3xl text-[color:var(--ink)]">7</div>
              </div>
              <div className="border-t border-[color:var(--rule)] pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mb-1">
                  Industries
                </div>
                <div className="font-display text-3xl text-[color:var(--ink)]">6</div>
              </div>
              <div className="border-t border-[color:var(--rule)] pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mb-1">
                  Coffee / day
                </div>
                <div className="font-display text-3xl text-[color:var(--ink)] serif-italic">∞</div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-6">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-[-0.01em] text-[color:var(--ink)]">
              I shape the <span className="serif-italic text-[color:var(--terracotta)]">quiet details</span>{" "}
              that make a product feel inevitable.
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-[color:var(--ink-3)] max-w-2xl">
              {profile.intro}
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[color:var(--ink-3)] max-w-2xl">
              My practice spans enterprise dashboards, AI chat surfaces, mobile EdTech and B2B SaaS. I’ve worked
              with logistics teams in North America, founders building AI tools, and educators serving 150+
              families — and the through-line is the same: <span className="serif-italic">design that earns trust by removing friction</span>.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {philosophy.map((p) => (
                <div key={p.n} className="border-t border-[color:var(--rule)] pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--terracotta)] mb-3">
                    {p.n}
                  </div>
                  <h3 className="font-display text-xl text-[color:var(--ink)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[color:var(--ink-3)] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
