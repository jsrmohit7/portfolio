/**
 * Mohit Kumar Mahto — Portfolio Data
 * Factual, authentic portfolio information strictly adhering to project specifications.
 */

export const personalData = {
  name: "Mohit Kumar Mahto",
  role: "AI / GenAI / Frontend Developer / Deep Learning Researcher",
  heroHeading: "I build intelligent digital experiences.",
  heroSubheading:
    "Computer Science engineer working across LLMs, prompt engineering, frontend development and deep learning research.",
  status: "AVAILABLE FOR AI / SOFTWARE OPPORTUNITIES",
  location: "Ranchi, India",
  education: {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Birla Institute of Technology, Mesra",
    cgpa: "7.38",
    status: "Undergraduate"
  },
  socials: {
    github: "https://github.com/jsrmohit7",
    linkedin: "https://www.linkedin.com/in/mohit-kumar-mahto-6b666b1b7/",
    email: "mohitmahto99@gmail.com",
    roomnexa: "https://roomnexa.com/",
    roomnexaYoutube: "https://www.youtube.com/@roomnexa_official"
  }
};

export const projectsData = [
  {
    id: "01",
    sysId: "SYS:01_WELLNESS_AI",
    title: "MindCare AI X",
    tagline: "AI-Powered Mental Wellness Platform",
    featured: true,
    category: "LLM Systems & Full-Stack Interface",
    techStack: ["Next.js", "FastAPI", "MongoDB", "IBM watsonx Granite"],
    summary:
      "A comprehensive mental wellness ecosystem integrating IBM watsonx Granite foundation models with an Emotion Intelligence Engine for context-aware conversational coaching and journaling assistance.",
    architecture: [
      {
        step: "01",
        node: "USER",
        role: "Behavioral Input",
        detail: "User check-ins, mood logs, text entries & interaction history"
      },
      {
        step: "02",
        node: "ACTIVITY / BEHAVIOR",
        role: "Signal Extraction",
        detail: "Emotion Intelligence Engine analyzes emotional tone & temporal trends"
      },
      {
        step: "03",
        node: "CONTEXT",
        role: "State Aggregation",
        detail: "Recent check-ins + selected preferences synthesized into prompt context"
      },
      {
        step: "04",
        node: "GRANITE LLM",
        role: "IBM Foundation Model",
        detail: "IBM watsonx Granite LLM generates empathetic, tailored coaching responses"
      },
      {
        step: "05",
        node: "PERSONALIZED RESPONSE",
        role: "Actionable Guidance",
        detail: "Context-aware coaching, adaptive reflections & cognitive re-framing"
      }
    ],
    technicalHighlights: [
      "Integrated IBM watsonx Granite LLMs for conversational wellness support",
      "Context-aware personalization based on prior activities and behavioral preferences",
      "Emotion Intelligence Engine for nuanced mood signal processing",
      "FastAPI REST APIs with MongoDB persistence layer",
      "Quality assurance with 115+ backend tests and Playwright E2E test suites"
    ],
    verifiedMetrics: [
      { label: "BACKEND TESTS", value: "115+" },
      { label: "FOUNDATION MODEL", value: "IBM watsonx" },
      { label: "E2E SUITE", value: "Playwright" },
      { label: "DATABASE", value: "MongoDB" }
    ]
  },
  {
    id: "02",
    sysId: "SYS:02_HYPERSPECTRAL_DL",
    title: "Brain Tumor Detection & Segmentation",
    tagline: "Medical Hyperspectral Image Analysis",
    featured: true,
    category: "Deep Learning & Computer Vision Research",
    techStack: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    summary:
      "Advanced biomedical imaging research leveraging medical hyperspectral images across 826 spectral bands. Features spectral dimensionality reduction, spatial-spectral filtering, deep semantic segmentation, and patient-level volume reconstruction.",
    architecture: [
      {
        step: "01",
        node: "826 BANDS",
        role: "Raw Hyperspectral Cube",
        detail: "High-dimensional spectral imaging capturing fine tissue absorption spectra"
      },
      {
        step: "02",
        node: "139 BANDS",
        role: "Dimensionality Reduction",
        detail: "Noisy-band removal, spectral calibration and Gaussian filtering to 139 bands"
      },
      {
        step: "03",
        node: "FEATURES",
        role: "Patch Extraction",
        detail: "Spatial-spectral patch extraction with normalization and tissue profiling"
      },
      {
        step: "04",
        node: "MODEL",
        role: "Segmentation Networks",
        detail: "Evaluation across U-Net, LinkNet, FPN with ResNet34 and ResNet50 backbones"
      },
      {
        step: "05",
        node: "SEGMENTATION",
        role: "Patient Reconstruction",
        detail: "Multiclass tissue classification (tumor core, edema, healthy) & web inference"
      }
    ],
    technicalHighlights: [
      "Processed high-dimensional medical hyperspectral cubes with 826 discrete spectral bands",
      "Engineered spectral reduction pipeline reducing noise while retaining 139 vital diagnostic bands",
      "Implemented spatial-spectral Gaussian filtering and normalization for high-precision patch extraction",
      "Benchmarked segmentation architectures: U-Net, LinkNet, and Feature Pyramid Networks (FPN)",
      "Integrated ResNet34 and ResNet50 backbones for deep semantic feature representations",
      "Built patient-level whole-slide reconstruction and automated web-based inference demo"
    ],
    verifiedMetrics: [
      { label: "RAW BANDS", value: "826" },
      { label: "CALIBRATED BANDS", value: "139" },
      { label: "ARCHITECTURES", value: "U-Net / FPN / LinkNet" },
      { label: "BACKBONES", value: "ResNet34 / 50" }
    ]
  },
  {
    id: "03",
    sysId: "SYS:03_PREDICTION_ENGINE",
    title: "AI Health Assistant",
    tagline: "Multi-Disease Predictive Diagnosis System",
    featured: false,
    category: "Machine Learning & Clinical Data Mining",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Random Forest"],
    summary:
      "A clinical decision-support application implementing Random Forest classifiers with rigorous feature engineering and real-time interactive parameter prediction.",
    architecture: [
      {
        step: "01",
        node: "CLINICAL DATA",
        role: "Symptom & Vitals",
        detail: "Multivariate clinical indicators and patient biological parameters"
      },
      {
        step: "02",
        node: "PREPROCESSING",
        role: "Feature Engineering",
        detail: "Handling missing values, outlier bounding and categorical encodings"
      },
      {
        step: "03",
        node: "RANDOM FOREST",
        role: "Ensemble Classifier",
        detail: "Ensemble bagging over decision trees with cross-validation tuning"
      },
      {
        step: "04",
        node: "STREAMLIT UI",
        role: "Real-time Inference",
        detail: "Interactive diagnosis simulation interface for clinical exploratory analysis"
      }
    ],
    technicalHighlights: [
      "Engineered robust Random Forest classification pipeline across heterogeneous symptom sets",
      "Implemented automated preprocessing, feature scaling, and correlation filtering",
      "Comprehensive evaluation with confusion matrices and classification reports",
      "Interactive Streamlit web interface enabling instant dynamic probability testing"
    ],
    verifiedMetrics: [
      { label: "ALGORITHM", value: "Random Forest" },
      { label: "FRAMEWORK", value: "Scikit-Learn" },
      { label: "INTERFACE", value: "Streamlit" }
    ]
  }
];

