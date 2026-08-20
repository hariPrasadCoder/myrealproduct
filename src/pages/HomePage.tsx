import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import OfficialPartners from '../components/OfficialPartners';
import TheLadder from '../components/TheLadder';
import Founder from '../components/Founder';
import Testimonials from '../components/Testimonials';
import PortfolioPreview from '../components/PortfolioPreview';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useScrollDepthTracking, useTimeOnPage } from '../hooks/useAnalytics';

export default function HomePage() {
  // Track scroll depth milestones (25%, 50%, 75%, 100%)
  useScrollDepthTracking();

  // Track time spent on page
  useTimeOnPage();

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>Become an AI Engineer in 4 Weeks | MyRealProduct</title>
        <meta name="description" content="Become an AI engineer in four weeks by building a real product. Get weekly direction from Hari and daily support from your dedicated coach." />
        <link rel="canonical" href="https://www.myrealproduct.com/" />
        <meta property="og:title" content="Become an AI Engineer in Just 4 Weeks" />
        <meta property="og:description" content="Build a real AI product with weekly direction from Hari and daily support from your dedicated coach." />
        <meta property="og:url" content="https://www.myrealproduct.com/" />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta name="twitter:title" content="Become an AI Engineer in Just 4 Weeks" />
        <meta name="twitter:description" content="Build a real AI product with weekly direction from Hari and daily support from your dedicated coach." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>
      <Navbar />

      {/* 1. The promise */}
      <Hero />

      {/* 2. Trust, fast — one beat, not two */}
      <Marquee />
      <OfficialPartners />

      {/* 3. The mechanism — the contrast headline, the 4-week ladder, the one support mention */}
      <TheLadder />

      {/* 4. Who's behind it — answers "who is Hari" right when he's first promised */}
      <Founder />

      {/* 5. Proof — quotes, then a compact path to the full builder portfolio. */}
      <Testimonials />
      <PortfolioPreview />

      {/* 6. The ask — price, reimbursement folded in, then objections */}
      <Pricing />
      <FAQ />

      <Footer />
    </main>
  );
}
