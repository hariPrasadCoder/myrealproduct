import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, Wallet } from 'lucide-react';
import { trackSectionView, trackEvent } from '../lib/posthog';

const LETTER = `Subject: Professional Development Request – AI Product Building

Hi [Manager's Name],

Hope you're well. I wanted to reach out about a learning opportunity I'm genuinely excited about and think could bring real value to our team.

I've come across a hands-on AI product building program (MyRealProduct.com) that takes you from identifying a real problem all the way to building and shipping a live AI product in 4 weeks, with a personal coach working with you daily, not a course you just watch. You leave with something actually built and deployed.

What I'd walk away with:
- Hands-on experience building and shipping a real AI product
- Practical skills in RAG, agentic AI, LangGraph, LLMs, and AWS deployment (EC2, S3) I can apply directly to our work
- A clearer product thinking process for identifying problems worth solving with AI

How this helps the team:
- I plan to share what I learn as I go
- [Describe a specific team use case, e.g., "We could prototype an internal AI tool" or "I could bring more informed thinking to our AI roadmap discussions"]
- I think there's a real opportunity for us to move faster in this space once I have these skills hands-on

The program costs $1,999.

Would it be possible to get this reimbursed through the company? Happy to share more details if helpful.

Thanks,
[Your Name]`;

export default function Reimbursement() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    trackSectionView('reimbursement');
  }, []);

  const handleOpenModal = () => {
    setOpen(true);
    trackEvent('reimbursement_letter_opened', { page: window.location.pathname });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(LETTER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    trackEvent('reimbursement_letter_copied', { page: window.location.pathname });
  };

  return (
    <>
      <motion.div
        id="reimbursement"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.03] border border-white/8 rounded-xl px-5 py-4"
      >
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-brand-primary/15 border border-brand-primary/25 flex items-center justify-center shrink-0">
            <Wallet size={14} className="text-brand-accent" />
          </div>
          <p className="text-sm text-brand-text/80">
            <span className="text-white font-medium">Your employer can pay for this.</span>{' '}
            We wrote the email for you.
          </p>
        </div>
        <button
          onClick={handleOpenModal}
          className="h-10 px-6 text-xs font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 cursor-pointer shrink-0"
        >
          Get the Reimbursement Letter
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-brand-card border border-white/10 rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 border-b border-white/8 shrink-0">
                <div>
                  <h3 className="text-lg font-display font-medium text-white">
                    Reimbursement Letter
                  </h3>
                  <p className="text-brand-text/40 text-xs font-mono mt-0.5 uppercase tracking-wider">
                    Fill in the <span className="text-brand-accent/70">[brackets]</span> · Copy · Send
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-white/8 transition-colors text-brand-text/50 hover:text-white cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Letter */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="bg-brand-dark/50 border border-white/6 rounded-xl p-6">
                  <pre className="text-brand-text/70 text-sm leading-7 whitespace-pre-wrap font-sans">
                    {LETTER.split(/(\[.*?\]|MyRealProduct\.com)/).map((part, i) => {
                      if (part.startsWith('[')) {
                        return (
                          <mark key={i} className="bg-brand-primary/20 text-brand-accent rounded px-0.5 font-medium" style={{ fontStyle: 'normal' }}>
                            {part}
                          </mark>
                        );
                      } else if (part === 'MyRealProduct.com') {
                        return (
                          <a key={i} href="https://myrealproduct.com/" target="_blank" rel="noopener noreferrer" className="text-brand-accent underline underline-offset-2 hover:text-white transition-colors">
                            {part}
                          </a>
                        );
                      }
                      return part;
                    })}
                  </pre>
                </div>
              </div>

              {/* Copy */}
              <div className="p-6 border-t border-white/8 shrink-0">
                <button
                  onClick={handleCopy}
                  className="w-full h-12 flex items-center justify-center gap-2.5 rounded-sm bg-white text-black text-sm font-medium tracking-widest uppercase hover:bg-brand-accent transition-all duration-300 cursor-pointer"
                >
                  {copied ? (
                    <><Check size={14} /> Copied!</>
                  ) : (
                    <><Copy size={14} /> Copy Letter</>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
