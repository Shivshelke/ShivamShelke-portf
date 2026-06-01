'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Overlay from './Overlay'

const FRAME_COUNT = 120

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  
  // Preload images progressively into a useRef to prevent re-renders and lag
  useEffect(() => {
    const loadedImages = new Array(FRAME_COUNT)
    imagesRef.current = loadedImages
    let count = 0

    // 1. Load the first frame immediately for instant visual feedback
    const firstImg = new Image()
    firstImg.src = `/sequence/frame_000_delay-0.066s.png`
    firstImg.onload = () => {
      loadedImages[0] = firstImg
      setFirstFrameLoaded(true)
      count++
      setLoadedCount(count)
      
      // 2. Load the remaining frames in the background
      loadRemainingFrames()
    }
    firstImg.onerror = () => {
      // Fallback in case first frame fails
      setFirstFrameLoaded(true)
      loadRemainingFrames()
    }

    const loadRemainingFrames = () => {
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image()
        img.src = `/sequence/frame_${i.toString().padStart(3, '0')}_delay-0.066s.png`
        
        img.onload = () => {
          loadedImages[i] = img
          count++
          
          // Throttle state updates: Only re-render UI progress every 4 frames (or at 100%) to keep main thread 100% jank-free
          if (count % 4 === 0 || count === FRAME_COUNT) {
            setLoadedCount(count)
          }
        }
        
        img.onerror = () => {
          count++
          if (count % 4 === 0 || count === FRAME_COUNT) {
            setLoadedCount(count)
          }
        }
      }
    }
  }, [])
  
  const drawFrame = useCallback((index: number) => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const images = imagesRef.current
    
    // Find the best available frame: closest loaded frame to the target index
    let img = images[index]
    if (!img || !img.complete) {
      // Fallback: search backwards for closest loaded frame
      let fallbackIndex = index
      while (fallbackIndex >= 0 && (!images[fallbackIndex] || !images[fallbackIndex].complete)) {
        fallbackIndex--
      }
      
      // If no backward frame, search forward
      if (fallbackIndex < 0) {
        fallbackIndex = index
        while (fallbackIndex < FRAME_COUNT && (!images[fallbackIndex] || !images[fallbackIndex].complete)) {
          fallbackIndex++
        }
      }
      
      img = images[fallbackIndex]
    }
    
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
  }, [])

  // Update canvas on scroll (super fast direct draw, no React cycles triggered)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
     const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
     )
     drawFrame(frameIndex)
  })

  // Initial render when first image finishes loading & Handle Resizing
  useEffect(() => {
    if (firstFrameLoaded) {
       drawFrame(0)
       
       const handleResize = () => {
         drawFrame(Math.min(FRAME_COUNT - 1, Math.floor(scrollYProgress.get() * FRAME_COUNT)))
       }
       window.addEventListener('resize', handleResize)
       return () => window.removeEventListener('resize', handleResize)
     }
  }, [firstFrameLoaded, scrollYProgress, drawFrame])

  const loadedPercentage = Math.round((loadedCount / FRAME_COUNT) * 100)

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#0b0d12]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Canvas fades in as soon as the first frame is ready */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            firstFrameLoaded ? 'opacity-100' : 'opacity-0'
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
        
        {/* Glassmorphism Loader for initial frame (very fast) */}
        {!firstFrameLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white bg-[#06070a] transition-opacity duration-500">
            <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4" />
            <div className="text-white/60 text-sm tracking-widest uppercase">Initializing...</div>
          </div>
        )}

        {/* Subtle, beautiful background download progress indicator */}
        {loadedCount < FRAME_COUNT && firstFrameLoaded && (
          <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 px-4 py-2 bg-black/60 border border-white/10 backdrop-blur-md rounded-full text-xs text-white/70 shadow-lg animate-pulse">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
            <span>Caching animations: {loadedPercentage}%</span>
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
