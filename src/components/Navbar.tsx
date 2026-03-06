import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage, Language } from '../contexts/LanguageContext';

const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'am', name: 'አማርኛ' },
  { code: 'om', name: 'Oromoo' },
  { code: 'ti', name: 'ትግርኛ' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const NAV_LINKS = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.courses'), path: '/courses' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.testimonials'), path: '/testimonials' },
    { name: t('nav.blog'), path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass-dark py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            E
          </div>
          <div>
            <span className="block font-display font-bold text-lg leading-none">EXCEED</span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase">Advanced Training</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-primary relative py-2',
                location.pathname === link.path ? 'text-brand-primary' : 'text-white/70'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                />
              )}
            </Link>
          ))}

          {/* Language Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors py-2"
            >
              <Globe size={16} />
              {LANGUAGES.find((l) => l.code === language)?.name}
              <ChevronDown size={14} className={cn('transition-transform', isLangOpen && 'rotate-180')} />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-32 glass-dark rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        'w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors',
                        language === lang.code ? 'text-brand-primary font-bold' : 'text-white/70'
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/register" className="btn-primary py-2 px-5 text-sm">
            {t('nav.login')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => {
              const nextLang = LANGUAGES[(LANGUAGES.findIndex(l => l.code === language) + 1) % LANGUAGES.length].code;
              setLanguage(nextLang);
            }}
            className="text-white/70 p-2"
          >
            <Globe size={20} />
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.path ? 'text-brand-primary' : 'text-white/70'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="grid grid-cols-2 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm border border-white/10',
                      language === lang.code ? 'bg-brand-primary text-white' : 'bg-white/5 text-white/70'
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <Link
                to="/register"
                className="btn-primary text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.login')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
