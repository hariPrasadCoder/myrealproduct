import { Button } from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Final CTA */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to build your <br />
            <span className="text-gradient">AI Future?</span>
          </h2>
          <Button size="lg" className="text-lg font-semibold tracking-widest uppercase px-12 h-16 rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" data-cal-link="myrealproduct/info" data-cal-namespace="info" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
            APPLY TO THE COHORT
          </Button>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold font-display tracking-tight text-white">
            MyRealProduct
          </div>
          
          <div className="flex gap-8 text-sm text-brand-text/60">
            <a href="mailto:contact@myrealproduct.com" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-brand-text/40">
            © 2026 MyRealProduct. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
