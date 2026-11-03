# ⚡ Seven Star Masters — Premium Sports Club & Champions Arena

> **"BEYOND LIMITS. BEYOND VICTORY."**  
> *PLAY • TRAIN • COMPETE • ACHIEVE*

A high-performance, responsive Sports Club Web Application built with **React.js**, **Vite**, **Tailwind CSS**, and **React Router**. Designed specifically with an aggressive, modern stadium aesthetic featuring deep dark obsidian tones, glowing ruby neon accents, and interactive tournament circuits.

---

## 🌟 Live Demo & Preview

- **Design Aesthetic:** High-octane dark sports arena, red neon glows, Olympic-grade facilities showcase.
- **Brand Identity:** **Seven Star Masters (7)** — 7 pillars of athletic mastery and championship culture.

---

## 🚀 Key Features & Pages

### 1. Home Page (`/`)
- **Hero Section:** Headline *"BEYOND LIMITS. BEYOND VICTORY."*, glowing "7" emblem, fast action CTAs (*Join Now*, *Watch Our Story*).
- **Fast Sport Pills:** Quick navigation to Cricket, Football, Basketball, Badminton, Tennis.
- **Live Club Stats:** 3,500+ Active Athletes, 48+ Championship Trophies, 25+ Elite Coaches, 7+ Olympic Arenas, 120+ Grassroots Scholarships.
- **Our Sports Preview:** High-impact cards with sport specs, badges, and quick court booking triggers.
- **About Us & Trophy Cabinet:** *"Champions Are Made Here"* showcase with next major clash details.
- **Our Coaches:** Spotlight on Coach Kim (Cricket), Coach Yuna (Conditioning), Coach Taehyung (Tactical Mentor).
- **Flagship Championship Countdown:** Live real-time countdown timer to the upcoming *Seven Star Championship 2026*.
- **Membership Plans:** Basic (₹999), Premium (₹1,999 - Most Popular), Elite (₹3,999).
- **Triumph Stories:** Testimonials from state Ranji squad players, junior national rankers, and club champions.

### 2. About Us (`/about`)
- **Club History & Founding Story:** Established in 2018 in New Delhi.
- **Mission & Vision Statements:** Comprehensive athletic development and Olympic pipeline.
- **The Seven Pillars of Athletic Mastery:** Olympic infrastructure, Biomechanics, Elite pedigree, Cryo recovery, Mental conditioning, Grassroots pathway, and Warrior community.
- **Trophy Milestones Timeline:** 2020 to 2025 championships won.
- **High-Tech Facility Specifications:** Detailed breakdowns of turf, hardwood, lighting, and recovery suites.

### 3. Sports & Activities (`/sports`)
- **Required Sports Included:**
  1. 🏏 **Cricket:** 6 turf pitches, speed gun radars, Bola machines, 240fps biomechanical capture.
  2. ⚽ **Football:** FIFA Quality Pro certified turf, 5v5 cage arenas, GPS player tracking vests.
  3. 🏀 **Basketball:** FIBA certified hardwood maple wood courts, breakaway rims, Dr. Dish shooting machines.
  4. 🏸 **Badminton:** 8 BWF-grade synthetic courts, zero-drift air conditioning, anti-glare vertical lights.
  5. 🎾 **Tennis:** 4 cushioned Plexipave hard courts + 2 French Open style red clay courts with PlaySight AI.
- **Interactive Filtering:** Filter by *All*, *Outdoor*, *Indoor*, and *Racquet* categories.
- **Actions:** Court booking & direct coach consultation triggers.

### 4. Membership Page (`/membership`)
- **Tiers & Pricing:**
  - **Basic (₹999/mo):** 2 sports access, standard locker, free WiFi, fitness checkup.
  - **Premium (₹1,999/mo):** All 5 sports access, 2 personal coaching sessions, priority booking, gym access, club jersey kit.
  - **Elite (₹3,999/mo):** 24/7 VIP all-arena access, 6 personal head coach sessions, unlimited cryo-recovery suites, personalized nutrition.
- **Billing Cycle Toggle:** Switch between Monthly and Annual billing (with 20% savings badge).
- **Comprehensive Comparison Matrix:** Side-by-side feature comparison table.
- **Interactive Registration Form:** With instant validation, digital QR membership card generation, and confetti celebration!

### 5. Coaches & Trainers (`/coaches`)
- **Profiles:**
  - **Coach Kim:** Cricket Specialist & High Performance Head (14+ yrs exp, Level 3 High Performance).
  - **Coach Yuna:** Lead Athletic Conditioning & Fitness Director (CSCS, Olympian Trainer).
  - **Coach Taehyung:** Sports Mentor & Tactical Head (Sports Psychology Master, Mindset Coach).
  - **Coach Marcus Reed:** Football Head Coach (UEFA Pro License, Ex-Premier League Youth Coach).
  - **Coach Elena Rostova:** Head Tennis Director (ITF Level 3, Former WTA Pro).
  - **Coach David Chen:** Badminton High Performance Head (BWF High Performance Level 2, Asian Games Medalist).
- **Specializations, Certifications, Quotes, and Available Slots.**
- **Book 1-on-1 Session Modal:** Select coach, date, time slot, and training focus with validation.

### 6. Events & Tournaments (`/events`)
- **Featured Tournaments:**
  - *Seven Star Championship 2026* (₹5,00,000 Cash Prize + Gold Cups)
  - *Neon Night Futsal Masters Cup* (5v5 Cage Football)
  - *All-India Grand Shuttle Open* (BWF Badminton Open)
  - *Seven Star Red Clay Classic* (Tennis Tournament)
  - *Midnight Hoopfest 3v3 All-Star* (Basketball 3x3)
