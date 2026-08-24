import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { Plus, Minus } from 'lucide-react';
import { trackSectionView, trackFAQInteraction, trackApplyClick, trackBookCallClick } from '../lib/posthog';

const FAQS: { q: string; a: string; calLink?: string }[] = [
  {
    q: "What are the prerequisites to join?",
    a: "Only basic Python knowledge. Everything else, including AI tools, product frameworks, and deployment, will be taught during the workshop."
  },
  {
    q: "What is the MyRealProduct program?",
    a: "It’s a 4-week build program. You climb one ladder (a working app, then RAG, then AI agents, then production) and ship a real AI product along the way. Hari directs your plan weekly; your coach is with you daily."
  },
  {
    q: "Do I have to wait for a cohort to start?",
    a: "No. A few new builders start every Saturday, and we cap how many to keep the coaching ratio real. Apply and you'll usually hear back within a day."
  },
  {
    q: "Do I need a team to join?",
    a: "No. You can build solo with your personal coach and Hari guiding you the whole way. The community is there for support, not a requirement."
  },
  {
    q: "Do I pick what I build?",
    a: "You pick the domain: legal, healthcare, e-commerce, whatever fits your background or where you want to go next. Hari helps you scope it in week one. The technical path (app, then RAG, then agents, then production) is the same proven ladder for everyone."
  },
  {
    q: "Do I need to already know RAG or AI agents?",
    a: "No, that’s exactly what weeks two and three teach you. Week one is deliberately simple so anyone with basic Python can start."
  },
  {
    q: "Why $1,999?",
    a: "You’re not paying for four weeks of class. You’re paying for a personal coach in daily contact with you, Hari’s direct weekly feedback, and a guaranteed shipped product at the end. Independent 1:1 technical coaching alone runs $150–$400/hr elsewhere."
  },
  {
    q: "How will this help my career?",
    a: "You’ll finish with a live product demo and practical skills that stand out in job applications. Past participants have used their projects to land interviews, and internships."
  },
  {
    q: "What happens if I miss a live session?",
    a: "The entire program is personalized around you, so you choose from the available Saturday session times to find the best fit for your schedule. If you still need to miss one, you’ll receive the recording and your coach will help you catch up and stay on track."
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. Refunds are prorated by completed weeks: after week 1, you receive 75% back; after week 2, 50%; after week 3, 25%. All refunds exclude a 10% transaction fee. Refunds apply to future weeks only, so any week that has started counts as used."
  },
  {
    q: "I’m not a “tech person.” Can I still join?",
    a: "Basic Python knowledge helps you get the most out of the program. That said, product managers and non-technical folks have joined and successfully built their own products end to end. If you're unsure whether this is right for you, book a call with us and we'll help you figure it out.",
    calLink: "myrealproduct/info"
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
              CLAIM YOUR SEAT
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
                          {faq.a.replace('book a call with us', '')}
                          {faq.calLink ? (
                            <button
                              data-cal-link={faq.calLink}
                              data-cal-namespace="info"
                              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                              onClick={() => trackBookCallClick('faq')}
                              className="text-brand-accent underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
                            >
                              book a call with us
                            </button>
                          ) : null}
                          {faq.calLink ? ' and we\'ll help you figure it out.' : ''}
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
