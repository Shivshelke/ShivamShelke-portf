import ScrollyCanvas from '@/components/ScrollyCanvas'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06070a] overflow-x-hidden">
      {/* Mobile-only view: Renders the custom light-themed HTML portfolio in an isolated fullscreen viewport */}
      <div className="block md:hidden fixed inset-0 w-full h-full z-50 bg-[#f8fafc] overflow-hidden">
        <iframe 
          src="/mobile.html" 
          className="w-full h-full border-0" 
          title="Shivam Shelke Mobile Portfolio"
        />
      </div>

      {/* Desktop-only view: Renders the premium scrollytelling 3D canvas portfolio */}
      <div className="hidden md:block">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_10%_10%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(900px_600px_at_90%_0%,rgba(59,130,246,0.12),transparent_55%)]" />
        <ScrollyCanvas />
        <Projects />
      </div>
    </main>
  )
}


