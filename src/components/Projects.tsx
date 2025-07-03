import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  category: 'web' | 'mobile' | 'design';
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB, featuring user authentication, product filtering, cart functionality, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productive task management application with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An elegant weather dashboard that provides current weather conditions and forecasts using data from multiple weather APIs.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["JavaScript", "APIs", "CSS3"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web"
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      description: "A mobile application for tracking workouts, nutrition, and progress with personalized recommendations and analytics.",
      image: "https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React Native", "Redux", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
      category: "mobile"
    },
    {
      id: 5,
      title: "Portfolio Design System",
      description: "A comprehensive design system created for consistent branding across multiple platforms and applications.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Figma", "Design Systems", "UI/UX"],
      demoUrl: "#",
      codeUrl: "#",
      category: "design"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A modern blog platform with rich text editing, comments, and social sharing capabilities.",
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "GraphQL", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
      category: "web"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills and expertise in web development.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white dark:bg-slate-700">
            {(['all', 'web', 'mobile', 'design'] as const).map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      aria-label={`Live demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      aria-label={`Source code of ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;