export const experienceData = [
  {
    id: "exp-01",
    company: "RoomNexa",
    companyUrl: "https://roomnexa.com/",
    youtubeUrl: "https://www.youtube.com/@roomnexa_official",
    role: "Frontend Development + AI Content",
    period: "6 months — Present",
    type: "Industry Experience",
    location: "Remote",
    primaryPillars: [
      "Website Frontend Development",
      "Cursor-Assisted Engineering",
      "Prompt Engineering",
      "Product Demonstration & Walkthroughs",
      "AI-Generated Visual Content",
      "AI-Assisted Video Tutorials & Reels"
    ],
    workflowSequence: [
      { step: "01", title: "DESIGN", desc: "Crafting UI layout, color harmonies & responsive visual system" },
      { step: "02", title: "FRONTEND", desc: "Implementing modern component architecture with Cursor-assisted workflows" },
      { step: "03", title: "PROMPTS", desc: "Engineering system prompts for content generation and script automation" },
      { step: "04", title: "TUTORIALS", desc: "Producing technical product walkthroughs and instructional demonstrations" },
      { step: "05", title: "REELS", desc: "Designing short-form visual content and engaging AI-assisted tutorials" }
    ],
    contributions: [
      "Designed and developed the RoomNexa website frontend with modern responsive aesthetics",
      "Leveraged Cursor-assisted development workflows for rapid UI implementation and iterative debugging",
      "Engineered prompts to generate script templates, instructional guides, and visual content",
      "Produced comprehensive product walkthrough demonstrations and AI-assisted tutorial videos",
      "Created engaging short-form reels published to the official RoomNexa YouTube channel"
    ]
  },
  {
    id: "exp-02",
    company: "BIT-SIPAR 2026",
    organization: "Department of QUEDS, BIT Mesra",
    role: "Research Intern",
    period: "June 2026 — Present",
    type: "Academic Research Internship",
    location: "Mesra, Ranchi",
    primaryPillars: [
      "Hyperspectral Brain Image Analysis",
      "Spatial-Spectral Preprocessing",
      "Tumor & Tissue Semantic Segmentation",
      "Deep Learning Model Benchmarking",
      "Patient-Level Slice Reconstruction",
      "Automated Web-Based Inference"
    ],
    workflowSequence: [
      { step: "01", title: "CALIBRATION", desc: "826-band acquisition, radiometric correction & noisy-band suppression" },
      { step: "02", title: "REDUCTION", desc: "Optimal spectral subset extraction down to 139 high-SNR bands" },
      { step: "03", title: "PATCHING", desc: "Spatial-spectral patch generation, Gaussian filtering & normalization" },
      { step: "04", title: "BENCHMARK", desc: "Training U-Net, LinkNet, FPN with ResNet34 and ResNet50 backbones" },
      { step: "05", title: "EVALUATION", desc: "Multiclass tissue segmentation, whole-slide reconstruction & inference" }
    ],
    contributions: [
      "Researched hyperspectral brain image processing for non-invasive tumor and tissue identification",
      "Engineered automated pipelines for spectral feature extraction and 826-to-139 band reduction",
      "Implemented patch generation protocols ensuring robust training across heterogeneous tissue slices",
      "Evaluated semantic segmentation networks: U-Net, LinkNet, and FPN with ResNet backbones",
      "Developed web-assisted inference prototypes for visual inspection of reconstructed tissue maps"
    ]
  }
];

