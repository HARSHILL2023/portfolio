import React from 'react';
import { ArrowUpRight, Figma } from 'lucide-react';

export default function FigmaShowcase() {
  const designs = [
    {
      title: 'Cubextra OTT Platform',
      description: 'A modern OTT streaming platform UI designed for seamless content discovery, video streaming, and responsive media presentation.',
      image: '/assets/cubextra.png',
      figmaLink: 'https://www.figma.com/design/crvd8JlvwBClPBBdkkx9nM/poco--design?node-id=391-297&t=qnuN8fsOwAAdjeL9-1',
      tags: ['UI DESIGN', 'MOBILE', 'OTT']
    },
    {
      title: 'Test Platform System',
      description: 'A flexible testing platform interface built for performance monitoring and system validation with clean dashboard analytics.',
      image: '/assets/test-platform.png',
      figmaLink: 'https://www.figma.com',
      tags: ['DASHBOARD', 'SAAS', 'ENTERPRISE']
    },
    {
      title: 'Nike Shoes Concept',
      description: 'A high-conversion e-commerce UI concept for showcasing Nike footwear with bold visuals and smooth item selection.',
      image: '/assets/nike.png',
      figmaLink: 'https://www.figma.com',
      tags: ['ECOMMERCE', 'UI/UX', 'PROTOTYPE']
    }
  ];

  return (
    <section id="figma" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-bebas text-5xl sm:text-6xl text-black dark:text-[#F7F4EB] tracking-wider uppercase">
            DESIGN PORTFOLIO
          </h2>
          <div className="flex-1 h-1 bg-black dark:bg-[#3A3A3A]"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#161616] border-[3px] border-black dark:border-[#3A3A3A] shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#3A3A3A] p-5 flex flex-col justify-between group"
            >
              <div>
                {/* Screenshot Frame */}
                <div className="w-full aspect-video bg-[#EAE5D9] dark:bg-[#111111] border-2 border-black dark:border-[#3A3A3A] overflow-hidden mb-4 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute top-2 right-2 p-1.5 bg-[#FF5733] border border-black dark:border-[#3A3A3A] text-black">
                    <Figma size={14} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-3xl text-black dark:text-[#F7F4EB] tracking-wide mb-2 group-hover:text-[#FF5733] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium text-black/80 dark:text-[#A1A1A1] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-[#F7F4EB] dark:bg-[#0D0D0D] border border-black dark:border-[#3A3A3A] font-mono text-[10px] font-bold text-black dark:text-[#F7F4EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t-2 border-black dark:border-[#2A2A2A] flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-black/60 dark:text-[#A1A1A1] uppercase">
                  FIGMA PROTOTYPE
                </span>

                <a
                  href={item.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn p-2 bg-[#FF5733] text-black flex items-center justify-center"
                  title="Open Figma File"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
