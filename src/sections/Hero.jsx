import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile.js';

export const Hero = () => {
  const workflows = [
    {
      id: "01",
      name: "MINDCARE AI X",
      link: "https://mindcare-frontend-4ays.onrender.com/",
      purpose: "LLM / Personalized AI Application",
      flow: "INPUT → CONTEXT → GRANITE → RESPONSE",
      stages: [
        { tag: "INPUT", label: "User Input", payload: "Conversation and journal entries" },
        { tag: "SIGNALS", label: "Daily Activity", payload: "Daily check-ins + activities + behavioral preferences" },
        { tag: "CONTEXT", label: "User Context", payload: "Prior check-ins and history injected into prompt context" },
        { tag: "MODEL", label: "IBM watsonx Granite", payload: "Foundation LLM" },
        { tag: "OUTPUT", label: "Personalized Response", payload: "Context-aware AI reply" }
      ],
      footerLabel: "OUTPUTS",
      footer: ["AI coaching", "Personalized insights", "Journaling assistance", "Conversational wellness support"]
    },
    {
      id: "02",
      name: "HYPERSPECTRAL RESEARCH",
      purpose: "Deep Learning / Medical Hyperspectral Image Analysis",
      flow: "IMAGE → 826 → 139 → MODEL → SEGMENTATION → RECONSTRUCTION",
      stages: [
        { tag: "INPUT", label: "Hyperspectral Image", payload: "826 spectral bands" },
        { tag: "PREPROCESS", label: "Spectral Reduction", payload: "Preprocessing → 139 bands / patch features" },
        { tag: "MODEL", label: "U-Net / LinkNet / FPN", payload: "ResNet34 / ResNet50 backbones" },
        { tag: "SEGMENTATION", label: "Tissue / Tumor Maps", payload: "Multiclass tissue / tumor segmentation" },
        { tag: "OUTPUT", label: "Reconstruction", payload: "Patient-level reconstruction" }
      ],
      footerLabel: "ALSO",
      footer: ["Automated web-based inference", "Emerging model architecture experimentation"]
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

        {/* Two independent project workflows — intentionally not connected to each other */}
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
                  TWO AI SYSTEMS. TWO DIFFERENT PROBLEMS.
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: '#8A8A8A'
                }}
              >
                INDEPENDENT PROJECT WORKFLOWS
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {workflows.map((wf) => (
                <div
                  key={wf.id}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #DCDCDC',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.35rem 1rem',
                      marginBottom: '0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem 0.65rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          color: '#000000',
                          letterSpacing: '0.06em'
                        }}
                      >
                        {wf.id} · {wf.name}
                      </span>
                      {wf.link && (
                        <a
                          href={wf.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${wf.name} live site`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.2rem',
                            alignSelf: 'center',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            color: '#000000',
                            textDecoration: 'none',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '999px',
                            border: '1px solid #000000'
                          }}
                        >
                          LIVE
                          <ArrowUpRight size={11} />
                        </a>
                      )}
                      <span
                        style={{
                          fontFamily: 'var(--font-main)',
                          fontSize: '0.78rem',
                          color: '#666666'
                        }}
                      >
                        {wf.purpose}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        color: '#8A8A8A',
                        overflowWrap: 'anywhere'
                      }}
                    >
                      {wf.flow}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.65rem'
                    }}
                  >
                    {wf.stages.map((stage, i) => (
                      <div
                        key={stage.tag}
                        style={{
                          flex: '1 1 150px',
                          padding: '0.85rem',
                          borderRadius: '0.65rem',
                          backgroundColor: '#F9F9F9',
                          border: '1px solid #E5E5E5',
                          minWidth: 0
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.35rem',
                            marginBottom: '0.35rem'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.64rem',
                              fontWeight: 800,
                              color: '#000000',
                              overflowWrap: 'anywhere'
                            }}
                          >
                            {String(i + 1).padStart(2, '0')} · {stage.tag}
                          </span>
                          <CheckCircle2 size={12} color="#000000" style={{ flexShrink: 0 }} />
                        </div>

                        <div
                          style={{
                            fontFamily: 'var(--font-main)',
                            fontWeight: 700,
                            fontSize: '0.84rem',
                            color: '#000000',
                            marginBottom: '0.3rem',
                            lineHeight: 1.25
                          }}
                        >
                          {stage.label}
                        </div>

                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            color: '#666666',
                            lineHeight: 1.4
                          }}
                        >
                          {stage.payload}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: '0.85rem',
                      paddingTop: '0.65rem',
                      borderTop: '1px dashed #DCDCDC',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '0.4rem 0.5rem'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        fontWeight: 700,
                        color: '#8A8A8A',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {wf.footerLabel}
                    </span>
                    {wf.footer.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: 'var(--font-main)',
                          fontSize: '0.74rem',
                          color: '#4A4A4A',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '999px',
                          border: '1px solid #E5E5E5',
                          backgroundColor: '#F9F9F9'
                        }}
                      >
                        {item}
                      </span>
                    ))}
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
