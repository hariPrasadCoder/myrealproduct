import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function RajeshStoryPage() {
  useEffect(() => {
    document.title = "Rajesh's Story, MyRealProduct";
    return () => {
      document.title = "MyRealProduct, Build an End to End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Why a 15 Year Citibank Veteran Joined the AI Cohort to Learn Product Building, Rajesh's Story</title>
        <meta name="description" content="Discover how a 15-year backend veteran learned product building and AI deployment inside the MyRealProduct cohort." />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="rajesh" />

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
              Why a 15 Year Citibank Veteran Joined the AI Cohort to Learn Product Building
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Rajesh"
              date="April 2026"
              highlights={[
                {
                  value: "10 to 15 targeted job apps a day",
                  label:
                    "Built an AI Career Builder that customizes his resume for every role.",
                },
                {
                  value: "Operational cost driven to $0",
                  label:
                    "Pivoted from a paid Gemini API to local open source models on Ollama.",
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
              For a software engineer, there is a dangerous comfort zone: the backend. If you know how to write code, manage databases, and deploy servers, it's easy to believe you have everything you need to succeed in tech.
            </p>

            <img
              src="/articles/rajesh_1.jpeg"
              alt="Rajesh leaning against a piece of driftwood near a lake"
              className="story-image-small mx-auto block rounded-2xl object-contain border border-white/10 bg-white/5 p-1"
            />

            <p>
              Rajesh was comfortably sitting in this zone. With 15 years of technical experience including the last five years working as a developer at Citibank, he knew exactly how to build software. But after experiencing a recent layoff, Rajesh looked at the exploding AI landscape and realized he had a massive blind spot.
            </p>

            <blockquote className="story-quote">
              <p>
                "I am a highly technical person; I was a developer my whole life. But I didn't know anything about how a product is evolved. From the concept, to start, to finish, I only knew the technical part. I never worried about how the rest of it functioned."
              </p>
            </blockquote>

            <p>
              He recognized a fundamental shift in the industry: AI was leveling the playing field.
            </p>

            <p>
              "With AI, anybody with an idea can be an entrepreneur with less money and fewer resources," he says. But having an idea and validating a business are two different things. To learn the complete lifecycle of a product, how to select an idea, validate it, and scope an MVP, Rajesh joined the MyRealProduct (MRP) AI Engineering Cohort.
            </p>

            <h2>The Magic of Ideation</h2>

            <p>In tech bootcamps, most developers try to rush through the brainstorming phase so they can get their hands on the code. For Rajesh, the first week of MRP was the most valuable part of the entire program.</p>

            <p>Teamed up with highly experienced peers, the group ruthlessly brainstormed and filtered ideas. Rajesh brought concepts for tax preparation and resume builders to the table, but the team ultimately rallied around a massive, scalable concept: an AI driven networking platform.</p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">The big idea</span>
              <p>
                "We thought about how you use your contacts. Say you need a referral for a job, or you know someone who needs to buy a house. If you can bring your LinkedIn, Facebook, or Instagram contacts into a single platform, the AI can rank them and tell you exactly who is the best match for a specific opportunity, and even manage bounty percentages for successful referrals."
              </p>
            </div>

            <p>Because Rajesh already had 15 years of deployment experience, he was able to anchor the team technically, freeing him up to absorb the product strategy and market validation lessons that he had been missing his entire career.</p>

            <h2>Building Fast and Managing Costs</h2>

            <p>When it came time to actually build the application in Weeks 2 and 3, Rajesh utilized modern workflows, leaning heavily on Cursor, Python, and Claude.</p>

            <p>"If you want to build something like this within one week, you need AI coding, so I used Claude," he advises.</p>

            <p>But building real AI products comes with real world constraints, namely, API costs. Initially, Rajesh used the Gemini API to power the networking app's logic. But as the app started scanning batches of 500 connections at a time, the costs started draining his wallet faster than anticipated.</p>

            <p>Using his problem solving skills, he pivoted the architecture to utilize local open source models via Ollama, successfully keeping the product functional while driving the operational costs down to zero.</p>

            <h2>The Real World ROI: The AI Career Builder</h2>

            <p>The true test of any upskilling program is how it impacts your actual life. For Rajesh, the AI skills he sharpened at MRP solved his most immediate, pressing problem: his job search after the layoff.</p>

            <p>He realized that sending a generic resume to every company wasn't working, but manually customizing his resume for every single application was taking 30 to 40 minutes per job.</p>

            <p>So, he built his own AI solution.</p>

            <blockquote className="story-quote">
              <p>
                "I feed it the specific job opportunity, and I give it my master resume. The AI goes through the job description, figures out if they are prioritizing Java or Kubernetes, and dynamically customizes my resume and cover letter to perfectly match the role, keeping all the formatting intact."
              </p>
            </blockquote>

            <p>The results were immediate. By cutting the application time down to zero, Rajesh was able to apply to 10 to 15 highly targeted jobs a day. "I got a lot of AI leads, and people actually started calling me back," he says. The tool was so successful that he is now preparing to launch it as a standalone SaaS product.</p>

            <h2>"I Used AI to Teach Me AI"</h2>

            <p>Today, Rajesh isn't just looking for his next corporate role. He is actively building products, contributing to an open source "Virtual Junior Dev" community, and continuing to expand the networking app with his MRP cohort team.</p>

            <p>When asked what advice he has for people who are stuck in the phase of just reading AI newsletters and documentation, Rajesh is uncompromising.</p>

            <p className="story-pullquote">
              "I used AI to teach me AI. There is no point in just blindly reading documents."
            </p>

            <p>
              "You will feel like you understood everything, but in two days you will forget it. Jump in, start typing, and build something. You will get stuck. You will get network errors. And when you get stuck, that is when you research, and that is how the true learning process works."
            </p>

            <StoryBottomNavigation currentStory="rajesh" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
