"use client";

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHeroInView, setIsHeroInView] = useState(true);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tanvi Ladva
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer | Freelancer
          </motion.p>
          
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Backend developer with a passion for building efficient, scalable systems. 
            Currently crafting innovative solutions at Pixer Digital with expertise in 
            Node.js, MongoDB, and modern web technologies.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button size="lg" className="group" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            
            {/* <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button> */}
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              href="https://github.com/tanviladva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/tanvi-ladva-b7722824b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              href="mailto:tanviladva01@gmail.com"
              className="p-3 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Fixed positioned scroll arrow */}
      {isHeroInView && (
        <motion.button
          onClick={scrollToAbout}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors backdrop-blur-sm border border-foreground/10 z-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      )}
    </section>
  );
};

export default HeroSection;