export const aiLabData = {
  heading: "AI isn't just a tool.\nIt's part of how I build.",
  subheading:
    "From utilizing IBM watsonx Granite foundation models to structuring system prompts and orchestrating Cursor-accelerated software engineering, AI is woven into every layer of my workflow.",
  pillars: [
    {
      num: "01",
      title: "LLM APPLICATIONS",
      technologies: "IBM watsonx Granite · Context Injection · FastAPI",
      desc: "Building context-aware wellness and software assistants that combine behavioral telemetry with foundation LLMs to deliver hyper-relevant, empathetic responses without hallucination."
    },
    {
      num: "02",
      title: "PROMPT ENGINEERING",
      technologies: "Structured Outputs · Persona Anchors · Chain-of-Thought",
      desc: "Architecting deterministic prompt templates for strict JSON schema outputs, multi-stage reasoning, educational video script writing, and consistent visual asset generation."
    },
    {
      num: "03",
      title: "AI-ASSISTED DEVELOPMENT",
      technologies: "Cursor IDE · Context Priming · Fast Iteration",
      desc: "Treating Cursor as a force multiplier: composing modular frontend code, eliminating boilerplate, tracing subtle edge-case bugs, and accelerating delivery cycles."
    },
    {
      num: "04",
      title: "CONTENT SYSTEMS",
      technologies: "AI Video Tools · Tutorial Scripting · Visual Storytelling",
      desc: "Designing automated content workflows that transform technical software concepts into concise product walkthroughs, developer tutorials, and high-impact short-form reels."
    }
  ],
  promptLabPresets: [
    {
      id: "preset-wellness",
      name: "watsonx Granite · Emotional Reframing",
      domain: "Mental Wellness & Cognitive Guidance",
      userQuery: "I've been feeling overwhelmed with multiple deadlines and skipping my daily walks.",
      context: "{ user: 'Mohit', pastCheckIns: ['elevated_stress', 'low_sleep'], preference: 'gentle_accountability' }",
      systemPrompt: `You are an empathetic, evidence-informed wellness companion powered by IBM watsonx Granite.
Analyze the user's recent behavioral patterns and current input.
Respond with:
1. Validating emotional reflection (2 sentences max).
2. One small, high-agency micro-action that requires < 5 minutes.
3. A reflective closing inquiry.
Strictly adhere to a supportive, grounded tone.`,
      modelRuntime: "IBM watsonx Granite 13B / 20B Instruct",
      outputSimulated: {
        emotionalReflection: "It makes complete sense that carrying multiple deadlines at once feels heavy, especially when restorative routines like your daily walks get squeezed out.",
        microAction: "Right now, step away from the screen for just 3 minutes. Stand near a window, do three slow diaphragm breaths, and stretch your shoulders.",
        closingInquiry: "Would you like us to schedule a 10-minute fresh air pause before your next coding block?"
      }
    },
    {
      id: "preset-hyperspectral",
      name: "Spectral Reduction · Band Selection Protocol",
      domain: "Hyperspectral Brain Imaging Research",
      userQuery: "Identify criteria to eliminate water-absorption and high-noise channels from 826-band cube.",
      context: "{ sensor: 'Cubert UHD 185', rawBands: 826, targetBands: 139, spectralRange: '400nm-1000nm' }",
      systemPrompt: `You are a medical hyperspectral imaging specialist assisting with tissue segmentation preprocessing.
Synthesize the noise filtering protocol:
1. Signal-to-Noise Ratio (SNR) thresholding.
2. Removal of atmospheric / sensor boundary bands (< 450nm and > 950nm).
3. Gaussian spectral smoothing parameter specifications.
Return concise technical directives.`,
      modelRuntime: "Deep Learning Research Prompt Engine",
      outputSimulated: {
        filterCriteria: "Discard channels 1-28 (<440nm) due to sensor quantum efficiency falloff, and channels 780-826 (>960nm) due to water vapor absorption.",
        spectralSmoothing: "Apply 1D Gaussian kernel (σ=1.2) across consecutive wavelengths to preserve spectral gradient while suppressing thermal detector ripple.",
        targetSelection: "Uniformly sample 139 high-confidence diagnostic bands preserving characteristic hemoglobin and lipid absorption peaks."
      }
    },
    {
      id: "preset-cursor",
      name: "Cursor Development · Component Scaffold",
      domain: "Rapid Frontend Architecture",
      userQuery: "Generate a responsive, accessible node pipeline component with active state highlighting in React.",
      context: "{ framework: 'Vite React', styling: 'Vanilla CSS / Modular Tokens', motion: 'Framer Motion' }",
      systemPrompt: `You are an expert creative frontend engineer pair-programming in Cursor.
Generate a minimal, accessible interactive pipeline visualization:
- Semantic <nav> or <ol> list
- Framer Motion layout transitions
- Zero inline styles; use CSS variables for theme tokens
- Keyboard navigability (Enter / Space activation)`,
      modelRuntime: "Cursor Pro Assistant Runtime",
      outputSimulated: {
        componentStatus: "Ready to render with zero layout shift",
        codeSnippet: "const NodeStep = ({ active, label, onClick }) => (\n  <motion.button layout className={`pipeline-node ${active ? 'active' : ''}`} onClick={onClick}>\n    <span className=\"mono-badge\">{step}</span>\n    <h4>{label}</h4>\n  </motion.button>\n);",
        a11yCheck: "aria-current='step' and role='tablist' confirmed compliant"
      }
    }
  ]
};

