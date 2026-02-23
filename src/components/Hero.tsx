import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Terminal, Cpu, Globe, Play } from 'lucide-react';
import Particles from './Particles';
import { useState, useEffect } from 'react';
import { trackCTAClick, trackVideoInteraction, trackSectionView } from '../lib/posthog';

var BUNNY_BASE = "https://player.mediadelivery.net/embed/546900/9abfd383-b962-4c1e-b883-a75e4745c551";
var PREVIEW_SRC = BUNNY_BASE + "?autoplay=true&muted=true&loop=true&preload=true&responsive=true&controls=false";
var FULL_SRC = BUNNY_BASE + "?autoplay=true&muted=false&loop=false&preload=true&responsive=true&controls=true&primaryColor=453dc8";

export default function Hero() {
  var playState = useState(false);
  var isPlaying = playState[0];
  var setIsPlaying = playState[1];

  // Track hero section view on mount
  useEffect(() => {
    trackSectionView('hero');
  }, []);

  const handleCTAClick = () => {
    trackCTAClick('book_call', 'hero');
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    trackVideoInteraction('play', 'hero_video');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Noise Overlay for Texture */}
      <div className="noise-overlay" />

      {/* Spline 3D Background — masked to hide outer ring, only inner glow visible */}
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

        {/* Tint: brand purple duotone */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 55% 48% at 50% 45%, rgba(69, 61, 200, 0.7) 0%, rgba(69, 61, 200, 0.3) 40%, transparent 70%)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Tech Grid Overlay - Subtle */}
      <div className="absolute inset-0 z-[1] bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Floating Particles */}
      <Particles particleCount={60} className="z-[2] opacity-60" />

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Floating UI Elements (HUD Style) */}
      <div className="absolute top-32 left-10 hidden lg:flex flex-col gap-4 opacity-30">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
          <Terminal size={12} />
          <span>SYSTEM_READY</span>
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>

      <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-4 items-end opacity-30">
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-accent">
          <span>NETWORK_STABLE</span>
          <Globe size={12} />
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Badge - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all hover:bg-white/[0.05] group cursor-default">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary/20 text-brand-primary">
              <Cpu size={12} />
            </span>
            <span className="text-xs font-mono tracking-wider text-brand-text uppercase group-hover:text-white transition-colors">
              New Cohort: <span className="text-brand-accent">Applications Open</span>
            </span>
          </div>
        </motion.div>

        {/* Main Typography - Editorial & Balanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 relative"
        >
          {/* Decorative Brackets */}
          <span className="absolute -left-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'{'}</span>
          <span className="absolute -right-8 top-0 text-6xl font-thin text-white/5 hidden md:block font-mono">{'}'}</span>

          <h1 className="text-5xl md:text-7xl font-medium leading-[1.1] mb-8 tracking-tight font-display text-white">
            Build an End-to-End <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary blur-2xl opacity-30" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-accent to-white font-semibold">
                AI Product
              </span>
            </span>
            <span className="block text-4xl md:text-6xl text-white/40 mt-2 font-normal">
              in just 4 weeks.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text/80 mb-12 max-w-xl mx-auto leading-relaxed font-light tracking-wide">
          Build Products, Not Just Projects. Learn while you build.<br />
            Join <span className="text-white font-medium">2,000+ engineers</span> building the future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-12 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-tally-open="D4N6gl" data-tally-layout="modal" data-tally-width="500" data-tally-form-events-forwarding="1" onClick={handleCTAClick}>
              APPLY TO THE COHORT
            </Button>
          </div>
        </motion.div>

        {/* Video Area — Silent preview loop, click for full playback */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl aspect-video bg-black relative overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Preview iframe — always loaded, muted loop, no controls */}
          <iframe 
            src={PREVIEW_SRC}
            loading="eager" 
            className={"absolute inset-0 w-full h-full border-0" + (isPlaying ? " hidden" : "")}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
            allowFullScreen={true}
          />

          {/* Full iframe — only mounts after click */}
          {isPlaying && (
            <iframe 
              src={FULL_SRC}
              loading="eager" 
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
              allowFullScreen={true}
            />
          )}

          {/* Play button overlay — sits on top of preview */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
              onClick={handleVideoPlay}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white group-hover:text-brand-primary group-hover:fill-brand-primary ml-1 transition-colors duration-300" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
