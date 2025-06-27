"use client";

import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Pixer Digital",
      location: "Surat, India",
      duration: "June 2025 – Present",
      type: "Full-time",
      description: "Promoted from intern to full-time role. Responsible for developing backend features and improving system performance.",
      achievements: [
        "Successfully transitioned from internship to full-time position",
        "Developed and maintained backend features for live applications",
        "Improved system performance and scalability",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Implemented best practices for code quality and documentation"
      ],
      technologies: ["Node.js", "MongoDB", "Express", "REST APIs", "Git"],
      current: true
    },
    {
      title: "Backend Developer Intern",
      company: "Pixer Digital",
      location: "Surat, India",
      duration: "Dec 2024 – June 2025",
      type: "Internship",
      description: "Contributed to multiple live backend projects using Node.js and MongoDB.",
      achievements: [
        "Contributed to multiple live backend projects",
        "Gained hands-on experience with Node.js and MongoDB",
        "Learned industry best practices and professional development workflows",
        "Collaborated with senior developers and learned from their expertise",
        "Successfully completed all assigned projects within deadlines"
      ],
      technologies: ["Node.js", "MongoDB", "Express", "JavaScript", "Postman"],
      current: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            My professional journey in backend development, showcasing growth from 
            internship to full-time developer role at Pixer Digital.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12 last:mb-0"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>
                
                <div className="md:ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                            {exp.current && (
                              <Badge className="ml-3 bg-green-500/10 text-green-600 border-green-500/20">
                                Current
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-foreground/70 mb-3">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-2" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                            <div className="flex items-center text-foreground/70">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>{exp.duration}</span>
                            </div>
                            <Badge variant="outline" className="w-fit">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Achievements</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-foreground/70 flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold mb-2">Looking Forward</h3>
              <p className="text-foreground/70">
                Excited to take on new challenges and continue growing as a backend developer. 
                Open to freelance opportunities and collaborative projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;