export const researchLabData = {
  title: "Hyperspectral Imaging & Deep Segmentation",
  subtitle: "Medical imaging research conducted at BIT Mesra (BIT-SIPAR 2026, Department of QUEDS)",
  overview:
    "Hyperspectral imaging (HSI) acquires contiguous narrow spectral bands across electromagnetic wavelengths, capturing unique biochemical signatures of pathological brain tissue invisible to conventional RGB imaging.",
  pipeline: [
    {
      num: "01",
      name: "ACQUISITION",
      spec: "826 Spectral Bands",
      desc: "Capturing high-dimensional contiguous cubes across 400nm–1000nm wavelengths."
    },
    {
      num: "02",
      name: "PREPROCESS",
      spec: "Noise Suppression",
      desc: "Dark & white reference calibration, eliminating detector artifacts."
    },
    {
      num: "03",
      name: "REDUCE",
      spec: "826 → 139 Channels",
      desc: "Removing noisy water absorption bands while preserving key diagnostic signatures."
    },
    {
      num: "04",
      name: "EXTRACT",
      spec: "Patch Normalization",
      desc: "Extracting spatial-spectral patches with Gaussian filtering across tissue boundaries."
    },
    {
      num: "05",
      name: "SEGMENT",
      spec: "Deep Neural Networks",
      desc: "Multiclass tissue classification: Normal Brain, Tumor Core, Edema, and Necrotic tissue."
    },
    {
      num: "06",
      name: "RECONSTRUCT",
      spec: "Whole-Slide Synthesis",
      desc: "Reassembling patch predictions into continuous patient-level tissue segmentations."
    }
  ],
  models: [
    {
      id: "unet",
      name: "U-Net",
      type: "Encoder-Decoder with Skip Connections",
      advantage: "Preserves fine spatial tissue boundaries via symmetrical low-to-high skip paths",
      encoder: "ResNet34 / Conv blocks",
      decoder: "Up-sampling with feature concatenation",
      primaryFocus: "High boundary delineation between healthy brain parenchyma and infiltrative tumor margins"
    },
    {
      id: "linknet",
      name: "LinkNet",
      type: "Lightweight Efficient Decoder",
      advantage: "Bypasses heavy feature concatenation by directly adding encoder outputs to decoders",
      encoder: "ResNet34 / ResNet50",
      decoder: "Summation-based unpooling",
      primaryFocus: "Low parameter footprint and rapid inference speed for near real-time intraoperative visualization"
    },
    {
      id: "fpn",
      name: "FPN (Feature Pyramid Network)",
      type: "Multi-Scale Pyramidal Architecture",
      advantage: "Constructs feature pyramids with top-down pathway and lateral connections across all scales",
      encoder: "ResNet50 Backbone",
      decoder: "Pyramid multi-resolution heads",
      primaryFocus: "Robust identification of micro-tumoral nests at varying magnification and tissue depths"
    },
    {
      id: "resnet34",
      name: "ResNet34 Backbone",
      type: "34-Layer Residual Feature Extractor",
      advantage: "Residual identity mappings alleviate gradient degradation with fast convergence",
      encoder: "Residual bottleneck blocks",
      decoder: "Paired with U-Net / LinkNet decoders",
      primaryFocus: "Balanced depth for moderate-sized hyperspectral patient cohorts"
    },
    {
      id: "resnet50",
      name: "ResNet50 Backbone",
      type: "50-Layer Deep Residual Network",
      advantage: "3-layer bottleneck architecture capturing hierarchical non-linear spectral interactions",
      encoder: "Deep Bottleneck Residual Units",
      decoder: "Paired with FPN / U-Net decoders",
      primaryFocus: "Deep feature extraction for complex multi-class tissue discrimination"
    }
  ]
};

