import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const STORIES = [
  {
    title: "\"I was drowning in AI tools. Here's how I finally figured it out.\"",
    excerpt: "Denise was stuck reading articles and watching tutorials. She didn't need another list of AI tools; she needed a proper system to get started.",
    href: "/story/denise",
    image: "/articles/denise_1.jpeg",
    author: "Denise",
  },
  {
    title: "Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment",
    excerpt: "His projects were getting stuck on his local laptop. He needed to learn how to build an end to end, live product.",
    href: "/story/digvijay",
    image: "/articles/digvijay_1.jpeg",
    author: "Digvijay",
  },
  {
    title: "Why a 15 Year Citibank Veteran Joined the AI Cohort to Learn Product Building",
    excerpt: "He recognized a fundamental shift in the industry: AI was leveling the playing field.",
    href: "/story/rajesh",
    image: "/articles/rajesh_1.jpeg",
    author: "Rajesh",
    imageClass: "object-cover object-[center_30%]",
  },
  {
    title: "Why a Stanford Certified Data Scientist Joined the MyRealProduct Cohort Twice",
    excerpt: "She wanted to transition her career toward the highly coveted 'AI Engineer' path. To bridge that gap, she didn't just join once, she joined twice.",
    href: "/story/debisree",
    image: "/images/stanford.png",
    author: "Debisree",
    imageClass: "object-contain bg-white p-8",
  },
  {
    title: "\"I Thought Building an AI Product Was Impossible\": How Aprotiim Finally Launched His First App",
    excerpt: "He didn't need another tutorial on how a neural network functions. He needed to know how to build a complete, user facing application.",
    href: "/story/aprotiim",
    image: "/articles/aprotiim_1.jpeg",
    author: "Aprotiim",
  },
  {
    title: "Escaping the \"YouTube Trap\": How Joan Built Her First AI App",
    excerpt: "She didn't have proper guidance on where to go or what to look out for. It was a crazy path.",
    href: "/story/joan",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: "Joan",
  },
  {
    title: "How MyRealProduct Helped Padmapriya Bridge the Gap Between Traditional Education and Building AI Agents",
    excerpt: "She didn't need another theoretical seminar or a recorded university lecture. She needed to get her hands dirty with practical, modern tools.",
    href: "/story/padmapriya",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    author: "Padmapriya",
  },
  {
    title: "Escaping the \"Tutorial Trap\": How a Busy Data Analyst Broke Her Mental Blocks to Build AI",
    excerpt: "She was always just a data analyst. She didn't have the idea that she could actually build software.",
    href: "/story/praveena",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    author: "Praveena",
  },
  {
    title: "Escaping the \"AI News Cycle\": How a Data Science Grad Stopped Reading and Started Building",
    excerpt: "She was caught in the 'AI News Cycle,' reading everything, but doing nothing.",
    href: "/story/saahithi",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    author: "Saahithi",
  },
];

export default function StoriesPage() {
  useEffect(() => {
    document.title = "Success Stories, MyRealProduct";
    return () => {
      document.title = "MyRealProduct, Build an End to End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Success Stories, MyRealProduct</title>
        <meta name="description" content="Read real stories of how people learned to build AI products end to end, overcoming the overwhelm to build real business impact." />
        <link rel="canonical" href="https://www.myrealproduct.com/story" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.myrealproduct.com/story" />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:title" content="Success Stories — MyRealProduct" />
        <meta property="og:description" content="Read real stories of how people learned to build AI products end to end, overcoming the overwhelm to build real business impact." />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="Success Stories — MyRealProduct" />
        <meta name="twitter:description" content="Real people. Real AI products. Read how our alumni went from tutorials to shipping." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>
      
      <Navbar />

      <main className="container mx-auto px-4 max-w-5xl pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">
            Real Impact
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white leading-tight mb-6">
            Stories
          </h1>
          <p className="text-brand-text/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the people who stopped chasing tutorials and started building real, end to end AI applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story, i) => (
            <motion.a
              key={story.href}
              href={story.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group block border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden hover:border-brand-primary/50 hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden bg-white/5">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${story.imageClass || 'object-cover'}`}
                />
              </div>
              <div className="p-8">
                <div className="text-brand-primary font-mono text-xs mb-3 uppercase tracking-wider">{story.author}</div>
                <h2 className="text-2xl font-display font-medium mb-4 leading-snug group-hover:text-brand-primary transition-colors">
                  {story.title}
                </h2>
                <p className="text-white/60 mb-6 leading-relaxed line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-white group-hover:text-brand-primary transition-colors">
                  Read Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
