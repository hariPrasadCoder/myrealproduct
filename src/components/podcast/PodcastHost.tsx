import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function PodcastHost() {
  return (
    <section className="py-28 md:py-36 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Gradient backdrop */}
              <div
                className="absolute inset-0 rounded-sm blur-3xl opacity-20"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(69,61,200,0.6), rgba(130,122,255,0.3))',
                }}
              />

              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 group">
                <img
                  src="/images/hari-prasad.webp"
                  alt="Hari Prasad, Host of The MRP Podcast"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-[10px] font-mono tracking-[0.3em] text-brand-accent uppercase mb-1">
                    Your Host
                  </p>
                  <h3 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                    Hari Prasad
                  </h3>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end opacity-40">
                  <div className="w-10 h-px bg-white" />
                  <div className="w-6 h-px bg-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase mb-6">
              Meet the Host
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-white leading-[0.95] mb-8">
              From Data Scientist
              <br />
              <span className="text-white/30">to AI Engineer.</span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-brand-text/75 font-light leading-relaxed max-w-xl">
              <p>
                <span className="text-white font-medium">
                  Hari doesn't just talk about AI. He builds with it.
                </span>{' '}
                After working with 5+ early-stage startups to launch their first
                AI-powered products, he realized most of the industry's
                conversations were happening behind closed doors.
              </p>
              <p>
                The MRP Podcast changes that. Every episode, Hari brings a fellow
                builder to the mic and extracts the lessons that took them years to
                learn, so you can apply them in weeks.
              </p>
              <p className="text-white/50 text-sm italic border-l-2 border-brand-primary/40 pl-4">
                "I've helped 2,000+ people break into AI. This podcast is the next
                chapter. Making those conversations public."
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: 'Education', value: 'Ivy League Grad' },
                { label: 'Speaking', value: 'TEDx Speaker' },
                { label: 'Connect', value: 'LinkedIn', href: 'https://www.linkedin.com/in/hariprasad20/' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-brand-accent transition-colors inline-flex items-center gap-1 text-sm"
                    >
                      {item.value} <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
