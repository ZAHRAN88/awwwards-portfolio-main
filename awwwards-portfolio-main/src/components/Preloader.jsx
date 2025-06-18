import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const Preloader = () => {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      
      // Initial slide in with scale
      t1.from("#intro-slider", {
        xPercent: "-100",
        scale: 0.8,
        duration: 1.5,
        ease: "power3.out",
      })
        // Title animations with enhanced effects
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=50",
          scale: 0.8,
          rotation: -5,
          stagger: 0.4,
          duration: 0.8,
          ease: "back.out(1.7)",
        })
        // Enhanced exit animation
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=50",
          scale: 1.2,
          rotation: 5,
          stagger: 0.3,
          duration: 0.6,
          ease: "power2.in",
        })
        // Smooth exit with scale
        .to("#intro-slider", {
          xPercent: "-100",
          scale: 0.8,
          duration: 1.2,
          ease: "power3.inOut",
        })
        // Welcome text animation with enhanced effects
        .from("#welcome", {
          opacity: 0,
          scale: 0.5,
          rotation: -10,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        })
        // Add a subtle pulse effect to welcome text
        .to("#welcome", {
          scale: 1.05,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        })
        // Final exit animation - translate to top
        .to(".welcome-container", {
          yPercent: "-100",
          duration: 1,
          ease: "power2.in",
          delay: 0.2
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="preloader-container fixed inset-0 z-50" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl transform-gpu" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-9xl transform-gpu" id="title-2">
          Designer
        </h1>
        <h1 className="text-9xl transform-gpu" id="title-3">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center welcome-container">
        <h1
          id="welcome"
          className="text-9xl font-bold text-[#aa6e33] font-spaceGrotesk transform-gpu"
        >
          Let's Dive In.
        </h1>
      </div>
    </div>
  )
}

export default Preloader