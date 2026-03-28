import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAMS = [
  {
    rank: 1,
    name: 'Team Red',
    score: '23/25',
    color: 'red' as const,
    product: 'Expense tracker with actionable spending insights.',
    feedback:
      'Really strong Week 1. The competitor research was thorough and showed genuine curiosity about the space. The interview structure with hypotheses was impressive. Most first-timers don\'t think that way. The problem is clearly one they care about, and that energy comes through.',
    improvement: 'Get the waitlist out more publicly. The idea deserves more eyes on it.',
  },
  {
    rank: 2,
    name: 'Team Green',
    score: '22/25',
    color: 'green' as const,
    product: 'AI copilot for used car buyers.',
    feedback:
      'Great job. The problem is relatable and well-chosen, and 20 waitlist signups in Week 1 is genuinely impressive. The Reddit data added real credibility to the market demand section. The prioritization across 7 problems showed the team took the exercise seriously.',
    improvement: 'Go a little deeper on what specific competitors are missing. That will sharpen the positioning in Week 2.',
  },
  {
    rank: 3,
    name: 'Team Yellow',
    score: '20.5/25',
    color: 'yellow' as const,
    product: 'WarmPath: LinkedIn network intelligence for job seekers.',
    feedback:
      'Good start. The problem statement is the clearest and most compelling of the three teams, and the writing instinct really shows. The landing page was clean and ready. The competitor table was well-structured. The market demand research was the most thorough of all three teams. Great use of Google Trends and forum analysis across multiple platforms.',
    improvement:
      'Customer interviews. Even 3 to 5 casual conversations with job seekers would unlock a lot. That is the main unlock before Week 2.',
  },
];

const SCORE_CRITERIA = [
  { label: 'Problem Identification', scores: ['4.5/5', '4.5/5', '4.5/5'] },
  { label: 'Competitor Analysis',    scores: ['5/5',   '4/5',   '4/5']   },
  { label: 'Customer Feedback',      scores: ['5/5',   '4/5',   '3/5']   },
  { label: 'Market Demand',          scores: ['4.5/5', '4.5/5', '5/5']   },
  { label: 'Waitlist',               scores: ['4/5',   '5/5',   '4/5']   },
];

const TOTALS = ['23/25', '22/25', '20.5/25'];

// ─── Styles ───────────────────────────────────────────────────────────────────

const TEAM_STYLES = {
  red:    { accent: 'text-red-400',    border: 'border-red-500/25',    bg: 'bg-red-500/5',    badge: 'bg-red-500/10 border-red-500/30 text-red-300',    col: 'text-red-300'    },
  green:  { accent: 'text-emerald-400', border: 'border-emerald-500/25', bg: 'bg-emerald-500/5', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300', col: 'text-emerald-300' },
  yellow: { accent: 'text-yellow-400', border: 'border-yellow-500/25', bg: 'bg-yellow-500/5', badge: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300', col: 'text-yellow-300' },
};

const RANK_ICONS = ['🥇', '🥈', '🥉'];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LeaderboardSpring26Page() {
  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>Week 1 Results | MyRealProduct Spring 2026</title>
        <meta name="description" content="Week 1 leaderboard and score breakdown for MyRealProduct Spring 2026 cohort." />
        <link rel="canonical" href="https://www.myrealproduct.com/leaderboard/spring26" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-5 py-16 space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent/70">MyRealProduct · Spring 2026</p>
          <h1 className="text-3xl font-bold text-white font-display">Week 1 Results</h1>
          <p className="text-sm text-brand-text/55">Ideation, Problem Finding, and Market Validation</p>
        </motion.div>

        {/* Leaderboard */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Leaderboard</h2>
          <div className="rounded-2xl border border-white/8 bg-brand-card overflow-hidden divide-y divide-white/6">
            {TEAMS.map((team, i) => {
              const s = TEAM_STYLES[team.color];
              return (
                <div key={i} className="flex items-center gap-4 px-5 py-4">
                  <span className="text-xl w-7 shrink-0">{RANK_ICONS[i]}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${s.accent}`}>{team.name}</p>
                    <p className="text-xs text-brand-text/45 truncate">{team.product}</p>
                  </div>
                  <span className={`shrink-0 text-sm font-bold px-3 py-1 rounded-lg border ${s.badge}`}>
                    {team.score}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Score Breakdown Table */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Scores Breakdown</h2>
          <div className="rounded-2xl border border-white/8 bg-brand-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white/40 w-1/2">Criteria</th>
                  {TEAMS.map((team, i) => {
                    const s = TEAM_STYLES[team.color];
                    return (
                      <th key={i} className={`text-left px-4 py-3.5 text-xs font-bold ${s.accent}`}>
                        {team.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SCORE_CRITERIA.map((row, i) => (
                  <tr key={i} className="hover:bg-white/2 transition-colors">
                    <td className="px-5 py-3.5 text-brand-text/75">{row.label}</td>
                    {row.scores.map((score, j) => {
                      const s = TEAM_STYLES[TEAMS[j].color];
                      return (
                        <td key={j} className={`px-4 py-3.5 font-medium ${s.col}`}>{score}</td>
                      );
                    })}
                  </tr>
                ))}
                {/* Total row */}
                <tr className="border-t border-white/10 bg-white/2">
                  <td className="px-5 py-3.5 text-white font-bold">Total</td>
                  {TOTALS.map((total, j) => {
                    const s = TEAM_STYLES[TEAMS[j].color];
                    return (
                      <td key={j} className={`px-4 py-3.5 font-bold ${s.accent}`}>{total}</td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Team Feedback Cards */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Feedback</h2>
          <div className="space-y-4">
            {TEAMS.map((team, i) => {
              const s = TEAM_STYLES[team.color];
              return (
                <div key={i} className={`rounded-2xl border ${s.border} ${s.bg} overflow-hidden`}>
                  {/* Card header */}
                  <div className={`flex flex-wrap items-center justify-between gap-2 px-5 py-3.5 border-b ${s.border}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{RANK_ICONS[i]}</span>
                      <div>
                        <p className={`text-sm font-bold ${s.accent}`}>{team.name}</p>
                        <p className="text-xs text-brand-text/45">{team.product}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-bold px-3 py-1 rounded-lg border ${s.badge}`}>{team.score}</span>
                  </div>
                  {/* Feedback body */}
                  <div className="px-5 py-4 space-y-3">
                    <p className="text-sm text-brand-text/75 leading-relaxed">{team.feedback}</p>
                    <div className={`rounded-xl border ${s.border} px-4 py-3`}>
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${s.accent}`}>One thing to work on: </span>
                      <span className="text-sm text-brand-text/65 leading-relaxed">{team.improvement}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm text-brand-text/45 italic border-t border-white/6 pt-8 leading-relaxed"
        >
          To all three teams: Week 1 is really about getting comfortable with the process, and all three teams showed up and did the work. That matters more than getting everything perfect. Keep going.
        </motion.p>

      </div>
    </main>
  );
}
