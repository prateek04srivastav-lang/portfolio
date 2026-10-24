// ─────────────────────────────────────────────────────────────
//  PROJECTS & CASE STUDIES
//
//  Each project below becomes:
//    • a card in "Selected Work" on the homepage
//    • its own case-study page at /work/<slug>
//
//  HOW TO EDIT
//  • Text in [[double brackets]] is a placeholder — replace it,
//    brackets included. Placeholders are highlighted on the site.
//  • Images: put files in public/images/work/<slug>/ and set
//    `src: '/images/work/<slug>/your-file.jpg'`. While `src` is
//    empty, a labelled placeholder box is shown instead.
//  • Delete a whole section (e.g. `designSystem`) if it does
//    not apply — the page simply skips it.
//  • Only add numbers/results you can verify.
// ─────────────────────────────────────────────────────────────

export type Media = {
  src?: string;
  alt: string;
  /** What to put here — shown inside the placeholder box while `src` is empty. */
  hint?: string;
  caption?: string;
  /** Width / height, e.g. '16/10'. */
  ratio?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  context: string;
  year: string;
  accent: 'lime' | 'orange' | 'sand';
  cover: Media;
  overview: string;
  role: string;
  responsibilities: string[];
  scope: string[];
  team: string;
  timeline: string;
  tools: string[];
  /** `challenges` and `goals` are optional lists shown under the business context. */
  problem: { statement: string; context: string; challenges?: string[]; goals?: string[] };
  users: { who: string; needs: string[]; challenges: string[] };
  flows: { journey: string; ia: string; keyFlows: { title: string; text: string }[]; media?: Media[] };
  wireframes?: Media[];
  screens: Media[];
  decisions: { title: string; rationale: string }[];
  designSystem?: { text: string; components: string[]; media?: Media[] };
  collaboration: string[];
  outcomes: { measured: boolean; items: string[] };
  links?: { label: string; url: string }[];
};

const FIGMA_FILE = 'https://www.figma.com/design/7w5303PYVhjzv5S7q1LS2H/Design-Assessment';

