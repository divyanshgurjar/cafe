import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const STATS = [
  { label: 'Happy Customers', value: 15000, suffix: '+' },
  { label: 'Cups Served', value: 45000, suffix: '+' },
  { label: 'Coffee Blends', value: 24, suffix: '' },
  { label: 'Expert Baristas', value: 12, suffix: '' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-coffee relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-serif font-bold text-gold mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-cream/60 uppercase tracking-widest text-xs font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
