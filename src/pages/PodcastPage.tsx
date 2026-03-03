import PodcastNavbar from '../components/podcast/PodcastNavbar';
import PodcastHero from '../components/podcast/PodcastHero';
import PodcastAbout from '../components/podcast/PodcastAbout';
import PodcastHost from '../components/podcast/PodcastHost';
import PodcastEpisodes from '../components/podcast/PodcastEpisodes';
import PodcastAllEpisodes from '../components/podcast/PodcastAllEpisodes';
import PodcastCTA from '../components/podcast/PodcastCTA';
import PodcastFooter from '../components/podcast/PodcastFooter';

export default function PodcastPage() {
  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
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
