import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PraveenaStoryPage() {
  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-primary/30">
      <Helmet>
        <title>Escaping the Tutorial Trap: Praveena's Story — MyRealProduct</title>
        <meta name="description" content="Discover how a busy Data Analyst broke her mental blocks to build AI." />
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
                Praveena's Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-8">
                Escaping the "Tutorial Trap": How a Busy Data Analyst Broke Her Mental Blocks to Build AI
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
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80" 
              alt="Data Infrastructure Abstract" 
              className="max-w-lg mx-auto block bg-white/5 p-2 rounded-2xl mb-12 object-cover object-center aspect-video"
            />

            <p>
              If you look at LinkedIn today, the narrative around learning AI is exhausting.
            </p>

            <p>
              Every day, "gurus" tell you to read five different books, watch a free 20-hour Stanford lecture, and master the theoretical mathematics behind neural networks before you are allowed to build anything.
            </p>

            <p>
              For Praveena, a Data Analyst based in New York, this advice wasn't just unhelpful - it was paralyzing.
            </p>

            <p>
              "It puts you in this endless tutorial loop," Praveena explains. "You spend months, or even years, watching videos, and you still won't feel comfortable. Something new will keep coming out, and you will always be in that mode of feeling like you need to learn more before you start."
            </p>

            <p>
              Praveena didn't have time for endless tutorials. As a working mom who commutes 3 to 4 hours a day on top of an 8-hour workday, her free time is practically nonexistent.
            </p>

            <p>
              "By the time I get home, I have no juice left to do anything," she admits with a laugh.
            </p>

            <p>
              But she knew she needed to adapt to the changing tech landscape. She just needed a way to do it that actually fit into the reality of a busy professional's life. That search brought her to the MyRealProduct (MRP) AI Engineering Cohort.
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Shattering the "I'm Not a Developer" Myth</h3>

            <p>
              Before joining MRP, Praveena suffered from a mental block that stops thousands of tech professionals in their tracks: she thought she was "just" a data person.
            </p>

            <p>
              "In my mind, I was always just this data analyst," she says. "I didn't have this idea that I could actually build software. I thought you had to be a full-level software developer to even try."
            </p>

            <p>
              She attended an orientation session with MRP lead mentor, Hari, and asked him directly if her lack of heavy software engineering experience would hold her back. His answer changed her entire trajectory.
            </p>

            <p>
              Hari explained that the modern AI landscape isn't about perfectly memorizing syntax - it's about having the willingness to try, fail, and learn the tools.
            </p>

            <p>
              "He made everything so simple," Praveena recalls. "Every week he would introduce us to things like GitHub, and he would explain it using simple analogies so you didn't feel intimidated. My biggest takeaway is that once you get past that mental block of <em>'I've never done this before,'</em> the possibilities are so much bigger than you think."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Acting as the TPM: Learning to Build</h3>

            <p>
              Inside the cohort, the focus shifted immediately from theory to execution.
            </p>

            <p>
              Working with a team, Praveena stepped out of her traditional analyst role and naturally adapted into a Technical Product Manager (TPM) position. Together, using tools like Replit and advanced LLMs, her team built a grocery recommendation application that automatically scanned food ingredients and flagged them for specific dietary restrictions.
            </p>

            <p>
              It wasn't a perfectly smooth journey building real software never is. But the experience of collaborating, defining requirements, and pushing an AI product across the finish line provided a massive shift in perspective.
            </p>

            <p>
              "The biggest learning for me wasn't just technical," Praveena notes. "It was the fact that doing this course opened up a new mindset. I realized I don't have to restrict myself. With AI tools today, I can get creative and actually build things."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">Praveena's Warning: Navigating the Hype</h3>

            <p>
              As someone who has successfully navigated the daunting task of upskilling while managing a demanding life schedule, Praveena has a stark warning for others looking to enter the AI space.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80" 
              alt="Data Code Output" 
              className="max-w-md mx-auto block bg-white/5 p-2 rounded-2xl my-12 object-cover aspect-[4/3]"
            />

            <p>
              "Be careful," she advises. "There are a lot of people out there selling expensive bootcamps and coaching just to profit off job seekers who are feeling vulnerable. Nobody can know everything about AI right now. Instead of trying to chase that, or trying to boil the ocean by learning everything at once, just start."
            </p>

            <p>
              Her ultimate advice for crossing the threshold from beginner to builder is refreshingly practical:
            </p>

            <p>
              "Try to build something. Make mistakes. Learning from building is always better than doing endless tutorials."
            </p>

            <h3 className="text-brand-primary uppercase tracking-widest text-sm font-mono mt-12 mb-6">The Journey Continues</h3>

            <p>
              Praveena is the first to admit that her AI journey is still a work in progress. She hasn't magically quit her job to launch a massive Silicon Valley startup, and that is exactly what makes her story so powerful.
            </p>

            <p>
              She is a real professional, balancing a real life, who refused to be left behind by the AI wave. She broke her mental blocks, learned how to build, and transformed the way she views her own capabilities.
            </p>

            <p>
              And in the modern tech landscape, that mindset is the ultimate competitive advantage.
            </p>

          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}