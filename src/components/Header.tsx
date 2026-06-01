'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [activeSection, setActiveSection] = useState('index')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: '// index', id: 'index', scrollPos: 0 },
    { label: '// bio', id: 'bio', scrollPos: 1.5 },
    { label: '// schematics', id: 'projects-section', isEl: true },
    { label: '// matrix', id: 'matrix-section', isEl: true },
    { label: '// verified', id: 'verified-section', isEl: true },
    { label: '// uplink', id: 'contact-section', isEl: true },
  ]

  const handleScroll = () => {
    const scrollY = window.scrollY
    const vh = window.innerHeight

    // Check which element is in viewport
    for (const item of [...navItems].reverse()) {
      if (item.isEl) {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= vh * 0.4) {
            setActiveSection(item.id)
            return
          }
        }
      } else {
        const targetScroll = (item.scrollPos ?? 0) * vh
        if (scrollY >= targetScroll - 100) {
          setActiveSection(item.id)
          return
        }
      }
    }
    setActiveSection('index')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateTo = (item: { label: string, id: string, scrollPos?: number, isEl?: boolean }) => {
    setMobileMenuOpen(false)
    if (item.isEl) {
      const el = document.getElementById(item.id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({
        top: (item.scrollPos ?? 0) * window.innerHeight,
        behavior: 'smooth',
      })
    }
  }


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#06070a]/60 border-b border-slate-950 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold text-white tracking-tight cursor-pointer hover:text-purple-400 transition-colors"
        >
          Shivam <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-extrabold">Shelke</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigateTo(item)}
              className={`text-sm font-medium transition-all py-2 border-b-2 hover:text-white uppercase tracking-wider ${
                activeSection === item.id 
                  ? 'text-purple-400 border-purple-500' 
                  : 'text-slate-400 border-transparent hover:border-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Nav Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#06070a]/95 border-b border-slate-900 px-6 py-8 flex flex-col gap-6 backdrop-blur-xl animate-fade-in shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigateTo(item)}
              className={`text-left text-lg font-semibold uppercase tracking-wider py-2 border-l-4 pl-4 transition-all ${
                activeSection === item.id 
                  ? 'text-purple-400 border-purple-500' 
                  : 'text-slate-400 border-transparent hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
