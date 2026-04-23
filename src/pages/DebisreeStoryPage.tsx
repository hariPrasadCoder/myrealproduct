import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DebisreeStoryPage() {
  useEffect(() => {
    document.title = "Debisree's Story - MyRealProduct";
    return () => {
      document.title = "MyRealProduct - Build an End-to-End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Why a Stanford-Certified Data Scientist Joined the MyRealProduct Cohort Twice - Debisree's Story</title>
        <meta name="description" content="Discover why Debisree, a Stanford-certified data scientist, joined the MRP cohort twice to master Agentic RAG and AI deployment." />
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
              Why a Stanford-Certified Data Scientist Joined the MyRealProduct Cohort Twice
            </h1>
            <div className="text-white/60 font-mono text-sm uppercase tracking-widest">
              (Debisree's Story)
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
              If you work in the data industry today, you know the reality of the landscape: it is moving at lightning speed.
            </p>

            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                Debisree, an industry Data Scientist, understands this better than anyone. "This is a field where the advancements are happening at lightning speed," she explains. "You have to adapt. You have to learn the new technology. Otherwise, you will feel stuck."
              </p>
            </blockquote>

            <p>
              While she was already well-versed in traditional data science, she knew the industry was shifting. She wanted to transition her career toward the highly coveted "AI Engineer" path, which required a deep understanding of advanced concepts like Agentic RAG and end-to-end deployment.
            </p>

            <p>
              To bridge that gap, she didn't just join the MyRealProduct (MRP) AI Cohort once - she joined it twice.
            </p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Enterprise-Grade Network</h2>
            
            <p>Debisree first attended the cohort in October. But when lead mentor Hari announced a new, specialized iteration focused specifically on the AI Engineer career path, she immediately re-enrolled.</p>
            
            <p>"I wanted to grow further in my career towards this specific path," Debisree notes. "I liked Hari's courses because they are super structured and methodical. They don't smother you with tons of useless stuff."</p>
            
            <p>The second time around, the environment was completely different. Hari had implemented an interview-based selection process for the cohort, meaning the room was filled with serious, senior-level practitioners.</p>
            
            <p>"The difference in experience was massive," she says. "I was grouped with two people who have been working in the industry for a long time - one from Amazon and one from Citibank. The group was highly knowledgeable and proactive. Even though the cohort is technically finished, we are still continuing our work together to make our product more advanced."</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">Building the "Intelligent Networking App"</h2>
            
            <p>Debisree is no stranger to product building. Having recently completed the Ignite program at Stanford Business School, she already had a deep understanding of how to brainstorm, validate, and take a product to market.</p>
            
            <p>Combined with her highly experienced MRP teammates, they bypassed basic ideas and tackled a complex, real-world problem: LinkedIn network overload.</p>
            
            <p>"When you are on LinkedIn these days, you feel overwhelmed with too many people, but you don't actually know most of them personally," Debisree explains.</p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-10">
              <p className="text-xl text-brand-primary font-medium m-0">
                To solve this, the team built an <strong>Intelligent Networking App</strong>. It acts as an AI semantic wrapper on top of your existing connections. "Let's say you want to apply to Amazon, but you have too many connections there and don't know who to approach for a referral. This app queries your network based on past affiliations, mutual friends, and work history to categorize your connections into 'warm' and 'cold' networks, guiding you on exactly who to ask."
              </p>
            </div>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">Mastering AWS and Cloud Deployment</h2>
            
            <p>When it came to the execution phase, the team divided and conquered using advanced tools like Claude. While her teammate finalized the application's build, Debisree took total ownership of the hardest part of software engineering: deployment.</p>
            
            <p>Running an AI app on a local laptop is easy; securely deploying it to the cloud is what separates beginners from true AI Engineers.</p>
            
            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "I solely took care of the AWS deployment," she says proudly. "Hari's videos were super helpful. I followed them step-by-step to learn the entire strategy - starting from buying the domain, to configuring all the security protocols, to setting up the proxy. I learned a lot."
              </p>
            </blockquote>
            
            <p>Today, she is taking those exact deployment strategies, along with her new knowledge of vector search and Agentic RAG, and applying them directly to her enterprise day job and personal projects.</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Antidote to "Course Overload"</h2>
            
            <p>When asked what advice she has for other Data Scientists who know they need to learn AI but feel overwhelmed by where to start, Debisree points out a massive flaw in the current education market.</p>
            
            <p>"Balancing a full-time job and upskilling is not easy," she warns. "If you try to go take a massive online course, it can be completely overwhelming. You just get lost. Taking a huge course is sometimes not a fruitful way to learn."</p>

            <p>Instead, she advocates for the MRP approach: lean, project-based, and highly focused.</p>

            <p className="text-2xl text-white font-serif italic py-6">
              "Hari makes it super simple," she concludes. "It's very structured. He gives you exactly the working knowledge you need to build on top of. Try to keep your eyes on what is new, and then just try to build something. That is the best way to learn."
            </p>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}