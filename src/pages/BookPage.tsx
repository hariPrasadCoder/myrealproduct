import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Play,
  Wrench,
  FileText,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Lock,
  Mail,
  Linkedin,
  ExternalLink,
  Terminal,
  Zap,
  Code2,
  Cpu,
  Globe,
  BarChart3,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BOOK_CONTENT, WEEK_INTROS } from '../data/bookContent';
import { identifyUser, trackEvent } from '../lib/posthog';

const STORAGE_KEY = 'mrp_book_email_v1';
const TOTAL_DAYS = 31;

const WEEK_COLORS: Record<number, string> = {
  1: 'from-brand-primary to-brand-secondary',
  2: 'from-violet-600 to-purple-500',
  3: 'from-pink-600 to-rose-500',
  4: 'from-emerald-600 to-teal-500',
  5: 'from-amber-500 to-orange-500',
};

const WEEK_BADGE_COLORS: Record<number, string> = {
  1: 'bg-brand-primary/20 text-brand-accent border-brand-primary/30',
  2: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  3: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  4: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  5: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

const RESOURCE_ICONS: Record<string, typeof BookOpen> = {
  article: BookOpen,
  video: Play,
  tool: Wrench,
  docs: FileText,
};

const RESOURCE_COLORS: Record<string, string> = {
  article: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  video: 'text-red-400 bg-red-400/10 border-red-400/20',
  tool: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  docs: 'text-green-400 bg-green-400/10 border-green-400/20',
};

// ─── Landing Gate ────────────────────────────────────────────────────────────

function BookLandingGate({ onAccess }: { onAccess: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Enter a valid email address.');
      return;
    }
    setSubmitting(true);
    setError('');

    // Store in localStorage
    localStorage.setItem(STORAGE_KEY, trimmed);

    // Identify in PostHog
    identifyUser(trimmed, { source: 'book_gate', page: '/book' });
    trackEvent('book_email_submitted', { email: trimmed });

    setTimeout(() => onAccess(trimmed), 400);
  };

  const BENEFITS = [
    {
      icon: Cpu,
      title: 'Foundations that stick',
      desc: 'LLMs, embeddings, prompts — explained for engineers who want to build, not just chat.',
    },
    {
      icon: Code2,
      title: 'Build something every day',
      desc: 'Each day has a concrete task. By Day 7 you have a deployed app. By Day 31 you have a portfolio.',
    },
    {
      icon: Zap,
      title: 'Production patterns',
      desc: 'RAG, agents, evaluation, monitoring, guardrails — the things companies actually pay for.',
    },
    {
      icon: BarChart3,
      title: 'Curated resources',
      desc: '150+ hand-picked articles, videos, and tools. No filler. Every link earns its place.',
    },
  ];

  const WEEKS = [
    { week: 1, label: 'Week 1', title: 'Build Before You Feel Ready', days: 'Days 1–7', color: 'border-brand-primary/40 bg-brand-primary/5' },
    { week: 2, label: 'Week 2', title: 'Retrieval Is Where Engineers Are Made', days: 'Days 8–14', color: 'border-violet-500/40 bg-violet-500/5' },
    { week: 3, label: 'Week 3', title: 'Agents and Decision Systems', days: 'Days 15–21', color: 'border-pink-500/40 bg-pink-500/5' },
    { week: 4, label: 'Week 4', title: 'Production Thinking', days: 'Days 22–27', color: 'border-emerald-500/40 bg-emerald-500/5' },
    { week: 5, label: 'Final Days', title: 'Ship Something Real', days: 'Days 28–31', color: 'border-amber-500/40 bg-amber-500/5' },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="text-xl font-bold font-display tracking-tight text-white hover:text-brand-accent transition-colors">
            MyRealProduct
          </a>
          <a
            href="/"
            className="text-sm text-brand-text/60 hover:text-white transition-colors"
          >
            ← Back to main site
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-accent text-xs font-mono tracking-widest uppercase mb-8"
          >
            <BookOpen size={12} />
            Free Ebook — 31 Days
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-semibold leading-[1.05] mb-6 tracking-tight"
          >
            31 Day{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-accent to-white">
              AI Engineer
            </span>
            <br />
            Challenge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-text/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Go from <span className="text-white font-medium">zero to building production AI systems</span> in 31 days.
            One concept, one task, curated resources — every single day.
          </motion.p>

          {/* Email Gate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-md mx-auto mb-6"
          >
            <div className="bg-brand-card/80 border border-white/10 rounded-sm p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Lock size={14} className="text-brand-accent" />
                <span className="text-sm font-mono text-brand-text/60 uppercase tracking-widest">
                  Free access — enter your email
                </span>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text/40" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }}
                    className="w-full bg-brand-dark border border-white/10 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-brand-text/30 focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-xs font-mono">{error}</p>
                )}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 bg-white text-black hover:bg-brand-accent hover:text-black font-medium tracking-widest uppercase text-sm rounded-sm transition-all"
                >
                  {submitting ? 'Opening book...' : 'Get Free Access →'}
                </Button>
              </form>
              <p className="text-xs text-brand-text/30 text-center mt-3">
                No spam. Just the ebook. Stored locally in your browser.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-medium text-center mb-12"
          >
            What's inside
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-sm p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-primary/20 flex items-center justify-center shrink-0">
                  <b.icon size={18} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{b.title}</h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weeks Overview */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-medium text-center mb-12"
          >
            31 days of deliberate progress
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {WEEKS.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`border rounded-sm p-4 ${w.color}`}
              >
                <p className="text-xs font-mono text-brand-text/50 uppercase tracking-widest mb-1">{w.days}</p>
                <p className="text-xs font-bold text-brand-text/80 mb-2">{w.label}</p>
                <p className="text-sm font-medium text-white leading-snug">{w.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-sm p-8 md:p-12"
          >
            <h2 className="text-2xl font-display font-medium mb-6">This is for you if...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left mb-8">
              {[
                'You know Python basics and want to build real AI systems',
                'You have tried tutorials but never shipped anything real',
                'You want to go beyond chatbots to agents and RAG',
                'You want to understand production AI, not just demos',
                "You're tired of learning without building",
                'You want a structured path, not random YouTube videos',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={14} className="text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-brand-text/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Button
              onClick={() => document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-12 px-8 bg-white text-black hover:bg-brand-accent hover:text-black font-medium tracking-widest uppercase text-sm rounded-sm"
            >
              Get Free Access →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-lg text-white">MyRealProduct</div>
          <p className="text-sm text-brand-text/40">© 2026 MyRealProduct. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// ─── Book Reader ─────────────────────────────────────────────────────────────

function BookReader({ email }: { email: string }) {
  const [currentPage, setCurrentPage] = useState(0); // 0 = day 1, ..., 30 = day 31, 31 = final CTA
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [showNav, setShowNav] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const isLastPage = currentPage === TOTAL_DAYS;
  const day = isLastPage ? null : BOOK_CONTENT[currentPage];
  const progress = ((currentPage + 1) / (TOTAL_DAYS + 1)) * 100;

  const goTo = useCallback((idx: number, dir: 'next' | 'prev') => {
    setDirection(dir);
    setCurrentPage(idx);
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('book_page_viewed', { day: idx + 1, direction: dir });
  }, []);

  const goNext = useCallback(() => {
    if (currentPage < TOTAL_DAYS) goTo(currentPage + 1, 'next');
  }, [currentPage, goTo]);

  const goPrev = useCallback(() => {
    if (currentPage > 0) goTo(currentPage - 1, 'prev');
  }, [currentPage, goTo]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  // Update page title
  useEffect(() => {
    document.title = day
      ? `Day ${day.day}: ${day.title} — 31 Day AI Engineer Challenge`
      : '31 Day AI Engineer Challenge — Complete!';
  }, [day]);

  const weekLabel =
    day?.week === 5
      ? 'Final Days'
      : day?.week
      ? `Week ${day.week}`
      : '';

  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <div className="noise-overlay" />

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Logo */}
          <a href="/" className="font-display font-bold text-white text-sm shrink-0 hover:text-brand-accent transition-colors">
            MyRealProduct
          </a>

          {/* Progress bar */}
          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="text-xs font-mono text-brand-text/40 shrink-0">
              {isLastPage ? '31/31' : `${currentPage + 1}/31`}
            </span>
          </div>

          {/* Day/Week indicator */}
          {day && (
            <div className={`hidden md:flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${WEEK_BADGE_COLORS[day.week]}`}>
              <span>{weekLabel}</span>
              <span className="opacity-50">·</span>
              <span>Day {day.day}</span>
            </div>
          )}

          {/* Day picker toggle */}
          <button
            onClick={() => setShowNav(v => !v)}
            className="text-brand-text/40 hover:text-white transition-colors"
            title="Jump to day"
          >
            <Terminal size={16} />
          </button>
        </div>

        {/* Day picker dropdown */}
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="border-t border-white/5 bg-brand-dark/95 backdrop-blur-xl px-4 py-4"
            >
              <div className="max-w-5xl mx-auto">
                <p className="text-xs font-mono text-brand-text/40 uppercase tracking-widest mb-3">Jump to day</p>
                <div className="flex flex-wrap gap-2">
                  {BOOK_CONTENT.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => { goTo(i, i > currentPage ? 'next' : 'prev'); setShowNav(false); }}
                      className={`w-8 h-8 text-xs rounded-sm border transition-all ${
                        i === currentPage
                          ? 'bg-brand-primary border-brand-primary text-white'
                          : i < currentPage
                          ? 'bg-white/5 border-white/10 text-white/40'
                          : 'border-white/10 text-brand-text/40 hover:border-brand-accent/50 hover:text-white'
                      }`}
                    >
                      {d.day}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Main content ── */}
      <main ref={contentRef} className="flex-1 overflow-y-auto pt-20 pb-24">
        <AnimatePresence mode="wait">
          {!isLastPage && day ? (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: direction === 'next' ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 'next' ? -40 : 40 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="max-w-4xl mx-auto px-4 py-10"
            >
              {/* Week intro banner (first day of each week) */}
              {([1, 8, 15, 22, 28].includes(day.day)) && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-10 rounded-sm p-6 md:p-8 bg-gradient-to-r ${WEEK_COLORS[day.week]} bg-opacity-10 border border-white/10 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
                  <div className="relative z-10">
                    <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-2">
                      {day.week === 5 ? 'Final Days' : `Week ${day.week}`} — Starting Now
                    </p>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
                      {WEEK_INTROS[day.week].tagline}
                    </h2>
                    <p className="text-white/70 leading-relaxed max-w-2xl">
                      {WEEK_INTROS[day.week].opening}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Day header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono ${WEEK_BADGE_COLORS[day.week]}`}>
                    {day.week === 5 ? 'Final Days' : `Week ${day.week}`}
                  </span>
                  <span className="text-xs font-mono text-brand-text/30 uppercase tracking-widest">
                    Day {String(day.day).padStart(2, '0')} of {TOTAL_DAYS}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-semibold leading-[1.05] mb-3 text-white">
                  {day.title}
                </h1>
                <p className="text-lg text-brand-text/60 font-light">{day.subtitle}</p>
              </div>

              {/* Concept */}
              <div className="mb-8 border-l-2 border-brand-primary/40 pl-6">
                <p className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-3">The Concept</p>
                <p className="text-brand-text/80 leading-relaxed text-[1.0625rem]">{day.concept}</p>
              </div>

              {/* Key Topics */}
              <div className="mb-8">
                <p className="text-xs font-mono text-brand-text/40 uppercase tracking-widest mb-4">Key Topics</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {day.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0 mt-2" />
                      <span className="text-brand-text/70 text-sm leading-relaxed">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Challenge */}
              <div className="mb-10">
                <div className="border border-brand-accent/20 bg-brand-accent/5 rounded-sm p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={14} className="text-brand-accent" />
                    <p className="text-xs font-mono text-brand-accent uppercase tracking-widest">Today's Challenge</p>
                  </div>
                  <p className="text-white/90 leading-relaxed">{day.todayTask}</p>
                </div>
              </div>

              {/* Resources */}
              <div className="mb-10">
                <p className="text-xs font-mono text-brand-text/40 uppercase tracking-widest mb-4">Resources</p>
                <div className="grid grid-cols-1 gap-3">
                  {day.resources.map((r, i) => {
                    const Icon = RESOURCE_ICONS[r.type] ?? BookOpen;
                    const colorClass = RESOURCE_COLORS[r.type] ?? RESOURCE_COLORS.article;
                    return (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('book_resource_clicked', { day: day.day, resource_title: r.title, resource_type: r.type, url: r.url })}
                        className="group flex items-start gap-4 p-4 border border-white/5 bg-brand-card/50 rounded-sm hover:border-white/20 hover:bg-brand-card transition-all"
                      >
                        <div className={`w-8 h-8 rounded-sm border flex items-center justify-center shrink-0 ${colorClass}`}>
                          <Icon size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-white text-sm font-medium group-hover:text-brand-accent transition-colors leading-snug">
                              {r.title}
                            </p>
                            <ExternalLink size={12} className="text-brand-text/20 group-hover:text-brand-text/60 transition-colors shrink-0 mt-0.5" />
                          </div>
                          <p className="text-brand-text/50 text-xs mt-1 leading-relaxed">{r.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Week-end quote */}
              {day.weekEndQuote && (
                <div className="mb-10 py-8 border-t border-b border-white/5 text-center">
                  <p className="text-xl md:text-2xl font-display font-light text-white/60 italic leading-relaxed">
                    "{day.weekEndQuote}"
                  </p>
                </div>
              )}

              {/* MRP Subtle CTA */}
              <div className="border border-white/5 bg-brand-card/30 rounded-sm p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-mono text-brand-text/30 uppercase tracking-widest mb-1">MyRealProduct</p>
                  <p className="text-sm text-brand-text/60 leading-relaxed">
                    31 days is a great challenge. But if you want to build a complete AI product with a team, mentors, live sessions, and a certificate — check out our cohort.
                  </p>
                </div>
                <a
                  href="/"
                  className="shrink-0 flex items-center gap-2 px-4 py-2 border border-white/10 rounded-sm text-xs text-brand-text/60 hover:text-white hover:border-brand-accent/40 transition-all font-mono"
                  onClick={() => trackEvent('book_mrp_cta_clicked', { day: day.day })}
                >
                  Learn more <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ) : (
            /* ── Final CTA Page ── */
            <motion.div
              key="final"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto px-4 py-16 text-center"
            >
              {/* Completion badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-10">
                <Check size={12} />
                31 Days Complete
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6 leading-tight">
                Now you don't just say{' '}
                <span className="text-brand-text/40">"I'm learning AI."</span>
              </h1>
              <p className="text-3xl md:text-4xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-accent to-white mb-16">
                You say "I built this." And you show it.
              </p>

              {/* LinkedIn Challenge */}
              <div className="max-w-2xl mx-auto mb-16">
                <div className="border border-blue-500/30 bg-blue-500/5 rounded-sm p-8">
                  <Linkedin size={28} className="text-blue-400 mx-auto mb-4" />
                  <h2 className="text-xl font-display font-semibold text-white mb-3">
                    Share your win on LinkedIn
                  </h2>
                  <p className="text-brand-text/60 text-sm leading-relaxed mb-6">
                    Take a screenshot of your deployed project. Post it on LinkedIn.
                    Tag <span className="text-white font-medium">@MyRealProduct</span> and{' '}
                    <span className="text-white font-medium">Hari Prasad Ranganathan</span>.
                    Use <span className="text-brand-accent font-mono">#MyRealProduct</span> and{' '}
                    <span className="text-brand-accent font-mono">#31DayAIChallenge</span>.
                  </p>
                  <p className="text-brand-text/40 text-sm italic">
                    We read every tag. We reply to every builder who ships.
                  </p>
                </div>
              </div>

              {/* What next */}
              <div className="max-w-2xl mx-auto mb-16">
                <p className="text-brand-text/40 text-xs font-mono uppercase tracking-widest mb-6">What's next</p>
                <div className="border border-white/10 rounded-sm p-8 text-left">
                  <h2 className="text-2xl font-display font-semibold text-white mb-3">
                    31 days is hard solo. Imagine doing it with a team.
                  </h2>
                  <p className="text-brand-text/60 leading-relaxed mb-6">
                    MyRealProduct is a 4-week cohort where engineers build end-to-end AI products — with live sessions,
                    mentorship, peer teams, and a real product at the end. Not just a challenge.
                    A transformation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {[
                      'Live weekly sessions with industry engineers',
                      'Real product, not portfolio demos',
                      'Small teams of 4–6 engineers',
                      '"AI Product Builder" certification',
                      'Lifetime access to curriculum',
                      '2,000+ engineer community',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check size={14} className="text-brand-primary shrink-0" />
                        <span className="text-brand-text/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/"
                      onClick={() => trackEvent('book_final_cta_clicked', { type: 'apply' })}
                      className="flex-1 flex items-center justify-center gap-2 h-12 bg-white text-black rounded-sm font-medium text-sm tracking-widest uppercase hover:bg-brand-accent transition-all"
                    >
                      Apply to the Cohort <ArrowRight size={14} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hariprasadranganathan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('book_final_cta_clicked', { type: 'linkedin' })}
                      className="flex items-center justify-center gap-2 h-12 px-6 border border-white/10 rounded-sm text-white text-sm hover:border-brand-accent/50 transition-all"
                    >
                      <Linkedin size={16} />
                      Connect with Hari
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-brand-text/30 text-sm font-mono">
                {email && `Sent to: ${email} — but the book lives here in your browser.`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── Bottom Navigation ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/90 backdrop-blur-xl border-t border-white/5 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <Button
            onClick={goPrev}
            disabled={currentPage === 0}
            variant="outline"
            className="flex items-center gap-2 h-10 px-5 text-sm border-white/10 hover:border-white/30 disabled:opacity-20"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          {/* Page dots (compact) */}
          <div className="flex items-center gap-1.5 overflow-hidden max-w-[200px] sm:max-w-xs">
            {Array.from({ length: TOTAL_DAYS + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentPage ? 'next' : 'prev')}
                className={`shrink-0 rounded-full transition-all ${
                  i === currentPage
                    ? 'w-4 h-1.5 bg-brand-accent'
                    : i < currentPage
                    ? 'w-1.5 h-1.5 bg-white/20'
                    : 'w-1.5 h-1.5 bg-white/8'
                }`}
                title={i < TOTAL_DAYS ? `Day ${i + 1}` : 'Completion'}
              />
            ))}
          </div>

          <Button
            onClick={goNext}
            disabled={currentPage === TOTAL_DAYS}
            className="flex items-center gap-2 h-10 px-5 text-sm bg-white text-black hover:bg-brand-accent hover:text-black rounded-sm disabled:opacity-20"
          >
            <span className="hidden sm:inline">
              {currentPage === TOTAL_DAYS - 1 ? 'Finish' : 'Next'}
            </span>
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Main BookPage ────────────────────────────────────────────────────────────

export default function BookPage() {
  const [accessEmail, setAccessEmail] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    document.title = '31 Day AI Engineer Challenge — Free Ebook by MyRealProduct';
    trackEvent('book_page_visited', { has_access: !!localStorage.getItem(STORAGE_KEY) });
  }, []);

  const handleAccess = (email: string) => {
    setAccessEmail(email);
  };

  if (!accessEmail) {
    return <BookLandingGate onAccess={handleAccess} />;
  }

  return <BookReader email={accessEmail} />;
}
