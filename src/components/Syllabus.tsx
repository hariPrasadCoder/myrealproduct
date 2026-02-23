import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';
import { useEffect } from 'react';
import { trackSectionView, trackCTAClick } from '../lib/posthog';

const LOGOS = [
  "/images/logos/Screenshot-2025-09-12-at-10.03.27-AM-1.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.12.54-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.14.03-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.14.51-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.16.51-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.17.39-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.17.52-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.18.14-AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.18.28-AM.webp",
];

const WEEKS = [
  {
    week: "01",
    title: "Problem Identification",
    subtitle: "Foundation & Strategy",
    items: ["Which Problem to solve", "Competitor Analysis", "Market Analysis", "Building a landing page", "Project Management"]
  },
  {
    week: "02",
    title: "Building an MVP",
    subtitle: "Core Development",
    items: ["AI Agents", "RAG application", "Vector Database", "Python for product development", "LLMs (Gemini, GPT models)", "API connection", "Streamlit", "Github", "Supabase SQL"]
  },
  {
    week: "03",
    title: "Deployment",
    subtitle: "Production Infrastructure",
    items: ["CI/CD", "AWS S3", "AWS EC2", "AWS IAM", "Domain registration & connection", "SSL Certificates", "Hosting"]
  },
  {
    week: "04",
    title: "Getting your first user",
    subtitle: "Launch & Growth",
    items: ["8 Marketing Framework", "Pitch deck creation", "Project presentation", "Feedback loop"]
  }
];

const LOGISTICS = [
  { label: "Pre-requisite", value: "Basic Python Programming" },
  { label: "Live Classes", value: "Every Saturday Morning + Breakout Room Sessions" },
  { label: "Take-home Assessments", value: "~5 hrs/week" },
  { label: "Tutorials & Technical Classes", value: "Lifetime access" },
  { label: "Community", value: "WhatsApp community" },
  { label: "Certificate", value: '"AI Product Builder" certification at the end' },
];

export default function Syllabus() {
  useEffect(() => {
    trackSectionView('syllabus');
  }, []);

  const handleCTAClick = () => {
    trackCTAClick('book_call', 'syllabus');
  };

  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-8 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-medium text-white leading-none shrink-0"
          >
            The <br /> Curriculum
          </motion.h2>

          {/* Logo Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 w-full md:flex-1 overflow-hidden"
          >
            <span className="text-xs font-mono text-brand-text uppercase tracking-widest opacity-60 md:text-right">
              4 Weeks of Action based learning
            </span>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-10 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                style={{ width: "max-content" }}
              >
                {[...LOGOS, ...LOGOS].map((src, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center px-5 py-2.5 rounded-full bg-white shrink-0"
                  >
                    <img
                      src={src}
                      alt={`logo-${i}`}
                      className="h-7 md:h-9 w-auto object-contain shrink-0"
                    />
                  </div>
                ))}
              </motion.div>
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-dark to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-dark to-transparent z-10" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-0 right-0 h-px bg-white/10 hidden lg:block" />

          {WEEKS.map((week, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pt-8 group"
            >
              {/* Milestone Marker */}
              <div className="absolute top-0 left-0 lg:left-8 w-3 h-3 bg-brand-dark border border-white/20 rounded-full z-10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors duration-300" />
              <div className="absolute top-1.5 left-0 lg:left-8 w-px h-full bg-white/10 lg:hidden" />

              <div className="pl-8 lg:pl-0 lg:pt-8">
                <span className="text-6xl font-display font-bold text-white/5 mb-4 block group-hover:text-white/10 transition-colors">
                  {week.week}
                </span>
                
                <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {week.title}
                </h3>
                <p className="text-sm font-mono text-brand-primary uppercase tracking-wider mb-6">
                  {week.subtitle}
                </p>

                <ul className="space-y-3 border-t border-white/5 pt-6">
                  {week.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text/80 text-sm group-hover:text-white transition-colors">
                      <Check size={14} className="text-brand-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Program Logistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 border border-white/10 rounded-sm p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-medium text-white mb-8">Program Logistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOGISTICS.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-xs font-mono text-brand-primary uppercase tracking-wider">{item.label}</span>
                <span className="text-white/80 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Button size="lg" className="h-14 px-12 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-cal-link="myrealproduct/info" data-cal-namespace="info" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' onClick={handleCTAClick}>
            I'M READY TO BREAK INTO AI
          </Button>
        </div>
      </div>
    </section>
  );
}
