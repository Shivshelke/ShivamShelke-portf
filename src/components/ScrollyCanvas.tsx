'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Overlay from './Overlay'

const FRAME_COUNT = 120

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0
    
    // Small optimization using Map or directly Array
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = `/sequence/frame_${i.toString().padStart(3, '0')}_delay-0.066s.png`
      img.onload = () => {
        loadedCount++
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages)
        }
      }
      loadedImages.push(img)
    }
  }, [])
  
  const drawFrame = useCallback((index: number) => {
    if (images.length === 0 || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const img = images[index]
    if (!img || !img.complete) return
    
    // Set internal resolution just-in-time
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
       canvas.width = window.innerWidth
       canvas.height = window.innerHeight
    }

    // Crop out bottom 5.5% to completely hide the "Veo" watermark
    const croppedHeight = img.height * 0.945
    
    // Simulate standard object-fit: cover 
    const hRatio = canvas.width / img.width
    const vRatio = canvas.height / croppedHeight
    const ratio = Math.max(hRatio, vRatio)
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2
    const centerShift_y = (canvas.height - croppedHeight * ratio) / 2
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(
      img,
      0, 0, img.width, croppedHeight,
      centerShift_x, centerShift_y, img.width * ratio, croppedHeight * ratio
    )
  }, [images])

  // Update canvas on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
     if (images.length === FRAME_COUNT) {
        const frameIndex = Math.min(
           FRAME_COUNT - 1,
           Math.floor(latest * FRAME_COUNT)
        )
        // Framer Motion automatically throttles this gracefully via rAFs internally
        drawFrame(frameIndex)
     }
  })

  // Initial render when images finish loading & Handle Resizing
  useEffect(() => {
    if (images.length === FRAME_COUNT) {
       // Force draw first frame
       drawFrame(0)
       
       const handleResize = () => {
         drawFrame(Math.min(FRAME_COUNT - 1, Math.floor(scrollYProgress.get() * FRAME_COUNT)))
       }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
     }
  }, [images, scrollYProgress, drawFrame])

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#0b0d12]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Hide canvas slightly until images preload, or standard fade-in */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            images.length === FRAME_COUNT ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.55)_70%)]" />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        
        {/* Futuristic Cyberpunk Dot Matrix Grid Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 z-[3] opacity-[0.22]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Premium Cinematic Film Grain Texture Overlay */}
        <div className="pointer-events-none absolute inset-0 z-[4] cinematic-grain opacity-[0.045] mix-blend-overlay" />
        
        {/* Loading state optionally */}
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 z-30 flex items-center justify-center text-white/60 text-sm italic backdrop-blur-[1px]">
            Loading sequence... {Math.round((images.length / FRAME_COUNT) * 100)}%
          </div>
        )}

        {/* Overlay Container */}
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
          <Overlay progress={scrollYProgress} />
        </div>
      </div>
    </div>
  )
}
