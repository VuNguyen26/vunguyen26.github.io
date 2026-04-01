'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-spacing relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioData.aboutContent}
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-foreground">What I focus on:</h3>
                <ul className="space-y-3">
                  {[
                    'Writing clean, maintainable code',
                    'Creating beautiful user interfaces',
                    'Building scalable applications',
                    'Continuous learning and growth',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '15+', label: 'Technologies' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-border glow-border card-hover bg-card/50 backdrop-blur"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
