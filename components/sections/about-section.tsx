"use client";

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, User, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <User className="mr-3 h-6 w-6 text-primary" />
                Hello, I'm Tanvi
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                I'm a passionate backend developer with a strong focus on building efficient, 
                scalable systems. Currently working full-time at Pixer Digital after 
                successfully completing a 6-month internship, I specialize in creating 
                robust backend solutions that power modern web applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-foreground/80 leading-relaxed">
                My journey in web development started with a curiosity about how things work 
                behind the scenes. This curiosity has driven me to master technologies like 
                Node.js, MongoDB, and TypeScript, allowing me to create scalable backend 
                architectures and efficient database solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-foreground/80 leading-relaxed">
                Beyond backend development, I also offer freelancing services in web development 
                and graphics designing. When I'm not coding, I enjoy exploring new technologies, 
                contributing to open-source projects, and sharing my knowledge with the developer community.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-foreground/70">Surat, Gujarat, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Services</h4>
                      <p className="text-foreground/70">Web Development & Graphics Designing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Education</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-sm">BCA Student</p>
                          <p className="text-foreground/70 text-sm">Swarnim Startup and Innovation University</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">GIM + Backend Development</p>
                          <p className="text-foreground/70 text-sm">Red & White Multimedia Education</p>
                          <p className="text-foreground/60 text-xs mt-1">April 2023 – Nov 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;