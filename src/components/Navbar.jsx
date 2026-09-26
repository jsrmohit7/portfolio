import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'work', label: 'WORK', num: '01' },
    { id: 'experience', label: 'EXPERIENCE', num: '02' },
    { id: 'ai-lab', label: 'AI LAB', num: '03' },
    { id: 'research', label: 'RESEARCH', num: '04' },
    { id: 'about', label: 'ABOUT', num: '05' },
    { id: 'contact', label: 'CONTACT', num: '06' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'experience', 'ai-lab', 'research', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(7, 8, 11, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        padding: scrolled ? '0.75rem 0' : '1.35rem 0'
      }}
    >
      <div className="container-editorial">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            data-cursor="pointer"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                border: '1px solid rgba(212, 255, 0, 0.4)',
                backgroundColor: 'rgba(212, 255, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--accent-lime)',
                borderRadius: '4px'
              }}
            >
              M
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}
              >
                MOHIT K. MAHTO
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em'
                }}
              >
                AI × DEV × RESEARCH
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem'
            }}
            className="desktop-nav-container"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  data-cursor="pointer"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: isActive ? 'var(--accent-lime)' : 'var(--text-secondary)',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s ease',
                    padding: '0.4rem 0.2rem',
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.62rem',
                      color: isActive ? 'var(--accent-lime)' : 'var(--text-muted)'
                    }}
                  >
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        backgroundColor: 'var(--accent-lime)'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Availability & Socials */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            {/* Status indicator on desktop */}
            <div
              className="desktop-status-badge"
              style={{
                display: 'none',
                alignItems: 'center'
              }}
            >
              <div className="status-indicator">
                <span className="status-dot" />
                <span style={{ fontSize: '0.68rem' }}>AVAILABLE FOR WORK</span>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                aria-label="GitHub profile"
                style={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-lime)';
                  e.currentTarget.style.borderColor = 'var(--border-lime)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                aria-label="LinkedIn profile"
                style={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-lime)';
                  e.currentTarget.style.borderColor = 'var(--border-lime)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                }}
              >
                <LinkedinIcon size={16} />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                data-cursor="pointer"
                style={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4,
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  cursor: 'pointer'
                }}
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(7, 8, 11, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '1.75rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <div className="status-indicator">
                <span className="status-dot" />
                <span style={{ fontSize: '0.7rem' }}>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  cursor: 'pointer',
                  color: activeSection === link.id ? 'var(--accent-lime)' : 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.15rem',
                  fontWeight: 600
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-lime)'
                    }}
                  >
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight size={16} color="var(--text-muted)" />
              </button>
            ))}

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                paddingTop: '1rem'
              }}
            >
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '0.65rem' }}
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '0.65rem' }}
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .desktop-status-badge {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
