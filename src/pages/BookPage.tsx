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
  Linkedin,
  ExternalLink,
  LayoutList,
  Share2,
  Copy,
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

// ─── 3D Book Mockup ──────────────────────────────────────────────────────────

function Book3D() {
  const [hovered, setHovered] = useState(false);

  const COVER_W = 300;
  const COVER_H = 420;
  const SPINE_W = 56;

  return (
    <div style={{ perspective: '1100px' }} className="flex items-center justify-center py-10">
      <motion.div
        className="relative cursor-pointer select-none"
        style={{ width: COVER_W, height: COVER_H, transformStyle: 'preserve-3d' }}
        animate={
          hovered
            ? {
                rotateY: [-22, -14, -30, -18, -26, -22],
                rotateX: [4, 9, 1, 8, 3, 4],
                y: [0, -14, -6, -18, -9, -14, 0],
              }
            : { rotateY: -22, rotateX: 4, y: 0 }
        }
        transition={
          hovered
            ? { duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }
            : { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Spine */}
        <div
          className="absolute top-1 bottom-1 flex flex-col items-center justify-between py-4"
          style={{
            left: -SPINE_W,
            width: SPINE_W,
            background: 'linear-gradient(to right, #030306, #060610, #0b0b18)',
            borderRadius: '3px 0 0 3px',
            boxShadow: '-4px 4px 20px rgba(0,0,0,0.7)',
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
          <span style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: 7,
            fontFamily: 'monospace',
            color: 'rgba(255,255,255,0.18)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            31 day AI Engineer Challenge
          </span>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        </div>

        {/* Front cover */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: 'linear-gradient(150deg, #0f0f20 0%, #080812 55%, #050510 100%)',
            borderRadius: '0 3px 3px 0',
            boxShadow: hovered
              ? '8px 16px 48px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(69,61,200,0.15)'
              : '5px 10px 32px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          {/* Corner glow */}
          <div style={{
            position: 'absolute', top: -30, left: -30, width: 140, height: 140, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(69,61,200,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'absolute', inset: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Top label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ height: 1, width: 22, background: 'rgba(130,122,255,0.4)' }} />
              <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>MRP</span>
            </div>

            {/* Title */}
            <div>
              <p style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(130,122,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 16 }}>
                31-Day Program
              </p>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: 16, fontSize: 24 }}>
                31 day{' '}
                <span style={{ background: 'linear-gradient(to right, #827AFF, #5E55E5, #c4c0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AI Engineer
                </span>
                <br />
                Challenge
              </h2>
              <div style={{ height: 3, width: 44, background: '#453DC8', borderRadius: 4 }} />
            </div>

            {/* Bottom */}
            <p style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
              MyRealProduct
            </p>
          </div>
        </div>

        {/* Page stack (right edge) */}
        <div
          className="absolute top-1 bottom-1"
          style={{
            right: -7,
            width: 7,
            borderRadius: '0 2px 2px 0',
            background: 'repeating-linear-gradient(90deg, #1c1c28 0px, #1c1c28 1px, #131320 1px, #131320 3px)',
          }}
        />
      </motion.div>
    </div>
  );
}

// ─── Landing Gate ────────────────────────────────────────────────────────────

function BookLandingGate({ onAccess }: { onAccess: (email: string) => void }) {
  const iframeLoadCount = useRef(0);
  const emailRef = useRef('subscriber');
  const didNavigate = useRef(false);

  const handleSubmitComplete = useCallback(() => {
    if (didNavigate.current) return;
    didNavigate.current = true;
    const email = emailRef.current;
    localStorage.setItem(STORAGE_KEY, email);
    identifyUser(email, { source: 'book_gate_tally', page: '/book' });
    trackEvent('book_email_submitted', { email });
    onAccess(email);
  }, [onAccess]);

  // Iframe load counter — first load = form ready, second load = thank-you page = submitted
  const handleIframeLoad = useCallback(() => {
    iframeLoadCount.current += 1;
    if (iframeLoadCount.current >= 2) {
      handleSubmitComplete();
    }
  }, [handleSubmitComplete]);

  useEffect(() => {
    // Load Tally embed script
    const TALLY_SRC = 'https://tally.so/widgets/embed.js';
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(el => {
          (el as HTMLIFrameElement).src = (el as HTMLElement & { dataset: DOMStringMap }).dataset.tallySrc ?? '';
        });
      }
    };
    if (!document.querySelector(`script[src="${TALLY_SRC}"]`)) {
      const s = document.createElement('script');
      s.src = TALLY_SRC;
      s.onload = loadEmbeds;
      s.onerror = loadEmbeds;
      document.body.appendChild(s);
    } else {
      loadEmbeds();
    }

    // Also try postMessage to capture the submitted email
    const handleMessage = (e: MessageEvent) => {
      let data = e.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch { return; }
      }
      if (data?.type === 'TallyFormSubmitted') {
        const fields: { type: string; label: string; value: unknown }[] = data?.data?.fields ?? [];
        const emailField = fields.find(
          f => f.type === 'INPUT_EMAIL' || String(f.label ?? '').toLowerCase().includes('email')
        );
        if (emailField?.value) emailRef.current = String(emailField.value);
        handleSubmitComplete();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleSubmitComplete]);

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
      <section className="relative pt-32 pb-16 px-4 overflow-hidden" id="hero">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="bg-grid-pattern absolute inset-0 opacity-30" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ── Left: text + form ── */}
            <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
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
                className="text-5xl md:text-6xl font-display font-semibold leading-[1.05] mb-6 tracking-tight"
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
                className="text-lg text-brand-text/70 mb-10 leading-relaxed"
              >
                Go from <span className="text-white font-medium">zero to building production AI systems</span> in 31 days.
                One concept, one task, curated resources — every single day.
              </motion.p>

              {/* Tally Email Gate */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                id="email-gate"
              >
                <div className="bg-brand-card/80 border border-white/10 rounded-sm p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Lock size={14} className="text-brand-accent" />
                    <span className="text-sm font-mono text-brand-text/60 uppercase tracking-widest">
                      Free access — enter your email
                    </span>
                  </div>
                  <iframe
                    data-tally-src="https://tally.so/embed/4428Gd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                    loading="lazy"
                    width="100%"
                    height="177"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="MyRealProduct Book"
                    onLoad={handleIframeLoad}
                  />
                  <p className="text-xs text-brand-text/30 text-center mt-1">
                    No spam. Just the ebook. Stored locally in your browser.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── Right: 3D Book ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex-1 flex items-center justify-center lg:justify-end"
            >
              <Book3D />
            </motion.div>

          </div>
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

      {/* Book GIF */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-sm overflow-hidden border border-white/8"
          >
            <img
              src="/images/Book.gif"
              alt="31 Day AI Engineer Challenge preview"
              className="w-full h-auto"
            />
          </motion.div>
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
              onClick={() => document.getElementById('email-gate')?.scrollIntoView({ behavior: 'smooth' })}
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

// ─── Book Cover ───────────────────────────────────────────────────────────────

function CoverPage() {
  return (
    <div
      className="h-full flex flex-col p-10 select-none relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #0f0f20 0%, #080812 55%, #050510 100%)', minHeight: '100%' }}
    >
      {/* Corner glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(69,61,200,0.15) 0%, transparent 65%)' }} />

      {/* Top label */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="h-px w-6 bg-brand-primary/50" />
        <span className="text-[9px] font-mono text-white/25 uppercase tracking-[0.35em]">MyRealProduct</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 py-10">
        <p className="text-[10px] font-mono text-brand-accent/60 uppercase tracking-[0.3em] mb-6">
          31-Day Program
        </p>
        <h1
          className="font-display font-bold text-white leading-[1.0] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 4.5rem)' }}
        >
          31 day{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-white">
            AI Engineer
          </span>
          {' '}Challenge
        </h1>
        <div className="flex items-center gap-2 mb-7">
          <div className="h-[2px] w-10 bg-brand-primary rounded-full" />
          <div className="h-px w-16 bg-brand-primary/25 rounded-full" />
        </div>
        <p className="text-brand-text/45 text-sm font-light leading-loose max-w-xs">
          From Zero to Production AI Systems.
          <br />
          One concept. One task. Every day.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="flex items-end justify-between pt-6 border-t border-white/5 relative z-10">
        <div>
          <p className="text-[9px] font-mono text-white/15 uppercase tracking-widest mb-1">Free Ebook</p>
          <p className="text-[10px] text-white/20 font-mono">31 Days · 150+ Resources</p>
        </div>
        <p className="font-display font-semibold text-white/20 text-base tracking-wide">MRP</p>
      </div>
    </div>
  );
}

// ─── Page flip variants ────────────────────────────────────────────────────────

const pageVariants = {
  enter: (dir: 'next' | 'prev') => ({
    rotateY: dir === 'next' ? 18 : -18,
    x: dir === 'next' ? '5%' : '-5%',
    opacity: 0,
    scale: 0.97,
  }),
  center: { rotateY: 0, x: 0, opacity: 1, scale: 1 },
  exit: (dir: 'next' | 'prev') => ({
    rotateY: dir === 'next' ? -18 : 18,
    x: dir === 'next' ? '-5%' : '5%',
    opacity: 0,
    scale: 0.97,
  }),
};

const pageTransition = { duration: 0.38, ease: [0.4, 0, 0.2, 1] };

// ─── Book Reader ─────────────────────────────────────────────────────────────

function BookReader({ email }: { email: string }) {
  const [currentPage, setCurrentPage] = useState(-1); // -1 = cover, 0-30 = days, 31 = final CTA
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [showNav, setShowNav] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const BOOK_URL = 'https://myrealproduct.com/book';
  const SHARE_TEXT = 'Check out this free ebook: go from zero to building production AI systems in 31 days.';

  const handleCopyLink = useCallback(async () => {
    await navigator.clipboard.writeText(BOOK_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const isCover = currentPage === -1;
  const isLastPage = currentPage === TOTAL_DAYS;
  const day = (!isCover && !isLastPage) ? BOOK_CONTENT[currentPage] : null;
  const progress = isCover ? 0 : ((currentPage + 1) / (TOTAL_DAYS + 1)) * 100;

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
    if (currentPage > -1) goTo(currentPage - 1, 'prev');
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
    if (isCover) {
      document.title = '31 Day AI Engineer Challenge — Free Ebook';
    } else if (day) {
      document.title = `Day ${day.day}: ${day.title} — 31 Day AI Engineer Challenge`;
    } else {
      document.title = '31 Day AI Engineer Challenge — Complete!';
    }
  }, [day, isCover]);

  const weekLabel =
    day?.week === 5
      ? 'Final Days'
      : day?.week
      ? `Week ${day.week}`
      : '';

  return (
    // ── Desk ──
    <div className="min-h-screen bg-[#020205] text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="noise-overlay" />

      {/* Subtle desk glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(69,61,200,0.06),transparent)]" />

      {/* ── Book wrapper ── */}
      <div className="relative w-full" style={{ maxWidth: '860px' }}>

        {/* Hardcover top board */}
        <div className="absolute left-0 right-[-9px] -top-[5px] h-[5px] rounded-t-[2px]"
          style={{ background: 'linear-gradient(to bottom, #1e1e30, #111120)' }} />
        {/* Hardcover bottom board */}
        <div className="absolute left-0 right-[-9px] -bottom-[5px] h-[5px] rounded-b-[2px]"
          style={{ background: 'linear-gradient(to top, #1e1e30, #111120)' }} />

        {/* Page-stack depth (right edge) */}
        <div className="absolute right-[-9px] top-[3px] bottom-[3px] w-[7px] rounded-r-[3px] bg-[#191926]" />
        <div className="absolute right-[-5px] top-[1px] bottom-[1px] w-[4px] rounded-r-[2px] bg-[#141422]" />

        {/* ── Book ── */}
        <div
          className="relative flex rounded-[3px] overflow-hidden"
          style={{
            height: 'min(calc(100vh - 48px), 900px)',
            minHeight: '560px',
            boxShadow: '0 32px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          {/* Spine */}
          <div className="w-10 shrink-0 flex flex-col items-center justify-between py-6 select-none relative"
            style={{ background: 'linear-gradient(to right, #030306, #07070f, #0b0b18)', borderRight: '1px solid rgba(255,255,255,0.05)' }}
          >
            {/* Spine outer-edge highlight (light catching left edge) */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px]"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03))' }} />
            {/* Top rivet */}
            <div className="w-2 h-2 rounded-full bg-white/8 border border-white/5 shrink-0" />
            {/* Title */}
            <span
              className="text-[8px] font-mono text-white/20 uppercase tracking-[0.32em] whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              31 Day AI Engineer Challenge
            </span>
            {/* Bottom rivet */}
            <div className="w-2 h-2 rounded-full bg-white/8 border border-white/5 shrink-0" />
          </div>

          {/* ── Page area ── */}
          <div className="flex-1 flex flex-col bg-[#0d0d16] overflow-hidden">

            {/* ── Header (inside book) ── */}
            <header className="shrink-0 bg-[#0a0a12]/90 backdrop-blur-sm border-b border-white/5 z-10">
              <div className="px-4 py-3 flex items-center gap-4">
                <a href="/" className="font-display font-bold text-white text-sm shrink-0 hover:text-brand-accent transition-colors">
                  MyRealProduct
                </a>

                <div className="flex-1 flex items-center gap-3">
                  <div className="flex-1 h-0.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <span className="text-xs font-mono text-brand-text/40 shrink-0">
                    {isCover ? 'Cover' : isLastPage ? '31/31' : `${currentPage + 1}/31`}
                  </span>
                </div>

                {day && (
                  <div className={`hidden md:flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono ${WEEK_BADGE_COLORS[day.week]}`}>
                    <span>{weekLabel}</span>
                    <span className="opacity-50">·</span>
                    <span>Day {day.day}</span>
                  </div>
                )}

                <button
                  onClick={() => { setShowNav(v => !v); setShowShare(false); }}
                  className={`transition-colors ${showNav ? 'text-white' : 'text-brand-text/40 hover:text-white'}`}
                  title="Chapters"
                >
                  <LayoutList size={16} />
                </button>

                <button
                  onClick={() => { setShowShare(v => !v); setShowNav(false); }}
                  className={`transition-colors ${showShare ? 'text-white' : 'text-brand-text/40 hover:text-white'}`}
                  title="Share this book"
                >
                  <Share2 size={16} />
                </button>
              </div>

              {/* Day picker dropdown */}
              <AnimatePresence>
                {showNav && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="border-t border-white/5 bg-[#080810]/95 px-4 py-4"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Share panel */}
              <AnimatePresence>
                {showShare && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="border-t border-white/5 bg-[#080810]/95 px-4 py-4"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      {/* GIF preview */}
                      <div className="w-32 shrink-0 rounded-sm overflow-hidden border border-white/10">
                        <img src="/images/Book.gif" alt="Book preview" className="w-full h-auto" />
                      </div>

                      {/* Share info + actions */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white mb-0.5">31 day AI Engineer Challenge</p>
                        <p className="text-xs text-brand-text/50 mb-3 font-mono">{BOOK_URL}</p>
                        <div className="flex flex-wrap gap-2">
                          {/* Copy link */}
                          <button
                            onClick={handleCopyLink}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm border text-xs font-mono transition-all ${
                              copied
                                ? 'border-brand-accent/50 bg-brand-accent/10 text-brand-accent'
                                : 'border-white/10 text-brand-text/60 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            <Copy size={12} />
                            {copied ? 'Copied!' : 'Copy link'}
                          </button>

                          {/* WhatsApp */}
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + ' ' + BOOK_URL)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('book_shared', { platform: 'whatsapp' })}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 text-brand-text/60 hover:border-green-500/40 hover:text-green-400 text-xs font-mono transition-all"
                          >
                            WhatsApp
                          </a>

                          {/* Twitter / X */}
                          <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(BOOK_URL)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('book_shared', { platform: 'twitter' })}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 text-brand-text/60 hover:border-sky-500/40 hover:text-sky-400 text-xs font-mono transition-all"
                          >
                            X / Twitter
                          </a>

                          {/* LinkedIn */}
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(BOOK_URL)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('book_shared', { platform: 'linkedin' })}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-white/10 text-brand-text/60 hover:border-blue-500/40 hover:text-blue-400 text-xs font-mono transition-all"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

            {/* ── Main content (inside book) ── */}
            <main ref={contentRef} className="flex-1 overflow-y-auto" style={{ perspective: '1400px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                {isCover ? (
                  <motion.div
                    key="cover"
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pageTransition}
                    className="h-full"
                    style={{ transformOrigin: 'center center' }}
                  >
                    <CoverPage />
                  </motion.div>
                ) : !isLastPage && day ? (
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pageTransition}
                    className="max-w-3xl mx-auto px-6 py-8"
                    style={{ transformOrigin: 'center center' }}
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
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={pageTransition}
                    className="max-w-3xl mx-auto px-6 py-12 text-center"
                    style={{ transformOrigin: 'center center' }}
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
                    <span className="text-white font-medium">Hari Prasad Renganathan</span>.
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
                      href="https://www.linkedin.com/in/hariprasad20/"
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

            {/* ── Bottom Navigation (inside book) ── */}
            <div className="shrink-0 bg-[#0a0a12]/90 backdrop-blur-sm border-t border-white/5 px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <Button
                  onClick={goPrev}
                  disabled={isCover}
                  variant="outline"
                  className="flex items-center gap-2 h-9 px-4 text-sm border-white/10 hover:border-white/30 disabled:opacity-20"
                >
                  <ChevronLeft size={15} />
                  <span className="hidden sm:inline">Previous</span>
                </Button>

                {/* Page dots — sliding window of 9 around current page */}
                {(() => {
                  const TOTAL_ITEMS = TOTAL_DAYS + 2; // cover + 31 days + final = 33
                  const WINDOW = 9;
                  // Map currentPage (-1..31) to display index (0..32)
                  const activeIdx = currentPage + 1;
                  const winStart = Math.max(0, Math.min(activeIdx - Math.floor(WINDOW / 2), TOTAL_ITEMS - WINDOW));
                  const winEnd = Math.min(TOTAL_ITEMS - 1, winStart + WINDOW - 1);
                  return (
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: winEnd - winStart + 1 }, (_, k) => {
                        const displayIdx = winStart + k;
                        const page = displayIdx - 1; // back to -1..31
                        const isActive = page === currentPage;
                        const isPast = page < currentPage;
                        // Shrink dots at the edges of the window
                        const edgeDist = Math.min(k, winEnd - winStart - k);
                        const isEdge = edgeDist === 0;
                        return (
                          <button
                            key={displayIdx}
                            onClick={() => goTo(page, page > currentPage ? 'next' : 'prev')}
                            title={page === -1 ? 'Cover' : page < TOTAL_DAYS ? `Day ${page + 1}` : 'Completion'}
                            className="shrink-0 rounded-full transition-all"
                            style={{
                              width: isActive ? 16 : isEdge ? 4 : 6,
                              height: 6,
                              background: isActive
                                ? 'var(--color-brand-accent, #827AFF)'
                                : isPast
                                ? 'rgba(255,255,255,0.25)'
                                : 'rgba(255,255,255,0.1)',
                              opacity: isEdge ? 0.4 : 1,
                            }}
                          />
                        );
                      })}
                    </div>
                  );
                })()}

                <Button
                  onClick={goNext}
                  disabled={currentPage === TOTAL_DAYS}
                  className="flex items-center gap-2 h-9 px-4 text-sm bg-white text-black hover:bg-brand-accent hover:text-black rounded-sm disabled:opacity-20"
                >
                  <span className="hidden sm:inline">
                    {isCover ? 'Open' : currentPage === TOTAL_DAYS - 1 ? 'Finish' : 'Next'}
                  </span>
                  <ChevronRight size={15} />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main BookPage ────────────────────────────────────────────────────────────

export default function BookPage() {
  const [accessEmail, setAccessEmail] = useState<string | null>(() => {
    // Check localStorage first
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    // Check if Tally redirected back with ?submitted=1
    if (new URLSearchParams(window.location.search).get('submitted') === '1') {
      const fallback = 'subscriber';
      localStorage.setItem(STORAGE_KEY, fallback);
      // Clean the URL param without a page reload
      window.history.replaceState({}, '', window.location.pathname);
      return fallback;
    }
    return null;
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
