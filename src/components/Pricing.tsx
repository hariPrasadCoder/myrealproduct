import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Check, Info, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { trackCTAClick, trackSectionView, trackExternalLink } from '../lib/posthog';

const FEATURES = [
  "4 Week Product Building Live Workshops (Not a recording)",
  "$50000 worth of Software Credits & Discounts (Yes, you read it right). Check what you will get.",
  "You'll be paired with 3 or 4 teammates",
  "Virtual Breakout Room sessions",
  "Mentorship support (from Industry experts)",
  "WhatsApp community",
  "7 day money back guarantee (if you are not satisfied) – No questions asked! (excluding the 10% transaction fee)"
];

export default function Pricing() {
  useEffect(() => {
    trackSectionView('pricing');
  }, []);

  const handleCTAClick = () => {
    trackCTAClick('book_call', 'pricing');
  };

  const handleDealsClick = () => {
    trackExternalLink('https://deals.myrealproduct.com/', 'Check what you will get');
  };

  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-brand-card/30 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden relative group">
          
          {/* Decorative Gradient Border */}
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

              <Button size="lg" className="w-full h-14 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]" data-tally-open="D4N6gl" data-tally-layout="modal" data-tally-width="500" data-tally-form-events-forwarding="1" onClick={handleCTAClick}>
                APPLY TO THE COHORT
              </Button>
              
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
                  <li key={index} className="flex items-start gap-4 text-brand-text/90 leading-relaxed group/item">
                    <div className="mt-1.5 w-4 h-4 rounded-full bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:border-brand-primary transition-colors duration-300">
                      <Check size={10} className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm md:text-base font-light">
                      {feature.includes("Check what you will get") ? (
                        <>
                          {feature.split("Check what you will get")[0]}
                          <a href="https://deals.myrealproduct.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-accent underline underline-offset-4 decoration-white/30 hover:decoration-brand-accent transition-all" onClick={handleDealsClick}>
                            Check what you will get
                          </a>
                          {feature.split("Check what you will get")[1]}
                        </>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
