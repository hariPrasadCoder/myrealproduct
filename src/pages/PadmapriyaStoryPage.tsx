import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PadmapriyaStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30">
      <Helmet>
        <title>Bridging the Gap: Padmapriya's Story — MyRealProduct</title>
        <meta name="description" content="Discover how Padmapriya bridged the gap between traditional education and building AI agents." />
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
                Padmapriya's Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-8">
                How MyRealProduct Helped Padmapriya Bridge the Gap Between Traditional Education and Building AI Agents
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
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80" 
              alt="Abstract Code Data" 
              className="max-w-lg mx-auto block bg-white/5 p-2 rounded-2xl mb-12 object-cover object-center aspect-video"
            />

            <p>
              For many professionals, getting a Master's degree feels like the final step to being career-ready. But when Padmapriya was completing her Master's, she hit an unexpected wall.
            </p>

            <p>
              "I realized that a lot of base concepts - like the basics for coding, SQL, or anything related to AI - were not covered," Padmapriya recalls. "The things I found were all very, very advanced concepts. It was too much for me to understand."
            </p>

            <p>
              Like so many others, she tried the self-learning route. She spent her summer trying to teach herself SQL and AI fundamentals. But balancing her time while searching for the right materials felt like a full-time job in itself.
            </p>

            <p>
              She realized she didn't need another theoretical seminar or a recorded university lecture. She needed to get her hands dirty with practical, modern tools. That realization led her directly to the MyRealProduct (MRP) AI cohort.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">"Learning By Doing" and the Power of the Network</h3>

            <p>
              Padmapriya joined MRP for two very specific reasons: she wanted practical, hands-on experience, and she wanted to be surrounded by driven people.
            </p>

            <p>
              "The only reason I signed up was because it was not very theoretical," she explains. "I had signed up for MOOCs or workshops where they just run code in front of you. But MRP is something that you learn by <em>doing</em>. You have mentors, and it's a small, limited set of people."
            </p>

            <p>
              Almost immediately, the value of the MRP network became clear. She was paired with a team of three other professionals to build an AI application from scratch. Together, they ideated a project designed to help beginners find the exact AI educational resources they needed - a problem Padmapriya knew all too well.
            </p>

            <p>
              Working in that group dynamic changed everything. "They were in the same boat that I was, upskilling in order to find jobs," she says. "Some were already working in the industry. Interacting with them helped me understand what kind of alternative tools they were using in their actual roles. I had never even come across the names of some of these tools before this course."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Mentorship That Extends Beyond the Code</h3>

            <p>
              The MRP environment is notoriously fast-paced, designed to mirror the reality of the tech industry. For Padmapriya, lead mentor Hari's teaching style was a wake-up call to how real engineering works.
            </p>

            <p>
              She remembers a specific week when Hari demonstrated how to quickly build an AI application. "It was very quick to digest, and a lot of teams were hesitating to get started," she laughs. "We knew it was possible, but we had to go back to the recordings and figure it out."
            </p>

            <p>
              But Hari's mentorship didn't stop at the code. As Padmapriya progressed through the cohort, real life intervened: her practical upskilling was working, and she started getting calls for job interviews.
            </p>

            <p>
              "What really helped me was getting in contact with Hari," Padmapriya emphasizes. "That was literally super helpful for me preparing for interviews. I was still a student, and he helped me navigate getting into a role and negotiating an offer. Every step of the process, Hari's contact really helped me."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The Outcome: Building Real-World AI</h3>

            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80" 
              alt="Modern Tech Infrastructure" 
              className="max-w-md mx-auto block bg-white/5 p-2 rounded-2xl my-12 object-cover aspect-[4/3]"
            />

            <p>
              Today, Padmapriya is no longer struggling to understand advanced, theoretical AI concepts. She is actively deploying them in the real world as a Supply Chain Transformation Specialist.
            </p>

            <p>
              In her current role, she builds AI agents and applications specifically tailored to supply chain teams.
            </p>

            <p>
              Looking back, she credits the MyRealProduct cohort with pulling back the curtain on what was actually possible in the industry. "Prior to MRP, my focus was on traditional machine learning," she says. "I had no clue about the real potential of modern AI. Getting that exposure really helped me understand what AI is capable of."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Her Advice to the Next Cohort</h3>

            <p>
              When asked what advice she has for professionals looking to transition into AI, Padmapriya points right back to the MRP community.
            </p>

            <p>
              "I think the network itself is the most invaluable asset," she says. "You get a network of people who are learning and sharing their knowledge, and you have access to mentors during the workshops. If you want to learn by doing, definitely sign up."
            </p>

            <p>
              Padmapriya's journey proves that breaking into AI isn't just about having a perfect academic background. It's about putting yourself in the right ecosystem, with the right mentors, and learning how to build solutions that actually matter.
            </p>

          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}