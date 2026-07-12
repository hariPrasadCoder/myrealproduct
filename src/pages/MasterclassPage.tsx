import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import { trackWaitlistCTAClick } from '../lib/posthog';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Level {
  number: number;
  role: string;
  topic: string;
  oneLiner: string;
  modules: ModuleGroup[];
  outcome: string;
  status: 'recording' | 'waitlist';
}

interface ModuleGroup {
  category: string;
  modules: { name: string; why: string }[];
}

interface LevelColor {
  ring: string;
  num: string;
  glow: string;
  bg: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const thumbLarge = (n: number) => `/mrp-course-thumbnails/large/${n}.jpg`;
const thumbSmall = (n: number) => `/mrp-course-thumbnails/thumb/${n}.jpg`;

const LEVELS: Level[] = [
  {
    number: 1,
    role: 'AI Power User',
    topic: 'AI Tools Fluency',
    oneLiner:
      "Stop using five percent of what AI can do. Master Claude, ChatGPT, Perplexity, and NotebookLM until reaching for the right tool becomes instinct, not guesswork.",
    outcome: "Walk away fluent across every major AI tool, with the Claude ecosystem as your unfair advantage.",
    status: 'recording',
    modules: [
      {
        category: 'Foundation: Start Here',
        modules: [
          { name: 'Prompting 101', why: 'The meta-skill everything else depends on' },
          { name: 'ChatGPT Like a Pro', why: 'Most people use 5% of what it can do' },
          { name: 'Claude 101', why: 'Our home turf, and your new default' },
        ],
      },
      {
        category: 'Research & Knowledge Tools',
        modules: [
          { name: 'Perplexity 101', why: 'The #2 AI search tool, built for real research' },
          { name: 'NotebookLM 101', why: 'The most underrated tool for long documents and PDFs' },
          { name: 'Granola 101', why: 'The fastest-growing meeting AI, zero bots required' },
        ],
      },
      {
        category: 'The Claude Ecosystem: Our Signature Section',
        modules: [
          { name: 'Claude Advanced', why: 'Projects, Memory, extended thinking' },
          { name: 'Claude MCP & Skills', why: 'Almost nobody teaches this well yet' },
          { name: 'Claude Cowork 101', why: 'Desktop automation, growing fast' },
          { name: 'Claude Design 101', why: 'Brand-new, already at 1M users' },
          { name: 'Claude Code 101', why: "Vibe coding, even if you've never coded" },
        ],
      },
      {
        category: 'Build Without Code',
        modules: [
          { name: 'OpenClaw 101', why: 'The hottest open-source AI tool right now' },
          { name: 'Lovable 101', why: 'The fastest way non-coders ship an app' },
          { name: 'n8n 101', why: 'Your gateway into real automation' },
          { name: 'Cursor / Windsurf 101', why: "The AI code editor, for when you're ready" },
        ],
      },
      {
        category: 'Media & Creative (Bonus)',
        modules: [
          { name: 'Midjourney / Ideogram 101', why: 'Still one of the most-searched AI skills' },
          { name: 'Gamma 101', why: "AI presentations that don't look like AI presentations" },
        ],
      },
    ],
  },
  {
    number: 2,
    role: 'AI Builder',
    topic: 'Building Real Products with AI',
    oneLiner: 'Turn ideas into real, working products. Both no-code and code paths count, as long as something real ships.',
    outcome: 'Walk away having shipped and deployed a real AI product, live on the internet, not stuck in a doc.',
    status: 'waitlist',
    modules: [
      {
        category: 'Foundation: Idea to MVP',
        modules: [
          { name: 'Problem Finding & Market Validation', why: 'Spot a real problem before you write a line of code' },
          { name: 'Product Scoping 101', why: 'Turn a vague idea into a buildable v1, not a wishlist' },
          { name: 'Competitor Analysis 101', why: "Know exactly what you're up against before you build" },
        ],
      },
      {
        category: 'No-Code Build Track',
        modules: [
          { name: 'Lovable 101', why: 'Ship a full working app without writing code' },
          { name: 'Bolt.new 101', why: 'Scaffold and iterate on AI apps in minutes' },
          { name: 'Supabase 101', why: 'Add a real database and backend to any no-code app' },
        ],
      },
      {
        category: 'Code Build Track',
        modules: [
          { name: 'Cursor 101', why: 'AI-native coding, for when you want full control' },
          { name: 'Claude Code 101', why: 'Vibe code a production-grade app from scratch' },
          { name: 'Git & GitHub 101', why: 'Manage your codebase like a professional, not a hobbyist' },
        ],
      },
      {
        category: 'Deploy & Launch',
        modules: [
          { name: 'Deployment 101', why: 'AWS, Vercel, and Streamlit, demystified' },
          { name: 'Domain & Hosting 101', why: 'Make it feel like a real product, not a demo' },
          { name: 'Launch Playbook 101', why: 'Get your first 100 real users, not just views' },
        ],
      },
      {
        category: 'Feedback & Iteration (Bonus)',
        modules: [
          { name: 'User Testing 101', why: 'Turn silence into signal' },
          { name: 'Analytics 101', why: "Know what users actually do, not what they say they'll do" },
        ],
      },
    ],
  },
  {
    number: 3,
    role: 'AI Data Engineer',
    topic: 'Custom Querying & RAG',
    oneLiner: "Make AI think with your own data. Build retrieval pipelines that don't hallucinate.",
    outcome: "Walk away with a working RAG pipeline that reasons over your own data accurately, not a demo that only works once.",
    status: 'waitlist',
    modules: [
      {
        category: 'Foundation: How RAG Actually Works',
        modules: [
          { name: 'RAG 101', why: 'Why "just add your data" breaks the moment it hits production' },
          { name: 'Embeddings 101', why: 'How AI turns your documents into searchable meaning' },
          { name: 'Chunking Strategies 101', why: 'The #1 reason most RAG pipelines fail silently' },
        ],
      },
      {
        category: 'Vector Databases & Retrieval',
        modules: [
          { name: 'Pinecone / Weaviate 101', why: 'Choosing and running a real vector database' },
          { name: 'Supabase pgvector 101', why: 'Build RAG on infrastructure you already have' },
          { name: 'Hybrid Search 101', why: 'Combine keyword and semantic search for real accuracy' },
        ],
      },
      {
        category: 'Building the Pipeline',
        modules: [
          { name: 'LangChain for RAG 101', why: 'Wire retrieval directly into your LLM calls' },
          { name: 'LlamaIndex 101', why: 'The framework built specifically for document-heavy RAG' },
          { name: 'Document Parsing 101', why: 'Get clean, usable data out of messy PDFs and docs' },
        ],
      },
      {
        category: 'Advanced Querying',
        modules: [
          { name: 'Multi-Source RAG 101', why: 'Query across databases, APIs, and files at once' },
          { name: 'Query Rewriting 101', why: "Make retrieval smarter than the user's raw question" },
          { name: 'Citations & Grounding 101', why: 'Make your AI show its work, not just its answer' },
        ],
      },
      {
        category: 'Data Quality (Bonus)',
        modules: [
          { name: 'Evaluating RAG 101', why: 'Measure retrieval accuracy, not just vibes' },
          { name: 'Data Freshness 101', why: 'Keep your knowledge base from quietly going stale' },
        ],
      },
    ],
  },
  {
    number: 4,
    role: 'AI Systems Architect',
    topic: 'LangChain, LangGraph & Agentic Systems',
    oneLiner: 'Move from single prompts to multi-step, multi-agent systems you can actually see and debug.',
    outcome: 'Walk away having built and debugged a real multi-agent system, not just a single clever prompt.',
    status: 'waitlist',
    modules: [
      {
        category: 'Foundation: Agentic Thinking',
        modules: [
          { name: 'Agentic AI 101', why: 'What actually makes a system "agentic," and what doesn\'t' },
          { name: 'Prompt Chaining 101', why: 'From one prompt to a full multi-step workflow' },
          { name: 'Tool Use 101', why: 'Give your AI hands, not just a mouth' },
        ],
      },
      {
        category: 'LangChain & LangGraph',
        modules: [
          { name: 'LangChain 101', why: 'The standard framework behind most real LLM apps' },
          { name: 'LangGraph 101', why: 'State machines built for multi-step AI systems' },
          { name: 'Memory & State 101', why: 'Make agents remember what happened, and why it matters' },
        ],
      },
      {
        category: 'Multi-Agent Systems',
        modules: [
          { name: 'Multi-Agent Orchestration 101', why: "When one agent isn't enough" },
          { name: 'Agent Handoffs 101', why: 'Design clean boundaries between agents' },
          { name: 'MCP for Agents 101', why: 'Connect agents to real tools, files, and data' },
        ],
      },
      {
        category: 'Debugging & Visibility',
        modules: [
          { name: 'Tracing with LangSmith 101', why: 'See exactly what your agent did, and why' },
          { name: 'Failure Mode Analysis 101', why: 'Debug agents that fail silently, not loudly' },
          { name: 'Cost & Latency Tuning 101', why: 'Make agentic systems fast enough to actually ship' },
        ],
      },
      {
        category: 'Real-World Patterns (Bonus)',
        modules: [
          { name: 'Human-in-the-Loop 101', why: 'Know when to let AI decide vs. ask first' },
          { name: 'Agent Design Patterns 101', why: "Reusable blueprints for the workflows you'll build again and again" },
        ],
      },
    ],
  },
  {
    number: 5,
    role: 'LLMOps Engineer',
    topic: 'LLMOps, Evals & Deployment',
    oneLiner: 'Ship AI that survives real users. Evals, monitoring, and deployment done right.',
    outcome: 'Walk away with the evals, monitoring, and deployment practices that make AI systems survive real users.',
    status: 'waitlist',
    modules: [
      {
        category: 'Foundation: What Production-Ready Means',
        modules: [
          { name: 'LLMOps 101', why: 'The discipline that separates demos from real products' },
          { name: 'Evals 101', why: 'How to actually know if your AI works, not just feels like it does' },
          { name: 'Prompt Versioning 101', why: 'Treat prompts like code, not like vibes' },
        ],
      },
      {
        category: 'Testing & Evaluation',
        modules: [
          { name: 'Building Eval Suites 101', why: 'Catch regressions before your users do' },
          { name: 'LLM-as-Judge 101', why: 'Use AI to grade AI, without fooling yourself' },
          { name: 'Red Teaming 101', why: "Find your AI's failure modes before attackers do" },
        ],
      },
      {
        category: 'Monitoring & Observability',
        modules: [
          { name: 'Langfuse / LangSmith 101', why: "Trace every request once you're in production" },
          { name: 'Cost Monitoring 101', why: 'Keep your AI bill from quietly spiraling' },
          { name: 'Drift Detection 101', why: 'Know the moment your model quietly gets worse' },
        ],
      },
      {
        category: 'Deployment & Scale',
        modules: [
          { name: 'Model Deployment 101', why: 'Serve LLMs reliably at real-world scale' },
          { name: 'Guardrails 101', why: 'Stop bad outputs before your users ever see them' },
          { name: 'Fallback & Retry Strategies 101', why: 'Know exactly what happens when the model fails' },
        ],
      },
      {
        category: 'Team & Process (Bonus)',
        modules: [
          { name: 'AI Incident Response 101', why: 'What to do the moment production AI breaks' },
          { name: 'Documentation for AI Systems 101', why: "Make your system maintainable by someone who isn't you" },
        ],
      },
    ],
  },
];

const LEVEL_COLORS: LevelColor[] = [
  { ring: 'border-brand-primary/50', num: 'text-brand-accent', glow: 'rgba(69,61,200,0.35)', bg: 'bg-[#1A1830]' },
  { ring: 'border-sky-500/50', num: 'text-sky-400', glow: 'rgba(14,165,233,0.3)', bg: 'bg-[#0F1A24]' },
  { ring: 'border-emerald-500/50', num: 'text-emerald-400', glow: 'rgba(16,185,129,0.3)', bg: 'bg-[#0F1E18]' },
  { ring: 'border-amber-500/50', num: 'text-amber-400', glow: 'rgba(245,158,11,0.3)', bg: 'bg-[#1E1800]' },
  { ring: 'border-rose-500/50', num: 'text-rose-400', glow: 'rgba(244,63,94,0.3)', bg: 'bg-[#1E0F14]' },
];

const PRICING = {
  single: { regular: 249, earlyBird: 99 },
  bundle: { regular: 999, earlyBird: 349 },
};

const ROADMAP = [
  {
    number: '01',
    title: 'Join the waitlist',
    description: 'Takes 20 seconds and no payment. Just tell us which masterclass or masterclasses you care about most.',
  },
  {
    number: '02',
    title: 'Level 1 launches first',
    description: 'The AI Power User Masterclass ships as soon as recording wraps. Waitlist members get first access and Early Bird pricing, locked in for life.',
  },
  {
    number: '03',
    title: 'Masterclasses 2 through 5 roll out one at a time',
    description: "Recorded and released as they're ready. You'll get notified the moment each new masterclass opens.",
  },
];

const FAQS = [
  {
    q: 'Why five masterclasses instead of one course?',
    a: 'Because "knowing AI" isn\'t one skill. Someone who\'s great at prompting Claude can still have no idea how to build a RAG pipeline or run a production eval. Each masterclass is a distinct, in-demand skill. The roadmap lets you go exactly as deep as you need, without sitting through content you already know.',
  },
  {
    q: 'Do I have to go in order?',
    a: "We'd recommend it. Each masterclass builds on the fluency from the one before it. But once a masterclass is live, it's yours to take on its own if you're already comfortable with the earlier ones.",
  },
  {
    q: 'What if I already know some of this?',
    a: "Skip ahead. Level 1, The AI Power User Masterclass, is deliberately broad so total beginners can start there. If you're already fluent with AI tools, jump straight to whichever masterclass covers the skill gap you actually have.",
  },
  {
    q: 'Should I buy a single masterclass or the bundle?',
    a: "If you know exactly which skill you need, buy that masterclass. If you want the whole path and know you'll use all five, the bundle is the better deal. It's priced below what five individual masterclasses would cost, and your price is locked the moment you join.",
  },
  {
    q: 'When does each masterclass launch?',
    a: 'Level 1, The AI Power User Masterclass, is recording now and ships first. The rest follow one at a time. Waitlist members get notified, and get first access, the moment each one opens.',
  },
  {
    q: 'How is this different from the MyRealProduct cohort?',
    a: 'The cohort is a live, 4-week, cohort-based sprint with mentorship and a hard deadline. These masterclasses are self-paced, recorded, and modular. You go deep on exactly the skill you need, on your own schedule, without waiting for the next cohort to start.',
  },
];

const WAITLIST_TALLY_FORM_ID = '0QyOaB';

function openWaitlist(level: string, location: string) {
  trackWaitlistCTAClick(level, location);
  if (typeof window !== 'undefined' && (window as any).Tally) {
    (window as any).Tally.openPopup(WAITLIST_TALLY_FORM_ID, {
      layout: 'modal',
      width: 500,
      hideTitle: true,
      hiddenFields: { level },
    });
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ModuleGroups({ groups, colorClass }: { groups: ModuleGroup[]; colorClass: string }) {
  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div key={group.category} className="rounded-xl border border-white/8 bg-white/3 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-white/8">
            <span className={`text-[11px] font-bold uppercase tracking-widest ${colorClass}`}>
              {group.category}
            </span>
          </div>
          <ul className="divide-y divide-white/5">
            {group.modules.map((m) => (
              <li key={m.name} className="flex items-start justify-between gap-4 px-4 py-2.5">
                <span className="text-sm font-medium text-white/80">{m.name}</span>
                <span className="text-xs text-brand-text/40 text-right leading-relaxed">{m.why}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Outcome({ text, colorClass }: { text: string; colorClass: string }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/3 px-4 py-3.5 flex items-start gap-3">
      <Star size={16} className={`shrink-0 mt-0.5 ${colorClass}`} />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">You'll Walk Away With</p>
        <p className="text-sm text-white/80 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function Level1Feature({ level }: { level: Level }) {
  const color = LEVEL_COLORS[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative mb-16"
    >
      <div
        className="relative rounded-3xl border-2 border-brand-primary/60 bg-gradient-to-b from-[#1A1830] to-brand-card overflow-hidden"
        style={{ boxShadow: '0 0 70px -20px rgba(69,61,200,0.55)' }}
      >
        <div className="p-7 sm:p-10">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-brand-primary rounded-full px-3 py-1">
              Level 1
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/30 rounded-full px-3 py-1 bg-emerald-500/10">
              In Production
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent border border-brand-primary/30 rounded-full px-3 py-1 bg-brand-primary/10">
              ${PRICING.single.earlyBird} Early Bird
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
            <img
              src={thumbLarge(level.number)}
              alt={`Become an ${level.role}, the ${level.role} Masterclass`}
              className="w-full aspect-video object-cover"
              loading="eager"
            />
          </div>

          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1.5">{level.topic}</p>
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight mb-6">
            The {level.role} Masterclass
          </h3>

          <p className="text-brand-text/60 leading-relaxed mb-8 max-w-2xl">{level.oneLiner}</p>

          <div className="mb-6">
            <ModuleGroups groups={level.modules} colorClass={color.num} />
          </div>

          <div className="mb-8">
            <Outcome text={level.outcome} colorClass={color.num} />
          </div>

          <button
            onClick={() => openWaitlist(`Level ${level.number}: ${level.role}`, 'level1_feature')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-6 py-4 rounded-lg bg-white hover:bg-brand-accent text-black transition-all duration-300 shadow-[0_0_30px_-8px_rgba(255,255,255,0.35)]"
          >
            Join Waitlist for Level 1
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function LevelCard({
  level,
  colorIndex,
  isOpen,
  onToggle,
}: {
  level: Level;
  colorIndex: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const color = LEVEL_COLORS[colorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: colorIndex * 0.06 }}
      className="relative"
    >
      <div
        className={`group relative rounded-3xl border bg-brand-card overflow-hidden transition-all duration-300 ${
          isOpen ? color.ring : 'border-white/6 hover:border-white/12'
        }`}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${color.glow}, transparent)` }}
        />

        <button onClick={onToggle} className="w-full flex items-center gap-5 px-6 sm:px-7 py-6 text-left">
          <div
            className={`shrink-0 w-24 sm:w-28 aspect-video rounded-xl overflow-hidden border ${color.ring}`}
            style={{ boxShadow: `0 0 20px ${color.glow}` }}
          >
            <img
              src={thumbSmall(level.number)}
              alt={`Become an ${level.role}, the ${level.role} Masterclass`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="text-xs font-medium text-brand-text/40 uppercase tracking-widest">
                Level {level.number}
              </p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 rounded-full px-2.5 py-0.5 bg-white/5">
                Coming Soon
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold leading-snug text-white pr-4">
              The {level.role} Masterclass
            </h3>
            <p className="text-xs text-brand-text/40 mt-1">{level.topic}</p>
          </div>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 text-brand-text/30"
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-7 pb-7 space-y-5 border-t border-white/5 pt-5">
                <div className={`rounded-xl overflow-hidden border ${color.ring}`}>
                  <img
                    src={thumbLarge(level.number)}
                    alt={`Become an ${level.role}, the ${level.role} Masterclass`}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                </div>

                <p className="text-brand-text/60 leading-relaxed">{level.oneLiner}</p>

                <ModuleGroups groups={level.modules} colorClass={color.num} />

                <Outcome text={level.outcome} colorClass={color.num} />

                <button
                  onClick={() => openWaitlist(`Level ${level.number}: ${level.role}`, 'level_card')}
                  className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-lg border ${color.ring} bg-white/5 hover:bg-white/10 transition-all duration-200 text-white`}
                >
                  Join Waitlist for Level {level.number}
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/5 py-5">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 text-left">
        <span className="text-white font-medium">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-white/30">
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-brand-text/55 leading-relaxed pt-3 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MasterclassPage() {
  const [openLevel, setOpenLevel] = useState<number | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const level1 = LEVELS[0];
  const nextLevels = LEVELS.slice(1);

  const pageTitle = 'Become a Full Stack AI Engineer | MyRealProduct';
  const pageDescription =
    'Become a Full Stack AI Engineer through five distinct masterclasses, from AI Power User to LLMOps Engineer. Join the waitlist and lock in Early Bird pricing for life.';
  const pageUrl = 'https://www.myrealproduct.com/masterclass';
  const ogImage = 'https://www.myrealproduct.com/og-preview.png';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'The Five AI Masterclasses',
        description: pageDescription,
        provider: {
          '@type': 'Organization',
          name: 'MyRealProduct',
          url: 'https://www.myrealproduct.com',
        },
        hasCourseInstance: LEVELS.map((level) => ({
          '@type': 'CourseInstance',
          name: `Level ${level.number}: The ${level.role} Masterclass`,
          description: level.oneLiner,
          courseMode: 'online',
        })),
        offers: {
          '@type': 'Offer',
          price: String(PRICING.single.earlyBird),
          priceCurrency: 'USD',
          availability: 'https://schema.org/PreOrder',
          url: pageUrl,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        {/* Primary */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content="MyRealProduct" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Become a Full Stack AI Engineer | MyRealProduct" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="Become a Full Stack AI Engineer" />
        <meta
          name="twitter:description"
          content="Five distinct AI masterclasses, from AI Power User to LLMOps Engineer. Join the waitlist and lock in Early Bird pricing."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Become a Full Stack AI Engineer | MyRealProduct" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="bg-brand-dark min-h-screen text-white">
        <div className="noise-overlay" />
        <Navbar />

        {/* ── Hero ── */}
        <section className="pt-44 pb-24 relative overflow-hidden">
          {/* Spline 3D Background, masked to hide outer ring, only inner glow visible */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              maskImage: 'radial-gradient(ellipse 48% 42% at 50% 45%, black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 48% 42% at 50% 45%, black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)',
            }}
          >
            <div
              className="absolute inset-0 mix-blend-screen opacity-[0.14]"
              style={{ filter: 'saturate(0) brightness(1.0) contrast(1.05)' }}
            >
              <iframe
                src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs"
                frameBorder="0"
                width="100%"
                height="100%"
                className="w-full h-full"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 55% 48% at 50% 45%, rgba(69, 61, 200, 0.7) 0%, rgba(69, 61, 200, 0.3) 40%, transparent 70%)',
                mixBlendMode: 'multiply',
              }}
            />
          </div>

          <div className="absolute inset-0 z-[1] bg-grid-pattern opacity-40 pointer-events-none" />
          <Particles particleCount={60} className="z-[2] opacity-60" />
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

          <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-4 py-2 mb-8">
                <Star size={12} className="text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  Waitlist Now Open
                </span>
              </div>

              <div className="relative">
                <span className="absolute -left-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'{'}</span>
                <span className="absolute -right-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'}'}</span>
                <h1 className="text-5xl md:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight mb-6">
                  Become a Full Stack<br />
                  <span className="text-gradient">AI Engineer.</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed mb-10">
                AI isn't one skill. It's five, and most courses only teach you the first one. This is the only
                roadmap for all five: from your first prompt to shipping AI that survives real users.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="h-14 px-12 text-sm font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_40px_-5px_rgba(255,255,255,0.25)] transition-all duration-300"
                  onClick={() => openWaitlist('General', 'hero')}
                >
                  Join the Waitlist
                </button>
              </div>
              <p className="text-xs font-mono text-white/25 uppercase tracking-widest mt-5">
                No card required · 20 seconds
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Why Five Levels ── */}
        <section className="py-28 border-t border-white/5 bg-brand-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                Why Five Levels
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
                Everyone teaches Level 1.<br />
                <span className="text-white/30">Almost nobody teaches the rest.</span>
              </h2>
              <p className="text-brand-text/50 max-w-xl mx-auto leading-relaxed">
                Using AI tools, building products, querying your own data, orchestrating agents, and running AI
                in production are five different skills. Climb all five, and you're not just AI fluent. You're a{' '}
                <span className="text-white font-medium">Full Stack AI Engineer</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {LEVELS.map((level, i) => {
                const color = LEVEL_COLORS[i];
                return (
                  <motion.div
                    key={level.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`group border ${color.ring} bg-brand-dark/60 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1`}
                  >
                    <div className="aspect-video overflow-hidden bg-brand-terminal">
                      <img
                        src={thumbSmall(level.number)}
                        alt={`Become an ${level.role}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <span
                        className={`inline-block text-xs font-bold uppercase tracking-widest ${color.num} border ${color.ring} rounded-full px-2.5 py-1 mb-2`}
                      >
                        Level {level.number}
                      </span>
                      <p className="text-sm font-semibold text-white leading-snug">{level.role}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── The 5 Masterclasses ── */}
        <section className="py-28 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                The Curriculum
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white">The Five Masterclasses</h2>
            </motion.div>

            <Level1Feature level={level1} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3 block">
                Then Keep Climbing
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-medium text-white">
                Masterclasses 2 through 5, unlocking one at a time.
              </h3>
            </motion.div>

            <div className="space-y-4">
              {nextLevels.map((level, i) => (
                <LevelCard
                  key={level.number}
                  level={level}
                  colorIndex={i + 1}
                  isOpen={openLevel === i}
                  onToggle={() => setOpenLevel((prev) => (prev === i ? null : i))}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="py-28 border-t border-white/5 bg-brand-card relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                Early Bird Pricing
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4">
                Lock in your price. <span className="text-white/30">Forever.</span>
              </h2>
              <p className="text-brand-text/50 max-w-xl mx-auto leading-relaxed">
                Early Bird pricing is only available during the waitlist. Once Level 1 launches, new signups pay
                full price.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-2xl mx-auto">
              {/* Single Masterclass */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-white/8 bg-brand-dark/60 rounded-2xl p-8 flex flex-col"
              >
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Single Masterclass</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-display font-bold text-white">${PRICING.single.earlyBird}</span>
                  <span className="text-sm text-white/30 line-through">${PRICING.single.regular}</span>
                </div>
                <p className="text-xs text-brand-text/40 mb-6">
                  Any single masterclass, your choice. Start with Level 1 or jump to the skill you need.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/70">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-white/40" />
                    Full access to one masterclass, forever
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-brand-text/70">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-white/40" />
                    Pick the exact skill you need first
                  </li>
                </ul>
                <button
                  onClick={() => openWaitlist('Pricing: Single Masterclass', 'pricing')}
                  className="h-12 px-6 text-xs font-semibold uppercase tracking-widest border border-white/15 hover:border-white/30 text-white rounded-sm transition-all duration-300"
                >
                  Join Waitlist
                </button>
              </motion.div>

              {/* Bundle: featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-brand-primary/50 bg-[#14122A] rounded-2xl p-8 flex flex-col relative shadow-[0_0_50px_-15px_rgba(69,61,200,0.5)]"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white bg-brand-primary rounded-full px-4 py-1">
                  Best Value
                </span>
                <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-4">All 5 Masterclasses</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-display font-bold text-white">${PRICING.bundle.earlyBird}</span>
                  <span className="text-sm text-white/30 line-through">${PRICING.bundle.regular}</span>
                </div>
                <p className="text-xs text-brand-text/40 mb-6">One-time. Yours forever.</p>
                <ul className="space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-brand-accent" />
                    Complete all 5 and become a Full Stack AI Engineer
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-brand-accent" />
                    Every masterclass, as it launches
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-brand-accent" />
                    Cheaper than buying masterclasses one at a time
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-brand-accent" />
                    Price locked the moment you join
                  </li>
                </ul>
                <button
                  onClick={() => openWaitlist('Pricing: Bundle', 'pricing')}
                  className="h-12 px-6 text-xs font-semibold uppercase tracking-widest bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  Join Waitlist
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Roadmap ── */}
        <section className="py-28 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                How It Rolls Out
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
                From the waitlist to Full Stack AI Engineer.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {ROADMAP.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="text-4xl font-display font-bold text-white/10 block mb-4">{step.number}</span>
                  <h3 className="text-white font-medium mb-2">{step.title}</h3>
                  <p className="text-brand-text/50 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 border-t border-white/5 bg-brand-card">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-white">FAQ</h2>
            </motion.div>

            <div>
              {FAQS.map((item, i) => (
                <FAQItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openFAQ === i}
                  onToggle={() => setOpenFAQ((prev) => (prev === i ? null : i))}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/8 rounded-full blur-[130px] pointer-events-none" />
          <div className="container mx-auto px-4 max-w-2xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight mb-6">
                Climb the ladder.<br />
                <span className="text-white/30">Start as an AI Power User.</span>
              </h2>
              <p className="text-brand-text/50 leading-relaxed mb-10">
                Join the waitlist and lock in Early Bird pricing before Level 1 launches.
              </p>
              <button
                className="h-14 px-12 text-sm font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_50px_-5px_rgba(255,255,255,0.2)] transition-all duration-300"
                onClick={() => openWaitlist('General', 'final_cta')}
              >
                Join the Waitlist
              </button>
            </motion.div>
          </div>
        </section>

        <Footer hideCta />
      </div>
    </>
  );
}
