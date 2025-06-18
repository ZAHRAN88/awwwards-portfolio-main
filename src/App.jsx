import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import Preloader from "./components/Preloader";
import Tools from "./sections/Tools";
import NotFound from "./components/NotFound";
import FollowingCursor from "./components/FollowingCursor";
import Dashboard from "./components/Dashboard/Dashboard";
import SEO from "./components/SEO";

const MainContent = () => {
  return (
    <>
      <SEO pageKey="home" />
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Tools />
      <Works />
      <ContactSummary />
      <Contact /> 
    </>
  );
};

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsReady(true);
      }, 200);
    }
  }, [progress]);

  return (
    <Router>
      <ReactLenis 
        root 
        className="relative w-screen min-h-screen overflow-x-auto"
        options={{
          lerp: 0.07,
          duration: 1.8,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 0.7,
          touchMultiplier: 2,
          syncTouch: false,
          syncTouchLerp: 0.075,
          touchInertiaMultiplier: 35,
          infinite: false,
          orientation: 'vertical',
          gestureOrientation: 'vertical'
        }}
      >
        {!isReady && <Preloader />}
        <FollowingCursor />
        <div
          className={`${
            isReady ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ReactLenis>
    </Router>
  );
};

export default App;
