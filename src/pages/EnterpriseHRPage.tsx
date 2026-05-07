import { motion } from 'motion/react';
import { Quote, CheckCircle2, ArrowUpRight, Terminal, Users, Clock, Zap } from 'lucide-react';
import { useEffect } from 'react';
import Marquee from '../components/Marquee';
import Particles from '../components/Particles';
import TrustpilotReviews from '../components/TrustpilotReviews';
import PastSessions from '../components/PastSessions';
import Footer from '../components/Footer';
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

const HR_TOOLS = [
  "Workday", "Greenhouse", "BambooHR", "Lever", "LinkedIn Recruiter",
  "ADP", "Rippling", "Slack", "Notion", "Google Workspace",
];

const HR_USE_CASES = ["Talent Acquisition", "Resume Screening", "Employee Onboarding", "HR Compliance", "People Analytics"];

const BEFORE = [
  "Screening 500+ CVs manually for every open role",
  "Writing the same job description from scratch every time",
  "Onboarding decks copied and edited for every new hire",
  "Hours lost to compliance docs no one wants to write",
];

const AFTER = [
  "AI shortlists your top candidates in minutes",
  "Job descriptions written in your voice, instantly",
  "Onboarding automated and personalised per role",
  "Compliance drafts done before your first coffee",
];

const STEPS = [
  {
    number: "01",
    title: "Tell us what's slowing your HR team down",
    description: "Before the session, your team fills a short anonymous form. Screening bottlenecks, JD fatigue, onboarding admin, and we use all of it to build the agenda.",
  },
  {
    number: "02",
    title: "We run a 2–3 hour live session",
    description: "In person or virtual. Short AI fundamentals for non-technical people, then your HR team spends most of the time actually building tools for their real problems.",
  },
  {
    number: "03",
    title: "Your team goes back to work with working tools",
    description: "Not slides. Not theory. A CV screener, a JD generator, an onboarding assistant, built by your team and ready to use the next morning.",
  },
];

const AGENDA = [
  {
    time: "Before",
    label: "Problem collection",
    detail: "Your HR team submits their biggest challenges: screening bottlenecks, JD writing, onboarding admin. These become the session curriculum.",
  },
  {
    time: "~30 min",
    label: "AI fundamentals for HR",
    detail: "What AI can actually do in HR right now. No jargon, no code. Just what your team needs to know to get started.",
  },
  {
    time: "~90 min",
    label: "Build together",
    detail: "Everyone builds a custom AI tool for a real HR problem: a CV screener, a JD generator, an onboarding FAQ bot. We guide every step.",
  },
  {
    time: "End",
    label: "Demo + next steps",
    detail: "Each person shows what they built. You leave with working tools and a clear plan for putting them to use immediately.",
  },
];

