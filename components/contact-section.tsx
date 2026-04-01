'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function ContactSection() {
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

  const socialLinks = [
    {
      name: 'Email',
      url: `mailto:${portfolioData.email}`,
      icon: Mail,
      color: 'hover:text-orange-500',
      placeholder: '[YOUR_EMAIL]',
    },
    {
      name: 'GitHub',
      url: portfolioData.github,
      icon: Github,
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
      placeholder: '[YOUR_GITHUB]',
    },
    {
      name: 'LinkedIn',
      url: portfolioData.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600',
      placeholder: '[YOUR_LINKEDIN]',
    },
  ];

  return (
    <section id="contact" className="section-spacing relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, opportunities, or just saying hello. 
              Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isPlaceholder = link.url === link.placeholder;

              return (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                >
                  {isPlaceholder ? (
                    <div className="p-6 rounded-lg border border-border bg-card/50 opacity-50 cursor-not-allowed">
                      <div className="flex flex-col items-center text-center gap-3">
                        <Icon size={32} className="text-muted-foreground" />
                        <h3 className="font-semibold text-foreground">{link.name}</h3>
                        <p className="text-xs text-muted-foreground">Update in portfolio data</p>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-lg border border-border glow-border card-hover bg-card/50 backdrop-blur flex flex-col items-center text-center gap-3 transition-all"
                    >
                      <Icon size={32} className={`${link.color} transition-colors`} />
                      <h3 className="font-semibold text-foreground">{link.name}</h3>
                      <p className="text-sm text-muted-foreground break-all">
                        {link.url.replace(/^(https?:\/\/|mailto:)/, '').split('/')[0]}
                      </p>
                      <ArrowRight
                        size={20}
                        className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Email CTA */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            {portfolioData.email ? (
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                Send me an Email
                <ArrowRight size={20} />
              </a>
            ) : (
              <p className="text-muted-foreground italic">
                Update your email in the portfolio data to enable contact
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
