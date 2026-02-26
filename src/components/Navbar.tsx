import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { BookOpen } from 'lucide-react';
import { trackApplyClick, trackEvent } from '../lib/posthog';

export default function Navbar() {
  const handleApplyClick = () => {
    trackApplyClick('navbar');
  };

  const handleBookClick = () => {
    trackEvent('navbar_book_clicked');
  };

  return (
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
          <a
            href="/book"
            onClick={handleBookClick}
            className="hidden md:flex items-center gap-2 h-10 px-4 text-xs font-medium tracking-widest uppercase text-brand-text/60 hover:text-white border border-white/10 hover:border-white/30 rounded-sm transition-all duration-300"
          >
            <BookOpen size={13} />
            Free Book
          </a>

          <Button
            size="sm"
            className="hidden md:flex h-10 px-6 text-xs font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300"
            data-tally-open="D4N6gl"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-form-events-forwarding="1"
            onClick={handleApplyClick}
          >
            APPLY
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
