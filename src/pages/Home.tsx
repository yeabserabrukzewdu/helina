import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES, TESTIMONIALS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/20 via-dark-bg/80 to-dark-bg z-10" />
          <img
            src="https://picsum.photos/seed/tech/1920/1080"
            className="w-full h-full object-cover opacity-40"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
              {t('hero.title')} <br />
              <span className="text-gradient">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-primary flex items-center gap-2">
                {t('hero.cta1')} <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary flex items-center gap-2">
                <Play size={20} className="fill-current" /> {t('hero.cta2')}
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                    className="w-10 h-10 rounded-full border-2 border-dark-bg"
                    alt="Student"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-xs font-bold border-2 border-dark-bg">
                  +2k
                </div>
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/50">{t('hero.trusted')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://picsum.photos/seed/learning/800/1000"
                className="w-full aspect-[4/5] object-cover"
                alt="Student Learning"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                    <CheckCircle2 className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">{t('home.cert.title')}</h4>
                    <p className="text-sm text-white/60">{t('home.cert.desc')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-brand-primary">95%</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40">{t('home.stats.hiring')}</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-brand-secondary">50+</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40">{t('home.stats.partners')}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6 bg-dark-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              {t('courses.title')} <span className="text-gradient">{t('courses.titleAccent')}</span>
            </motion.h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t('courses.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark rounded-3xl overflow-hidden group hover:border-brand-primary/30 transition-all"
              >
                <div className="grid lg:grid-cols-5 h-full">
                  <div className="lg:col-span-2 relative overflow-hidden">
                    <img
                      src={course.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={course.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary px-3 py-1 rounded-lg text-xs font-bold">
                      {course.price} {t('courses.price')}
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">{t(`data.courses.${course.id}.title`)}</h3>
                        <span className="text-xs text-brand-primary font-medium px-2 py-1 bg-brand-primary/10 rounded border border-brand-primary/20">
                          {course.titleAmharic}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mb-6 line-clamp-3">
                        {t(`data.courses.${course.id}.desc`)}
                      </p>
                      <div className="space-y-3 mb-8">
                        {(t(`data.courses.${course.id}.features`) as unknown as string[] || course.features).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-brand-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        {course.tools.slice(0, 3).map((tool) => (
                          <span key={tool} className="text-[10px] uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/5">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <Link to={`/courses/${course.id}`} className="text-brand-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        {t('courses.learnMore')} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('home.testimonials.title').split(' ').slice(0, 2).join(' ')} <span className="text-gradient">{t('home.testimonials.title').split(' ').slice(2).join(' ')}</span></h2>
            <p className="text-white/60">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl relative"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">"{t(`data.testimonials.${testimonial.id}.content`)}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} className="w-12 h-12 rounded-full border border-white/10" alt={testimonial.name} />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-white/40">{t(`data.testimonials.${testimonial.id}.role`)} • {testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-brand-primary to-brand-secondary p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8">{t('home.cta.title')}</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              {t('home.cta.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/register" className="px-10 py-5 rounded-2xl bg-white text-brand-primary font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {t('nav.register')}
              </Link>
              <Link to="/courses" className="px-10 py-5 rounded-2xl bg-black/20 text-white font-bold text-lg hover:bg-black/30 transition-all border border-white/20">
                {t('courses.syllabus')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
