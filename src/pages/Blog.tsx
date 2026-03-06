import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-extrabold mb-6"
            >
              Our <span className="text-gradient">Blog</span>
            </motion.h1>
            <p className="text-white/60 max-w-xl text-lg">
              Insights, tutorials, and industry news to help you stay ahead in the digital world.
            </p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-dark rounded-[2rem] overflow-hidden group hover:border-brand-primary/30 transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={post.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-brand-primary text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    By Exceed Team
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.id}`} className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-primary group/link">
                  Read Full Article <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
          
          {/* Mock extra blog posts */}
          {[1, 2, 3, 4].map((i) => (
            <motion.article
              key={`extra-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 2) * 0.1 }}
              className="glass-dark rounded-[2rem] overflow-hidden group hover:border-brand-primary/30 transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/blog${i + 5}/400/250`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Blog Post"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-brand-secondary text-[10px] font-bold uppercase tracking-widest">
                  Technology
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    Jan {10 + i}, 2026
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    By Admin
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
                  Mastering the Art of Tech Learning
                </h3>
                <p className="text-white/60 text-sm mb-8 line-clamp-3">
                  Discover the best practices for learning new technologies quickly and effectively in today's fast-paced world.
                </p>
                <Link to="#" className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-primary group/link">
                  Read Full Article <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
