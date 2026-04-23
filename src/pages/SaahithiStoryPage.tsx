import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SaahithiStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30">
      <Helmet>
        <title>Escaping the AI News Cycle: Saahithi's Story — MyRealProduct</title>
        <meta name="description" content="How a Data Science Grad Stopped Reading and Started Building." />
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
                Saahithi's Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-8">
                Escaping the "AI News Cycle": How a Data Science Grad Stopped Reading and Started Building
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
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80" 
              alt="AI Technology Abstract" 
              className="max-w-lg mx-auto block bg-white/5 p-2 rounded-2xl mb-12 object-cover object-center aspect-video"
            />

            <p>
              If you are trying to break into the tech industry right now, your daily routine probably looks something like this: You wake up, check your phone, and see that three new AI models have just been released.
            </p>

            <p>
              For Saahithi, who had just graduated with her Master's degree in Data Science, that constant flood of information was becoming paralyzing.
            </p>

            <p>
              "AI was blooming," Saahithi recalls. "It felt like every single day there was a new technology, a new theory, or a new concept being released. I was trying to catch up with everything, looking at courses to learn the basic theory of how LLMs worked. But I was completely new to actually building with it."
            </p>

            <p>
              She was caught in the "AI News Cycle," reading everything, but doing nothing.
            </p>

            <p>
              That changed when she started following MyRealProduct (MRP) lead mentor Hari on LinkedIn. Reading his newsletter, one specific piece of advice struck a chord with her: <em>If you want to learn AI, you have to learn it by doing.</em>
            </p>

            <p>
              Realizing she needed a practical starting point to break out of her learning paralysis, Saahithi joined the live MRP AI Engineering Cohort.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The Brainstorm: Problems over Solutions</h3>

            <p>
              When Saahithi entered the cohort, she expected to immediately start coding. Instead, she was met with a completely different framework.
            </p>

            <p>
              "In the very first orientation call, we were asked to stop thinking about solutions, and start thinking about problems," she explains.
            </p>

            <p>
              She was grouped with a team of professionals from entirely different industries, from education to finance. That cross-industry collaboration sparked a massive shift in perspective. "We were sharing different problems, and because everyone was from a completely different stream, the perspectives and solutions were all different. Those interactions were incredibly interesting."
            </p>

            <p>
              Her team ultimately decided to solve a problem they were all deeply familiar with: the struggle of self-learning. They built an <strong>AI Learning Mentor</strong>, an application equipped with a dynamic chatbot designed to guide users step-by-step through building their own tech projects.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The Trenches: Bugs, APIs, and the Power of Community</h3>

            <p>
              In Weeks 2 and 3, the team dove into the actual engineering. Saahithi was introduced to rapid app-building environments like Replit, which she had never touched before.
            </p>

            <p>
              But building real software comes with real roadblocks. Once the team integrated the Gemini API to power their chatbot, they hit a wall.
            </p>

            <p>
              "We were trying to get the bot to suggest roadmaps and real-world projects based on a user's specific skill set," Saahithi notes. "But the responses from the API were repetitive, and the system was running really slow. We didn't know how to make it faster."
            </p>

            <p>
              In a standard online course, this is the exact moment a student might give up. But inside the MRP ecosystem, Saahithi had a lifeline.
            </p>

            <p>
              They reached out to Hari, who immediately tapped into the MRP network. He connected Saahithi's team with an MRP alumni who had previously worked extensively with that specific API. The alumni jumped in, helped them debug the system, and successfully optimized the response times.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Beyond Localhost: The Final Push</h3>

            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80" 
              alt="Cloud Deployment Infrastructure" 
              className="max-w-md mx-auto block bg-white/5 p-2 rounded-2xl my-12 object-cover aspect-[4/3]"
            />

            <p>
              With the application running smoothly, the final hurdle was taking it live.
            </p>

            <p>
              For many data science graduates, local environments are comfortable, but cloud deployment is a foreign language. "Deploying everything on AWS, connecting our EC2 instance with a custom domain, and actually making it public to the world... that was completely new to me," Saahithi says.
            </p>

            <p>
              But she did it. She crossed the finish line.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The New Normal</h3>

            <p>
              Today, Saahithi is no longer just reading the news, she is actively participating in the AI wave. She is taking the theories, workflows, and deployment skills she learned at MRP and integrating them directly into her Data Science career and personal projects.
            </p>

            <p>
              When asked what advice she has for other professionals who are feeling overwhelmed by the endless announcements from OpenAI and tech companies, her answer is simple.
            </p>

            <p>
              "I was in that exact same situation," she relates. "Every single day the news says there is a new model or concept. But if you just sit there looking at the news, it isn't going to help you go anywhere. You can't learn it all at once. You just need to start somewhere, pick something, and build."
            </p>

          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}