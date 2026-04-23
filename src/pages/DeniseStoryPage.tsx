import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DeniseStoryPage() {
  useEffect(() => {
    document.title = "Denise's Story — MyRealProduct";
    return () => {
      document.title = "MyRealProduct — Build an End-to-End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>"I was drowning in AI tools. Here's how I finally figured it out." — Denise's Story</title>
        <meta name="description" content="Discover how Denise moved from the 'dashboard trap' to building powerful, end-to-end AI applications using Cursor, Python, and Streamlit." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-16 pb-12 border-b border-white/10"
          >
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-6 block">
              Success Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-white leading-tight mb-8">
              "I was drowning in AI tools. Here's how I finally figured it out."
            </h1>
            <div className="text-white/60 font-mono text-sm uppercase tracking-widest">
              (Denise's Story)
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 max-w-3xl mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none text-white/80"
          >
            <p className="text-xl leading-relaxed text-white/90">
              If you've tried to learn AI recently, you probably know the exact feeling Denise had a few months ago.
            </p>

            <img 
              src="/articles/denise_1.jpeg" 
              alt="Denise smiling in a professional headshot" 
              className="max-w-lg mx-auto block rounded-2xl my-12 object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              You open your laptop, ready to learn. But instead of clarity, you're hit with a wave of chaos.
            </p>

            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "There was just too much information out there," Denise remembers. 
              </p>
            </blockquote>

            <p>
              As a professional looking to apply AI to data science and analytics, she knew she needed to adapt. "But I was just overwhelmed with the sheer amount of AI products out there. I had to figure out if there were just too many tools."
            </p>

            <p>
              Like so many driven people in tech, Denise was stuck. Reading articles and watching tutorials wasn't giving her a clear path. She didn't need another list of AI tools; she needed a proper system to get started.
            </p>
            
            <p>That search for clarity led her to the MyRealProduct (MRP) AI Cohort.</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The End of the Overwhelm</h2>
            
            <p>When Denise joined MRP, the biggest relief came from the way the information was delivered.</p>
            
            <p>AI engineering can easily become complicated, but Denise credits the cohort's lead mentor, Hari, for completely changing how she absorbed the material.</p>
            
            <p>"He made it very comprehensible and very understandable," Denise says. "He explained every single step in detail, but it was never overwhelming. He provided all the information that we needed, and there wasn't a single question he didn't know the answer to."</p>
            
            <img 
              src="/articles/denise_2.jpeg" 
              alt="Denise black and white headshot" 
              className="w-full rounded-2xl my-12 shadow-2xl border border-white/10"
            />

            <p>For the first time, the fog of the AI landscape started to clear.</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The "Aha!" Moment</h2>
            
            <p>The real breakthrough happened when the cohort moved past basic theory and started building real workflows using tools like Cursor, Python, and Streamlit.</p>
            
            <p>But the biggest lesson wasn't just about learning the code. It was about learning the process.</p>
            
            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "My biggest 'aha' moment was understanding how important it is to build from end-to-end," she explains.
              </p>
            </blockquote>
            
            <p>"It wasn't just about using a tool itself. It's about understanding the business case and the problem first... and then finding the right tool to actually solve that business problem."</p>
            
            <p>It sounds simple, but in the AI world, it's a game-changer. Denise learned how to stop chasing every new AI tool, and instead focus on building custom solutions around what a business actually needs.</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">Leaving the "Dashboard Trap" Behind</h2>
            
            <p>Today, Denise approaches her major projects completely differently.</p>
            
            <p>She notes that before the MRP cohort, she fell into a common routine that many data professionals experience.</p>
            
            <p>"Before Hari, I was just building dashboards just to say, 'Look, here is what I can do,'" Denise laughs.</p>
            
            <p>But now, she has evolved her skillset to focus on high-level impact. She is utilizing Python and Streamlit to build interactive applications that executives and decision-makers can actually interact with.</p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-10">
              <p className="text-xl text-brand-primary font-medium m-0">
                "What sets me apart from other people now—and Hari really taught me this—is that I am able to actually understand what a company needs," she says proudly. "I can understand their initiatives, do the research, and then build the project around that."
              </p>
            </div>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">Her Advice to You</h2>
            
            <img 
              src="/articles/denise_3.jpeg" 
              alt="Denise sitting in a cafe" 
              className="max-w-md mx-auto block rounded-2xl my-12 object-cover border border-white/10 shadow-xl"
            />
            
            <p>If you are sitting exactly where Denise was a few months ago—feeling overwhelmed, frustrated, and unsure of where to start with AI—she has one piece of clear advice for you.</p>
            
            <p className="text-2xl text-white font-serif italic py-6">
              "Get hands-on," she urges. "You have to understand what you are building end-to-end. Give yourself a few months to get your hands dirty, and just start using the tools to complete a project."
            </p>
            
            <p>Denise's story is the perfect reminder that you don't need to be overwhelmed by the noise of the internet. You just need the right environment, a mentor who can make the complex simple, and the willingness to finally start building.</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}