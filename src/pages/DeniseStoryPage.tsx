import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function DeniseStoryPage() {
  useEffect(() => {
    document.title = "Denise's Story, MyRealProduct";
    return () => {
      document.title = "MyRealProduct, Build an End to End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>"I was drowning in AI tools. Here's how I finally figured it out.", Denise's Story</title>
        <meta name="description" content="Discover how Denise moved from the 'dashboard trap' to building powerful, end to end AI applications using Cursor, Python, and Streamlit." />
        <link rel="canonical" href="https://www.myrealproduct.com/story/denise" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.myrealproduct.com/story/denise" />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:title" content="&quot;I was drowning in AI tools. Here's how I finally figured it out.&quot; — Denise's Story" />
        <meta property="og:description" content="Discover how Denise moved from the 'dashboard trap' to building powerful, end to end AI applications using Cursor, Python, and Streamlit." />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="&quot;I was drowning in AI tools. Here's how I finally figured it out.&quot; — Denise's Story" />
        <meta name="twitter:description" content="Discover how Denise moved from the 'dashboard trap' to building powerful, end to end AI applications using Cursor, Python, and Streamlit." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="denise" />

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
              "I was drowning in AI tools. Here's how I finally figured it out."
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Denise"
              date="April 2026"
              highlights={[
                {
                  value: "End to end AI workflows",
                  label:
                    "Builds custom Streamlit applications that go beyond static dashboards.",
                },
                {
                  value: "Stopped chasing tools",
                  label:
                    "Now leads with the business case before picking the AI stack.",
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
              If you've tried to learn AI recently, you probably know the exact feeling Denise had a few months ago.
            </p>

            <img
              src="/articles/denise_1.jpeg"
              alt="Denise smiling in a professional headshot"
              className="max-w-lg mx-auto block rounded-2xl object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              You open your laptop, ready to learn. But instead of clarity, you're hit with a wave of chaos.
            </p>

            <blockquote className="story-quote">
              <p>
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

            <h2>The End of the Overwhelm</h2>

            <p>When Denise joined MRP, the biggest relief came from the way the information was delivered.</p>

            <p>AI engineering can easily become complicated, but Denise credits the cohort's lead mentor, Hari, for completely changing how she absorbed the material.</p>

            <p>"He made it very comprehensible and very understandable," Denise says. "He explained every single step in detail, but it was never overwhelming. He provided all the information that we needed, and there wasn't a single question he didn't know the answer to."</p>

            <img
              src="/articles/denise_2.jpeg"
              alt="Denise black and white headshot"
              className="w-full rounded-2xl shadow-2xl border border-white/10"
            />

            <p>For the first time, the fog of the AI landscape started to clear.</p>

            <h2>The "Aha!" Moment</h2>

            <p>The real breakthrough happened when the cohort moved past basic theory and started building real workflows using tools like Cursor, Python, and Streamlit.</p>

            <p>But the biggest lesson wasn't just about learning the code. It was about learning the process.</p>

            <blockquote className="story-quote">
              <p>
                "My biggest 'aha' moment was understanding how important it is to build from end to end," she explains.
              </p>
            </blockquote>

            <p>"It wasn't just about using a tool itself. It's about understanding the business case and the problem first, and then finding the right tool to actually solve that business problem."</p>

            <p>It sounds simple, but in the AI world, it's a game changer. Denise learned how to stop chasing every new AI tool, and instead focus on building custom solutions around what a business actually needs.</p>

            <h2>Leaving the "Dashboard Trap" Behind</h2>

            <p>Today, Denise approaches her major projects completely differently.</p>

            <p>She notes that before the MRP cohort, she fell into a common routine that many data professionals experience.</p>

            <p>"Before Hari, I was just building dashboards just to say, 'Look, here is what I can do,'" Denise laughs.</p>

            <p>But now, she has evolved her skillset to focus on high level impact. She is utilizing Python and Streamlit to build interactive applications that executives and decision makers can actually interact with.</p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">In her words</span>
              <p>
                "What sets me apart from other people now, and Hari really taught me this, is that I am able to actually understand what a company needs," she says proudly. "I can understand their initiatives, do the research, and then build the project around that."
              </p>
            </div>

            <h2>Her Advice to You</h2>

            <img
              src="/articles/denise_3.jpeg"
              alt="Denise sitting in a cafe"
              className="story-image-small story-image-crop mx-auto block rounded-2xl object-[center_60%] border border-white/10 shadow-xl"
            />

            <p>If you are sitting exactly where Denise was a few months ago, feeling overwhelmed, frustrated, and unsure of where to start with AI, she has one piece of clear advice for you.</p>

            <p className="story-pullquote">
              "Get hands on. You have to understand what you are building end to end."
            </p>

            <p>
              "Give yourself a few months to get your hands dirty, and just start using the tools to complete a project."
            </p>

            <p>Denise's story is the perfect reminder that you don't need to be overwhelmed by the noise of the internet. You just need the right environment, a mentor who can make the complex simple, and the willingness to finally start building.</p>

            <StoryBottomNavigation currentStory="denise" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
