import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import OfficialPartners from '../components/OfficialPartners';
import TheLadder from '../components/TheLadder';
import Founder from '../components/Founder';
import Testimonials from '../components/Testimonials';
import Showcase from '../components/Showcase';
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
        <title>Become a Full Stack AI Engineer in 4 Weeks | MyRealProduct</title>
        <meta name="description" content="Not another course. Build and ship one real AI product, from a working app to RAG, AI agents, and production, guided by Hari and your coach. $1,999, apply now, start this Saturday." />
        <link rel="canonical" href="https://www.myrealproduct.com/" />
        <meta property="og:title" content="Become a Full Stack AI Engineer in 4 Weeks" />
        <meta property="og:description" content="Not another course. Build and ship one real AI product, from a working app to RAG, AI agents, and production, guided by Hari and your coach the entire way." />
        <meta property="og:url" content="https://www.myrealproduct.com/" />
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

      {/* 5. Proof — quotes, then the portfolio. One beat, not three. */}
      <Testimonials />
      <Showcase />

      {/* 6. The ask — price, reimbursement folded in, then objections */}
      <Pricing />
      <FAQ />

      <Footer />
    </main>
  );
}
