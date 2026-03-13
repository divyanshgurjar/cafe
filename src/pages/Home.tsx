import { motion } from 'motion/react';
import Hero from '@/src/components/Hero';
import Featured from '@/src/components/Featured';
import Stats from '@/src/components/Stats';
import Reviews from '@/src/components/Reviews';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      <Hero />
      <Featured />
      <Stats />
      
      {/* About Teaser */}
      <section className="py-32 px-6 bg-coffee/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000"
                alt="Our Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass p-8 rounded-[40px] hidden md:block">
              <p className="text-gold font-serif text-4xl font-bold mb-2">10+</p>
              <p className="text-cream/80 text-sm font-medium uppercase tracking-widest">Years of Brewing Excellence</p>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold font-bold tracking-[0.3em] uppercase text-xs block"
            >
              Our Heritage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold"
            >
              The Art of <br />
              <span className="italic gold-gradient">Perfect Brewing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-cream/60 text-lg leading-relaxed"
            >
              Founded in 2014, Sequoia Café began with a simple mission: to elevate the coffee experience. We believe that coffee is more than just a beverage; it's a ritual, a moment of peace, and a catalyst for connection.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-chocolate transition-all duration-300 rounded-full font-bold tracking-widest uppercase text-xs">
                Learn Our Story
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Reviews />
      
      {/* Newsletter */}
      <section className="py-32 px-6 bg-chocolate relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Join the <span className="italic gold-gradient">Inner Circle</span></h2>
          <p className="text-cream/60 mb-10 text-lg">Subscribe to receive exclusive offers, brewing tips, and news about our latest roasts.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gold text-chocolate font-bold px-10 py-4 rounded-full hover:bg-gold-light transition-colors uppercase tracking-widest text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </motion.div>
  );
}
