/**
 * Lightweight Context Selector
 * Dynamically selects relevant context blocks from src/data/profile.js
 * based on user query and recent conversation history.
 * Keeps token payload lean while ensuring Llama has complete factual grounding.
 */

import {
  profile,
  education,
  roomnexa,
  research,
  projects,
  skills,
  contact
} from '../../src/data/profile.js';

function normalize(text) {
  if (!text || typeof text !== 'string') return '';
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').trim();
}

/**
 * Selects relevant portfolio sections based on message content and conversation history.
 *
 * @param {string} userMessage - Current query
 * @param {Array<{ role: string, content: string }>} history - Recent chat history
 * @returns {string} Formatted context string
 */
export function selectContext(userMessage = '', history = []) {
  const combinedText = [
    userMessage,
    ...history.slice(-3).map((m) => m.content || '')
  ].join(' ');

  const q = normalize(combinedText);
  const selectedBlocks = [];

  // Always include Core Identity & Education
  selectedBlocks.push(`[PROFILE & EDUCATION]
Name: ${profile.name}
Role / Positioning: ${profile.role}
Headline: ${profile.headline}
Status: ${education.status}
Degree: ${education.degree}
Institution: ${education.institution} (${education.location})
CGPA: ${education.cgpa}
Availability: ${profile.availability}
Location: ${profile.location}`);

  // 1. RoomNexa Context
  const isRoomNexa =
    q.includes('roomnexa') ||
    q.includes('internship') ||
    q.includes('company') ||
    q.includes('job') ||
    q.includes('work experience') ||
    (q.includes('what') && q.includes('do'));

  // Video production specific triggers
  const isRoomNexaVideo =
    q.includes('video') ||
    q.includes('tutorial') ||
    q.includes('avatar') ||
    q.includes('motion graphic') ||
    q.includes('compositing') ||
    q.includes('html css') ||
    q.includes('html/css') ||
    q.includes('mp4') ||
    q.includes('animation') ||
    q.includes('render') ||
    q.includes('editing') ||
    q.includes('production workflow') ||
    q.includes('ai content') ||
    q.includes('reels') ||
    q.includes('youtube') ||
    q.includes('how long') ||
    q.includes('duration') ||
    q.includes('minutes') ||
    q.includes('scripts') ||
    q.includes('scene');

  if (isRoomNexa || isRoomNexaVideo) {
    selectedBlocks.push(`[EXPERIENCE: ROOMNEXA]
Company: ${roomnexa.company}
Role: ${roomnexa.role}
Period: ${roomnexa.period} (${roomnexa.location})
Website: ${roomnexa.website}
YouTube: ${roomnexa.youtube}
Responsibilities & Contributions:
${roomnexa.contributions.map((c) => `- ${c}`).join('\n')}
Summary: ${roomnexa.responsibilitiesSummary}`);
  }

  if (isRoomNexaVideo && roomnexa.videoProduction) {
    const vp = roomnexa.videoProduction;
    selectedBlocks.push(`[ROOMNEXA VIDEO PRODUCTION DETAILS]
Summary: ${vp.summary}
Average Duration: ${vp.avgDuration}
Production Pipeline: ${vp.pipeline.join(' → ')}
Full Workflow:
${vp.workflow.map((w) => `- ${w}`).join('\n')}
Tools & Techniques: ${vp.tools.join(', ')}

IMPORTANT: This was a complete structured production workflow, not simply "making reels" or "creating AI videos".
The workflow involved: Prompt Engineering → AI Avatar Generation → AI-Assisted Content Generation → Video Editing → Motion Graphics → HTML/CSS Animation → HTML/CSS→MP4 Rendering → Final Video Compositing.`);
  }

  // 2. MindCare AI X & IBM watsonx Granite & Personalization Context
  const isMindCare =
    q.includes('mindcare') ||
    q.includes('wellness') ||
    q.includes('mental health') ||
    q.includes('granite') ||
    q.includes('watsonx') ||
    q.includes('personalization') ||
    q.includes('personalize') ||
    q.includes('emotion intelligence') ||
    q.includes('llm') ||
    q.includes('foundation model');

  if (isMindCare) {
    const p1 = projects[0];
    selectedBlocks.push(`[PROJECT: MINDCARE AI X]
Title: ${p1.title} (${p1.subtitle})
Tech Stack: ${p1.tags.join(', ')}
Summary: ${p1.summary}
Key Engineering Facts:
${p1.facts.map((f) => `- ${f}`).join('\n')}
Personalization Mechanism:
${p1.personalizationDetails}
Processing Flow:
${p1.flow.map((s) => `${s.step} ${s.node}: ${s.desc}`).join('\n')}
Metrics: ${p1.metrics.map((m) => `${m.label}: ${m.val}`).join(' | ')}`);
  }

  // 3. Hyperspectral Imaging & BIT-SIPAR Research Context
  const isResearch =
    q.includes('research') ||
    q.includes('hyperspectral') ||
    q.includes('hsi') ||
    q.includes('tumor') ||
    q.includes('brain') ||
    q.includes('sipar') ||
    q.includes('bit sipar') ||
    q.includes('queds') ||
    q.includes('segmentation') ||
    q.includes('spectral') ||
    q.includes('bands') ||
    q.includes('model') ||
    q.includes('models') ||
    q.includes('unet') ||
    q.includes('linknet') ||
    q.includes('fpn') ||
    q.includes('resnet');

  if (isResearch) {
    selectedBlocks.push(`[RESEARCH: MEDICAL HYPERSPECTRAL IMAGE ANALYSIS]
Initiative: ${research.initiative} (${research.organization})
Role: ${research.role} (${research.period})
Focus: ${research.focus}
Spectral Reduction: ${research.spectralReduction}
Deep Learning Models Benchmarked: ${research.benchmarks}
Model Architecture Roles:
${research.models.map((m) => `- ${m.name} (${m.backbone}): ${m.role}`).join('\n')}
Research Pipeline Steps:
${research.pipelineSteps.map((s) => `${s.step} ${s.name}: ${s.desc}`).join('\n')}`);
  }

  // 4. AI Health Assistant Context
  const isHealthAssistant =
    q.includes('health') ||
    q.includes('assistant') ||
    q.includes('disease') ||
    q.includes('prediction') ||
    q.includes('random forest') ||
    q.includes('streamlit');

  if (isHealthAssistant) {
    const p3 = projects[2];
    selectedBlocks.push(`[PROJECT: AI HEALTH ASSISTANT]
Title: ${p3.title} (${p3.subtitle})
Tech Stack: ${p3.tags.join(', ')}
Summary: ${p3.summary}
Key Facts:
${p3.facts.map((f) => `- ${f}`).join('\n')}`);
  }

  // 5. Skills & Prompt Engineering & Tech Stack Context
  const isSkills =
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('technology') ||
    q.includes('technologies') ||
    q.includes('stack') ||
    q.includes('languages') ||
    q.includes('tools') ||
    q.includes('framework') ||
    q.includes('prompt') ||
    q.includes('prompt engineering') ||
    q.includes('cursor') ||
    q.includes('what technologies');

  if (isSkills) {
    selectedBlocks.push(`[TECHNICAL SKILLS & TOOLKIT]
Programming Languages: ${skills.languages.join(', ')}
AI & Machine Learning: ${skills.aiml.join(', ')}
Generative AI & LLMs: ${skills.genai.join(', ')}
Web & Backend Development: ${skills.web.join(', ')}
Databases: ${skills.database.join(', ')}
Tools & Platforms: ${skills.tools.join(', ')}
Prompt Engineering Techniques:
${skills.promptEngineering.techniques.map((t) => `- ${t}`).join('\n')}
Prompt Engineering Applications:
${skills.promptEngineering.useCases.map((u) => `- ${u}`).join('\n')}
LLM Experience:
- Foundation Model: ${skills.llmExperience.model}
${skills.llmExperience.integrations.map((i) => `- ${i}`).join('\n')}`);
  }

  // 6. Contact Information Context
  const isContact =
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('reach') ||
    q.includes('hire') ||
    q.includes('linkedin') ||
    q.includes('github') ||
    q.includes('connect');

  if (isContact) {
    selectedBlocks.push(`[CONTACT & PROFILES]
Email: ${contact.email}
LinkedIn: ${contact.linkedin}
GitHub: ${contact.github}
RoomNexa: ${contact.roomnexa}
YouTube: ${contact.roomnexaYoutube}
Location: ${contact.location}`);
  }

  // 7. General Projects Overview
  const isGeneralProjects =
    q.includes('project') ||
    q.includes('projects') ||
    q.includes('built') ||
    q.includes('portfolio') ||
    q.includes('work');

  if (isGeneralProjects && !isMindCare && !isResearch && !isHealthAssistant) {
    selectedBlocks.push(`[PROJECTS OVERVIEW]
1. ${projects[0].title}: ${projects[0].summary} (Stack: ${projects[0].tags.join(', ')})
2. ${projects[1].title}: ${projects[1].summary} (Stack: ${projects[1].tags.join(', ')})
3. ${projects[2].title}: ${projects[2].summary} (Stack: ${projects[2].tags.join(', ')})`);
  }

  // If query is broad / general inquiry about Mohit, include a summary of all domains
  if (selectedBlocks.length === 1) {
    selectedBlocks.push(`[KEY BACKGROUND HIGHLIGHTS]
- Student at BIT Mesra (CGPA 7.37, B.Tech CSE).
- Experience at RoomNexa (${roomnexa.role}): Website frontend, UI design, Cursor workflows, prompt engineering, YouTube tutorials.
- Research at BIT-SIPAR 2026: Hyperspectral brain tumor segmentation (826 to 139 bands, U-Net, LinkNet, FPN, ResNet34/50).
- Flagship Project MindCare AI X: Mental wellness platform with IBM watsonx Granite, contextual personalization, 115+ tests.
- Contact: ${contact.email} | LinkedIn: ${contact.linkedin} | GitHub: ${contact.github}`);
  }

  return selectedBlocks.join('\n\n');
}
