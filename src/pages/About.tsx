import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* About Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8">
              Empowering <br />
              <span className="text-gradient">{t('nav.about')}</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Exceed Advanced Training Institution was founded with a single mission: to bridge the gap between traditional education and the rapidly evolving tech industry in Ethiopia.
            </p>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              We provide hands-on, project-based learning that focuses on the skills employers actually need. Our instructors are industry veterans who bring real-world experience into the classroom.
            </p>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-brand-primary mb-1">2k+</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Graduates</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-secondary mb-1">15+</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Expert Tutors</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-accent mb-1">95%</div>
                <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Success Rate</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full" />
            <img
              src="./1.jpg"
              className="relative rounded-[3rem] border border-white/10 shadow-2xl"
              alt="Our Team"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
              <p className="text-white/60 mb-8">
                Have questions about our programs? We're here to help you choose the right path for your career.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', value: '+251 911 00 00 00' },
                { icon: Mail, title: 'Email', value: 'info@exceed.et' },
                { icon: MapPin, title: 'Location', value: 'Bole Road, Addis Ababa' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">{item.title}</h4>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 glass p-8 md:p-12 rounded-[2.5rem]">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Full Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <select className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors appearance-none">
                  <option className="bg-dark-bg">General Inquiry</option>
                  <option className="bg-dark-bg">Course Registration</option>
                  <option className="bg-dark-bg">Partnership</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-2xl shadow-brand-primary/40 hover:scale-110 transition-transform z-50 group">
        <MessageSquare size={28} />
        <span className="absolute right-full mr-4 px-4 py-2 rounded-xl bg-white text-dark-bg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat with our AI Tutor
        </span>
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-dark-bg animate-pulse" />
      </button>
    </div>
  );
};
