import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, CalendarDays, FileText, Users, Star, Zap } from 'lucide-react';
import Particles from '../components/Particles';
import Footer from '../components/Footer';

const TALLY_ATTRS = {
  'data-tally-open': '5BEY5Z',
  'data-tally-layout': 'modal',
  'data-tally-width': '500',
  'data-tally-auto-close': '0',
} as const;

const WHATSAPP_LINK = 'https://chat.whatsapp.com/JmglQZ4zUuC219rkTS1NoE';

// Crowd silhouettes - positioned along x axis, feet at y=220 in a 1100×240 viewBox
const CROWD = [
  { x: 80,  scale: 0.44, baseOpacity: 0.09, delay: 0.0 },
  { x: 205, scale: 0.60, baseOpacity: 0.17, delay: 1.8 },
  { x: 318, scale: 0.78, baseOpacity: 0.28, delay: 0.6 },
  { x: 425, scale: 0.68, baseOpacity: 0.20, delay: 2.4 },
  { x: 542, scale: 1.00, baseOpacity: 0.42, delay: 0.0 },
  { x: 658, scale: 0.84, baseOpacity: 0.30, delay: 1.0 },
  { x: 768, scale: 0.71, baseOpacity: 0.22, delay: 0.5 },
  { x: 875, scale: 0.58, baseOpacity: 0.15, delay: 1.6 },
  { x: 975, scale: 0.43, baseOpacity: 0.09, delay: 0.9 },
];

