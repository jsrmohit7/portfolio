import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, BrainCircuit, Sparkles, Layers, Database, Wrench } from 'lucide-react';
import { profileData } from '../data/profile.js';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", desc: "AI / ML / Automation" },
        { name: "Java", desc: "Core OOP / Data Structures" },
        { name: "C", desc: "Systems & Memory" },
        { name: "JavaScript", desc: "ES6+ / Web Components" },
        { name: "SQL", desc: "Relational Queries" },
        { name: "HTML / CSS", desc: "Modern Responsive UI" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: BrainCircuit,
      skills: [
        { name: "TensorFlow", desc: "Deep Learning Framework" },
        { name: "Keras", desc: "High-level Neural APIs" },
        { name: "Scikit-learn", desc: "Random Forest & Classifiers" },
        { name: "Deep Learning", desc: "U-Net / FPN / CNNs" },
        { name: "NLP", desc: "Text Analytics & Tokens" },
        { name: "Computer Vision", desc: "OpenCV & Hyperspectral" }
      ]
    },
    {
      title: "GenAI & LLM Applications",
      icon: Sparkles,
      skills: [
        { name: "IBM watsonx Granite", desc: "Foundation Model" },
        { name: "Prompt Engineering", desc: "Structured Prompt Design" },
        { name: "LLM Applications", desc: "Context Injection & APIs" },
        { name: "AI Workflows", desc: "Multi-step Pipelines" },
        { name: "Structured Outputs", desc: "Strict JSON Constraints" },
        { name: "AI Content Systems", desc: "Script & Reel Generation" }
      ]
    },
    {
      title: "Web & Backend Development",
      icon: Layers,
      skills: [
        { name: "React", desc: "Component Architecture" },
        { name: "Next.js", desc: "Modern Full-Stack UI" },
        { name: "FastAPI", desc: "High-Performance REST" },
        { name: "REST APIs", desc: "CRUD & Microservices" },
        { name: "Streamlit", desc: "Interactive Model Demos" },
        { name: "Playwright", desc: "E2E Testing Suite" }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "MongoDB", desc: "Document / NoSQL Store" },
        { name: "MySQL", desc: "Relational DB Schemas" }
      ]
    },
    {
      title: "Tools & Development",
      icon: Wrench,
      skills: [
        { name: "Cursor", desc: "AI-Accelerated IDE" },
        { name: "Git & GitHub", desc: "Version Control & CI" },
        { name: "Jupyter Notebook", desc: "Exploratory Analytics" },
        { name: "Google Colab", desc: "Cloud GPU Training" }
      ]
    }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">What Skills I Have</p>
          <h2 className="section-title-ref">Skills & Toolkit</h2>
        </div>

        {/* 2-Column Responsive Card Grid matching Keshav */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="ref-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCDCDC',
                  padding: '1.75rem 1.5rem'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid #E5E5E5',
                    paddingBottom: '0.75rem'
                  }}
                >
                  <Icon size={20} color="#000000" />
                  <h3
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#000000'
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* 2-Column Skills List matching Keshav */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem'
                  }}
                >
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem'
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="#000000"
                        style={{ flexShrink: 0, marginTop: '3px' }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: 'var(--font-main)',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            color: '#000000',
                            lineHeight: 1.25
                          }}
                        >
                          {skill.name}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-main)',
                            fontSize: '0.76rem',
                            color: '#666666',
                            marginTop: '0.15rem'
                          }}
                        >
                          {skill.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
