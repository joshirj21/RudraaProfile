import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Figma, ExternalLink, Play } from "lucide-react";
import { projects } from "../data/mock";

const QuickLinks = ({ links }) => {
  if (!links || !links.length) return null;
  const stop = (e) => e.stopPropagation();
  const iconFor = (label) => {
    const l = label.toLowerCase();
    if (l.includes("prototype")) return <Play size={13} className="fill-current" />;
    if (l.includes("figma")) return <Figma size={13} />;
    return <ExternalLink size={13} />;
  };
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          onClick={stop}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] bg-[color:var(--cream)] hover:bg-[color:var(--ink)] hover:text-[color:var(--cream)] transition-colors"
        >
          {iconFor(l.label)}
          <span>{l.label}</span>
          <ArrowUpRight size={13} />
        </a>
      ))}
    </div>
  );
};

const CardWrapper = ({ project, children }) => {
  if (project.type === "case-study") {
    return (
      <Link to={project.href} className="work-card block">
        {children}
      </Link>
    );
  }
  if (project.type === "external") {
    return (
      <a href={project.href} target="_blank" rel="noreferrer" className="work-card block">
        {children}
      </a>
    );
  }
  return <div className="work-card block cursor-default">{children}</div>;
};

const SmartizenCover = ({ screens }) => {
  const [splash, welcome] = screens || [];
  return (
    <div className="work-card-image absolute inset-0 w-full h-full overflow-hidden">
      {/* Brand gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, #FFE6F2 0%, #F5DCEC 22%, #EDD3F1 45%, #E0BBE8 75%, #C8A2D6 100%)",
        }}
      />
      {/* Soft decorative blobs */}
      <div
        className="absolute -top-12 -left-12 w-72 h-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFB37A 0%, transparent 65%)" }}
      />
      <div
        className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #B5279A 0%, transparent 65%)" }}
      />
      {/* Halftone grid */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6E2461 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Phones */}
      <div className="absolute inset-0 flex items-end justify-center gap-3 sm:gap-5 md:gap-7 pt-10 sm:pt-12 md:pt-16 pb-0 px-6">
        {/* Splash phone */}
        <div
          className="relative w-[34%] sm:w-[30%] md:w-[28%] aspect-[9/19] rounded-[18px] overflow-hidden bg-white -rotate-[6deg] translate-y-6 shadow-[0_20px_55px_rgba(110,36,97,0.30)] ring-1 ring-black/5"
        >
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-black/40 z-10" />
          <img
            src={splash}
            alt="Smartizen splash screen"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Welcome phone */}
        <div
          className="relative w-[36%] sm:w-[32%] md:w-[30%] aspect-[9/19] rounded-[18px] overflow-hidden bg-white rotate-[5deg] -translate-y-2 shadow-[0_24px_60px_rgba(110,36,97,0.30)] ring-1 ring-black/5"
        >
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-black/40 z-10" />
          <img
            src={welcome}
            alt="Smartizen welcome / role select"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Brand chip */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] font-mono uppercase tracking-[0.22em]" style={{ color: "#6E2461" }}>
        Smartizen &middot; iOS / Android
      </div>
    </div>
  );
};

