/**
 * Strictly Factual Portfolio Knowledge Base for Mohit Kumar Mahto
 * Organized into modular domain entities for UI rendering and AI Chat retrieval.
 * Zero invented facts, zero hallucinations.
 */

// 1. Core Profile
export const profile = {
  name: "Mohit Kumar Mahto",
  role: "AI / GenAI / Frontend Developer / Deep Learning Researcher",
  headline: "I BUILD INTELLIGENT DIGITAL EXPERIENCES.",
  subheadline:
    "Computer Science engineer working across LLM applications, prompt engineering, frontend development and deep learning research.",
  availability: "AVAILABLE FOR AI / SOFTWARE OPPORTUNITIES",
  location: "Ranchi, India",
  bio: "I am an undergraduate Computer Science and Engineering student at Birla Institute of Technology, Mesra with a CGPA of 7.38. I build at the intersection of AI systems, prompt engineering, frontend craftsmanship, and deep learning research.",
  pillars: [
    {
      title: "ENGINEER",
      subtitle: "Frontend & Software Builder",
      desc: "Building accessible, high-performance web frontends and interactive component architectures with modern reactive frameworks."
    },
    {
      title: "RESEARCHER",
      subtitle: "Deep Learning & Hyperspectral Analysis",
      desc: "Investigating spatial-spectral deep neural networks for medical diagnosis at BIT Mesra, working with 826-band hyperspectral cubes."
    },
    {
      title: "CREATOR",
      subtitle: "Prompt Architect & Digital Storyteller",
      desc: "Engineering structured prompt templates, producing technical walkthroughs, product demonstrations, and AI-assisted tutorials."
    }
  ],
  interests: [
    "LLM Applications",
    "Prompt Engineering",
    "Frontend Development",
    "Deep Learning",
    "Computer Vision",
    "AI-Assisted Development"
  ]
};

// 2. Education
export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Birla Institute of Technology, Mesra",
  cgpa: "7.38",
  status: "Undergraduate Student",
  fieldOfStudy: "Computer Science and Engineering",
  location: "Mesra, Ranchi, Jharkhand, India"
};

// 3. Contact & Socials
export const contact = {
  email: "mohitmahto99@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohit-kumar-mahto-6b666b1b7/",
  github: "https://github.com/jsrmohit7",
  roomnexa: "https://roomnexa.com/",
  roomnexaYoutube: "https://www.youtube.com/@roomnexa_official",
  location: "Ranchi, India (IST timezone)"
};

// 4. RoomNexa Experience
export const roomnexa = {
  company: "RoomNexa",
  role: "Frontend Development + AI Content Creation",
  period: "6 months — Present",
  location: "Remote",
  website: "https://roomnexa.com/",
  youtube: "https://www.youtube.com/@roomnexa_official",
  contributions: [
    "Designed and developed RoomNexa website frontend with modern responsive architecture",
    "Employed Cursor-assisted development workflows for rapid UI implementation and debugging",
    "Created ~5-minute RoomNexa product tutorial videos using prompt engineering, AI avatar generation, AI-assisted motion graphics, video editing, and HTML/CSS-based animations rendered into MP4 assets for final video compositing"
  ],
  pipeline: ["DESIGN", "FRONTEND", "PROMPTS", "AI AVATAR", "MOTION GRAPHICS", "HTML/CSS → MP4", "COMPOSITING"],
  responsibilitiesSummary:
    "Mohit's RoomNexa work spans two areas: (1) Website frontend development with Cursor-assisted workflows, and (2) Full video production — creating ~5-minute product tutorial videos through a structured pipeline of prompt engineering, AI avatar generation, AI-assisted motion graphics, HTML/CSS animations exported to MP4, video editing, and final compositing.",
  videoProduction: {
    summary: "Created ~5-minute RoomNexa product tutorial videos using a complete structured production workflow.",
    avgDuration: "~5 minutes per tutorial video",
    workflow: [
      "Prompt engineering for video scripts, scene planning, visual directions and AI-generated assets",
      "AI avatar generation for tutorial presenters",
      "AI-assisted video production and content generation",
      "Professional video editing including sequencing, transitions, pacing, audio synchronization and final compositing",
      "Creation of motion graphics using AI-assisted workflows",
      "Designing motion-graphic elements using HTML and CSS",
      "Building structured HTML/CSS-based animations specifically for use as motion-graphic/video elements",
      "Rendering/exporting web-based HTML/CSS animations into MP4 video assets for integration into final tutorials",
      "Combining AI avatars, motion graphics, screen/product visuals, narration and edited footage into complete tutorial videos",
      "Iterating through prompts, visuals, animation and editing to maintain consistency and quality across videos"
    ],
    pipeline: [
      "PROMPT ENGINEERING",
      "AI AVATAR GENERATION",
      "AI-ASSISTED CONTENT GENERATION",
      "VIDEO EDITING",
      "MOTION GRAPHICS",
      "HTML/CSS ANIMATION",
      "HTML/CSS → MP4 RENDERING",
      "FINAL VIDEO COMPOSITING"
    ],
    tools: ["Prompt Engineering", "AI Avatar Generation", "AI-Assisted Video Production", "Video Editing", "Motion Graphics", "HTML/CSS Animations", "MP4 Export/Rendering", "Final Compositing"]
  }
};

