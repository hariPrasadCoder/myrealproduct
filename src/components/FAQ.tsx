import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { Plus, Minus } from 'lucide-react';
import { trackSectionView, trackFAQInteraction, trackApplyClick } from '../lib/posthog';

const FAQS = [
  {
    q: "What are the prerequisites to join?",
    a: "Only basic Python knowledge. Everything else, including AI tools, product frameworks, and deployment, will be taught during the workshop."
  },
  {
    q: "What is the MyRealProduct workshop?",
    a: "It’s a 4-week live, cohort-based program where you work in small teams to brainstorm, validate, and launch a real AI product from scratch."
  },
  {
    q: "Who is this program for?",
    a: "Students, job seekers, and professionals who want hands-on experience building AI products, instead of just adding theory or toy projects to their resume. Data Analysts & Data Scientists got the best experience out of the previous cohorts."
  },
  {
    q: "How much time do I need to commit per week?",
    a: "Expect 6–7 hours weekly maximum, including live mentor sessions, team collaboration, and self-work."
  },
  {
    q: "Do we pick our own product ideas?",
    a: "Yes. Every team brainstorms, validates, and decides on their own idea, with mentors guiding the process."
  },
  {
    q: "How will this help in my career?",
    a: "You’ll finish with a live product demo and practical skills that stand out in job applications. Past participants have used their projects to land interviews, and internships."
  },
  {
    q: "What happens if I miss a live session?",
    a: "Recordings will be shared so you can catch up anytime. Your team and mentors will also help you stay on track."
  },
  {
    q: "Is there a refund policy?",
    a: "Yes, if you feel the program isn’t right for you after Week 1 session, you can request a refund. We’ll refund you everything excluding the transaction fee (10%). But we are proud to say that not even single person has asked for a refund till now."
  },
  {
    q: "I’m not a “tech person.” Can I still join?",
    a: "No. You are expected to have basic Python skills to get the best out of this workshop. If you have never written a single line of code in your life, maybe this is not for you. Write to us (contact@myrealproduct.com), happy to send some resources to get started."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    trackSectionView('faq');
  }, []);

  const handleFAQClick = (index: number, question: string) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    trackFAQInteraction(question, isOpening ? 'expand' : 'collapse');
  };

  const handleApplyClick = () => {
    trackApplyClick('faq');
  };

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
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-tally-open="D4N6gl" data-tally-layout="modal" data-tally-width="500" data-tally-form-events-forwarding="1" onClick={handleApplyClick}>
              APPLY TO THE COHORT
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
                    onClick={() => handleFAQClick(index, faq.q)}
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
