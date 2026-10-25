// ─────────────────────────────────────────────────────────────
//  SITE DETAILS — edit this file to change your name, links,
//  experience, skills and contact details across the whole site.
//
//  Anything wrapped in [[double brackets]] is a PLACEHOLDER.
//  It shows up on the site with a highlighted "to-do" style so you
//  can spot it. Replace the whole thing, brackets included.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Prateek Srivastav',
  shortName: 'Prateek',
  role: 'Senior UI/UX & Product Designer',
  location: 'Gurugram, India',
  email: 'prateek04srivastav@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prateek-srivastav-609699331/',
  behance: 'https://www.behance.net/prateeksrivast22',
  // Put your resume PDF at public/resume/Prateek-Srivastav-Resume.pdf
  // and set this to '/resume/Prateek-Srivastav-Resume.pdf'.
  // While it is empty, the resume button shows as "coming soon".
  resume: '/resume/Prateek-Srivastav-Resume.pdf',
  availability: 'Open to Senior Product Design roles',

  seo: {
    title: 'Prateek Srivastav — Senior UI/UX & Product Designer',
    description:
      'Senior UI/UX and Product Designer specialising in enterprise SaaS, AI-powered products, complex workflows, data-heavy dashboards and scalable design systems.',
    ogImage: '/og-image.png',
  },
};

export const hero = {
  eyebrow: 'Senior UI/UX & Product Designer',
  // The headline is split into lines; *word* = italic serif. The rotating words cycle in the last line.
  lines: ['Designing *clarity*', 'for complex'],
  rotating: ['enterprise SaaS.', 'AI-powered products.', 'data-heavy dashboards.', 'design systems.'],
  intro:
    'I turn dense business requirements and data-intensive workflows into interfaces people can understand, trust and act on — bridging user-centred design with technical feasibility.',
  stats: [
    { value: '4+', label: 'Years in UI/UX & product design' },
    { value: '02', label: 'Product teams — Nexyom & CBRE' },
  ],
};

export const experience = [
  {
    company: 'Nexyom Pvt. Ltd.',
    role: 'Senior UI/UX Designer',
    period: 'July 2026 — Present',
    summary:
      'Leading end-to-end UX for an AI-powered enterprise analytics platform, transforming complex business requirements into intuitive, scalable, user-centred experiences.',
    points: [
      'Designed complex enterprise workflows across Integration Hub, Data Normalization, CMDB Correlation, Vulnerability Management and AI-powered dashboards.',
      'Established a scalable design system — reusable components, design tokens, typography and interaction patterns — to keep products consistent and speed up design-to-development.',
      'Created user journeys, wireframes, high-fidelity interfaces and interactive prototypes, applying information architecture and usability best practices to data-intensive experiences.',
      'Partnered with cross-functional teams and stakeholders to translate product requirements into design solutions, iterate on feedback and ensure smooth developer handoff.',
    ],
    tags: ['Enterprise SaaS', 'AI products', 'Design systems', 'Data-heavy UX'],
  },
  {
    company: 'Freelance & Independent Practice',
    role: 'UI/UX Designer & Motion Designer',
    period: 'July 2024 — June 2026',
    summary:
      'Explored and delivered design work across multiple industries — hospitality, management platforms, dashboards and motion graphics — solving real-world problems and deepening expertise across disciplines.',
    points: [
      'Designed end-to-end digital experiences for the hotel and hospitality industry, including booking flows, guest-facing interfaces and management dashboards.',
      'Worked on enterprise and management platform UI — complex workflows, data organisation and multi-role dashboards.',
      'Produced multiple motion graphics videos, developing a strong command of animation, timing and visual storytelling.',
      'Applied and refined diverse design approaches — from research and wireframing to high-fidelity UI — across real client and self-initiated projects.',
    ],
    tags: ['Hospitality UX', 'Dashboard design', 'Motion graphics', 'Freelance'],
  },

  {
    company: 'CBRE Pvt. Ltd.',
    role: 'UI/UX Designer',
    period: 'August 2021 — June 2024',
    summary:
      'Designed mobile application screens for property inspectors through UX research and iterative design, improving usability and task completion.',
    points: [
      'Ran user interviews, A/B tests and heuristic evaluations to optimise the mobile app for property inspectors.',
      'Used Google Analytics, Hotjar and Mixpanel to track behaviour, contributing to a 20% improvement in task completion time.',
      'Produced wireframes, mockups and interactive prototypes in Figma, Sketch and Adobe XD.',
      'Worked with developers in Agile/Scrum, applying Design Thinking to iterate rapidly.',
    ],
    tags: ['Mobile', 'Field operations', 'UX research', 'Analytics'],
  },
];

