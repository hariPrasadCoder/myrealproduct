import { motion } from 'motion/react';
import { Mic, Radio } from 'lucide-react';

// Update these as you confirm guests and dates
const SCHEDULE = [
  { ep: '02', date: 'Mar 4', day: 'Wed', status: 'scheduled' },
  { ep: '03', date: 'Mar 5', day: 'Thu', status: 'scheduled' },
  { ep: '04', date: 'Mar 7', day: 'Sat', status: 'scheduled' },
  { ep: '05', date: 'Mar 9', day: 'Mon', status: 'upcoming' },
  { ep: '06', date: 'Mar 12', day: 'Thu', status: 'upcoming' },
];

const STATUS_STYLES = {
  scheduled: {
    dot: 'bg-brand-accent border-brand-accent/50',
    badge: 'bg-brand-accent/10 border-brand-accent/30 text-brand-accent',
    label: 'Recording Scheduled',
    pulse: true,
  },
  upcoming: {
    dot: 'bg-white/10 border-white/20',
    badge: 'bg-white/5 border-white/10 text-brand-text/40',
    label: 'TBD',
    pulse: false,
  },
};

export default function PodcastAllEpisodes() {
  return (
    <section id="all-episodes" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
        >
          <div>
            <p className="text-xs font-mono tracking-[0.3em] text-brand-accent uppercase mb-4">
              Recording Schedule
            </p>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-white">
              What's coming next
            </h2>
          </div>
          <div className="flex items-center gap-2 text-brand-text/50">
            <Mic size={13} />
            <span className="text-xs font-mono tracking-widest uppercase">Booking guests now</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[4.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent/30 via-white/10 to-transparent" />

          <div className="space-y-0">
            {SCHEDULE.map((item, i) => {
              const s = STATUS_STYLES[item.status as keyof typeof STATUS_STYLES];
              return (
                <motion.div
                  key={item.ep}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-6 py-5 group"
                >
                  {/* Date */}
                  <div className="w-16 shrink-0 text-right">
                    <p className="text-xs font-mono text-brand-text/40 uppercase tracking-widest">{item.day}</p>
                    <p className="text-sm font-display font-medium text-white/60 mt-0.5">{item.date}</p>
                  </div>

                  {/* Dot */}
                  <div className="relative shrink-0 z-10">
                    {s.pulse && (
                      <span className="absolute inset-0 rounded-full bg-brand-accent/40 animate-ping" />
                    )}
                    <div className={`w-3 h-3 rounded-full border-2 ${s.dot}`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 flex items-center justify-between gap-4 px-5 py-4 rounded-lg border border-white/[0.06] bg-white/[0.02] group-hover:border-white/10 group-hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono tracking-[0.25em] text-brand-accent/70 uppercase">
                        EP. {item.ep}
                      </span>
                      <div className="w-px h-3 bg-white/10" />
                      <div className="flex items-center gap-2">
                        {s.pulse && <Radio size={11} className="text-brand-accent/70" />}
                        <span className="text-xs font-mono text-brand-text/50 tracking-wide">
                          Guest TBD
                        </span>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full border text-[9px] font-mono tracking-widest uppercase ${s.badge}`}>
                      {s.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
