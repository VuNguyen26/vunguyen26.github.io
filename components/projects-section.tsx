'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolio-data';

export function ProjectsSection() {
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
    <section id="projects" className="section-spacing relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Here are some of my most recent and impactful projects that showcase my skills and experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {portfolioData.projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                  {/* Project Image */}
                  <div className={`order-1 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative h-80 rounded-lg overflow-hidden border border-border glow-border card-hover bg-card">
                      {project.image && project.image !== '' ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🚀</div>
                            <p className="text-muted-foreground">Project Screenshot</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`order-2 flex flex-col justify-center space-y-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-3xl font-bold text-foreground">
                          {project.name}
                        </h3>
                        {project.demo && project.demo !== '[PROJECT_' + idx + '_DEMO]' && (
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent/20 text-accent">
                            Live
                          </span>
                        )}
                      </div>
                      <p className="text-base text-muted-foreground">
                        {project.role}
                      </p>
                    </div>

                    <p className="text-lg leading-relaxed text-foreground">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-accent mt-1 flex-shrink-0">→</span>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      {project.github && project.github !== '[PROJECT_' + idx + '_GITHUB]' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold"
                        >
                          <Github size={20} />
                          Code
                        </a>
                      )}
                      {project.demo && project.demo !== '[PROJECT_' + idx + '_DEMO]' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <a
              href={portfolioData.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
            >
              <Github size={20} />
              Visit My GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
