import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PodcastNavbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/60 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-brand-text/50 hover:text-white transition-colors text-xs font-mono tracking-wider uppercase"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <div className="w-px h-5 bg-white/10 hidden sm:block" />
          <div className="font-display font-bold text-white tracking-tight">
            <span className="text-gradient">MRP</span>{' '}
            <span className="text-white/60 font-normal text-sm">Podcast</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#episodes"
            className="text-[11px] font-mono tracking-wider text-brand-text/50 hover:text-white transition-colors uppercase hidden sm:block"
          >
            Episodes
          </a>
          <a
            href="#subscribe"
            className="text-[11px] font-mono tracking-wider px-4 py-2 rounded-sm bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] hover:border-brand-primary/30 transition-all uppercase"
          >
            Subscribe
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
