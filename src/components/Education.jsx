import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  const coreCourses = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Web Architecture & Frontend Systems',
    'Computer Networks & OS Basics'
  ];

  return (
    <section id="academics" className="py-16 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase">
            ACADEMICS &amp; EDUCATION
          </h2>
          <div className="flex-1 h-1 bg-black dark:bg-[#3A3A3A]"></div>
        </div>

        {/* Degree Card */}
        <div className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Degree & Details */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#2EC4B6] border-2 border-black dark:border-[#3A3A3A] font-mono text-xs font-bold text-black uppercase mb-4 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#3A3A3A]">
              <GraduationCap size={16} />
              BACHELOR OF TECHNOLOGY (B.TECH)
            </div>

            <h3 className="font-bebas text-4xl sm:text-5xl text-black dark:text-[#F7F4EB] tracking-wide leading-tight mb-2">
              COMPUTER SCIENCE &amp; ENGINEERING
            </h3>

            <p className="font-mono text-xs font-bold text-black/70 dark:text-[#A1A1A1] uppercase mb-4 border-b-2 border-black dark:border-[#2A2A2A] pb-2 w-full">
              GUJARAT TECHNOLOGICAL UNIVERSITY • CURRENTLY IN 3RD SEMESTER
            </p>

            <p className="font-sans text-base font-medium text-black/90 dark:text-[#A1A1A1] leading-relaxed">
              Pursuing a degree in Computer Science Engineering, focusing on software development fundamentals, algorithm design, data structures, and web technologies. Actively applying classroom knowledge by building production-ready projects.
            </p>
          </div>

          {/* Right Column: Core Course List Box */}
          <div className="lg:col-span-5 bg-[#F7F4EB] dark:bg-[#0D0D0D] border-2 border-black dark:border-[#3A3A3A] p-6 shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_#3A3A3A]">
            <h4 className="font-mono text-xs font-bold tracking-widest text-black dark:text-[#F7F4EB] uppercase mb-4 pb-2 border-b-2 border-black dark:border-[#2A2A2A] flex items-center gap-2">
              <BookOpen size={16} className="text-[#FF5733]" />
              KEY COURSEWORK:
            </h4>

            <ul className="space-y-2.5 font-mono text-xs font-bold text-black dark:text-[#F7F4EB]">
              {coreCourses.map((course, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF5733] border border-black dark:border-[#3A3A3A]"></span>
                  {course}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
