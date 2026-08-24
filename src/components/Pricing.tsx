import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Check, Info, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { trackApplyClick, trackSectionView, trackExternalLink } from '../lib/posthog';
import Reimbursement from './Reimbursement';

const INCLUDED = [
  "A real, working AI product: wrapper to production, deployed and live",
  "The full 4-week ladder: RAG, AI agents, and LLMOps, not just theory",
  "Weekly direction from Hari + daily support from your coach",
  "$50,000 worth of Software Credits & Discounts (Yes, you read it right). Check what you will get.",
  "Founder community for ongoing peer support (WhatsApp)",
];

export default function Pricing() {
  useEffect(() => {
    trackSectionView('pricing');
  }, []);

  const handleApplyClick = () => {
    trackApplyClick('pricing');
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-mono uppercase tracking-widest rounded-full mb-6">
            The Fast Track
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
            One real product. One path <span className="whitespace-nowrap">into AI.</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto bg-brand-card/30 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden relative group">

          {/* Decorative Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-primary/20 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-0 relative z-10">

            {/* Left Side - Pricing */}
            <div className="p-12 lg:p-16 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-mono uppercase tracking-widest mb-8">
                <Sparkles size={12} />
                <span>The Fast Track: your 1:1 personal trainer for 4 weeks</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                $1,999
              </h2>
              <p className="text-brand-text/60 text-sm font-mono uppercase tracking-wider mb-4">One-time payment</p>
              <p className="text-brand-text/40 text-xs max-w-[240px] leading-relaxed mb-10">
                Four weeks of personal guidance from Hari and your coach. Independent 1:1 technical coaching runs $150–$400/hr elsewhere.
              </p>

              <Button size="lg" className="w-full h-14 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]" data-tally-open="D4N6gl" data-tally-layout="modal" data-tally-width="500" data-tally-form-events-forwarding="1" onClick={handleApplyClick}>
                CLAIM YOUR SEAT
              </Button>

              <div className="mt-6 flex items-start gap-2.5 text-xs font-mono text-brand-accent/80 bg-brand-primary/10 px-4 py-3 rounded-sm border border-brand-primary/20 text-left max-w-[320px]">
                <Info size={14} className="shrink-0 mt-0.5" />
                <span className="leading-relaxed">We work with about 4 people a month. Not because we can't take more. Because we won't dilute the attention each person gets. · Next start: Saturday</span>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="p-12 lg:p-16 bg-white/[0.02]">
              <h3 className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-6">
                What you get
              </h3>
              <ul className="space-y-5">
                {INCLUDED.map((feature, index) => (
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

        <div className="max-w-5xl mx-auto mt-6">
          <Reimbursement />
        </div>
      </div>
    </section>
  );
}
