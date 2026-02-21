import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Layers } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "TenzorIt",
    category: "AI Productivity",
    description: "Understand LinkedIn content in seconds. An AI-powered tool that distills long posts into actionable insights.",
    stack: ["Python", "LLMs", "Streamlit"],
    color: "from-blue-500/20 to-purple-500/20",
    youtubeEmbed: "https://www.youtube.com/embed/kMXxEOGt50U",
    youtubeWatch: "https://www.youtube.com/watch?v=kMXxEOGt50U",
  },
  {
    id: 2,
    title: "Calmpanion",
    category: "Mental Health",
    description: "Find Peace in Every Conversation. An AI companion that helps users navigate stress through guided dialogue.",
    stack: ["Python", "OpenAI", "Streamlit"],
    color: "from-emerald-500/20 to-teal-500/20",
    youtubeEmbed: "https://www.youtube.com/embed/uQiq9BpnwEg",
    youtubeWatch: "https://www.youtube.com/watch?v=uQiq9BpnwEg",
  },
  {
    id: 3,
    title: "NutriScan AI",
    category: "Computer Vision",
    description: "Smart Shopping, Safer Eating. Scan any food product and get instant AI-powered nutritional analysis.",
    stack: ["Gemini Vision", "Python", "FastAPI"],
    color: "from-rose-500/20 to-orange-500/20",
    youtubeEmbed: "https://www.youtube.com/embed/LPf0FLUnD3Q",
    youtubeWatch: "https://www.youtube.com/watch?v=LPf0FLUnD3Q",
  },
  {
    id: 4,
    title: "SmartBill Connect",
    category: "Fintech",
    description: "From Bill Shock to Bill Bliss. AI-powered utility bill analyzer that finds savings and simplifies payments.",
    stack: ["RAG", "Supabase", "React"],
    color: "from-amber-500/20 to-yellow-500/20",
    youtubeEmbed: "https://www.youtube.com/embed/-uoCxobOuIM",
    youtubeWatch: "https://www.youtube.com/watch?v=-uoCxobOuIM",
  },
  {
    id: 5,
    title: "ZenFlowIt",
    category: "Productivity",
    description: "AI Powered Productivity App. Automates task management and optimizes your daily workflow with intelligent agents.",
    stack: ["AI Agents", "Python", "Streamlit"],
    color: "from-cyan-500/20 to-blue-500/20",
    youtubeEmbed: "https://www.youtube.com/embed/XGKFxwF9A0I",
    youtubeWatch: "https://www.youtube.com/watch?v=XGKFxwF9A0I",
  },
  {
    id: 6,
    title: "ExpiryGenie",
    category: "Computer Vision",
    description: "Track food easily using AI. Automated food inventory tracking using image recognition to reduce household waste.",
    stack: ["Python", "OpenCV", "Gemini Vision"],
    color: "from-violet-500/20 to-fuchsia-500/20",
    youtubeEmbed: "https://www.youtube.com/embed/bWvER3IA2vE",
    youtubeWatch: "https://www.youtube.com/watch?v=bWvER3IA2vE",
  },
];

export default function Showcase() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-dark to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />

      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white leading-none">
              Student <br /> <span className="text-white/30">Creations</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest">
            <Layers size={14} />
            <span>Live Showcase</span>
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
        
        <motion.div 
          className="flex gap-8 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              className="group relative h-[450px] w-[350px] shrink-0 overflow-hidden rounded-3xl bg-brand-card border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* Full-card gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

              {/* YouTube Embed in top area */}
              <div className="relative w-full aspect-video overflow-hidden">
                <iframe
                  src={project.youtubeEmbed}
                  title={project.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end" style={{ top: '56.25%' }}>
                <div className="flex justify-between items-start mb-auto">
                  <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-white/60 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <a 
                    href={project.youtubeWatch} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors opacity-0 group-hover:opacity-100 duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-text/80 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase tracking-wider text-white/40 border border-white/10 px-2 py-1 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Reveal Border */}
              <div className="absolute inset-0 border-2 border-brand-primary/0 group-hover:border-brand-primary/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="relative h-[450px] w-[350px] shrink-0 overflow-hidden rounded-3xl bg-brand-primary flex flex-col items-center justify-center text-center p-8 group cursor-pointer">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">
              You're Next.
            </h3>
            <p className="text-white/80 mb-8 max-w-xs relative z-10">
              Join the cohort and build your own AI product in just 4 weeks.
            </p>
            <div className="w-16 h-16 rounded-full bg-white text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
              <ArrowUpRight size={32} />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
