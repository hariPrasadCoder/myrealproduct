import { motion } from 'motion/react';
import { Rocket, Database, Bot, ShieldCheck, GraduationCap, CalendarDays, RefreshCw, Award, Check } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Tool {
  name: string;
  src: string;
  showLabel?: boolean;
}

interface Week {
  number: number;
  short: string;
  title: string;
  tag: string | null;
  capability: string;
  icon: typeof Rocket;
  body: string;
  skills: string[];
  tools: Tool[];
}

interface WeekColor {
  ring: string;
  text: string;
  glow: string;
  bg: string;
  hex: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// Colors deliberately match LEVEL_COLORS[1..4] in MasterclassPage.tsx (sky, emerald,
// amber, rose), so a visitor who later sees /masterclass gets a subtle, intentional
// through-line rather than a clashing new palette.

const WEEK_COLORS: WeekColor[] = [
  { ring: 'border-sky-500/50', text: 'text-sky-400', glow: 'rgba(56,189,248,0.35)', bg: 'bg-[#0F1A24]', hex: '#38BDF8' },
  { ring: 'border-emerald-500/50', text: 'text-emerald-400', glow: 'rgba(52,211,153,0.35)', bg: 'bg-[#0F1E18]', hex: '#34D399' },
  { ring: 'border-amber-500/50', text: 'text-amber-400', glow: 'rgba(251,191,36,0.35)', bg: 'bg-[#1E1800]', hex: '#FBBF24' },
  { ring: 'border-rose-500/50', text: 'text-rose-400', glow: 'rgba(251,113,133,0.35)', bg: 'bg-[#1E0F14]', hex: '#FB7185' },
];

const WEEKS: Week[] = [
  {
    number: 1,
    short: 'AI Wrapper',
    title: 'Ship a Working AI App',
    tag: null,
    capability: 'Live App',
    icon: Rocket,
    body: 'Build a real ChatGPT-powered app and get it live at a real URL this week. Something shareable, not a script stuck on your laptop, not a folder of prompts.',
    skills: [
      'Prompt engineering fundamentals',
      'Calling OpenAI, Claude & Gemini APIs',
      'Python for AI apps',
      'Shipping to a live URL',
    ],
    tools: [
      { name: 'OpenAI', src: '/logos/openai-icon.svg' },
      { name: 'Claude', src: '/logos/anthropic.svg' },
      { name: 'Gemini', src: '/logos/gemini.svg' },
      { name: 'Python', src: '/logos/python.svg' },
      { name: 'Cursor', src: '/logos/cursor.svg', showLabel: true },
      { name: 'Claude Code', src: '/logos/claude-code.png', showLabel: true },
    ],
  },
  {
    number: 2,
    short: 'RAG App',
    title: 'Make It Smart With Your Own Data',
    tag: 'RAG',
    capability: 'RAG',
    icon: Database,
    body: 'Add retrieval so it reasons over real documents, yours, or a domain you and Hari pick together. An AI that actually knows your content, not one that hallucinates the moment you ask something real.',
    skills: [
      'Embeddings & semantic search',
      'Chunking strategies',
      'Vector storage with Supabase',
      'Retrieval-augmented generation (RAG)',
    ],
    tools: [
      { name: 'Supabase', src: '/logos/supabase.svg' },
      { name: 'Pinecone', src: '/logos/pinecone.svg' },
      { name: 'Gemini', src: '/logos/gemini.svg' },
      { name: 'LangChain', src: '/logos/langchain.svg' },
    ],
  },
  {
    number: 3,
    short: 'Agentic AI App',
    title: 'Make It Autonomous',
    tag: 'AI Agents',
    capability: 'Agents',
    icon: Bot,
    body: "Give it the ability to take multi-step action on its own, not just answer once and stop. A system that gets real work done, not a chatbot waiting for the next prompt.",
    skills: [
      'Agent state machines with LangGraph',
      'Tool calling & multi-step reasoning',
      'Memory & context management',
      'Human-in-the-loop approval flows',
    ],
    tools: [
      { name: 'LangGraph', src: '/logos/langgraph.png', showLabel: true },
      { name: 'Claude', src: '/logos/anthropic.svg' },
      { name: 'Gemini', src: '/logos/gemini.svg' },
    ],
  },
  {
    number: 4,
    short: 'LLMOps',
    title: 'Make It Production-Ready',
    tag: 'LLMOps & Evals',
    capability: 'Production',
    icon: ShieldCheck,
    body: "Deploy, monitor, and guard it like a real engineer would. Something running in production for real users, not a demo that only works when you're the one clicking it.",
    skills: [
      'Deployment with AWS & Docker',
      'CI/CD with GitHub Actions',
      'Observability & tracing',
      'Evals, proving your AI actually works',
    ],
    tools: [
      { name: 'Langfuse', src: '/logos/langfuse.svg' },
      { name: 'LiteLLM', src: '/logos/litellm.webp' },
      { name: 'AWS', src: '/logos/aws.svg' },
      { name: 'Docker', src: '/logos/docker.svg' },
      { name: 'GitHub', src: '/logos/github.svg', showLabel: true },
    ],
  },
];

const LOGISTICS = [
  { icon: GraduationCap, label: 'Pre-requisite', value: 'Basic Python' },
  { icon: CalendarDays, label: 'Weekly live session', value: 'Choose an available Saturday time with Hari' },
  { icon: RefreshCw, label: 'Enrollment', value: 'New seats weekly, start Saturday' },
  { icon: Award, label: 'Certificate', value: '"AI Product Builder" on completion' },
];

// Card padding and border weight grow week over week, so the ladder gets visibly
// heavier as capability accumulates, the design's stand-in for "harder to build."
const CARD_PADDING = ['p-6 sm:p-7', 'p-6 sm:p-7', 'p-6 sm:p-8', 'p-7 sm:p-9'];
const CARD_BORDER_WIDTH = ['border', 'border', 'border', 'border-2'];

// ─── Sub-components ───────────────────────────────────────────────────────────

function renderOverviewStop(week: Week, index: number) {
  const color = WEEK_COLORS[index];
  return (
    <div key={week.number} className="relative z-10 flex flex-col items-center gap-2.5 text-center px-1">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-display font-bold text-white bg-brand-dark border-2"
        style={{ borderColor: color.hex, boxShadow: `0 0 14px ${color.glow}` }}
      >
        {week.number}
      </div>
      <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{week.short}</span>
    </div>
  );
}

function renderWeekRung(week: Week, index: number) {
  const color = WEEK_COLORS[index];
  const nextColor = WEEK_COLORS[index + 1];
  const Icon = week.icon;
  const isLast = index === WEEKS.length - 1;

  return (
    <motion.div
      key={week.number}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex gap-5 sm:gap-7"
    >
      {/* Rail: number node + connecting line down to the next rung */}
      <div className="flex flex-col items-center shrink-0 pt-1">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-display font-bold text-white bg-brand-dark border-2 z-10 shrink-0"
          style={{ borderColor: color.hex, boxShadow: `0 0 18px ${color.glow}` }}
        >
          {week.number}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-1"
            style={{
              minHeight: '2rem',
              background: `linear-gradient(180deg, ${color.hex}, ${nextColor.hex})`,
              opacity: 0.5,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 min-w-0 ${isLast ? '' : 'pb-8 sm:pb-10'}`}>
        <div
          className={`relative rounded-2xl ${CARD_BORDER_WIDTH[index]} ${color.ring} bg-brand-card overflow-hidden`}
          style={{ boxShadow: `0 0 ${20 + index * 12}px -14px ${color.glow}` }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${color.glow}, transparent)` }}
          />

          <div className={CARD_PADDING[index]}>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-white/30">
                Week {week.number}
              </span>
              {week.tag ? (
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 border ${color.ring} ${color.bg} ${color.text}`}
                >
                  <Icon size={12} />
                  {week.tag}
                </span>
              ) : (
                <Icon size={14} className={color.text} />
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug mb-3">
              {week.title}
            </h3>

            <p className="text-brand-text/70 leading-relaxed mb-5 max-w-xl">{week.body}</p>

            {/* Skills — the bucket list of what actually gets learned this week */}
            <div className="mb-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2.5">
                Skills you'll get
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {week.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2 text-sm text-brand-text/80">
                    <Check size={13} className={`shrink-0 mt-0.5 ${color.text}`} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Real tools for this week — tangible, not abstract capability labels */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-2.5">
                Tools you'll use
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {week.tools.map((tool) => (
                  <div
                    key={tool.name}
                    title={tool.name}
                    className="flex items-center justify-center gap-2 h-8 px-3 rounded-lg bg-white"
                  >
                    <img src={tool.src} alt={tool.name} className="h-3.5 sm:h-4 w-auto max-w-[72px] object-contain" />
                    {tool.showLabel && (
                      <span className="text-xs font-semibold text-black/80 whitespace-nowrap">{tool.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TheLadder() {
  return (
    <section id="ladder" className="py-28 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand-primary/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            The 4-Week AI Fast Track
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight mb-4">
            The fastest way to learn AI is to build something real.
          </h2>
          <p className="mx-auto max-w-xl text-brand-text/70 leading-relaxed">
            Go from a working app to RAG, agents, and production in four focused weeks.
          </p>
        </motion.div>

        {/* Overview strip — the whole arc, grabbed in one glance, before any of the detail below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative grid grid-cols-4 gap-x-1 sm:gap-x-3 max-w-xl mx-auto mb-16 sm:mb-20"
        >
          <div className="absolute top-[18px] left-[12.5%] right-[12.5%] h-px bg-white/10" />
          {WEEKS.map((week, i) => renderOverviewStop(week, i))}
        </motion.div>

        {/* The ladder */}
        <div>
          {WEEKS.map((week, i) => renderWeekRung(week, i))}
        </div>

        {/* Coaching — the one place on the page this gets sold as its own idea, personalization folded in here too */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 max-w-2xl border-l-2 border-brand-primary/40 pl-6 sm:pl-8"
        >
          <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed">
            <span className="text-white font-medium">Hari personally directs your plan each week</span>, starting
            with picking the domain that fits you: legal, healthcare, e-commerce, whatever's next for you. Your
            coach, someone who's shipped real AI products, is with you day to day, unblocking you when you're
            stuck. The ladder is the same for everyone. What you build on it isn't.
          </p>
        </motion.div>

        {/* Logistics strip — quiet, informational, not another hero moment */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4"
        >
          {LOGISTICS.map((item, i) => (
            <span key={item.label} className="flex items-center gap-2 text-xs text-brand-text/50">
              <item.icon size={13} className="text-white/25 shrink-0" />
              <span className="text-white/40 font-medium">{item.label}:</span>
              <span>{item.value}</span>
              {i < LOGISTICS.length - 1 && <span className="hidden sm:inline text-white/15 ml-4">·</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