export const projects: Project[] = [
  // ───────────────────────── PROV.AI ─────────────────────────
  {
    slug: 'nexora-ai',
    title: 'Nexora.ai',
    tagline: 'An AI-powered data analytics platform that helps teams turn complex data into trusted, actionable insights.',
    category: 'Enterprise AI · SaaS',
    context: 'Enterprise Data Analytics Platform',
    year: '2026',
    accent: 'lime',
    cover: {
      src: '/images/work/nexora-ai/cover.png',
      alt: 'Nexora.ai home dashboard showing workspace navigation, metric tiles for queries, connectors, data sources and team members, recent activity feed, pinned chart artifacts, and saved dashboards',
      ratio: '1487/1058',
    },
    overview:
      'Nexora.ai is an AI-powered enterprise data analytics platform that simplifies database connectivity, data governance, quality assessment, and AI-driven insights.',
    role: 'Senior UI/UX Designer',
    responsibilities: [
      'End-to-end UX/UI design',
      'Information architecture and user flows',
      'Wireframes, high-fidelity UI, and interactive prototypes',
      'Dashboard and data visualization design',
    ],
    scope: [
      'Platform: Enterprise web application',
      'Modules: Chat, Dashboards, Artifacts, Data Connectors, Profiling & Quality',
      'Phase: Product enhancement and new feature design',
    ],
    team: '[[e.g. 1 designer, 1 PM, 4 engineers, data science team]]',
    timeline: '3 months',
    tools: ['Figma', 'Claude Design', 'Antigravity'],
    problem: {
      statement:
        'Users need a simpler way to connect databases, assess data quality, identify sensitive information, and generate actionable insights without navigating complex technical workflows.',
      context: 'Nexora.ai centralizes AI-powered analytics, data governance, visualization, and reporting in one workspace.',
      challenges: [
        'Complex database onboarding',
        'PII classification',
        'Data quality visibility',
        'Dashboard customization',
        'Role-based access',
      ],
      goals: [
        'Simplify workflows',
        'Improve usability',
        'Enable independent dashboard creation',
        'Make AI-powered data analysis accessible',
      ],
    },
    users: {
      who: 'Data analysts, data engineers, data stewards, business users, and platform administrators.',
      needs: [
        'Connect databases and discover relevant data easily.',
        'Identify data quality issues and sensitive PII columns.',
        'Generate insights and customize dashboards without complex workflows.',
      ],
      challenges: [
        'Multi-step database onboarding and schema selection.',
        'Limited visibility into data quality and sensitive information.',
        'Dependency on Chat to create and modify dashboard visualizations.',
      ],
    },
    flows: {
      journey: 'Connect a data source → Select schemas and tables → Review data dictionary → Classify sensitive columns → Profile data quality → Generate insights → Create dashboards → Export and share results.',
      ia: 'Platform organized into Chat, Dashboards, Artifacts, Data Connectors, Profiling & Quality, Knowledge, and Settings.',
      keyFlows: [
        { title: 'Database onboarding', text: 'Simplify database selection, connection configuration, schema discovery, and validation.' },
        { title: 'Profiling & data governance', text: 'Help users review quality findings, classify PII, and validate sensitive data.' },
        { title: 'Dashboard creation', text: 'Enable users to create dashboards, add widgets, edit visualizations, and save changes directly within the dashboard builder.' },
      ],
      media: [{ src: '/images/work/nexora-ai/user-journey.png', alt: 'Nexora.ai user journey diagram showing 8 steps from connecting a data source to exporting results, with AI assist touchpoints at schema discovery, PII classification, and insight generation', ratio: '16/9' }],
    },
    wireframes: [
      { src: '/images/work/nexora-ai/wireframes-1.png', alt: 'Low-fidelity wireframes: Home Dashboard and Data Connector connection flow side by side', ratio: '3/2' },
      { src: '/images/work/nexora-ai/wireframes-2.png', alt: 'Low-fidelity wireframes: Home Dashboard, Data Connector, Profiling & Data Quality, Chat with AI, and Dashboard Builder', ratio: '3/2' },
    ],
    screens: [
      { src: '/images/work/nexora-ai/screen-1.png', alt: 'Nexora.ai Chat screen — AI-powered data assistant showing suggested prompts, selected data context panel, and a revenue by region bar chart response', ratio: '1672/941' },
      { src: '/images/work/nexora-ai/screen-2.png', alt: 'Nexora.ai Chat screen — continued conversation view with AI-generated insight and data visualization', ratio: '1672/941' },
      { src: '/images/work/nexora-ai/screen-3.png', alt: 'Nexora.ai Chat screen — additional state showing AI chat interface with data exploration prompts', ratio: '1672/941' },
    ],
    decisions: [
      { title: 'Keep database types fixed during connection editing', rationale: 'Protect connection integrity and prevent accidental source changes mid-workflow.' },
      { title: 'Use clear Sensitive / Not Sensitive toggles for PII classification', rationale: 'Make data governance easier to review and act on without navigating away.' },
      { title: 'Enable dashboard creation and widget editing directly in Dashboards', rationale: 'Reduce dependency on Chat and eliminate unnecessary navigation for a common task.' },
    ],
    designSystem: {
      text: 'Created or refined reusable components for navigation, stepper workflows, database selection, status badges, PII toggles, dashboard widgets, artifact previews, and approval indicators. Design principles: consistency, clarity, accessibility, and efficient workflows.',
      components: ['Navigation', 'Stepper workflows', 'Database selection', 'Status badges', 'PII toggles', 'Dashboard widgets', 'Artifact previews', 'Approval indicators'],
    },
    collaboration: [
      'Collaborated with product managers, frontend developers, backend engineers, and data teams.',
      'Shared user flows, screen designs, interaction states, annotations, and component specifications for implementation.',
    ],
    outcomes: {
      measured: false,
      items: [
        'Usability: make complex data workflows easier to understand and complete.',
        'Efficiency: reduce unnecessary navigation and simplify dashboard customization.',
        'Governance: improve visibility of sensitive data and pending human approvals.',
        'Consistency: establish reusable patterns across platform modules.',
      ],
    },
  },

  // ─────────────────────── REVERSELOGIX ───────────────────────
  {
    slug: 'reverselogix',
    title: 'ReverseLogix',
    tagline: 'An AI-assisted returns workflow that makes return status, refunds and timelines clear.',
    category: 'Returns management · AI workflow',
    context: 'Return management platform',
    year: 'March 2026',
    accent: 'sand',
    cover: {
      src: '/images/work/reverselogix/cover.png',
      alt: 'ReverseLogix Return Status Dashboard showing a 5-step progress tracker, package tracking timeline, return details with product image, and refund status panel',
      ratio: '2880/2048',
    },
    overview:
      'ReverseLogix is a returns management platform with an AI-powered assistant that guides customers through a clear, step-by-step return flow — from order lookup to refund confirmation — while giving them real-time visibility into every stage of the process.',
    role: 'UI/UX Designer (end-to-end)',
    responsibilities: [
      'End-to-end UX and UI design',
      'User flows and information architecture',
      'Wireframes and high-fidelity screens',
      'AI assistant integration in the return workflow',
    ],
    scope: [
      'Platform: Responsive web application',
      'Modules: Start Return wizard, Return Status Dashboard, AI Insights, Help Center',
      'Phase: End-to-end concept design',
    ],
    team: '[[Solo / team]]',
    timeline: '1 month',
    tools: ['Figma'],
    problem: {
      statement:
        'Customers don\'t know where their return is, when the refund will arrive or what to do next — which drives avoidable support contact and erodes trust.',
      context: 'Return processes are often fragmented: initiation, tracking and refund status live in separate places with no clear guidance. An AI assistant embedded in the workflow can answer common questions, validate eligibility and reduce support load.',
      challenges: [
        'Multi-step return initiation with no clear progress indicator',
        'No real-time visibility into return status or refund timeline',
        'Users can\'t see refund amounts or expected dates upfront',
        'High dependency on customer support for basic status queries',
      ],
      goals: [
        'Make starting a return simple and guided with a step-by-step wizard',
        'Show real-time return status and refund information in one place',
        'Embed an AI assistant to handle common queries without support',
        'Build customer trust through transparency at every stage',
      ],
    },
    users: {
      who: 'Online shoppers initiating and tracking product returns.',
      needs: [
        'Start a return quickly without confusion',
        'Know the real-time status of their return',
        'Understand refund amounts and when they\'ll receive them',
      ],
      challenges: [
        'Multi-step process with no clear guidance or progress indicator',
        'No transparency on refund amounts or expected timelines',
        'Relying on customer support for simple status questions',
      ],
    },
    flows: {
      journey: 'Login → Find Your Order → Select Items to Return → Choose Reason & Method → Review Return Summary → Confirm → Return Created (tracking number issued) → Track via Return Status Dashboard.',
      ia: 'Platform organised into five sections: Overview, Start Return (5-step wizard), Return Status (progress tracker + package tracking + refund panel), AI Insights, and Help Center.',
      keyFlows: [
        { title: 'Guided return wizard', text: 'A 5-step flow — Login, Select Items, Reason & Method, Summary, Confirmation — with a persistent stepper and Save Draft support.' },
        { title: 'Return Status Dashboard', text: 'Progress tracker, live package tracking timeline, return details, and refund status consolidated in one view.' },
        { title: 'AI Return Bot', text: 'Embedded assistant answers eligibility questions, guides next steps, and surfaces AI Insights — reducing support dependency.' },
      ],
    },
    wireframes: [
      { src: '/images/work/reverselogix/wireframe-1.png', alt: 'ReverseLogix wireframe — Step 1: Find Your Order screen with Order ID and Email fields, 4-step progress stepper, and AI Return Bot in sidebar', ratio: '1487/1058' },
      { src: '/images/work/reverselogix/wireframe-2.png', alt: 'ReverseLogix wireframe — Step 2: Select Items to Return screen showing product list with checkboxes, prices, and return deadlines', ratio: '1486/1058' },
    ],
    screens: [
      { src: '/images/work/reverselogix/screen-1.png', alt: 'ReverseLogix Step 1 — Find Your Order: Order ID and email fields with 4-step progress stepper and AI Return Bot in sidebar', ratio: '2880/2048' },
      { src: '/images/work/reverselogix/screen-2.png', alt: 'ReverseLogix Step 2 — Select Items to Return: product list with checkboxes, prices, and return deadline badges', ratio: '2880/2048' },
      { src: '/images/work/reverselogix/screen-3.png', alt: 'ReverseLogix Step 3 — Reason & Method: reason for return text field, AI-assisted photo attachment with damage detection, and return method selection panel', ratio: '2880/2048' },
    ],
    decisions: [
      { title: 'Persistent progress stepper across all wizard steps', rationale: 'Users always know how far along they are and what comes next, reducing drop-off on a multi-step flow.' },
      { title: 'Centralise status, details and refund in one dashboard', rationale: 'Keeping all return information in a single view eliminates the need to navigate multiple pages and reduces support contact.' },
      { title: 'Embed AI Bot directly in the sidebar', rationale: 'Positioning the AI assistant persistently in the sidebar means help is available at every step without interrupting the main workflow.' },
    ],
    collaboration: ['End-to-end concept design — user flows, wireframes, high-fidelity UI and prototype created independently in Figma.'],
    outcomes: {
      measured: false,
      items: [
        'Simplify return initiation with a clear, guided 5-step wizard',
        'Give customers real-time visibility into return status and refund timelines',
        'Reduce support dependency through an embedded AI assistant',
        'Build customer trust through transparency at every stage of the process',
      ],
    },
    links: [{ label: 'View in Figma', url: `${FIGMA_FILE}?node-id=1-193` }],
  },

  // ──────────────────────── ROAD PILOT DRIVER ────────────────────────
  {
    slug: 'road-pilot-driver',
    title: 'Road Pilot Driver',
    tagline: 'A mobile app that helps truck drivers manage deliveries, routes and pickups — all in one place.',
    category: 'Mobile · Logistics',
    context: 'For truck drivers',
    year: '2025',
    accent: 'lime',
    cover: {
      src: '/images/work/road-pilot-driver/cover.png',
      alt: 'Road Pilot Driver app showing splash screen and home dashboard with delivery jobs, pickup locations and route details',
      ratio: '4136/2626',
    },
    overview:
      'Road Pilot Driver is a mobile app designed to empower Indian truck drivers by providing a seamless and efficient platform for job discovery, essential services, and financial management — a comprehensive tool to enhance their work experience, financial security, and overall convenience on the road.',
    role: 'UI/UX Designer',
    responsibilities: [
      'End-to-end UX/UI design for a mobile application',
      'User flows, wireframes and high-fidelity screens',
      'Information architecture across all app modules',
      'Applying design principles for clarity, consistency and accessibility',
    ],
    scope: [
      'Platform: Mobile app (iOS)',
      'Modules: Home, Search Job, Salary Track, Profile, KYC & Documents',
      'Phase: End-to-end concept design',
    ],
    team: '[[Solo / team]]',
    timeline: '2 months',
    tools: ['Figma'],
    problem: {
      statement: 'Indian truck drivers lack a unified digital platform to find jobs, track earnings, manage documents and connect with other drivers — forcing them to rely on fragmented, manual processes on the road.',
      context: 'Truck drivers in India face significant challenges with job discovery, financial visibility and document management while operating long-distance routes. A dedicated mobile app can consolidate these needs into one accessible tool.',
      challenges: [
        'No single platform for job discovery and booking management',
        'Limited visibility into earnings and salary tracking',
        'Difficulty managing KYC and documents on the road',
        'Lack of community and support network for long-distance drivers',
      ],
      goals: [
        'Simplify job discovery and booking with a clear home dashboard',
        'Provide financial transparency through salary tracking',
        'Enable KYC and document management on the go',
        'Connect drivers with a community for safer long-distance travel',
      ],
    },
    users: {
      who: 'Indian truck drivers operating long-distance delivery routes.',
      needs: [
        'Find and manage job opportunities easily',
        'Track salary and earnings in one place',
        'Handle KYC documents and essential services on the go',
      ],
      challenges: [
        'Scattered job information across multiple channels',
        'No digital tool for earnings and financial management',
        'Complex document requirements without guided support',
      ],
    },
    flows: {
      journey: 'Driver opens app -> views home dashboard with active bookings and job list -> searches for new jobs -> checks salary and earnings -> manages profile, KYC documents and notifications.',
      ia: 'Four primary sections accessible via bottom navigation: Home (active jobs and booking details), Search Job (job discovery with filters), Salary Track (earnings and financial history), Profile (KYC, documents, community, notifications, settings).',
      keyFlows: [
        { title: 'Job discovery and booking', text: 'Search, filter and book delivery jobs — with pickup location, goods type, weight and schedule visible upfront.' },
        { title: 'Salary and earnings tracking', text: 'View payment history, upcoming earnings and financial records in a dedicated salary tracking module.' },
        { title: 'Profile and KYC management', text: 'Manage documents, KYC verification, notifications and connect with the driver community from one profile screen.' },
      ],
    },
    screens: [
      { src: '/images/work/road-pilot-driver/screen-1.png', alt: 'Road Pilot Driver — Manage Shipments: home screen with active job AUX7624 showing Lucknow to Gurgaon route, owner details and real-time tracking map', ratio: '1672/941' },
      { src: '/images/work/road-pilot-driver/screen-2.png', alt: 'Road Pilot Driver — Shipment Booking & Confirmation: confirm shipment summary with route overview map and shipment booked success state', ratio: '1672/941' },
      { src: '/images/work/road-pilot-driver/screen-3.png', alt: 'Road Pilot Driver — Find the Right Loads Faster: filter jobs screen with route details, distance and earnings sliders, and shipment detail with timeline', ratio: '1672/941' },
    ],
    decisions: [
      { title: 'Visual hierarchy — key actions as focal points', rationale: 'Job cards and primary CTAs are the focal points on each screen, followed by supporting interaction elements, so drivers can act quickly while on the road.' },
      { title: 'Consistency across icons and visual styles', rationale: 'Uniform icons, colors and interaction patterns reduce cognitive load for drivers who may not be frequent smartphone users.' },
      { title: 'Clarity and simplicity over feature density', rationale: 'The interface avoids clutter and presents information through intuitive icons and labels — essential for use in low-attention, mobile environments.' },
    ],
    collaboration: ['End-to-end concept design — user flows, wireframes and high-fidelity UI created independently in Figma.'],
    outcomes: {
      measured: false,
      items: [
        'Empower truck drivers with a unified platform for jobs, earnings and essential services',
        'Simplify job discovery and reduce reliance on informal booking channels',
        'Provide financial transparency through accessible salary tracking',
        'Enable on-the-road KYC and document management',
        'Build a connected driver community for safer long-distance travel',
      ],
    },
    links: [{ label: 'View in Figma', url: 'https://www.figma.com/design/7w5303PYVhjzv5S7q1LS2H/Design-Assessment?node-id=497-881&t=Y1JB8Bz4hJ6RT9oC-1' }],
  },

  // ─────────────────────── CONSCIOUS APP ───────────────────────
  {
    slug: 'conscious-app',
    title: 'Conscious App',
    tagline: 'A mindful wellness app to help you explore inner balance, reflect on emotions, and build a calm daily practice.',
    category: 'Mobile · Wellbeing',
    context: 'Explore inner balance',
    year: '2025',
    accent: 'sand',
    cover: { src: '/images/work/conscious-app/cover.png', alt: 'Conscious App — A Healthier You, Every Day: mindful wellness app screens showing emotion check-in and splash screen', ratio: '1672/941' },
    overview: 'Conscious is a mindful wellness app designed to help users explore inner balance, reduce mental noise, encourage reflections, and build a slow and peaceful digital experience. The platform addresses the growing need for a simple, calm space where people can check in with their emotions, engage in breathing sessions, and develop better mental habits.',
    role: 'UI/UX Designer',
    responsibilities: [
      'End-to-end UX and UI design — from concept to high-fidelity screens',
      'Defined information architecture and key user flows',
      'Designed emotional UX strategy mapping stress states to app responses',
      'Created interactive prototype in Figma',
    ],
    scope: ['Mobile app', 'Explore, Mood Selection, Session, and Reminder screens'],
    team: '[[Solo / team]]',
    timeline: '1 month',
    tools: ['Figma'],
    problem: {
      statement: 'People experience constant digital overload — most apps focus on productivity rather than mental clarity. Users lack a simple digital space for reflection and self-awareness.',
      context: 'The design objective was to create a digital platform that helps users explore inner balance, practise reflection, and build self-awareness through a calm, guided mobile experience.',
      challenges: [
        'Most wellness apps are feature-heavy and increase cognitive load rather than reducing it',
        'Emotion-based interaction is rarely personalised — users get generic content regardless of how they feel',
        'Breathing and mindfulness sessions often feel clinical rather than peaceful',
      ],
      goals: [
        'Create a calm, distraction-free digital environment',
        'Personalise experiences based on the user\'s current emotional state',
        'Encourage daily reflection and awareness through gentle prompts',
        'Reduce cognitive effort at every interaction point',
      ],
    },
    users: {
      who: 'Busy professionals seeking calm moments, students managing stress, and people exploring mindfulness for the first time.',
      needs: [
        'A simple, quiet digital space for reflection',
        'Personalised content that matches their current emotional state',
        'Guided breathing and mindfulness sessions that feel natural',
        'Reminders that support — not interrupt — their day',
      ],
      challenges: [
        'Existing apps overwhelm users with features and notifications',
        'Generic content fails to connect with users\' real emotional needs in the moment',
      ],
    },
    flows: {
      journey: 'Users open the app and land on the Explore screen, which surfaces activities based on emotional state. They check in via Mood Selection, are guided into a personalised Session (breathing, reflection or audio), and can set a Reminder to return tomorrow.',
      ia: 'Four primary screens: Explore (emotion-based activity feed), Mood Selection (personalised check-in), Session (breathing / reflection / audio), Reminder (flexible scheduling). Navigation stays minimal — one screen at a time to preserve calm.',
      keyFlows: [
        { title: 'Emotion-based exploration', text: 'Users select how they feel — Calm, Anxious, Joyful, Tired, Focused — and the app surfaces matching activities, reducing decision fatigue.' },
        { title: 'Guided breathing session', text: 'A motion-driven breathing guide with minimal UI, visual breath cues and audio, keeping the user focused and reducing the need to read instructions.' },
        { title: 'Reflection flow', text: 'Quiet journaling prompts with a distraction-free text field, auto-saved so users never lose a thought.' },
        { title: 'Reminder scheduling', text: 'Simple time and repeat picker with visual options — no complex settings, low cognitive effort.' },
      ],
    },
    screens: [
      { src: '/images/work/conscious-app/screen-1.png', alt: 'Conscious App high-fidelity screens — splash screen, mood selection (How are you feeling?), active mood selection with Tired highlighted, and Calm Soundscape session playing Deep Forest Rain', ratio: '1672/941' },
    ],
    decisions: [
      {
        title: 'Emotion-based interaction over content categories',
        rationale: 'Instead of presenting topic lists, the platform highlights a small set of meaningful activities based on the user\'s selected emotional state — so users feel less overwhelmed and can decide quickly.',
      },
      {
        title: 'Motion-driven breathing guide',
        rationale: 'Motion acts as a visual breathing guide, eliminating the need for on-screen instructions. This keeps the session screen sound, uncluttered and fully immersive.',
      },
      {
        title: 'Reduced cognitive effort at every step',
        rationale: 'Instead of typical time selection and input-heavy forms, the Reminder screen uses visual options (time slots, repeat days) that users tap rather than type — minimising effort while supporting consistent use.',
      },
      {
        title: 'Transparency, guidance and reassurance as design principles',
        rationale: 'Ensuring users feel informed and confident at every stage — from mood check-in through to session completion — by surfacing the right context at the right moment.',
      },
    ],
    collaboration: ['End-to-end concept design — research, UX strategy, information architecture, wireframes and high-fidelity UI created independently in Figma.'],
    outcomes: {
      measured: false,
      items: [
        'Designed a calm, distraction-free environment that reduces cognitive load at each step',
        'Personalised experience adapts to the user\'s emotional state — not generic content',
        'Breathing sessions use motion as the guide, removing the need for text instructions',
        'Reminder screen minimises effort through visual selection over manual input',
        'Consistent use of transparency and reassurance across all screens builds user trust',
      ],
    },
    links: [{ label: 'View in Figma', url: `${FIGMA_FILE}?node-id=88-3705` }],
  },
];

