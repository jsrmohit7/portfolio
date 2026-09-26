import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export const AILab = () => {
  const pillars = [
    {
      title: "LLM APPLICATIONS",
      sub: "IBM watsonx Granite · Context-aware AI",
      desc: "Integrating foundation models with behavioral state telemetry for personalized coaching and conversational responses without hallucinations."
    },
    {
      title: "PROMPT ENGINEERING",
      sub: "Structured Outputs · Few-Shot Protocols",
      desc: "Designing deterministic prompts, system persona anchors, chain-of-thought schemas, and strict JSON constraints for automation."
    },
    {
      title: "AI-ASSISTED DEVELOPMENT",
      sub: "Cursor IDE · Fast Iteration",
      desc: "Leveraging Cursor as an engineering force multiplier: rapid component prototyping, tracing edge-case logic, and optimizing code quality."
    },
    {
      title: "AI CONTENT SYSTEMS",
      sub: "Tutorials · Walkthroughs · Reels",
      desc: "Transforming technical product specifications into engaging developer tutorials, video demonstration scripts, and short-form reels."
    }
  ];

  const frameworkStages = [
    {
      step: "01",
      title: "INPUT FRAMING & CONTEXT",
      tag: "SYSTEM PERSONA",
      desc: "Injecting explicit role definitions, historical user telemetry, and domain boundary constraints to ground the model before reasoning begins."
    },
    {
      step: "02",
      title: "STRUCTURAL GUARDRAILS",
      tag: "FEW-SHOT ANCHORS",
      desc: "Enforcing deterministic output schemas, negative constraints, field typing, and concise length limits to eliminate hallucination loops."
    },
    {
      step: "03",
      title: "DETERMINISTIC OUTPUT",
      tag: "JSON VALIDATION",
      desc: "Synthesizing schema-validated structures with automated JSON parsing, fallback recovery, and seamless pipeline execution."
    }
  ];

  const productionWorkflows = [
    {
      id: "roomnexa",
      badge: "CONTENT SYSTEM",
      title: "RoomNexa Tutorial & Video Script Engine",
      target: "YouTube Tutorials & 60-Second Feature Walkthroughs",
      structure: "Hook (3s) → Step-by-Step Flow (45s) → Clear CTA (12s)",
      outputSample: "Structured 60-second video script with visual scene cues published to @roomnexa_official."
    },
    {
      id: "watsonx",
      badge: "ENTERPRISE LLM",
      title: "watsonx Granite Cognitive Coach",
      target: "MindCare AI X Mental Wellness Platform",
      structure: "Empathetic Validation (2 sentences) → Exactly 1 Micro-Action (<3 min) → Open Grounding Inquiry",
      outputSample: "Context-aware coaching responses synthesized without clinical hallucination."
    },
    {
      id: "cursor",
      badge: "DEV MULTIPLIER",
      title: "Cursor Accelerated Frontend Scaffolding",
      target: "Production Accessible Component Trees",
      structure: "Semantic HTML5 → CSS Variable Tokens → Keyboard A11y Handlers",
      outputSample: "100% WCAG 2.1 AA compliant React component architectures with zero layout shift."
    }
  ];

  return (
    <section id="ai-lab" className="section section-alt">
      <div className="container">
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">Cognitive Architecture & Workflows</p>
          <h2 className="section-title-ref">AI Is Part of How I Build</h2>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1050px',
            margin: '0 auto 3rem auto'
          }}
        >
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="ref-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCDCDC',
                padding: '1.5rem'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#8A8A8A',
                  marginBottom: '0.35rem'
                }}
              >
                0{idx + 1} · PILLAR
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#000000',
                  marginBottom: '0.2rem'
                }}
              >
                {p.title}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#000000',
                  fontWeight: 600,
                  marginBottom: '0.65rem'
                }}
              >
                {p.sub}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '0.86rem',
                  color: '#666666',
                  lineHeight: 1.5
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Static Prompt Architecture & Framework Card (100% Static & Editorial) */}
        <div
          className="ref-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            border: '1px solid #DCDCDC',
            padding: '2rem'
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #E5E5E5',
              paddingBottom: '1rem',
              marginBottom: '1.75rem',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Terminal size={18} color="#000000" />
              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#000000'
                }}
              >
                Prompt Engineering Architecture
              </h3>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '0.3rem',
                backgroundColor: '#F7F7F7',
                border: '1px solid #DCDCDC',
                color: '#000000',
                fontWeight: 700
              }}
            >
              DETERMINISTIC INFERENCE FRAMEWORK
            </span>
          </div>

          {/* 3-Stage Methodological Framework (Static Flow) */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#8A8A8A',
                letterSpacing: '0.06em',
                marginBottom: '0.85rem'
              }}
            >
              CORE PROMPT SYNTHESIS SEQUENCE:
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem'
              }}
            >
              {frameworkStages.map((stg) => (
                <div
                  key={stg.step}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '0.5rem',
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
                        marginBottom: '0.4rem'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: '#000000'
                        }}
                      >
                        STEP {stg.step}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          color: '#666666'
                        }}
                      >
                        {stg.tag}
                      </span>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-main)',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        color: '#000000',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {stg.title}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.82rem',
                        color: '#555555',
                        lineHeight: 1.45
                      }}
                    >
                      {stg.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Production Workflows Showcase (Static Cards) */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#8A8A8A',
                letterSpacing: '0.06em',
                marginBottom: '0.85rem'
              }}
            >
              PRODUCTION IMPLEMENTATION WORKFLOWS:
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem'
              }}
            >
              {productionWorkflows.map((wf) => (
                <div
                  key={wf.id}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '0.5rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #DCDCDC',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '0.25rem',
                          backgroundColor: '#F7F7F7',
                          border: '1px solid #E5E5E5',
                          fontWeight: 700,
                          color: '#000000'
                        }}
                      >
                        {wf.badge}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-main)',
                        fontSize: '0.98rem',
                        fontWeight: 800,
                        color: '#000000',
                        marginBottom: '0.35rem'
                      }}
                    >
                      {wf.title}
                    </h4>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: '#4A4A4A',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {wf.target}
                    </div>

                    <div
                      style={{
                        padding: '0.65rem 0.75rem',
                        borderRadius: '0.35rem',
                        backgroundColor: '#F9F9F9',
                        border: '1px solid #E5E5E5',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: '#333333',
                        lineHeight: 1.4,
                        marginBottom: '0.75rem'
                      }}
                    >
                      <span style={{ fontWeight: 700, color: '#000000' }}>Schema:</span> {wf.structure}
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.78rem',
                      color: '#666666',
                      lineHeight: 1.4,
                      borderTop: '1px dashed #E5E5E5',
                      paddingTop: '0.65rem'
                    }}
                  >
                    <CheckCircle2 size={13} color="#000000" style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                    {wf.outputSample}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
