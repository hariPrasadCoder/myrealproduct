import { motion } from 'motion/react';
import { Play, Calendar, Headphones, ArrowRight } from 'lucide-react';

export default function PodcastEpisodes() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase mb-4">
              Latest Release
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-white">
              Episode 01
            </h2>
          </div>
          <a
            href="#all-episodes"
            className="group flex items-center gap-2 text-xs font-mono text-brand-text hover:text-white transition-colors uppercase tracking-widest"
          >
            View all episodes <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Featured Episode Poster Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left: Episode Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 order-2 lg:order-1"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/5 text-white text-[10px] font-mono tracking-widest uppercase rounded-full border border-white/10">
                Trailer
              </span>
              <span className="flex items-center gap-1.5 text-brand-text/80 text-xs font-mono uppercase tracking-widest">
                <Calendar size={14} /> Coming Soon
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Building AI <br className="hidden md:block" /> 
              From the Ground Up
            </h3>
            
            <p className="text-base md:text-lg text-brand-text/80 mb-10 max-w-xl font-light leading-relaxed">
              A sneak peek into the conversations that shape the future. Hari Prasad sits down to deconstruct how end-to-end AI products are actually made behind closed doors. No fluff, just the real engineering journey.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="flex items-center justify-center gap-4 px-6 md:px-8 py-4 rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all group font-semibold uppercase tracking-widest text-xs md:text-sm">
                <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                Play Trailer
              </button>
            </div>
          </motion.div>

          {/* Right: Explicit Poster Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[340px] md:max-w-[400px] lg:w-[45%] shrink-0 order-1 lg:order-2"
          >
            {/* The Poster Artwork Card */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-brand-card flex items-center justify-center">

              {/* Background texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-card to-black/60 z-0" />
              <div className="absolute inset-0 opacity-[0.04] z-0"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,1) 30px, rgba(255,255,255,1) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,1) 30px, rgba(255,255,255,1) 31px)' }}
              />

              {/* Centered content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
                <div className="w-16 h-16 rounded-full border border-brand-accent/30 bg-brand-accent/10 flex items-center justify-center">
                  <Headphones size={28} className="text-brand-accent/60" />
                </div>
                <div>
                  <p className="text-white/80 font-display font-semibold text-lg mb-1">Episode 01</p>
                  <p className="text-brand-text/40 text-xs font-mono tracking-widest uppercase">Poster coming soon</p>
                </div>
              </div>

              {/* Corner accent lines */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-accent/30 z-10" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-brand-accent/30 z-10" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-brand-accent/30 z-10" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-accent/30 z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
