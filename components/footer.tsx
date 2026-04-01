'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      icon: Github,
      url: portfolioData.github,
      label: 'GitHub',
      placeholder: '[YOUR_GITHUB]',
    },
    {
      icon: Linkedin,
      url: portfolioData.linkedin,
      label: 'LinkedIn',
      placeholder: '[YOUR_LINKEDIN]',
    },
    {
      icon: Mail,
      url: `mailto:${portfolioData.email}`,
      label: 'Email',
      placeholder: '[YOUR_EMAIL]',
    },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="#hero" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="font-bold text-lg text-foreground">Portfolio</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A modern developer portfolio showcasing skills and projects.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['#about', '#skills', '#projects', '#contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.slice(1).charAt(0).toUpperCase() + link.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                const isPlaceholder = social.url === social.placeholder;

                return (
                  <motion.a
                    key={social.label}
                    href={isPlaceholder ? '#' : social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={!isPlaceholder ? { scale: 1.1 } : {}}
                    className={`p-2 rounded-lg border border-border transition-colors ${
                      isPlaceholder
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:border-accent hover:bg-accent/10'
                    }`}
                    aria-label={social.label}
                    title={isPlaceholder ? 'Update in portfolio data' : social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              Made with <Heart size={16} className="text-accent" /> using
              <span className="font-semibold text-foreground ml-1">
                Next.js & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
