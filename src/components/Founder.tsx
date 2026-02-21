import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Founder() {
  return (
    <section className="py-32 bg-brand-dark relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side - Image (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] bg-brand-card relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
              {/* Headshot Image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <img
                src="/images/hari-prasad.webp"
                alt="Hari Prasad"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-3xl font-display font-bold text-white mb-1">Hari Prasad</h3>
                <p className="text-brand-primary font-mono text-xs tracking-widest uppercase">
                  Lead Instructor
                </p>
              </div>

              {/* Tech Decoration */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                <div className="w-12 h-[1px] bg-white/20" />
                <div className="w-8 h-[1px] bg-white/20" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12 pt-8"
          >
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-12 leading-[0.9]">
              From Data Scientist <br />
              <span className="text-white/30">to AI Engineer.</span>
            </h2>

            <div className="space-y-8 text-lg text-brand-text/80 font-light leading-relaxed max-w-2xl">
              <p>
                <span className="text-white font-medium">I don't teach theory.</span> I teach what works in production. 
                After working with 5+ early-stage startups and launching multiple AI-powered products, 
                I realized most courses are stuck in 2023.
              </p>
              <p>
                At MyRealProduct, I bring those same lessons to ambitious professionals who want to learn AI the right way – by building, shipping, and solving real problems.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Education</p>
                <p className="text-white font-medium">Ivy League Grad</p>
              </div>
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Speaking</p>
                <p className="text-white font-medium">TEDx Speaker</p>
              </div>
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Connect</p>
                <a href="#" className="text-white font-medium hover:text-brand-primary transition-colors inline-flex items-center gap-1">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
