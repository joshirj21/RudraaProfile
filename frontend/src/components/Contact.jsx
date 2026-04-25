import React, { useState } from "react";
import { Mail, Phone, Linkedin, ArrowUpRight, Download, Send, MapPin } from "lucide-react";
import { profile } from "../data/mock";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "./ui/toaster";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Almost there",
        description: "Please fill in name, email and message before sending.",
      });
      return;
    }
    setSending(true);
    setTimeout(() => {
      // Save locally as a soft mock so the form feels real
      try {
        const prev = JSON.parse(localStorage.getItem("rj_messages") || "[]");
        prev.push({ ...form, at: new Date().toISOString() });
        localStorage.setItem("rj_messages", JSON.stringify(prev));
      } catch (_) {}
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message received — thank you",
        description: "I’ll get back to you within 1–2 working days.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="eyebrow">§ 06 — Contact</span>
          <span className="flex-1 rule" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] flex items-center gap-1.5">
            <MapPin size={12} /> {profile.location}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.01em] text-[color:var(--ink)]">
              Have an interesting
              <br />
              <span className="serif-italic text-[color:var(--terracotta)]">problem</span>? Let’s talk.
            </h2>
            <p className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-[color:var(--ink-3)]">
              I’m currently open to product design roles and select freelance work. The fastest way to reach me
              is email — a short note about the problem is plenty.
            </p>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-full border border-[color:var(--rule)] flex items-center justify-center group-hover:bg-[color:var(--ink)] group-hover:text-[color:var(--cream)] transition-colors">
                  <Mail size={16} />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Email</div>
                  <div className="link-underline">{profile.email}</div>
                </div>
              </a>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-full border border-[color:var(--rule)] flex items-center justify-center group-hover:bg-[color:var(--ink)] group-hover:text-[color:var(--cream)] transition-colors">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Phone</div>
                  <div className="link-underline">{profile.phone}</div>
                </div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-full border border-[color:var(--rule)] flex items-center justify-center group-hover:bg-[color:var(--ink)] group-hover:text-[color:var(--cream)] transition-colors">
                  <Linkedin size={16} />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">LinkedIn</div>
                  <div className="link-underline flex items-center gap-1">
                    /in/rudraa-joshi <ArrowUpRight size={14} />
                  </div>
                </div>
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-full border border-[color:var(--rule)] flex items-center justify-center group-hover:bg-[color:var(--terracotta)] group-hover:text-[color:var(--cream)] group-hover:border-[color:var(--terracotta)] transition-colors">
                  <Download size={16} />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">Document</div>
                  <div className="link-underline flex items-center gap-1">
                    Download Resume (PDF) <ArrowUpRight size={14} />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <form onSubmit={onSubmit} className="bg-[color:var(--cream-2)]/50 border border-[color:var(--rule)] rounded-sm p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--terracotta)] mb-4">
                Brief / Quick note
              </div>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-[color:var(--ink-3)]">Your name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="e.g. Priya from Acme"
                    className="mt-1 w-full bg-transparent border-b border-[color:var(--ink)]/40 py-2 outline-none focus:border-[color:var(--terracotta)] transition-colors text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium text-[color:var(--ink-3)]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    className="mt-1 w-full bg-transparent border-b border-[color:var(--ink)]/40 py-2 outline-none focus:border-[color:var(--terracotta)] transition-colors text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-medium text-[color:var(--ink-3)]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="A short note about your team and the problem you’re trying to solve."
                    className="mt-1 w-full bg-transparent border-b border-[color:var(--ink)]/40 py-2 outline-none focus:border-[color:var(--terracotta)] transition-colors text-base resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-7 btn-ink w-full justify-center"
              >
                {sending ? "Sending…" : "Send message"} <Send size={15} />
              </button>
              <p className="mt-3 text-[11px] text-[color:var(--muted)]">
                Mock submission — stored locally for this preview.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
