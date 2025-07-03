import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import profilePhoto from '../assets/profile_photo.jpg';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950"
    >
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-2 animate-fade-in">
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                Dana Maulana
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mt-2">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl animate-fade-in-delay-1">
              I build exceptional digital experiences that combine beautiful design with solid functionality. 
              Specialized in creating modern web applications with clean, efficient code.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-indigo-600/20"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-500 text-slate-800 dark:text-white font-medium rounded-lg transition-colors hover:bg-white/50 dark:hover:bg-slate-800/50"
              >
                View My Work
              </a>
            </div>
            
            <div className="flex space-x-5 animate-fade-in-delay-3">
              <a 
                href="https://github.com/danamaulana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/danamaulana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:contact@danamaulana.com" 
                className="p-2 text-slate-700 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-1">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                <img 
                  src= {profilePhoto} 
                  alt="Dana Maulana" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-lg"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;