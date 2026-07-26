import React, { useState } from 'react';
import { Award, BadgeCheck, ChevronDown, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const [openId, setOpenId] = useState(null);

  const certs = [
    {
      id: 'c1',
      title: 'Foundations of Cybersecurity',
      issuer: 'Google (via Coursera)',
      issued: 'Aug 2024',
      badgeColor: 'bg-[#4285F4]',
      skills: ['Network Security', 'Threat Analysis', 'Cybersecurity Principles'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/8GVBPN5YFAAW'
    },
    {
      id: 'c2',
      title: 'Data Analysis with Python',
      issuer: 'IBM (via Coursera)',
      issued: 'Sep 2024',
      badgeColor: 'bg-[#054ADA]',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/WY9HTRSQ95L9'
    },
    {
      id: 'c3',
      title: 'Python for Data Science and AI',
      issuer: 'IBM (via Coursera)',
      issued: 'Oct 2024',
      badgeColor: 'bg-[#FF5733]',
      skills: ['Python Fundamentals', 'Data Science Libraries', 'Jupyter Notebooks'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/7YX4TRB7BGGY'
    },
    {
      id: 'c4',
      title: 'Crash Course on Python',
      issuer: 'Google (via Coursera)',
      issued: 'Jul 2024',
      badgeColor: 'bg-[#2EC4B6]',
      skills: ['Python Scripting', 'OOP Concepts', 'Automation Logic'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/XMNV2GPNKZ4R'
    },
    {
      id: 'c5',
      title: 'Introduction to Web Development with HTML, CSS, JavaScript',
      issuer: 'IBM (via Coursera)',
      issued: 'Jul 2024',
      badgeColor: 'bg-[#8B5CF6]',
      skills: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Web Fundamentals'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/TI14AP3NYFQQ'
    },
    {
      id: 'c6',
      title: 'Develop Generative AI Solutions with Azure OpenAI Service',
      issuer: 'Microsoft (via Coursera)',
      issued: 'Jul 2024',
      badgeColor: 'bg-[#00A4EF]',
      skills: ['Azure OpenAI', 'GPT APIs', 'Generative AI', 'Prompt Engineering'],
      verifyLink: 'https://www.coursera.org/account/accomplishments/verify/S5N3C3MNKPKH'
    }
  ];

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="certifications" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase flex items-center gap-3">
            <Award size={44} className="text-[#FF5733]" />
            CERTIFICATIONS
          </h2>
          <div className="flex-1 h-1 bg-black dark:bg-[#3A3A3A]"></div>
        </div>

        {/* Certification Accordion List */}
        <div className="space-y-3">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A]"
            >
              {/* Accordion Header */}
              <button
                onClick={() => handleToggle(cert.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#F7F4EB] dark:hover:bg-[#1E1E1E] transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Badge */}
                  <div className={`${cert.badgeColor} p-2.5 border-2 border-black dark:border-[#3A3A3A] flex-shrink-0`}>
                    <BadgeCheck size={22} className="text-white" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-mono text-sm font-bold text-black dark:text-[#F7F4EB] truncate uppercase">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-black/60 dark:text-[#A1A1A1] uppercase">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-mono text-[10px] font-bold text-black dark:text-[#A1A1A1] uppercase hidden sm:inline">
                    {cert.issued}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-black dark:text-[#F7F4EB] transition-transform duration-200 ${openId === cert.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Accordion Body */}
              {openId === cert.id && (
                <div className="px-5 pb-5 border-t-2 border-black dark:border-[#2A2A2A] pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-black/60 dark:text-[#A1A1A1] uppercase block mb-2">
                        SKILLS COVERED:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-[#F7F4EB] dark:bg-[#0D0D0D] border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black dark:text-[#F7F4EB]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn px-5 py-2 bg-[#FF5733] text-black font-mono text-xs font-bold flex items-center gap-2 uppercase self-start sm:self-center"
                    >
                      VERIFY
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
