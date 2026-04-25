import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function PraveenaStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Escaping the Tutorial Trap: Praveena's Story, MyRealProduct</title>
        <meta name="description" content="Discover how a busy Data Analyst broke her mental blocks to build AI." />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="praveena" />

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
              Escaping the "Tutorial Trap": How a Busy Data Analyst Broke Her Mental Blocks to Build AI
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Praveena"
              date="April 2026"
              highlights={[
                {
                  value: "Stepped into the TPM seat",
                  label:
                    "Led product decisions on a grocery recommendation app for dietary needs.",
                },
                {
                  value: "Mindset broke open",
                  label:
                    "Realized she could build software, not just analyze data.",
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
              If you look at LinkedIn today, the narrative around learning AI can feel exhausting.
            </p>

            <img
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80"
              alt="Data infrastructure abstract"
              className="max-w-lg mx-auto block rounded-2xl object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              Every day, people tell you to read endless books, watch long lectures, and master all the theory before building anything.
            </p>

            <blockquote className="story-quote">
              <p>
                "It puts you in an endless tutorial loop. You keep learning, but you still do not feel ready to build."
              </p>
            </blockquote>

            <p>
              For Praveena, a Data Analyst based in New York, this advice was paralyzing. As a working mom with a long commute and a full workday, she did not have spare hours for endless tutorials.
            </p>

            <p>
              She knew she needed to adapt to the changing landscape, but she needed a path that fit a real professional schedule. That search brought her to the MyRealProduct (MRP) AI Engineering Cohort.
            </p>

            <h2>Shattering the "I'm Not a Developer" Myth</h2>

            <p>
              Before joining MRP, Praveena carried a mental block shared by many professionals: she believed she was "just" a data person and not someone who could build products.
            </p>

            <blockquote className="story-quote">
              <p>
                "In my mind, I was always just this data analyst. I did not think I could actually build software."
              </p>
            </blockquote>

            <p>
              She asked Hari directly whether her lack of deep software engineering background would hold her back. His answer changed her trajectory.
            </p>

            <p>
              She learned that modern AI execution is less about memorizing syntax and more about willingness to experiment, debug, and iterate with the right tools.
            </p>

            <h2>Acting as the TPM: Learning to Build</h2>

            <p>
              Inside the cohort, the focus shifted immediately from theory to execution.
            </p>

            <p>
              Working with her team, Praveena naturally stepped into a Technical Product Manager role. Together, they built a grocery recommendation application that scanned ingredients and flagged dietary restrictions.
            </p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">Mindset shift</span>
              <p>
                "My biggest learning was mindset. I realized I do not have to restrict myself. With AI tools today, I can get creative and actually build things."
              </p>
            </div>

            <p>
              It was not a perfectly smooth journey, but collaborating, defining requirements, and shipping a real product gave her a major shift in confidence.
            </p>

            <h2>Praveena's Warning: Navigating the Hype</h2>

            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80"
              alt="Code and data output"
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />

            <p>
              As someone who upskilled while managing a demanding schedule, Praveena has a clear warning: be careful of overpriced promises that target vulnerable job seekers.
            </p>

            <p>
              Nobody can know everything in AI right now. Instead of trying to learn all of it at once, start small and build consistently.
            </p>

            <p className="story-pullquote">
              "Try to build something. Make mistakes. Learning from building is always better than doing endless tutorials."
            </p>

            <h2>The Journey Continues</h2>

            <p>
              Praveena is the first to say her AI journey is still in progress. She did not quit everything overnight, and that is exactly what makes her story credible.
            </p>

            <p>
              She is a real professional balancing a real life, and she refused to be left behind. She broke her mental blocks, learned to build, and changed the way she sees her capabilities.
            </p>

            <StoryBottomNavigation currentStory="praveena" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