export const process = [
  {
    title: 'Research',
    seenIn: [{ label: 'CBRE inspector app', href: '#experience' }],
    text: 'Stakeholder conversations, user interviews, analytics and heuristic reviews to understand who the users are and where today’s workflow breaks.',
  },
  {
    title: 'Problem framing',
    seenIn: [{ label: 'Nexora.ai', href: '/work/nexora-ai' }, { label: 'ReverseLogix', href: '/work/reverselogix' }],
    text: 'Turning requirements into clear problem statements, success criteria and constraints — so the team agrees on what we are solving before how.',
  },
  {
    title: 'Information architecture',
    seenIn: [{ label: 'Nexora.ai', href: '/work/nexora-ai' }, { label: 'Road Pilot Driver', href: '/work/road-pilot-driver' }],
    text: 'Structuring dense data, entities and navigation so complex products feel predictable, scannable and easy to find your way around.',
  },
  {
    title: 'User flows',
    seenIn: [{ label: 'Nexora.ai', href: '/work/nexora-ai' }, { label: 'ReverseLogix', href: '/work/reverselogix' }],
    text: 'Mapping end-to-end journeys, decision points, edge cases and empty, loading and error states before pixels.',
  },
  {
    title: 'Prototyping',
    seenIn: [{ label: 'Nexora.ai', href: '/work/nexora-ai' }, { label: 'ReverseLogix', href: '/work/reverselogix' }],
    text: 'From low-fidelity wireframes to interactive high-fidelity prototypes that let stakeholders and developers feel the experience early.',
  },
  {
    title: 'Usability',
    seenIn: [{ label: 'CBRE inspector app', href: '#experience' }],
    text: 'Validating with users and reviews, checking accessibility and contrast, and iterating on what slows people down.',
  },
  {
    title: 'Design systems',
    seenIn: [{ label: 'Nexora.ai', href: '/work/nexora-ai' }],
    text: 'Tokens, reusable components and interaction patterns documented for developers — consistency that scales across products.',
  },
];

export const aiWorkflow = {
  intro:
    'I use AI as a thinking partner, not a shortcut — to pressure-test screen flows, structure information logically and keep the end result simple for real users. Every output is reviewed and shaped by design judgement.',
  items: [
    { name: 'Claude', icon: '/images/ai/claude.svg' },
    { name: 'ChatGPT', icon: '/images/ai/chatgpt.svg' },
    { name: 'Figma Make', icon: '/images/ai/figma-make.svg' },
    { name: 'Gemini', icon: '/images/ai/gemini.svg' },
    { name: 'Canva', icon: '/images/ai/canva.svg' },
  ],
};

export const about = {
  intro:
    'I’m Prateek, a Senior UI/UX and Product Designer who enjoys the hard problems: enterprise platforms, AI-driven analytics and workflows with lots of data and lots of edge cases.',
  body: [
    'My coding background (HTML, CSS, React) helps me design with technical feasibility in mind and speak the same language as engineering teams — which makes handoff faster and the shipped product closer to the design.',
    'On complex products I start with the workflow, not the screen: who does what, in which order, with which data, and where it breaks. I then structure the information and flows before visual design, and work closely with product managers and engineers — sharing flows, interaction states and component specs so what ships matches what was designed.',
    'Outside product work I explore motion design and dynamic animation, which shapes how I think about feedback, transitions and clarity in interfaces.',
  ],
  skills: [
    {
      group: 'Product & UX',
      items: ['User research & interviews', 'Heuristic evaluation', 'A/B testing', 'Information architecture', 'User journeys & flows', 'Wireframing & prototyping'],
    },
    {
      group: 'Systems & delivery',
      items: ['Design systems & tokens', 'Component libraries', 'Developer handoff', 'Agile / Scrum', 'Design Thinking'],
    },
    {
      group: 'Tools',
      items: ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'After Effects', 'Premiere Pro', 'Illustrator', 'Google Analytics', 'Hotjar', 'Mixpanel'],
    },
    {
      group: 'Code',
      items: ['HTML & CSS', 'React', 'Java'],
    },
  ],
};
