import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6"
          >
            Success <span className="text-gradient">Stories</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Hear from our graduates who are now thriving in the tech industry. Join them and start your own success story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group hover:border-brand-primary/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors" size={40} />
              
              <div className="flex text-yellow-500 mb-8">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-white/80 text-lg italic mb-10 leading-relaxed relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <img src={t.avatar} className="w-14 h-14 rounded-full border-2 border-brand-primary/20" alt={t.name} />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-white/40">{t.role}</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mt-1">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Mock extra testimonials to fill the page */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={`extra-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group hover:border-brand-primary/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-brand-primary/20 group-hover:text-brand-primary/40 transition-colors" size={40} />
              <div className="flex text-yellow-500 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-white/80 text-lg italic mb-10 leading-relaxed relative z-10">
                "The curriculum is very practical. I was able to apply what I learned immediately to my freelance projects."
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Extra${i}`} className="w-14 h-14 rounded-full border-2 border-brand-primary/20" alt="Student" />
                <div>
                  <h4 className="font-bold text-lg">Student {i}</h4>
                  <p className="text-sm text-white/40">Graduate</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-primary font-bold mt-1">AUG 2025</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
