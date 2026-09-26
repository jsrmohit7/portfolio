import React from 'react';
import { motion } from 'framer-motion';
import { ChatInterface } from '../components/chat/ChatInterface';

export const ChatAI = () => {
  return (
    <section id="chat-ai" className="section section-alt">
      <div className="container">
        {/* Section Header matching Keshav layout */}
        <div className="section-header-ref">
          <p className="section-sublabel">Interactive Knowledge System</p>
          <h2 className="section-title-ref">Ask My AI About Mohit</h2>
        </div>

        {/* Sleek, slightly smaller Refactored Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ChatInterface />
        </motion.div>
      </div>
    </section>
  );
};
