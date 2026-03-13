import { motion } from 'motion/react';
import { MENU_ITEMS } from '@/src/constants';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Featured() {
  const featuredItems = MENU_ITEMS.slice(0, 3);

  return (
    <section className="py-32 px-6 bg-chocolate relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coffee/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Our Selection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold"
            >
              Featured <span className="italic gold-gradient">Masterpieces</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/menu"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors group font-bold tracking-wider uppercase text-sm"
            >
              View Full Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-serif font-bold group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-gold font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-cream/60 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <button className="pt-4 text-xs font-bold tracking-widest uppercase text-gold/40 group-hover:text-gold transition-colors flex items-center gap-2">
                  Add to Order <div className="w-8 h-px bg-gold/20 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
