import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';

// ─── Data ─────────────────────────────────────────────────────────────────────

// Week 1 - ordered by Week 1 rank
const W1_TEAMS = [
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

const W1_SCORE_CRITERIA = [
  { label: 'Problem Identification', scores: ['4.5/5', '4.5/5', '4.5/5'] },
  { label: 'Competitor Analysis',    scores: ['5/5',   '4/5',   '4/5']   },
  { label: 'Customer Feedback',      scores: ['5/5',   '4/5',   '3/5']   },
  { label: 'Market Demand',          scores: ['4.5/5', '4.5/5', '5/5']   },
  { label: 'Waitlist',               scores: ['4/5',   '5/5',   '4/5']   },
];

const W1_TOTALS = ['23/25', '22/25', '20.5/25'];

// Week 2 - ordered by Week 2 rank
const W2_TEAMS = [
  {
    rank: 1,
    name: 'Team Yellow',
    score: '23/25',
    color: 'yellow' as const,
    product: 'WarmPath: LinkedIn network intelligence for job seekers.',
    feedback:
      'One of the most solid presentations of the week. The value prop was immediately clear, and proactively addressing "why not just use LinkedIn?" showed real product thinking. The demo was polished and the output quality spoke for itself. That kind of clarity at the prototype stage is rare.',
    improvement: 'Sign-up and login are still missing. The prototype needs to feel complete end-to-end. Also, help users understand why one contact scores higher than another. Surfacing the reasoning behind the warmth score will make the product feel far more trustworthy.',
  },
  {
    rank: 2,
    name: 'Team Red',
    score: '22/25',
    color: 'red' as const,
    product: 'Expense tracker with actionable spending insights.',
    feedback:
      'Great execution overall. The user journey was well thought out: dashboard, input, and output all felt intentional. The prototype followed every step asked for, and the energy of building something they genuinely care about still comes through.',
    improvement: 'The AI insights (predicting budget, flagging overspend, recommending what to do next) are your primary feature, not a bonus. Lead with it. Show it first. Make the viewer feel its power before anything else. Burying it at the end undersells the entire product.',
  },
  {
    rank: 3,
    name: 'Team Green',
    score: '21/25',
    color: 'green' as const,
    product: 'AI copilot for used car buyers.',
    feedback:
      'Technically the most ambitious prototype. AI-powered listings plus a RAG-based chatbot is genuinely advanced work and shows real commitment. The team clearly went beyond the brief.',
    improvement: 'Three features without a clear workflow creates confusion for a first-time user. "Buy used cars with confidence: Find, Inspect, Buy" is the right instinct but needs to be felt, not just stated. Show users the path: find a car, run an inspection, make the offer. If all three features connect into one journey, the product becomes obvious. Right now they feel like three separate tools.',
  },
];

const W2_SCORE_CRITERIA = [
  { label: 'Problem-Solution Fit',        scores: ['5/5',   '5/5',   '4/5']   },
  { label: 'Core Feature Demo',          scores: ['5/5',   '4/5',   '4/5']   },
  { label: 'User Journey Completeness',  scores: ['3/5',   '5/5',   '4/5']   },
  { label: 'Feature Depth & Innovation',  scores: ['5/5',   '4/5',   '5/5']   },
  { label: 'Presentation Clarity',       scores: ['5/5',   '4/5',   '4/5']   },
];

// W2_TOTALS ordered to match W2_TEAMS (Yellow, Red, Green)
const W2_TOTALS = ['23/25', '22/25', '21/25'];

// Week 3 - ordered by Week 3 rank
const W3_TEAMS = [
  {
    rank: 1,
    name: 'Team Green',
    score: '23.5/25',
    color: 'green' as const,
    product: 'AI copilot for used car buyers.',
    feedback:
      'Best deployment of the week. The onboarding form felt polished and premium, exactly what a first-time user needs to feel confident. Even as an MVP, the product is already useful, which is a high bar to clear this early. The UI quality stands out: clean, intentional, and far from the usual prototype look.',
    improvement: 'Ask AI and the car listings feel like separate tools right now. The unlock is connecting them: a user should be able to find a listing, then immediately ask AI about it in context. When those two features talk to each other, the product clicks into place.',
  },
  {
    rank: 2,
    name: 'Team Red',
    score: '21/25',
    color: 'red' as const,
    product: 'Expense tracker with actionable spending insights.',
    feedback:
      'Two separate products submitted this week when the goal was one combined product. That is the main miss. But within each product, the execution is genuinely impressive. The UI does not look like Streamlit at all, the app is thoughtful, and they tested their own product thoroughly enough to catch real issues. That kind of self-awareness is rare.',
    improvement: 'The login flow has a bug: clicking the login link sends users to localhost instead of the live app. That breaks the experience for any real user immediately. Fix that first. And for next week, combine the two products into one: that integration is where the real value lives.',
  },
  {
    rank: 3,
    name: 'Team Yellow',
    score: 'N/A',
    color: 'yellow' as const,
    product: 'WarmPath: LinkedIn network intelligence for job seekers.',
    feedback:
      'Could not evaluate this week. There is no sign-up or login flow, and the deployed app returns a network error. The UI is visible but the product is not functional for real users.',
    improvement: 'Get the app fully deployed and accessible. Authentication is a requirement. Users need to be able to sign up and log in. Once those basics are in place, the underlying product can be evaluated properly.',
  },
];

const W3_SCORE_CRITERIA = [
  { label: 'Deployment & Accessibility',  scores: ['5/5',  '4/5',  'N/A'] },
  { label: 'Authentication & Onboarding', scores: ['5/5',  '3/5',  'N/A'] },
  { label: 'Core Feature Functionality',  scores: ['4/5',  '5/5',  'N/A'] },
  { label: 'UI/UX Quality',               scores: ['5/5',  '5/5',  'N/A'] },
  { label: 'Product Completeness',        scores: ['4.5/5', '4/5', 'N/A'] },
];

const W3_TOTALS = ['23.5/25', '21/25', 'N/A'];

// ─── Total leaderboard (Week 1 + Week 2 + Week 3) ─────────────────────────────
// W1: Red 23, Green 22, Yellow 20.5  →  W2: Yellow 23, Red 22, Green 21  →  W3: Green 23, Red 20, Yellow N/A
const TOTAL_TEAMS = [
  { rank: 1, name: 'Team Green',  color: 'green'  as const, w1: '22',   w2: '21',   w3: '23.5', total: '66.5/75' },
  { rank: 2, name: 'Team Red',    color: 'red'    as const, w1: '23',   w2: '22',   w3: '21',   total: '66/75'   },
  { rank: 3, name: 'Team Yellow', color: 'yellow' as const, w1: '20.5', w2: '23',   w3: 'N/A',  total: '43.5'   },
];

// ─── Styles ───────────────────────────────────────────────────────────────────

const TEAM_STYLES = {
  red:    { accent: 'text-red-400',    border: 'border-red-500/25',    bg: 'bg-red-500/5',    badge: 'bg-red-500/10 border-red-500/30 text-red-300',    col: 'text-red-300'    },
  green:  { accent: 'text-emerald-400', border: 'border-emerald-500/25', bg: 'bg-emerald-500/5', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300', col: 'text-emerald-300' },
  yellow: { accent: 'text-yellow-400', border: 'border-yellow-500/25', bg: 'bg-yellow-500/5', badge: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300', col: 'text-yellow-300' },
};

const RANK_ICONS = ['🥇', '🥈', '🥉'];

// ─── Reusable section components ─────────────────────────────────────────────

function LeaderboardTable({ teams, scores, totals }: {
  teams: typeof W1_TEAMS;
  scores: typeof W1_SCORE_CRITERIA;
  totals: string[];
}) {
  return (
    <>
      {/* Leaderboard */}
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

      {/* Score Breakdown Table */}
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

      {/* Feedback Cards */}
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
    key: 'w3',
    label: 'Week 3',
    subtitle: 'Deployed Product Testing',
    teams: W3_TEAMS,
    scores: W3_SCORE_CRITERIA,
    totals: W3_TOTALS,
    note: 'This week was about shipping something real that a stranger can use. Team Green cleared that bar. Team Red showed impressive execution but split the effort across two products instead of one. Team Yellow is on hold. They will get a chance to fix the deployment and be re-evaluated.',
  },
  {
    key: 'w2',
    label: 'Week 2',
    subtitle: 'MVP Prototype and Demo',
    teams: W2_TEAMS,
    scores: W2_SCORE_CRITERIA,
    totals: W2_TOTALS,
    note: 'All three teams shipped something real this week. That is harder than it sounds. The gap between teams now comes down to one thing: how clearly does the product communicate its single most important value in the first 30 seconds? Focus on that going into Week 3.',
  },
  {
    key: 'w1',
    label: 'Week 1',
    subtitle: 'Ideation, Problem Finding, and Market Validation',
    teams: W1_TEAMS,
    scores: W1_SCORE_CRITERIA,
    totals: W1_TOTALS,
    note: 'Week 1 is really about getting comfortable with the process, and all three teams showed up and did the work. That matters more than getting everything perfect. Keep going.',
  },
];

export default function LeaderboardSpring26Page() {
  const [activeWeek, setActiveWeek] = useState<'w1' | 'w2' | 'w3'>('w3');
  const week = WEEKS.find(w => w.key === activeWeek)!;

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>Leaderboard | MyRealProduct Spring 2026</title>
        <meta name="description" content="Week 1, Week 2, and Week 3 leaderboard and score breakdown for MyRealProduct Spring 2026 cohort." />
        <link rel="canonical" href="https://www.myrealproduct.com/leaderboard/spring26" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-5 py-16 space-y-10">

        {/* ── Page Header ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent/70">MyRealProduct · Spring 2026</p>
          <h1 className="text-3xl font-bold text-white font-display">Leaderboard</h1>
          <p className="text-sm text-brand-text/55">Running scores across all weeks</p>
        </motion.div>

        {/* ── Overall Standings ─────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-3"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white/40">Overall Standings</h2>
            <span className="text-xs text-brand-text/35">out of 75</span>
          </div>
          <div className="rounded-2xl border border-white/8 bg-brand-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Team</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Wk 1</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Wk 2</th>
                  <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-white/40">Wk 3</th>
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
                      <td className={`px-4 py-3 ${s.col}`}>{team.w2}</td>
                      <td className={`px-4 py-3 ${s.col}`}>{team.w3}</td>
                      <td className={`px-4 py-3 font-bold ${s.accent}`}>{team.total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* ── Week Toggle + Detail ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/8 w-fit">
            {WEEKS.map(w => (
              <button
                key={w.key}
                onClick={() => setActiveWeek(w.key as 'w1' | 'w2' | 'w3')}
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

          {/* Animated panel */}
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
