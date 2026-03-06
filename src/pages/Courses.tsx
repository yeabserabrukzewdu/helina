import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';
import { COURSES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

export const Courses = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-6"
          >
            {t('nav.courses').split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{t('nav.courses').split(' ').slice(-1)}</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t('courses.desc')}
          </p>
        </div>

        <div className="space-y-24">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={course.image}
                      className="w-full aspect-video object-cover"
                      alt={course.title}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                    <div className="text-3xl font-bold text-brand-primary mb-1">{course.price} {t('courses.price')}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Full Course Fee</div>
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider">
                    {course.titleAmharic}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-white/40 text-xs font-bold uppercase tracking-wider">12 Weeks Intensive</span>
                </div>
                <h2 className="text-4xl font-display font-bold mb-6">{t(`data.courses.${course.id}.title`)}</h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  {t(`data.courses.${course.id}.desc`)}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {(t(`data.courses.${course.id}.features`) as unknown as string[] || course.features).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 size={14} className="text-brand-primary" />
                      </div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{t('courses.tools')}</h4>
                  <div className="flex flex-wrap gap-3">
                    {course.tools.map((tool) => (
                      <div key={tool} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium">
                        <Zap size={14} className="text-brand-secondary" />
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">{t('courses.enroll')}</button>
                  <button className="btn-secondary">{t('courses.syllabus')}</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Highlight */}
        <section className="mt-32 glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">{t('courses.certification.title').split(' ').slice(0, -1).join(' ')} <br /><span className="text-gradient">{t('courses.certification.title').split(' ').slice(-1)}</span></h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                {t('courses.certification.desc')}
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: t('courses.certification.item1.title'), desc: t('courses.certification.item1.desc') },
                  { icon: Globe, title: t('courses.certification.item2.title'), desc: t('courses.certification.item2.desc') },
                  { icon: Zap, title: t('courses.certification.item3.title'), desc: t('courses.certification.item3.desc') }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full" />
              <img
                src="https://picsum.photos/seed/cert/800/600"
                className="relative rounded-3xl border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                alt="Certificate"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
