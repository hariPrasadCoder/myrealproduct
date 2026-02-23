import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Syllabus from '../components/Syllabus';
import Founder from '../components/Founder';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Philanthropy from '../components/Philanthropy';
import Showcase from '../components/Showcase';
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import { useScrollDepthTracking, useTimeOnPage } from '../hooks/useAnalytics';

export default function HomePage() {
  // Track scroll depth milestones (25%, 50%, 75%, 100%)
  useScrollDepthTracking();
  
  // Track time spent on page
  useTimeOnPage();

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Testimonials />
      <HowItWorks />
      <Syllabus />
      <Founder />
      <FAQ />
      <Pricing />
      <Philanthropy />
      <Showcase />
      <Quote />
      <Footer />
    </main>
  );
}
