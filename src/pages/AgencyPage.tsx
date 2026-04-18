import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Linkedin,
  Code2,
  Mic2,
  Send,
  Briefcase,
  ChevronDown,
  Star,
  Shield,
  TrendingUp,
  Clock,
  Users,
  Zap,
} from 'lucide-react';
import { trackEvent, trackSectionView } from '../lib/posthog';
import Particles from '../components/Particles';

const TICKER_ITEMS = [
  'Done-For-You Applications',
  '$142k+ Avg AI Role Salary',
  'Highly Selective',
  '6-Month Partnership',
  '30-Min Free Consultation',
  'AI-Era Roles Only',
  'EMI Available',
  'Daily Job Applications',
  'Interview Coaching',
  'LinkedIn Transformation',
];

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, target, motionVal]);

  useEffect(() => {
    return spring.on('change', v => {
      setDisplay(Math.round(v).toString());
    });
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const SERVICES = [
  {
    icon: FileText,
    title: 'Resume Overhaul',
    outcome: 'A resume that gets past ATS and makes hiring managers stop scrolling.',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Transformation',
    outcome: 'A profile that gets inbound recruiter messages from top AI companies.',
  },
  {
    icon: Code2,
    title: 'Project Portfolio',
    outcome: 'Real AI projects that prove your capability. Not just certificates.',
  },
  {
    icon: Mic2,
    title: 'Interview Mastery',
    outcome: 'Mock interviews, coaching, and debriefs until you own the room.',
  },
  {
    icon: Send,
    title: 'Done-For-You Applications',
    outcome: 'We apply on your behalf, daily. You stay focused on being great.',
  },
  {
    icon: Briefcase,
    title: 'Opportunity Pipeline',
    outcome: "We surface and bring you roles you'd never find on your own.",
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Apply',
    description:
      'Submit a short application. We review every profile carefully. We only proceed if we genuinely believe we can get you a great outcome.',
  },
  {
    step: '02',
    title: 'Free Consultation',
    description:
      'A 30-minute strategy call. We audit your current profile, understand your goals, and map a realistic path to your target role.',
  },
  {
    step: '03',
    title: '6 Months, Full Support',
    description:
      "From day one, we're in the trenches with you: building, applying, coaching, and hunting until you land.",
  },
];

const OUTCOMES = [
  'A polished, ATS-optimised resume tailored to AI-era roles',
  'A LinkedIn profile that attracts inbound from top companies',
  'A portfolio of real AI projects that prove you can ship',
  'Weekly career guidance from someone who knows the market',
  'Daily job applications submitted on your behalf',
  "Interview coaching until you're confident every time",
  'Curated opportunities brought directly to you',
  'Ongoing support until you sign an offer',
];

const ROI_STATS = [
  { figure: '$142k+', label: 'Average AI role base salary in 2025' },
  { figure: '3.5×', label: 'Salary uplift vs. non-AI equivalent role' },
  { figure: '6 mo', label: 'Average time to placement with our support' },
  { figure: '~14×', label: 'ROI on your $10k investment (year one alone)' },
];

const FAQS = [
  {
    q: 'Who is this for?',
    a: "Professionals who are serious about breaking into AI-era roles: pivoting from a non-technical background, levelling up within tech, or re-entering the market. You must be coachable, motivated, and ready to do the work alongside us.",
  },
  {
    q: 'Why $10,000?',
    a: "Because we don't take 100 clients. We take a handful, give them everything, and get results. The fee reflects the depth of engagement: daily applications, weekly calls, expert coaching, and a partner as invested in your placement as you are. EMI options are available. You don't have to pay in full upfront.",
  },
  {
    q: "What if I don't land a job in 6 months?",
    a: "We work until you land. If you're actively engaged and following the plan, we don't walk away at the 6-month mark. We'll discuss your situation on the consultation call.",
  },
  {
    q: 'Do I need to already know AI?',
    a: "No. But you need to be willing to learn. Part of our work together is building your AI portfolio and skilling you up so you can genuinely deliver in an AI role, not just talk about it.",
  },
  {
    q: 'Why are you selective?',
    a: "Our reputation is our product. We only work with people we are confident we can genuinely help. Taking everyone would mean helping no one well. The consultation call is mutual. You're evaluating us too.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-white/10 last:border-0"
      initial={false}
    >
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-medium text-white group-hover:text-brand-accent transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-brand-text/40"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-text/70 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const CAL_ATTRS = {
  'data-cal-link': 'myrealproduct/mrp-agency-call',
  'data-cal-namespace': 'mrp-agency-call',
  'data-cal-config': '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}',
};

export default function AgencyPage() {
  useEffect(() => {
    trackSectionView('agency_page');
    trackEvent('agency_page_viewed', { page: '/agency' });

    // Cal.com script is already loaded globally in index.html — just init the namespace
    const initCal = () => {
      const cal = (window as any).Cal;
      if (cal) {
        cal('init', 'mrp-agency-call', { origin: 'https://app.cal.com' });
        cal.ns['mrp-agency-call']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      }
    };
    if ((window as any).Cal) {
      initCal();
    } else {
      window.addEventListener('load', initCal, { once: true });
    }
  }, []);

  const handleConsultationClick = (location: string) => {
    trackEvent('agency_consultation_clicked', { location, page: '/agency' });
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30">
      <Helmet>
        {/* Primary */}
        <title>MRP Employment Agency — Land Your AI-Era Role in 6 Months</title>
        <meta name="description" content="A highly selective 6-month career partnership. We rebuild your profile, apply for jobs on your behalf daily, and get you placed in an AI-era role. $10k, EMI available." />
        <meta name="keywords" content="AI jobs, AI career, employment agency, job placement, AI-era roles, career coaching, resume review, LinkedIn optimization, interview prep, done-for-you job applications, MRP agency" />
        <meta name="author" content="MyRealProduct" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.myrealproduct.com/agency" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myrealproduct.com/agency" />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="MRP Employment Agency — Land Your AI-Era Role in 6 Months" />
        <meta property="og:description" content="We apply for jobs on your behalf, every day. Resume, LinkedIn, interview prep and a full opportunity pipeline — for 6 months. Highly selective. $10k, EMI available." />
        <meta property="og:image" content="https://www.myrealproduct.com/og-agency.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MRP Employment Agency — Your next job should be in AI. We'll get you there." />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="MRP Employment Agency — Land Your AI-Era Role" />
        <meta name="twitter:description" content="We apply for jobs on your behalf, every day. 6-month career partnership. Highly selective. Book a free 30-min consultation." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-agency.png" />
        <meta name="twitter:image:alt" content="MRP Employment Agency — Your next job should be in AI." />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://www.myrealproduct.com/agency#service",
              "name": "MRP Employment Agency",
              "description": "A highly selective 6-month career partnership for professionals ready to step into AI-era roles. Includes resume overhaul, LinkedIn transformation, project portfolio, interview coaching, done-for-you job applications, and curated opportunity pipeline.",
              "url": "https://www.myrealproduct.com/agency",
              "provider": {
                "@type": "Organization",
                "@id": "https://www.myrealproduct.com/#organization",
                "name": "MyRealProduct",
                "url": "https://www.myrealproduct.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "10000",
                "priceCurrency": "USD",
                "availability": "https://schema.org/LimitedAvailability",
                "url": "https://www.myrealproduct.com/agency"
              },
              "serviceType": "Career Coaching and Job Placement",
              "areaServed": "Worldwide",
              "audience": {
                "@type": "Audience",
                "audienceType": "Professionals transitioning into AI-era roles"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is MRP Employment Agency for?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Professionals serious about breaking into AI-era roles — pivoting from non-technical backgrounds, levelling up within tech, or re-entering the market." }
                },
                {
                  "@type": "Question",
                  "name": "How much does MRP Employment Agency cost?",
                  "acceptedAnswer": { "@type": "Answer", "text": "$10,000 for a full 6-month partnership. EMI options are available — you don't have to pay in full upfront." }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I don't land a job in 6 months?",
                  "acceptedAnswer": { "@type": "Answer", "text": "We work until you land. If you're actively engaged and following the plan, we don't walk away at the 6-month mark." }
                }
              ]
            }
          ]
        })}</script>
      </Helmet>

      <div className="noise-overlay" />

      {/* ── Minimal Navbar ───────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/60 backdrop-blur-xl border-b border-white/5"
      >
        <a href="/" className="text-xl font-bold font-display tracking-tight text-white hover:text-brand-accent transition-colors">
          MyRealProduct
        </a>
        <button
          onClick={() => handleConsultationClick('navbar')}
          {...CAL_ATTRS}
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-brand-primary/20 border border-brand-primary/40 hover:bg-brand-primary/40 transition-all duration-300 px-4 py-2 rounded-sm"
        >
          Book Free Consultation <ArrowRight size={14} />
        </button>
      </motion.nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-32 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Particles */}
        <Particles particleCount={50} className="z-[1] opacity-50" />

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none z-[2]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-primary/10 rounded-full blur-[130px]" />
        </div>

        {/* HUD left */}
        <div className="absolute top-32 left-10 hidden lg:flex flex-col gap-4 opacity-25 z-[3]">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
            <Users size={11} />
            <span>SELECTIVE_INTAKE</span>
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>

        {/* HUD right */}
        <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-4 items-end opacity-25 z-[3]">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
            <span>AI_ERA_ROLES</span>
            <Zap size={11} />
          </div>
          <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>

        <div className="relative z-[4] flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono tracking-widest uppercase text-brand-text/80 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Accepting Applications
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-medium text-5xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl leading-[1.05] mb-6"
          >
            Your next job<br />should be in AI.{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary blur-2xl opacity-40" />
              <span className="relative text-gradient">We'll get you there.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-brand-text/60 max-w-xl leading-relaxed mb-10"
          >
            A highly selective 6-month career partnership. Resume, LinkedIn,
            interview prep, and daily applications. All done with you.
            We don't take everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={() => handleConsultationClick('hero')}
              {...CAL_ATTRS}
              className="flex items-center gap-3 bg-white text-black font-semibold tracking-widest uppercase text-sm px-10 h-14 rounded-sm hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.12)]"
            >
              Book Free Consultation <ArrowRight size={16} />
            </button>
            <p className="text-xs text-brand-text/35 tracking-wide">
              $10,000 · 6 months · EMI available
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-brand-card/30">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-brand-text/40 shrink-0">
              <span className="w-1 h-1 rounded-full bg-brand-accent/60" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Reality Check ────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              The World Has Changed
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-3xl mx-auto leading-tight">
              The job market isn't broken.{' '}
              <span className="text-brand-text/50">It's been rebuilt.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                heading: 'AI is replacing roles, not just tasks',
                body: 'Entire job categories are disappearing. But new ones paying 2-4x more are opening up for people who position themselves correctly.',
              },
              {
                heading: 'The next job is the most important one',
                body: "Miss this window and you'll spend years catching up. Get it right and you'll be shaping what's coming. Not scrambling to keep up with it.",
              },
              {
                heading: 'Going it alone is slower and lonelier',
                body: "People are sending 1000+ applications into the void with a generic resume and no feedback loop. That's not a job search. That's desperation.",
              },
              {
                heading: 'The right profile unlocks inbound opportunities',
                body: 'When your LinkedIn, resume, and portfolio are dialled in for AI roles, recruiters come to you. We build that profile.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-card border border-white/5 rounded-sm p-6"
              >
                <h3 className="font-display font-medium text-lg mb-2 text-white">
                  {card.heading}
                </h3>
                <p className="text-brand-text/60 text-sm leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────────────────────── */}
      <section id="what-you-get" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              The Full Package
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">
              Everything done with you.{' '}
              <span className="text-gradient">A lot done for you.</span>
            </h2>
            <p className="text-brand-text/60 max-w-xl mx-auto">
              This isn't a course. It's not a bootcamp. It's a full-service career
              partnership where we do the heavy lifting so you can focus on being
              the best candidate possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 rounded-sm group hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-primary/15 flex items-center justify-center mb-4 group-hover:bg-brand-primary/25 transition-colors">
                  <s.icon size={18} className="text-brand-accent" />
                </div>
                <h3 className="font-display font-medium text-base mb-2 text-white">
                  {s.title}
                </h3>
                <p className="text-brand-text/60 text-sm leading-relaxed">{s.outcome}</p>
              </motion.div>
            ))}
          </div>

          {/* Done-For-You Applications spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 relative overflow-hidden rounded-sm border border-brand-primary/25 bg-gradient-to-br from-brand-primary/10 via-brand-card to-brand-card"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: copy */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
                  The unfair advantage
                </p>
                <h3 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-white mb-4 leading-tight">
                  While you sleep,<br />we're applying.
                </h3>
                <p className="text-brand-text/60 leading-relaxed mb-8">
                  We send targeted applications to AI-era roles every single day on your behalf.
                  Not mass-blasting. Every application is relevant, tracked, and followed up on.
                  You focus on being great. We handle the grind.
                </p>
                <div className="space-y-3">
                  {[
                    'Daily applications to vetted, relevant roles',
                    'Every application tracked and followed up',
                    'You only spend time where it matters: interviews',
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      <span className="text-sm text-brand-text/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: mock activity feed */}
              <div className="p-8 md:p-12 flex items-center lg:border-l border-white/5">
                <div className="w-full bg-brand-dark/60 border border-white/8 rounded-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-brand-text/50 tracking-widest uppercase">Live Applications</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {[
                      { role: 'Senior AI Engineer', company: 'Stripe', time: '4 min ago' },
                      { role: 'AI Product Manager', company: 'Linear', time: '31 min ago' },
                      { role: 'Head of AI', company: 'Notion', time: '2h ago' },
                      { role: 'ML Platform Lead', company: 'Vercel', time: '5h ago' },
                      { role: 'AI Strategy Lead', company: 'Figma', time: '8h ago' },
                    ].map((app, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1 - i * 0.15, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-center justify-between px-4 py-3 gap-4"
                      >
                        <div>
                          <p className="text-sm text-white font-medium leading-none mb-1">{app.role}</p>
                          <p className="text-xs text-brand-text/50">{app.company}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-green-400/80 font-mono">{app.time}</span>
                          <CheckCircle2 size={13} className="text-green-400/60" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-white/5 text-center">
                    <span className="text-xs text-brand-text/30 font-mono">+ more every day</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Outcome checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-card border border-white/5 rounded-sm p-8"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6">
              What you walk away with
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {OUTCOMES.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-brand-text/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ROI Section ──────────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              The Investment
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-4">
              $10,000 is not a cost.{' '}
              <span className="text-gradient">It's a return.</span>
            </h2>
            <p className="text-brand-text/60 max-w-xl mx-auto">
              One AI role placement covers your investment 10–15× in year one alone.
              The question isn't whether you can afford this. It's whether you can
              afford to spend another year in the wrong role.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { prefix: '$', target: 142, suffix: 'k+', label: 'Average AI role base salary in 2025' },
              { prefix: '', target: 35, suffix: '×', label: 'Salary uplift vs. non-AI equivalent role', divisor: 10 },
              { prefix: '', target: 6, suffix: ' mo', label: 'Average time to placement with our support' },
              { prefix: '~', target: 14, suffix: '×', label: 'ROI on your $10k investment (year one alone)' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 80 }}
                className="bg-brand-card border border-white/5 rounded-sm p-6 text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-medium text-white mb-2">
                  {stat.prefix}<CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-brand-text/50 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary/10 border border-brand-primary/20 rounded-sm p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          >
            <TrendingUp size={24} className="text-brand-accent shrink-0" />
            <div>
              <p className="text-white font-medium mb-1">EMI options available</p>
              <p className="text-brand-text/60 text-sm">
                You don't need to pay the full $10k upfront. We offer structured
                payment plans. Talk to us on the consultation call about what works
                for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              The Process
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight">
              How we work together
            </h2>
          </motion.div>

          <div className="space-y-0">
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-8 py-10 border-b border-white/5 last:border-0"
              >
                <div className="font-display text-5xl font-medium text-brand-primary/30 shrink-0 w-16 pt-1">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display font-medium text-2xl mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-brand-text/60 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Selective ────────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5 bg-brand-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
                Why We're Selective
              </p>
              <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight mb-6 leading-tight">
                We turn people away.{' '}
                <span className="text-brand-text/40">On purpose.</span>
              </h2>
              <p className="text-brand-text/60 leading-relaxed mb-4">
                We only work with people we're genuinely confident we can place. Not
                because we're elitist. Your success is our reputation.
              </p>
              <p className="text-brand-text/60 leading-relaxed">
                If we accept you, it means we've looked at your profile, understood
                your goals, and believe we can get you where you want to go. That
                clarity is the foundation everything else is built on.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  icon: Shield,
                  title: 'Our reputation is our product',
                  body: 'Every client is a statement about who we are and what we stand for.',
                },
                {
                  icon: Star,
                  title: 'Quality over volume',
                  body: "We'd rather work with 10 people brilliantly than 100 people badly.",
                },
                {
                  icon: Clock,
                  title: 'Real commitment requires real capacity',
                  body: 'We give every client serious time. That means we can only take a few.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-brand-card border border-white/5 rounded-sm p-5"
                >
                  <div className="w-9 h-9 rounded-sm bg-brand-primary/15 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm mb-1">{item.title}</p>
                    <p className="text-brand-text/60 text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-4">
              Common Questions
            </p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight">
              Straight answers
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 max-w-3xl text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-brand-accent mb-6">
              The Next Step Is Yours
            </p>
            <h2 className="font-display font-medium text-5xl md:text-6xl tracking-tight mb-6 leading-tight">
              Ready to find out if{' '}
              <span className="text-gradient">we're the right fit?</span>
            </h2>
            <p className="text-xl text-brand-text/60 mb-4 max-w-xl mx-auto leading-relaxed">
              Book a free 30-minute consultation. No pressure. We'll look at where
              you are, where you want to go, and tell you honestly whether we can
              help.
            </p>
            <p className="text-sm text-brand-text/40 mb-10">
              We only work with a small number of clients at a time. If the timing
              is right, we'll move fast.
            </p>

            <button
              onClick={() => handleConsultationClick('footer_cta')}
              {...CAL_ATTRS}
              className="inline-flex items-center gap-3 bg-white text-black font-semibold tracking-widest uppercase text-sm px-12 h-16 rounded-sm hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            >
              Book Free Consultation <ArrowRight size={16} />
            </button>

            <p className="mt-6 text-xs text-brand-text/30 tracking-wide">
              $10,000 · 6 months · EMI available · Personalised & selective
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-text/40">
          <a href="/" className="text-xl font-bold font-display tracking-tight text-white hover:text-brand-accent transition-colors">
            MyRealProduct
          </a>
          <div className="flex gap-8">
            <a href="mailto:contact@myrealproduct.com" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
          </div>
          <div>© 2026 MyRealProduct. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