// ─────────────────────────────────────────────────────────────
//  MORE WORK — smaller explorations shown as a grid that links out.
//  Images come from your previous portfolio.
// ─────────────────────────────────────────────────────────────
export const archive = [
  { title: 'Merge AI', type: 'AI mobile app', image: '/images/archive/merge-ai.jpg', url: 'https://www.figma.com/proto/9NbysKeivOWkSZYa6Kru0I/Practice?page-id=2006%3A13664&node-id=2033-19322&viewport=709%2C38%2C0.06&t=3XTVhOZrtw75WWEn-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2041%3A20581&show-proto-sidebar=1' },
  { title: 'OnCard', type: 'Digital credit card app', image: '/images/archive/oncard.jpg', url: 'https://www.behance.net/gallery/224013531/OnCard-Digital-Credit-Card' },
  { title: 'Movie Booking', type: 'Mobile ticketing app', image: '/images/archive/movie-booking.jpg', url: 'https://www.figma.com/proto/9NbysKeivOWkSZYa6Kru0I/Practice?page-id=1784%3A1563&node-id=1850-13900&viewport=-1661%2C5025%2C0.28&t=EAARtZAjr2n92sIR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1872%3A15058&show-proto-sidebar=1' },
  { title: 'Try-thlon', type: 'Case study · Hyperlocal fashion', image: '/images/archive/try-thlon.jpg', url: 'https://www.behance.net/gallery/208925873/Try-thlon' },
  { title: 'CreatiWise', type: 'SaaS website', image: '/images/archive/creatiwise.jpg', url: 'https://www.behance.net/gallery/224014993/CreatiWise' },
  { title: 'Spice', type: 'Bill-split app redesign', image: '/images/archive/spice.jpg', url: 'https://www.behance.net/gallery/212354685/Re-design-Bill-split-application' },
  { title: 'WhatsApp status categories', type: 'Feature concept', image: '/images/archive/whatsapp-feature.jpg', url: 'https://www.behance.net/prateeksrivast22' },
  { title: 'Mobile UI explorations', type: 'Rhythm · Bookwarm · GreenStay · Plantera', image: '/images/archive/mobile-concepts.gif', url: 'https://www.behance.net/prateeksrivast22' },
];

