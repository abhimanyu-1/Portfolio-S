import React, { useState } from 'react';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function ProjectsSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "All Projects (4)", key: "all" },
    { label: "Machine Learning & AI (2)", key: "ML & AI" },
    { label: "Web & Workflow Systems (2)", key: "Web & Workflow" }
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-28 py-10 sm:py-16 space-y-10 sm:space-y-12">
      
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-500">
            <FolderGit2 className="w-4 h-4" />
            <span>Application &amp; ML Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-slate-900">
            Selected Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
            Click on any project card to inspect its technical architecture, ML pipelines, and implementation details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeCategory === cat.key
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]"
                  : "glass-card text-slate-600 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with Spacious Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => onSelectProject(proj)}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-xl text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                  {proj.category}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shadow-sm">
                  <DynamicIcon name={proj.icon} className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-slate-900 group-hover:text-cyan-400 transition-colors leading-snug">
                {proj.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {proj.stack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-xs font-mono text-cyan-400 shrink-0 flex items-center gap-1.5 font-semibold group-hover:translate-x-1 transition-transform">
                Inspect <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

