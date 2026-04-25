import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function SaahithiStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Escaping the AI News Cycle: Saahithi's Story, MyRealProduct</title>
        <meta name="description" content="How a Data Science Grad Stopped Reading and Started Building." />
        <link rel="canonical" href="https://www.myrealproduct.com/story/saahithi" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.myrealproduct.com/story/saahithi" />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:title" content="Escaping the AI News Cycle — Saahithi's Story" />
        <meta property="og:description" content="How a Data Science Grad Stopped Reading and Started Building." />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="Escaping the AI News Cycle — Saahithi's Story" />
        <meta name="twitter:description" content="How a Data Science Grad Stopped Reading and Started Building." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="saahithi" />

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
              Escaping the "AI News Cycle": How a Data Science Grad Stopped Reading and Started Building
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Saahithi"
              date="March 2026"
              highlights={[
                {
                  value: "AI Learning Mentor shipped",
                  label:
                    "Built a guided chatbot that recommends learning paths for self learners.",
                },
                {
                  value: "Cloud deployed end to end",
                  label:
                    "Took it to AWS EC2 with a custom domain and a Gemini powered backend.",
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
              If you are trying to break into tech right now, your routine probably starts the same way every day: open your phone and discover a new AI release.
            </p>

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
              alt="AI technology abstract"
              className="max-w-lg mx-auto block rounded-2xl object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              For Saahithi, who had just graduated with a Master's degree in Data Science, that constant flood of information became overwhelming.
            </p>

            <blockquote className="story-quote">
              <p>
                "AI was blooming every day with new models and concepts. I kept trying to catch up, but I was not actually building."
              </p>
            </blockquote>

            <p>
              She was stuck in the AI news cycle: reading everything, shipping nothing.
            </p>

            <p>
              That changed when she started following MyRealProduct (MRP) lead mentor Hari and saw a clear principle repeated again and again: if you want to learn AI, learn it by doing.
            </p>

            <p>
              With that mindset, she joined the live MRP AI Engineering Cohort.
            </p>

            <h2>The Brainstorm: Problems Over Solutions</h2>

            <p>
              Saahithi expected to start coding immediately. Instead, the cohort started with problem discovery.
            </p>

            <blockquote className="story-quote">
              <p>
                "In the first orientation call, we were told to stop thinking about solutions and start thinking about problems."
              </p>
            </blockquote>

            <p>
              She collaborated with peers from education, finance, and other fields. The cross industry perspective helped her team identify a shared pain point: self learning without guidance.
            </p>

            <p>
              They built <strong>AI Learning Mentor</strong>, a chatbot driven application that guides users step by step through learning paths and project execution.
            </p>

            <h2>The Trenches: Bugs, APIs, and Community</h2>

            <p>
              In Weeks 2 and 3, the team moved into implementation and integrated the Gemini API. That is when they hit serious performance and quality issues.
            </p>

            <blockquote className="story-quote">
              <p>
                "We wanted the bot to suggest roadmaps based on skill level, but responses were repetitive and the system became slow."
              </p>
            </blockquote>

            <p>
              In many online courses, that is where momentum dies. Inside MRP, it became a turning point.
            </p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">Community in action</span>
              <p>
                Hari connected the team with an MRP alum who had deep API experience. Together, they debugged the system and dramatically improved response speed.
              </p>
            </div>

            <h2>Beyond Localhost: The Final Push</h2>

            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
              alt="Cloud deployment infrastructure"
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />

            <p>
              Once the application stabilized, the final hurdle was deployment.
            </p>

            <p>
              For many data science graduates, local experimentation is comfortable but cloud deployment is unfamiliar. She learned to deploy to AWS, connect EC2 with a custom domain, and make the product publicly accessible.
            </p>

            <p>
              She crossed the finish line with a real, working application.
            </p>

            <h2>The New Normal</h2>

            <p>
              Today, Saahithi is no longer a passive observer of AI announcements. She applies the workflows, engineering habits, and deployment skills from MRP directly in her career and projects.
            </p>

            <p className="story-pullquote">
              "You cannot learn everything at once. Pick something, start building, and let momentum do the rest."
            </p>

            <p>
              Her story is a clear reminder that the fastest way out of overwhelm is not more news, it is more building.
            </p>

            <StoryBottomNavigation currentStory="saahithi" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
