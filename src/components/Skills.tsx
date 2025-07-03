import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  
  const skills: Skill[] = [
    { name: 'HTML', level: 85, category: 'frontend' },
    { name: 'CSS', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 75, category: 'frontend' },
    { name: 'React', level: 75, category: 'frontend' },
    { name: 'Next.js', level: 70, category: 'backend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'TypeScript', level: 70, category: 'frontend' },
    { name: 'Node.js', level: 70, category: 'backend' },
    { name: 'Express', level: 50, category: 'backend' },
    { name: 'MongoDB', level: 50, category: 'backend' },
    { name: 'PostgreSQL', level: 65, category: 'backend' },
    { name: 'Git', level: 85, category: 'other' },
  ];
  
  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I specialize in modern web technologies and continue to expand my skillset to deliver high-quality applications.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-white dark:bg-slate-700">
            {(['all', 'frontend', 'backend', 'other'] as const).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full">
                <div 
                  className="h-2.5 bg-indigo-600 rounded-full animate-skill-fill"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;