import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
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
            Get in <span className="italic gold-gradient">Touch</span>
          </motion.h1>
          <p className="text-cream/60 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-dark p-8 rounded-[32px] border-white/5">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Phone</h3>
                <a href="tel:+919799394051" className="text-cream/60 hover:text-gold transition-colors">+91 97993 94051</a>
              </div>
              <div className="glass-dark p-8 rounded-[32px] border-white/5">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Email</h3>
                <a href="mailto:gurjardayma819@gmail.com" className="text-cream/60 hover:text-gold transition-colors">gurjardayma819@gmail.com</a>
              </div>
              <div className="glass-dark p-8 rounded-[32px] border-white/5">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Location</h3>
                <p className="text-cream/60">The Utopia, 1st Floor Plot. 190, Ram Gali, 1, Panchwati Cir, Raja Park, Jaipur, Rajasthan 302004</p>
              </div>
              <div className="glass-dark p-8 rounded-[32px] border-white/5">
                <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Hours</h3>
                <p className="text-cream/60">Daily: 7:00 - 20:00</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-80 rounded-[40px] overflow-hidden border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Placeholder"
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-chocolate/40">
                <div className="glass p-6 rounded-3xl text-center">
                  <MapPin className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="font-bold">Find Us on Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-dark p-10 md:p-16 rounded-[48px] border-white/5">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-cream/40 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-cream/40 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:text-xs">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-cream/40 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:text-xs">
                  Subject
                </label>
              </div>
              <div className="relative group">
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-4 text-cream/40 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-gold peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-gold peer-[:not(:placeholder-shown)]:text-xs">
                  Your Message
                </label>
              </div>
              <button className="w-full py-5 bg-gold text-chocolate font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-gold-light transition-all duration-300 uppercase tracking-widest text-sm">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
