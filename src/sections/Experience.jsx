import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Globe, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { YoutubeIcon } from '../components/Icons';
import { profileData } from '../data/profile.js';

export const Experience = () => {
  const roomnexa = profileData.experience[0];
  const bitsipar = profileData.experience[1];

  const roomnexaPipelineDetails = [
    { step: "01", title: "DESIGN", desc: "Crafting UI layout, color harmonies & responsive visual system" },
    { step: "02", title: "FRONTEND", desc: "Implementing component architecture with Cursor-assisted workflows" },
    { step: "03", title: "PROMPTS", desc: "Prompt engineering for video scripts, scene planning, visual directions and AI-generated assets" },
    { step: "04", title: "AI AVATAR", desc: "AI avatar generation for tutorial presenters and on-screen narrators" },
    { step: "05", title: "MOTION GRAPHICS", desc: "AI-assisted motion graphics and HTML/CSS-based animations exported to MP4" },
    { step: "06", title: "HTML/CSS → MP4", desc: "Rendering web-based HTML/CSS animations into MP4 assets for video integration" },
    { step: "07", title: "COMPOSITING", desc: "Combining AI avatars, motion graphics, screen visuals, narration and edited footage into final tutorials" }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">Where I've Contributed</p>
          <h2 className="section-title-ref">Work Experience</h2>
        </div>

        {/* Central Vertical Timeline Container matching Keshav */}
        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Experience 01: RoomNexa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ref-card"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #DCDCDC', padding: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  borderBottom: '1px solid #E5E5E5',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#000000',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {roomnexa.company}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#000000'
                    }}
                  >
                    {roomnexa.role}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: '#666666',
                      background: '#F7F7F7',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.35rem',
                      border: '1px solid #E5E5E5'
                    }}
                  >
                    <Calendar size={13} color="#000000" />
                    <span>{roomnexa.period}</span>
                  </div>

                  {/* Clickable RoomNexa Links with Icons */}
                  <a
                    href={roomnexa.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.35rem',
                      background: '#000000',
                      color: '#FFFFFF',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none'
                    }}
                  >
                    <Globe size={13} />
                    <span>roomnexa.com</span>
                    <ExternalLink size={10} />
                  </a>

                  <a
                    href={roomnexa.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.35rem',
                      background: '#F7F7F7',
                      color: '#000000',
                      border: '1px solid #DCDCDC',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none'
                    }}
                  >
                    <YoutubeIcon size={13} color="#FF0000" />
                    <span>@roomnexa_official</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              {/* RoomNexa Operational Expansion Pipeline (Clean & Static) */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#8A8A8A',
                    letterSpacing: '0.06em',
                    marginBottom: '0.65rem',
                    fontWeight: 600
                  }}
                >
                  ROOMNEXA WORKFLOW SEQUENCE:
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                    gap: '0.6rem'
                  }}
                >
                  {roomnexaPipelineDetails.map((item) => (
                    <div
                      key={item.step}
                      style={{
                        padding: '0.85rem',
                        borderRadius: '0.45rem',
                        backgroundColor: '#F9F9F9',
                        border: '1px solid #E5E5E5',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem'
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          color: '#000000'
                        }}
                      >
                        STEP {item.step} · {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-main)',
                          fontSize: '0.76rem',
                          color: '#555555',
                          lineHeight: 1.35
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Production Summary Callout */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#8A8A8A',
                    letterSpacing: '0.06em',
                    marginBottom: '0.65rem',
                    fontWeight: 600
                  }}
                >
                  VIDEO PRODUCTION WORK:
                </div>
                <div
                  style={{
                    padding: '1rem 1.15rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#F9F9F9',
                    border: '1px solid #E5E5E5'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.88rem',
                      color: '#1A1A1A',
                      fontWeight: 600,
                      marginBottom: '0.55rem'
                    }}
                  >
                    ~5-minute RoomNexa Product Tutorial Videos
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.83rem',
                      color: '#4A4A4A',
                      lineHeight: 1.55,
                      marginBottom: '0.75rem'
                    }}
                  >
                    Created ~5-minute product tutorial videos using prompt engineering, AI avatar generation,
                    AI-assisted motion graphics, video editing, and HTML/CSS-based animations rendered into
                    MP4 assets for final video compositing.
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem'
                    }}
                  >
                    {[
                      'Prompt Engineering',
                      'AI Avatar Generation',
                      'AI-Assisted Content',
                      'Video Editing',
                      'Motion Graphics',
                      'HTML/CSS Animations',
                      'HTML/CSS → MP4',
                      'Final Compositing'
                    ].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.63rem',
                          padding: '0.22rem 0.55rem',
                          borderRadius: '0.3rem',
                          backgroundColor: '#000000',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          letterSpacing: '0.02em'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contributions Bullets */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#8A8A8A',
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  KEY CONTRIBUTIONS & IMPACT:
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '0.75rem'
                  }}
                >
                  {roomnexa.contributions.map((bullet, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        padding: '0.75rem 0.85rem',
                        backgroundColor: '#F9F9F9',
                        border: '1px solid #E5E5E5',
                        borderRadius: '0.45rem',
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.88rem',
                        color: '#4A4A4A',
                        lineHeight: 1.45
                      }}
                    >
                      <CheckCircle2 size={15} color="#000000" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience 02: BIT-SIPAR 2026 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ref-card"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #DCDCDC', padding: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  borderBottom: '1px solid #E5E5E5',
                  paddingBottom: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#000000',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {bitsipar.company}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      color: '#000000'
                    }}
                  >
                    {bitsipar.role} · {bitsipar.organization}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: '#666666',
                    background: '#F7F7F7',
                    padding: '0.35rem 0.65rem',
                    borderRadius: '0.35rem',
                    border: '1px solid #E5E5E5'
                  }}
                >
                  <Calendar size={13} color="#000000" />
                  <span>{bitsipar.period}</span>
                </div>
              </div>

              {/* Research Specification Matrix */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#F9F9F9',
                  border: '1px solid #E5E5E5',
                  marginBottom: '1.5rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#8A8A8A' }}>
                    DATA MODALITY
                  </div>
                  <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', fontWeight: 700, color: '#000000' }}>
                    Medical Hyperspectral Cubes
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#8A8A8A' }}>
                    SPECTRAL BANDS
                  </div>
                  <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', fontWeight: 700, color: '#000000' }}>
                    826 Raw → 139 Reduced
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#8A8A8A' }}>
                    SEGMENTATION MODELS
                  </div>
                  <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', fontWeight: 700, color: '#000000' }}>
                    U-Net · LinkNet · FPN
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#8A8A8A' }}>
                    BACKBONE ARCHITECTURES
                  </div>
                  <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', fontWeight: 700, color: '#000000' }}>
                    ResNet34 · ResNet50
                  </div>
                </div>
              </div>

              {/* Contributions Bullets */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#8A8A8A',
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  RESEARCH CONTRIBUTIONS:
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '0.75rem'
                  }}
                >
                  {bitsipar.contributions.map((bullet, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        padding: '0.75rem 0.85rem',
                        backgroundColor: '#F9F9F9',
                        border: '1px solid #E5E5E5',
                        borderRadius: '0.45rem',
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.88rem',
                        color: '#4A4A4A',
                        lineHeight: 1.45
                      }}
                    >
                      <CheckCircle2 size={15} color="#000000" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
