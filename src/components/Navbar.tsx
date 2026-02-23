import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { trackApplyClick } from '../lib/posthog';

export default function Navbar() {
  const handleApplyClick = () => {
    trackApplyClick('navbar');
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
        
        <Button size="sm" className="hidden md:flex h-10 px-6 text-xs font-medium tracking-widest uppercase bg-white hover:bg-brand-accent text-black rounded-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-all duration-300" data-tally-open="D4N6gl" data-tally-layout="modal" data-tally-width="500" data-tally-form-events-forwarding="1" onClick={handleApplyClick}>
          APPLY
        </Button>
      </div>
    </motion.nav>
  );
}
