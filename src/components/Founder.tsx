import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { trackSectionView, trackExternalLink } from '../lib/posthog';

export default function Founder() {
  useEffect(() => {
    trackSectionView('founder');
  }, []);

  const handleLinkedInClick = () => {
    trackExternalLink('https://www.linkedin.com/in/hariprasad20/', 'founder_linkedin');
  };

  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side - Image (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="h-full min-h-[400px] bg-brand-card relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
              {/* Headshot Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
              <img
                src="/images/hari-prasad.webp"
                alt="Hari Prasad"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-3xl font-display font-bold text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Hari Prasad</h3>
                <p className="text-white font-mono text-xs tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Lead Instructor
                </p>
              </div>

              {/* Tech Decoration */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                <div className="w-12 h-[1px] bg-white/20" />
                <div className="w-8 h-[1px] bg-white/20" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12 flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-12 leading-[0.9]">
              From Data Scientist <br />
              <span className="text-white/30">to AI Engineer.</span>
            </h2>

            <div className="space-y-8 text-lg text-brand-text/80 font-light leading-relaxed max-w-2xl">
              <p>
                <span className="text-white font-medium">I don’t teach theory.</span> I teach what works in production.
                After working with 5+ early-stage startups and launching multiple AI-powered products, I’ve helped founders go from concept to live product,
                I realized most courses are stuck in 2023.
              </p>
              <p>
                At MyRealProduct, I bring those same lessons to ambitious professionals who want to learn AI the right way, by building, shipping, and solving real problems.
              </p>
            </div>

            {/* UNITAR × Google Callout */}
            <motion.a
              href="https://www.linkedin.com/posts/pathwaytoprosperity-selangor-ai-ugcPost-7424323689925558272-0iIu?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUWx_AByf8rhNVmX00bRlKH3l_daXlmIc0"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 border border-white/10 bg-white/[0.03] p-6 flex items-center gap-6 hover:border-white/25 hover:bg-white/[0.06] transition-colors group"
            >
              <div className="flex-shrink-0 flex items-center gap-3 border-r border-white/10 pr-6">
                <img src="/logos/unitar.png" alt="UNITAR" className="h-8 w-auto grayscale opacity-90" style={{ mixBlendMode: 'screen' }} />
                <span className="text-white/40 text-lg font-light">×</span>
                <img src="/logos/google.png" alt="Google" className="h-5 w-auto grayscale opacity-70" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm leading-snug">Trusted by the United Nations to teach AI</p>
                <p className="text-white/40 text-xs mt-1 font-mono">UNITAR (The United Nations) · Pathway to Prosperity Programme · Selangor, Malaysia</p>
              </div>
              <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
            </motion.a>

            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8">
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
                <a href="https://www.linkedin.com/in/hariprasad20/" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-brand-primary transition-colors inline-flex items-center gap-1" onClick={handleLinkedInClick}>
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
