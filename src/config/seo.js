// SEO Configuration for Mohamed Ossama Zahran Portfolio
export const seoConfig = {
  // Basic site information
  siteName: "Mohamed Ossama Zahran Portfolio",
  siteUrl: "https://mohamedossama.dev",
  author: "Mohamed Ossama Zahran",
  
  // Default meta information
  defaultTitle: "Mohamed Ossama Zahran - Full-Stack Developer & Designer",
  titleTemplate: "%s | Mohamed Ossama Zahran",
  defaultDescription: "Passionate Full-Stack Developer specializing in Next.js, React, Three.js, and modern web technologies. I build scalable, high-performance applications from prototype to production with stunning 3D experiences.",
  
  // Keywords for SEO
  keywords: [
    "Mohamed Ossama Zahran",
    "Full-Stack Developer",
    "Frontend Developer", 
    "React Developer",
    "Next.js Developer",
    "Three.js",
    "3D Web Development",
    "JavaScript",
    "TypeScript",
    "Web Designer",
    "Portfolio",
    "Egypt Developer",
    "GSAP Animation",
    "UI/UX Designer",
    "Web Development",
    "Modern Web Technologies",
    "Responsive Design",
    "Performance Optimization",
    "Creative Developer"
  ],
  
  // Social media handles
  social: {
    twitter: "@mohamedossama",
    github: "https://github.com/mohamedossama",
    linkedin: "https://linkedin.com/in/mohamedossama",
    email: "palastinearabia@gmail.com",
    phone: "+20 109 208 8922"
  },
  
  // Open Graph default image
  ogImage: {
    url: "https://mohamedossama.dev/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Mohamed Ossama Zahran - Full-Stack Developer Portfolio"
  },
  
  // Theme colors
  themeColor: "#cfa355",
  backgroundColor: "#000000",
  
  // Structured data for different pages
  structuredData: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohamed Ossama Zahran",
      jobTitle: "Full-Stack Developer",
      description: "Passionate Full-Stack Developer specializing in Next.js, React, Three.js, and modern web technologies.",
      url: "https://mohamedossama.dev",
      image: "https://mohamedossama.dev/og-image.jpg",
      sameAs: [
        "https://github.com/mohamedossama",
        "https://linkedin.com/in/mohamedossama",
        "https://twitter.com/mohamedossama"
      ],
      knowsAbout: [
        "JavaScript",
        "TypeScript", 
        "React",
        "Next.js",
        "Three.js",
        "Node.js",
        "Full-Stack Development",
        "Frontend Development",
        "Web Development",
        "3D Web Development",
        "UI/UX Design",
        "GSAP",
        "Framer Motion",
        "TailwindCSS"
      ],
      alumniOf: "Software Engineering",
      worksFor: {
        "@type": "Organization",
        "name": "Freelance Developer"
      },
      email: "palastinearabia@gmail.com",
      telephone: "+20 109 208 8922"
    },
    
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mohamed Ossama Zahran Portfolio",
      description: "Professional portfolio showcasing full-stack development projects and 3D web experiences",
      url: "https://mohamedossama.dev",
      author: {
        "@type": "Person",
        name: "Mohamed Ossama Zahran"
      },
      inLanguage: "en-US",
      copyrightYear: new Date().getFullYear(),
      genre: "Portfolio"
    }
  },
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: "Mohamed Ossama Zahran - Full-Stack Developer & Designer",
      description: "Passionate Full-Stack Developer specializing in Next.js, React, Three.js, and modern web technologies. I build scalable, high-performance applications from prototype to production with stunning 3D experiences.",
      path: "/",
      priority: 1.0
    },
    services: {
      title: "Services - Full-Stack Development & 3D Web Experiences",
      description: "Professional web development services including React/Next.js development, 3D web experiences with Three.js, UI/UX design, and modern web architecture solutions.",
      path: "/#services",
      priority: 0.8
    },
    about: {
      title: "About Mohamed Ossama Zahran - Full-Stack Developer",
      description: "Learn about Mohamed Ossama Zahran, a passionate full-stack developer with expertise in modern web technologies, 3D development, and creating high-performance applications.",
      path: "/#about", 
      priority: 0.8
    },
    work: {
      title: "Portfolio Projects - Modern Web Applications & 3D Experiences",
      description: "Explore my portfolio of modern web applications, 3D interactive experiences, and full-stack projects built with React, Next.js, Three.js, and cutting-edge technologies.",
      path: "/#work",
      priority: 0.9
    },
    contact: {
      title: "Contact Mohamed Ossama Zahran - Full-Stack Developer",
      description: "Get in touch for web development projects, consultations, or collaborations. Specializing in React, Next.js, Three.js, and modern web technologies.",
      path: "/#contact",
      priority: 0.7
    }
  }
};

// Helper function to generate page-specific SEO props
export const getPageSEO = (pageKey) => {
  const page = seoConfig.pages[pageKey];
  if (!page) return seoConfig;
  
  return {
    ...seoConfig,
    title: page.title,
    description: page.description,
    url: `${seoConfig.siteUrl}${page.path}`,
    canonical: `${seoConfig.siteUrl}${page.path}`
  };
};

// Helper function to generate keywords string
export const getKeywordsString = (additionalKeywords = []) => {
  return [...seoConfig.keywords, ...additionalKeywords].join(", ");
}; 