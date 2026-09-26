import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Dynamic hover listeners using data-cursor attributes
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorVariant(type);
        setCursorText(text);
      } else {
        const isClickable = e.target.closest('a, button, input, [role="button"]');
        if (isClickable) {
          setCursorVariant('pointer');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        className="custom-cursor-follower"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          pointerEvents: 'none',
          zIndex: 10000,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: cursorVariant === 'pointer' ? 44 : cursorVariant === 'custom' ? 70 : 28,
          height: cursorVariant === 'pointer' ? 44 : cursorVariant === 'custom' ? 70 : 28,
          backgroundColor:
            cursorVariant === 'custom'
              ? 'rgba(212, 255, 0, 0.95)'
              : cursorVariant === 'pointer'
              ? 'rgba(212, 255, 0, 0.15)'
              : 'transparent',
          borderColor:
            cursorVariant === 'pointer'
              ? 'rgba(212, 255, 0, 0.6)'
              : cursorVariant === 'custom'
              ? '#D4FF00'
              : 'rgba(255, 255, 255, 0.35)',
          borderWidth: cursorVariant === 'custom' ? '0px' : '1px',
          borderStyle: 'solid',
          borderRadius: '50%'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#07080B',
              textTransform: 'uppercase',
              pointerEvents: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Dot */}
      {cursorVariant !== 'custom' && (
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
            width: 4,
            height: 4,
            borderRadius: '50%',
            backgroundColor: 'var(--accent-lime)',
            pointerEvents: 'none',
            zIndex: 10001
          }}
        />
      )}
    </>
  );
};
