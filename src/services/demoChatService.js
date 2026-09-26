/**
 * Demo Chat Engine
 * Resolves user questions against Mohit's structured factual portfolio data.
 * Uses topic classification, keyword relevance, and entity extraction.
 * Strictly adheres to factual information without hallucination.
 */

import {
  profile,
  education,
  experience,
  roomnexa,
  research,
  projects,
  skills,
  contact
} from '../data/profile.js';

/**
 * Normalizes input text: lowercases, trims, and cleans non-alphanumeric punctuation
 */
function normalizeQuery(text) {
  if (!text || typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .replace(/[?!.,;:()\[\]{}"'`_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Tokenizes text into individual words
 */
function tokenize(text) {
  return normalizeQuery(text).split(' ').filter(Boolean);
}

/**
 * Checks if query contains any of the target phrases or keywords
 */
function containsAny(query, tokens, list) {
  for (const item of list) {
    if (item.includes(' ')) {
      if (query.includes(item)) return true;
    } else {
      if (tokens.includes(item)) return true;
    }
  }
  return false;
}

/**
 * Evaluates topic intent based on keyword relevance
 */
export const answerFromPortfolio = async (rawMessage) => {
  // Add brief natural processing delay (300-600ms) for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 350 + Math.random() * 250));

  const query = normalizeQuery(rawMessage);
  const tokens = tokenize(query);

  if (!query) {
    return {
      content: "Please ask a question about Mohit's background, projects, skills, or research.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 1. CGPA & Academic Scores (Specific intent check before general education)
  if (
    containsAny(query, tokens, ['cgpa', 'gpa', 'score', 'grade', 'percentage', 'marks']) ||
    (query.includes('how') && query.includes('study') && query.includes('score'))
  ) {
    return {
      content: `Mohit has a CGPA of ${education.cgpa} in his ${education.degree} at ${education.institution}.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 2. Education & Field of Study
  if (
    containsAny(query, tokens, [
      'study',
      'studying',
      'degree',
      'education',
      'college',
      'university',
      'institute',
      'school',
      'academics',
      'btech',
      'bit',
      'mesra',
      'major',
      'branch'
    ]) ||
    (query.includes('what') && query.includes('study')) ||
    (query.includes('where') && query.includes('study'))
  ) {
    return {
      content: `Mohit is an ${education.status} pursuing ${education.degree} at ${education.institution} (${education.location}) with a CGPA of ${education.cgpa}.\n\nHis academic curriculum focuses on core computer systems, algorithms, machine learning, and software engineering.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 3. RoomNexa Experience
  if (
    containsAny(query, tokens, ['roomnexa', 'internship', 'company', 'work experience', 'job']) ||
    (query.includes('what') && query.includes('do') && query.includes('roomnexa'))
  ) {
    const bullets = roomnexa.contributions.map((c) => `• ${c}`).join('\n');
    return {
      content: `At RoomNexa (${roomnexa.period}, ${roomnexa.role}), Mohit has made significant engineering and content contributions:\n\n${bullets}\n\nLive Website: ${roomnexa.website}\nOfficial YouTube Channel: ${roomnexa.youtube}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 4. IBM watsonx Granite Foundation Model (Specific intent before general projects)
  if (
    containsAny(query, tokens, ['granite', 'watsonx', 'ibm']) ||
    (query.includes('foundation') && query.includes('model'))
  ) {
    return {
      content: `In his MindCare AI X platform, Mohit integrated IBM watsonx Granite foundation models for safe, context-aware conversational wellness coaching.\n\nKey watsonx Granite integrations:\n• Empathetic tone alignment and conversational reflection\n• Contextual grounding using historical user journals and mood signals to eliminate clinical hallucinations\n• Strict structured JSON prompt constraints for actionable micro-coaching interventions.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 5. Personalization Mechanism in MindCare AI X
  if (
    containsAny(query, tokens, ['personalization', 'personalize', 'personalized', 'emotion intelligence']) ||
    (query.includes('how') && query.includes('personalization')) ||
    (query.includes('how') && query.includes('work') && (query.includes('mindcare') || query.includes('wellness')))
  ) {
    const p1 = projects[0];
    return {
      content: `${p1.personalizationDetails}\n\nValidation: The platform features 115+ backend unit/integration tests and complete Playwright E2E test coverage.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 6. MindCare AI X Platform
  if (
    containsAny(query, tokens, ['mindcare', 'wellness', 'mental health', 'mental wellness']) ||
    (query.includes('project') && query.includes('1')) ||
    (query.includes('first') && query.includes('project'))
  ) {
    const p1 = projects[0];
    const facts = p1.facts.map((f) => `• ${f}`).join('\n');
    return {
      content: `MindCare AI X is an AI-powered mental wellness platform built with Next.js, FastAPI, MongoDB, and IBM watsonx Granite.\n\nCore Highlights:\n${facts}\n\nPersonalization: Multi-stage context injection incorporating user check-ins, mood telemetry, and historical journals to produce grounded, non-hallucinatory reflections.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 7. Hyperspectral Imaging (HSI) & Brain Tumor Research
  if (
    containsAny(query, tokens, [
      'hyperspectral',
      'hsi',
      'tumor',
      'brain',
      'sipar',
      'bit-sipar',
      'queds',
      'spectral',
      'segmentation',
      'bands'
    ]) ||
    (query.includes('tell') && query.includes('research')) ||
    (query.includes('what') && query.includes('research'))
  ) {
    const stepSummary = research.pipelineSteps
      .map((s) => `${s.step} ${s.name}: ${s.desc}`)
      .join('\n');
    return {
      content: `Mohit is a Research Intern at BIT-SIPAR 2026 (${research.organization}), researching medical hyperspectral image (HSI) analysis for brain tumor and tissue segmentation.\n\nResearch Pipeline:\n${stepSummary}\n\nArchitectures Benchmarked: ${research.benchmarks}.\nSpectral Reduction: ${research.spectralReduction}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 8. Deep Learning & Machine Learning Models Used
  if (
    (containsAny(query, tokens, ['model', 'models', 'architecture', 'architectures', 'backbone', 'backbones', 'classifier', 'classifiers']) &&
      (query.includes('used') || query.includes('has') || query.includes('what') || query.includes('which'))) ||
    containsAny(query, tokens, ['unet', 'u-net', 'linknet', 'fpn', 'resnet', 'resnet34', 'resnet50', 'random forest'])
  ) {
    return {
      content: `Mohit has hands-on experience designing and benchmarking several AI & deep learning architectures:\n\n1. Deep Semantic Segmentation (Hyperspectral Brain Tumor Research):\n   • U-Net: Encoder-decoder with symmetric skip connections preserving fine spatial margins\n   • LinkNet: Summation-based lightweight decoder optimized for low-latency intraoperative navigation\n   • FPN (Feature Pyramid Network): Multi-scale lateral connections for micro-tumoral nest detection\n   • Residual Backbones: ResNet34 and ResNet50 for deep hierarchical feature extraction\n\n2. Foundation & Generative Models:\n   • IBM watsonx Granite: Context-aware conversational mental wellness coaching\n\n3. Classical Machine Learning:\n   • Random Forest: Ensemble decision trees for clinical symptom prediction in AI Health Assistant.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 9. Prompt Engineering Work & Methodologies
  if (
    containsAny(query, tokens, ['prompt', 'prompts', 'prompt engineering']) ||
    (query.includes('few shot') || query.includes('structured output') || query.includes('guardrail'))
  ) {
    const techniques = skills.promptEngineering.techniques.map((t) => `• ${t}`).join('\n');
    const useCases = skills.promptEngineering.useCases.map((u) => `• ${u}`).join('\n');
    return {
      content: `Mohit applies rigorous prompt engineering methodologies across both software and content creation:\n\nCore Techniques:\n${techniques}\n\nApplied Implementations:\n${useCases}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 10. LLM & GenAI Experience
  if (
    containsAny(query, tokens, ['llm', 'genai', 'generative ai', 'foundation model']) ||
    (query.includes('large language') && query.includes('model'))
  ) {
    const integrations = skills.llmExperience.integrations.map((i) => `• ${i}`).join('\n');
    return {
      content: `Mohit works actively with LLMs and Generative AI systems:\n\nPrimary Foundation Model: ${skills.llmExperience.model}\n\nExperience Highlights:\n${integrations}\n\nApproach: He focuses on context injection, deterministic schemas, and negative constraints to make foundation models reliable, verifiable, and zero-hallucination in production.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 11. All Projects Overview
  if (
    (containsAny(query, tokens, ['project', 'projects', 'portfolio', 'built', 'work']) &&
      (query.includes('what') || query.includes('tell') || query.includes('list') || query.includes('which') || query.includes('all'))) ||
    query === 'projects' ||
    query === 'what projects has he built'
  ) {
    const projectList = projects
      .map((p, idx) => `0${idx + 1}. ${p.title} (${p.subtitle})\n   Stack: ${p.tags.join(', ')}\n   Summary: ${p.summary}`)
      .join('\n\n');
    return {
      content: `Mohit has built three primary projects and research initiatives:\n\n${projectList}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 12. AI Health Assistant Specifically
  if (
    containsAny(query, tokens, ['health assistant', 'disease', 'prediction', 'random forest', 'streamlit'])
  ) {
    const p3 = projects[2];
    const facts = p3.facts.map((f) => `• ${f}`).join('\n');
    return {
      content: `The AI Health Assistant is a clinical decision-support application built with Python, Scikit-learn, and Streamlit.\n\nHighlights:\n${facts}\n\nIt features an interactive real-time Streamlit web interface enabling clinicians to adjust patient indicators and observe ensemble decision tree predictions.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 13. Technologies, Tech Stack, & Skills
  if (
    containsAny(query, tokens, ['tech', 'technology', 'technologies', 'stack', 'languages', 'skills', 'tools', 'framework', 'frameworks']) ||
    (query.includes('what') && (query.includes('use') || query.includes('know')))
  ) {
    return {
      content: `Mohit's technical toolkit includes:\n\n• Languages: ${skills.languages.join(', ')}\n• AI & Machine Learning: ${skills.aiml.join(', ')}\n• Generative AI & LLMs: ${skills.genai.join(', ')}\n• Web & Backend: ${skills.web.join(', ')}\n• Databases: ${skills.database.join(', ')}\n• Tools & Workflows: ${skills.tools.join(', ')}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 14. Contact, Hiring, Socials
  if (
    containsAny(query, tokens, ['contact', 'email', 'reach', 'hire', 'linkedin', 'github', 'connect', 'phone', 'message']) ||
    (query.includes('how') && query.includes('contact'))
  ) {
    return {
      content: `You can reach out to Mohit directly through:\n\n• Email: ${contact.email}\n• LinkedIn: ${contact.linkedin}\n• GitHub: ${contact.github}\n• RoomNexa: ${contact.roomnexa}\n• YouTube: ${contact.roomnexaYoutube}\n• Location: ${contact.location}\n\nStatus: ${profile.availability}.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // 15. General "Who is Mohit" / Bio
  if (
    containsAny(query, tokens, ['who', 'mohit', 'about', 'bio', 'intro', 'introduction', 'background']) ||
    query === 'who is mohit' ||
    query === 'who is mohit kumar mahto'
  ) {
    return {
      content: `${profile.name} is an ${education.status} in ${education.degree} at ${education.institution} (CGPA: ${education.cgpa}), based in ${profile.location}.\n\nHe works across three core disciplines:\n1. Frontend & Software Builder: Designing responsive, accessible web interfaces (RoomNexa frontend, modern React)\n2. Deep Learning Researcher: Investigating hyperspectral brain tumor image segmentation at BIT-SIPAR 2026\n3. AI / GenAI Engineer: Designing structured prompt architectures and integrating IBM watsonx Granite LLMs (MindCare AI X)\n\nHe is currently ${profile.availability.toLowerCase()}.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'DEMO'
    };
  }

  // Strict Fallback for questions outside portfolio knowledge (no hallucination)
  return {
    content: "I don't have that information in Mohit's portfolio yet.",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    mode: 'DEMO'
  };
};
