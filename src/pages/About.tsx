import { motion } from 'motion/react';
import { Coffee, Award, Users, Leaf } from 'lucide-react';

const VALUES = [
  {
    icon: Coffee,
    title: 'Premium Quality',
    desc: 'We source only the top 1% of Arabica beans from sustainable farms worldwide.'
  },
  {
    icon: Award,
    title: 'Expert Craft',
    desc: 'Our baristas undergo rigorous training to master the science of extraction.'
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'Creating a sanctuary where everyone feels welcome and inspired.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    desc: 'Committed to eco-friendly practices from farm to cup.'
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs block">Our Journey</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Brewing a <br />
              <span className="italic gold-gradient">Legacy of Taste</span>
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed">
              Sequoia Café was born from a passion for the perfect cup. What started as a small roastery in a quiet corner has grown into a sanctuary for coffee lovers who appreciate the finer details.
            </p>
            <p className="text-cream/60 text-lg leading-relaxed">
              Every bean we roast and every cup we pour carries our commitment to excellence. We travel to origin, meet the farmers, and ensure that every step of the process respects the craft.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000"
                alt="Our Cafe"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold rounded-full flex items-center justify-center text-chocolate text-center p-6 rotate-12">
              <p className="font-serif font-bold text-xl leading-tight">Voted Best Coffee 2025</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark p-10 rounded-[40px] border-white/5 hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-chocolate transition-all duration-500">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs block mb-4">The Team</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Meet Our <span className="italic gold-gradient">Visionaries</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 border border-white/5 group-hover:border-gold/30 transition-all duration-500">
                <img
                  src="bhole.jpeg"
                  alt="Bhole Dayma"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif font-bold">Bhole Dayma</h3>
                  <p className="text-gold text-sm font-bold tracking-widest uppercase">Developer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 border border-white/5 group-hover:border-gold/30 transition-all duration-500">
                <img
                  src="rahul.jpeg"
                  alt="Rahul Kansana"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif font-bold">Rahul Kansana</h3>
                  <p className="text-gold text-sm font-bold tracking-widest uppercase">Manager</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
