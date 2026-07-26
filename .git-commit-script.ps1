# ============================================================
# Clean Git History Script — Harshil Portfolio
# Splits all pending changes into 20 logical commits
# ============================================================

Set-Location "c:\Users\Harshil\Desktop\portfolio by ag"

# ─────────────────────────────────────────────────────────────
# COMMIT 1: Project configuration & tooling setup
# ─────────────────────────────────────────────────────────────
git add package.json package-lock.json tailwind.config.js
git commit -m "chore: update project dependencies and tailwind configuration

- Switch darkMode to 'class' strategy in tailwind.config.js
- Add @emailjs/browser for contact form integration
- Update Bebas Neue and JetBrains Mono font references
- Sync package-lock.json with updated dependency tree"

# ─────────────────────────────────────────────────────────────
# COMMIT 2: Base design system and global CSS
# ─────────────────────────────────────────────────────────────
git add src/index.css
git commit -m "style: establish Neo-Brutalist design system and CSS tokens

- Define primary color palette: coral #FF5733, mint #2EC4B6
- Add Bebas Neue display font and JetBrains Mono system
- Create .brutal-border, .brutal-shadow, .brutal-btn utilities
- Add dark mode overrides: bg #0D0D0D, borders #3A3A3A
- Define smooth 300ms theme transition on all elements
- Add base typography scale and spacing variables"

# ─────────────────────────────────────────────────────────────
# COMMIT 3: Flash-free dark mode initialization in HTML
# ─────────────────────────────────────────────────────────────
git add index.html
git commit -m "fix: add zero-flash theme initialization script in HTML head

- Inline script reads localStorage theme before page paint
- Applies dark class to <html> immediately to prevent FOUC
- Sets initial theme without waiting for React hydration
- Meta tags and viewport config refined for SEO"

# ─────────────────────────────────────────────────────────────
# COMMIT 4: App shell with theme state management
# ─────────────────────────────────────────────────────────────
git add src/App.jsx
git commit -m "feat: implement App shell with single-source theme state