// 5. Research Experience (BIT-SIPAR 2026)
export const research = {
  organization: "Department of QUEDS, Birla Institute of Technology, Mesra",
  initiative: "BIT-SIPAR 2026",
  role: "Research Intern",
  period: "June 2026 — Present",
  location: "Mesra, Ranchi",
  focus: "Medical Hyperspectral Image (HSI) Analysis for Brain Tumor & Tissue Segmentation",
  pipelineSteps: [
    { step: "01", name: "826 BANDS", desc: "Raw hyperspectral cube acquired across 400nm–1000nm wavelengths." },
    { step: "02", name: "PREPROCESSING", desc: "Dark and white calibration eliminating detector noise and atmospheric artifacts." },
    { step: "03", name: "139 BANDS", desc: "Dimensionality reduction selecting optimal signal-to-noise diagnostic bands." },
    { step: "04", name: "EXTRACT", desc: "Spatial-spectral patch extraction with Gaussian filtering and normalization." },
    { step: "05", name: "MODEL", desc: "Deep semantic segmentation via U-Net, LinkNet, and FPN architectures." },
    { step: "06", name: "SEGMENT", desc: "Multiclass tissue classification: Normal Brain, Tumor Core, and Edema." },
    { step: "07", name: "RECONSTRUCT", desc: "Whole-slice synthesis assembling patch predictions into continuous maps." }
  ],
  models: [
    { name: "U-Net", backbone: "ResNet34 / Conv blocks", role: "Symmetric skip connections for fine spatial tissue boundary preservation" },
    { name: "LinkNet", backbone: "ResNet34 / ResNet50", role: "Lightweight summation-based decoder for low-latency intraoperative visualization" },
    { name: "FPN", backbone: "ResNet50", role: "Feature Pyramid Network with lateral connections for micro-tumoral nests" },
    { name: "ResNet34", backbone: "Residual Bottlenecks", role: "34-layer residual encoder with fast convergence" },
    { name: "ResNet50", backbone: "3-layer Bottleneck Units", role: "50-layer deep residual network for hierarchical non-linear feature extraction" }
  ],
  benchmarks: "U-Net, LinkNet, and FPN with ResNet34 and ResNet50 backbones",
  spectralReduction: "826 raw spectral bands (400nm-1000nm) calibrated and reduced down to 139 high-SNR channels."
};

