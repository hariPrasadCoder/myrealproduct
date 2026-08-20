import { Button } from './ui/Button';
import { trackApplyClick } from '../lib/posthog';

const NAV = [
  {
    label: 'Programs',
    links: [
      { href: '/', text: 'For Individuals' },
      { href: '/enterprise', text: 'For Enterprises' },
      { href: '/agency', text: 'Agency' },
      { href: '/portfolio', text: 'Builder Portfolio' },
    ],
  },
  {
    label: 'Free Resources',
    links: [
      { href: '/book', text: 'Free Book' },
      { href: '/podcast', text: 'Podcast' },
      { href: '/resources', text: '101 Cheatsheets' },
      { href: '/community', text: 'UFO Community' },
      { href: 'https://hariprasad00.substack.com/subscribe', text: 'Newsletter', external: true },
    ],
  },
  {
    label: 'Connect',
    links: [
      { href: 'mailto:contact@myrealproduct.com', text: 'contact@myrealproduct.com' },
      { href: 'https://www.linkedin.com/company/myrealproduct/', text: 'LinkedIn', external: true },
      { href: 'https://www.trustpilot.com/review/myrealproduct.com', text: 'Trustpilot', external: true },
    ],
  },
];

export default function Footer({ hideCta }: { hideCta?: boolean }) {
  const handleApplyClick = () => {
    trackApplyClick('footer');
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4">

        {/* Final CTA */}
        {!hideCta && <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            This Is Where The <span className="text-gradient">Searching Stops.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-text mb-8">
            Four weeks. One real product. Let’s build it.
          </p>
          <Button
            size="lg"
            className="text-lg font-semibold tracking-widest uppercase px-12 h-16 rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            data-tally-open="D4N6gl"
            data-tally-layout="modal"
            data-tally-width="500"
            data-tally-form-events-forwarding="1"
            onClick={handleApplyClick}
          >
            CLAIM YOUR SEAT
          </Button>
        </div>}

        {/* Nav columns */}
        <div className="border-t border-white/5 pt-16 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold font-display tracking-tight text-white mb-3">
              MyRealProduct
            </div>
            <p className="text-sm text-brand-text/40 leading-relaxed max-w-[180px]">
              Build AI products. Not just projects.
            </p>
          </div>

          {/* Link columns */}
          {NAV.map((col) => (
            <div key={col.label}>
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-5">
                {col.label}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-brand-text/50 hover:text-white transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/20 uppercase tracking-widest">
            © 2026 MyRealProduct. All rights reserved.
          </p>
          <p className="text-xs text-brand-text/20">
            900+ professionals trained worldwide.
          </p>
        </div>

      </div>
    </footer>
  );
}
