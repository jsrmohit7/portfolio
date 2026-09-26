import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../components/Icons';
import { profileData } from '../data/profile.js';

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#F7F7F7',
        borderTop: '1px solid #DCDCDC',
        padding: '4rem 0 3rem 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        {/* Name Title matching Keshav footer */}
        <h2
          style={{
            fontFamily: 'var(--font-main)',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#000000',
            letterSpacing: '-0.02em',
            marginBottom: '0.25rem'
          }}
        >
          {profileData.name}
        </h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#666666',
            marginBottom: '1.75rem'
          }}
        >
          AI / GenAI / Frontend / Research
        </div>

        {/* Centered Navigation Links matching Keshav */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
        >
          {[
            { label: 'Home', id: 'home' },
            { label: 'About', id: 'about' },
            { label: 'Experience', id: 'experience' },
            { label: 'Skills', id: 'skills' },
            { label: 'Portfolio', id: 'portfolio' },
            { label: 'AI Lab', id: 'ai-lab' },
            { label: 'Research', id: 'research' },
            { label: 'Contact', id: 'contact' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-main)',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#4A4A4A',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#000000')}
              onMouseLeave={(e) => (e.target.style.color = '#4A4A4A')}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social Icons Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              width: 38,
              height: 38,
              borderRadius: '0.45rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              textDecoration: 'none'
            }}
          >
            <LinkedinIcon size={18} />
          </a>

          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              width: 38,
              height: 38,
              borderRadius: '0.45rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              textDecoration: 'none'
            }}
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={`mailto:${profileData.socials.email}`}
            aria-label="Email"
            style={{
              width: 38,
              height: 38,
              borderRadius: '0.45rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              textDecoration: 'none'
            }}
          >
            <Mail size={18} />
          </a>

          <a
            href={profileData.socials.roomnexa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RoomNexa"
            style={{
              width: 38,
              height: 38,
              borderRadius: '0.45rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              textDecoration: 'none'
            }}
          >
            <Globe size={18} />
          </a>

          <a
            href={profileData.socials.roomnexaYoutube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RoomNexa YouTube"
            style={{
              width: 38,
              height: 38,
              borderRadius: '0.45rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              textDecoration: 'none'
            }}
          >
            <YoutubeIcon size={18} color="#000000" />
          </a>
        </div>

        {/* Copyright notice matching Keshav */}
        <div
          style={{
            fontFamily: 'var(--font-main)',
            fontSize: '0.82rem',
            color: '#8A8A8A'
          }}
        >
          &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
