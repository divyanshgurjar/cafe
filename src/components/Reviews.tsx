import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { REVIEWS } from '@/src/constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="py-32 px-6 bg-chocolate overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            What Our <span className="italic gold-gradient">Guests Say</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 text-gold/10">
            <Quote className="w-40 h-40" />
          </div>

          <div className="relative z-10 min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full glass-dark p-12 md:p-20 rounded-[40px] border-white/5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < REVIEWS[currentIndex].rating
                            ? 'text-gold fill-gold'
                            : 'text-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-12 text-cream/90">
                    "{REVIEWS[currentIndex].comment}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={REVIEWS[currentIndex].avatar}
                      alt={REVIEWS[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-gold p-1"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{REVIEWS[currentIndex].name}</h4>
                      <p className="text-gold text-xs uppercase tracking-widest">Verified Guest</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