// 6. Projects
export const projects = [
  {
    id: "01",
    title: "MindCare AI X",
    subtitle: "AI-Powered Mental Wellness Platform",
    tags: ["Next.js", "FastAPI", "MongoDB", "IBM watsonx Granite"],
    summary:
      "Comprehensive mental wellness platform integrating IBM watsonx Granite LLMs with an Emotion Intelligence Engine for context-aware conversational coaching and journaling assistance.",
    facts: [
      "Integrated IBM watsonx Granite foundation models for conversational wellness support",
      "Context-aware personalization based on prior check-ins and behavioral preferences",
      "FastAPI REST APIs with MongoDB persistence layer",
      "Emotion Intelligence Engine for nuanced mood signal processing",
      "115+ backend tests and Playwright E2E testing"
    ],
    flow: [
      { step: "01", node: "USER", desc: "User logs daily mood check-ins & text journals" },
      { step: "02", node: "ACTIVITY / BEHAVIOR", desc: "Emotion Intelligence Engine extracts sentiment signals" },
      { step: "03", node: "CONTEXT", desc: "Historical context & behavioral preferences synthesized" },
      { step: "04", node: "GRANITE LLM", desc: "IBM watsonx Granite model executes prompt synthesis" },
      { step: "05", node: "PERSONALIZED RESPONSE", desc: "Empathetic, evidence-informed coaching delivered" }
    ],
    metrics: [
      { label: "BACKEND TESTS", val: "115+" },
      { label: "FOUNDATION MODEL", val: "IBM watsonx Granite" },
      { label: "TEST SUITE", val: "Playwright E2E" },
      { label: "DATABASE", val: "MongoDB" }
    ],
    personalizationDetails:
      "Personalization in MindCare AI X works through a multi-stage context injection pipeline: 1) User logs mood check-ins, 2) The Emotion Intelligence Engine extracts affective valence and sentiment signals, 3) Historical journal context and behavioral preferences are injected into structured prompt schemas, 4) IBM watsonx Granite foundation model synthesizes personalized, empathetic wellness coaching without clinical hallucination."
  },
  {
    id: "02",
    title: "Brain Tumor Detection / Segmentation",
    subtitle: "Hyperspectral Medical Image Analysis",
    tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    summary:
      "Medical hyperspectral imaging research analyzing 826 spectral bands. Features spectral noise removal, reduction to 139 bands, spatial-spectral patch extraction, and semantic segmentation with U-Net, LinkNet, and FPN architectures.",
    facts: [
      "Acquired and preprocessed high-dimensional 826-band medical hyperspectral cubes",
      "Engineered spectral reduction pipeline selecting 139 high-SNR diagnostic channels",
      "Spatial-spectral Gaussian filtering and normalization for patch extraction",
      "Benchmarked U-Net, LinkNet, and Feature Pyramid Networks (FPN)",
      "Integrated ResNet34 and ResNet50 residual backbones",
      "Patient-level whole-slice reconstruction and automated web-based inference"
    ],
    flow: [
      { step: "01", node: "826 BANDS", desc: "Raw hyperspectral cube across 400nm-1000nm" },
      { step: "02", node: "PREPROCESSING", desc: "Dark/white reference & noisy band suppression" },
      { step: "03", node: "139 BANDS", desc: "Dimensionality reduction preserving key tissue signatures" },
      { step: "04", node: "PATCH EXTRACTION", desc: "Gaussian filtering and spatial-spectral normalization" },
      { step: "05", node: "MODEL", desc: "U-Net, LinkNet, FPN with ResNet backbones" },
      { step: "06", node: "SEGMENTATION", desc: "Multiclass tissue classification & patient reconstruction" }
    ],
    metrics: [
      { label: "RAW BANDS", val: "826" },
      { label: "CALIBRATED BANDS", val: "139" },
      { label: "ARCHITECTURES", val: "U-Net / LinkNet / FPN" },
      { label: "BACKBONES", val: "ResNet34 / 50" }
    ]
  },
  {
    id: "03",
    title: "AI Health Assistant",
    subtitle: "Multi-Disease Prediction System",
    tags: ["Python", "Scikit-learn", "Streamlit", "Random Forest"],
    summary:
      "Clinical decision-support application implementing Random Forest classifiers with automated feature engineering, correlation analysis, and real-time interactive parameter prediction.",
    facts: [
      "Random Forest ensemble classification across clinical indicators",
      "Automated preprocessing, feature scaling, and correlation filtering",
      "Evaluated via confusion matrices and classification reports",
      "Interactive Streamlit web interface enabling real-time risk assessment"
    ],
    flow: [
      { step: "01", node: "CLINICAL DATA", desc: "Vitals, lab values, and symptom indicators" },
      { step: "02", node: "PREPROCESSING", desc: "Handling outliers, bounding, and categorical scaling" },
      { step: "03", node: "RANDOM FOREST", desc: "Ensemble decision tree voting with cross-validation" },
      { step: "04", node: "STREAMLIT UI", desc: "Real-time interactive risk probability interface" }
    ],
    metrics: [
      { label: "CLASSIFIER", val: "Random Forest" },
      { label: "FRAMEWORK", val: "Scikit-learn" },
      { label: "INTERFACE", val: "Streamlit" }
    ]
  }
];

