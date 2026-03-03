import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function PodcastCTA() {
  useEffect(() => {
    const w = 'https://tally.so/widgets/embed.js';
    if (typeof (window as any).Tally !== 'undefined') {
      (window as any).Tally.loadEmbeds();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement('script');
      s.src = w;
      s.onload = () => (window as any).Tally?.loadEmbeds();
      s.onerror = () => (window as any).Tally?.loadEmbeds();
      document.body.appendChild(s);
    }
  }, []);

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

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
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

          <p className="text-lg text-brand-text/60 font-light max-w-lg mx-auto mb-12 leading-relaxed">
            Drop your email and we'll notify you the moment a new episode drops.
          </p>

          {/* Tally embed */}
          <iframe
            data-tally-src="https://tally.so/embed/QKAqjg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="177"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="MyRealProduct Podcast"
          />
        </motion.div>
      </div>
    </section>
  );
}
