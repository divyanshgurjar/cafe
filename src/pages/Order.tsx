import { motion } from 'motion/react';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '@/src/constants';

export default function Order() {
  // Mock cart items
  const cartItems = MENU_ITEMS.slice(0, 2);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const delivery = 2.50;
  const total = subtotal + delivery;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Your <span className="italic gold-gradient">Order</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-6 rounded-[32px] border-white/5 flex items-center gap-6"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                  <p className="text-cream/40 text-sm">{item.category}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-colors">-</button>
                    <span className="font-bold">1</span>
                    <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-colors">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-gold mb-2">${item.price.toFixed(2)}</p>
                  <button className="text-cream/20 hover:text-red-400 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-20 glass-dark rounded-[40px] border-white/5">
                <ShoppingBag className="w-16 h-16 text-cream/10 mx-auto mb-6" />
                <p className="text-cream/40">Your cart is empty</p>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="glass-dark p-8 rounded-[40px] border-white/5 sticky top-32">
              <h3 className="text-2xl font-serif font-bold mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-cream/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-cream/60">
                  <span>Delivery Fee</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-gold">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs text-cream/40 uppercase tracking-widest font-bold">Payment Method</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 rounded-xl border border-gold bg-gold/10 text-gold text-xs font-bold">CARD</button>
                  <button className="py-3 rounded-xl border border-white/10 text-cream/40 text-xs font-bold">CASH</button>
                </div>
              </div>

              <button className="w-full mt-10 py-5 bg-gold text-chocolate font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                Checkout Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
