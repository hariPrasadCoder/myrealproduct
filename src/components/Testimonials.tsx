import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { trackSectionView, trackVideoInteraction } from '../lib/posthog';

const REVIEWS = [
  {
    text: "MyRealProduct made complex AI concepts simple and approachable. Hari’s guidance and analogies gave me the confidence to use new tools and actually build products instead of just learning theory.",
    name: "Praveena Suresh",
    title: "Senior Data Analyst",
  },
  {
    text: "It’s not easy to keep a group motivated and engaged for 4 weeks, especially while staying motivated yourself. I’m really glad I joined this cohort. Before this, I had no idea how to actually apply AI in a meaningful way. But now, I’ve built an app(hehe) something I didn’t think I could do before.",
    name: "Vidyamai Shakkara",
    title: "Business Data Analyst",
  },
  {
    text: "Turning Python code into a real-world product was incredible. The constant guidance made learning rewarding.",
    name: "Joan Xavier",
    title: "PhD Candidate",
  }
];

const VIDEOS = [
  { src: "/videos/testimonial-1.mp4", label: "Student Story" },
  { src: "/videos/testimonial-2.mp4", label: "Student Story" },
  { src: "/videos/testimonial-3.mp4", label: "Student Story" },
  { src: "/videos/testimonial-4.mp4", label: "Student Story" },
  { src: "/videos/testimonial-5.mp4", label: "Student Story" },
];

function VideoCard({ src, label, className, isLarge = false, videoId }: { src: string; label: string; className?: string; isLarge?: boolean; videoId?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
      trackVideoInteraction('play', videoId || src);
    } else {
      vid.pause();
      setIsPlaying(false);
      trackVideoInteraction('pause', videoId || src);
    }
  };

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden bg-black/40 border border-white/10 hover:border-white/20 transition-colors ${className ?? ''}`}
      onClick={togglePlay}
    >
      {/* Tech Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-white/20 z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-white/20 z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-white/20 z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/20 z-10" />

      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
      />

      {/* Play overlay — hides when playing */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-[5] transition-opacity duration-300">
          <div className={`border border-white/20 flex items-center justify-center backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 rounded-full ${isLarge ? 'w-20 h-20' : 'w-12 h-12'}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className={`${isLarge ? 'w-6 h-6' : 'w-4 h-4'} ml-0.5`}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      )}

      <div className="absolute bottom-3 left-3 z-10">
        <p className={`font-mono text-white/40 uppercase ${isLarge ? 'text-xs tracking-widest' : 'text-[10px]'}`}>{label}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  useEffect(() => {
    trackSectionView('testimonials');
  }, []);

  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Noise & Grid */}
      <div className="noise-overlay" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              Student Success
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight">
              Don't just take <br />
              <span className="text-white/40">our word for it.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-text max-w-sm text-left leading-relaxed"
          >
            Join a community of builders who have transformed their careers through shipping real AI products.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Large Video Feature (Span 8) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 aspect-video"
          >
            <VideoCard
              src={VIDEOS[0].src}
              label="Featured Story"
              className="w-full h-full"
              isLarge
            />
          </motion.div>

          {/* Review Card 1 (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-[#1E1E2E] p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors group"
          >
            <Quote className="text-brand-primary/20 w-10 h-10 mb-4 group-hover:text-brand-primary/40 transition-colors" />
            <p className="text-brand-text/80 leading-relaxed mb-6">
              "{REVIEWS[0].text}"
            </p>
            <div>
              <p className="text-white font-medium">{REVIEWS[0].name}</p>
              <p className="text-xs text-white/40 font-mono uppercase mt-1">{REVIEWS[0].title}</p>
            </div>
          </motion.div>

          {/* Review Card 2 (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-[#252535] p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors group"
          >
            <Quote className="text-brand-accent/20 w-10 h-10 mb-4 group-hover:text-brand-accent/40 transition-colors" />
            <p className="text-brand-text/80 leading-relaxed mb-6">
              "{REVIEWS[1].text}"
            </p>
            <div>
              <p className="text-white font-medium">{REVIEWS[1].name}</p>
              <p className="text-xs text-white/40 font-mono uppercase mt-1">{REVIEWS[1].title}</p>
            </div>
          </motion.div>

          {/* Small Video Grid (Span 8) — 4 remaining videos as rectangles */}
          <div className="md:col-span-8 grid grid-cols-2 gap-4">
            {VIDEOS.slice(1).map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="aspect-video"
              >
                <VideoCard
                  src={video.src}
                  label={`Student ${i + 2}`}
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
