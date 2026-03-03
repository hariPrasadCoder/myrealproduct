import { Helmet } from 'react-helmet-async';
import PodcastNavbar from '../components/podcast/PodcastNavbar';
import PodcastHero from '../components/podcast/PodcastHero';
import PodcastAbout from '../components/podcast/PodcastAbout';
import PodcastHost from '../components/podcast/PodcastHost';
import PodcastEpisodes from '../components/podcast/PodcastEpisodes';
import PodcastAllEpisodes from '../components/podcast/PodcastAllEpisodes';
import PodcastCTA from '../components/podcast/PodcastCTA';
import PodcastFooter from '../components/podcast/PodcastFooter';

export default function PodcastPage() {
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "The MRP Podcast — ReAlity Show",
    "description": "Real conversations with AI engineers and founders on how AI products are actually built. Hosted by Hari Prasad, TEDx speaker and AI educator who has coached 2,000+ engineers.",
    "url": "https://www.myrealproduct.com/podcast",
    "author": {
      "@type": "Person",
      "name": "Hari Prasad",
      "sameAs": "https://www.linkedin.com/in/hariprasad20/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MyRealProduct",
      "url": "https://www.myrealproduct.com"
    },
    "inLanguage": "en"
  };

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>The MRP Podcast — Real AI Conversations | MyRealProduct</title>
        <meta name="description" content="Real conversations with AI engineers and founders on how AI products are actually built. Hosted by Hari Prasad. For anyone breaking into AI." />
        <link rel="canonical" href="https://www.myrealproduct.com/podcast" />
        <meta property="og:title" content="The MRP Podcast — Real AI Conversations" />
        <meta property="og:description" content="Real conversations with AI engineers and founders on how AI products are actually built. Hosted by Hari Prasad." />
        <meta property="og:url" content="https://www.myrealproduct.com/podcast" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(podcastSchema)}</script>
      </Helmet>
      <PodcastNavbar />
      <PodcastHero />
      <PodcastAbout />
      <PodcastHost />
      <div id="episodes">
        <PodcastEpisodes />
      </div>
      <PodcastAllEpisodes />
      <div id="subscribe">
        <PodcastCTA />
      </div>
      <PodcastFooter />
    </main>
  );
}
