'use client'

import { Mail, ExternalLink, Code, Sparkles, Award, Shield, CheckCircle } from 'lucide-react'

// Custom SVG Icons for social links
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
)

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
)

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
)

const skills = [
  { name: 'Python', color: 'from-yellow-400 to-amber-500', glow: 'rgba(245,158,11,0.3)' },
  { name: 'AI/ML', color: 'from-blue-500 to-indigo-500', glow: 'rgba(59,130,246,0.3)' },
  { name: 'Web Design', color: 'from-purple-500 to-pink-500', glow: 'rgba(168,85,247,0.3)' },
  { name: 'Flutter', color: 'from-cyan-400 to-blue-500', glow: 'rgba(34,211,238,0.3)' },
  { name: 'Firebase', color: 'from-orange-500 to-red-500', glow: 'rgba(249,115,22,0.3)' },
  { name: 'Branding', color: 'from-pink-500 to-purple-600', glow: 'rgba(236,72,153,0.3)' },
  { name: 'UI/UX', color: 'from-indigo-400 to-purple-500', glow: 'rgba(129,140,248,0.3)' },
  { name: 'Google Cloud', color: 'from-blue-400 to-sky-500', glow: 'rgba(56,189,248,0.3)' },
  { name: 'Gemini API', color: 'from-violet-400 to-fuchsia-500', glow: 'rgba(139,92,246,0.3)' },
  { name: 'ADK Agents', color: 'from-teal-400 to-emerald-500', glow: 'rgba(20,184,166,0.3)' }
]

const certifications = [
  {
    category: 'AI AGENT ENGINEERING (GCP ADK)',
    title: 'Agent Development Kit (ADK) Mastery',
    subtitle: "Comprehensive credentials validating advanced autonomous agent orchestration using Google's Developer Frameworks:",
    bullets: [
      'Engineer AI Agents with ADK — Earned May 14, 2026',
      'Build Your First Agent & Build Agents with ADK — Earned May 10, 2026',
      'Agent Fundamentals & Intro to AI Agents — Earned May 6, 2026'
    ]
  },
  {
    category: 'DEEPMIND & LARGE LANGUAGE MODELS',
    title: 'Google DeepMind & SLM Architect',
    subtitle: 'Advanced parameters representing semantic data tokens and custom parameter fine-tuning on Small Language Models:',
    bullets: [
      'Google DeepMind: 02 Represent Your Language Data — Earned May 19, 2026',
      'Google DeepMind: 01 Build Your Own Small Language Model — Earned May 6, 2026',
      'Configure Gemini Code Assist for Organizations — Earned May 7, 2026'
    ]
  },
  {
    category: 'MLOPS & ENTERPRISE SCALING',
    title: 'ML Operations & Model Scaling',
    subtitle: 'Engineering models deployment and active scaling on serverless computing structures with evaluation pipelines:',
    bullets: [
      'Deploy and Scale AI Models with Cloud Run — Earned May 21, 2026',
      'MLOps with Vertex AI: Model Evaluation — Earned May 4, 2026',
      'Machine Learning Operations (MLOps) for Generative AI'
    ]
  },
  {
    category: 'SCENARIOS & RESPONSIBLE AI',
    title: 'AI Boost Bites & NotebookLM Research',
    subtitle: 'Designing intelligent predictive workflows and contextual retrieval systems securely:',
    bullets: [
      'AI Boost Bites: Create ‘What If’ Scenarios with AI — Earned May 28, 2026',
      'Introduction to Responsible AI — Earned May 21, 2026',
      'AI Boost Bites: Intro to NotebookLM — Earned May 20, 2026',
      'AI Workspace Power-Ups & Personal Feedback Agents — Earned May 11, 2026'
    ]
  }
]


