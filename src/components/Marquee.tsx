import { motion } from 'motion/react';

const LOGOS = [
  { src: "/logos/1.svg", alt: "The Associated Press", needsInvert: true, size: "" },
  { src: "/logos/2.png", alt: "Benzinga", needsInvert: true, size: "" },
  { src: "/logos/3.png", alt: "Fox News Media", needsInvert: false, size: "" },
  { src: "/logos/4.png", alt: "NBC News", needsInvert: true, size: "big" },
  { src: "/logos/5.png", alt: "ABC News", needsInvert: true, size: "big" },
  { src: "/logos/6.png", alt: "United Nations", needsInvert: true, size: "xl" },
];

export default function Marquee() {
  const tripled = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-12 border-y border-white/5 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <span className="text-sm font-mono text-brand-text uppercase tracking-widest opacity-60">
          As Featured In
        </span>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25 
          }}
        >
          {tripled.map((logo, index) => (
            <div
              key={index} 
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-auto object-contain transition-opacity duration-300 grayscale mix-blend-screen ${
                  logo.size === 'xl'
                    ? 'h-14 md:h-20 max-w-[160px] md:max-w-[220px]'
                    : logo.size === 'big' 
                    ? 'h-10 md:h-14 max-w-[130px] md:max-w-[180px]' 
                    : 'h-7 md:h-9 max-w-[100px] md:max-w-[140px]'
                } ${
                  logo.needsInvert 
                    ? 'invert opacity-50 hover:opacity-80' 
                    : 'opacity-40 hover:opacity-70'
                }`}
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
