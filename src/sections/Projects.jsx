import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { profileData } from '../data/profile.js';

export const Projects = () => {
  const p1 = profileData.projects[0];
  const p2 = profileData.projects[1];
  const p3 = profileData.projects[2];

  const architectures = [
    {
      name: "U-Net",
      backbone: "ResNet34",
      desc: "Encoder-decoder with symmetric skip connections, preserving fine spatial tissue boundaries."
    },
    {
      name: "LinkNet",
      backbone: "ResNet34 / 50",
      desc: "Lightweight summation-based decoder, reducing parameter count for low-latency intraoperative navigation."
    },
    {
      name: "FPN",
      backbone: "ResNet50",
      desc: "Feature Pyramid Network with multi-scale lateral connections for identifying micro-tumoral nests."
    }
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">Academic and outside work</p>
          <h2 className="section-title-ref">Portfolio</h2>
        </div>

        {/* Projects Grid matching Keshav's Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {/* ========================================================
              PROJECT 01: MindCare AI X
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ref-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Tech Tags Row */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {p1.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.25rem 0.55rem',
                      borderRadius: '0.3rem',
                      backgroundColor: '#F7F7F7',
                      border: '1px solid #E5E5E5',
                      color: '#000000',
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#000000',
                  marginBottom: '0.25rem'
                }}
              >
                {p1.title}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#4A4A4A',
                  marginBottom: '1rem'
                }}
              >
                {p1.subtitle}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.92rem',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginBottom: '1.25rem'
                }}
              >
                {p1.summary}
              </p>

              {/* Cognitive Architecture Flow (Clean & Static) */}
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '0.65rem',
                  backgroundColor: '#F9F9F9',
                  border: '1px solid #E5E5E5',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#8A8A8A',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    marginBottom: '0.75rem'
                  }}
                >
                  COGNITIVE PROCESSING SEQUENCE:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {p1.flow.map((node) => (
                    <div
                      key={node.step}
                      style={{
                        padding: '0.6rem 0.85rem',
                        borderRadius: '0.4rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.15rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            color: '#000000'
                          }}
                        >
                          {node.step}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-main)',
                            fontWeight: 700,
                            fontSize: '0.84rem',
                            color: '#000000'
                          }}
                        >
                          {node.node}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: '#666666',
                          lineHeight: 1.35
                        }}
                      >
                        {node.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.65rem',
                  marginBottom: '1.5rem'
                }}
              >
                {p1.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.65rem',
                      borderRadius: '0.4rem',
                      backgroundColor: '#F9F9F9',
                      border: '1px solid #E5E5E5'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#8A8A8A' }}>
                      {m.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', fontWeight: 800, color: '#000000' }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons matching Keshav */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
              >
                <GithubIcon size={14} />
                <span>Github</span>
              </a>
              <a
                href="#chat-ai"
                className="btn-solid"
                style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
              >
                <span>Ask AI Details</span>
              </a>
            </div>
          </motion.div>

          {/* ========================================================
              PROJECT 02: Brain Tumor Detection / Segmentation
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="ref-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Tech Tags Row */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {p2.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.25rem 0.55rem',
                      borderRadius: '0.3rem',
                      backgroundColor: '#F7F7F7',
                      border: '1px solid #E5E5E5',
                      color: '#000000',
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#000000',
                  marginBottom: '0.25rem'
                }}
              >
                {p2.title}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#4A4A4A',
                  marginBottom: '1rem'
                }}
              >
                {p2.subtitle}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.92rem',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginBottom: '1.25rem'
                }}
              >
                {p2.summary}
              </p>

              {/* Spectral Architecture Specifications (Clean & Static) */}
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '0.65rem',
                  backgroundColor: '#F9F9F9',
                  border: '1px solid #E5E5E5',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#000000',
                    fontWeight: 700,
                    marginBottom: '0.75rem'
                  }}
                >
                  DEEP SEGMENTATION BENCHMARKS:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {architectures.map((arch) => (
                    <div
                      key={arch.name}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '0.4rem',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #DCDCDC'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '0.2rem'
                        }}
                      >
                        <span style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: '0.86rem', color: '#000000' }}>
                          {arch.name}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#666666' }}>
                          {arch.backbone}
                        </span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.75rem', color: '#4A4A4A', lineHeight: 1.35 }}>
                        {arch.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.65rem',
                  marginBottom: '1.5rem'
                }}
              >
                {p2.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.65rem',
                      borderRadius: '0.4rem',
                      backgroundColor: '#F9F9F9',
                      border: '1px solid #E5E5E5'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.64rem', color: '#8A8A8A' }}>
                      {m.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.86rem', fontWeight: 800, color: '#000000' }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons matching Keshav */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
              >
                <GithubIcon size={14} />
                <span>Github</span>
              </a>
              <a
                href="#research"
                className="btn-solid"
                style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
              >
                <span>Research Pipeline</span>
              </a>
            </div>
          </motion.div>

          {/* ========================================================
              PROJECT 03: AI Health Assistant
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="ref-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Tech Tags Row */}
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {p3.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.25rem 0.55rem',
                      borderRadius: '0.3rem',
                      backgroundColor: '#F7F7F7',
                      border: '1px solid #E5E5E5',
                      color: '#000000',
                      fontWeight: 600
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#000000',
                  marginBottom: '0.25rem'
                }}
              >
                {p3.title}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#4A4A4A',
                  marginBottom: '1rem'
                }}
              >
                {p3.subtitle}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.92rem',
                  color: '#666666',
                  lineHeight: 1.55,
                  marginBottom: '1.25rem'
                }}
              >
                {p3.summary}
              </p>

              {/* Machine Learning Pipeline Specifications (Clean & Static) */}
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '0.65rem',
                  backgroundColor: '#F9F9F9',
                  border: '1px solid #E5E5E5',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#000000',
                    fontWeight: 700,
                    marginBottom: '0.75rem'
                  }}
                >
                  CLASSIFICATION PIPELINE:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {p3.facts.map((fact, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.82rem',
                        color: '#4A4A4A',
                        lineHeight: 1.4
                      }}
                    >
                      <CheckCircle2 size={14} color="#000000" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                {p3.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.65rem',
                      borderRadius: '0.4rem',
                      backgroundColor: '#F9F9F9',
                      border: '1px solid #E5E5E5'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#8A8A8A' }}>
                      {m.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-main)', fontSize: '0.82rem', fontWeight: 800, color: '#000000' }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons matching Keshav */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
              >
                <GithubIcon size={14} />
                <span>Github</span>
              </a>
              <a
                href="#chat-ai"
                className="btn-solid"
                style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
              >
                <span>Details</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
