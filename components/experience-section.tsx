'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function ExperienceSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-spacing relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="space-y-6">
            {portfolioData.experience.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Line */}
                {idx !== portfolioData.experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-accent to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-1 flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        {item.type === 'education' ? (
                          <GraduationCap className="text-accent" size={28} />
                        ) : (
                          <Briefcase className="text-accent" size={28} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3 pb-8">
                    <div className="group/card p-6 rounded-lg border border-border glow-border card-hover bg-card/50 backdrop-blur">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-sm text-accent font-medium">
                            {item.organization}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
