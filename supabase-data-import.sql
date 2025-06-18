-- Import all data from constants/index.js to Supabase
-- Run this script in your Supabase SQL Editor to populate all tables

-- Clear existing data (optional - uncomment if you want to start fresh)
-- DELETE FROM projects;
-- DELETE FROM services;
-- DELETE FROM tools;
-- DELETE FROM socials;

-- Insert all projects
INSERT INTO projects (name, description, href, image, bg_image, frameworks) VALUES
('Mobile Accessories E-commerce', 'An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.', '', '/assets/projects/mobile-accessories-store.jpg', '/assets/backgrounds/blanket.jpg', '[{"id": 1, "name": "React"}, {"id": 2, "name": "Next.js"}, {"id": 3, "name": "Node.js"}, {"id": 4, "name": "MongoDB"}, {"id": 5, "name": "Tailwind CSS"}]'),
('Plant Shop E-commerce', 'An online store specializing in rare and decorative plants with a clean, user-friendly interface.', '', '/assets/projects/plant-shop.jpg', '/assets/backgrounds/curtains.jpg', '[{"id": 1, "name": "React"}, {"id": 2, "name": "Next.js"}, {"id": 3, "name": "Stripe API"}, {"id": 4, "name": "Tailwind CSS"}]'),
('Apple Tech Marketplace', 'An e-commerce platform for Apple products and accessories with deals and category filtering.', '', '/assets/projects/apple-tech-store.jpg', '/assets/backgrounds/map.jpg', '[{"id": 1, "name": "Blazor"}, {"id": 2, "name": "ASP.NET Core"}, {"id": 3, "name": "SQL Server"}, {"id": 4, "name": "Bootstrap"}]'),
('Electronics & Gadgets Store', 'A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.', '', '/assets/projects/electronics-store.jpg', '/assets/backgrounds/poster.jpg', '[{"id": 1, "name": "Vue.js"}, {"id": 2, "name": "Laravel"}, {"id": 3, "name": "MySQL"}, {"id": 4, "name": "SCSS"}]'),
('Home Decor Marketplace', 'A curated collection of designer home decor items, including furniture and artisan vases.', '', '/assets/projects/home-decor-store.jpg', '/assets/backgrounds/table.jpg', '[{"id": 1, "name": "Angular"}, {"id": 2, "name": "Firebase"}, {"id": 3, "name": "GraphQL"}, {"id": 4, "name": "Material UI"}]'),
('Digital Game Store', 'A gaming platform featuring discounted titles, top sellers, and genre-based browsing.', '', '/assets/projects/game-store.jpg', '/assets/backgrounds/curtains.jpg', '[{"id": 1, "name": "Svelte"}, {"id": 2, "name": "Node.js"}, {"id": 3, "name": "MongoDB"}, {"id": 4, "name": "Chakra UI"}]');

-- Insert all services
INSERT INTO services (title, description, items) VALUES
('Frontend Development', 'Your digital presence deserves cutting-edge performance and stunning design. I build lightning-fast Next.js applications with server-side rendering, optimized performance, and pixel-perfect responsive interfaces that convert visitors into customers.', '[{"title": "Next.js Excellence", "description": "(App Router, SSR/SSG, API Routes, Server Components)"}, {"title": "React Mastery", "description": "(TypeScript, Custom Hooks, State Management, Performance)"}, {"title": "Performance Optimization", "description": "(Core Web Vitals, Image Optimization, Bundle Analysis)"}]'),
('UI/UX Design & Development', 'Beautiful interfaces that actually work. I transform complex user journeys into intuitive experiences, combining modern design principles with accessibility standards to create interfaces that users love and businesses profit from.', '[{"title": "Design Systems", "description": "(Component Libraries, Figma to Code, Brand Consistency)"}, {"title": "User Experience", "description": "(Wireframing, Prototyping, User Testing, Conversion Optimization)"}, {"title": "Responsive Design", "description": "(Mobile-First, Cross-Browser, Accessibility Compliance)"}]'),
('Modern Web Architecture', 'Scalable frontend architectures that grow with your business. I implement cutting-edge patterns like server components, micro-frontends, and JAMstack to deliver blazing-fast user experiences with maintainable codebases.', '[{"title": "Server Components", "description": "(React Server Components, Streaming, Data Fetching)"}, {"title": "State Management", "description": "(Zustand, Redux Toolkit, React Query, Context API)"}, {"title": "Build Optimization", "description": "(Webpack, Vite, Code Splitting, Tree Shaking)"}]'),
('Interactive Experiences', 'Bring your brand to life with immersive web experiences. From smooth animations to 3D visualizations, I create engaging interfaces that captivate users and make your product unforgettable with slick animations using GSAP and Framer Motion.', '[{"title": "Animation Libraries", "description": "(GSAP, Framer Motion, React Spring, CSS Animations)"}, {"title": "3D Web Graphics", "description": "(Three.js, React Three Fiber, WebGL, 3D Models)"}, {"title": "Micro-Interactions", "description": "(Hover Effects, Loading States, Transition Design)"}]');

-- Insert all tools
INSERT INTO tools (name, icon) VALUES
('Vs Code', '/assets/tools/vscode.png'),
('Figma', '/assets/tools/figma.png'),
('Github', '/assets/tools/github.png'),
('Git', '/assets/tools/git.png'),
('GSAP', '/assets/tools/gsap.png'),
('Draw.io', '/assets/tools/draw-io.png'),
('Next.js', '/assets/tools/next.png'),
('React', '/assets/tools/react.png');

-- Insert all social links
INSERT INTO socials (name, href) VALUES
('Instagram', 'https://www.instagram.com/mohamedosamazahran77/'),
('LinkedIn', 'https://www.linkedin.com/in/zahran-numberone/'),
('GitHub', 'https://github.com/ZAHRAN88');

-- Verify the data was inserted correctly
SELECT 'Projects inserted:' as info, COUNT(*) as count FROM projects
UNION ALL
SELECT 'Services inserted:' as info, COUNT(*) as count FROM services
UNION ALL
SELECT 'Tools inserted:' as info, COUNT(*) as count FROM tools
UNION ALL
SELECT 'Socials inserted:' as info, COUNT(*) as count FROM socials; 