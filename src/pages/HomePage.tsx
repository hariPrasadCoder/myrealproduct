import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>MyRealProduct — Build an End-to-End AI Product in 4 Weeks</title>
        <meta name="description" content="Build Products, Not Just Projects. Join 2,000+ engineers learning AI by building, shipping, and solving real problems in a 4-week cohort led by Hari Prasad." />
        <link rel="canonical" href="https://www.myrealproduct.com/" />
        <meta property="og:title" content="MyRealProduct — Build an AI Product in 4 Weeks" />
        <meta property="og:description" content="Build Products, Not Just Projects. Learn AI by building real products — from idea to deployment in 4 weeks. Join 2,000+ engineers." />
        <meta property="og:url" content="https://www.myrealproduct.com/" />
      </Helmet>
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
