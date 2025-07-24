"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "TeamCamp Web",
      description: "A collaborative project management platform with team features, task management, real-time updates, and progress tracking for enhanced productivity.",
      technologies: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
      category: "Web Application",
      status: "Completed",
      demo: "https://dash.teamcamp.app/"
    },
    {
      title: "BearBook",
      description: "Finance tracking app for personal and business expenses.",
      technologies: ["Next.js", "MongoDB", "Express"],
      category: "Finance",
      status: "Completed",
      demo: "https://www.bearbook.com/"
    },
    {
      title: "CSS Showcase Projects",
      description: "A collection of creative CSS projects demonstrating advanced styling techniques, animations, and responsive design patterns.",
      technologies: ["HTML", "CSS", "JavaScript", "CSS Grid", "Flexbox"],
      category: "Frontend",
      status: "Completed",
      demo: "https://capable-torte-f29b70.netlify.app/"
    },
    // {
    //   title: "SASS Design System",
    //   description: "A comprehensive design system built with SASS featuring reusable components, mixins, and variables for scalable styling.",
    //   technologies: ["SASS", "HTML", "JavaScript", "CSS Architecture"],
    //   category: "Design System",
    //   status: "Completed"
    // },
    // {
    //   title: "Tailwind Component Library",
    //   description: "A modern component library built with Tailwind CSS featuring responsive components and utility-first design principles.",
    //   technologies: ["Tailwind CSS", "React", "TypeScript", "Storybook"],
    //   category: "Component Library",
    //   status: "Completed"
    // },
    {
      title: "Extra CSS Project",
      description: "A creative CSS project.",
      technologies: ["HTML", "CSS"],
      category: "Frontend",
      status: "Completed",
      demo: "https://chic-beignet-6e4a5d.netlify.app/"
    },
    {
      title: "Admin Panel",
      description: "A modern admin panel UI.",
      technologies: ["React", "Tailwind CSS"],
      category: "Dashboard",
      status: "Completed",
      demo: "https://cheerful-travesseiro-bfe4ff.netlify.app/"
    },
    {
      title: "Bootstrap Project",
      description: "A responsive project built with Bootstrap.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      category: "Frontend",
      status: "Completed",
      demo: "https://cute-kataifi-c9a6b5.netlify.app/"
    },
    {
      title: "Paladar Restaurant (SASS)",
      description: "A restaurant website built with SASS.",
      technologies: ["HTML", "SASS", "JavaScript"],
      category: "Restaurant",
      status: "Completed",
      demo: "https://splendid-palmier-e83153.netlify.app/"
    },
    {
      title: "Sandbox Project (Tailwind)",
      description: "A sandbox project using Tailwind CSS.",
      technologies: ["HTML", "Tailwind CSS"],
      category: "Frontend",
      status: "Completed",
      demo: "https://tubular-flan-f66e52.netlify.app/"
    },
    {
      title: "Techwind Restaurant",
      description: "A restaurant project using Techwind.",
      technologies: ["HTML", "Tailwind CSS"],
      category: "Restaurant",
      status: "Completed",
      demo: "https://benevolent-moxie-e1cfce.netlify.app/"
    },
    {
      title: "Portfolio Project (Bootstrap)",
      description: "A portfolio website built with Bootstrap.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      category: "Portfolio",
      status: "Completed",
      demo: "https://splendid-starship-b0fa6c.netlify.app/"
    },
    {
      title: "PlayController",
      description: "A gaming platform with user management, game statistics, leaderboards, and multiplayer functionality.",
      technologies: ["Next.js", "Node.js", "MongoDB", "WebSocket", "Redis"],
      category: "Gaming Platform",
      status: "Completed"
    }
  ];

  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentSlide * projectsPerSlide;
    return projects.slice(start, start + projectsPerSlide);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'In Development':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Planned':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Concept':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Ongoing':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            A showcase of my projects demonstrating skills in full-stack development, 
            frontend design, and backend architecture across various technologies.
          </p>
        </motion.div>

        {/* Project Slider */}
        <div className="relative">
          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-stretch"
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getCurrentProjects().map((project, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge 
                        className={`text-xs ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4 flex space-x-3">
                      {project.demo && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 group/btn"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide 
                        ? 'bg-primary' 
                        : 'bg-foreground/20 hover:bg-foreground/40'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 italic">
            🚀 More exciting projects coming soon! Links will be added manually as projects are completed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;