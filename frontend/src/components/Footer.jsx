import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";
import { profile } from "../data/mock";

const Footer = () => {
  return (
    <footer className="relative bg-[color:var(--ink)] text-[color:var(--cream)] grain mt-0">
      <div className="container-x py-20 md:py-28">
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--gold)]">
            § 06 — Colophon
          </span>
          <span className="flex-1 h-px bg-white/15" />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
            End of folio
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-7">
            <div className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.01em]">
              Let’s make
              <br />
              something <span className="serif-italic text-[color:var(--terracotta)]">considered</span>.
            </div>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Open to product design roles, freelance projects and design system work. Reach out and tell me
              about the problem — I read every email.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 bg-[color:var(--cream)] text-[color:var(--ink)] px-5 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--terracotta)] hover:text-[color:var(--cream)] transition-colors"
              >
                <Mail size={15} /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-[color:var(--cream)] px-5 py-3 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2 md:col-start-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-4">
              Index
            </div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[color:var(--terracotta)] transition" href="/#work">Work</a></li>
              <li><a className="hover:text-[color:var(--terracotta)] transition" href="/#about">About</a></li>
              <li><a className="hover:text-[color:var(--terracotta)] transition" href="/#experience">Journal</a></li>
              <li><a className="hover:text-[color:var(--terracotta)] transition" href="/#contact">Contact</a></li>
              <li><Link className="hover:text-[color:var(--terracotta)] transition" to="/work/wellington-hub">Case study</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-4">
              Contact
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={14} /> {profile.email}</li>
              <li className="flex items-center gap-2"><Phone size={14} /> {profile.phone}</li>
              <li className="flex items-center gap-2 text-white/60">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/45">
          <span>© {new Date().getFullYear()} — Rudraa Joshi. All rights reserved.</span>
          <span>Set in Playfair Display & Inter. Designed in Bengaluru.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
