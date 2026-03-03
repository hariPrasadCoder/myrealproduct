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
              
              <div className="flex flex-col">
                <span className="text-xs font-mono text-brand-text/50 uppercase tracking-widest flex items-center gap-2">
                  <Headphones size={14}/> Available on all
                </span>
                <span className="text-sm text-brand-text/80 mt-1">
                  major podcast platforms
                </span>
              </div>
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
              
              {/* Fallback pattern in case image isn't loaded */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent z-0" />
              
              {/* Replace this src with your actual uploaded poster image */}
              <img 
                src="/images/episode-1-poster.jpg" 
                alt="Episode 1 Poster" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10"
                // Hide broken image icon styling while you don't have the image file yet
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Placeholder text (visble only if image is missing) */}
              <div className="relative z-0 text-center px-6">
                <p className="font-mono text-brand-accent tracking-widest text-xs uppercase mb-2">Upload Poster Here</p>
                <p className="text-brand-text/50 text-sm font-light">src="/images/episode-1-poster.jpg"</p>
              </div>

              {/* Subtle glare effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