// Inline WhatsApp logo SVG — no external dependency
function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function CommunityPage() {
  // Tally redirects here with ?joined=1 after form submission
  const [formSubmitted, setFormSubmitted] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('joined') === '1') {
      window.history.replaceState({}, '', window.location.pathname);
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (formSubmitted) {
      setTimeout(() => {
        document.getElementById('whatsapp-reveal')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);
    }
  }, []);

  // Backup: catch postMessage if Tally forwarding fires before redirect
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      let data = event.data;
      if (typeof data === 'string') { try { data = JSON.parse(data); } catch { return; } }
      if (data?.event === 'Tally.FormSubmitted' || data?.type === 'TallyFormSubmitted') {
        setFormSubmitted(true);
        setTimeout(() => {
          document.getElementById('whatsapp-reveal')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen">
      <Helmet>
        <title>UFO - Until Full-Time Offer | Free Community by MyRealProduct</title>
        <meta name="description" content="A free community by MyRealProduct for international students, immigrants, and professionals navigating the US tech job search - with everything to prove and no safety net." />
        <link rel="canonical" href="https://www.myrealproduct.com/community" />
        <meta property="og:title" content="UFO - Until Full-Time Offer | Free Community by MyRealProduct" />
        <meta property="og:description" content="For international students, immigrants, and professionals doing it without a safety net. Join free." />
        <meta property="og:url" content="https://www.myrealproduct.com/community" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="noise-overlay" />

      {/* ─── Navbar ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="text-xl font-bold font-display tracking-tight text-white hover:text-white/80 transition-colors">
            MyRealProduct
          </a>
          <a href="/" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors">
            ← Back to home
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════ */}
      {/* HERO                                              */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 text-center pt-20 pb-52">

        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.035] pointer-events-none" />

        {/* Particles */}
        <Particles particleCount={30} className="z-[1] opacity-35" />

        {/* Breathing radial glow */}
        <motion.div
          animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.06, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 45% at 50% 48%, rgba(69,61,200,0.13) 0%, rgba(94,85,229,0.05) 45%, transparent 75%)',
          }}
        />

        {/* Background flag emojis — US is the hero flag, others are supporting */}
        {([
          // US — largest, most opaque, positioned prominently inside frame
          { emoji: '🇺🇸', cls: 'top-[18%] right-[6%]  text-7xl md:text-8xl lg:text-9xl', opacityRange: [0.18, 0.30, 0.18] as [number,number,number], delay: 0.0 },
          // India — second most prominent (biggest source country)
          { emoji: '🇮🇳', cls: 'top-[20%] left-[5%]   text-5xl md:text-6xl lg:text-7xl', opacityRange: [0.12, 0.20, 0.12] as [number,number,number], delay: 1.4 },
          // UK
          { emoji: '🇬🇧', cls: 'top-[60%] right-[7%]  text-4xl md:text-5xl',             opacityRange: [0.09, 0.15, 0.09] as [number,number,number], delay: 2.2 },
          // Canada
          { emoji: '🇨🇦', cls: 'top-[63%] left-[6%]   text-4xl md:text-5xl',             opacityRange: [0.09, 0.15, 0.09] as [number,number,number], delay: 0.9 },
        ] as const).map((f, i) => (
          <motion.span
            key={i}
            className={`absolute select-none pointer-events-none z-[2] hidden sm:block ${f.cls}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: f.opacityRange, y: [0, -12, 0] }}
            transition={{
              duration: 5.5 + i * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.0 + f.delay,
            }}
          >
            {f.emoji}
          </motion.span>
        ))}

        {/* Text content */}
        <div className="relative z-10 max-w-3xl mx-auto">

          {/* Context label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-7"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-brand-accent/50" />
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase">
              Free Community · By MyRealProduct
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-brand-accent/50" />
          </motion.div>

          {/* UFO — the brand, large and unmistakable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-2"
          >
            <p className="text-[5.5rem] sm:text-[7rem] md:text-[9rem] font-display font-bold text-white leading-none tracking-tight">
              UFO
            </p>
          </motion.div>

          {/* Acronym — readable, not microscopic */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-white/35 font-display text-base md:text-xl tracking-widest uppercase mb-9"
          >
            <span className="text-white font-bold">U</span>ntil{' '}
            <span className="text-white font-bold">F</span>ull-Time{' '}
            <span className="text-white font-bold">O</span>ffer.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-white/15 mx-auto mb-9 origin-left"
          />

          {/* Outcome headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white leading-snug tracking-tight mb-5"
          >
            Find your people.{' '}
            <span className="text-white/45">Land your offer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-brand-text/50 text-sm md:text-base max-w-lg mx-auto mb-11 leading-relaxed"
          >
            A free community for international students, immigrants, and professionals navigating the US tech job search without a safety net.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            {...TALLY_ATTRS}
            className="inline-flex items-center gap-3 px-9 py-4 bg-white text-black text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-brand-accent transition-all duration-300 shadow-[0_0_50px_-12px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            Apply to the Community
          </motion.button>
        </div>

        {/* ── Crowd SVG ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 md:h-60 pointer-events-none z-[3]"
          style={{
            maskImage:
              'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 45%, transparent 100%)',
          }}
        >
          <svg
            viewBox="0 0 1100 240"
            preserveAspectRatio="xMidYMax slice"
            className="w-full h-full"
          >
            <defs>
              {/* Horizontal edge fade */}
              <linearGradient id="crowd-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="white" stopOpacity="0" />
                <stop offset="10%"  stopColor="white" stopOpacity="1" />
                <stop offset="90%"  stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="crowd-mask-h">
                <rect x="0" y="0" width="1100" height="240" fill="url(#crowd-fade)" />
              </mask>
            </defs>

            <g mask="url(#crowd-mask-h)">
              {CROWD.map((p, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [p.baseOpacity * 0.65, p.baseOpacity, p.baseOpacity * 0.65],
                  }}
                  transition={{
                    opacity: {
                      duration: 3.5 + p.delay * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.9 + i * 0.14 + p.delay,
                    },
                  }}
                >
                  <g
                    transform={`translate(${p.x}, 220) scale(${p.scale})`}
                    stroke="rgba(130,122,255,0.95)"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Head */}
                    <circle
                      cx="0"
                      cy="-88"
                      r="20"
                      strokeWidth="1.8"
                      vectorEffect="non-scaling-stroke"
                    />
                    {/* Shoulders + torso */}
                    <path
                      d="M -32 -55 C -20 -66 20 -66 32 -55 L 26 0 L -26 0 Z"
                      strokeWidth="1.8"
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                </motion.g>
              ))}
            </g>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* WHY THIS EXISTS - Hari's photo + first-person     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative lg:sticky lg:top-24"
            >
              <div className="min-h-[520px] bg-brand-card relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
                <img
                  src="/images/hari-prasad.webp"
                  alt="Hari Prasad"
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
                />
                {/* Decorative corner lines */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5 items-end">
                  <div className="w-10 h-px bg-white/20" />
                  <div className="w-6 h-px bg-white/20" />
                </div>
                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-white font-display text-xl font-bold mb-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Hari Prasad
                  </p>
                  <p className="text-white/50 font-mono text-[10px] tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    Founder, MyRealProduct · Former F-1 Student
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-8 block">
                Why This Exists
              </span>

              <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-[1.05] mb-10">
                $88,000 in loans.
                <br />
                <span className="text-white/22">One-way ticket.</span>
                <br />
                <span className="text-white/22">No plan B.</span>
              </h2>

              <div className="space-y-5 text-brand-text/65 text-base md:text-lg leading-relaxed max-w-xl mb-10">
                <p>
                  I moved to the US on an F-1 visa carrying more than just the debt. The family back home already thought I'd made it. Every rejection email felt like a failure I couldn't tell anyone about.
                </p>
                <p>
                  I know the 3am panic - OPT clock ticking, LinkedIn DMs going cold, watching people with safety nets move differently through the same world.
                </p>
                <p>
                  Then it clicked. I became a data scientist at a top gaming company, then a senior AI engineer at a YC-backed startup. Along the way I helped 2,000+ engineers learn to build with AI, spoke at TEDx, got featured by the BBC, and was trusted by the United Nations to teach AI.
                </p>
                <p className="text-white/80 font-medium">
                  UFO is not charity. It is me making sure more people find their way through it.
                </p>
              </div>

              {/* Credential strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/8">
                {[
                  { value: '2,000+', label: 'Engineers trained' },
                  { value: 'TEDx',   label: 'Speaker + BBC Featured' },
                  { value: 'United Nations', label: 'Trusted to teach AI' },
                  { value: 'YC',     label: 'Startup background' },
                ].map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                  >
                    <p className="text-white font-display font-semibold text-base md:text-lg leading-tight mb-1">
                      {c.value}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                      {c.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* WHAT'S INSIDE - Bento grid                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              Inside the Community
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white font-medium">
              What you get.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Featured - bi-weekly sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="md:col-span-7 border border-white/8 bg-white/[0.02] p-8 relative overflow-hidden group hover:border-white/16 hover:bg-white/[0.035] transition-all duration-300"
            >
              <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-brand-primary/10 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-11 h-11 border border-white/8 flex items-center justify-center mb-6 group-hover:border-brand-primary/30 transition-colors duration-300">
                  <CalendarDays size={17} className="text-brand-accent/60 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-display text-white font-medium mb-3">
                  Bi-weekly sessions.
                </h3>
                <p className="text-brand-text/45 text-sm leading-relaxed max-w-sm">
                  Live group sessions covering job search strategy, resume teardowns, and interview prep - real critique, not cheerleading.
                </p>
              </div>
            </motion.div>

            {/* Expert sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 border border-white/8 bg-white/[0.02] p-6 relative overflow-hidden group hover:border-white/16 hover:bg-white/[0.035] transition-all duration-300"
            >
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-brand-secondary/8 blur-[50px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 border border-white/8 flex items-center justify-center mb-5 group-hover:border-brand-primary/30 transition-colors duration-300">
                  <Users size={15} className="text-brand-accent/60 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-lg font-display text-white font-medium mb-2">Expert sessions.</h3>
                <p className="text-brand-text/45 text-sm leading-relaxed">
                  People who've made actual hiring decisions. Straight talk, no LinkedIn polish.
                </p>
              </div>
            </motion.div>

            {/* Offer stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="md:col-span-5 border border-white/8 bg-white/[0.02] p-6 group hover:border-white/16 hover:bg-white/[0.035] transition-all duration-300"
            >
              <div className="w-10 h-10 border border-white/8 flex items-center justify-center mb-5 group-hover:border-brand-primary/30 transition-colors duration-300">
                <Star size={15} className="text-brand-accent/60 group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-lg font-display text-white font-medium mb-2">Real offer stories.</h3>
              <p className="text-brand-text/45 text-sm leading-relaxed">
                Every detail community members wish they'd known earlier - shared raw, not polished.
              </p>
            </motion.div>

            {/* Curated resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 border border-white/8 bg-white/[0.02] p-6 group hover:border-white/16 hover:bg-white/[0.035] transition-all duration-300"
            >
              <div className="w-10 h-10 border border-white/8 flex items-center justify-center mb-5 group-hover:border-brand-primary/30 transition-colors duration-300">
                <FileText size={15} className="text-brand-accent/60 group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-lg font-display text-white font-medium mb-2">Curated resources.</h3>
              <p className="text-brand-text/45 text-sm leading-relaxed">
                Templates and guides built for this exact journey.
              </p>
            </motion.div>

            {/* Office hours - purple accent, feels exclusive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="md:col-span-4 border border-brand-primary/18 bg-brand-primary/[0.05] p-6 relative overflow-hidden group hover:border-brand-primary/30 hover:bg-brand-primary/[0.08] transition-all duration-300"
            >
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-brand-primary/15 blur-[50px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-10 h-10 border border-brand-primary/25 flex items-center justify-center mb-5">
                  <Zap size={15} className="text-brand-accent" />
                </div>
                <h3 className="text-lg font-display text-white font-medium mb-2">Office hours with Hari.</h3>
                <p className="text-brand-text/45 text-sm leading-relaxed">
                  Bring the questions you can't ask anywhere else. Occasional and direct.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* JOIN CTA + WHATSAPP REVEAL                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-32 px-6 border-t border-white/5" id="join">
        <div className="max-w-xl mx-auto text-center relative">
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(69,61,200,0.10) 0%, transparent 75%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* WhatsApp logo badge */}
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <WhatsAppLogo className="w-6 h-6 text-[#25D366]" />
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase">
                WhatsApp Community
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display text-white font-medium mb-5 leading-tight">
              Stop going through <br />this alone.
            </h2>
            <p className="text-brand-text/40 text-sm mb-10 leading-relaxed">
              Free. Fill the short form and the WhatsApp<br />
              join link appears right here.
            </p>

            <AnimatePresence mode="wait">
              {!formSubmitted && (
                <motion.button
                  key="join-cta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  {...TALLY_ATTRS}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-brand-accent transition-all duration-300 shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] cursor-pointer"
                >
                  Apply to the Community
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* WhatsApp link — revealed after form submission */}
          <div id="whatsapp-reveal" className="mt-6">
            <AnimatePresence>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="border border-[#25D366]/20 bg-[#25D366]/[0.04] p-9"
                >
                  {/* Large WhatsApp logo */}
                  <div className="flex items-center justify-center mb-5">
                    <WhatsAppLogo className="w-14 h-14 text-[#25D366]" />
                  </div>
                  <h3 className="text-white text-xl font-display font-medium mb-2">
                    You're in. Welcome to UFO.
                  </h3>
                  <p className="text-brand-text/50 text-sm mb-7 leading-relaxed max-w-xs mx-auto">
                    Tap below to open WhatsApp and join the community. See you inside.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-[#22c55e] transition-all duration-300 shadow-[0_0_30px_-8px_rgba(37,211,102,0.5)]"
                  >
                    <WhatsAppLogo className="w-4 h-4 text-white" />
                    Join on WhatsApp
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer hideCta />
    </div>
  );
}
