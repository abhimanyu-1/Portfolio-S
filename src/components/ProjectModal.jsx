import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md no-print"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-3xl max-w-2xl w-full p-6 sm:p-8 md:p-10 border border-cyan-500/40 shadow-2xl space-y-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Key Highlights &amp; Technical Architecture
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:brightness-110 transition-all shadow-md shadow-cyan-500/20"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
