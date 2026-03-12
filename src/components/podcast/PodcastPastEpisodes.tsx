import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Youtube } from 'lucide-react';
import { PODCAST_EPISODES } from '../../data/podcastEpisodes';

export default function PodcastPastEpisodes() {
  const pastEpisodes = PODCAST_EPISODES.filter((ep) => ep.youtubeUrl);

  if (pastEpisodes.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase mb-4">
            Watch Recordings
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-white">
            Past Episodes
          </h2>
        </motion.div>

        {/* Episodes */}
        <div className="space-y-6">
          {pastEpisodes.map((ep, i) => (
            <motion.div
              key={ep.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
            <Link
              to={`/podcast/${ep.slug}`}
              className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-brand-accent/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              {/* Guest photo */}
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white/10 bg-brand-card">
                <img
                  src={ep.imagePath}
                  alt={ep.guestName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-brand-text/40 uppercase tracking-widest mb-1">
                  {ep.day}, {ep.date}
                </p>
                <p className="text-white font-display font-semibold text-base sm:text-lg leading-snug mb-0.5 truncate">
                  {ep.guestName}
                </p>
                <p className="text-brand-text/50 text-xs font-mono mb-2 line-clamp-1">
                  {ep.role}
                </p>
                <p className="text-white/70 text-sm leading-snug line-clamp-2">
                  {ep.episodeTitle}
                </p>
              </div>

              {/* Watch button */}
              <div className="shrink-0 flex items-center gap-2 text-[11px] font-mono tracking-widest text-brand-accent uppercase group-hover:gap-3 transition-all">
                <Youtube size={14} />
                <span className="hidden sm:inline">Watch</span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
