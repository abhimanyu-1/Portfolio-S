import React from 'react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = 2026;

export default function Footer({ onOpenResume }) {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 py-10 mt-20 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-400 font-semibold">
        <div>
          © {CURRENT_YEAR} {personalInfo.name.toUpperCase()} • {personalInfo.location}
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={onOpenResume}
            className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors cursor-pointer"
          >
            ATS Resume View
          </button>
          <span>•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
