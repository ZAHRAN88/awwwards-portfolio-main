import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"

const Preloader = () => {
  const comp = useRef(null)
  const logoRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      let progressObj = { value: 0 }


      // Animate gradient background (using CSS class toggle)
      t1.to(".preloader-gradient", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      })
        // Logo pop-in and spin
        .fromTo(
          logoRef.current,
          { scale: 0.5, rotate: -90, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
        )
        // Loading bar animation (longer duration)
        .to(
          progressObj,
          {
            value: 100,
            duration: 3,
            ease: "power2.inOut",
            onUpdate: () => {
              setProgress(Math.round(progressObj.value))
            }
          },
          "-=0.7"
        )

        .from(
          "#preloader-title",
          { opacity: 0, xPercent: -80, letterSpacing: "0.1em", duration: 0.8, ease: "power1.out" },
          "-=2.2"
        )
        // Subtitle fade-in
        .from(
          "#preloader-subtitle",
          { opacity: 0, yPercent: 200, duration: 0.8, ease: "power1.out" },
          "-=0.5"
        )
        
        // Fade out everything
        .to(
          comp.current,
          {  yPercent: -100, duration: 1, ease: "power2.in", delay: 0.5 }
        )
       
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="preloader-container fixed inset-0 z-50 flex items-center justify-center"
      ref={comp}
      style={{ pointerEvents: 'none' }}
    >
      {/* Animated Gradient Background */}
      <div className="preloader-gradient absolute inset-0 opacity-100 bg-gray-950 transition-opacity duration-700" />
      <div className="relative z-10 flex flex-col items-center gap-6">
      
        {/* Main Title */}
        <h1
          id="preloader-title"
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-white font-spaceGrotesk text-center drop-shadow-lg"
        >
          Full Stack Developer
        </h1>
      
      <h2
        id="preloader-subtitle"
        className="text-5xl  font-semibold text-[#aa6e33] font-spaceGrotesk text-center mt-2"
      >
        Let's Dive In.
      </h2>

        {/* Subtitle */}

      </div>
    </div>
  )
}

export default Preloader