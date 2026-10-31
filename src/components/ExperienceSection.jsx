import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import DynamicIcon from './DynamicIcon';
import PipelineSimulator from './PipelineSimulator';

export default function ExperienceSection({ onNotify }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { label: "All Impact", key: "all" },
    { label: "Engineering", key: "Engineering" },
    { label: "Testing & Quality", key: "Testing" },
    { label: "Orchestration", key: "Orchestration" },
    { label: "Cloud & BigQuery", key: "Cloud" }
  ];

  const filteredExperience = activeFilter === "all"
    ? experienceData
    : experienceData.filter(item => item.tag === activeFilter);

  return (
    <section id="experience" className="scroll-mt-28 py-10 sm:py-16 space-y-12 sm:space-y-16">
      
      {/* Experience Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold">
            <Briefcase className="w-4 h-4" />
            <span>Production Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 max-w-2xl font-medium">
            Enterprise Data Engineering &amp; GenAI Pipeline Development at Tata Consultancy Services (TCS).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeFilter === tab.key
                  ? "bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]"
                  : "glass-card text-slate-800 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-400 font-semibold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main TCS Experience Card */}
      <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-l-4 border-l-cyan-600 dark:border-l-cyan-500 border border-slate-200 dark:border-slate-800/80 space-y-8 shadow-xl">
        
        {/* Role & Company Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                Software Engineer / Data Engineering
              </h3>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-500/15 text-emerald-950 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                Active Role
              </span>
            </div>
            <p className="text-base font-bold text-cyan-700 dark:text-cyan-400">
              Tata Consultancy Services (TCS) — Bengaluru, India
            </p>
            <p className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-400 font-medium">
              Client Context: <strong className="text-slate-950 dark:text-slate-200 font-bold">American Express Client — GenAI Project</strong>
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-center px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-900 dark:text-cyan-300 font-bold shadow-sm">
            <Calendar className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
            <span>June 2025 – Present</span>
          </div>
        </div>

        {/* Accomplishments Grid with Better Margins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredExperience.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 hover:shadow-lg transition-all flex items-start gap-4 shadow-sm"
            >
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5 shadow-sm">
                <DynamicIcon name={item.icon} className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-cyan-300 border border-slate-300 dark:border-slate-700/80 font-bold">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-400 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Embedded Airflow DAG & Pipeline Simulator */}
      <PipelineSimulator onNotify={onNotify} />

    </section>
  );
}
