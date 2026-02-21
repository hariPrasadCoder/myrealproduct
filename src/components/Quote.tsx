import { motion } from 'motion/react';
import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <QuoteIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-primary/20 absolute -top-8 -left-4 md:-top-12 md:-left-16 rotate-180" />
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-8 relative z-10">
            "The way to get started is to quit talking and <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-accent to-brand-primary">begin doing</span>."
          </h2>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent mb-2" />
            <p className="text-sm md:text-lg font-mono tracking-[0.2em] uppercase text-brand-text/80">Walt Disney</p>
          </div>

          <QuoteIcon className="w-12 h-12 md:w-16 md:h-16 text-brand-primary/20 absolute -bottom-8 -right-4 md:-bottom-12 md:-right-16" />
        </motion.div>
      </div>
    </section>
  );
}
