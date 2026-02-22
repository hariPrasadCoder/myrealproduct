import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { Check, ArrowRight } from 'lucide-react';

const WEEKS = [
  {
    week: "01",
    title: "Problem Identification",
    subtitle: "Foundation & Strategy",
    items: ["Market Analysis", "Competitor Research", "Landing Page", "Project Management"]
  },
  {
    week: "02",
    title: "Building the MVP",
    subtitle: "Core Development",
    items: ["AI Agents & RAG", "Vector Databases", "LLM Integration", "Streamlit UI"]
  },
  {
    week: "03",
    title: "Deployment",
    subtitle: "Production Infrastructure",
    items: ["AWS Architecture", "CI/CD Pipelines", "Domain & SSL", "Security Best Practices"]
  },
  {
    week: "04",
    title: "Go-to-Market",
    subtitle: "Launch & Scale",
    items: ["Marketing Frameworks", "Pitch Deck", "User Acquisition", "Feedback Loops"]
  }
];

export default function Syllabus() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-medium text-white leading-none"
          >
            The <br /> Curriculum
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-text max-w-md text-left md:text-right mt-8 md:mt-0"
          >
            A 4-week intensive sprint designed to take you from idea to deployed product. No fluff, just shipping.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-0 right-0 h-px bg-white/10 hidden lg:block" />

          {WEEKS.map((week, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pt-8 group"
            >
              {/* Milestone Marker */}
              <div className="absolute top-0 left-0 lg:left-8 w-3 h-3 bg-brand-dark border border-white/20 rounded-full z-10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors duration-300" />
              <div className="absolute top-1.5 left-0 lg:left-8 w-px h-full bg-white/10 lg:hidden" />

              <div className="pl-8 lg:pl-0 lg:pt-8">
                <span className="text-6xl font-display font-bold text-white/5 mb-4 block group-hover:text-white/10 transition-colors">
                  {week.week}
                </span>
                
                <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {week.title}
                </h3>
                <p className="text-sm font-mono text-brand-primary uppercase tracking-wider mb-6">
                  {week.subtitle}
                </p>

                <ul className="space-y-3 border-t border-white/5 pt-6">
                  {week.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text/80 text-sm group-hover:text-white transition-colors">
                      <Check size={14} className="text-brand-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <Button size="lg" className="h-14 px-12 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-cal-link="myrealproduct/info" data-cal-namespace="info" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
            I'M READY TO BREAK INTO AI
          </Button>
        </div>
      </div>
    </section>
  );
}
