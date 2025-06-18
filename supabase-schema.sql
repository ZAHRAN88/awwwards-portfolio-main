-- Portfolio Database Schema for Supabase

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    href TEXT,
    image TEXT,
    bg_image TEXT,
    frameworks JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    items JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tools table
CREATE TABLE IF NOT EXISTS tools (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Socials table
CREATE TABLE IF NOT EXISTS socials (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    href TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE socials ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (DEVELOPMENT MODE)
-- For production, you should replace these with proper authentication policies

-- Projects policies
CREATE POLICY "Allow public read access on projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public insert on projects" ON projects FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on projects" ON projects FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on projects" ON projects FOR DELETE USING (true);

-- Services policies
CREATE POLICY "Allow public read access on services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public insert on services" ON services FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on services" ON services FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on services" ON services FOR DELETE USING (true);

-- Tools policies
CREATE POLICY "Allow public read access on tools" ON tools FOR SELECT USING (true);
CREATE POLICY "Allow public insert on tools" ON tools FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on tools" ON tools FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on tools" ON tools FOR DELETE USING (true);

-- Socials policies
CREATE POLICY "Allow public read access on socials" ON socials FOR SELECT USING (true);
CREATE POLICY "Allow public insert on socials" ON socials FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on socials" ON socials FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on socials" ON socials FOR DELETE USING (true);

-- TODO: For production, replace the above policies with authentication-based policies:
-- Example for authenticated-only access:
-- CREATE POLICY "Allow authenticated insert on projects" ON projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
-- CREATE POLICY "Allow authenticated update on projects" ON projects FOR UPDATE USING (auth.role() = 'authenticated');
-- CREATE POLICY "Allow authenticated delete on projects" ON projects FOR DELETE USING (auth.role() = 'authenticated');

-- Create functions to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tools_updated_at BEFORE UPDATE ON tools FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_socials_updated_at BEFORE UPDATE ON socials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO projects (name, description, href, image, bg_image, frameworks) VALUES
('Mobile Accessories E-commerce', 'An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.', '', '/assets/projects/mobile-accessories-store.jpg', '/assets/backgrounds/blanket.jpg', '[{"id": 1, "name": "React"}, {"id": 2, "name": "Next.js"}, {"id": 3, "name": "Node.js"}, {"id": 4, "name": "MongoDB"}, {"id": 5, "name": "Tailwind CSS"}]'),
('Plant Shop E-commerce', 'An online store specializing in rare and decorative plants with a clean, user-friendly interface.', '', '/assets/projects/plant-shop.jpg', '/assets/backgrounds/curtains.jpg', '[{"id": 1, "name": "React"}, {"id": 2, "name": "Next.js"}, {"id": 3, "name": "Stripe API"}, {"id": 4, "name": "Tailwind CSS"}]');

INSERT INTO services (title, description, items) VALUES
('Frontend Development', 'Your digital presence deserves cutting-edge performance and stunning design. I build lightning-fast Next.js applications with server-side rendering, optimized performance, and pixel-perfect responsive interfaces that convert visitors into customers.', '[{"title": "Next.js Excellence", "description": "(App Router, SSR/SSG, API Routes, Server Components)"}, {"title": "React Mastery", "description": "(TypeScript, Custom Hooks, State Management, Performance)"}, {"title": "Performance Optimization", "description": "(Core Web Vitals, Image Optimization, Bundle Analysis)"}]'),
('UI/UX Design & Development', 'Beautiful interfaces that actually work. I transform complex user journeys into intuitive experiences, combining modern design principles with accessibility standards to create interfaces that users love and businesses profit from.', '[{"title": "Design Systems", "description": "(Component Libraries, Figma to Code, Brand Consistency)"}, {"title": "User Experience", "description": "(Wireframing, Prototyping, User Testing, Conversion Optimization)"}, {"title": "Responsive Design", "description": "(Mobile-First, Cross-Browser, Accessibility Compliance)"}]');

INSERT INTO tools (name, icon) VALUES
('React', '/assets/tools/react.png'),
('Next.js', '/assets/tools/next.png'),
('Figma', '/assets/tools/figma.png'),
('GitHub', '/assets/tools/github.png');

INSERT INTO socials (name, href) VALUES
('GitHub', 'https://github.com/ZAHRAN88'),
('LinkedIn', 'https://www.linkedin.com/in/zahran-numberone/'),
('Instagram', 'https://www.instagram.com/mohamedosamazahran77/'); 