export default function EnterpriseHRPage() {
  useEffect(() => {
    document.title = 'AI Happy Hour for HR Teams | MyRealProduct';
    trackSectionView('enterprise_hr_page');
    trackEvent('enterprise_hr_page_viewed', { page: '/enterprise/hr' });
    return () => {
      document.title = 'MyRealProduct | Build an End-to-End AI Product in 4 Weeks';
    };
  }, []);

  const handleBookSession = (location: string) => {
    trackEvent('enterprise_hr_book_session_clicked', { location, page: '/enterprise/hr' });
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('MeLd0l', { layout: 'modal', width: 500, hideTitle: true });
    }
  };

  const handleCustomProgramme = (location: string) => {
    trackEvent('enterprise_hr_custom_programme_clicked', { location, page: '/enterprise/hr' });
    if (typeof window !== 'undefined' && (window as any).Tally) {
      (window as any).Tally.openPopup('MeLd0l', { layout: 'modal', width: 500, hideTitle: true });
    }
  };

  const handleLinkedInClick = () => {
    trackExternalLink('https://www.linkedin.com/in/hariprasad20/', 'enterprise_hr_founder_linkedin');
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
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden sm:flex items-center h-10 px-4 text-xs font-medium tracking-widest uppercase text-brand-text/60 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-all duration-300"
            >
              For Individuals
            </a>
            <button
              className="h-10 px-4 lg:px-6 text-xs font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300 whitespace-nowrap"
              onClick={() => handleBookSession('navbar')}
            >
              <span className="hidden sm:inline">Book Your HR Team's Session</span>
              <span className="sm:hidden">Book Now</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-44 pb-28 relative overflow-hidden bg-brand-dark">
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

        <div className="absolute top-32 left-10 hidden lg:flex flex-col gap-4 opacity-30 z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
            <Users size={12} />
            <span>FOR_HR_TEAMS</span>
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>
        <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-4 items-end opacity-30 z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
            <span>HANDS_ON_LEARNING</span>
            <Zap size={12} />
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-2">
                <Users size={12} className="text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  For HR Teams
                </span>
              </div>
              <div className="flex items-center gap-2 border border-white/10 rounded-sm px-4 py-2">
                <Clock size={12} className="text-brand-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                  2–3 Hours · In Person or Virtual
                </span>
              </div>
            </div>

            <div className="relative inline-block mb-6">
              <span className="absolute -left-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'{'}</span>
              <span className="absolute -right-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'}'}</span>
              <h1 className="text-6xl md:text-8xl font-display font-medium text-white leading-[1] tracking-tight">
                Your HR Team's<br />
                <span className="text-gradient">AI Happy Hour.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-brand-text/60 max-w-2xl mx-auto leading-relaxed mb-12">
              We show up. Your HR team builds AI tools for screening, JDs, onboarding, and compliance, using tools they already have. No prior experience needed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="h-14 px-12 text-sm font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_40px_-5px_rgba(255,255,255,0.25)] transition-all duration-300"
                onClick={() => handleBookSession('hero')}
              >
                Book Your HR Team's Session
              </button>
              <button
                className="h-14 px-8 text-sm font-medium tracking-widest uppercase text-white/50 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-all duration-300"
                onClick={() => handleCustomProgramme('hero')}
              >
                Need a Custom Plan?
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── HR use cases strip ──────────────────────────────────────────── */}
      <div className="border-y border-white/5 py-5 bg-brand-card overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8">
            <span className="text-xs font-mono text-white/30 uppercase tracking-widest shrink-0">
              HR challenges we solve
            </span>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            {HR_USE_CASES.map((uc) => (
              <span key={uc} className="text-sm font-medium text-white/50 hover:text-white transition-colors cursor-default">
                {uc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee ─────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── Past Sessions ───────────────────────────────────────────────── */}
      <PastSessions />

      {/* ── Session Agenda ──────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden bg-brand-card">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-6 block">
                The Session
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight mb-6">
                What actually happens<br />
                <span className="text-white/30">in those 2–3 hours.</span>
              </h2>
              <p className="text-brand-text/50 leading-relaxed">
                Think of it as a guided workshop sprint built for HR. We sit together, cover the essentials, then pick a real challenge from the room: a CV screener, a JD writer, an onboarding bot, and build it end to end, together, before anyone leaves.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {AGENDA.map((item, i) => (
                <div key={i} className="flex gap-6 pb-8 last:pb-0 relative">
                  {i < AGENDA.length - 1 && (
                    <div className="absolute left-[3.5rem] top-10 w-px h-full bg-white/5" />
                  )}
                  <div className="shrink-0 w-20 text-right pt-0.5">
                    <span className="text-xs font-mono text-brand-accent/50 uppercase tracking-widest">{item.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium mb-1">{item.label}</p>
                    <p className="text-brand-text/50 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Before / After ──────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              The HR Transformation
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white">
              What changes for your HR team.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0 border border-white/5 overflow-hidden">
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

      {/* ── No New Software ─────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5 bg-brand-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              No New Software
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
              We work with tools<br />
              <span className="text-white/30">your team already has.</span>
            </h2>
            <p className="text-brand-text/50 leading-relaxed max-w-xl mx-auto">
              ChatGPT, Gemini, Google Workspace, Microsoft 365. If your team already has access, we build the session around those. No new licences, no IT requests, no friction.
            </p>
          </motion.div>
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
                <span className="text-white/30">Imagine this across your HR team.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-text/50 leading-relaxed"
            >
              800+ professionals trained individually. Enterprise programmes give your entire HR team the same transformation, built around your workflows.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10"
          >
            <TrustpilotReviews />
          </motion.div>
        </div>
      </section>


      {/* ── Founder ─────────────────────────────────────────────────────── */}
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
                Built AI Across HR, <br />
                <span className="text-white/30">Finance, and Operations.</span>
              </h2>

              <div className="space-y-6 text-lg text-brand-text/80 font-light leading-relaxed max-w-2xl">
                <p>
                  <span className="text-white font-medium">I don't teach what sounds good in a demo.</span> I teach what works when the stakes are real. Production systems, real teams, real outcomes.
                </p>
                <p>
                  At MyRealProduct, we understand your HR workflows first, then build the session around them.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
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
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/hariprasad20/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-brand-primary transition-colors inline-flex items-center gap-1"
                    onClick={handleLinkedInClick}
                  >
                    52K+ Followers <ArrowUpRight size={14} />
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
              Let's Go
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight mb-6">
              Ready to book your<br />
              <span className="text-white/30">HR team's session?</span>
            </h2>
            <p className="text-brand-text/50 leading-relaxed mb-10">
              Tell us about your team. We'll confirm your session and send a custom plan within 24 hours. No commitment. No hard sell.
            </p>

            <button
              className="h-14 px-12 text-sm font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_50px_-5px_rgba(255,255,255,0.2)] transition-all duration-300 mb-6"
              onClick={() => handleBookSession('cta')}
            >
              Book Your HR Team's Session
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

      <Footer hideCta />
    </div>
  );
}
