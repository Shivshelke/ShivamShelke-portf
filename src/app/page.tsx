import ScrollyCanvas from '@/components/ScrollyCanvas'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06070a]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_10%_10%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(900px_600px_at_90%_0%,rgba(59,130,246,0.12),transparent_55%)]" />
      <ScrollyCanvas />
      <Projects />
    </main>
  )
}


