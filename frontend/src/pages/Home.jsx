import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    // If url has hash, scroll on mount
    if (window.location.hash) {
      const id = window.location.hash;
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Header />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
