import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// Revela a secao com fade + slide quando ela entra na viewport
export default function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null)

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 50,
      autoAlpha: 0,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    })
  })

  return ref
}
