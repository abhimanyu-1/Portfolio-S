import React, { useEffect } from 'react';
import { X, Printer, FileCheck, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import portraitImg from '../assets/portrait.png';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md no-print"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Controls */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white text-sm sm:text-base">
              ATS-Friendly Single-Page Summary — {personalInfo.name}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500 text-slate-950 font-bold hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 text-sm leading-relaxed">
          
          {/* Header with Portrait and Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-b border-slate-700 pb-6">
            <div className="flex items-center gap-4">
              <img
                src={portraitImg}
                alt={personalInfo.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-cyan-500/40 shadow-md"
              />
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {personalInfo.name.toUpperCase()}
                </h2>
                <p className="font-mono text-xs sm:text-sm text-cyan-400 font-semibold tracking-wide">
                  DATA ENGINEER | PYTHON | PYSPARK | GOOGLE CLOUD | APACHE AIRFLOW
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1 font-mono">
                  <span>{personalInfo.location}</span>
                  <span>•</span>
                  <span>{personalInfo.phone}</span>
                  <span>•</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 hover:text-white flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 hover:text-white flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="font-mono text-xs uppercase text-cyan-400 font-bold mb-2 tracking-wider">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h4 className="font-mono text-xs uppercase text-cyan-400 font-bold mb-2.5 tracking-wider">
              Professional Experience
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white text-xs sm:text-sm">
                <span>
                  Tata Consultancy Services (TCS) — Software Engineer / Data Engineering (Bengaluru, India)
                </span>
                <span className="text-cyan-400 font-mono text-xs">
                  June 2025 – Present
                </span>
              </div>
              <p className="text-xs text-slate-400 italic">
                Client: American Express — GenAI Pipeline Development &amp; Operations
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>
                  Working on a GenAI project for the American Express client, contributing to data engineering and pipeline-related development and support.
                </li>
                <li>
                  Developed and maintained Python/PySpark data-processing components and workflows involving data ingestion, transformation, and validation.
                </li>
                <li>
                  Created unit tests using Pytest, mocks, and patching; improved test coverage of <code className="text-cyan-300 font-mono">cs2dr_data_pull.py</code> to <strong>98.5%</strong>.
                </li>
                <li>
                  Added and maintained tests for CECL and IFRS9 variance modules and raised pull requests for code changes.
                </li>
                <li>
                  Consolidated US and international CCAR availability check DAGs into a single configurable DAG to reduce duplicated workflow logic.
                </li>
                <li>
                  Worked with Google Cloud services and BigQuery, including SQL queries and updates to data/configuration tables; supported DAG monitoring and debugging.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h4 className="font-mono text-xs uppercase text-cyan-400 font-bold mb-2 tracking-wider">
              Technical Skills Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <strong className="text-white font-mono">Programming:</strong> Python, SQL, Java, C, C++, PySpark
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <strong className="text-white font-mono">Cloud &amp; Data:</strong> Google Cloud Platform (GCP), BigQuery, Cloud Storage (GCS), Dataproc, Pub/Sub
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <strong className="text-white font-mono">Data Engineering:</strong> Data Ingestion, ETL Pipelines, Data Transformation, Data Validation, SQL Development
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <strong className="text-white font-mono">Orchestration:</strong> Apache Airflow, Configurable DAGs, Task Dependencies, Scheduling, Workflow Monitoring
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <strong className="text-white font-mono">Testing &amp; Quality:</strong> Pytest, Mocking, Patching, 98.5% Test Coverage, Debugging, Code Refactoring
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                <strong className="text-white font-mono">Web &amp; Database:</strong> HTML, CSS, MySQL
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-mono text-xs uppercase text-cyan-400 font-bold mb-2 tracking-wider">
              Education &amp; University Honors
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <strong className="text-white">Master of Computer Applications (MCA)</strong> — Lourdes Matha College of Science and Technology, Kuttichal
                </div>
                <div className="text-cyan-400 font-mono font-semibold">
                  2022 – 2024 | CGPA: 9.44/10 (5th Rank, KTU)
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <strong className="text-white">Bachelor of Computer Applications (BCA)</strong> — Christ Nagar College, Maranalloor
                </div>
                <div className="text-cyan-400 font-mono font-semibold">
                  2019 – 2022 | 84.6% (4th Rank, Kerala Univ.)
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
