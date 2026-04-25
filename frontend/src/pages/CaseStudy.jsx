import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Truck,
  Settings,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Layers,
  Activity,
  Box,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/mock";

const Stat = ({ value, label }) => (
  <div className="border-t border-[color:var(--rule)] pt-3">
    <div className="font-display text-3xl md:text-4xl text-[color:var(--ink)]">{value}</div>
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mt-1">
      {label}
    </div>
  </div>
);

const Section = ({ index, eyebrow, title, kicker, children }) => (
  <section className="py-16 md:py-24 border-t border-[color:var(--rule)]">
    <div className="container-x">
      <div className="flex items-center gap-3 mb-8 md:mb-12">
        <span className="eyebrow">{eyebrow}</span>
        <span className="flex-1 rule" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          {index}
        </span>
      </div>
      <div className="grid grid-cols-12 gap-y-6 md:gap-x-10 mb-10">
        <div className="col-span-12 md:col-span-7">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
            {title}
          </h2>
        </div>
        {kicker && (
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-base md:text-lg leading-relaxed text-[color:var(--ink-3)]">{kicker}</p>
          </div>
        )}
      </div>
      {children}
    </div>
  </section>
);

const CaseStudy = () => {
  const project = projects.find((p) => p.id === "wellington-hub");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const challenges = [
    {
      icon: <Truck size={20} />,
      title: "Dual workforce complexity",
      body:
        "Office employees and DOT-regulated drivers needed different compliance, certification and timeline models, in one system.",
    },
    {
      icon: <Settings size={20} />,
      title: "Fleet × HR integration",
      body:
        "An expired medical card means a truck sits idle, costing thousands per day. HR and fleet operations had to be unified in real-time.",
    },
    {
      icon: <Clock size={20} />,
      title: "Time-sensitive operations",
      body:
        "In logistics, delays cascade. Slow onboarding means fewer drivers on the road, delayed shipments and lost revenue.",
    },
  ];

  const problems = [
    {
      n: "01",
      title: "Cognitive overload in navigation",
      body:
        "Dense layouts with weak hierarchy forced users to scan screens 3–4 times before taking action. Coordinators called the dashboard ‘intimidating’.",
      bullets: [
        "40% of coordinator time spent navigating",
        "2–3 hours of training just for basic navigation",
        "No clear information architecture",
      ],
    },
    {
      n: "02",
      title: "Fragmented onboarding workflows",
      body:
        "Onboarding a single driver required switching between 6 tabs and systems, creating context-switching fatigue and high error rates.",
      bullets: [
        "6–8 hour avg onboarding time",
        "Coordinators kept paper checklists",
        "No progress tracking or save-as-draft",
      ],
    },
    {
      n: "03",
      title: "Form complexity & abandonment",
      body:
        "A 47-field linear form with no grouping, no progress indication and validation only at submission. 34% of drivers abandoned mid-way.",
      bullets: [
        "45-min average completion time",
        "34% abandonment rate",
        "No auto-save = lost work on session timeout",
      ],
    },
    {
      n: "04",
      title: "Poor data table design",
      body:
        "Dense employee directory with cramped spacing, hidden actions and no status indicators. Operations resorted to Excel workarounds.",
      bullets: [
        "2–3 hours weekly on Excel exports",
        "Critical certifications missed",
        "No proactive alerts for expiring documents",
      ],
    },
    {
      n: "05",
      title: "Invisible system state",
      body:
        "No visual feedback for loading, progress or status. Result: $12,000/year in preventable maintenance costs from missed service intervals.",
      bullets: [
        "$12K+ annual losses from missed service",
        "Reactive firefighting over proactive ops",
        "Separate Excel trackers for visibility",
      ],
    },
  ];

  const strategy = [
    {
      n: "01",
      icon: <Layers size={20} />,
      title: "Information architecture",
      body:
        "Reorganized from feature-centric to task-oriented structure. Reduced navigation depth from 4–5 levels to 2–3.",
    },
    {
      n: "02",
      icon: <Eye size={20} />,
      title: "Progressive disclosure",
      body:
        "Broke the 47-field form into 3 logical steps with contextual side panels. Completion rate moved from 66% to 94%.",
    },
    {
      n: "03",
      icon: <Activity size={20} />,
      title: "Status-driven design",
      body:
        "Made system state visible through color-coded badges and real-time alerts. Reduced missed maintenance by ~90%.",
    },
    {
      n: "04",
      icon: <Box size={20} />,
      title: "Design system",
      body:
        "Built 47 reusable components ensuring consistency. New feature dev reduced from 3 weeks to 1.",
    },
  ];

  const impact = [
    ["Driver onboarding time", "6–8 hours", "2–3 hours", "↓ 60%"],
    ["Form completion rate", "66%", "94%", "↑ 28%"],
    ["Form error rate", "34%", "6%", "↓ 83%"],
    ["Dashboard task time", "5 minutes", "2 minutes", "↓ 60%"],
    ["Missed maintenance", "~12 / year", "~1 / year", "↓ 90%"],
    ["User satisfaction", "4.1 / 10", "8.2 / 10", "↑ 100%"],
    ["Annual cost savings", "—", "$12,000+", "New value"],
  ];

  const palette = [
    { name: "Wellington Red", hex: "#C93545" },
    { name: "Navy Blue", hex: "#2E3F5F" },
    { name: "Success", hex: "#4CAF50" },
    { name: "Warning", hex: "#FFC107" },
    { name: "Error", hex: "#F44336" },
    { name: "Ink", hex: "#1A1A1A" },
    { name: "Medium Grey", hex: "#6B6B6B" },
    { name: "Light Grey", hex: "#E0E0E0" },
  ];

  return (
    <main className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 grain">
        <div className="container-x">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--ink-3)] hover:text-[color:var(--terracotta)] transition-colors mb-10"
          >
            <ArrowLeft size={16} /> Back to index
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <span className="eyebrow">Case study · 01</span>
            <span className="flex-1 rule" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {project.year}
            </span>
          </div>

          <h1 className="font-display tracking-[-0.02em] text-[clamp(3rem,9vw,9rem)] leading-[0.92]">
            Wellington
            <br />
            <span className="serif-italic text-[color:var(--terracotta)]">Hub.</span>
          </h1>

          <div className="mt-8 grid grid-cols-12 gap-y-6 md:gap-x-10">
            <div className="col-span-12 md:col-span-7">
              <p className="font-display text-2xl md:text-3xl leading-[1.3] text-[color:var(--ink)]">
                Redesigning enterprise fleet operations for{" "}
                <span className="serif-italic text-[color:var(--terracotta)]">1,200+ drivers</span>.
                Reduced onboarding time by 60%, error rates by 83%, and delivered $12K+ in annual savings.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Role</dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{project.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Duration</dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{project.duration}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Company</dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{project.company}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Industry</dt>
                  <dd className="mt-1 text-[color:var(--ink)]">{project.industry}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((m) => (
              <Stat key={m.label} value={m.value} label={m.label} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.figma.com/proto/3jyZwSZduLjLdHq2iSKffH/Untitled?node-id=9-4103"
              target="_blank"
              rel="noreferrer"
              className="btn-ink"
            >
              View prototype <ArrowUpRight size={16} />
            </a>
            <a
              href="https://www.figma.com/design/3jyZwSZduLjLdHq2iSKffH/Untitled?node-id=0-1"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Design files <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Hero image / context band */}
      <section className="pb-8">
        <div className="container-x">
          <div className="relative aspect-[16/8] rounded-sm overflow-hidden">
            <img
              src="https://images.pexels.com/photos/28962928/pexels-photo-28962928.jpeg"
              alt="Operations workspace"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(26,22,18,0.1), rgba(26,22,18,0.6))" }}
            />
            <div className="absolute left-6 right-6 bottom-6 text-[color:var(--cream)] flex items-end justify-between">
              <div className="font-display text-2xl md:text-4xl leading-tight max-w-2xl">
                A unified, task-oriented platform for HR <span className="serif-italic">and</span> fleet operations.
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-80">
                Wellington Motor Freight
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Context */}
      <Section
        index="§ 01"
        eyebrow="Context"
        title={<>
          The <span className="serif-italic text-[color:var(--terracotta)]">challenge</span> at the surface, and underneath.
        </>}
        kicker="Wellington Hub manages 1,200+ employees and DOT-regulated drivers across North America. The existing HRMS created operational bottlenecks, compliance risks, and frustrated users."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((c) => (
            <div key={c.title} className="p-6 rounded-sm border border-[color:var(--rule)] bg-[color:var(--cream-2)]/50">
              <div className="w-10 h-10 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] flex items-center justify-center mb-5">
                {c.icon}
              </div>
              <h3 className="font-display text-2xl mb-2">{c.title}</h3>
              <p className="text-sm text-[color:var(--ink-3)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Discovery */}
      <Section
        index="§ 02"
        eyebrow="Discovery"
        title={<>Five critical UX failures, found in the field.</>}
        kicker="Through user interviews, workflow shadowing and system audits, I identified five problems costing the company time, money and user satisfaction."
      >
        <div className="divide-y divide-[color:var(--rule)] border-y border-[color:var(--rule)]">
          {problems.map((p) => (
            <div key={p.n} className="grid grid-cols-12 gap-4 md:gap-8 py-8">
              <div className="col-span-12 md:col-span-2 font-mono text-xs tracking-[0.22em] text-[color:var(--terracotta)] uppercase">
                {p.n}
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{p.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-[color:var(--ink-3)] leading-relaxed mb-4">{p.body}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[color:var(--ink-2)]">
                      <AlertCircle size={14} className="mt-1 flex-shrink-0 text-[color:var(--terracotta)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategy */}
      <Section
        index="§ 03"
        eyebrow="Solution"
        title={<>The <span className="serif-italic text-[color:var(--terracotta)]">design strategy</span>, in four moves.</>}
        kicker="A unified, task-oriented platform that reduces cognitive load, prevents errors and provides real-time operational visibility through strategic IA and progressive disclosure."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {strategy.map((s) => (
            <div key={s.n} className="p-6 md:p-7 border border-[color:var(--rule)] rounded-sm flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[color:var(--terracotta)] text-[color:var(--cream)] flex items-center justify-center">
                {s.icon}
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-1">
                  {s.n}
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-[color:var(--ink-3)] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Design system */}
      <Section
        index="§ 04"
        eyebrow="Foundation"
        title={<>A design system <span className="serif-italic">built for scale</span>.</>}
        kicker="47 reusable components across 8 categories, ensuring consistency across 40+ screens and enabling rapid feature development."
      >
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <div className="rounded-sm overflow-hidden border border-[color:var(--rule)] bg-white p-6 md:p-8">
              <div className="grid grid-cols-6 gap-4 md:gap-5">
                <div className="col-span-6 grid grid-cols-3 gap-3">
                  <button className="px-4 py-2.5 rounded-lg text-white text-xs font-semibold" style={{ background: "#C93545", boxShadow: "0 4px 12px rgba(201,53,69,0.3)" }}>Primary action</button>
                  <button className="px-4 py-2.5 rounded-lg text-xs font-semibold border" style={{ color: "#2E3F5F", borderColor: "#2E3F5F" }}>Secondary</button>
                  <button className="px-4 py-2.5 rounded-lg text-xs font-medium" style={{ color: "#6B6B6B" }}>Tertiary</button>
                </div>
                <div className="col-span-6 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md" style={{ background: "rgba(76,175,80,0.12)", color: "#2E7D32" }}>Active</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md" style={{ background: "rgba(244,67,54,0.12)", color: "#C62828" }}>Overdue</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md" style={{ background: "rgba(255,193,7,0.18)", color: "#8B6500" }}>Expiring</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-md" style={{ background: "rgba(46,63,95,0.10)", color: "#2E3F5F" }}>Draft</span>
                </div>
                <div className="col-span-6 md:col-span-3">
                  <label className="text-[10px] font-medium uppercase tracking-wider text-[#6B6B6B]">Driver license #</label>
                  <div className="mt-1 px-3.5 py-2.5 border-2 rounded-lg text-sm text-[#1A1A1A] bg-white" style={{ borderColor: "#C93545" }}>DL-7741-A23B</div>
                </div>
                <div className="col-span-6 md:col-span-3 p-4 rounded-2xl border bg-white" style={{ borderColor: "#E0E0E0", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B]">Compliance</span>
                    <span className="dot" />
                  </div>
                  <div className="text-2xl font-semibold text-[#1A1A1A]">94%</div>
                  <div className="text-[11px] text-[#6B6B6B] mt-1">Drivers up to date</div>
                </div>
                <div className="col-span-6 rounded-xl overflow-hidden border" style={{ borderColor: "#E0E0E0" }}>
                  <div className="grid grid-cols-12 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: "#2E3F5F" }}>
                    <span className="col-span-1">#</span>
                    <span className="col-span-5">Driver</span>
                    <span className="col-span-3">Status</span>
                    <span className="col-span-3">License</span>
                  </div>
                  {[
                    ["01", "Marcus Johnson", "Active", "Valid \u00b7 Aug 2027"],
                    ["02", "Priya Mehta", "Expiring", "Valid \u00b7 Mar 2026"],
                    ["03", "Diego Alvarez", "Active", "Valid \u00b7 Jan 2028"],
                  ].map((r, i) => (
                    <div key={r[0]} className={`grid grid-cols-12 px-4 py-3 text-xs items-center ${i % 2 === 0 ? "bg-[#FAF8F5]" : "bg-white"}`}>
                      <span className="col-span-1 text-[#6B6B6B] font-mono">{r[0]}</span>
                      <span className="col-span-5 text-[#1A1A1A]">{r[1]}</span>
                      <span className="col-span-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded" style={{
                          background: r[2] === "Active" ? "rgba(76,175,80,0.12)" : "rgba(255,193,7,0.18)",
                          color: r[2] === "Active" ? "#2E7D32" : "#8B6500"
                        }}>{r[2]}</span>
                      </span>
                      <span className="col-span-3 text-[#6B6B6B] text-[11px]">{r[3]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-[color:var(--muted)] font-mono uppercase tracking-[0.18em]">
              Fig. 01 — Component library &middot; buttons, badges, inputs, cards, tables
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-4">
              Color palette · WCAG AAA-tested
            </div>
            <div className="grid grid-cols-2 gap-3">
              {palette.map((c) => (
                <div key={c.hex} className="flex items-center gap-3 p-3 border border-[color:var(--rule)] rounded-sm">
                  <span className="w-9 h-9 rounded-sm border border-[color:var(--rule)]" style={{ background: c.hex }} />
                  <div>
                    <div className="text-sm text-[color:var(--ink)]">{c.name}</div>
                    <div className="font-mono text-[10px] uppercase text-[color:var(--muted)]">{c.hex}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 border border-[color:var(--rule)] rounded-sm">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--terracotta)] mb-2">
                Type system
              </div>
              <div className="text-sm text-[color:var(--ink-3)] leading-relaxed">
                Inter at 14–28px with a 4/8/16/24/32/48 spacing scale. 8px corner radius for inputs, 16px for cards.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section
        index="§ 05"
        eyebrow="Impact"
        title={<>Measurable <span className="serif-italic text-[color:var(--terracotta)]">business results</span>.</>}
        kicker="Every design decision tied back to a number — completion rate, error rate, time saved, dollars saved."
      >
        <div className="overflow-x-auto">
          <table className="w-full border-y border-[color:var(--rule)]">
            <thead>
              <tr className="text-left text-[10px] font-mono uppercase tracking-[0.22em] text-[color:var(--muted)]">
                <th className="py-4 pr-4">Metric</th>
                <th className="py-4 px-4">Before</th>
                <th className="py-4 px-4">After</th>
                <th className="py-4 pl-4">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {impact.map((row) => (
                <tr key={row[0]} className="border-t border-[color:var(--rule)]">
                  <td className="py-5 pr-4 text-base md:text-lg font-display text-[color:var(--ink)]">{row[0]}</td>
                  <td className="py-5 px-4 text-sm text-[color:var(--ink-3)]">{row[1]}</td>
                  <td className="py-5 px-4 text-sm text-[color:var(--ink-3)]">{row[2]}</td>
                  <td className="py-5 pl-4 text-sm font-medium text-[color:var(--terracotta)]">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Reflection */}
      <Section
        index="§ 06"
        eyebrow="Reflection"
        title={<>What worked, and what I’d change.</>}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-sm border border-[color:var(--rule)] bg-[color:var(--cream-2)]/50">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={18} className="text-[color:var(--terracotta)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">What worked</span>
            </div>
            <p className="text-[color:var(--ink-3)] leading-relaxed">
              Progressive disclosure was transformative. Breaking the 47-field form into 3 steps with clear progress
              indication reduced cognitive load and increased completion rates by 28 points.
            </p>
          </div>
          <div className="p-6 rounded-sm border border-[color:var(--rule)] bg-[color:var(--cream-2)]/50">
            <div className="flex items-center gap-2 mb-3">
              <Activity size={18} className="text-[color:var(--terracotta)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">What I’d change</span>
            </div>
            <p className="text-[color:var(--ink-3)] leading-relaxed">
              Earlier driver testing. I focused on HR coordinators first; testing with actual drivers earlier would
              have surfaced mobile usage patterns sooner.
            </p>
          </div>
          <div className="p-6 rounded-sm border border-[color:var(--rule)] bg-[color:var(--cream-2)]/50">
            <div className="flex items-center gap-2 mb-3">
              <Layers size={18} className="text-[color:var(--terracotta)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">Skills shown</span>
            </div>
            <p className="text-[color:var(--ink-3)] leading-relaxed">
              Strategic UX thinking, enterprise design at scale, and tying every design decision to measurable
              business impact.
            </p>
          </div>
        </div>
      </Section>

      {/* Next project */}
      <section className="py-20 md:py-28 border-t border-[color:var(--rule)]">
        <div className="container-x">
          <a
            href="https://joshirj21.github.io/smarten/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 flex-wrap"
          >
            <div>
              <span className="eyebrow">Next case · 02</span>
              <h3 className="mt-3 font-display text-4xl md:text-6xl tracking-[-0.01em] group-hover:text-[color:var(--terracotta)] transition-colors">
                Smartizen <span className="serif-italic">— EdTech</span>
              </h3>
            </div>
            <span className="w-14 h-14 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] flex items-center justify-center group-hover:bg-[color:var(--terracotta)] group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight size={20} />
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudy;
