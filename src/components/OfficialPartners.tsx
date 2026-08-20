import { motion } from 'motion/react';

const PARTNERS = [
  { name: "AWS", src: "/logos/aws.svg", height: "h-6 md:h-7" },
  { name: "Anthropic", src: "/logos/anthropic.svg", height: "h-4 md:h-5" },
];

export default function OfficialPartners() {
  return (
    <section className="py-10 border-b border-white/5 bg-brand-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <span className="text-xs font-mono text-brand-text uppercase tracking-widest opacity-60">
            Official Partners
          </span>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center px-5 py-2.5 rounded-full bg-white"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={`${partner.height} w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
