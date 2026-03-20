import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PODCAST_EPISODES } from '../../data/podcastEpisodes';

export default function PodcastAllEpisodes() {
  return (
    <section id="all-episodes" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase mb-4">
            Confirmed Guests
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-medium text-white">
            Upcoming Episodes
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] sm:left-[6.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/40 via-brand-accent/10 to-transparent hidden sm:block" />

          {PODCAST_EPISODES.filter((ep) => !ep.youtubeUrl).length === 0 ? (
            <p className="text-brand-text/40 text-sm font-mono">
              No upcoming episodes right now. Stay tuned for more.
            </p>
          ) : null}

          <div className="space-y-6">
            {PODCAST_EPISODES.filter((ep) => !ep.youtubeUrl).map((ep, i) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-stretch gap-0 sm:gap-6 group"
              >
                {/* Date column — desktop only */}
                <div className="hidden sm:flex flex-col items-end justify-center w-20 shrink-0 text-right pr-1">
                  <p className="text-[10px] font-mono text-brand-text/40 uppercase tracking-widest">{ep.day}</p>
                  <p className="text-sm font-display font-medium text-white/70 mt-0.5 whitespace-nowrap">{ep.date}</p>
                </div>

                {/* Timeline dot — desktop only */}
                <div className="hidden sm:flex items-center justify-center shrink-0 z-10 relative">
                  <span className="absolute w-3 h-3 rounded-full bg-brand-accent/30 animate-ping" />
                  <div className="w-3 h-3 rounded-full bg-brand-accent border-2 border-brand-accent/60" />
                </div>

                {/* Card */}
                <Link
                  to={`/podcast/${ep.slug}`}
                  className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-brand-accent/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  {/* Guest photo */}
                  <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-brand-accent/20 bg-brand-card">
                    <img
                      src={ep.imagePath}
                      alt={ep.guestName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    {/* Mobile date */}
                    <p className="sm:hidden text-[10px] font-mono text-brand-accent/70 uppercase tracking-widest mb-1">
                      {ep.day}, {ep.date}
                    </p>
                    <p className="text-white font-display font-semibold text-base sm:text-lg leading-snug mb-0.5 truncate">
                      {ep.guestName}
                    </p>
                    <p className="text-brand-text/50 text-xs font-mono mb-2 leading-relaxed line-clamp-1">
                      {ep.role}
                    </p>
                    <p className="text-white/70 text-sm leading-snug line-clamp-2">
                      {ep.episodeTitle}
                    </p>
                  </div>

                  {/* Right side: time + RSVP */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0 mt-2 sm:mt-0 w-full sm:w-auto">
                    <div className="flex items-center gap-1.5 text-brand-text/40 text-[11px] font-mono whitespace-nowrap">
                      <Calendar size={11} />
                      <span>{ep.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-text/40 text-[11px] font-mono whitespace-nowrap">
                      <Clock size={11} />
                      <span>{ep.time} ET</span>
                    </div>
                    <span className="flex items-center gap-1 ml-auto sm:ml-0 mt-0 sm:mt-2 text-[10px] font-mono tracking-widest text-brand-accent uppercase group-hover:gap-2 transition-all">
                      RSVP <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
