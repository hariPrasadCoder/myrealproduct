import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Check, Info, Sparkles, ArrowRight, Quote, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

const FEATURES = [
  "A real, working AI product: wrapper to production, deployed and live",
  "The full 4-week ladder: RAG, AI agents, and LLMOps, not just theory",
  "Weekly direction from Hari + daily support from your coach",
  "$50,000 worth of software credits and discounts",
  "Founder community for ongoing peer support (WhatsApp)",
  "Prorated refund policy based on your remaining weeks"
];

const REVIEWS = [
  {
    text: "MyRealProduct made complex AI concepts simple and approachable. Hari's guidance and analogies gave me the confidence to use new tools and actually build products instead of just learning theory.",
    name: "Praveena Suresh",
    title: "Senior Data Analyst",
  },
  {
    text: "It's not easy to keep a group motivated and engaged for 4 weeks, especially while staying motivated yourself. I'm really glad I joined this cohort. Before this, I had no idea how to actually apply AI in a meaningful way. But now, I've built an app, something I didn't think I could do before.",
    name: "Vidyamai Shakkara",
    title: "Business Data Analyst",
  },
  {
    text: "Turning Python code into a real-world product was incredible. The constant guidance made learning rewarding.",
    name: "Joan Xavier",
    title: "PhD Candidate",
  },
];

export default function JoinPage() {
  const stripeLink = "https://buy.stripe.com/00wcMY2luaubepggR2ew802";

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30 selection:text-white">
      <Helmet>
        <title>Claim Your AI Engineer Fast Track Seat | MyRealProduct</title>
        <meta name="description" content="Build and deploy a real AI product in four weeks with weekly direction from Hari and daily support from your coach." />
        <link rel="canonical" href="https://www.myrealproduct.com/join" />
      </Helmet>
      <header className="relative z-10 container mx-auto px-4 pt-6">
        <a
          href="/"
          className="inline-flex text-xs font-mono uppercase tracking-widest text-brand-text/60 hover:text-white transition-colors"
        >
          Back to home
        </a>
      </header>
      {/* Hero Section */}
      <section className="pt-12 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
        <div className="noise-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6 tracking-tight leading-[1.08]">
              Become an <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-accent to-white font-semibold">AI Engineer</span><br />
              in just 4 weeks<br />
              <span className="text-2xl md:text-4xl text-white/40 font-normal">by building a real product.</span>
            </h1>
            
            <p className="text-lg text-brand-text/70 max-w-xl mx-auto mb-10">
              Think of it as having a personal trainer for becoming an AI engineer. Hari and your coach guide you from a working app to a fully agentic, production-deployed product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-brand-card/30 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-primary/20 pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-0 relative z-10">
              {/* Left Side - Pricing */}
              <div className="p-12 lg:p-16 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-accent text-xs font-mono uppercase tracking-widest mb-8">
                  <Sparkles size={12} />
                  <span>The Fast Track: your 1:1 personal trainer for 4 weeks</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter">
                  $1,999
                </h2>
                <p className="text-brand-text/60 text-sm font-mono uppercase tracking-wider mb-4">One-time payment</p>
                <p className="text-brand-text/40 text-xs max-w-[260px] leading-relaxed mb-8">
                  Four weeks of personal guidance from Hari and your coach. Independent 1:1 technical coaching runs $150–$400/hr elsewhere.
                </p>

                <a 
                  href={stripeLink}
                  className="w-full"
                >
                  <Button 
                    size="lg" 
                    className="w-full h-14 px-8 text-sm font-medium tracking-widest uppercase rounded-sm bg-white text-black hover:bg-brand-accent hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
                  >
                    CLAIM YOUR SEAT
                    <ArrowRight size={18} />
                  </Button>
                </a>
                
                <div className="mt-6 flex items-start gap-2.5 text-xs font-mono text-brand-accent/80 bg-brand-primary/10 px-4 py-3 rounded-sm border border-brand-primary/20 text-left max-w-[340px]">
                  <Info size={14} />
                  <span className="leading-relaxed">We work with about 4 people a month so every builder gets the attention they need. Next start: Saturday.</span>
                </div>
              </div>

              {/* Right Side - Features */}
              <div className="p-12 lg:p-16 bg-white/[0.02]">
                <h3 className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-6">
                  What you get
                </h3>
                <ul className="space-y-5">
                  {FEATURES.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 text-brand-text/90 leading-relaxed group/item"
                    >
                      <div className="mt-1.5 w-4 h-4 rounded-full bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center shrink-0 group-hover/item:bg-brand-primary group-hover/item:border-brand-primary transition-colors duration-300">
                        <Check size={10} className="text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="text-sm md:text-base font-light">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-10 p-5 border border-brand-accent/30 bg-brand-accent/5">
                  <div className="flex items-start gap-3">
                    <Users size={18} className="shrink-0 text-brand-accent mt-0.5" />
                    <div>
                      <p className="font-display text-lg text-white mb-1">Bring a friend: you both get 25% off.</p>
                      <p className="text-sm text-brand-text/70 leading-relaxed">Enrolling together? Contact the team to arrange the 25% friend rate for both of you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <h2 className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-8 text-center">
            Hear from past builders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((review) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/10 p-7 flex flex-col"
              >
                <Quote className="text-brand-primary/40 w-7 h-7 mb-4" />
                <p className="text-sm text-brand-text/80 leading-relaxed flex-1">&quot;{review.text}&quot;</p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-sm text-white font-medium">{review.name}</p>
                  <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider mt-1">{review.title}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
