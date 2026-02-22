import { motion } from 'motion/react';

const LOGOS = [
  "/images/logos/Screenshot-2025-09-12-at-10.03.27 AM-1.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.12.54 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.14.03 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.14.51 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.16.51 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.17.39 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.17.52 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.18.14 AM.webp",
  "/images/logos/Screenshot-2025-09-12-at-10.18.28 AM.webp",
];

export default function LogoScroll() {
  const tripled = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 border-t border-white/5 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <span className="text-sm font-mono text-brand-text uppercase tracking-widest opacity-60">
          Tools & Technologies You'll Use
        </span>
      </div>

      <div className="flex overflow-hidden relative">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {tripled.map((src, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center px-4">
              <img
                src={src}
                alt={`Tool logo ${(index % LOGOS.length) + 1}`}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      </div>
    </section>
  );
}
