import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function JoanStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30">
      <Helmet>
        <title>Escaping the YouTube Trap: Joan's Story — MyRealProduct</title>
        <meta name="description" content="Discover how Joan built her first AI app and took her skills to the enterprise." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link 
            to="/story"
            className="inline-flex items-center text-brand-primary/80 hover:text-brand-primary font-mono text-sm uppercase tracking-wider mb-12 transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stories
          </Link>

          <header className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-6 block">
                Joan's Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-8">
                Escaping the "YouTube Trap": How Joan Built Her First AI App and Took Her Skills to the Enterprise
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-white/50 font-mono text-sm">
                <span>April 2026</span>
                <span>•</span>
                <span>4 min read</span>
              </div>
            </motion.div>
          </header>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert lg:prose-lg mx-auto prose-headings:font-display prose-headings:font-normal prose-a:text-brand-primary hover:prose-a:text-brand-primary/80 prose-img:rounded-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" 
              alt="Data and AI Abstract" 
              className="max-w-lg mx-auto block bg-white/5 p-2 rounded-2xl mb-12 object-cover object-center aspect-video"
            />

            <p>
              If you are trying to break into the data and AI space right now, you know how easy it is to get lost.
            </p>

            <p>
              Joan was experiencing this firsthand. As a professional exploring a career pivot into data science, she was doing what most people do: she went to YouTube.
            </p>

            <p>
              "I was always doing self-learning by watching YouTube tutorials," Joan remembers. "But I did not have proper guidance on where to go or what to look out for. It was a crazy path. Everything was just in a random, nonlinear fashion."
            </p>

            <p>
              She was putting in the hours, but without a structured roadmap, her focus was scattered. She needed to streamline her path. After following MyRealProduct (MRP) lead mentor Hari on LinkedIn and attending his webinars, she realized she had found the missing link.
            </p>

            <p>
              She decided to join the live MRP AI Engineering Cohort.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">"Think About Problems, Not Solutions"</h3>

            <p>
              When Joan entered the cohort, she was immediately introduced to a completely new way of thinking about software. Instead of jumping straight into writing code, Hari forced the cohort to step back and look at the real world.
            </p>

            <p>
              "Hari used to tell us: <em>'Think about problems, don't think about solutions,'</em>" Joan recalls.
            </p>

            <p>
              That mindset shift changed everything. Paired with a team of other builders, Joan brainstormed how to solve everyday annoyances. They noticed that existing food-expiration tracking apps required users to manually type in dates and interpret data.
            </p>

            <p>
              To solve this, they built <strong>Expiry Genie</strong>, an AI-powered app designed to automatically scan and monitor food expiration dates, removing the manual friction completely.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The Trenches: Battling AWS and Broken Code</h3>

            <p>
              Building an AI product from scratch is never a smooth ride, and Joan is the first to admit that the actual engineering phase was a grind.
            </p>

            <p>
              While learning new development environments like Replit and Lovable, Joan ran headfirst into the hardest part of modern engineering: cloud deployment.
            </p>

            <p>
              "AWS was completely new to me," she admits. "Command-wise, I used to make mistakes. There would be broken lines in the code. I didn't know how to use S3 storage buckets or where Boto3 should be placed in the files."
            </p>

            <p>
              This is the exact moment where self-taught developers usually quit. But because Joan had the MRP ecosystem behind her, she pushed through. Using a combination of AI tools, Replit, and Hari's direct guidance, she began to untangle the errors.
            </p>

            <p>
              "Hari would tell me, <em>'Search like this,'</em> and then step-by-step, I could understand where the code was broken and what parts had to be filled," she explains. "It was time-consuming, and it didn't happen immediately, but I worked on it again and again. Now, I am completely clear about it."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The Enterprise Payoff</h3>

            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80" 
              alt="Enterprise Tech Success" 
              className="max-w-md mx-auto block bg-white/5 p-2 rounded-2xl my-12 object-cover aspect-[4/3]"
            />

            <p>
              By the end of the cohort, Joan had successfully deployed Expiry Genie. More importantly, she finally had a real, working AI product to put on her resume.
            </p>

            <p>
              That hands-on experience paid off massively. Today, Joan is a Requirement Analyst at a massive global tech enterprise. And the AI skills she built in the MRP cohort are being used every single day.
            </p>

            <p>
              "Now, the situation is that we are supposed to use AI tools for whatever work we do, whether in the development phase or the requirements phase," Joan says. "I am using enterprise AI tools like Glean in my daily workflow. Prompting is the main thing, and I am doing it perfectly."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Her Advice for the Next Generation of Builders</h3>

            <p>
              Joan's journey from a frustrated, self-taught YouTube learner to an AI-empowered enterprise analyst is a testament to the power of structured, project-based learning.
            </p>

            <p>
              When asked what advice she has for individuals who are just starting to learn AI, she stresses the importance of resilience and precision.
            </p>

            <p>
              "You should not stop after a single attempt," she advises. "You have to explore the multiple AI tools we have now. And learn how to prompt correctly - only by doing correct prompting will the AI be able to give you the right information."
            </p>

            <p>
              Most importantly? Stop trying to navigate the nonlinear maze alone. "Connect with mentors, find the right tutorials, and get help. It makes all the difference."
            </p>

          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}