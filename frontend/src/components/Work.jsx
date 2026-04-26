import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/mock";

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

const WorkCard = ({ project, large, compact }) => {
  return (
    <CardWrapper project={project}>
      <div
        className={`relative overflow-hidden rounded-sm ${
          large ? "aspect-[16/10]" : compact ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.cover}
          alt={project.title}
          className="work-card-image absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,22,18,0.05) 0%, rgba(26,22,18,0.55) 100%)",
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
