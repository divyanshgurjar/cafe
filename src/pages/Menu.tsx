import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '@/src/constants';
import { ShoppingBag, Star, CheckCircle2 } from 'lucide-react';

const CATEGORIES = ['All', 'Coffee', 'Tea', 'Snacks', 'Desserts'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [toast, setToast] = useState<string | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const addToCart = (name: string) => {
    setToast(name);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] glass px-6 py-4 rounded-2xl flex items-center gap-3 border-gold/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-chocolate" />
            </div>
            <p className="font-bold text-sm">
              <span className="text-gold">{toast}</span> added to order!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Our <span className="italic gold-gradient">Menu</span>
          </motion.h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold text-chocolate shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    : 'bg-white/5 text-cream/60 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-dark rounded-[40px] overflow-hidden border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 [perspective:1000px]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 glass p-2 rounded-full">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                  </div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-serif font-bold group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-xl font-bold text-gold">${item.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-cream/60 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  <button 
                    onClick={() => addToCart(item.name)}
                    className="w-full py-4 bg-white/5 hover:bg-gold hover:text-chocolate rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 font-bold uppercase tracking-widest text-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
