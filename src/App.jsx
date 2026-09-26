import React from 'react';
import { FloatingNavbar } from './components/FloatingNavbar';
import { FixedSidebars } from './components/FixedSidebars';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { AILab } from './sections/AILab';
import { ResearchLab } from './sections/ResearchLab';
import { ChatAI } from './sections/ChatAI';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="portfolio-app-root">
      {/* Circuit / geometric grid background matching Keshav */}
      <div className="circuit-grid-background" aria-hidden="true" />

      {/* Fixed sidebars matching reference: Left social bar & Right rotated Chat AI link */}
      <FixedSidebars />

      {/* Floating pill navigation bar at bottom matching reference */}
      <FloatingNavbar />

      {/* Main Single-Page Section Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AILab />
        <ResearchLab />
        <ChatAI />
        <Contact />
      </main>

      {/* Full-width footer matching reference */}
      <Footer />
    </div>
  );
}
