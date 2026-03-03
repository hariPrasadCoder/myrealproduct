import { Link } from 'react-router-dom';

export default function PodcastFooter() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white">
              <span className="text-gradient">MRP</span>{' '}
              <span className="text-white/50 font-normal text-sm">Podcast</span>
            </span>
            <span className="text-brand-text/20 text-xs">|</span>
            <Link
              to="/"
              className="text-xs text-brand-text/40 hover:text-white transition-colors"
            >
              MyRealProduct.com
            </Link>
          </div>

          <div className="flex items-center gap-6 text-xs text-brand-text/30">
            <a
              href="mailto:contact@myrealproduct.com"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <span>© 2026 MyRealProduct</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
