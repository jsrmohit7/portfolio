import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: '#050608',
        padding: '3rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container-editorial">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Brand & Positioning */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.1rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '0.25rem'
              }}
            >
              MOHIT KUMAR MAHTO
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)'
              }}
            >
              AI / GenAI Developer · Deep Learning Researcher · Frontend Engineer
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-lime)',
                marginTop: '0.2rem'
              }}
            >
              Birla Institute of Technology, Mesra · Ranchi, India
            </div>
          </div>

          {/* Quick links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                gap: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem'
              }}
            >
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-lime)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                GitHub
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-lime)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                LinkedIn
              </a>

              <a
                href={personalData.socials.roomnexa}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-lime)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                RoomNexa
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              data-cursor="pointer"
              aria-label="Scroll back to top"
              style={{
                padding: '0.6rem 0.95rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <ArrowUp size={14} />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Technical Spec Bar */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} MOHIT KUMAR MAHTO. DESIGNED WITH PRECISION & INTENT.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--accent-lime)' }}>●</span>
            <span>SYS_VERSION: 2026.4.0 · STACK: REACT + VITE + FRAMER MOTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
