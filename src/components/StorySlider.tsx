import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const STORIES = [
  {
    title: "\"I was drowning in AI tools. Here's how I finally figured it out.\" (Denise's Story)",
    excerpt: "Denise was stuck reading articles and watching tutorials. She didn't need another list of AI tools; she needed a proper system to get started.",
    href: "/story/denise",
    image: "/articles/denise_1.jpeg",
    author: "Denise",
  },
  {
    title: "\"I Thought Building an AI Product Was Impossible\" — How Aprotiim Finally Launched His First App (Aprotiim's Story)",
    excerpt: "He didn't need another tutorial on how a neural network functions. He needed to know how to build a complete, user-facing application.",
    href: "/story/aprotiim",
    image: "/articles/aprotiim_1.jpeg",
    author: "Aprotiim",
  },
  {
    title: "Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment (Digvijay's Story)",
    excerpt: "His projects were getting stuck on his local laptop. He needed to learn how to build an end-to-end, live product.",
    href: "/story/digvijay",
    image: "/articles/digvijay_1.jpeg",
    author: "Digvijay",
  },
  {
    title: "Why a Stanford-Certified Data Scientist Joined the MyRealProduct Cohort Twice (Debisree's Story)",
    excerpt: "She wanted to transition her career toward the highly coveted 'AI Engineer' path. To bridge that gap, she didn't just join once - she joined twice.",
    href: "/story/debisree",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    author: "Debisree",
  },
  {
    title: "Why a 15-Year Citibank Veteran Joined the AI Cohort to Learn Product Building (Rajesh's Story)",
    excerpt: "He recognized a fundamental shift in the industry: AI was leveling the playing field.",
    href: "/story/rajesh",
    image: "/articles/rajesh_1.jpeg",
    author: "Rajesh",
    imageClass: "object-cover object-[center_30%]",
  },
  {
    title: "Escaping the \"YouTube Trap\": How Joan Built Her First AI App (Joan's Story)",
    excerpt: "She didn't have proper guidance on where to go or what to look out for. It was a crazy path.",
    href: "/story/joan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: "Joan",
  },
  {
    title: "How MyRealProduct Helped Padmapriya Bridge the Gap Between Traditional Education and Building AI Agents (Padmapriya's Story)",
    excerpt: "She didn't need another theoretical seminar or a recorded university lecture. She needed to get her hands dirty with practical, modern tools.",
    href: "/story/padmapriya",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    author: "Padmapriya",
  },
  {
    title: "Escaping the \"Tutorial Trap\": How a Busy Data Analyst Broke Her Mental Blocks to Build AI (Praveena's Story)",
    excerpt: "She was always just a data analyst. She didn't have the idea that she could actually build software.",
    href: "/story/praveena",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    author: "Praveena",
  },
  {
    title: "Escaping the \"AI News Cycle\": How a Data Science Grad Stopped Reading and Started Building (Saahithi's Story)",
    excerpt: "She was caught in the 'AI News Cycle,' reading everything, but doing nothing.",
    href: "/story/saahithi",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Saahithi",
  },
  {
    title: "More Stories Coming Soon",
    excerpt: "Stay tuned for more success stories from our cohort members.",
    href: "/story",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    author: "Community",
  },
];

export default function StorySlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-brand-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="flex-1">
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
              Success Stories
            </span>
            <Link to="/story" className="group flex items-center hover:opacity-80 transition-opacity">
              <h2 className="text-4xl md:text-5xl font-display font-medium text-white">
                Stories
              </h2>
              <ArrowRight className="ml-4 w-6 h-6 text-brand-primary transform group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="text-brand-text/50 max-w-sm mt-4 text-sm">
              Read real stories of how people learned to build AI products end-to-end, overcoming the overwhelm to build real business impact.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-4 mt-6 md:mt-0">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors focus:outline-none group"
            >
              <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors focus:outline-none group"
            >
              <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar {
              display: none;
            }
          `}} />
          {STORIES.map((story, i) => (
            <motion.a
              key={i}
              href={story.href}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-start flex-none w-[85vw] md:w-[400px] group block border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden hover:border-brand-primary/50 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden bg-white/5">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${story.imageClass || 'object-cover'}`}
                />
              </div>
              <div className="p-6">
                <div className="text-brand-primary font-mono text-[10px] mb-3 uppercase tracking-wider">{story.author}</div>
                <h3 className="text-xl font-display font-medium mb-3 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed line-clamp-2">
                  {story.excerpt}
                </p>
                <div className="flex items-center text-xs font-medium text-white group-hover:text-brand-primary transition-colors uppercase tracking-wider">
                  Read Story <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}