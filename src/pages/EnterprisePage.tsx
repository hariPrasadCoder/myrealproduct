import { motion } from 'motion/react';
import { Quote, Building2, CheckCircle2, ArrowRight, ArrowUpRight, Terminal, Globe } from 'lucide-react';
import { useEffect } from 'react';
import Marquee from '../components/Marquee';
import Particles from '../components/Particles';
import { trackEvent, trackSectionView, trackExternalLink } from '../lib/posthog';

const REVIEWS = [
  {
    text: "MyRealProduct made complex AI concepts simple and approachable. Hari's guidance gave me the confidence to use new tools and actually build products instead of just learning theory.",
    name: "Praveena Suresh",
    title: "Senior Data Analyst",
  },
  {
    text: "Before this, I had no idea how to actually apply AI in a meaningful way. Now I've built an app, something I didn't think I could do before.",
    name: "Vidyamai Shakkara",
    title: "Business Data Analyst",
  },
  {
    text: "Turning Python code into a real-world product was incredible. The constant guidance made learning rewarding.",
    name: "Joan Xavier",
    title: "PhD Candidate",
  },
];

const AI_TOOLS = [
  "Claude Code", "Cursor", "OpenAI", "n8n", "GitHub Copilot",
  "Gemini", "LangChain", "LangGraph", "Agentic AI", "MCP", "Perplexity",
];

const WORKFLOW_TOOLS = [
  "Salesforce", "HubSpot", "Slack", "Notion", "Google Workspace",
  "Microsoft 365", "Zapier", "Make",
];

const INDUSTRIES = ["Marketing", "Finance", "Legal", "HR", "Operations"];

const BEFORE = [
  "Hours lost to tasks AI could handle in minutes",
  "Generic training your team forgets in a week",
  "AI tools purchased. Rarely opened.",
  "Watching competitors move faster",
];

const AFTER = [
  "Workflows automated. Hours saved every week.",
  "Your team builds AI tools for your actual work",
  "Every person equipped with the right AI stack",
  "Your team becomes your competitive edge",
];

