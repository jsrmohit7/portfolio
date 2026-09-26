import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile.js';

export const Hero = () => {
  const pipelineStages = [
    {
      step: "01",
      tag: "INPUT",
      label: "Multimodal Signals",
      payload: "Raw User Intent + Daily Check-ins + 826 Spectral Bands",
      detail: "Capturing high-dimensional discrete inputs and conversational user queries"
    },
    {
      step: "02",
      tag: "CONTEXT",
      label: "Cognitive State",
      payload: "Behavioral Profiles + Historical Journals + Calibrated 139 Bands",
      detail: "Synthesizing prior check-ins, user preferences, and noise-filtered spectral features"
    },
    {
      step: "03",
      tag: "MODEL",
      label: "Foundation / DL",
      payload: "IBM watsonx Granite LLM + U-Net / FPN ResNet34 Backbones",
      detail: "Executing deterministic prompt synthesis and semantic tissue segmentation"
    },
    {
      step: "04",
      tag: "OUTPUT",
      label: "Actionable Synthesis",
      payload: "Personalized Wellness Coaching + Multi-Class Tissue Segmentation Maps",
      detail: "Delivering empathetic structured reflections and patient-level reconstructions"
    }
  ];

  return (
    <section id="home" className="section" style={{ paddingTop: 'clamp(6rem, 11vw, 8.5rem)', paddingBottom: '4rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Top Hello label matching Keshav */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-sublabel"
          style={{ fontSize: '1.05rem', color: '#666666', marginBottom: '0.35rem' }}
        >
          Hello I'm
        </motion.p>

        {/* Main Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-main)',
            fontSize: 'clamp(2.75rem, 6.5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            color: '#000000',
            lineHeight: 1.05,
            marginBottom: '0.45rem'
          }}
        >
          {profileData.name}
        </motion.h1>

        {/* Subheadline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-main)',
            fontSize: 'clamp(1.15rem, 2.3vw, 1.5rem)',
            fontWeight: 500,
            color: '#555555',
            letterSpacing: '0.01em',
            marginBottom: '1.25rem'
          }}
        >
          AI / GenAI / Frontend / Research
        </motion.h2>

        {/* Supporting Headline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ maxWidth: '750px', margin: '0 auto 1.5rem auto' }}
        >
          <div
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              fontWeight: 700,
              color: '#000000',
              letterSpacing: '0.04em',
              marginBottom: '0.5rem'
            }}
          >
            {profileData.headline}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: '0.98rem',
              color: '#666666',
              lineHeight: 1.6
            }}
          >
            {profileData.subheadline}
          </p>
        </motion.div>

        {/* Status & Academic Credentials Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            background: '#F7F7F7',
            border: '1px solid #DCDCDC',
            marginBottom: '2.25rem',
            maxWidth: '680px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#000000',
              letterSpacing: '0.08em',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#000000'
              }}
            />
            <span>{profileData.availability}</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: '0.86rem',
              color: '#666666'
            }}
          >
            {profileData.education.degree} · {profileData.education.institution} (CGPA: {profileData.education.cgpa}) · {profileData.location}
          </div>
        </motion.div>

        {/* Dual Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="btn-row"
          style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          <a href="#portfolio" className="btn-outline">
            <span>EXPLORE MY WORK</span>
            <ArrowDown size={15} />
          </a>

          <a href="#contact" className="btn-solid">
            <span>LET'S TALK</span>
          </a>
        </motion.div>

        {/* Static Clean System Architecture Flow Card (No interactive simulation) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{ maxWidth: '880px', margin: '0 auto' }}
        >
          <div
            className="ref-card"
            style={{
              padding: '1.5rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #DCDCDC',
              textAlign: 'left'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.85rem',
                marginBottom: '1.25rem',
                borderBottom: '1px solid #E5E5E5',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#000000'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#000000',
                    letterSpacing: '0.08em',
                    fontWeight: 700
                  }}
                >
                  SYSTEM ARCHITECTURE FLOW
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: '#8A8A8A'
                }}
              >
                INPUT → CONTEXT → MODEL → OUTPUT
              </span>
            </div>

            {/* The 4 Connected Nodes Grid (Clean & Static) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                gap: '0.85rem'
              }}
            >
              {pipelineStages.map((stage) => (
                <div
                  key={stage.step}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.65rem',
                    backgroundColor: '#F9F9F9',
                    border: '1px solid #E5E5E5',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.35rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          color: '#000000'
                        }}
                      >
                        {stage.step} · {stage.tag}
                      </span>
                      <CheckCircle2 size={13} color="#000000" />
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-main)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        color: '#000000',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {stage.label}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: '#666666',
                        lineHeight: 1.4,
                        marginBottom: '0.5rem'
                      }}
                    >
                      {stage.payload}
                    </div>
                  </div>

                  <div
                    style={{
                      paddingTop: '0.5rem',
                      borderTop: '1px dashed #DCDCDC',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.74rem',
                      color: '#4A4A4A',
                      lineHeight: 1.35
                    }}
                  >
                    {stage.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