- **Live Countdown Timer** to the kickoff of the next championship.
- **Tournament Registration Modal:** Register team or solo with captain details, squad size, division selection, and official ticket pass generation.

### 7. Contact Us (`/contact`)
- **Interactive Contact Form:** Name, Email, Phone, Sport of Interest, Inquiry Category, Message with live validation.
- **Club Location:** *Seven Star Sports Arena, Sector 23, Olympic Way, New Delhi, India 110075*.
- **Direct Phone & Email:** Phone (+91 98765 43210), Email (hello@sevenstarmasters.com).
- **Operating Hours:** Weekdays (05:00 AM - 11:30 PM) & Weekends (05:00 AM - 12:00 Midnight).
- **Interactive Campus Arena Locator Map** preview.
- **Interactive FAQ Accordion** answering common trial, gear, and coaching questions.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5 & CSS3** | Semantic structure, accessibility, animations |
| **Tailwind CSS v4** | Rapid styling, custom red neon glow effects, responsive breakpoints |
| **React.js 19** | Component-based UI architecture, reusable components |
| **Vite 8** | Ultra-fast development server and production bundler |
| **React Router v7** | Client-side routing, navigation, and scroll restoration |
| **Lucide React** | Modern, lightweight athletic & interface icons |
| **Canvas Confetti** | Celebration animation on successful registration |

---

## 📁 Project Folder Structure

```
seven-star-masters/
├── public/
│   └── images/
│       ├── seven-star-banner-1.jpg    # Reference hero banner mockup
│       └── seven-star-banner-2.jpg    # Reference showcase arena mockup
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx                 # Fixed glowing header with mobile drawer
│   │   ├── Footer.jsx                 # Comprehensive footer with quick links & newsletter
│   │   ├── StatsSection.jsx           # Live club numbers counter
│   │   ├── SportCard.jsx              # Reusable sport card with specs & booking
│   │   ├── CoachCard.jsx              # Reusable coach profile card with booking
│   │   ├── EventCard.jsx              # Reusable event card with registration
│   │   ├── MembershipModal.jsx        # Quick registration modal with confetti
│   │   ├── CoachBookingModal.jsx      # 1-on-1 coaching session scheduler
│   │   ├── EventRegisterModal.jsx     # Tournament squad enlistment modal
│   │   ├── VideoModal.jsx             # "Watch Our Story" cinema modal
│   │   └── ScrollToTop.jsx            # Scroll restoration on route change
│   ├── pages/
│   │   ├── Home.jsx                   # Hero, featured sports, coaches, events, plans
│   │   ├── About.jsx                  # History, mission, 7 pillars, achievements
│   │   ├── Sports.jsx                 # Cricket, Football, Basketball, Badminton, Tennis
│   │   ├── Membership.jsx             # Plans, matrix, embedded validation form
│   │   ├── Coaches.jsx                # Detailed coach profiles and booking
│   │   ├── Events.jsx                 # Tournaments, dates, prize pools, countdown
│   │   └── Contact.jsx                # Contact form, location, hours, FAQ accordion
│   ├── data/
│   │   ├── sportsData.js              # Sports specs, pitches, timings, coaches
│   │   ├── coachesData.js             # Coach bios, credentials, slots
│   │   ├── eventsData.js              # Tournaments, prizes, dates, rules
│   │   ├── membershipData.js          # Plans, pricing, comparison matrix
│   │   ├── clubData.js                # Club details, history, mission, pillars
│   │   └── testimonialsData.js        # Athletes reviews & badges
│   ├── App.jsx                        # Master routing & global modal state
│   ├── main.jsx                       # React root entry point
│   └── index.css                      # Tailwind import, custom glow utilities
├── index.html                         # Google Fonts (Outfit, Rajdhani, Cinzel), meta tags
├── vite.config.js                     # Vite + Tailwind + React configuration
└── package.json                       # Dependencies & build scripts
```

---

## 💻 Getting Started (Local Setup)

### Prerequisites
- Node.js (version 18 or above recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/your-username/seven-star-masters.git
cd seven-star-masters
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be created in the `dist/` folder.

---

## 🔒 Form Validation Highlights

1. **Membership Registration Form:**
   - **Full Name:** Minimum 3 characters required.
   - **Email:** Valid regex email format checked.
   - **Phone:** 10-digit numeric mobile validation.
   - **Age:** Validates between 6 and 85 years.
   - **Emergency Contact:** Required name and valid emergency phone number.
   - **Terms Checkbox:** Enforces acceptance of safety rules.

2. **Contact Form:**
   - Validates name, valid email, 10-digit phone number, and message length (minimum 10 characters).
   - Instant inline feedback on error and animated confirmation upon submission.

---

## 🏆 Project Submission Checklist

- [x] Responsive on Mobile, Tablet, and Desktop screens.
- [x] React component structure with clean separations of concerns (`pages/`, `components/`, `data/`).
- [x] React Router navigation with active link highlighting and route change scroll restoration.
- [x] React Hooks (`useState`, `useEffect`, `useMemo`) used appropriately throughout.
- [x] Form validation implemented on all forms (Membership, Contact, Coach Booking, Tournament Entry).
- [x] All 5 required sports represented with high-resolution imagery and specifications (Cricket, Football, Basketball, Badminton, Tennis).
- [x] All 7 required pages implemented (Home, About, Sports, Membership, Coaches, Events, Contact).
- [x] Complete production build passing with 0 errors.
