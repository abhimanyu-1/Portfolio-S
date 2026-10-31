import React from 'react';
import { GraduationCap, Trophy, Building2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28 py-10 sm:py-16 space-y-10 sm:space-y-12">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold">
          <GraduationCap className="w-4 h-4" />
          <span>Academic Excellence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
          Education &amp; University Ranks
        </h2>
        <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 max-w-2xl font-medium">
          Top-5 University Rank holder in both Master's (MCA) and Bachelor's (BCA) degree programs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-cyan-100 dark:bg-cyan-500/15 text-cyan-950 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-500/30">
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-100 dark:bg-amber-500/15 text-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 shadow-sm">
                  <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>{item.rank}</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                  {item.degree}
                </h3>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 mt-2 flex items-center gap-2 font-medium">
                  <Building2 className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0" />
                  <span>{item.institution}</span>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-slate-700 dark:text-slate-400 block tracking-wider font-bold">
                  {item.scoreType}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-700 dark:text-cyan-400">
                  {item.score}
                </span>
              </div>
              <div className="w-36 sm:w-48 bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
