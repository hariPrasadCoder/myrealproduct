import { motion } from 'motion/react';
import { Mic2, Users, Zap, Brain } from 'lucide-react';

const PILLARS = [
  {
    icon: Brain,
    title: 'Deep Dives',
    description:
      'Beyond the hype. Breaking down how AI products actually get built, deployed, and scaled in production.',
  },
  {
    icon: Users,
    title: 'Builder Stories',
    description:
      'Real founders and engineers sharing their journey: the wins, the failures, and the critical pivots.',
  },
  {
    icon: Zap,
    title: 'Actionable Takeaways',
    description:
      'Every episode delivers concrete frameworks, tools, and strategies you can apply to your own builds.',
  },
  {
    icon: Mic2,
    title: 'Unfiltered',
    description:
      'No scripts. No sponsors dictating content. Just honest, raw conversations between real practitioners.',
  },
];

export default function PodcastAbout() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky sticky header to make it less "wordy block", more editorial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 shrink-0 lg:sticky lg:top-32 h-fit"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-brand-accent/50"></span>
              The Format
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-white leading-[1.1] mb-6 shadow-sm">
              Two voices. <br />
              <span className="text-white/30">One conversation.</span><br />
              <span className="text-white/30">Zero BS.</span>
            </h2>
            <p className="text-base text-brand-text/70 font-light leading-relaxed">
              Every episode, we sit down with an AI builder and have the conversation you wish you could overhear. No fluff. Just what actually works.
            </p>
          </motion.div>

          {/* Right Column: Original content pillars shown more visually and seamlessly */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-14 mt-4 lg:mt-0">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group flex flex-col items-start"
              >
                {/* Visual marker */}
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all duration-500">
                  <pillar.icon size={20} className="text-brand-accent group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-brand-text/60 leading-relaxed font-light">
                  {pillar.description}
                </p>
                
                {/* Subtle base line that lights up on hover - replaces heavy card borders */}
                <div className="absolute -left-6 top-6 bottom-0 w-px bg-white/[0.03] group-hover:bg-brand-accent/40 transition-colors duration-500 hidden sm:block" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
