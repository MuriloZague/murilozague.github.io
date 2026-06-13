import { useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type TiltProps = {
  children: ReactNode
  max?: number
}

// Efeito tilt 3D: o card inclina seguindo a posicao do cursor
export default function Tilt({ children, max = 7 }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = ref.current!
    gsap.set(el, { transformPerspective: 800 })
    const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' })
    const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      rotX(-py * max)
      rotY(px * max)
    }
    const onLeave = () => {
      rotX(0)
      rotY(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  })

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  )
}
