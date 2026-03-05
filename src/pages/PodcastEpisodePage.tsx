import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { PODCAST_EPISODES } from '../data/podcastEpisodes';
import PodcastFooter from '../components/podcast/PodcastFooter';

export default function PodcastEpisodePage() {
  const { slug } = useParams<{ slug: string }>();
  const episode = PODCAST_EPISODES.find((ep) => ep.slug === slug);

  if (!episode) {
    return (
      <main className="bg-brand-dark min-h-screen text-white flex flex-col items-center justify-center gap-6">
        <p className="text-brand-text/60 font-mono text-sm">Episode not found.</p>
        <Link to="/podcast" className="flex items-center gap-2 text-brand-accent text-sm font-mono hover:underline">
          <ArrowLeft size={14} /> Back to Podcast
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>{episode.episodeTitle} — MRP Podcast</title>
        <meta name="description" content={`${episode.guestName}: ${episode.episodeTitle}. Live on ${episode.date} at ${episode.time}. RSVP now.`} />
        <link rel="canonical" href={`https://www.myrealproduct.com/podcast/${episode.slug}`} />
        <meta property="og:title" content={`${episode.episodeTitle} — MRP Podcast`} />
        <meta property="og:description" content={`${episode.guestName} joins the MRP Podcast on ${episode.date}. ${episode.episodeTitle}`} />
        <meta property="og:image" content={`https://www.myrealproduct.com${episode.imagePath}`} />
        <meta property="og:url" content={`https://www.myrealproduct.com/podcast/${episode.slug}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 bg-brand-dark/60 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              to="/podcast"
              className="flex items-center gap-2 text-brand-text/50 hover:text-white transition-colors text-xs font-mono tracking-wider uppercase"
            >
              <ArrowLeft size={14} />
              <span>All Episodes</span>
            </Link>
            <div className="w-px h-5 bg-white/10 hidden sm:block" />
            <Link to="/" className="hidden sm:block font-display font-bold text-white tracking-tight text-sm hover:text-brand-accent transition-colors">
              MyRealProduct
            </Link>
          </div>
          {episode.lumaUrl ? (
            <a
              href={episode.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono tracking-wider px-4 py-2 rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all uppercase font-semibold"
            >
              RSVP Free
            </a>
          ) : null}
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ambient glow behind photo */}
        <div className="absolute left-0 top-0 w-1/2 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(69,61,200,0.12) 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,1) 30px, rgba(255,255,255,1) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,1) 30px, rgba(255,255,255,1) 31px)' }}
        />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">

          {/* Left — Guest photo, fills full column height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-0 h-screen overflow-hidden">
              <img
                src={episode.imagePath}
                alt={episode.guestName}
                className="w-full h-full object-cover object-top"
              />
              {/* Gradient fade into dark on the right edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-dark" />
              {/* Gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-brand-dark/40" />

              {/* Show label pinned bottom-left of photo */}
              <div className="absolute bottom-10 left-10 flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-brand-accent tracking-[0.3em] uppercase">The MRP Podcast</span>
                <span className="font-display font-semibold text-base">
                  <span className="text-white/30">Re</span><span className="text-brand-accent">A</span><span className="text-white/30">l</span><span className="text-brand-accent">i</span><span className="text-white/30">ty Show</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — Episode details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 pt-32 pb-20 lg:pt-0 lg:pb-0"
          >
            {/* Mobile-only show label */}
            <div className="flex flex-col gap-1.5 mb-8 lg:hidden">
              <span className="text-[10px] font-mono text-brand-accent tracking-[0.3em] uppercase">The MRP Podcast</span>
              <span className="font-display font-semibold text-base">
                <span className="text-white/30">Re</span><span className="text-brand-accent">A</span><span className="text-white/30">l</span><span className="text-brand-accent">i</span><span className="text-white/30">ty Show</span>
              </span>
            </div>

            {/* Mobile-only photo */}
            <div className="lg:hidden mb-8 w-2/3 aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img src={episode.imagePath} alt={episode.guestName} className="w-full h-full object-cover object-top" />
            </div>

            {/* Live badge */}
            <div className="flex items-center gap-2 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-accent" />
              </span>
              <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase">Live Recording</span>
            </div>

            {/* Guest name + role */}
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xl sm:text-2xl font-display font-bold text-white">{episode.guestName}</p>
              <a href={episode.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/50 transition-colors mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-brand-text/50 font-mono mb-8 leading-relaxed">{episode.role}</p>

            {/* Episode title */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-display font-bold text-white leading-tight mb-10">
              {episode.episodeTitle}
            </h1>

            {/* Date / time */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white/70 text-xs font-mono">
                <Calendar size={12} className="text-brand-accent/70" />
                {episode.day}, {episode.date}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white/70 text-xs font-mono">
                <Clock size={12} className="text-brand-accent/70" />
                {episode.time}
              </div>
            </div>

            {/* RSVP */}
            {episode.lumaUrl ? (
              <a
                href={episode.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all font-semibold uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(255,255,255,0.12)] self-start"
              >
                RSVP Free <ArrowUpRight size={16} />
              </a>
            ) : (
              <div className="inline-flex items-center justify-center px-10 py-4 rounded-sm bg-white/[0.06] border border-white/10 text-white/30 font-semibold uppercase tracking-widest text-sm cursor-not-allowed self-start">
                RSVP link coming soon
              </div>
            )}

          </motion.div>

        </div>
      </section>

      {/* Host section */}
      <section className="py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(69,61,200,0.05) 0%, transparent 65%)' }}
        />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-7"
          >
            {/* Host photo */}
            <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/10 grayscale">
              <img src="/images/hari-prasad.webp" alt="Hari Prasad" className="w-full h-full object-cover object-top" />
            </div>

            {/* Host info */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-[10px] font-mono tracking-[0.3em] text-brand-accent uppercase mb-2">Your Host</p>
              <p className="font-display font-semibold text-white text-lg mb-1">Hari Prasad</p>
              <p className="text-brand-text/50 text-sm font-mono mb-3">TEDx Speaker · AI Educator · Coached 2,000+ Engineers</p>
              <p className="text-brand-text/60 text-sm leading-relaxed max-w-xl">
                After working with 5+ startups to launch their first AI products, Hari created the ReAlity Show to bring the real conversations behind AI careers and products into the open.
              </p>
              <a
                href="https://www.linkedin.com/in/hariprasad20/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-brand-accent hover:underline"
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PodcastFooter />
    </main>
  );
}
