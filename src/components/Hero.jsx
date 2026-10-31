import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Copy, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Award, 
  Medal, 
  Layers, 
  Sparkles, 
  Check, 
  Terminal, 
  ArrowRight
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';
import { personalInfo, headlineRoles } from '../data/portfolioData';
import portraitImg from '../assets/portrait.png';

export default function Hero({ onNotify }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = headlineRoles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setCharIndex(prev => prev + 1);
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex(prev => prev - 1);
        }, 40);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % headlineRoles.length);
        }, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      onNotify('Email address copied to clipboard!');
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
      onNotify('Phone number copied to clipboard!');
    }
  };

  return (
    <section id="hero" className="pt-8 sm:pt-14 md:pt-18 pb-12 sm:pb-16 scroll-mt-28">
      {/* Top Split: Intro & Portrait Arrangement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Intro, Roles, Summary & CTAs */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-300 shadow-md shadow-cyan-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-medium tracking-wide">
              Software Engineer / Data Engineering @ TCS • Bengaluru, India
            </span>
          </div>

          {/* Name & Animated Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] dark:text-white text-slate-900">
              Shyamaprasad <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400">M. S.</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-2.5 text-lg sm:text-2xl font-mono text-slate-600 dark:text-slate-300 min-h-[2.5rem]">
              <span className="text-cyan-500 font-bold">&gt;</span>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                {headlineRoles[roleIndex].substring(0, charIndex)}
              </span>
              <span className="cursor-blink text-cyan-400 font-bold">|</span>
            </div>
          </div>

          {/* Core Role Badges */}
          <div className="flex flex-wrap gap-2.5">
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/25">
              Data Engineer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/25">
              Python Developer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/25">
              PySpark
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/25">
              Google Cloud (GCP)
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/25">
              Apache Airflow
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-500/25">
              Pytest 98.5% Cov
            </span>
          </div>

          {/* Authentic Professional Summary */}
          <p id="about" className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Data Engineer / Python Developer with professional experience at{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">Tata Consultancy Services</strong>, 
            supporting data engineering work for an{' '}
            <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">American Express client GenAI project</strong>. 
            Hands-on experience with Python, SQL, PySpark, Google Cloud Platform, BigQuery, Dataproc, Cloud Storage, and Apache Airflow. 
            Experienced in developing and maintaining data pipelines, building and consolidating Airflow DAGs, writing unit tests with Pytest and mocks, 
            improving code coverage, and supporting data quality and production workflows. Strong academic record with an{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">MCA (9.44 CGPA; 5th Rank, Kerala Technical University)</strong> and{' '}
            <strong className="text-slate-900 dark:text-white font-semibold">BCA (4th Rank, Kerala University)</strong>.
          </p>

          {/* Quick Contact & Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#experience"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-size-200 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <GitBranch className="w-4 h-4" />
              <span>Explore Pipelines & Work</span>
            </a>

            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="inline-flex items-center gap-2.5 px-4 py-3.5 rounded-xl font-mono text-xs sm:text-sm glass-card hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 hover:scale-[1.02] transition-all"
              title="Click to copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-500" />}
              <span>{personalInfo.email}</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3.5 rounded-xl glass-card hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 hover:text-cyan-400 hover:scale-105 transition-all"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium glass-card hover:border-blue-500/50 text-slate-700 dark:text-slate-200 hover:text-blue-400 hover:scale-105 transition-all"
            >
              <LinkedInIcon className="w-4 h-4 text-blue-500" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium glass-card hover:border-slate-400 text-slate-700 dark:text-slate-200 hover:text-white hover:scale-105 transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          {/* Location & Phone Metadata */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-500" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-500" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                {personalInfo.phone}
              </a>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="text-xs text-cyan-500 hover:underline ml-1"
              >
                {copiedPhone ? '[Copied!]' : '[Copy]'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Well-Arranged Professional Portrait Showcase (Zero Overlapping) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md sm:max-w-lg">
            
            {/* Ambient Background Glow behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-75 -z-10"></div>
            
            {/* Main Portrait Card Container */}
            <div className="glass-card rounded-[2rem] p-5 sm:p-6 border border-cyan-500/30 shadow-2xl space-y-5">
              
              {/* 1. Header Bar: Identity & Role */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Data Engineer Portrait
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      Shyamaprasad M. S.
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-semibold shadow-sm">
                  TCS DE • GCP
                </span>
              </div>

              {/* 2. Photo Frame Container (Completely Clean & Unobscured) */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group">
                <img
                  src={portraitImg}
                  alt="Shyamaprasad M. S. - Data Engineer Portrait"
                  className="w-full h-auto aspect-[4/4.6] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                />
              </div>

              {/* 3. Dedicated Highlights with Complete Professional Sentences (No Truncation) */}
              <div className="space-y-3 pt-1">
                
                {/* Client Project Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                      Client Project
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                      Supporting data engineering for the <strong className="text-white font-semibold">American Express GenAI Project</strong> pipelines.
                    </p>
                  </div>
                </div>

                {/* Pytest Quality Gate Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                      Pytest Quality Gate
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                      Achieved <span className="text-emerald-400 font-mono">98.5% Unit Test Coverage</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* 4. Bottom Quick Action & Credential Bar */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>KTU Rank 5 • 9.44 CGPA</span>
                </div>
                <a
                  href="#contact"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold hover:translate-x-0.5 transition-transform"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Interactive Data Engineering Profile & Terminal Card Section with Better Margin */}
      <div className="mt-14 sm:mt-20">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-2xl relative overflow-hidden">
          
          {/* Terminal Window Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-xs sm:text-sm text-slate-400">
                shyam_profile_pipeline.py
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                STATUS: PRODUCTION READY
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                PYTEST: 98.5% COV
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Code / Config Preview Block */}
            <div className="lg:col-span-7 bg-slate-950/90 rounded-xl p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 border border-slate-800/80 overflow-x-auto">
              <div className="text-purple-400">from airflow import DAG</div>
              <div className="text-purple-400">from pyspark.sql import SparkSession</div>
              <div className="mt-2.5 text-slate-500"># Active Data Engineering Profile Configuration</div>
              <div><span className="text-cyan-400">engineer</span> = &#123;</div>
              <div className="pl-4 sm:pl-6"><span className="text-emerald-400">"name"</span>: <span className="text-amber-300">"Shyamaprasad M. S."</span>,</div>
              <div className="pl-4 sm:pl-6"><span className="text-emerald-400">"company"</span>: <span className="text-amber-300">"Tata Consultancy Services"</span>,</div>
              <div className="pl-4 sm:pl-6"><span className="text-emerald-400">"domain"</span>: <span className="text-amber-300">"AmEx Client GenAI Pipelines"</span>,</div>
              <div className="pl-4 sm:pl-6"><span className="text-emerald-400">"stack"</span>: [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"PySpark"</span>, <span className="text-amber-300">"BigQuery"</span>, <span className="text-amber-300">"Airflow"</span>],</div>
              <div className="pl-4 sm:pl-6"><span className="text-emerald-400">"unit_test_cov"</span>: <span className="text-cyan-300">98.5</span>, <span className="text-slate-500">// cs2dr_data_pull.py</span></div>
              <div className="pl-4 sm:pl-6"><span className="text-emerald-400">"dags"</span>: <span className="text-amber-300">"Consolidated US &amp; Intl CCAR"</span></div>
              <div>&#125;</div>
            </div>

            {/* Right: Key Metric Highlight Cards (2x2 Grid) with Ample Margins */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">98.5%</span>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Unit Test Coverage (<code className="text-cyan-400">cs2dr_data_pull.py</code>)
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                    9.44<span className="text-xs sm:text-sm text-slate-400 font-normal">/10</span>
                  </span>
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  MCA CGPA • 5th University Rank (KTU)
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400">84.6%</span>
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Medal className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  BCA Score • 4th University Rank (KU)
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-400">6+</span>
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Core Skill Domains in Cloud, PySpark &amp; Airflow
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
