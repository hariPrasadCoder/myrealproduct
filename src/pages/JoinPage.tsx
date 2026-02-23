import { motion } from 'motion/react';
import { Check, Info, Sparkles, Quote, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState, useRef } from 'react';

const FEATURES = [
  "4 Week Product Building Live Workshops (Not a recording)",
  "$50,000 worth of Software Credits & Discounts",
  "You'll be paired with 3 or 4 teammates",
  "Virtual Breakout Room sessions",
  "Mentorship support (from Industry experts)",
  "WhatsApp community",
  "7 day money back guarantee (if you are not satisfied) – No questions asked!"
];

const REVIEWS = [
  {
    text: "MyRealProduct made complex AI concepts simple and approachable. Hari's guidance and analogies gave me the confidence to use new tools and actually build products instead of just learning theory.",
    name: "Praveena Suresh",
    title: "Senior Data Analyst",
  },
  {
    text: "It's not easy to keep a group motivated and engaged for 4 weeks, especially while staying motivated yourself. I'm really glad I joined this cohort. Before this, I had no idea how to actually apply AI in a meaningful way. But now, I've built an app — something I didn't think I could do before.",
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
  { src: "/videos/testimonial-1.mp4", label: "Featured Story" },
  { src: "/videos/testimonial-2.mp4", label: "Student Story" },
  { src: "/videos/testimonial-3.mp4", label: "Student Story" },
];

function VideoCard({ src, label, className, isLarge = false }: { src: string; label: string; className?: string; isLarge?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden bg-black/40 border border-white/10 hover:border-white/20 transition-colors ${className ?? ''}`}
      onClick={togglePlay}
    >
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

export default function JoinPage() {
  const stripeLink = "https://buy.stripe.com/5kQeV60dmaub1Cu7gsew801";

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-mono uppercase tracking-widest mb-8">
              <Sparkles size={14} />
              <span>Exclusive Invite</span>
            </span>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
              Build an End-to-End<br />
              <span className="text-brand-accent">AI Product in 4 Weeks</span>
            </h1>
            
            <p className="text-lg text-brand-text/70 max-w-xl mx-auto mb-10">
              Join 2,000+ engineers who have transformed from learners to builders. 
              Ship a real AI product, not just another tutorial project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-brand-card/30 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-primary/20 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-0 relative z-10">
              {/* Left Side - Pricing */}
              <div className="p-12 lg:p-16 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-mono uppercase tracking-widest mb-8">
                  <Sparkles size={12} />
                  <span>Limited Availability</span>
                </div>

                <div className="mb-2">
                  <span className="text-3xl font-display font-medium text-white/40 line-through decoration-white/30 decoration-1">
                    $4000
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                  $599
                </h2>
                <p className="text-brand-text/60 text-sm font-mono uppercase tracking-wider mb-10">One-time payment</p>

                <a 
                  href={stripeLink}
                  className="w-full"
                >
                  <Button 
                    size="lg" 
                    className="w-full h-14 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
                  >
                    JOIN NOW
                    <ArrowRight size={18} />
                  </Button>
                </a>
                
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-brand-accent/80 bg-brand-primary/10 px-4 py-2 rounded-sm border border-brand-primary/20">
                  <Info size={14} />
                  <span>Only taking 15 people this cohort</span>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="p-12 lg:p-16 bg-white/[0.02]">
                <h3 className="text-2xl font-display font-medium text-white mb-8">
                  What's included:
                </h3>
                <ul className="space-y-5">
                  {FEATURES.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 text-brand-text/90 leading-relaxed group/item"
                    >
                      <div className="mt-1.5 w-4 h-4 rounded-full bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:border-brand-primary transition-colors duration-300">
                        <Check size={10} className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="text-sm md:text-base font-light">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
                Student Success
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
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

          {/* Video + Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Video Feature */}
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

            {/* Review Card 1 */}
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

            {/* Review Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-6 bg-[#252535] p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors group"
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

            {/* Review Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-6 bg-[#1E1E2E] p-8 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors group"
            >
              <Quote className="text-brand-primary/20 w-10 h-10 mb-4 group-hover:text-brand-primary/40 transition-colors" />
              <p className="text-brand-text/80 leading-relaxed mb-6">
                "{REVIEWS[2].text}"
              </p>
              <div>
                <p className="text-white font-medium">{REVIEWS[2].name}</p>
                <p className="text-xs text-white/40 font-mono uppercase mt-1">{REVIEWS[2].title}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to build something real?
            </h3>
            <p className="text-brand-text/70 mb-8">
              Join the next cohort and ship your first AI product in just 4 weeks.
            </p>
            
            <a href={stripeLink}>
              <Button 
                size="lg" 
                className="h-14 px-12 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 mx-auto"
              >
                JOIN NOW — $599
                <ArrowRight size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} MyRealProduct. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
