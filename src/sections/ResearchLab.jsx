import React from 'react';
import { motion } from 'framer-motion';
import { Network, CheckCircle2, FlaskConical, Layers } from 'lucide-react';

export const ResearchLab = () => {
  const pipeline = [
    { num: "01", name: "826 BANDS", desc: "Raw hyperspectral cube acquired across 400nm–1000nm wavelengths." },
    { num: "02", name: "PREPROCESSING", desc: "Dark and white calibration eliminating detector noise and atmospheric artifacts." },
    { num: "03", name: "139 BANDS", desc: "Dimensionality reduction selecting optimal signal-to-noise diagnostic bands." },
    { num: "04", name: "EXTRACT", desc: "Spatial-spectral patch extraction with Gaussian filtering and normalization." },
    { num: "05", name: "MODEL", desc: "Deep semantic segmentation via U-Net, LinkNet, and FPN architectures." },
    { num: "06", name: "SEGMENT", desc: "Multiclass tissue classification: Normal Brain, Tumor Core, and Edema." },
    { num: "07", name: "RECONSTRUCT", desc: "Whole-slice synthesis assembling patch predictions into continuous maps." }
  ];

  const models = [
    {
      name: "U-Net",
      type: "Encoder-Decoder with Skip Connections",
      encoder: "ResNet34 / Conv blocks",
      decoder: "Up-sampling with feature concatenation",
      advantage: "Preserves fine spatial tissue boundaries via symmetrical low-to-high skip paths.",
      clinicalRole: "High-precision boundary delineation between healthy brain tissue and infiltrative tumor margins."
    },
    {
      name: "LinkNet",
      type: "Lightweight Efficient Decoder",
      encoder: "ResNet34 / ResNet50",
      decoder: "Summation-based unpooling",
      advantage: "Bypasses heavy feature concatenation by directly adding encoder outputs to decoders.",
      clinicalRole: "Low parameter footprint and rapid inference speed for near real-time intraoperative visualization."
    },
    {
      name: "FPN",
      type: "Multi-Scale Pyramidal Architecture",
      encoder: "ResNet50 Backbone",
      decoder: "Pyramid multi-resolution heads",
      advantage: "Constructs feature pyramids with top-down pathway and lateral connections across all scales.",
      clinicalRole: "Robust identification of micro-tumoral nests at varying magnification and tissue depths."
    },
    {
      name: "ResNet34",
      type: "34-Layer Residual Feature Extractor",
      encoder: "Residual bottleneck blocks",
      decoder: "Paired with U-Net / LinkNet decoders",
      advantage: "Residual identity mappings alleviate gradient degradation with fast convergence.",
      clinicalRole: "Balanced depth for moderate-sized hyperspectral patient cohorts."
    },
    {
      name: "ResNet50",
      type: "50-Layer Deep Residual Network",
      encoder: "Deep Bottleneck Residual Units",
      decoder: "Paired with FPN / U-Net decoders",
      advantage: "3-layer bottleneck architecture capturing hierarchical non-linear spectral interactions.",
      clinicalRole: "Deep feature extraction for complex multi-class tissue discrimination."
    }
  ];

  return (
    <section id="research" className="section">
      <div className="container">
        {/* Section Header matching Keshav */}
        <div className="section-header-ref">
          <p className="section-sublabel">BIT-SIPAR 2026 · QUEDS Department</p>
          <h2 className="section-title-ref">Hyperspectral Imaging Research</h2>
        </div>

        {/* 7-Step Pipeline Strip (Clean & Static) */}
        <div
          className="ref-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto 2.5rem auto',
            backgroundColor: '#FFFFFF',
            border: '1px solid #DCDCDC',
            padding: '1.75rem'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#8A8A8A',
              marginBottom: '1rem'
            }}
          >
            END-TO-END RESEARCH PIPELINE:
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.75rem'
            }}
          >
            {pipeline.map((step) => (
              <div
                key={step.num}
                style={{
                  padding: '0.85rem',
                  borderRadius: '0.45rem',
                  backgroundColor: '#F9F9F9',
                  border: '1px solid #E5E5E5'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    color: '#000000',
                    marginBottom: '0.2rem'
                  }}
                >
                  STEP {step.num} · {step.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.78rem',
                    color: '#4A4A4A',
                    lineHeight: 1.4
                  }}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Learning Architecture Benchmarks Grid (Clean & Static) */}
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              borderBottom: '1px solid #E5E5E5',
              paddingBottom: '1rem',
              marginBottom: '1.5rem'
            }}
          >
            <Network size={18} color="#000000" />
            <h3
              style={{
                fontFamily: 'var(--font-main)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#000000'
              }}
            >
              Model Architecture Benchmarks
            </h3>
          </div>

          {/* Model Comparison Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {models.map((model) => (
              <div
                key={model.name}
                style={{
                  padding: '1.25rem',
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
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#000000',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {model.type}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#000000',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {model.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.84rem',
                      color: '#4A4A4A',
                      lineHeight: 1.5,
                      marginBottom: '0.85rem'
                    }}
                  >
                    {model.advantage}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '0.75rem',
                    borderTop: '1px solid #E5E5E5',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#666666'
                  }}
                >
                  <span style={{ fontWeight: 700, color: '#000000' }}>Encoder:</span> {model.encoder} <br />
                  <span style={{ fontWeight: 700, color: '#000000' }}>Decoder:</span> {model.decoder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
