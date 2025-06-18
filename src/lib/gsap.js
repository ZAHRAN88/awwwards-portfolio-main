import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: "#smooth-content" // Tell ScrollTrigger to use our smooth container
});

// Global GSAP configuration
gsap.config({
  force3D: true,
  nullTargetWarn: false
});

export { gsap, ScrollTrigger, ScrollSmoother }; 