'use client'

import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = e.clientX + 'px'
        spotlightRef.current.style.top = e.clientY + 'px'
        spotlightRef.current.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="fixed w-96 h-96 pointer-events-none opacity-0 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}
    />
  )
}