export default function EnterprisePage() {
  useEffect(() => {
    trackSectionView('enterprise_page');
    trackEvent('enterprise_page_viewed', { page: '/enterprise' });
  }, []);

  const handleDiscoveryCallClick = (location: string) => {
    trackEvent('enterprise_discovery_call_clicked', { location, page: '/enterprise' });
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('MeLd0l', { layout: 'modal', width: 500, hideTitle: true });
    }
  };

  const handleLinkedInClick = () => {
    trackExternalLink('https://www.linkedin.com/in/hariprasad20/', 'enterprise_founder_linkedin');
  };

  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="noise-overlay" />

      {/* ── Navbar ──────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="text-xl font-bold font-display tracking-tight text-white">
            MyRealProduct
          </a>

          <button
            className="h-10 px-6 text-xs font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
            onClick={() => handleDiscoveryCallClick('navbar')}
          >
            Book a Discovery Call
          </button>
        </div>
      </motion.nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-44 pb-28 relative overflow-hidden bg-brand-dark">

        {/* Spline 3D background */}
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

        {/* Tech grid */}
        <div className="absolute inset-0 z-[1] bg-grid-pattern opacity-40 pointer-events-none" />

        {/* Particles */}
        <Particles particleCount={60} className="z-[2] opacity-60" />

        {/* Ambient glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

        {/* HUD elements */}
        <div className="absolute top-32 left-10 hidden lg:flex flex-col gap-4 opacity-30 z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
            <Terminal size={12} />
            <span>ENTERPRISE_READY</span>
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>
        <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-4 items-end opacity-30 z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
            <span>TEAM_AI_ENABLED</span>
            <Globe size={12} />
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">

            <div className="inline-flex items-center gap-3 mb-10">
              <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-2">
                <Building2 size={12} className="text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  London, UK
                </span>
              </div>
              <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-2">
                <Globe size={12} className="text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  Virtual Worldwide
                </span>
              </div>
            </div>

            <div className="relative inline-block mb-6">
              <span className="absolute -left-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'{'}</span>
              <span className="absolute -right-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'}'}</span>
              <h1 className="text-6xl md:text-8xl font-display font-medium text-white leading-[1] tracking-tight">
                Give Your Team an<br />
                <span className="text-gradient">Unfair Advantage</span><br />
                With AI.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-brand-text/60 max-w-xl mx-auto leading-relaxed mb-12">
              The fastest way to make your entire team AI-ready, built around your workflows, not generic demos.
            </p>

  
            <button
              className="h-14 px-12 text-sm font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_40px_-5px_rgba(255,255,255,0.25)] transition-all duration-300"
              onClick={() => handleDiscoveryCallClick('hero')}
            >
              Book a Free Discovery Call
            </button>

          </motion.div>
        </div>
      </section>

      {/* ── Industries strip ────────────────────────────────────────────── */}
      <div className="border-y border-white/5 py-5 bg-brand-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest shrink-0">
              Teams we work with
            </span>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="text-sm font-medium text-white/50 hover:text-white transition-colors cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee ─────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── Stats ───────────────────────────────────────────────────────── */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-white/5 border border-white/5">
            {[
              { value: "90%", label: "Report working 4x faster" },
              { value: "2x", label: "Better output quality" },
              { value: "800+", label: "Professionals trained" },
              { value: "4 wks", label: "From curious to capable" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center py-12 px-6 bg-brand-card hover:bg-brand-terminal transition-colors"
              >
                <p className="text-5xl md:text-6xl font-display font-bold text-white mb-3">{stat.value}</p>
                <p className="text-xs font-mono text-white/40 uppercase tracking-wider leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ──────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              The Transformation
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white">
              What changes for your team.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0 border border-white/5 overflow-hidden">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-card p-10 md:p-14 border-r border-white/5"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-8">Before</p>
              <div className="space-y-5">
                {BEFORE.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/15 shrink-0 mt-2" />
                    <p className="text-brand-text/40 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d0d1a] p-10 md:p-14 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-[60px] pointer-events-none" />
              <p className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-8">After</p>
              <div className="space-y-5 relative z-10">
                {AFTER.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-1" />
                    <p className="text-white leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works — 2 Phases ─────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight">
              Training built around <br />
              <span className="text-white/30">your business.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/8 bg-brand-card p-10 relative overflow-hidden group hover:border-white/15 transition-colors"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-primary/8 rounded-full blur-[50px]" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-brand-accent/60 tracking-widest uppercase mb-6 block">Phase 01 · Month 1</span>
                <h3 className="text-3xl font-display font-medium text-white mb-4">We Train Your Team.</h3>
                <p className="text-brand-text/60 leading-relaxed mb-8">
                  We start with a discovery call to understand your team's workflows and tools. Then we build a custom training programme around your actual work. Not generic AI demos.
                </p>
                <div className="space-y-3">
                  {[
                    "Custom curriculum for your industry and workflows",
                    "Live, hands-on workshops. Never recordings.",
                    "Your team builds real AI tools for your business",
                    "Covers every tool your team needs right now",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight size={14} className="text-brand-accent shrink-0 mt-1" />
                      <span className="text-sm text-brand-text/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="border border-brand-accent/15 bg-[#0d0d1a] p-10 relative overflow-hidden group hover:border-brand-accent/25 transition-colors"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/6 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-brand-accent/60 tracking-widest uppercase mb-6 block">Phase 02 · Ongoing</span>
                <h3 className="text-3xl font-display font-medium text-white mb-4">We Stay With You.</h3>
                <p className="text-brand-text/60 leading-relaxed mb-8">
                  AI moves fast. A small monthly retainer keeps your team ahead. We audit your workflows, introduce new tools, and help you build new AI processes as your business evolves.
                </p>
                <div className="space-y-3">
                  {[
                    "Monthly workflow audit and improvement session",
                    "Always-on support. Ask us anything, anytime.",
                    "First to know about new tools that matter to you",
                    "Continuous workflow enhancement as AI evolves",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ArrowRight size={14} className="text-brand-accent shrink-0 mt-1" />
                      <span className="text-sm text-brand-text/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Tools ───────────────────────────────────────────────────────── */}
      <section className="py-28 border-t border-white/5 bg-brand-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              The AI Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-3">
              We train your team on the tools<br className="hidden md:block" />
              <span className="text-white/40"> that are changing how work gets done.</span>
            </h2>
            <p className="text-brand-text/40 text-sm max-w-sm mx-auto">
              And we connect them to the tools your team already uses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Advanced AI */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 bg-brand-dark/60 p-8"
            >
              <p className="text-xs font-mono text-brand-accent/60 uppercase tracking-widest mb-6">Advanced AI Tools</p>
              <div className="flex flex-wrap gap-2">
                {AI_TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-white/10 hover:border-brand-accent/30 text-sm text-white/60 hover:text-white bg-brand-card rounded-sm transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Workflow integrations */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-white/5 bg-brand-dark/60 p-8"
            >
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-6">Connects With Your Existing Stack</p>
              <div className="flex flex-wrap gap-2">
                {WORKFLOW_TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 border border-white/8 hover:border-white/20 text-sm text-white/40 hover:text-white/70 bg-brand-card rounded-sm transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
                <span className="px-4 py-2 border border-dashed border-white/8 text-sm text-white/20 rounded-sm cursor-default">
                  + more
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                From Our Alumni
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                What individuals say. <br />
                <span className="text-white/30">Imagine this across your team.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-text/50 leading-relaxed"
            >
              800+ professionals trained individually. Enterprise programmes give your entire team the same transformation, built around your business.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-card border border-white/5 hover:border-white/10 p-8 flex flex-col justify-between transition-colors group"
              >
                <div>
                  <Quote className="text-brand-primary/20 w-8 h-8 mb-5 group-hover:text-brand-primary/40 transition-colors" />
                  <p className="text-brand-text/70 leading-relaxed mb-8 text-sm">"{review.text}"</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-white/30 font-mono uppercase mt-1 tracking-wider">{review.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder (Enterprise version) ────────────────────────────────── */}
      <section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="h-full min-h-[400px] bg-brand-card relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
                <img
                  src="/images/hari-prasad.webp"
                  alt="Hari Prasad"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-3xl font-display font-bold text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Hari Prasad</h3>
                  <p className="text-white font-mono text-xs tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Founder and Lead Instructor
                  </p>
                </div>
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                  <div className="w-12 h-[1px] bg-white/20" />
                  <div className="w-8 h-[1px] bg-white/20" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
            >
              <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-12 leading-[0.9]">
                Built AI Across Finance, <br />
                <span className="text-white/30">Sales, and Analytics.</span>
              </h2>

              <div className="space-y-6 text-lg text-brand-text/80 font-light leading-relaxed max-w-2xl">
                <p>
                  <span className="text-white font-medium">I don't teach what sounds good in a demo.</span> I teach what works when the stakes are real. Production systems, real teams, real outcomes.
                </p>
                <p>
                  At MyRealProduct, we understand your business first, then build training around it.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Experience</p>
                  <p className="text-white font-medium">5+ Years in AI</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Education</p>
                  <p className="text-white font-medium">Ivy League Grad</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Speaking</p>
                  <p className="text-white font-medium">TEDx Speaker</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Connect</p>
                  <a
                    href="https://www.linkedin.com/in/hariprasad20/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-brand-primary transition-colors inline-flex items-center gap-1"
                    onClick={handleLinkedInClick}
                  >
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/8 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-2xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-6 block">
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight mb-6">
              Ready to equip <br />
              <span className="text-white/30">your team?</span>
            </h2>
            <p className="text-brand-text/50 leading-relaxed mb-10">
              Tell us about your team. We'll send a custom proposal within 24 hours. No commitment, no hard sell.
            </p>

  
            <button
              className="h-14 px-12 text-sm font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_50px_-5px_rgba(255,255,255,0.2)] transition-all duration-300 mb-6"
              onClick={() => handleDiscoveryCallClick('cta')}
            >
              Book a Free Discovery Call
            </button>

            <p className="text-xs font-mono text-white/25 uppercase tracking-widest">
              or email{' '}
              <a href="mailto:contact@myrealproduct.com" className="text-white/40 hover:text-white transition-colors underline underline-offset-4">
                contact@myrealproduct.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xl font-bold font-display tracking-tight text-white">
              MyRealProduct
            </div>
            <div className="flex gap-8 text-sm text-brand-text/60">
              <a href="/" className="hover:text-white transition-colors">For Individuals</a>
              <a href="mailto:contact@myrealproduct.com" className="hover:text-white transition-colors">contact@myrealproduct.com</a>
            </div>
            <div className="text-sm text-brand-text/40">
              © 2026 MyRealProduct. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
