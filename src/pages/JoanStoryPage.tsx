import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function JoanStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Escaping the YouTube Trap: Joan's Story, MyRealProduct</title>
        <meta name="description" content="Discover how Joan built her first AI app and took her skills to the enterprise." />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="joan" />

        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-10 sm:pt-12 md:pt-16 pb-8 sm:pb-10"
          >
            <span className="text-brand-primary font-mono text-[11px] sm:text-xs tracking-[0.18em] sm:tracking-widest uppercase mb-5 sm:mb-6 block">
              Success Story
            </span>
            <h1 className="text-[26px] sm:text-[34px] md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.15] sm:leading-tight mb-5 sm:mb-8">
              Escaping the "YouTube Trap": How Joan Built Her First AI App and Took Her Skills to the Enterprise
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Joan"
              date="April 2026"
              highlights={[
                {
                  value: "First AI app deployed to AWS",
                  label:
                    "Shipped Expiry Genie, an AI app that scans and tracks food expiration.",
                },
                {
                  value: "Now an AI powered analyst",
                  label:
                    "Uses enterprise tools like Glean every day in her role at a global tech firm.",
                },
              ]}
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="story-prose"
          >
            <p className="story-lead">
              If you are trying to break into the data and AI space right now, you know how easy it is to get lost.
            </p>

            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
              alt="Data and AI abstract background"
              className="max-w-lg mx-auto block rounded-2xl object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              Joan was experiencing this firsthand. As a professional exploring a career pivot into data science, she was doing what most people do: she went to YouTube.
            </p>

            <blockquote className="story-quote">
              <p>
                "I was always doing self learning by watching YouTube tutorials. But everything was random and nonlinear."
              </p>
            </blockquote>

            <p>
              She was putting in the hours, but without a structured roadmap, her focus was scattered. After following MyRealProduct (MRP) lead mentor Hari on LinkedIn and attending his webinars, she realized she had found the missing link.
            </p>

            <p>
              She decided to join the live MRP AI Engineering Cohort.
            </p>

            <h2>Think About Problems, Not Solutions</h2>

            <p>
              When Joan entered the cohort, she was immediately introduced to a completely new way of thinking about software. Instead of jumping straight into code, the cohort was taught to start from real world pain points.
            </p>

            <blockquote className="story-quote">
              <p>
                "Hari used to tell us: think about problems, do not think about solutions."
              </p>
            </blockquote>

            <p>
              That mindset shift changed everything. Paired with a team of other builders, Joan brainstormed everyday problems and noticed that food expiration tracking apps still forced users to do too much manually.
            </p>

            <p>
              To solve this, they built <strong>Expiry Genie</strong>, an AI powered app designed to automatically scan and monitor food expiration dates.
            </p>

            <h2>The Trenches: Battling AWS and Broken Code</h2>

            <p>
              Building an AI product from scratch is never smooth, and Joan is the first to admit the engineering phase was intense.
            </p>

            <p>
              While learning new environments like Replit and Lovable, she ran straight into one of the hardest parts of modern engineering: cloud deployment.
            </p>

            <blockquote className="story-quote">
              <p>
                "AWS was completely new to me. I used to make command mistakes, hit broken lines in code, and get stuck on S3 and Boto3 setup."
              </p>
            </blockquote>

            <p>
              This is where most self taught developers usually quit. But because Joan had the MRP ecosystem behind her, she pushed through and learned how to debug step by step.
            </p>

            <p>
              "Hari would tell me how to search and investigate," she explains. "It was slow and it did not happen immediately, but I kept iterating. Now I am clear about it."
            </p>

            <h2>The Enterprise Payoff</h2>

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
              alt="Enterprise technology setup"
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />

            <p>
              By the end of the cohort, Joan had successfully deployed Expiry Genie. More importantly, she had a real AI product she could confidently put on her resume.
            </p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">In her words</span>
              <p>
                "Now we are expected to use AI tools in both development and requirements work. I use enterprise AI tools like Glean daily, and prompting has become one of my strongest skills."
              </p>
            </div>

            <p>
              Today, Joan is a Requirement Analyst at a large global tech enterprise, and the skills she built in the MRP cohort are part of her daily workflow.
            </p>

            <h2>Her Advice for the Next Generation</h2>

            <p>
              Joan's journey from a frustrated self taught learner to an AI powered enterprise professional is a strong reminder that structured, project based learning compounds quickly.
            </p>

            <p className="story-pullquote">
              "Do not stop after one attempt. Explore multiple AI tools, learn to prompt correctly, and keep building."
            </p>

            <p>
              Most importantly, do not navigate the maze alone. Connect with mentors, find the right tutorials, and ask for help.
            </p>

            <StoryBottomNavigation currentStory="joan" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
