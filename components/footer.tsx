"use client";

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
              Tanvi Ladva
            </h3>
            <p className="text-foreground/70 text-sm">
              Web Developer & Freelancer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/tanviladva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/tanvi-ladva-b7722824b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="mailto:tanviladva01@gmail.com"
              className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-foreground/60 flex items-center justify-center md:justify-end">
              © {currentYear} Made with
              <motion.span
                className="mx-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              by Tanvi Ladva
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-foreground/50">
            Built with Next.js, TypeScript, and Tailwind CSS • Deployed on Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;