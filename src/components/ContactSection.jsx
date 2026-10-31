import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Send, Check, Copy } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    subject: 'Data Engineering Opportunity',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      onNotify('Email address copied to clipboard!');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
      onNotify('Phone number copied to clipboard!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, org, subject, message } = formData;
    const fullSubject = encodeURIComponent(`${subject} — from ${name}${org ? ' (' + org + ')' : ''}`);
    const fullBody = encodeURIComponent(`Hi Shyamaprasad,\n\n${message}\n\nBest regards,\n${name}${org ? '\n' + org : ''}`);

    navigator.clipboard.writeText(`Subject: ${subject}\n\n${message}`);
    onNotify('Inquiry text copied to clipboard! Opening default email client...');
    window.location.href = `mailto:${personalInfo.email}?subject=${fullSubject}&body=${fullBody}`;
  };

  return (
    <section id="contact" className="scroll-mt-28 py-10 sm:py-16">
      <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-14 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Let's Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-slate-900 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Interested in discussing Data Engineering roles, Python/PySpark pipelines, Google Cloud architecture, or Apache Airflow workflows? Reach out directly.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-cyan-400 truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono bg-cyan-500/15 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all shrink-0 flex items-center gap-1.5 font-semibold"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-medium text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 transition-all flex items-center gap-1.5 font-semibold"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Profiles Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 text-sm font-medium text-white hover:text-blue-400 transition-all shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-500" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-500 text-sm font-medium text-white hover:text-cyan-400 transition-all shadow-sm"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub (@Shyam107)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Composer */}
          <div className="lg:col-span-6 bg-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-5 shadow-inner">
            <h3 className="font-bold text-lg sm:text-xl text-white flex items-center gap-2.5">
              <Send className="w-5 h-5 text-cyan-400" />
              <span>Compose Direct Inquiry</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="senderName" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Hiring Team"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="senderOrg" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="senderOrg"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="senderSubject" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Topic
                </label>
                <select
                  id="senderSubject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Data Engineering Opportunity">Data Engineering Opportunity</option>
                  <option value="Python / PySpark Developer Role">Python / PySpark Developer Role</option>
                  <option value="GCP & Airflow Pipeline Consultation">GCP & Airflow Pipeline Consultation</option>
                  <option value="General Networking">General Networking</option>
                </select>
              </div>

              <div>
                <label htmlFor="senderMessage" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="senderMessage"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Shyamaprasad, we'd love to connect regarding a Data Engineering opening..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors leading-relaxed"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2.5"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client &amp; Copy Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
