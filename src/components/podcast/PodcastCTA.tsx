import { motion } from 'motion/react';
import { Youtube, ArrowUpRight } from 'lucide-react';

const YOUTUBE_URL = 'https://www.youtube.com/@MyRealProduct'; // replace with actual channel URL

const PLATFORMS = [
  {
    name: 'YouTube',
    icon: Youtube,
    href: YOUTUBE_URL,
    description: 'Watch full episodes & subscribe',
  },
];

export default function PodcastCTA() {
  return (
    <section className="py-28 md:py-36 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(69,61,200,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Audio wave decoration */}
          <div className="flex items-center justify-center gap-[2px] mb-10">
            {Array.from({ length: 16 }).map((_, i) => {
              const h = Math.sin((i / 15) * Math.PI) * 10 + 3;
              return (
                <motion.div
                  key={i}
                  className="w-[2px] rounded-full bg-gradient-to-t from-brand-primary/60 to-brand-accent/60"
                  style={{ height: h }}
                  animate={{ height: [h, h * 0.6, h] }}
                  transition={{
                    duration: 1.5 + Math.random(),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.06,
                  }}
                />
              );
            })}
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white leading-tight mb-6">
            Never miss{' '}
            <span className="text-white/30">an episode.</span>
          </h2>

          <p className="text-lg text-brand-text/60 font-light max-w-lg mx-auto mb-16 leading-relaxed">
            Subscribe on YouTube and get notified
            the moment a new episode drops.
          </p>

          {/* Platform card */}
          <div className="grid sm:grid-cols-1 gap-4 max-w-xs mx-auto">
            {PLATFORMS.map((p, i) => (
              <motion.a
                key={i}
                href={p.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center gap-3 p-6 rounded-sm border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-primary/25 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <p.icon size={20} className="text-brand-accent" />
                </div>
                <span className="text-sm font-display font-semibold text-white">
                  {p.name}
                </span>
                <span className="text-[11px] text-brand-text/40 font-light">
                  {p.description}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-brand-text/20 group-hover:text-brand-accent transition-colors"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
