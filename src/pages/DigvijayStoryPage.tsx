import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoryBottomNavigation, StoryTopNavigation } from "../components/story/StoryPageNavigation";
import { StoryMetaHighlights } from "../components/story/StoryMetaHighlights";

export default function DigvijayStoryPage() {
  useEffect(() => {
    document.title = "Digvijay's Story, MyRealProduct";
    return () => {
      document.title = "MyRealProduct, Build an End to End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment, Digvijay's Story</title>
        <meta name="description" content="Read how Digvijay went from getting stuck on localhost to confidently deploying an end to end AI product to the cloud." />
        <link rel="canonical" href="https://www.myrealproduct.com/story/digvijay" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.myrealproduct.com/story/digvijay" />
        <meta property="og:site_name" content="MyRealProduct" />
        <meta property="og:title" content="Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment — Digvijay's Story" />
        <meta property="og:description" content="Read how Digvijay went from getting stuck on localhost to confidently deploying an end to end AI product to the cloud." />
        <meta property="og:image" content="https://www.myrealproduct.com/og-preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@myrealproduct" />
        <meta name="twitter:title" content="Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment — Digvijay's Story" />
        <meta name="twitter:description" content="Read how Digvijay went from getting stuck on localhost to confidently deploying an end to end AI product to the cloud." />
        <meta name="twitter:image" content="https://www.myrealproduct.com/og-preview.png" />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <StoryTopNavigation currentStory="digvijay" />

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
              Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <StoryMetaHighlights
              storyteller="Digvijay"
              date="March 2026"
              highlights={[
                {
                  value: "First end to end product live",
                  label:
                    "Took a healthcare AI build from a local laptop to a public domain.",
                },
                {
                  value: "Reverse proxy + Nginx mastered",
                  label:
                    "Replaced expensive premium hosting with a custom deployment stack.",
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
              There is a quiet secret in the tech industry: you can be brilliant at machine learning, but still have no idea how to actually launch a product.
            </p>

            <img
              src="/articles/digvijay_1.jpeg"
              alt="Digvijay smiling outdoors"
              className="story-image-small mx-auto block rounded-2xl object-contain border border-white/10 bg-white/5 p-1"
            />

            <p>
              Digvijay knows this firsthand. With a Master's degree in AI and experience working as a Senior Machine Learning Engineer, he already knew how to build models. But when an unexpected layoff forced him to reassess his skill set, he realized he had a glaring blind spot.
            </p>

            <blockquote className="story-quote">
              <p>
                "I had tried building projects, but they never made it to the end. I could never fully socialize them. Whether it was an issue with setting up the website or handling payments, I always struggled with the deployment part."
              </p>
            </blockquote>

            <p>
              His projects were getting stuck on his local laptop. He needed to learn how to build an end to end, live product. That specific bottleneck is what led him to the MyRealProduct (MRP) AI Engineering Cohort.
            </p>

            <h2>The Illusion of the "Fancy" Problem</h2>

            <p>When Digvijay entered the cohort, he was initially paralyzed by the pressure to build something incredibly complex. As an engineer, the default mindset is often to search for the most technically difficult problem to solve.</p>

            <p>But MRP lead mentor Hari quickly dismantled that approach.</p>

            <div className="story-callout">
              <span className="story-callout-eyebrow">Lesson learned</span>
              <p>
                "Hari told us that you don't have to have a very fancy problem to create a great solution. He gave the example of Uber, it's a simple problem: people need a ride, so let's fix that. That advice shifted how I thought about my own project. I started looking at problems that actually make a social impact, specifically in the healthcare domain, rather than just chasing complexity."
              </p>
            </div>

            <h2>Pushing Through the Wall</h2>

            <p>Even with a clear idea, building an end to end AI product is a grind. During the first week of the cohort, Digvijay hit a wall of burnout and laziness.</p>

            <p>It was Hari's direct, no nonsense mentorship that pulled him back in.</p>

            <p>"Hari kept motivating me. He just said, <em>'Just spend two hours a day. Just think about it for two hours,'</em>" Digvijay says. "And taking it just two hours at a time is what basically led me to work properly on the idea."</p>

            <p>Once he was back in the trenches, the real technical upskilling began. Digvijay was already familiar with Python, but MRP pushed him into uncharted territory. He was forced to learn how to build robust code with limited resources, utilizing tools like Streamlit and Replit.</p>

            <p>But his biggest victory was finally conquering his ultimate nemesis: deployment.</p>

            <blockquote className="story-quote">
              <p>
                "The deployment part, setting up a reverse proxy with Nginx, purchasing a domain, and making it robust, was what I was really struggling with. But with Hari's framework, I finally understood how to deploy things in a custom way without paying for heavily expensive, premium hosting."
              </p>
            </blockquote>

            <h2>From the Cohort to the Real World</h2>

            <p>The true measure of any tech cohort is whether the skills survive outside the classroom. For Digvijay, the return on investment was immediate.</p>

            <p>Recently, he was working on a highly complex research project involving medical image processing. The team needed a way to securely spin up a website to handle the data outside of a local environment.</p>

            <p>"That is exactly when I remembered how I used the reverse proxy and Nginx in MRP," Digvijay says. "I was able to set up the website, purchase the domain, and deploy it. The MRP experience helped me immensely. But more than the technical part, it taught me a problem solving mindset, just not giving up when things aren't working."</p>

            <h2>The Reality of the Modern Tech Landscape</h2>

            <p>Today, a lot of traditional software engineers are hesitant to learn generative AI, preferring to wait and see what happens. As a Senior ML Engineer, Digvijay views that hesitation as a career trap.</p>

            <p>"In the tech space, you have to keep upskilling. You cannot sit back, or you will become outdated," he warns. "Three or four years ago, everyone was focused on classical ML. Then ChatGPT came out, and everything changed. Every two or three years, something new will come up."</p>

            <p>His advice to anyone navigating the modern AI landscape is simple: stay humble, and focus on the problem first.</p>

            <p className="story-pullquote">
              "Never assume that you have learned everything. Keep an open mind. Focus on the problem."
            </p>

            <p>
              "The tools will change, but if you know how to solve the problem, you can always learn the necessary tools to achieve it."
            </p>

            <StoryBottomNavigation currentStory="digvijay" />
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
