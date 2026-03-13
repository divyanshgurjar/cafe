import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-chocolate border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <Coffee className="text-chocolate w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold gold-gradient">SEQUOIA</span>
          </Link>
          <p className="text-cream/60 leading-relaxed">
            Crafting perfect moments, one cup at a time. Experience the luxury of premium coffee in a modern sanctuary.
          </p>
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-widest uppercase text-gold">Team</p>
            <p className="text-sm text-cream/60">Developer: <span className="text-cream">Bhole Dayma</span></p>
            <p className="text-sm text-cream/60">Manager: <span className="text-cream">Rahul Kansana</span></p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bholedayma1?igsh=MWhuMWIzdngxNWljbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1HTnVdNkWA/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-chocolate transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold text-gold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Menu', 'About', 'Gallery', 'Order Online'].map((link) => (
              <li key={link}>
                <Link to="#" className="text-cream/60 hover:text-gold transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold text-gold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-cream/60">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
              <span>The Utopia, 1st Floor Plot. 190, Ram Gali, 1, Panchwati Cir, Raja Park, Jaipur, Rajasthan 302004</span>
            </li>
            <li className="flex items-center gap-3 text-cream/60">
              <Phone className="w-5 h-5 text-gold" />
              <a href="tel:+919799394051" className="hover:text-gold transition-colors">+91 97993 94051</a>
            </li>
            <li className="flex items-center gap-3 text-cream/60">
              <Mail className="w-5 h-5 text-gold" />
              <a href="mailto:gurjardayma819@gmail.com" className="hover:text-gold transition-colors">gurjardayma819@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-serif font-bold text-gold mb-6">Opening Hours</h4>
          <ul className="space-y-4 text-cream/60">
            <li className="flex justify-between">
              <span>Mon - Fri</span>
              <span className="text-gold">7:00 - 20:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="text-gold">8:00 - 21:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="text-gold">9:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-cream/40 text-sm">
        <p>© {new Date().getFullYear()} Sequoia Café. All rights reserved.</p>
      </div>
    </footer>
  );
}
