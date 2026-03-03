import { motion } from 'motion/react';
import Particles from '../Particles';

export default function PodcastHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
      <div className="noise-overlay" />

      {/* Ambient purple atmosphere */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 42% 60% at 50% 55%, rgba(69,61,200,0.14) 0%, rgba(94,85,229,0.05) 35%, transparent 70%)',
        }}
      />

      <Particles particleCount={28} className="z-[1] opacity-30" />
      
      {/* Desktop-only scanlines */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03] hidden md:block" 
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)'
        }} 
      />

      {/* Mobile-only grid pattern */}
      <div className="absolute inset-0 z-[1] bg-grid-pattern opacity-10 pointer-events-none md:hidden" />

      {/* Side silhouettes — tinted and smoothly faded to merge perfectly with the dark theme */}
      <div className="absolute inset-0 z-[1] pointer-events-none hidden md:block overflow-hidden">
        {/* Shadow mask to fade out edges smoothly and push them into the background */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(5,5,8,0.95) 80%, rgba(5,5,8,1) 100%)'
          }}
        />
        
        <motion.img
          animate={{ y: ["-50%", "-53%", "-50%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          src="/images/podcast-silhouette.png"
          alt=""
          className="absolute -left-10 lg:-left-20 top-1/2 h-[80vh] lg:h-[100vh] xl:h-[120vh] object-contain opacity-[0.65]"
          style={{
            // Adjusting filter to pull in some brightness so it can take on color, then tinting purple/blue
            filter: 'invert(0.05) sepia(1) hue-rotate(220deg) saturate(3) brightness(0.4) contrast(1.8)',
            mixBlendMode: 'lighten'
          }}
        />
        <motion.img
          animate={{ y: ["-50%", "-47%", "-50%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          src="/images/podcast-silhouette.png"
          alt=""
          className="absolute -right-10 lg:-right-20 top-1/2 h-[80vh] lg:h-[100vh] xl:h-[120vh] object-contain opacity-[0.65] scale-x-[-1]"
          style={{
            filter: 'invert(0.05) sepia(1) hue-rotate(220deg) saturate(3) brightness(0.4) contrast(1.8)',
            mixBlendMode: 'lighten'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-28 pb-20 flex flex-col items-center text-center">
        {/* Subtle top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-brand-accent/60" />
          <span className="text-xs sm:text-sm font-mono text-brand-accent tracking-[0.3em] uppercase">The MRP Podcast</span>
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-brand-accent/60" />
        </motion.div>

        {/* Evolving Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display tracking-tighter mb-10 leading-[1.1] sm:leading-[1.05]"
        >
          <span className="font-light text-white/70 tracking-tight block mb-2">Inside the</span>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-brand-accent pb-2 pr-2">
            AI build room.
          </span>
        </motion.h1>

        {/* Blackhole + mic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
        >
          {/* Mobile-only outer radial rings (replaces silhouettes' visual weight on small screens) */}
          <div className="absolute inset-0 rounded-full pointer-events-none md:hidden">
            <motion.div 
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute inset-[-6%] rounded-full border border-brand-accent/10" 
            />
            <motion.div 
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.08, 1] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
              className="absolute inset-[-14%] rounded-full border border-brand-accent/8" 
            />
            <motion.div 
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="absolute inset-[-22%] rounded-full border border-brand-accent/5" 
            />
          </div>

          {/* Core blackhole gradient */}
          <div
            className="absolute inset-[10%] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 35%, rgba(0,0,0,0.2) 0%, rgba(5,5,8,0.98) 55%, rgba(5,5,8,1) 70%, transparent 100%)',
            }}
          />

          {/* Mic image perfectly clipped to circle */}
          <div className="absolute inset-[12%] rounded-full overflow-hidden">
            <motion.img
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              src="/images/podcast-mic-alt.jpg"
              alt="The MRP Podcast microphone"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle halo at the rim of the blackhole */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[6%] rounded-full pointer-events-none opacity-[0.25]"
            style={{
              background:
                'conic-gradient(from 140deg, transparent 0%, rgba(130,122,255,0.5) 20%, transparent 45%, rgba(69,61,200,0.4) 70%, transparent 100%)',
              maskImage:
                'radial-gradient(circle, transparent 62%, black 72%, black 80%, transparent 90%)',
              WebkitMaskImage:
                'radial-gradient(circle, transparent 62%, black 72%, black 80%, transparent 90%)',
            }}
          />

          {/* Radio waves emitting from the mic */}
          <div className="absolute inset-[10%] rounded-full pointer-events-none z-[-1]">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [0.8, 2],
                  opacity: [0, 0.4, 0] 
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-brand-accent/50 shadow-[0_0_15px_rgba(130,122,255,0.4)]"
              />
            ))}
          </div>
        </motion.div>

        {/* Trust metrics strip (pulled into hero) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center"
        >
          {[
            { value: '2,000+', label: 'AI ENGINEERS COACHED' },
            { value: '5+', label: 'STARTUPS LAUNCHED' },
            { value: '4 Weeks', label: 'AVERAGE TIME TO SHIP' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-display font-semibold text-white">
                {stat.value}
              </span>
              <span className="mt-1 text-[11px] font-mono tracking-[0.24em] text-brand-text/55 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Primary hero subscribe CTA */}
        <a
          href="#subscribe"
          className="mt-10 inline-flex items-center justify-center px-9 py-3.5 rounded-sm bg-white text-black border border-white text-sm sm:text-base font-semibold tracking-[0.25em] hover:bg-brand-accent hover:text-black hover:border-brand-accent transition-all uppercase shadow-[0_0_30px_rgba(255,255,255,0.12)]"
        >
          SUBSCRIBE
        </a>

      </div>
    </section>
  );
}