// 7. Skills & Technical Toolkit
export const skills = {
  languages: ["Python", "Java", "C", "JavaScript", "SQL", "HTML / CSS"],
  aiml: [
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Deep Learning",
    "NLP",
    "Computer Vision"
  ],
  genai: [
    "IBM watsonx Granite",
    "Prompt Engineering",
    "LLM Applications",
    "AI Workflows",
    "Structured Outputs",
    "Context Injection"
  ],
  web: [
    "React",
    "Next.js",
    "FastAPI",
    "REST APIs",
    "Streamlit",
    "Responsive UI"
  ],
  database: ["MongoDB", "MySQL"],
  tools: [
    "Git",
    "GitHub",
    "Cursor",
    "Jupyter Notebook",
    "Google Colab",
    "Playwright"
  ],
  promptEngineering: {
    techniques: [
      "Structured Output Schemas (Strict JSON constraints)",
      "Few-Shot In-Context Learning",
      "System Persona Anchoring",
      "Context Injection & Guardrails",
      "Chain-of-Thought Reasoning",
      "Negative Constraints (Preventing hallucination)"
    ],
    useCases: [
      "IBM watsonx Granite conversational wellness coaching prompts in MindCare AI X",
      "Automated tutorial & video script generation pipelines for RoomNexa",
      "Cursor-assisted frontend component scaffolding templates"
    ]
  },
  llmExperience: {
    model: "IBM watsonx Granite foundation model",
    integrations: [
      "Context-aware personalization in MindCare AI X",
      "Deterministic structured JSON prompt templates",
      "FastAPI backend orchestration with MongoDB persistence",
      "Automated script generation for RoomNexa tutorials"
    ]
  }
};

// 8. Experience Array (combining RoomNexa and BIT-SIPAR)
export const experience = [
  {
    company: roomnexa.company,
    role: roomnexa.role,
    period: roomnexa.period,
    location: roomnexa.location,
    website: roomnexa.website,
    youtube: roomnexa.youtube,
    contributions: roomnexa.contributions,
    pipeline: roomnexa.pipeline
  },
  {
    company: "BIT-SIPAR 2026",
    role: research.role,
    organization: research.organization,
    period: research.period,
    location: research.location,
    contributions: [
      "Researched hyperspectral brain image processing for non-invasive tumor and tissue identification",
      "Engineered automated pipelines for spectral feature extraction and 826-to-139 band reduction",
      "Implemented patch generation protocols ensuring robust training across heterogeneous slices",
      "Evaluated semantic segmentation networks: U-Net, LinkNet, and FPN with ResNet backbones",
      "Developed web-assisted inference prototypes for visual inspection of reconstructed tissue maps"
    ],
    pipeline: ["CALIBRATION", "REDUCTION", "PATCHING", "BENCHMARK", "EVALUATION"]
  }
];

// Unified profileData object for seamless backward compatibility across all portfolio components
export const profileData = {
  name: profile.name,
  role: profile.role,
  headline: profile.headline,
  subheadline: profile.subheadline,
  availability: profile.availability,
  location: profile.location,
  education,
  socials: contact,
  about: {
    story: profile.bio,
    pillars: profile.pillars,
    interests: profile.interests
  },
  skills,
  projects,
  experience,
  roomnexa,
  research,
  contact
};
