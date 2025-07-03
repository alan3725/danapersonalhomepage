import { Briefcase, Calendar, GraduationCap, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                I'm a passionate Full Stack Developer with expertise in building modern, 
                responsive web applications. With a strong foundation in both front-end and 
                back-end technologies, I strive to create seamless user experiences through 
                clean, efficient code.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                My journey in web development began with a curiosity about how websites work, 
                which quickly evolved into a deep passion for creating them. I enjoy the 
                challenge of solving complex problems and continuously learning new technologies 
                to stay at the forefront of web development.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying outdoor activities to maintain a healthy 
                work-life balance.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <User size={20} className="text-indigo-600 dark:text-indigo-400" />
                <span>Dana Maulana</span>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <Calendar size={20} className="text-indigo-600 dark:text-indigo-400" />
                <span>Born: January 15, 1995</span>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400" />
                <span>Computer Science Degree</span>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <Briefcase size={20} className="text-indigo-600 dark:text-indigo-400" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-200 dark:bg-indigo-900/30 rounded-lg absolute -left-4 -top-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4064305/pexels-photo-4064305.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Dana Maulana" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;