- Initialize theme from localStorage with useState
- Sync dark class on document.documentElement on toggle
- Pass isDark and toggleTheme down as props
- Remove all old component imports, wire up new component tree
- Add bg-[#F7F4EB] / dark:bg-[#0D0D0D] root background wrapper"

# ─────────────────────────────────────────────────────────────
# COMMIT 5: Navbar with theme toggle and mobile menu
# ─────────────────────────────────────────────────────────────
git add src/components/Navbar.jsx
git commit -m "feat: build navbar with theme toggle and responsive mobile menu

- Neo-Brutalist sticky nav with border-b border-black
- Sun/Moon icon toggle updates isDark state instantly
- Hamburger menu for mobile with slide-in overlay
- Smooth-scroll anchor links to all sections
- dark:border-[#3A3A3A] and dark:bg-[#161616] applied
- Active section highlighting via scroll detection"

# ─────────────────────────────────────────────────────────────
# COMMIT 6: Hero section with identity and social links
# ─────────────────────────────────────────────────────────────
git add src/components/Hero.jsx
git commit -m "feat: implement hero section with profile identity and social badges

- Large Bebas Neue name display with role tagline
- Brutalist bordered profile image with coral accent
- Clickable social link badges: GitHub, LinkedIn, LeetCode, Twitter, YouTube
- Resume CTA button opening Google Drive link in new tab
- Animated entrance with opacity and translate transitions
- dark:border-[#3A3A3A] borders and dark:text-[#A1A1A1] bio text"

# ─────────────────────────────────────────────────────────────
# COMMIT 7: About / Backstory section
# ─────────────────────────────────────────────────────────────
git add src/components/About.jsx
git commit -m "feat: add about section with backstory and stats panels

- Personal narrative with typed developer backstory
- Stats cards: projects built, hackathons, certifications
- Brutalist card layout with dark:bg-[#161616] panels
- Dividers using dark:border-[#2A2A2A] for depth
- Removed duplicate social links panel to avoid redundancy"

# ─────────────────────────────────────────────────────────────
# COMMIT 8: Projects section with real project cards
# ─────────────────────────────────────────────────────────────
git add src/components/Projects.jsx
git commit -m "feat: create projects section with 3 real project showcase cards

- Tic Tech Toe Ecommerce, AI Onboarding Engine, FleetFlow Logistics
- Each card shows screenshot, description, tech stack pills
- Category filter tabs (ALL / FULL STACK)
- GitHub source link and live demo link per card
- Brutalist card style: border-[3px] border-black shadow-[4px_4px]
- dark:bg-[#161616] cards with dark:border-[#3A3A3A] borders"

# ─────────────────────────────────────────────────────────────
# COMMIT 9: Experiments section with mini-project cards
# ─────────────────────────────────────────────────────────────
git add src/components/Experiments.jsx
git commit -m "feat: add experiments section for smaller side projects

- Compact horizontal card layout with thumbnail images
- Projects: MemoFlip, Typing Velocity Test, Whack-A-Mole
- Tech stack pills and GitHub source link per card
- Hover scale effect on thumbnail images
- Consistent dark theme tokens throughout"

# ─────────────────────────────────────────────────────────────
# COMMIT 10: Skills section with 3-column grid
# ─────────────────────────────────────────────────────────────
git add src/components/Skills.jsx
git commit -m "feat: implement skills section with categorized 3-column layout

- Frontend, Backend & DB, Tools & DevOps columns
- Lucide icon headers per category (Code, Server, Wrench)
- Square bullet skill list items with coral accent
- Currently Learning subsection: AI and ML with descriptions
- dark:bg-[#161616] panels, dark:shadow-[4px_4px_0px_0px_#3A3A3A]"

# ─────────────────────────────────────────────────────────────
# COMMIT 11: Education / Academics section
# ─────────────────────────────────────────────────────────────
git add src/components/Education.jsx
git commit -m "feat: add education section with degree card and coursework list

- B.Tech CSE at Gujarat Technological University (3rd Semester)
- Degree details in left column with GTU badge
- Key Coursework list in right panel with DSA, OOP, DBMS
- dark:bg-[#0D0D0D] inner panel for depth contrast
- Mint #2EC4B6 badge accent and coral bullet markers"

# ─────────────────────────────────────────────────────────────
# COMMIT 12: Figma design showcase
# ─────────────────────────────────────────────────────────────
git add src/components/FigmaShowcase.jsx
git commit -m "feat: add Figma design portfolio showcase section

- 3-card grid: Cubextra OTT, Test Platform, Nike Concept
- Screenshot frame with hover zoom and Figma icon overlay
- Design tags and external Figma file link button
- dark:bg-[#161616] cards with dark:border-[#3A3A3A]
- Fallback Unsplash image on load error"

# ─────────────────────────────────────────────────────────────
# COMMIT 13: Games section with 6 game cards
# ─────────────────────────────────────────────────────────────
git add src/components/GamesSection.jsx
git commit -m "feat: build games section with 6 interactive game project cards

- Games: Memory Flip, Typing Test, Whack-A-Mole, Click Counter, Color Picker, Todo Lab
- Each card has accent background color, mechanics description
- Screenshot thumbnails with hover scale transition
- Source code link per card with ArrowUpRight icon
- dark:shadow-[4px_4px_0px_0px_#3A3A3A] brutal shadows"

# ─────────────────────────────────────────────────────────────
# COMMIT 14: Hackathon section with 3 event cards
# ─────────────────────────────────────────────────────────────
git add src/components/HackathonSection.jsx
git commit -m "feat: add hackathon section with 3 competition showcase cards

- Events: Tic Tech Toe (Winner), ArtPark CodeForge (Finalist), Odoo x Gujarat Vidyapith
- Result badge, achievement tag, organizer and date metadata
- Role indicator and team size in card footer
- Live demo / GitHub link button per card
- Consistent dark:border-[#3A3A3A] and dark:text-[#A1A1A1] tokens"

# ─────────────────────────────────────────────────────────────
# COMMIT 15: Certifications section with accordion list
# ─────────────────────────────────────────────────────────────
git add src/components/Certifications.jsx
git commit -m "feat: implement certifications section with interactive accordion

- 6 certs: Google Cybersecurity, IBM Data Analysis, IBM Python, Google Python, IBM Web Dev, Microsoft Azure AI
- Click-to-expand accordion reveals skills covered + verify link
- Color-coded issuer badge (Google blue, IBM, Microsoft, etc.)
- Issued date in header row
- dark:hover:bg-[#1E1E1E] hover state on accordion rows"

# ─────────────────────────────────────────────────────────────
# COMMIT 16: Contact section with form and CTA banner
# ─────────────────────────────────────────────────────────────
git add src/components/ContactSection.jsx
git commit -m "feat: create contact section with EmailJS form and CTA banner

- Hero CTA banner: READY TO BUILD SOMETHING with social badges row
- 2-column layout: Direct Contact info panel + Send Message form
- EmailJS integration with service_8ll3v9u / template_6mly7jn
- Success and error feedback states with icons
- Form inputs use dark:bg-[#0D0D0D] and dark:border-[#3A3A3A]"

# ─────────────────────────────────────────────────────────────
# COMMIT 17: Footer with brand, nav links, back-to-top
# ─────────────────────────────────────────────────────────────
git add src/components/Footer.jsx
git commit -m "feat: add footer with brand identity, nav links and scroll-to-top

- Left: HARSHIL brand logo with coral dot accent
- Center: nav anchor links to all portfolio sections
- Right: Back To Top button with smooth scroll behavior
- dark:bg-[#161616] background and dark:border-[#3A3A3A] top border
- Copyright line with dynamic year"

# ─────────────────────────────────────────────────────────────
# COMMIT 18: Remove legacy/unused components
# ─────────────────────────────────────────────────────────────
git add src/components/AchievementsSection.jsx
git add src/components/AnimatedHero.jsx
git add src/components/MyJourney.jsx
git add src/components/Portfolio.jsx
git add src/components/ProjectShowcase.jsx
git add src/components/RadarSkills.jsx
git add src/components/SkillsSection.jsx
git add src/components/TechOrbitSkills.jsx
git add src/components/ui/FigmaCard.jsx
git add src/components/ui/GradientBlinds.jsx
git add src/components/ui/Magnet.jsx
git add src/components/ui/ProjectCard.jsx
git add src/components/ui/aether-background.jsx
git add src/components/ui/dock.jsx
git add src/components/ui/galaxy-background.jsx
git add src/components/ui/globe.jsx
git add src/components/ui/hyper-text.jsx
git add src/components/ui/limelight-nav.jsx
git add src/components/ui/magic-card.jsx
git add src/components/ui/meteors.jsx
git add src/components/ui/morphing-text.jsx
git add src/components/ui/particles.jsx
git add src/components/ui/personal-landing.jsx
git add src/components/ui/smooth-cursor.jsx
git add src/components/ui/video-text.jsx
git add src/components/ui/word-rotate.jsx
git commit -m "refactor: remove all legacy UI components and unused sections

- Delete AnimatedHero, Portfolio, ProjectShowcase (replaced)
- Delete AchievementsSection, MyJourney, SkillsSection (refactored)
- Delete RadarSkills, TechOrbitSkills (replaced with flat list)
- Delete entire ui/ subfolder: globe, particles, meteors, dock, magic-card, etc.
- Clean component tree down to 11 focused sections"

# ─────────────────────────────────────────────────────────────
# COMMIT 19: Dark theme color refinement across all components
# ─────────────────────────────────────────────────────────────
git add -A
git commit -m "style: refine dark theme palette for premium Neo-Brutalist aesthetic

- Replace all dark:border-white / dark:border-[#F7F4EB] with dark:border-[#3A3A3A]
- Replace all dark:shadow-[..._#FFFFFF] with dark:shadow-[..._#3A3A3A]
- Card panels unified to dark:bg-[#161616] across every section
- Inner containers use dark:bg-[#0D0D0D] for depth layering
- Primary text: dark:text-[#F7F4EB], muted: dark:text-[#A1A1A1]
- Secondary dividers use dark:border-[#2A2A2A]
- Removed all hardcoded section bg-[#F7F4EB] overrides
- Applied consistently: Navbar, Hero, About, Projects, Experiments,
  Skills, Education, Figma, Games, Hackathons, Certifications,
  Contact, Footer"

Write-Host ""
Write-Host "All commits created successfully!" -ForegroundColor Green
Write-Host ""
git log --oneline -22
