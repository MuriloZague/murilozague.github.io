import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Fundo 3D: campo de particulas com parallax de mouse/scroll + icosaedro wireframe
export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.matchMedia('(max-width: 920px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x010c15, 0.055)

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.z = 9

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // sprite circular com brilho suave (sem isso os pontos sao quadrados)
    const makeGlowTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = 64
      const ctx = canvas.getContext('2d')!
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.4, 'rgba(255,255,255,0.5)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 64, 64)
      return new THREE.CanvasTexture(canvas)
    }
    const glowTexture = makeGlowTexture()

    const makePoints = (count: number, color: number, size: number, spread: number) => {
      const positions = new Float32Array(count * 3)
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spread
        positions[i + 1] = (Math.random() - 0.5) * spread
        positions[i + 2] = (Math.random() - 0.5) * spread
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const material = new THREE.PointsMaterial({
        color,
        size,
        map: glowTexture,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      return new THREE.Points(geometry, material)
    }

    const emerald = makePoints(isMobile ? 500 : 1400, 0x43d9ad, 0.05, 24)
    const violet = makePoints(isMobile ? 250 : 700, 0x6d5dfc, 0.06, 28)
    scene.add(emerald, violet)

    const icoGeometry = new THREE.IcosahedronGeometry(2.6, 1)
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x43d9ad,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    })
    const ico = new THREE.Mesh(icoGeometry, icoMaterial)
    ico.position.set(isMobile ? 0 : 4.5, 1.5, -3)
    scene.add(ico)

    // sincroniza cores/fog/blending com o tema (claro x escuro)
    const emeraldMat = emerald.material as THREE.PointsMaterial
    const violetMat = violet.material as THREE.PointsMaterial
    const fog = scene.fog as THREE.FogExp2

    const applyTheme = () => {
      const light = document.documentElement.classList.contains('light')
      // fog acompanha o fundo: no claro evita "névoa" escura sobre os pontos
      fog.color.set(light ? 0xe9eef4 : 0x010c15)
      // aditivo some em fundo claro -> usa blending normal e tons mais escuros
      const blending = light ? THREE.NormalBlending : THREE.AdditiveBlending
      emeraldMat.color.set(light ? 0x0d9e74 : 0x43d9ad)
      violetMat.color.set(light ? 0x5b4bd6 : 0x6d5dfc)
      emeraldMat.blending = blending
      violetMat.blending = blending
      emeraldMat.opacity = light ? 0.55 : 0.8
      violetMat.opacity = light ? 0.55 : 0.8
      emeraldMat.needsUpdate = true
      violetMat.needsUpdate = true
      icoMaterial.color.set(light ? 0x0d9e74 : 0x43d9ad)
      icoMaterial.opacity = light ? 0.12 : 0.07
    }
    applyTheme()

    const themeObserver = new MutationObserver(applyTheme)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let frameId = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      if (!prefersReducedMotion) {
        emerald.rotation.y = t * 0.02
        emerald.rotation.x = Math.sin(t * 0.1) * 0.05
        violet.rotation.y = -t * 0.015
        violet.rotation.z = Math.cos(t * 0.08) * 0.04
        ico.rotation.x = t * 0.08
        ico.rotation.y = t * 0.12
      }

      // parallax suave do mouse e do scroll
      camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04
      camera.position.y += (-mouse.y * 0.8 - window.scrollY * 0.0012 - camera.position.y) * 0.04
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      themeObserver.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      emerald.geometry.dispose()
      ;(emerald.material as THREE.Material).dispose()
      violet.geometry.dispose()
      ;(violet.material as THREE.Material).dispose()
      icoGeometry.dispose()
      icoMaterial.dispose()
      glowTexture.dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
}
