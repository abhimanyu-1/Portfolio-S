import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-900 border border-cyan-500 text-white shadow-2xl no-print">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-xs sm:text-sm font-mono tracking-wide">{message}</span>
    </div>
  );
}

