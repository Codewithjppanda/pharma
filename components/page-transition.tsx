"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { usePathname } from "next/navigation"

export default function PageTransition() {
  const pathname = usePathname()
  const transitionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip transition on first render
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const ctx = gsap.context(() => {
      setIsTransitioning(true)

      // Initial state
      gsap.set(transitionRef.current, {
        opacity: 0,
        scale: 0.8,
      })
      gsap.set(textRef.current, {
        opacity: 0,
        y: 20,
      })

      // Animate in
      gsap.to(transitionRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })

      // Animate text
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      })

      // Hold for 2 seconds
      gsap.delayedCall(2, () => {
        // Animate out
        gsap.to([transitionRef.current, textRef.current], {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setIsTransitioning(false)
          },
        })
      })
    })

    return () => ctx.revert()
  }, [pathname])

  if (!isTransitioning) return null

  return (
    <div
      ref={transitionRef}
      className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-800 z-[100] flex items-center justify-center"
    >
      <div className="text-center">
        <div
          ref={textRef}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Happy Dental
        </div>
        <div className="text-white/80 text-lg md:text-xl">
          Loading...
        </div>
      </div>
    </div>
  )
} 