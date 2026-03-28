import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface LinkItem {
  label: string;
  href: string;
  note?: string;
}

interface BulletItem {
  text: string;
  link?: LinkItem;
  sub?: string[];
}

interface DayGroup {
  dayLabel: string;
  note?: string;
  items: BulletItem[];
}

interface TeamResult {
  name: string;
  score: string;
  color: 'red' | 'green' | 'yellow';
  product: string;
  feedback: string;
  improvement: string;
}

interface Section {
  type: 'lecture' | 'breakout' | 'takehome' | 'todos' | 'reference' | 'results';
  duration?: string;
  items?: BulletItem[];
  dayGroups?: DayGroup[];
  deadline?: string;
  teamResults?: TeamResult[];
  closingNote?: string;
}

interface Week {
  number: number;
  title: string;
  sections: Section[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WEEKS: Week[] = [
  {
    number: 1,
    title: 'Ideation, Problem Finding, and Market Validation',
    sections: [
      {
        type: 'lecture',
        duration: '15 mins',
        items: [
          { text: 'Overview of ideation and market gaps.' },
          { text: 'Basics of market validation and competitor analysis.' },
        ],
      },
      {
        type: 'breakout',
        duration: '2 hours',
        items: [
          { text: 'Brainstorm ideas.' },
          { text: 'Refine ideas by identifying pain points and market gaps.' },
          { text: 'Conduct competitor analysis.' },
        ],
      },
      {
        type: 'takehome',
        duration: '2 hours',
        items: [
          { text: 'Choose a team lead.' },
          {
            text: 'Use the provided template to:',
            sub: [
              'Define the problem.',
              'Discuss how to validate the problem with real customers.',
            ],
          },
        ],
      },
      {
        type: 'todos',
        deadline: 'Mar 27',
        items: [
          {
            text: 'Week 1 Submission Template',
            link: { label: 'Open Template', href: 'https://docs.google.com/presentation/d/1AQ8z-x3Nbed0Cw7uJkj_Wi_42f4GQmLt4-3WWNcyP_Y/edit?usp=sharing' },
          },
          {
            text: 'Submit Your Work',
            link: { label: 'Submit Here', href: 'https://forms.gle/Y1u52Y27nXsGLx3y5' },
          },
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'Building the MVP',
    sections: [
      {
        type: 'lecture',
        duration: '15 mins',
        items: [
          { text: 'What is an MVP?' },
          { text: 'Basics of project setup and preparing AI prototypes.' },
        ],
      },
      {
        type: 'breakout',
        items: [
          { text: 'Decide core MVP features.' },
          { text: 'Outline data requirements and initial AI models.' },
          { text: 'Teams start planning MVP implementation.' },
        ],
      },
      {
        type: 'takehome',
        items: [{ text: 'Finalize your prototype.' }],
      },
      {
        type: 'todos',
        deadline: 'Apr 3 (Fri)',
        dayGroups: [
          {
            dayLabel: 'Day 1 (Sat)',
            items: [
              { text: 'Week 2 Submission Template', link: { label: 'Open Template', href: 'https://docs.google.com/presentation/d/1AHHFum9s4pZQDDPOvA9UxaRSl1rwp6qYV_YZY8QXPOI/edit?usp=sharing' } },
              { text: 'Figure out 1-line solution & #1 feature' },
              { text: 'Define how the user journey looks like' },
              { text: 'Vibe code your basic app using Replit AI' },
            ],
          },
          {
            dayLabel: 'Day 2 (Sun)',
            note: 'Watch these reference videos to understand about App development',
            items: [
              { text: 'Project setup & management – Github, VScode, Jira', link: { label: '40 mins', href: 'https://youtu.be/4Gja-yphkYY' } },
              { text: 'Streamlit 101', link: { label: '11 mins', href: 'https://youtu.be/D0D4Pa22iG0?si=OvX2qCUmKQJOGwHy' } },
              { text: 'Cursor AI 101', link: { label: '12 mins', href: 'https://youtu.be/JLJtuEDcO1g?si=f6abWzWvsioTZcQ6' } },
              { text: 'Supabase SQL', link: { label: '40 mins', href: 'https://youtu.be/M6cfT2pqpSc?si=2ESlqPj5xk58Uj7c' } },
            ],
          },
          {
            dayLabel: 'Day 3 (Mon)',
            note: 'Watch these videos on Advanced AI Development',
            items: [
              { text: 'RAG 101', link: { label: '42 mins', href: 'https://youtu.be/Io56LloELW0' } },
              { text: 'Agentic AI 101', link: { label: '12 mins', href: 'https://youtu.be/A_y9FeKNYb4' } },
              { text: 'LangGraph 101', link: { label: '30 mins', href: 'https://youtu.be/vNlf5kW_23E' } },
            ],
          },
          {
            dayLabel: 'Day 4 – 6 (Tue – Thu)',
            note: 'Build your Advanced AI app on top of the basic app from Day 1',
            items: [
              { text: 'Submit Your Work (Deadline: Apr 3, Fri)', link: { label: 'Submit Here', href: 'https://forms.gle/YjToyfmGuv4P9Q9o6' } },
              { text: "Don't miss the office hours (Mar 31, 10am EST): Claude Code Webinar", link: { label: 'Join Here', href: 'https://meet.google.com/bjh-hxav-tib' } },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 3,
    title: 'Deployment and Testing',
    sections: [
      {
        type: 'lecture',
        duration: '15 mins',
        items: [
          { text: 'Coding, testing, and using Git for version control.' },
          { text: 'Intro to deploying AI projects on platforms like AWS & Streamlit.' },
        ],
      },
      {
        type: 'breakout',
        duration: '2 hours',
        items: [
          { text: 'Product Name & Domain Selection.' },
          { text: 'Set up deployment pipelines for your project.' },
        ],
      },
      {
        type: 'takehome',
        duration: '2 hours',
        items: [
          { text: 'Finalize the MVP and deploy it to a cloud platform.' },
          { text: 'Test your product for bugs/issues.' },
        ],
      },
      {
        type: 'todos',
        deadline: 'Jan 1',
        items: [
          { text: 'Week 3 Submission Template', link: { label: 'here', href: '#' } },
          { text: 'Submit', link: { label: 'here', href: '#' } },
          {
            text: '',
            link: { label: 'Book office hours', href: '#', note: 'Ask Me Anything' },
          },
        ],
      },
      {
        type: 'reference',
        items: [
          {
            text: 'Intro to AWS S3, IAM, EC2 & Domain connection',
            link: { label: 'Deployment 101', href: '#' },
          },
        ],
      },
    ],
  },
  {
    number: 4,
    title: 'Launch, Marketing and Feedback Loop',
    sections: [
      {
        type: 'lecture',
        duration: '15 mins',
        items: [
          { text: 'Strategies for finding first users.' },
          { text: 'Importance of feedback and iteration.' },
        ],
      },
      {
        type: 'breakout',
        duration: '2 hours',
        items: [
          { text: 'Present MVPs to other teams for feedback.' },
          { text: 'Discuss strategies for gathering real user feedback.' },
        ],
      },
      {
        type: 'takehome',
        duration: '2 hours',
        items: [
          { text: 'Launch MVP to a small audience.' },
          { text: 'Analyze feedback and plan for improvements.' },
        ],
      },
      {
        type: 'todos',
        deadline: 'Jan 9',
        items: [
          { text: 'Week 4 Submission Template', link: { label: 'here', href: '#' } },
          { text: 'Submit', link: { label: 'here', href: '#' } },
          { text: "It's been a wonderful journey! Hope you had fun 🙂" },
        ],
      },
    ],
  },
];

// ─── Config ───────────────────────────────────────────────────────────────────

const SECTION_META: Record<
  Section['type'],
  { label: string; icon: string; accent: string; bg: string; border: string; dot: string }
> = {
  lecture: {
    label: 'Lecture',
    icon: '🎓',
    accent: 'text-brand-accent',
    bg: 'bg-[#1A1830]',
    border: 'border-brand-primary/30',
    dot: 'bg-brand-primary',
  },
  breakout: {
    label: 'Virtual Breakout Session',
    icon: '💬',
    accent: 'text-sky-400',
    bg: 'bg-[#0F1A24]',
    border: 'border-sky-500/25',
    dot: 'bg-sky-500',
  },
  takehome: {
    label: 'Take-home Work',
    icon: '📋',
    accent: 'text-emerald-400',
    bg: 'bg-[#0F1E18]',
    border: 'border-emerald-500/25',
    dot: 'bg-emerald-500',
  },
  todos: {
    label: 'To-dos',
    icon: '✅',
    accent: 'text-amber-400',
    bg: 'bg-[#1E1800]',
    border: 'border-amber-500/25',
    dot: 'bg-amber-500',
  },
  reference: {
    label: 'Reference Materials',
    icon: '📚',
    accent: 'text-rose-400',
    bg: 'bg-[#1E0F14]',
    border: 'border-rose-500/25',
    dot: 'bg-rose-500',
  },
  results: {
    label: 'Week 1 Results',
    icon: '🏆',
    accent: 'text-yellow-400',
    bg: 'bg-[#1A1500]',
    border: 'border-yellow-500/25',
    dot: 'bg-yellow-500',
  },
};

const WEEK_COLORS = [
  { glow: 'rgba(69,61,200,0.35)', ring: 'border-brand-primary/50', num: 'text-brand-accent' },
  { glow: 'rgba(14,165,233,0.3)', ring: 'border-sky-500/50', num: 'text-sky-400' },
  { glow: 'rgba(16,185,129,0.3)', ring: 'border-emerald-500/50', num: 'text-emerald-400' },
  { glow: 'rgba(245,158,11,0.3)', ring: 'border-amber-500/50', num: 'text-amber-400' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

// ─── Item renderers ───────────────────────────────────────────────────────────

const SECTION_BULLET: Record<Section['type'], { prefix: (i: number) => React.ReactNode; textCls: string }> = {
  lecture: {
    prefix: (i) => (
      <span className="shrink-0 min-w-[1.75rem] text-right text-[11px] font-bold text-brand-accent/60 font-display leading-none mt-[3px]">
        {String(i + 1).padStart(2, '0')}
      </span>
    ),
    textCls: 'text-white/80',
  },
  breakout: {
    prefix: () => <span className="shrink-0 text-sky-400/70 text-base leading-none mt-[1px]">›</span>,
    textCls: 'text-brand-text/85',
  },
  takehome: {
    prefix: () => (
      <span className="shrink-0 w-4 h-4 mt-[2px] rounded border border-emerald-500/40 bg-emerald-500/5 flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-sm bg-transparent" />
      </span>
    ),
    textCls: 'text-brand-text/85',
  },
  todos: {
    prefix: () => <span className="shrink-0 text-amber-400/60 text-sm leading-none mt-[2px]">✓</span>,
    textCls: 'text-brand-text/85',
  },
  reference: {
    prefix: () => <span className="shrink-0 text-rose-400/60 text-sm leading-none mt-[2px]">↗</span>,
    textCls: 'text-brand-text/85',
  },
  results: {
    prefix: () => <span className="shrink-0 text-yellow-400/60 text-sm leading-none mt-[2px]">★</span>,
    textCls: 'text-brand-text/85',
  },
};

function InlineLink({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-brand-accent hover:text-white font-medium underline underline-offset-3 decoration-brand-accent/50 hover:decoration-white transition-colors duration-150"
    >
      {link.label}
      {link.note && (
        <span className="text-brand-text/60 text-xs font-normal no-underline">({link.note})</span>
      )}
    </a>
  );
}

// Action card for todo items that have links
function TodoActionCard({ item, index }: { item: BulletItem; index: number }) {
  const icons = ['📄', '📝', '📅', '🔗'];
  const icon = icons[index % icons.length];

  if (!item.link) {
    return (
      <div className="flex items-start gap-2.5 px-1 py-0.5">
        <span className="shrink-0 text-amber-400/50 text-sm mt-0.5">✓</span>
        <span className="text-sm text-brand-text/75 leading-relaxed">{item.text}</span>
      </div>
    );
  }

  return (
    <a
      href={item.link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 p-3.5 rounded-xl border border-amber-500/15 bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-500/35 transition-all duration-200 group"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-lg shrink-0">{icon}</span>
        <span className="text-sm font-medium text-white/80">{item.text}</span>
      </div>
      <span className="shrink-0 text-xs font-semibold text-amber-400 border border-amber-500/30 rounded-lg px-3 py-1.5 bg-amber-500/10 group-hover:bg-amber-500/20 group-hover:translate-x-0.5 transition-all duration-200 whitespace-nowrap">
        {item.link.label} →
      </span>
    </a>
  );
}

function ContentList({ items, type }: { items: BulletItem[]; type: Section['type'] }) {
  // To-dos get a special card-style treatment
  if (type === 'todos') {
    return (
      <div className="space-y-2">
        {items.map((item, i) => (
          <TodoActionCard key={i} item={item} index={i} />
        ))}
      </div>
    );
  }

  // Reference items — link card style
  if (type === 'reference') {
    return (
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i}>
            {item.link ? (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 hover:border-rose-500/35 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">📖</span>
                  <div>
                    <p className="text-sm font-medium text-white/80">{item.link.label}</p>
                    {item.text && <p className="text-xs text-brand-text/50 mt-0.5">{item.text}</p>}
                  </div>
                </div>
                <span className="shrink-0 text-xs text-rose-400 group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            ) : (
              <p className="text-sm text-brand-text/75">{item.text}</p>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Lecture / Breakout / Take-home — styled bullet list
  const bullet = SECTION_BULLET[type];
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex flex-col gap-1.5">
          <div className="flex items-start gap-2.5">
            {bullet.prefix(i)}
            <span className={`text-sm ${bullet.textCls} leading-relaxed`}>
              {item.text && <span>{item.text} </span>}
              {item.link && <InlineLink link={item.link} />}
            </span>
          </div>
          {item.sub && (
            <ul className="ml-8 mt-0.5 space-y-1.5 border-l border-white/6 pl-3.5">
              {item.sub.map((s, j) => (
                <li key={j} className="text-sm text-brand-text/55 leading-relaxed">{s}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function DayGroupList({ dayGroups }: { dayGroups: DayGroup[] }) {
  return (
    <div className="space-y-5">
      {dayGroups.map((group, i) => (
        <div key={i} className="space-y-2">
          <div className="flex flex-wrap items-baseline gap-2 pb-0.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400/80">
              {group.dayLabel}
            </span>
            {group.note && (
              <span className="text-xs text-brand-text/40 italic">· {group.note}</span>
            )}
          </div>
          <ContentList items={group.items} type="todos" />
        </div>
      ))}
    </div>
  );
}

const TEAM_STYLES: Record<TeamResult['color'], { bg: string; border: string; accent: string; badge: string; rank: string }> = {
  red:    { bg: 'bg-red-500/5',    border: 'border-red-500/20',    accent: 'text-red-400',    badge: 'bg-red-500/10 border-red-500/30 text-red-300',    rank: 'text-red-400' },
  green:  { bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', accent: 'text-emerald-400', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300', rank: 'text-emerald-400' },
  yellow: { bg: 'bg-yellow-500/5', border: 'border-yellow-500/20', accent: 'text-yellow-400', badge: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300', rank: 'text-yellow-400' },
};

function ResultsSection({ section }: { section: Section }) {
  const teams = section.teamResults ?? [];

  return (
    <div className="space-y-5">
      {/* Leaderboard */}
      <div className="rounded-xl border border-white/8 bg-white/3 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-white/8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-400/80">Leaderboard</span>
        </div>
        <div className="divide-y divide-white/5">
          {teams.map((team, i) => {
            const s = TEAM_STYLES[team.color];
            return (
              <div key={i} className="flex items-center gap-4 px-4 py-3">
                <span className={`shrink-0 text-[11px] font-bold w-5 ${s.rank}`}>#{i + 1}</span>
                <span className={`text-sm font-semibold ${s.accent} flex-1`}>{team.name}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${s.badge}`}>{team.score}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team feedback cards */}
      {teams.map((team, i) => {
        const s = TEAM_STYLES[team.color];
        return (
          <div key={i} className={`rounded-xl border ${s.border} ${s.bg} overflow-hidden`}>
            {/* Card header */}
            <div className={`flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b ${s.border}`}>
              <div className="flex items-center gap-2.5">
                <span className={`text-sm font-bold ${s.accent}`}>{team.name}</span>
                <span className="text-xs text-brand-text/40 italic">{team.product}</span>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${s.badge}`}>{team.score}</span>
            </div>
            {/* Feedback body */}
            <div className="px-4 py-3.5 space-y-3">
              <p className="text-sm text-brand-text/75 leading-relaxed">{team.feedback}</p>
              <div className={`flex items-start gap-2 rounded-lg border ${s.border} ${s.bg} px-3 py-2.5`}>
                <span className={`shrink-0 text-xs font-bold uppercase tracking-wide ${s.accent} mt-0.5`}>Work on:</span>
                <p className="text-sm text-brand-text/70 leading-relaxed">{team.improvement}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Closing note */}
      {section.closingNote && (
        <p className="text-xs text-brand-text/45 italic border-t border-white/5 pt-3 leading-relaxed">
          {section.closingNote}
        </p>
      )}
    </div>
  );
}

function SectionCard({ section }: { section: Section }) {
  const meta = SECTION_META[section.type];

  return (
    <div className={`rounded-2xl border ${meta.border} ${meta.bg} overflow-hidden`}>
      {/* Header bar */}
      <div className={`flex flex-wrap items-center gap-3 px-5 py-3 border-b ${meta.border}`}>
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{meta.icon}</span>
          <span className={`text-xs font-bold uppercase tracking-widest ${meta.accent}`}>{meta.label}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          {section.duration && (
            <span className="text-[11px] text-brand-text/40 border border-white/8 rounded-full px-2.5 py-0.5">
              {section.duration}
            </span>
          )}
          {section.deadline && (
            <span className="text-[11px] font-semibold text-amber-400 border border-amber-500/30 rounded-full px-2.5 py-0.5 bg-amber-500/10">
              Due {section.deadline}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        {section.type === 'results' && <ResultsSection section={section} />}
        {section.items && section.type !== 'results' && <ContentList items={section.items} type={section.type} />}
        {section.dayGroups && <DayGroupList dayGroups={section.dayGroups} />}

        {section.type === 'todos' && section.dayGroups && (
          <p className="text-xs text-brand-text/40 italic border-t border-white/5 pt-3 leading-relaxed">
            <span className="not-italic font-semibold text-white/45">Note:</span> Day 2 to Day 6 is
            optional. You can submit the Day 1 app, but that won't get you a job as an AI Engineer.
          </p>
        )}
      </div>
    </div>
  );
}

function WeekCard({ week, index, isOpen, onToggle, locked }: {
  week: Week;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  locked?: boolean;
}) {
  const color = WEEK_COLORS[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      <div
        className={`group relative rounded-3xl border bg-brand-card overflow-hidden transition-all duration-300 ${
          locked
            ? 'border-white/5 opacity-60'
            : isOpen
            ? color.ring
            : 'border-white/6 hover:border-white/12'
        }`}
      >
        {/* Subtle top gradient bar */}
        {!locked && (
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${color.glow.replace('0.35', '0.8').replace('0.3', '0.8')}, transparent)` }}
          />
        )}

        {/* Week header */}
        <button
          onClick={locked ? undefined : onToggle}
          disabled={locked}
          className={`w-full flex items-center gap-5 px-7 py-6 text-left ${locked ? 'cursor-not-allowed' : ''}`}
        >
          {/* Week number bubble */}
          <div
            className={`shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center border ${locked ? 'border-white/10' : color.ring} bg-brand-terminal`}
            style={locked ? {} : { boxShadow: `0 0 20px ${color.glow}` }}
          >
            {locked ? (
              <span className="text-xl">🔒</span>
            ) : (
              <>
                <span className="text-[10px] font-semibold text-brand-text/50 uppercase tracking-widest leading-none">
                  WK
                </span>
                <span className={`text-2xl font-bold ${color.num} font-display leading-none mt-0.5`}>
                  {week.number}
                </span>
              </>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-brand-text/40 uppercase tracking-widest mb-1">
              Week {week.number}
            </p>
            <h3 className={`text-lg font-semibold leading-snug pr-4 ${locked ? 'text-white/40' : 'text-white'}`}>
              {week.title}
            </h3>

            {locked ? (
              <p className="text-xs text-brand-text/35 mt-2 italic">Coming soon. Unlocks after Week {week.number - 1}</p>
            ) : (
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {week.sections.map((s) => {
                  const m = SECTION_META[s.type];
                  return (
                    <span
                      key={s.type}
                      className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${m.border} ${m.bg} ${m.accent}`}
                    >
                      <span>{m.icon}</span>
                      {m.label}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Chevron or lock icon */}
          {!locked && (
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0 text-brand-text/30 text-xl"
            >
              ⌄
            </motion.span>
          )}
        </button>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-7 pb-7 space-y-4 border-t border-white/5 pt-5">
                {week.sections.map((section, i) => (
                  <SectionCard key={i} section={section} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AgendaSpring26Page() {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  const toggle = (i: number) => setOpenWeek((prev) => (prev === i ? null : i));

  return (
    <>
      <Helmet>
        <title>Spring '26 Agenda | MyRealProduct</title>
        <meta
          name="description"
          content="Full agenda for MyRealProduct Spring 2026 cohort: 4 weeks of ideation, MVP building, deployment, and launch."
        />
      </Helmet>

      <div className="relative min-h-screen bg-brand-dark overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

        {/* Ambient glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[100px] pointer-events-none bg-brand-primary" />
        <div className="absolute top-[60%] left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none bg-sky-600" />
        <div className="absolute top-[40%] right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none bg-emerald-600" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

          {/* ── Hero ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-brand-accent uppercase tracking-[0.2em] mb-4 border border-brand-accent/30 rounded-full px-4 py-1.5 bg-brand-accent/10">
              Spring 2026 Cohort
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-4">
              Program{' '}
              <span className="text-gradient">Agenda</span>
            </h1>
            <p className="text-brand-text/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Four weeks. From raw idea to live AI product: shipped, deployed, and in front of real users.
            </p>

            {/* Leaderboard button */}
            <div className="mt-6">
              <Link
                to="/leaderboard/spring26"
                className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-200"
              >
                🏆 Week 1 Results
              </Link>
            </div>

            {/* Week overview pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {WEEKS.map((w, i) => {
                const locked = i > 1;
                return (
                  <button
                    key={i}
                    disabled={locked}
                    onClick={locked ? undefined : () => { setOpenWeek(i); document.getElementById(`week-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                    className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                      locked
                        ? 'border-white/6 text-brand-text/25 cursor-not-allowed'
                        : openWeek === i
                        ? `${WEEK_COLORS[i].ring} ${WEEK_COLORS[i].num} bg-white/5`
                        : 'border-white/10 text-brand-text/60 hover:border-white/20 hover:text-white/80'
                    }`}
                  >
                    {locked ? '🔒 ' : ''}Week {w.number}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* ── Timeline line + Week cards ── */}
          <div className="relative space-y-4">
            {/* Vertical connector line */}
            <div className="absolute left-[2.125rem] top-16 bottom-16 w-px bg-gradient-to-b from-brand-primary/40 via-sky-500/20 to-amber-500/20 pointer-events-none hidden sm:block" />

            {WEEKS.map((week, i) => (
              <div key={i} id={`week-${i}`}>
                <WeekCard
                  week={week}
                  index={i}
                  isOpen={openWeek === i}
                  onToggle={() => toggle(i)}
                  locked={i > 1}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