export const prototypes = [
  { title: 'Road Pilot Driver', url: 'https://www.figma.com/design/Z0j2EQNe4wHn2MBT9oE31e/Assignments?node-id=164-362&t=Ugi7o76jSHgLaoKw-1' },
  { title: 'Craft My Plate', url: 'https://www.figma.com/proto/Z0j2EQNe4wHn2MBT9oE31e/Assignments?page-id=277%3A36&node-id=352-7822&viewport=721%2C46%2C0.03&t=zXYBSkLD3B8jZY0O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=352%3A10590' },
  { title: 'Register Karo', url: 'https://www.figma.com/proto/Z0j2EQNe4wHn2MBT9oE31e/Assignments?page-id=193%3A587&node-id=710-1869&viewport=584%2C177%2C0.09&t=9l8cN4JbX6w55hpz-1&scaling=min-zoom&content-scaling=fixed' },
  { title: 'Paper Social', url: 'https://www.figma.com/proto/Z0j2EQNe4wHn2MBT9oE31e/Assignments?page-id=434%3A605&node-id=631-8757&viewport=1277%2C500%2C0.09&t=0ZdSmsJCPaRUZB1O-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=541%3A295' },
  { title: 'Virtual Pet', url: 'https://www.figma.com/design/Z0j2EQNe4wHn2MBT9oE31e/Assignments?node-id=157-4&t=Ugi7o76jSHgLaoKw-1' },
];
