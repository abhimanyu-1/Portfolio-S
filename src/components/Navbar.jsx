import React, { useState } from 'react';
import { FileText, Sun, Moon, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, isDark, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Experience & DAG", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 glass-card border-b border-slate-200 dark:border-slate-800/80 transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-emerald-600 dark:from-cyan-500 dark:via-blue-600 dark:to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-mono font-bold text-lg tracking-wider">
              SM
            </div>
          </div>
          <div>
            <span className="font-bold tracking-tight text-base sm:text-lg block leading-tight text-slate-950 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400 block mt-0.5 tracking-wide font-bold">
              DATA ENGINEER // GCP &amp; PYSPARK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Resume View & Download Button */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold bg-cyan-100 dark:bg-cyan-500/10 text-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all shadow-sm hover:shadow-cyan-500/20"
            title="View & Download Resume"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Dark or Light Mode"
            className="p-2.5 sm:p-3 rounded-xl glass-card text-slate-900 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all focus:outline-none"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Menu"
            className="xl:hidden p-2.5 rounded-xl glass-card text-slate-900 dark:text-slate-300 hover:text-cyan-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800/80 px-5 pt-4 pb-6 space-y-2 bg-slate-950/95 backdrop-blur-2xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" /> View &amp; Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
