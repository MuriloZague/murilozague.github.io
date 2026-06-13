import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Cursor customizado: ponto + anel com atraso, expande sobre elementos interativos
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current!
    const ring = ringRef.current!
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 })

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3, overwrite: 'auto' })
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element && el.closest('a, button, img, [data-cursor]')

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        gsap.to(ring, { scale: 1.8, backgroundColor: 'rgba(67,217,173,0.08)', duration: 0.3 })
        gsap.to(dot, { scale: 0.5, duration: 0.3 })
      }
    }
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        gsap.to(ring, { scale: 1, backgroundColor: 'rgba(67,217,173,0)', duration: 0.3 })
        gsap.to(dot, { scale: 1, duration: 0.3 })
      }
    }
    const onLeave = () => gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 })

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  })

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-emerald-300"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-emerald-300/50"
        aria-hidden="true"
      />
    </>
  )
}
