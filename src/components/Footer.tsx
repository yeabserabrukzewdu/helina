import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-surface border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div>
              <span className="block font-display font-bold text-lg leading-none">EXCEED</span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase">Advanced Training</span>
            </div>
          </Link>
          <p className="text-white/60 leading-relaxed">
            {t('footer.desc')}
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors border border-white/10"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
          <ul className="space-y-4">
            {['Home', 'Courses', 'About Us', 'Testimonials', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-brand-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">{t('footer.ourCourses')}</h4>
          <ul className="space-y-4">
            {['Digital Marketing', 'Software Engineering', 'AI & Automation', 'Data Analysis'].map((item) => (
              <li key={item}>
                <Link to="/courses" className="text-white/60 hover:text-brand-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">{t('footer.contactInfo')}</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60">
              <MapPin size={20} className="text-brand-primary shrink-0" />
              <span>Addis Ababa, Ethiopia<br />Megenagna, metebaber blg. 3rd floor</span>
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <Phone size={20} className="text-brand-primary shrink-0" />
              <span>+251 912 088 143</span>
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <Mail size={20} className="text-brand-primary shrink-0" />
              <span>info@exceed.et</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
        <p>© 2026 Exceed Advanced Training Institution. {t('footer.rights')}</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
