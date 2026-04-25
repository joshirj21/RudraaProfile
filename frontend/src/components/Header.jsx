import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "../data/mock";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    if (!onHome) return; // anchor scrolling only on home
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--cream)]/85 border-b border-[color:var(--rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl md:text-2xl tracking-tight leading-none">
            Rudraa<span className="text-[color:var(--terracotta)]">.</span>
          </span>
          <span className="hidden md:inline text-[11px] font-mono uppercase tracking-[0.2em] text-[color:var(--muted)]">
            Designer / Folio &mdash; v1
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={onHome ? l.href : `/${l.href}`}
              onClick={(e) => handleNav(e, l.href)}
              className="group flex items-baseline gap-1.5 text-sm text-[color:var(--ink-2)] hover:text-[color:var(--terracotta)] transition-colors"
            >
              <span className="font-mono text-[10px] text-[color:var(--muted)]">
                0{i + 1}
              </span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-1">
            <span className="dot" />
            <span className="text-xs text-[color:var(--ink-3)]">
              {profile.available ? "Available for work" : "Booked"}
            </span>
          </div>
          <a
            href={onHome ? "#contact" : "/#contact"}
            onClick={(e) => handleNav(e, "#contact")}
            className="btn-ink text-xs md:text-sm"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>
          <button
            className="md:hidden ml-1 w-9 h-9 flex flex-col items-center justify-center gap-[5px] border border-[color:var(--rule)] rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className={`w-4 h-px bg-[color:var(--ink)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`w-4 h-px bg-[color:var(--ink)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--rule)] bg-[color:var(--cream)]">
          <div className="container-x py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={onHome ? l.href : `/${l.href}`}
                onClick={(e) => handleNav(e, l.href)}
                className="py-2 text-base text-[color:var(--ink)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