export const toolkitData = {
  languages: [
    { name: "Python", level: "Primary", tag: "AI / ML / Scripts" },
    { name: "JavaScript (ES6+)", level: "Primary", tag: "Frontend / React" },
    { name: "Java", level: "Core", tag: "OOP / Algorithms" },
    { name: "C", level: "Core", tag: "Systems / Low Level" },
    { name: "SQL", level: "Core", tag: "Database Queries" },
    { name: "HTML5 / CSS3", level: "Expert", tag: "Modern Web UI" }
  ],
  aiml: [
    { name: "TensorFlow", category: "Framework", tag: "Deep Learning" },
    { name: "Keras", category: "High-level API", tag: "Neural Nets" },
    { name: "Scikit-learn", category: "ML Library", tag: "Random Forest & Classifiers" },
    { name: "Deep Learning", category: "Methodology", tag: "U-Net / FPN / CNNs" },
    { name: "NLP", category: "Domain", tag: "Text Processing & Embeddings" },
    { name: "Computer Vision", category: "Domain", tag: "OpenCV & Hyperspectral" }
  ],
  genai: [
    { name: "IBM watsonx Granite", category: "Foundation Models", tag: "Enterprise LLM" },
    { name: "Prompt Engineering", category: "Discipline", tag: "Structured Outputs & Few-Shot" },
    { name: "LLM Applications", category: "Systems", tag: "Context Injection & APIs" },
    { name: "AI Workflows", category: "Orchestration", tag: "Automated Content & Prompts" }
  ],
  webBackend: [
    { name: "React", category: "Frontend", tag: "Component Architecture" },
    { name: "Next.js", category: "Framework", tag: "Full-Stack Web" },
    { name: "FastAPI", category: "Backend", tag: "High-Performance APIs" },
    { name: "REST APIs", category: "Architecture", tag: "CRUD & Microservices" },
    { name: "Streamlit", category: "Data UI", tag: "Rapid Model Demos" }
  ],
  database: [
    { name: "MongoDB", category: "NoSQL", tag: "Document Store" },
    { name: "MySQL", category: "Relational", tag: "Structured Schemas" }
  ],
  tools: [
    { name: "Git", category: "VCS", tag: "Version Control" },
    { name: "GitHub", category: "Platform", tag: "Collaboration & CI" },
    { name: "Cursor", category: "AI IDE", tag: "Accelerated Dev" },
    { name: "Jupyter Notebook", category: "Analysis", tag: "Experiments" },
    { name: "Google Colab", category: "Compute", tag: "GPU Training" }
  ]
};

