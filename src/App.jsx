import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CredentialsSection from './components/CredentialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import Toast from './components/Toast';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState({ message: '', isVisible: false });

  // Handle Dark / Light Mode synchronization with HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.className = "bg-slate-950 text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300 min-h-screen relative overflow-x-hidden";
    } else {
      root.classList.remove('dark');
      document.body.className = "bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300 min-h-screen relative overflow-x-hidden";
    }
  }, [isDark]);

  const showToast = (message) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 3200);
  };

  const handleToggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      showToast(next ? "Switched to Dark Developer Theme" : "Switched to Light Theme");
      return next;
    });
  };

  return (
    <div className="relative min-h-screen">
      
      {/* Ambient Background Glows & Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Sticky Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content with Enhanced Margins and Spacious Layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-16 md:py-20 space-y-24 sm:space-y-32 md:space-y-36">
        
        {/* 1. Hero with Portrait and Profile Card */}
        <Hero onNotify={showToast} />

        {/* 2. Technical Skills Explorer */}
        <SkillsSection />

        {/* 3. Professional Experience & Airflow DAG Simulator */}
        <ExperienceSection onNotify={showToast} />

        {/* 4. Selected Projects */}
        <ProjectsSection onSelectProject={setSelectedProject} />

        {/* 5. Education & University Honors */}
        <EducationSection />

        {/* 6. Certifications, Research & Leadership */}
        <CredentialsSection />

        {/* 7. Contact Hub */}
        <ContactSection onNotify={showToast} />

      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Modals & Toast */}
      {isResumeModalOpen && (
        <ResumeModal onClose={() => setIsResumeModalOpen(false)} />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Toast message={toast.message} isVisible={toast.isVisible} />

    </div>
  );
}
