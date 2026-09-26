import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({
  number,
  sysCode,
  title,
  subtitle,
  tag,
  align = 'left'
}) => {
  return (
    <div
      className={`section-header-block mb-12 md:mb-16 ${
        align === 'center' ? 'text-center' : ''
      }`}
      style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}
    >
      <div
        className="flex items-center gap-3"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          marginBottom: '0.85rem'
        }}
      >
        <span
          className="mono-tag"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            color: 'var(--accent-lime)',
            letterSpacing: '0.1em',
            fontWeight: 500
          }}
        >
          {number}
        </span>
        <span
          style={{
            width: '24px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          }}
        />
        <span
          className="mono-tag"
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em'
          }}
        >
          [{sysCode}]
        </span>
        {tag && (
          <span
            className="tech-badge lime"
            style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem' }}
          >
            {tag}
          </span>
        )}
      </div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: 'var(--text-primary)',
          maxWidth: align === 'center' ? '800px' : '950px',
          margin: align === 'center' ? '0 auto' : '0'
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="sub-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '0.75rem',
            maxWidth: align === 'center' ? '700px' : '750px',
            margin: align === 'center' ? '0.75rem auto 0' : '0.75rem 0 0',
            color: 'var(--text-secondary)'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