export default function Projects() {
  return (
    <div className="relative z-20 bg-[#06070a] border-t border-slate-900 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
      {/* Absolute Decorative Vector Mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />

      {/* 1. Projects Section */}
      <section id="projects-section" className="relative py-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-purple-400 uppercase mb-4 animate-float">
              <Sparkles className="w-3.5 h-3.5" /> Featured Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white font-sans uppercase">
              Core Projects
            </h2>
          </div>
          <p className="text-slate-400 text-base md:text-lg max-w-md font-light leading-relaxed">
            Case studies of optimized digital tools, systems architecture, and AI platforms built to deliver real-world impact.
          </p>
        </div>

        {/* Premium Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { val: '10+', label: 'Projects Built' },
            { val: '4L+', label: 'Target Users' },
            { val: 'AI & Cloud', label: 'Systems Builder' },
            { val: 'Premium', label: 'SaaS Products' }
          ].map((metric, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950/40 border border-slate-900/60 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-center hover:border-slate-800/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] select-none cursor-default"
            >
              <span className="text-2xl font-black bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent leading-none">
                {metric.val}
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 block">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Asymmetrical Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: VEXN (Featured Left - 7 Cols on desktop) */}
          <div 
            className="group relative lg:col-span-7 rounded-3xl bg-slate-950/40 border border-slate-900 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-slate-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between"
            style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.01), 0 10px 30px rgba(0,0,0,0.2)' }}
          >
            {/* Subtle blue background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at 10% 10%, rgba(59,130,246,0.08), transparent 50%)' }} />

            <div>
              {/* Premium Store Mockup */}
              <div className="w-full aspect-[16/10] bg-slate-950/80 rounded-2xl border border-slate-900/60 overflow-hidden relative mb-8 group-hover:border-blue-500/25 transition-all duration-500 select-none shadow-2xl">
                <div className="w-full h-8 bg-slate-900/40 border-b border-slate-950/95 flex items-center px-4 justify-between">
                  <span className="text-[9px] font-bold text-white tracking-widest font-mono">V E X N</span>
                  <div className="flex gap-2">
                    <span className="w-2.5 h-1 bg-slate-700 rounded-full" />
                    <span className="w-4 h-1 bg-slate-700 rounded-full" />
                  </div>
                </div>
                <div className="absolute inset-0 top-8 overflow-hidden w-full h-full">
                  <img 
                    src="/projects/vexn.png" 
                    alt="Vexn E-commerce Screenshot" 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'Razorpay', 'Tailwind', 'Firebase'].map((badge) => (
                  <span key={badge} className="text-[10px] font-bold tracking-wider text-slate-400 bg-slate-900/80 border border-slate-800/80 px-2.5 py-1 rounded-full uppercase">
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                VEXN
              </h3>
              <p className="text-slate-400 text-sm font-light mb-8 leading-relaxed max-w-lg">
                Luxury streetwear ecommerce platform featuring visual catalogues, razor-sharp fast payments, database inventories, and premium conversion UX.
              </p>
            </div>

            <div>
              <div className="w-full h-[1px] bg-slate-900/80 mb-6" />
              <a 
                href="https://vexn.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 group-hover:text-purple-300 transition-all uppercase"
              >
                <span>Visit Platform</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Card 2: SYNAPSE (Large Right - 5 Cols on desktop) */}
          <div 
            className="group relative lg:col-span-5 rounded-3xl bg-slate-950/40 border border-slate-900 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-slate-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between"
            style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.01), 0 10px 30px rgba(0,0,0,0.2)' }}
          >
            {/* Subtle purple background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at 10% 10%, rgba(236,72,153,0.08), transparent 50%)' }} />

            <div>
              {/* Premium Browser UI Mockup */}
              <div className="w-full aspect-[16/10] bg-slate-950/80 rounded-2xl border border-slate-900/60 overflow-hidden relative mb-8 group-hover:border-purple-500/25 transition-all duration-500 select-none shadow-2xl">
                <div className="w-full h-8 bg-slate-900/40 border-b border-slate-950/95 flex items-center px-4 gap-1.5 justify-start">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-[10px] text-slate-500 font-mono ml-4 tracking-wider truncate max-w-[150px]">sppupyq-synapse.vercel.app</span>
                </div>
                <div className="absolute inset-0 top-8 overflow-hidden w-full h-full">
                  <img 
                    src="/projects/synapse.png" 
                    alt="Synapse SPPU PYQ Portal Screenshot" 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Next.js', 'Firebase', 'Gemini AI', 'Tailwind'].map((badge) => (
                  <span key={badge} className="text-[10px] font-bold tracking-wider text-slate-400 bg-slate-900/80 border border-slate-800/80 px-2.5 py-1 rounded-full uppercase">
                    {badge}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                SYNAPSE
              </h3>
              <p className="text-slate-400 text-sm font-light mb-8 leading-relaxed">
                Free solved PYQ and study materials portal built for SPPU engineering students. Organizes previous years papers dynamically to help 4+ lakh university students pass exams easily.
              </p>
            </div>

            <div>
              <div className="w-full h-[1px] bg-slate-900/80 mb-6" />
              <a 
                href="https://sppupyq-synapse.vercel.app/#about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 group-hover:text-purple-300 transition-all uppercase"
              >
                <span>View Case Study</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Card 3: AI Content Automation (Wide Bottom Row - 12 Cols) */}
          <div 
            className="group relative lg:col-span-12 rounded-3xl bg-slate-950/40 border border-slate-900 p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-slate-800 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between"
            style={{ boxShadow: 'inset 0 0 30px rgba(255,255,255,0.01), 0 10px 30px rgba(0,0,0,0.2)' }}
          >
            {/* Subtle emerald background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at 10% 10%, rgba(16,185,129,0.06), transparent 50%)' }} />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Cyberpunk Automation Node Flow Mockup */}
              <div className="md:col-span-5 w-full bg-slate-950/80 rounded-2xl border border-slate-900/60 overflow-hidden relative group-hover:border-emerald-500/25 transition-all duration-500 select-none shadow-2xl min-h-[180px] flex items-center justify-center p-6">
                <div className="absolute inset-0 flex flex-col justify-center p-6 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono">Media Parser Running...</span>
                    </div>
                    <div className="w-[1.5px] h-6 bg-gradient-to-b from-emerald-500/40 to-transparent ml-4" />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono">Auto Visual Tagging Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Case Study copy */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Gemini API', 'ADK Agents', 'Automation'].map((badge) => (
                      <span key={badge} className="text-[10px] font-bold tracking-wider text-slate-400 bg-slate-900/80 border border-slate-800/80 px-2.5 py-1 rounded-full uppercase">
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                    AI Content Automation
                  </h3>
                  <p className="text-slate-400 text-sm font-light mb-8 leading-relaxed max-w-xl">
                    Intelligent visual parser and scheduler framework. Automates descriptive tags and cross-platform publishing parameters using small custom language models and secure agent loops.
                  </p>
                </div>

                <div>
                  <div className="w-full h-[1px] bg-slate-900/80 mb-6" />
                  <a 
                    href="https://github.com/Shivamshelke07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 group-hover:text-purple-300 transition-all uppercase"
                  >
                    <span>View Codebase</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Skills Section */}
      <section className="relative py-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-slate-900/50">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-blue-400 uppercase mb-4">
            <Code className="w-3.5 h-3.5" /> Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            Technical Skillset & Focus
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="relative group px-6 py-3.5 rounded-2xl bg-slate-950/50 border border-slate-900/80 hover:border-slate-800 text-slate-300 hover:text-white font-medium text-sm md:text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-default select-none"
              style={{
                boxShadow: `0 4px 20px rgba(0,0,0,0.1)`
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: `0 0 20px ${skill.glow}, inset 0 0 10px ${skill.glow}`
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Verified Certifications Section */}
      <section className="relative py-28 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto border-t border-slate-900/50">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-pink-400 uppercase mb-4">
            <Award className="w-3.5 h-3.5" /> Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Google Certifications
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 md:pl-16 space-y-12">
          {/* Vertical Timeline Axis Line */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-60" />

          {certifications.map((cert, index) => (
            <div key={index} className="relative group">
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[22px] md:-left-[38px] top-[32px] w-3 h-3 rounded-full bg-slate-950 border-2 border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.95)] z-10 group-hover:scale-125 transition-transform duration-300" />

              <div className="p-8 rounded-3xl bg-slate-950/40 border border-slate-900 hover:border-slate-800/80 transition-all duration-300 hover:bg-slate-950/50 backdrop-blur-xl flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <div>
                  <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-purple-400 uppercase font-mono">
                      {cert.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-400 backdrop-blur-md">
                      <Shield className="w-2.5 h-2.5" /> ACTIVE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                    {cert.subtitle}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {cert.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="w-full h-[1px] bg-slate-900/80 mb-4" />
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> verified credential
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-16 flex justify-center">
          <a
            href="https://www.skills.google/public_profiles/9d06d329-b801-4ba2-b6c5-cc1e676ece47"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:via-teal-500 hover:to-blue-500 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:-translate-y-0.5"
          >
            <CheckCircle className="w-5 h-5 text-white animate-pulse" />
            <span>Verify My Google Cloud Profile</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>


      {/* 4. Luxury Contact Section */}
      <section id="contact-section" className="relative py-28 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto border-t border-slate-900/50">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-950/60 to-slate-950/20 border border-slate-900 p-8 md:p-16 text-center backdrop-blur-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          <div className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.25em] text-pink-400 uppercase mb-6 font-mono">
              <Mail className="w-3.5 h-3.5" /> Connections
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 uppercase">
              Let&apos;s Build Something Incredible
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-12">
              Always open to premium web collaborations, research focus in AIML, or sharing creative insights. Let&apos;s get in touch.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto">
              <a
                href="mailto:shivshelke210@gmail.com"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <Mail className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium tracking-wide">Email</span>
              </a>
              <a
                href="https://github.com/shivshelke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <Github className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium tracking-wide">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shivshelke07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <Linkedin className="w-6 h-6 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium tracking-wide">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/shivamshelke07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
              >
                <Instagram className="w-6 h-6 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium tracking-wide">Instagram</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
