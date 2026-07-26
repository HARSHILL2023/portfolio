import React from 'react';
import { Code, Server, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillColumns = [
    {
      title: 'FRONTEND',
      icon: <Code size={20} className="text-[#FF5733]" />,
      skills: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React.js',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'Responsive UI/UX'
      ]
    },
    {
      title: 'BACKEND & DB',
      icon: <Server size={20} className="text-[#2EC4B6]" />,
      skills: [
        'Node.js',
        'Express.js',
        'MongoDB & Atlas',
        'RESTful APIs',
        'JSON & Middleware',
        'Python Basics'
      ]
    },
    {
      title: 'TOOLS & DEVOPS',
      icon: <Wrench size={20} className="text-[#8B5CF6]" />,
      skills: [
        'Git & GitHub',
        'Vite & Build Tools',
        'Vercel Deployment',
        'Postman API Testing',
        'VS Code Environment',
        'Linux Terminal'
      ]
    }
  ];

  const currentlyLearning = [
    { name: 'Artificial Intelligence (AI)', desc: 'LLM integrations, agentic workflows, prompt engineering' },
    { name: 'Machine Learning (ML)', desc: 'Python fundamentals, data processing, predictive modeling' }
  ];

  return (
    <section id="skills" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase">
            EXPERTISE &amp; SKILLS
          </h2>
          <div className="flex-1 h-1 bg-black dark:bg-[#3A3A3A]"></div>
        </div>

        {/* 3 Real Skill Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skillColumns.map((col, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 flex flex-col justify-between h-full"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 mb-6 border-b-2 border-black dark:border-[#2A2A2A]">
                  {col.icon}
                  <h3 className="font-mono text-sm font-bold tracking-widest text-black dark:text-[#F7F4EB] uppercase">
                    {col.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3 font-sans text-sm font-bold text-black dark:text-[#F7F4EB]">
                  {col.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 bg-black dark:bg-[#FF5733] flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column Bottom Indicator */}
              <div className="mt-6 pt-3 border-t-2 border-black dark:border-[#2A2A2A] flex items-center justify-between font-mono text-[10px] font-bold text-black/50 dark:text-[#A1A1A1]">
                <span>SECTION 0{idx + 1}</span>
                <span className="text-[#FF5733]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Subsection */}
        <div className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 sm:p-8">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b-2 border-black dark:border-[#2A2A2A]">
            <Sparkles size={22} className="text-[#FF5733]" />
            <h3 className="font-bebas text-3xl text-black dark:text-[#F7F4EB] tracking-wide uppercase">
              CURRENTLY LEARNING &amp; EXPLORING
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentlyLearning.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F4EB] dark:bg-[#0D0D0D] border-2 border-black dark:border-[#3A3A3A] p-4 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#3A3A3A] flex items-start gap-4"
              >
                <div className="p-2.5 bg-[#FF5733] border border-black dark:border-[#3A3A3A] text-black font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-black dark:text-[#F7F4EB] uppercase mb-1">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs font-medium text-black/75 dark:text-[#A1A1A1] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
