import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  { name: 'TenzorIt', category: 'AI Productivity' },
  { name: 'Calmpanion', category: 'Mental Health' },
  { name: 'NutriScan AI', category: 'Computer Vision' },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-brand-dark px-4 pb-32">
      <a
        href="/portfolio"
        className="group container mx-auto block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/25 md:p-12"
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-brand-primary">
              Builder portfolio
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-white md:text-5xl">
              See what builders shipped.
            </h2>
            <p className="mt-4 max-w-xl text-brand-text">
              Real AI products built across productivity, health, fintech, and more.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white transition-colors group-hover:text-brand-accent">
            Explore previous students’ portfolio
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </div>

        <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.name} className="flex items-center justify-between gap-4 rounded-xl bg-white/[0.03] px-4 py-3">
              <span className="font-display text-sm font-medium text-white/80">{project.name}</span>
              <span className="text-right font-mono text-[9px] uppercase tracking-wider text-white/30">{project.category}</span>
            </div>
          ))}
        </div>
      </a>
    </section>
  );
}
