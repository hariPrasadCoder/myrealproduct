import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Philanthropy() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-brand-card to-brand-terminal rounded-3xl border border-white/5 p-8 md:p-12 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side (Image) */}
            <div className="aspect-square md:aspect-[4/3] bg-black/20 rounded-2xl border border-white/10 relative overflow-hidden group">
              <img
                src="/images/pict_large-modified.webp"
                alt="Children holding Thank You slate"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <Heart className="absolute top-4 right-4 text-brand-primary w-6 h-6 animate-pulse z-10" />
            </div>

            {/* Right Side (Copy) */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Give Back While You Grow
              </h2>
              
              <div className="space-y-6 text-brand-text text-lg leading-relaxed">
                <p>
                  Every time you join MyRealProduct, you're not just learning AI. You're changing a life.
                </p>
                <p className="font-medium text-white">
                  While you learn AI in 4 weeks, a child in India gets to go to school for 1 whole year.
                </p>
                <p>
                  Through GlobalGiving – Send a Child in India to School for a Year, for every workshop registration, we donate to help fund 1 child's education for 1 whole year.
                </p>
                
                <div className="pl-4 border-l-2 border-brand-primary py-2 italic text-white/80">
                  “When you build your product, you also build a future.”
                </div>

                <a 
                  href="https://www.globalgiving.org/projects/education-in-india-1/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-accent hover:text-white transition-colors underline underline-offset-4 mt-4"
                >
                  GlobalGiving – Send a Child in India to School for a Year
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
