import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Helmet>
        <title>Builder Portfolio | MyRealProduct</title>
        <meta
          name="description"
          content="Explore real AI products built by MyRealProduct builders across productivity, health, fintech, computer vision, and more."
        />
        <link rel="canonical" href="https://www.myrealproduct.com/portfolio" />
        <meta property="og:title" content="Builder Portfolio | MyRealProduct" />
        <meta property="og:description" content="Explore real AI products built by MyRealProduct students across productivity, health, fintech, computer vision, and more." />
        <meta property="og:url" content="https://www.myrealproduct.com/portfolio" />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Builder Portfolio | MyRealProduct" />
        <meta name="twitter:description" content="Explore real AI products built by MyRealProduct students." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>
      <Navbar />
      <Showcase />
      <Footer />
    </main>
  );
}
