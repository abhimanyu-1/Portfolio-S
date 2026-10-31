import React, { useState, useMemo } from 'react';
import { Cpu, Search, X, SearchX } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = ["All", "Programming", "Cloud & Data", "Data Engineering", "Orchestration", "Testing & Quality", "Web & Database"];
    return cats.map(cat => ({
      name: cat,
      count: cat === "All" ? skillsData.length : skillsData.filter(s => s.category === cat).length
    }));
  }, []);

  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return skillsData.filter(item => {
      const matchesCat = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery = !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.context.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="scroll-mt-28 py-10 sm:py-16 space-y-10 sm:space-y-12">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-500">
            <Cpu className="w-4 h-4" />
            <span>Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-slate-900">
            Interactive Skills Explorer
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
            Filter by engineering domain or search any technology from Shyamaprasad's production data engineering stack.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Python, BigQuery, Pytest..."
            className="w-full pl-11 pr-10 py-3 rounded-xl glass-card text-sm focus:outline-none focus:border-cyan-500 dark:text-white text-slate-900 placeholder-slate-500 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 sm:gap-3" role="tablist">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all flex items-center gap-2 ${
                isActive
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "glass-card text-slate-600 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400"
              }`}
            >
              <span>{cat.name}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                isActive ? "bg-slate-950/20 text-slate-950" : "bg-slate-800/80 text-cyan-400"
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid with Better Margins */}
      {filteredSkills.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/90 text-cyan-400 border border-slate-700/80">
                    {skill.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 font-medium">
                    {skill.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shadow-sm">
                    <DynamicIcon name={skill.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg dark:text-white text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-4 pt-3 border-t border-slate-800/60 leading-relaxed">
                {skill.context}
              </p>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-card rounded-2xl p-10 sm:p-14 text-center space-y-4 my-6">
          <SearchX className="w-10 h-10 text-cyan-400 mx-auto" />
          <h4 className="text-lg font-bold dark:text-white text-slate-900">
            No skills matched your search filter
          </h4>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try searching with broader terms or reset the filters to see all 31 technical skills.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-mono bg-cyan-500 text-slate-950 font-semibold hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

