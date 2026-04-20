import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import Footer from '../components/Footer';

const RESOURCES = [
  {
    title: 'Claude Code 101',
    description: 'A practical cheatsheet for building with Claude Code — slash commands, hooks, MCP servers, and everything you need to ship faster.',
    href: '/resources/claude-code-101',
    tag: 'Cheatsheet',
    accent: '#7C3AED',
  },
  {
    title: 'LLMOps 101',
    description: 'Everything you need to know about testing, evaluating, and deploying LLMs in production. From evals to observability.',
    href: '/resources/llmops-101',
    tag: 'Cheatsheet',
    accent: '#453DC8',
  },
];

export default function ResourcesPage() {
  useEffect(() => {
    document.title = 'Free Resources — MyRealProduct';
    return () => {
      document.title = 'MyRealProduct — Build an End-to-End AI Product in 4 Weeks';
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen">
      <div className="noise-overlay" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-dark/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <a href="/" className="text-xl font-bold font-display tracking-tight text-white">
            MyRealProduct
          </a>
          <a href="/" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors">
            ← Back to home
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 max-w-5xl pt-40 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            Free Resources
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white leading-tight mb-6">
            101 Cheatsheets
          </h1>
          <p className="text-brand-text/50 text-lg max-w-xl leading-relaxed">
            Practical, no-fluff references for the tools and concepts that matter. More coming regularly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {RESOURCES.map((r, i) => (
            <motion.a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border border-white/8 bg-white/[0.02] p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none"
                style={{ backgroundColor: r.accent }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 border border-white/10 text-white/40">
                    {r.tag}
                  </span>
                  <ArrowUpRight size={16} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </div>
                <h2 className="text-2xl font-display font-medium text-white mb-3">{r.title}</h2>
                <p className="text-brand-text/50 text-sm leading-relaxed">{r.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-xs font-mono text-white/20 uppercase tracking-widest"
        >
          More cheatsheets dropping soon
        </motion.p>

      </div>
      <Footer />
    </div>
  );
}
