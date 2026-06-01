import { useState } from 'react'
import { motion, MotionValue, useTransform, useMotionValueEvent } from 'framer-motion'
import { ArrowRight, Mail, Sparkles, Target, Compass } from 'lucide-react'

export default function Overlay({ progress }: { progress: MotionValue<number> }) {
  const [activePhase, setActivePhase] = useState(1)

  // Sync activePhase dynamically on scroll progress
  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 0.22) {
      if (activePhase !== 1) setActivePhase(1)
    } else if (latest >= 0.22 && latest < 0.58) {
      if (activePhase !== 2) setActivePhase(2)
    } else {
      if (activePhase !== 3) setActivePhase(3)
    }
  })

  // Phase 1 (Hero): 0% to 16%
  const opacity1 = useTransform(progress, [0, 0.10, 0.16], [1, 1, 0])
  const y1 = useTransform(progress, [0, 0.16], [0, -120])
  const scale1 = useTransform(progress, [0, 0.16], [1, 0.95])

  // Phase 2 (About): 28% to 54%
  const opacity2 = useTransform(progress, [0.28, 0.34, 0.48, 0.54], [0, 1, 1, 0])
  const y2 = useTransform(progress, [0.28, 0.54], [120, -120])
  const scale2 = useTransform(progress, [0.28, 0.38, 0.54], [0.95, 1, 0.95])

  // Phase 3 (Mission): 66% to 90%
  const opacity3 = useTransform(progress, [0.66, 0.72, 0.84, 0.90], [0, 1, 1, 0])
  const y3 = useTransform(progress, [0.66, 0.90], [120, -120])
  const scale3 = useTransform(progress, [0.66, 0.76, 0.90], [0.95, 1, 0.95])


  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Background Decorative Neon Glows */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Section 1: Hero */}
      {activePhase === 1 && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center md:items-start justify-center p-6 md:p-12 md:pl-20 lg:pl-28 text-center md:text-left"
          style={{ opacity: opacity1, y: y1, scale: scale1 }}
        >
          <div className="max-w-2xl px-4 select-none">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-950/20 px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-blue-400/90 backdrop-blur-md mb-6 sm:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>AI/ML ENGINEER • CLOUD DEVELOPER • FULL-STACK BUILDER</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight sm:tracking-tighter mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] font-sans uppercase leading-none whitespace-nowrap">
              SHIVAM SHELKE
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-purple-400 font-semibold tracking-wide mb-6 sm:mb-8 text-balance leading-relaxed">
              AI/ML Engineer • Cloud Developer • Full-Stack Builder
            </p>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl mb-10 font-normal leading-relaxed text-balance">
              Building intelligent web platforms, academic tools, and AI-powered systems with modern design, scalable architecture, and real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center pointer-events-auto">
              <button
                onClick={() => scrollToSection('projects-section')}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_35px_rgba(147,51,234,0.45)] hover:-translate-y-1 transform active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-950/60 hover:bg-slate-900/80 border border-slate-800/80 hover:border-slate-600 text-slate-200 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:-translate-y-1 transform active:scale-95 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </button>
            </div>

          </div>
        </motion.div>
      )}

      {/* Section 2: About (RIGHT ALIGNED ON DESKTOP, CENTERED ON MOBILE) */}
      {activePhase === 2 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center md:justify-end p-4 sm:p-6 md:p-12 md:pr-6 lg:pr-10"
          style={{ opacity: opacity2, y: y2, scale: scale2 }}
        >
          <div className="max-w-md w-full md:mr-4 lg:mr-8 select-none">
            {/* Main About Card containing both Bio and Stats Grid */}
            <div className="bg-slate-950/45 border border-slate-800/60 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-purple-500/20 transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.65)]">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <Compass className="w-5 h-5 text-purple-400 animate-spin-slow" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">ABOUT ME</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-white mb-4 tracking-tight text-center md:text-left">
                Building AI, Products & Digital Experiences.
              </h2>

              <p className="text-slate-300 text-sm md:text-[15px] font-normal leading-relaxed text-center md:text-left text-balance mb-6">
                {"I'm Shivam Shelke, an AI/ML Engineering student and full-stack developer focused on building real-world digital products. My work spans AI-powered applications, academic platforms, automation systems, and premium web experiences designed for performance, scalability, and impact."}
              </p>

              {/* 2x2 Grid of Stat Cards inside */}
              <div className="grid grid-cols-2 gap-3.5 pt-6 border-t border-slate-800/50">
                {/* Card 1 */}
                <div className="bg-slate-950/30 border border-slate-800/40 rounded-2xl p-4 transition-all duration-300 hover:bg-slate-950/60 hover:border-purple-500/20 flex flex-col justify-between min-h-[90px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">🚀 Projects</span>
                  <span className="text-2xl font-black text-white leading-none mt-2">5+</span>
                </div>
                {/* Card 2 */}
                <div className="bg-slate-950/30 border border-slate-800/40 rounded-2xl p-4 transition-all duration-300 hover:bg-slate-950/60 hover:border-purple-500/20 flex flex-col justify-between min-h-[90px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">☁️ Cloud & AI</span>
                  <div className="flex flex-col text-[10px] font-semibold text-purple-300 mt-2 gap-0.5 leading-tight">
                    <span>Google Cloud</span>
                    <span>Gemini AI</span>
                    <span>Firebase</span>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-slate-950/30 border border-slate-800/40 rounded-2xl p-4 transition-all duration-300 hover:bg-slate-950/60 hover:border-purple-500/20 flex flex-col justify-between min-h-[90px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">💻 Tech Stack</span>
                  <div className="flex flex-col text-[10px] font-semibold text-slate-300 mt-2 gap-0.5 leading-tight">
                    <span>Python • Next.js</span>
                    <span>Flutter • React</span>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="bg-slate-950/30 border border-slate-800/40 rounded-2xl p-4 transition-all duration-300 hover:bg-slate-950/60 hover:border-purple-500/20 flex flex-col justify-between min-h-[90px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">🎯 Focus</span>
                  <div className="flex flex-col text-[10px] font-semibold text-slate-300 mt-2 gap-0.5 leading-tight">
                    <span>AI / ML</span>
                    <span>Full-Stack Dev</span>
                    <span>Automation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {/* Section 3: Mission (LEFT ALIGNED ON DESKTOP, CENTERED ON MOBILE) */}
      {activePhase === 3 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center md:justify-start p-4 sm:p-6 md:p-12 md:pl-20 lg:pl-28"
          style={{ opacity: opacity3, y: y3, scale: scale3 }}
        >
          <div className="max-w-md w-full bg-slate-950/45 border border-slate-800/60 rounded-3xl p-6 md:p-8 backdrop-blur-xl hover:border-blue-500/20 transition-all duration-500 select-none shadow-[0_30px_60px_rgba(0,0,0,0.65)] md:ml-4 lg:ml-8">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <Target className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">MY MISSION</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-white mb-4 tracking-tight text-center md:text-left text-balance">
              Building Technology That Creates Real Impact.
            </h2>

            <p className="text-slate-300 text-sm md:text-[15px] font-normal leading-relaxed mb-6 text-center md:text-left text-balance">
              My mission is to leverage AI, cloud technologies, and software engineering to build products that solve real-world problems. I strive to continuously learn, innovate, and develop leadership skills while creating solutions that positively impact students, businesses, and communities.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent rounded-full mx-auto md:mx-0 shadow-[0_0_12px_rgba(59,130,246,0.5)] animate-pulse" />
          </div>
        </motion.div>
      )}

      {/* Heads-Up Display Floating Sidebar Navigation (Desktop only) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 items-center pointer-events-auto select-none">
        {[1, 2, 3].map((phase) => (
          <button
            key={phase}
            onClick={() => {
              const targets = [0, 0.38, 0.78]
              const targetScroll = targets[phase - 1] * (document.documentElement.scrollHeight - window.innerHeight)
              window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
              })
            }}
            className="group relative flex items-center justify-end h-8 w-8"
          >
            {/* Tooltip */}
            <span className="absolute right-10 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap bg-slate-950/95 border border-slate-800/80 px-2.5 py-1.5 rounded-lg backdrop-blur-md shadow-2xl">
              {phase === 1 ? 'Start / Hero' : phase === 2 ? 'About Shivam' : 'My Mission'}
            </span>
            
            {/* Indicator text (01, 02, 03) */}
            <span className={`absolute right-6 text-[9px] font-bold tracking-wider mr-2 opacity-35 group-hover:opacity-75 transition-opacity ${
              activePhase === phase ? 'text-purple-400 opacity-80' : 'text-slate-500'
            }`}>
              0{phase}
            </span>

            {/* Glowing active indicator dot */}
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 border ${
              activePhase === phase
                ? 'bg-purple-500 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.95)] scale-125'
                : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:scale-110'
            }`} />
          </button>
        ))}
      </div>
    </>
  )
}

