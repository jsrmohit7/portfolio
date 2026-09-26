import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, FlaskConical, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile.js';

export const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">Get to know</p>
          <h2 className="section-title-ref">About Me</h2>
        </div>

        {/* Identity & Accreditation Cards Grid (Matching Keshav's Card Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem',
            maxWidth: '960px',
            margin: '0 auto 2.5rem auto'
          }}
        >
          {/* Pillar 1: Engineer */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ref-card"
            style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}
          >
            <Code2 size={28} color="#000000" style={{ margin: '0 auto 0.75rem' }} />
            <h3
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#000000',
                marginBottom: '0.35rem'
              }}
            >
              ENGINEER
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                color: '#4A4A4A',
                lineHeight: 1.5
              }}
            >
              Frontend Builder & Software Crafter
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: '#8A8A8A',
                marginTop: '0.5rem'
              }}
            >
              RoomNexa Frontend · Modern React UI
            </div>
          </motion.div>

          {/* Pillar 2: Researcher */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="ref-card"
            style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}
          >
            <FlaskConical size={28} color="#000000" style={{ margin: '0 auto 0.75rem' }} />
            <h3
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#000000',
                marginBottom: '0.35rem'
              }}
            >
              RESEARCHER
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                color: '#4A4A4A',
                lineHeight: 1.5
              }}
            >
              Deep Learning & HSI Analysis
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: '#8A8A8A',
                marginTop: '0.5rem'
              }}
            >
              BIT-SIPAR 2026 · QUEDS Dept
            </div>
          </motion.div>

          {/* Pillar 3: Creator */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="ref-card"
            style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}
          >
            <Sparkles size={28} color="#000000" style={{ margin: '0 auto 0.75rem' }} />
            <h3
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#000000',
                marginBottom: '0.35rem'
              }}
            >
              CREATOR
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                color: '#4A4A4A',
                lineHeight: 1.5
              }}
            >
              Prompt Architect & Content Pipelines
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: '#8A8A8A',
                marginTop: '0.5rem'
              }}
            >
              Tutorials · Walkthroughs · Reels
            </div>
          </motion.div>

          {/* School / Education Card (matching Keshav's second card) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="ref-card"
            style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}
          >
            <GraduationCap size={28} color="#000000" style={{ margin: '0 auto 0.75rem' }} />
            <h3
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#000000',
                marginBottom: '0.35rem'
              }}
            >
              School
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '0.88rem',
                color: '#4A4A4A',
                lineHeight: 1.5
              }}
            >
              Birla Institute of Technology, Mesra
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: '#8A8A8A',
                marginTop: '0.5rem'
              }}
            >
              B.Tech CSE · CGPA: 7.38 · Ranchi, India
            </div>
          </motion.div>
        </div>

        {/* Narrative Summary Paragraph (matching reference positioning) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: '1.02rem',
              color: '#333333',
              lineHeight: 1.75,
              marginBottom: '1rem'
            }}
          >
            {profileData.about.story}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontSize: '0.94rem',
              color: '#666666',
              lineHeight: 1.6
            }}
          >
            Passionate about: LLM Applications · Prompt Engineering · Frontend Development · Deep Learning · Computer Vision · AI-Assisted Development
          </p>
        </motion.div>

        {/* CTA Button */}
        <div>
          <a href="#contact" className="btn-solid">
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  );
};
