import React from 'react';
import { Award, BadgeCheck, BookOpen, Users, FileCheck2 } from 'lucide-react';
import { certificationsData, publicationsData, leadershipData } from '../data/portfolioData';

export default function CredentialsSection() {
  return (
    <section id="credentials" className="scroll-mt-28 py-10 sm:py-16 space-y-10 sm:space-y-12">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold">
          <Award className="w-4 h-4" />
          <span>Continuous Learning &amp; Impact</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
          Certifications, Research &amp; Leadership
        </h2>
        <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 max-w-2xl font-medium">
          National certifications, international research publications, and campus governance appointments.
        </p>
      </div>

      {/* 3 Columns Grid with Generous Gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Column 1: Certifications */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 border-t-4 border-t-cyan-600 dark:border-t-cyan-500 border border-slate-200 dark:border-slate-800/80 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 shadow-sm">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-950 dark:text-white">
                Certifications
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-mono font-medium">
                NPTEL SWAYAM &amp; Workshops
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {certificationsData.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 space-y-1.5 hover:border-cyan-500/30 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between font-bold text-slate-950 dark:text-white text-sm sm:text-base">
                  <span>{item.title}</span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-100 dark:bg-emerald-500/20 text-emerald-950 dark:text-emerald-300 font-extrabold">
                    {item.score}
                  </span>
                </div>
                <p className="text-xs text-slate-800 dark:text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Research & Publications */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 border-t-4 border-t-blue-600 dark:border-t-blue-500 border border-slate-200 dark:border-slate-800/80 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-950 dark:text-white">
                Research &amp; Papers
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-mono font-medium">
                International Conferences / Journals
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {publicationsData.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 flex items-start gap-3.5 hover:border-blue-500/30 transition-colors shadow-sm"
              >
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-800 dark:text-slate-400 mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Leadership & Activities */}
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6 border-t-4 border-t-emerald-600 dark:border-t-emerald-500 border border-slate-200 dark:border-slate-800/80 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-950 dark:text-white">
                Leadership
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-400 font-mono font-medium">
                Campus Governance &amp; Events
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {leadershipData.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-emerald-500/30 transition-colors shadow-sm"
              >
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-100 dark:bg-emerald-500/20 text-emerald-950 dark:text-emerald-300 font-bold">
                  {item.badge}
                </span>
                <h4 className="font-bold text-sm sm:text-base text-slate-950 dark:text-white">
                  {item.role}
                </h4>
                <p className="text-xs text-slate-800 dark:text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
