import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Clock, MapPin, Globe, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../components/Icons';
import { profileData } from '../data/profile.js';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Collaborator'}`);
    const body = encodeURIComponent(`Hello Mohit,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profileData.socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">Get In Touch</p>
          <h2 className="section-title-ref">Contact Me</h2>
        </div>

        {/* 2-Column Contact Grid matching Keshav */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Direct Contact Option Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Primary Email Card */}
            <div
              className="ref-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <Mail size={24} color="#000000" style={{ margin: '0 auto 0.5rem' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#000000'
                }}
              >
                Email
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.88rem',
                  color: '#666666',
                  marginBottom: '1rem'
                }}
              >
                {profileData.socials.email}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <a
                  href={`mailto:${profileData.socials.email}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#000000',
                    fontWeight: 700,
                    textDecoration: 'none',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '0.35rem',
                    backgroundColor: '#F7F7F7',
                    border: '1px solid #DCDCDC'
                  }}
                >
                  Send an email
                </a>

                <button
                  onClick={handleCopy}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#000000',
                    fontWeight: 700,
                    background: 'none',
                    border: '1px solid #DCDCDC',
                    borderRadius: '0.35rem',
                    padding: '0.35rem 0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn & GitHub Mini Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-card"
                style={{
                  padding: '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC'
                }}
              >
                <LinkedinIcon size={22} color="#000000" style={{ margin: '0 auto 0.4rem' }} />
                <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '0.95rem', color: '#000000' }}>
                  LinkedIn
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#8A8A8A', marginTop: '0.2rem' }}>
                  Connect
                </div>
              </a>

              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ref-card"
                style={{
                  padding: '1.25rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC'
                }}
              >
                <GithubIcon size={22} color="#000000" style={{ margin: '0 auto 0.4rem' }} />
                <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '0.95rem', color: '#000000' }}>
                  GitHub
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#8A8A8A', marginTop: '0.2rem' }}>
                  Repositories
                </div>
              </a>
            </div>

            {/* RoomNexa & Location Card */}
            <div
              className="ref-card"
              style={{
                padding: '1.25rem',
                backgroundColor: '#F9F9F9',
                border: '1px solid #E5E5E5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={16} color="#000000" />
                <span style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', color: '#000000', fontWeight: 600 }}>
                  Ranchi, India
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#000000' }}>
                <Clock size={14} />
                <span>IST {currentTime || 'TIME'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form matching Keshav */}
          <div
            className="ref-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              padding: '2rem'
            }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <Check size={32} color="#000000" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-main)', fontSize: '1.35rem', fontWeight: 800, color: '#000000', marginBottom: '0.5rem' }}>
                  Email Client Opened
                </h4>
                <p style={{ fontFamily: 'var(--font-main)', fontSize: '0.88rem', color: '#666666', marginBottom: '1.25rem' }}>
                  Your message has been pre-formatted in your default mail application. Looking forward to speaking!
                </p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}>
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #DCDCDC',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.9rem',
                      color: '#000000',
                      outline: 'none',
                      backgroundColor: '#F9F9F9'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = '#DCDCDC')}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #DCDCDC',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.9rem',
                      color: '#000000',
                      outline: 'none',
                      backgroundColor: '#F9F9F9'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = '#DCDCDC')}
                  />
                </div>

                <div>
                  <textarea
                    rows={6}
                    required
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #DCDCDC',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.9rem',
                      color: '#000000',
                      outline: 'none',
                      resize: 'vertical',
                      backgroundColor: '#F9F9F9'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#000000')}
                    onBlur={(e) => (e.target.style.borderColor = '#DCDCDC')}
                  />
                </div>

                <div>
                  <button type="submit" className="btn-solid" style={{ width: '100%', padding: '0.9rem' }}>
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
