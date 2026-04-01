'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                {portfolioData.avatar ? (
                  <Image
                    src={portfolioData.avatar}
                    alt={portfolioData.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl md:text-6xl font-bold gradient-text">
                    {portfolioData.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
              <h1 className="hero-name text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-[-0.04em]">
                {portfolioData.name}
              </h1>
            </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-accent font-semibold">
              {portfolioData.role}
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {portfolioData.shortBio}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight size={20} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Get in Touch
              <Mail size={20} />
            </Link>

            {portfolioData.cv && portfolioData.cv !== '[YOUR_CV_LINK]' && (
              <a
                href={portfolioData.cv}
                download="Nguyen-Minh-Vu-CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Download CV
                <Download size={20} />
              </a>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 pt-4">
            {portfolioData.github && (
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            )}

            {portfolioData.linkedin && (
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            )}

            {portfolioData.email && portfolioData.email !== '[YOUR_EMAIL]' && (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-colors inline-flex items-center justify-center"
                aria-label={`Send email to ${portfolioData.email}`}
                title="Send me an Email"
              >
                <Mail size={24} />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}