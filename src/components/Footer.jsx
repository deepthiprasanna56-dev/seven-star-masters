import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Clock, Send, ChevronRight, Award, Shield, CheckCircle2 
} from 'lucide-react';
import { clubInfo } from '../data/clubData';

// Custom Brand SVGs
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [legalPage, setLegalPage] = useState(null);

  useEffect(() => {
    if (!legalPage) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setLegalPage(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [legalPage]);

  const legalContent = {
    'Privacy Policy': 'We use the details you submit through this site to respond to enquiries and manage demo bookings. This demo does not send or store form submissions on a server. Contact hello@sevenstarmasters.com to ask about your information.',
    'Terms of Service': 'Information and booking confirmations on this demonstration site are illustrative and do not create a paid reservation or contract. Contact the club to confirm availability, prices, and applicable terms before visiting.',
    'Club Rules & Regulations': 'Athletes and visitors should follow staff instructions, use equipment safely, respect other members, and arrive on time for sessions. Ask club staff for the current facility rules before participating.'
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="relative bg-[#050508] border-t border-red-900/30 pt-16 pb-12 overflow-hidden">
      {/* Red ambient glow at footer base */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/10 blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-950 border border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                <span className="text-2xl font-black italic tracking-tighter text-white">7</span>
                <span className="absolute -top-1 -right-1 text-xs text-red-400">★</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs tracking-[0.3em] text-red-500 font-semibold uppercase">Seven Star</span>
                <span className="text-xl font-black tracking-widest uppercase text-white font-['Rajdhani'] leading-none">
                  MASTERS
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              India’s premier elite sports development academy. We empower athletes across Cricket, Football, Basketball, Badminton, and Tennis with Olympic-grade infrastructure and data-driven biomechanical coaching.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1 text-red-500 text-xs font-semibold uppercase tracking-wider">
                <span>★★★★★★★</span>
              </div>
              <span className="text-xs text-zinc-400 font-medium">Seven Pillars of Athletic Mastery</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a href={clubInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={clubInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all" aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href={clubInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href={clubInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-red-600 pl-3">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sports" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  Sports & Arenas
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  Elite Coaches
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  Tournaments & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-red-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sports Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-red-600 pl-3">
              Sports Arenas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sports#cricket" className="text-zinc-400 hover:text-red-400 transition-colors">
                  🏏 Cricket Academy
                </Link>
              </li>
              <li>
                <Link to="/sports#football" className="text-zinc-400 hover:text-red-400 transition-colors">
                  ⚽ FIFA Turf Football
                </Link>
              </li>
              <li>
                <Link to="/sports#basketball" className="text-zinc-400 hover:text-red-400 transition-colors">
                  🏀 FIBA Hardwood Basketball
                </Link>
              </li>
              <li>
                <Link to="/sports#badminton" className="text-zinc-400 hover:text-red-400 transition-colors">
                  🏸 BWF Badminton Complex
                </Link>
              </li>
              <li>
                <Link to="/sports#tennis" className="text-zinc-400 hover:text-red-400 transition-colors">
                  🎾 Grand Slam Clay & Hard Courts
                </Link>
              </li>
              <li>
                <Link to="/about#recovery" className="text-zinc-400 hover:text-red-400 transition-colors">
                  ❄️ Cryo & Hydro Recovery Spa
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Club HQ */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-red-600 pl-3">
              Stay in the Arena
            </h4>
            <p className="text-xs text-zinc-400">
              Subscribe to receive championship schedule alerts, coaching masterclass invitations, and exclusive membership drops.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter athlete email..."
                  className="w-full bg-[#111119] border border-zinc-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe newsletter"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-red-600 hover:bg-red-500 text-white rounded-md flex items-center justify-center transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-green-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Welcome to Seven Star Masters!</span>
                </div>
              )}
            </form>

            <div className="pt-2 text-xs text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>{clubInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>{clubInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>{clubInfo.workingHours.weekdays}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Seven Star Masters. All Rights Reserved. Crafted for Champions.</p>
          <div className="flex items-center gap-6">
            {Object.keys(legalContent).map((title) => (
              <button
                key={title}
                type="button"
                onClick={() => setLegalPage(title)}
                className="hover:text-zinc-300 transition-colors"
              >
                {title}
              </button>
            ))}
          </div>
        </div>

        {legalPage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setLegalPage(null);
            }}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="footer-legal-title"
              className="relative w-full max-w-lg rounded-2xl border border-red-600/50 bg-[#0d0d15] p-6 text-white shadow-[0_0_40px_rgba(239,68,68,0.25)]"
            >
              <button
                type="button"
                onClick={() => setLegalPage(null)}
                aria-label="Close policy"
                className="absolute right-4 top-4 rounded-full border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:text-white"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h2 id="footer-legal-title" className="mb-3 pr-10 text-xl font-bold uppercase tracking-wide">{legalPage}</h2>
              <p className="text-sm leading-relaxed text-zinc-300">{legalContent[legalPage]}</p>
              <button
                type="button"
                onClick={() => setLegalPage(null)}
                className="mt-6 rounded-lg bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-red-500"
              >
                Close
              </button>
            </section>
          </div>
        )}

      </div>
    </footer>
  );
}
