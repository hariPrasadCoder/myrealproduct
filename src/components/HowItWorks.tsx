import { motion } from 'motion/react';
import { FileText, Users, CheckCircle, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    number: "01",
    icon: FileText,
    title: "Apply",
    highlight: "Submit your application",
    detail: "Just fill a simple form , give us your LinkedIn profile link, that's it!",
    accent: "from-brand-primary to-brand-accent",
  },
  {
    number: "02",
    icon: Users,
    title: "Interview",
    highlight: "We get to know each other",
    detail: "A quick call to see if we're the right fit. Ask us anything , we'll do the same.",
    accent: "from-brand-accent to-brand-secondary",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Decision",
    highlight: "Hear back within 24 hours",
    detail: "No waiting around. You'll know if you're in , just within a day.",
    accent: "from-brand-secondary to-[#A78BFA]",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-mono uppercase tracking-widest rounded-full mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight">
            Three steps to get in
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">

            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-white/10 z-0" />

            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number + icon circle */}
                <div className="relative mb-8 z-10">
                  {/* Glow ring on hover */}
                  <div className={`absolute -inset-3 rounded-full bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                  <div className={`relative w-32 h-32 rounded-full border border-white/10 bg-brand-dark flex flex-col items-center justify-center group-hover:border-brand-primary/50 transition-colors duration-500`}>
                    {/* Big number watermark */}
                    <span className="absolute text-7xl font-display font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors select-none">
                      {step.number}
                    </span>
                    {/* Icon */}
                    <step.icon className="w-8 h-8 text-white/60 group-hover:text-brand-accent transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Arrow connector — mobile only, between steps */}
                {index < STEPS.length - 1 && (
                  <div className="md:hidden flex justify-center my-2">
                    <ArrowRight className="w-5 h-5 text-white/20 rotate-90" />
                  </div>
                )}

                {/* Text */}
                <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm font-mono text-brand-primary uppercase tracking-wider mb-3">
                  {step.highlight}
                </p>
                <p className="text-brand-text/70 text-sm leading-relaxed max-w-[220px]">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Curated Intake Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <div className="inline-block w-px h-12 bg-gradient-to-b from-transparent via-brand-primary/40 to-transparent mb-8" />
          <p className="text-2xl md:text-3xl font-display font-medium text-white leading-snug tracking-tight">
          Not everyone gets in.
          
          </p>
          <p className="text-lg md:text-xl text-brand-text/60 mt-3 leading-relaxed">
          We accept just 10% of applicants to protect <span className="text-white font-medium">an elite community of builders.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
