"use client";

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Server, 
  Globe,
  Settings,
  Users,
  Palette
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "C++", "Java (Basic)", "C# (Basic)", "JavaScript", "TypeScript"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "Media Queries", "SASS", "Tailwind CSS", "Bootstrap", "jQuery", "Next.js"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs", "Next.js APIs"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: ["MongoDB", "Prisma"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    },
    {
      title: "Development Tools",
      icon: Settings,
      skills: ["Git", "GitHub", "Postman", "Cursor"],
      color: "bg-red-500/10 text-red-600 dark:text-red-400"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Collaboration", "Problem Solving"],
      color: "bg-teal-500/10 text-teal-600 dark:text-teal-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and skills that I use to build 
            robust, scalable applications and deliver exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8">Technical Proficiencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "JSON", "HTTP/HTTPS", "Authentication", "Authorization",
              "Database Design", "Query Optimization", "Aggregation Pipeline", "Version Control", "Code Review",
              "Debugging", "Testing", "Documentation", "Responsive Design"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;