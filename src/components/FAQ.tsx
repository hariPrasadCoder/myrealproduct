import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "What are the prerequisites to join?",
    a: "Basic Python programming knowledge is the only prerequisite. You don't need any prior AI or machine learning experience."
  },
  {
    q: "What is the MyRealProduct workshop?",
    a: "MyRealProduct is a 4-week intensive cohort where you learn AI by building a real, deployable product from scratch with expert mentorship."
  },
  {
    q: "How much time do I need to commit per week?",
    a: "Plan for approximately 5 hours per week for take-home assessments, plus attending the live Saturday morning sessions."
  },
  {
    q: "Do we pick our own product ideas?",
    a: "Yes! You'll work on a product idea that you're passionate about. We guide you through validating and building it into a real product."
  },
  {
    q: "Is there a refund policy?",
    a: "Please reach out to our team for details on our refund policy. We want to ensure every participant gets maximum value."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-4">
            <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-mono uppercase tracking-widest rounded-full mb-6">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-brand-text mb-8">
              Some of the most common questions. Can't find the right answer? Book an info call with us.
            </p>
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              I'M READY TO BREAK INTO AI
            </Button>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-brand-card border border-white/5 rounded-xl overflow-hidden transition-colors hover:border-white/10"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-medium text-lg text-white pr-8">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-brand-primary">
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-brand-text leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
