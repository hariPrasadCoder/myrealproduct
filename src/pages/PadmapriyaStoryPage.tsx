import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function PadmapriyaStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Bridging the Gap: Padmapriya's Story, MyRealProduct</title>
        <meta name="description" content="Discover how Padmapriya bridged the gap between traditional education and building AI agents." />
        <link rel="canonical" href="https://www.myrealproduct.com/story/padmapriya" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.myrealproduct.com/story/padmapriya" />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:title" content="Bridging the Gap — Padmapriya's Story" />
        <meta property="og:description" content="Discover how Padmapriya bridged the gap between traditional education and building AI agents." />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="Bridging the Gap — Padmapriya's Story" />
        <meta name="twitter:description" content="Discover how Padmapriya bridged the gap between traditional education and building AI agents." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="padmapriya" />

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
              How MyRealProduct Helped Padmapriya Bridge the Gap Between Traditional Education and Building AI Agents
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Padmapriya"
              date="March 2026"
              highlights={[
                {
                  value: "AI agents in supply chain",
                  label:
                    "Translates ideas into practical workflows as a Supply Chain Transformation Specialist.",
                },
                {
                  value: "Practical execution over theory",
                  label:
                    "Skipped massive online courses and learned by shipping with a small team.",
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
              For many professionals, getting a Master's degree feels like the final step to being career ready. But when Padmapriya was finishing her Master's, she hit an unexpected wall.
            </p>

            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
              alt="Abstract coding and data visual"
              className="max-w-lg mx-auto block rounded-2xl object-cover border border-white/10 bg-white/5 p-2"
            />

            <blockquote className="story-quote">
              <p>
                "A lot of base concepts like coding basics, SQL, and AI foundations were not covered. Everything I found felt too advanced."
              </p>
            </blockquote>

            <p>
              Like many others, she tried self learning. She spent her summer teaching herself SQL and AI fundamentals, but balancing time while finding the right resources felt like a full time job.
            </p>

            <p>
              She realized she did not need another theoretical seminar. She needed practical execution with modern tools. That led her directly to the MyRealProduct (MRP) AI cohort.
            </p>

            <h2>Learning by Doing and the Power of the Network</h2>

            <p>
              Padmapriya joined MRP for two specific reasons: practical hands on experience and a high intent peer group.
            </p>

            <blockquote className="story-quote">
              <p>
                "MRP was different because you learn by doing. You have mentors, and the cohort is small enough to get real support."
              </p>
            </blockquote>

            <p>
              She was paired with a team of professionals to build an AI application from scratch. Together, they designed a project to help beginners find the right AI learning resources, a problem she understood deeply.
            </p>

            <p>
              That group dynamic changed everything. She learned from people who were also upskilling, as well as peers already working in industry, and discovered tools she had never even heard of before.
            </p>

            <h2>Mentorship That Extended Beyond Code</h2>

            <p>
              The MRP environment is fast paced by design, mirroring the speed of real engineering teams. For Padmapriya, Hari's teaching style made the process feel practical and digestible.
            </p>

            <p>
              She remembers a specific week where teams had to move quickly from concept to working application. It was intense, but it built confidence.
            </p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">Mentorship</span>
              <p>
                "What helped me most was direct contact with Hari. He helped me prepare for interviews, navigate offers, and make better career decisions step by step."
              </p>
            </div>

            <p>
              Her mentorship experience did not stop at technical execution. As her skills improved, she began receiving interview calls and used that support to convert momentum into outcomes.
            </p>

            <h2>The Outcome: Building Real World AI</h2>

            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80"
              alt="Modern technology infrastructure"
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />

            <p>
              Today, Padmapriya is no longer stuck on abstract theory. She is applying AI directly in her role as a Supply Chain Transformation Specialist.
            </p>

            <p>
              She now builds AI agents and applications tailored to supply chain teams, translating ideas into practical business workflows.
            </p>

            <p>
              Looking back, she credits MRP with revealing what modern AI can actually do beyond traditional machine learning coursework.
            </p>

            <h2>Her Advice to the Next Cohort</h2>

            <p>
              When asked what she recommends to professionals transitioning into AI, she points straight to the community effect.
            </p>

            <p className="story-pullquote">
              "The network is the most invaluable asset. If you want to learn by doing, get into an ecosystem where people are building and sharing every week."
            </p>

            <p>
              Padmapriya's journey shows that breaking into AI is not about a perfect background. It is about entering the right environment with the right mentors and building meaningful solutions.
            </p>

            <StoryBottomNavigation currentStory="padmapriya" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