export const aboutData = {
  narrativePillars: [
    {
      title: "ENGINEER",
      subtitle: "Frontend & Software Builder",
      description:
        "Building user interfaces that marry visual refinement with technical robustness. Passionate about modern component systems, reactive states, and accessible, high-performance interactions."
    },
    {
      title: "RESEARCHER",
      subtitle: "Deep Learning & Hyperspectral Analysis",
      description:
        "Investigating spatial-spectral deep neural networks for medical diagnosis at BIT Mesra. Working directly with 826-band hyperspectral cubes, noise suppression, and semantic segmentation backbones."
    },
    {
      title: "CREATOR",
      subtitle: "Prompt Architect & Digital Storyteller",
      description:
        "Transforming technical knowledge into engaging artifacts. From structuring complex prompt pipelines for watsonx Granite to producing tutorial videos and developer walkthroughs for RoomNexa."
    }
  ],
  bioText: [
    "I am an undergraduate Computer Science & Engineering student at Birla Institute of Technology, Mesra (CGPA: 7.38), based in Ranchi, India.",
    "My focus centers at the convergence of Artificial Intelligence, prompt engineering, frontend craftsmanship, and deep learning research.",
    "Whether developing responsive frontends for RoomNexa, building context-aware wellness systems with IBM watsonx Granite, or evaluating U-Net and FPN backbones on medical hyperspectral imagery, I prioritize technical authenticity, craftsmanship, and meaningful real-world utility."
  ]
};
