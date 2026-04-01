'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/lib/portfolio-data';

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    { name: 'Frontend', skills: portfolioData.skills.frontend, icon: '🎨' },
    { name: 'Backend', skills: portfolioData.skills.backend, icon: '⚙️' },
    { name: 'Database', skills: portfolioData.skills.database, icon: '💾' },
    { name: 'Tools', skills: portfolioData.skills.tools, icon: '🔧' },
  ];

  return (
    <section id="skills" className="section-spacing relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                variants={itemVariants}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="p-3 rounded-lg bg-card border border-border glow-border card-hover cursor-default"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Note */}
          <motion.div
            variants={itemVariants}
            className="mt-12 p-6 rounded-lg border border-border bg-card/50 backdrop-blur"
          >
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-semibold text-foreground">Pro Tip:</span> I&apos;m a quick learner and adapt easily to new technologies. 
              I&apos;m particularly interested in modern frontend frameworks and full-stack development practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
