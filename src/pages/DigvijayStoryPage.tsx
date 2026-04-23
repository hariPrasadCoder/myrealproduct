import { motion } from "motion/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DigvijayStoryPage() {
  useEffect(() => {
    document.title = "Digvijay's Story - MyRealProduct";
    return () => {
      document.title = "MyRealProduct - Build an End-to-End AI Product in 4 Weeks";
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Helmet>
        <title>Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment - Digvijay's Story</title>
        <meta name="description" content="Read how Digvijay went from getting stuck on localhost to confidently deploying an end-to-end AI product to the cloud." />
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
              Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment
            </h1>
            <div className="text-white/60 font-mono text-sm uppercase tracking-widest">
              (Digvijay's Story)
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
              There is a quiet secret in the tech industry: you can be brilliant at machine learning, but still have no idea how to actually launch a product.
            </p>

            <img 
              src="/articles/digvijay_1.jpeg" 
              alt="Digvijay smiling outdoors" 
              className="max-w-lg mx-auto block rounded-2xl my-12 object-cover border border-white/10 bg-white/5 p-2"
            />

            <p>
              Digvijay knows this firsthand. With a Master's degree in AI and experience working as a Senior Machine Learning Engineer, he already knew how to build models. But when an unexpected layoff forced him to re-evaluate his skill set, he realized he had a glaring blind spot.
            </p>

            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "I had tried building projects, but they never made it to the end," Digvijay admits. "I could never fully socialize them. Whether it was an issue with setting up the website or handling payments, I always struggled with the deployment part."
              </p>
            </blockquote>

            <p>
              His projects were getting stuck on his local laptop. He needed to learn how to build an end-to-end, live product. That specific bottleneck is what led him to the MyRealProduct (MRP) AI Engineering Cohort.
            </p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Illusion of the "Fancy" Problem</h2>
            
            <p>When Digvijay entered the cohort, he was initially paralyzed by the pressure to build something incredibly complex. As an engineer, the default mindset is often to search for the most technically difficult problem to solve.</p>
            
            <p>But MRP lead mentor Hari quickly dismantled that approach.</p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-10">
              <p className="text-xl text-brand-primary font-medium m-0">
                "Hari told us that you don't have to have a very fancy problem to create a great solution," Digvijay recalls. "He gave the example of Uber - it's a simple problem: people need a ride, so let's fix that. That advice shifted how I thought about my own project. I started looking at problems that actually make a social impact, specifically in the healthcare domain, rather than just chasing complexity."
              </p>
            </div>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">Pushing Through the Wall</h2>
            
            <p>Even with a clear idea, building an end-to-end AI product is a grind. During the first week of the cohort, Digvijay hit a wall of burnout and laziness.</p>
            
            <p>It was Hari's direct, no-nonsense mentorship that pulled him back in.</p>
            
            <p>"Hari kept motivating me. He just said, <em>'Just spend two hours a day. Just think about it for two hours,'</em>" Digvijay says. "And taking it just two hours at a time is what basically led me to work properly on the idea."</p>
            
            <p>Once he was back in the trenches, the real technical upskilling began. Digvijay was already familiar with Python, but MRP pushed him into uncharted territory. He was forced to learn how to build robust code with limited resources, utilizing tools like Streamlit and Replit.</p>
            
            <p>But his biggest victory was finally conquering his ultimate nemesis: deployment.</p>
            
            <blockquote className="border-l-2 border-brand-primary pl-6 my-8 py-2">
              <p className="text-2xl text-white font-medium italic my-0">
                "The deployment part - setting up a reverse proxy with Nginx, purchasing a domain, and making it robust - was what I was really struggling with," he explains. "But with Hari's framework, I finally understood how to deploy things in a custom way without paying for heavily expensive, high-tier hosting."
              </p>
            </blockquote>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">From the Cohort to the Real World</h2>
            
            <p>The true measure of any tech cohort is whether the skills survive outside the classroom. For Digvijay, the return on investment was immediate.</p>
            
            <p>Recently, he was working on a highly complex research project involving medical image processing. The team needed a way to securely spin up a website to handle the data outside of a local environment.</p>
            
            <p>"That is exactly when I remembered how I used the reverse proxy and Nginx in MRP," Digvijay says. "I was able to set up the website, purchase the domain, and deploy it. The MRP experience helped me immensely. But more than the technical part, it taught me a problem-solving mindset - just not giving up when things aren't working."</p>

            <h2 className="text-3xl font-display font-medium text-white mt-16 mb-6">The Reality of the Modern Tech Landscape</h2>
            
            <p>Today, a lot of traditional software engineers are hesitant to learn generative AI, preferring to wait and see what happens. As a Senior ML Engineer, Digvijay views that hesitation as a career trap.</p>
            
            <p>"In the tech space, you have to keep upskilling. You cannot sit back, or you will become outdated," he warns. "Three or four years ago, everyone was focused on classical ML. Then ChatGPT came out, and everything changed. Every two or three years, something new will come up."</p>

            <p>His advice to anyone navigating the modern AI landscape is simple: stay humble, and focus on the problem first.</p>

            <p className="text-2xl text-white font-serif italic py-6">
              "Never assume that you have learned everything. Keep an open mind," Digvijay advises. "Focus on the problem. The tools will change, but if you know how to solve the problem, you can always learn the necessary tools to achieve it."
            </p>

          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}