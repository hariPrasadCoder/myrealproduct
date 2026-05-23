import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const W1_TEAMS = [
  {
    rank: 1,
    name: 'Team Green',
    score: '22/25',
    color: 'green' as const,
    product: 'ClearAuth: AI-assisted prior authorization guardrail for healthcare.',
    feedback:
      'Really good first week. Your market research stood out the most to me. Three Google Trends screenshots, specific Reddit data with real numbers, and you actually showed why this problem is becoming urgent right now. The competitor analysis was also strong. You named Cohere Health, Availity, and Rhyme individually, explained what each one does, and then clearly pointed to the gap none of them fill. That is exactly the level of specificity I am looking for. And you built a landing page and shared it across LinkedIn, peer networks, and email. That is the full picture.',
    improvement: 'Please include the actual waitlist number in your next submission. That signal matters a lot. Also, your problem prioritisation table was incomplete. Only two rows were filled and the "Would people pay?" column was missing for problem 1. Fill out the whole table next time.',
  },
  {
    rank: 2,
    name: 'Team Blue',
    score: '15.5/25',
    color: 'blue' as const,
    product: 'ADHD time blindness: real-time coaching and accountability for executive dysfunction.',
    feedback:
      'Your problem statement is the clearest part of this submission. ADHD time blindness is specific, emotionally resonant, and you clearly understand from the inside why the existing tools are not working. The customer interview quotes were real and you grouped them well around accountability, real-time nudging, and timelines. That shows good instinct. And I want to acknowledge that you did all of this alone, which is not easy.',
    improvement: 'The landing page is the biggest miss this week. Even a basic one-pager would have tested whether strangers care about the problem, and that is the whole point of the exercise. On the competitor research, you got the categories right but I needed more specifics. What exactly is broken about Super Productivity? What does Ash get right and where does it fall short? Go one level deeper on each tool next time.',
  },
];

const W1_SCORE_CRITERIA = [
  { label: 'Problem Identification', scores: ['4/5',   '4/5']   },
  { label: 'Competitor Analysis',    scores: ['4.5/5', '4/5']   },
  { label: 'Customer Feedback',      scores: ['4/5',   '4/5']   },
  { label: 'Market Demand',          scores: ['5/5',   '3.5/5'] },
  { label: 'Landing Page & Waitlist', scores: ['4.5/5', '0/5']  },
];

const W1_TOTALS = ['22/25', '15.5/25'];

// ─── Styles ───────────────────────────────────────────────────────────────────

const TEAM_STYLES = {
  green: { accent: 'text-emerald-400', border: 'border-emerald-500/25', bg: 'bg-emerald-500/5', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300', col: 'text-emerald-300' },
  blue:  { accent: 'text-blue-400',    border: 'border-blue-500/25',    bg: 'bg-blue-500/5',    badge: 'bg-blue-500/10 border-blue-500/30 text-blue-300',       col: 'text-blue-300'    },
};

const RANK_ICONS = ['🥇', '🥈', '🥉'];

// ─── Reusable section component ───────────────────────────────────────────────

function LeaderboardTable({ teams, scores, totals }: {
  teams: typeof W1_TEAMS;
  scores: typeof W1_SCORE_CRITERIA;
  totals: string[];
}) {
  return (
    <>
      <div className="rounded-2xl border border-white/8 bg-brand-card overflow-hidden divide-y divide-white/6">
        {teams.map((team, i) => {
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

      <div className="rounded-2xl border border-white/8 bg-brand-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/8">
              <th className="text-left px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white/40 w-1/2">Criteria</th>
              {teams.map((team, i) => {
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
            {scores.map((row, i) => (
              <tr key={i} className="hover:bg-white/2 transition-colors">
                <td className="px-5 py-3.5 text-brand-text/75">{row.label}</td>
                {row.scores.map((score, j) => {
                  const s = TEAM_STYLES[teams[j].color];
                  return (
                    <td key={j} className={`px-4 py-3.5 font-medium ${s.col}`}>{score}</td>
                  );
                })}
              </tr>
            ))}
            <tr className="border-t border-white/10 bg-white/2">
              <td className="px-5 py-3.5 text-white font-bold">Total</td>
              {totals.map((total, j) => {
                const s = TEAM_STYLES[teams[j].color];
                return (
                  <td key={j} className={`px-4 py-3.5 font-bold ${s.accent}`}>{total}</td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4">
        {teams.map((team, i) => {
          const s = TEAM_STYLES[team.color];
          return (
            <div key={i} className={`rounded-2xl border ${s.border} ${s.bg} overflow-hidden`}>
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
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const WEEKS = [
  {
    key: 'w1',
    label: 'Week 1',
    subtitle: 'Ideation, Problem Finding, and Market Validation',
    teams: W1_TEAMS,
    scores: W1_SCORE_CRITERIA,
    totals: W1_TOTALS,
    note: 'Two submissions in for Week 1. Team Green set a high bar with solid market research and an active landing page. Team Blue showed real problem clarity but needs to push further on competitor depth and actually ship a landing page. The gap this week comes down to execution, not insight.',
  },
];

const TOTAL_TEAMS = [
  { rank: 1, name: 'Team Green', color: 'green' as const, w1: '22', total: '22/25' },
  { rank: 2, name: 'Team Blue',  color: 'blue'  as const, w1: '15.5', total: '15.5/25' },
];

export default function LeaderboardSummer26Page() {
  const [activeWeek, setActiveWeek] = useState<'w1'>('w1');
  const week = WEEKS.find(w => w.key === activeWeek)!;

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>Leaderboard | MyRealProduct Summer 2026</title>
        <meta name="description" content="Week 1 leaderboard and score breakdown for MyRealProduct Summer 2026 cohort." />
        <link rel="canonical" href="https://www.myrealproduct.com/leaderboard/summer26" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-5 py-16 space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent/70">MyRealProduct · Summer 2026</p>
          <h1 className="text-3xl font-bold text-white font-display">Leaderboard</h1>
          <p className="text-sm text-brand-text/55">Running scores across all weeks</p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-3"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Overall Standings</h2>
            <span className="text-xs text-brand-text/35">out of 25 (Week 1 only)</span>
          </div>
          <div className="rounded-2xl border border-white/8 bg-brand-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Team</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Wk 1</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {TOTAL_TEAMS.map((team, i) => {
                  const s = TEAM_STYLES[team.color];
                  return (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{RANK_ICONS[i]}</span>
                          <span className={`font-semibold ${s.accent}`}>{team.name}</span>
                        </div>
                      </td>
                      <td className={`px-4 py-3 ${s.col}`}>{team.w1}</td>
                      <td className={`px-4 py-3 font-bold ${s.accent}`}>{team.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/8 w-fit">
            {WEEKS.map(w => (
              <button
                key={w.key}
                onClick={() => setActiveWeek(w.key as 'w1')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeWeek === w.key
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-brand-text/50 hover:text-white/70'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeWeek}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm text-brand-text/55">{week.subtitle}</p>
              <LeaderboardTable teams={week.teams} scores={week.scores} totals={week.totals} />
              <p className="text-sm text-brand-text/45 italic border-t border-white/6 pt-6 leading-relaxed">
                {week.note}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