const WorkCard = ({ project, large, compact }) => {
  return (
    <CardWrapper project={project}>
      <div
        className={`relative overflow-hidden rounded-sm ${
          large ? "aspect-[16/10]" : compact ? "aspect-[5.5/5]" : "aspect-[4/3]"
        }`}
      >
        {project.customCover === "smartizen" ? (
          <SmartizenCover screens={project.coverScreens} />
        ) : (
          <img
            src={project.cover}
            alt={project.title}
            className="work-card-image absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              project.customCover === "smartizen"
                ? "linear-gradient(180deg, rgba(26,22,18,0) 55%, rgba(26,22,18,0.55) 100%)"
                : "linear-gradient(180deg, rgba(26,22,18,0.05) 0%, rgba(26,22,18,0.55) 100%)",
          }}
        />

        <div
          className={`absolute ${
            compact ? "top-3 left-3 right-3" : "top-4 left-4 right-4"
          } flex items-start justify-between text-[color:var(--cream)]`}
        >
          <span
            className={`font-mono ${
              compact ? "text-[9px]" : "text-[10px]"
            } uppercase tracking-[0.2em] opacity-90`}
          >
            {project.index} / {project.year}
          </span>
          {project.type === "case-study" && (
            <span
              className={`${
                compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-1"
              } font-mono uppercase tracking-[0.2em] rounded-full border border-white/40 backdrop-blur-sm`}
            >
              Case study
            </span>
          )}
          {project.type === "external" && (
            <span
              className={`${
                compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-1"
              } font-mono uppercase tracking-[0.2em] rounded-full border border-white/40 backdrop-blur-sm`}
            >
              Live site
            </span>
          )}
          {project.type === "coming-soon" && (
            <span
              className={`${
                compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-1"
              } font-mono uppercase tracking-[0.2em] rounded-full border border-white/40 backdrop-blur-sm`}
            >
              Soon
            </span>
          )}
        </div>

        <div
          className={`absolute ${
            compact ? "left-3 right-3 bottom-3" : "left-5 right-5 bottom-5"
          } flex items-end justify-between gap-2 text-[color:var(--cream)]`}
        >
          <div className="min-w-0">
            <h3
              className={`font-display ${
                large
                  ? "text-4xl md:text-6xl"
                  : compact
                  ? "text-lg sm:text-xl md:text-2xl"
                  : "text-2xl md:text-3xl"
              } leading-[0.95] truncate`}
            >
              {project.title}
            </h3>
            <div
              className={`mt-1 ${
                compact ? "text-[10px] sm:text-[11px]" : "text-xs md:text-sm"
              } opacity-90 line-clamp-1`}
            >
              {project.subtitle}
            </div>
          </div>
          <span
            className={`work-card-arrow inline-flex items-center justify-center rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] flex-shrink-0 ${
              compact ? "w-8 h-8" : "w-11 h-11"
            }`}
          >
            <ArrowUpRight size={compact ? 14 : 18} />
          </span>
        </div>
      </div>

      {!compact && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          <span className="flex-1" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {project.industry}
          </span>
        </div>
      )}

      {!compact && project.quickLinks && (
        <QuickLinks links={project.quickLinks} />
      )}

      {compact && (
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)] truncate">
            {project.industry}
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-3)] flex-shrink-0">
            {project.tags[0]}
          </span>
        </div>
      )}

      {large && (
        <p className="mt-4 text-base md:text-lg leading-relaxed text-[color:var(--ink-3)] max-w-2xl">
          {project.summary}
        </p>
      )}
      {large && project.metrics && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="border-t border-[color:var(--rule)] pt-3">
              <div className="font-display text-3xl text-[color:var(--ink)]">{m.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </CardWrapper>
  );
};

const Work = () => {
  const featured = projects[0];
  const second = projects[1];
  const rest = projects.slice(2);

  return (
    <section id="work" className="py-24 md:py-32 bg-[color:var(--cream)]">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 md:mb-16 gap-6 flex-wrap">
          <div className="flex items-center gap-3 flex-1 min-w-[260px]">
            <span className="eyebrow">§ 03 — Selected Work</span>
            <span className="flex-1 rule" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-[-0.01em] text-[color:var(--ink)]">
            A short index of <span className="serif-italic text-[color:var(--terracotta)]">recent rooms</span>
            <br className="hidden md:block" />
            I’ve been building.
          </h2>
        </div>

        <div className="mb-16 md:mb-24">
          <WorkCard project={featured} large />
        </div>

        <div className="mb-12">
          <WorkCard project={second} />
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {rest.map((p) => (
            <WorkCard key={p.id} project={p} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
