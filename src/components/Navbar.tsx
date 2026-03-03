import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { BookOpen, Mic, Menu, X } from 'lucide-react';
import { trackApplyClick, trackEvent } from '../lib/posthog';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleApplyClick = () => {
    trackApplyClick('navbar');
    setOpen(false);
  };

  const handleBookClick = () => {
    trackEvent('navbar_book_clicked');
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="text-xl font-bold font-display tracking-tight text-white">
            MyRealProduct
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop */}
            <a
              href="/podcast"
              className="hidden lg:flex items-center gap-2 h-10 px-4 text-xs font-medium tracking-widest uppercase text-brand-text/60 hover:text-white transition-all duration-300"
            >
              <Mic size={13} />
              Podcast
            </a>
            <a
              href="/book"
              onClick={handleBookClick}
              className="hidden lg:flex items-center gap-2 h-10 px-4 text-xs font-medium tracking-widest uppercase text-brand-text/60 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-all duration-300"
            >
              <BookOpen size={13} />
              Free Book
            </a>

            <Button
              size="sm"
              className="hidden lg:flex h-10 px-6 text-xs font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
              data-tally-open="D4N6gl"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-form-events-forwarding="1"
              onClick={handleApplyClick}
            >
              APPLY
            </Button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex flex-col gap-3 lg:hidden"
          >
            <a
              href="/podcast"
              className="flex items-center gap-2 h-11 px-4 text-xs font-medium tracking-widest uppercase text-brand-text/60 hover:text-white transition-all"
            >
              <Mic size={13} />
              Podcast
            </a>
            <a
              href="/book"
              onClick={handleBookClick}
              className="flex items-center gap-2 h-11 px-4 text-xs font-medium tracking-widest uppercase text-brand-text/60 hover:text-white border border-white/10 hover:border-white/20 rounded-sm transition-all"
            >
              <BookOpen size={13} />
              Free Book
            </a>
            <Button
              size="sm"
              className="h-11 px-6 text-xs font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm transition-all"
              data-tally-open="D4N6gl"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-form-events-forwarding="1"
              onClick={handleApplyClick}
            >
              APPLY
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
