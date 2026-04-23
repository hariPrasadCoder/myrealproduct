import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AprotiimStoryPage() {
  useEffect(() => {
    document.title = "Aprotiim's Story — MyRealProduct";
    return () => {
      document.title = "MyRealProduct — Build an End-to-End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>"I Thought Building an AI Product Was Impossible" — Aprotiim's Story</title>
        <meta name="description" content="Read how Aprotiim moved past YouTube tutorials and finally launched his first end-to-end AI product." />
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
              "I Thought Building an AI Product Was Impossible" — How Aprotiim Finally Launched His First App
            </h1>
            <div className="text-white/60 font-mono text-sm uppercase tracking-widest">
              (Aprotiim's Story)
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
              There is a frustrating stage in every developer's journey that nobody really talks about.
            </p>

            <img 
              src="/articles/aprotiim_1.jpeg" 
              alt="Aprotiim presenting his project" 
              className="max-w-lg mx-auto block rounded-2xl my-12 object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              It's the phase where you know the theory, you've watched the YouTube tutorials, and you've pushed a few basic projects to your GitHub. But when you sit down for a job interview, you realize something terrifying: a basic script isn't going to make you stand out.
            </p>

            <p>
              Aprotiim was exactly here. While completing his Master's degree—which didn't include AI in the curriculum, he took it upon himself to learn.
            </p>

            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "I was following YouTube channels to learn the theory, and then the tools like LangChain," Aprotiim explains. "I built some basic AI agents and RAG architectures and pushed them to GitHub. But since I was looking for a job, I realized the projects I had done probably weren't good enough for an interview. I wanted an end-to-end product."
              </p>
            </blockquote>

            <p>
              He didn't need another tutorial on how a neural network functions. He needed to know how to build a complete, user-facing application. That drive is what brought him to the MyRealProduct (MRP) AI Cohort.
            </p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Illusion of the "Technical Wall"</h2>
            
            <p>Because Aprotiim already had some baseline knowledge of AI frameworks, his biggest breakthrough in the cohort wasn't actually a piece of code. It was a complete shift in his product mindset.</p>
            
            <p>In the tech world, beginners often assume the hardest part of building a product is writing the software. But in the very first week of MRP, Aprotiim learned that the code is secondary to the business case.</p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-10">
              <p className="text-xl text-brand-primary font-medium m-0">
                "Before jumping into the tools and starting to build, you have to identify the market gap," he notes. "Finding that gap and brainstorming how to leverage AI to solve it was completely new to me. Thinking about the entire lifecycle—from the problem to deployment—was an eye-opener."
              </p>
            </div>
            
            <p>For his project, Aprotiim identified a highly relatable pain point: the overwhelming process of buying a used car.</p>

            <p>He and his team built a comprehensive <strong>Car Buying Assistant</strong>. Instead of making users scour the internet, the application acts as a personalized broker. Users fill out a dynamic form detailing their preferences, and the app aggregates listings from over nine different US-based car websites to find the perfect match. It even features an integrated AI chatbot that answers complex questions about insurance documents and buying advice.</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Era of "Vibe Coding"</h2>
            
            <p>When it came time to actually build the application, Aprotiim utilized modern AI-assisted coding to move at lightning speed.</p>
            
            <p>He notes that the heavy lifting of development is completely different today than it was even a year ago. By utilizing advanced models like Claude, technical roadblocks that used to take days to solve were cleared in minutes.</p>
            
            <p>"Whatever bug I came across, the AI was able to solve it," Aprotiim says. "Giving proper prompts and using the proper model was really the only thing I needed to do."</p>
            
            <p>But getting the code to run on his laptop was only half the battle. The final hurdle was taking the application out of his local environment and putting it live on the internet.</p>
            
            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "I had deployed things to the cloud before in other projects, but I had never attached a custom domain name to it," he explains. "Getting that domain name and making it your own official website... that part was new. It was really nice to finally have your own product."
              </p>
            </blockquote>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Founder Mindset</h2>
            
            <p>Today, Aprotiim isn't just looking at AI as a way to pass a job interview. He is looking at it as a way to build actual businesses.</p>
            
            <img 
              src="/articles/aprotiim_2.jpeg" 
              alt="Aprotiim's Journey" 
              className="max-w-md mx-auto block rounded-2xl my-12 shadow-2xl border border-white/10"
            />
            
            <p>"I used to think that building and launching your own product was a massive deal that would take a monumental amount of effort," he laughs. "But after going through this cohort, I realized it's not that hard. I feel motivated to launch more products. Once my visa allows me to monetize, I plan to build multiple websites like this and try my luck."</p>

            <p>When asked what advice he has for people who are intimidated by the constant flood of AI news and buzzwords, Aprotiim offers a refreshingly grounded perspective.</p>

            <p className="text-2xl text-white font-serif italic py-6">
              "Don't worry about the technical challenges," he advises. "With modern AI-assisted coding, technical challenges are no longer the main problem. The real deal is finding the <em>right problem</em> and making a business out of it. If you join MyRealProduct, you'll see it's a great start. Once you build your first product, you will no longer feel scared or overwhelmed."
            </p>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}