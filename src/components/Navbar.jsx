import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame, ChevronRight, Volume2, VolumeX, Radio } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { SquidSymbols } from './SquidHudElements';

export default function Navbar({ onOpenMembershipModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    sound.playWhoosh();
  }, [location.pathname]);

  const handleSoundToggle = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sports', path: '/sports' },
    { name: 'Membership', path: '/membership' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08080c]/95 backdrop-blur-md border-b border-red-600/30 shadow-[0_4px_30px_rgba(239,68,68,0.2)] py-2.5' 
        : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with 7 and Stars & Squid Symbols */}
          <Link to="/" onClick={() => sound.playClick()} className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-950 border border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-transform group-hover:scale-105 duration-300">
              <span className="text-2xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                7
              </span>
              <div className="absolute -top-1.5 -right-1.5 flex gap-0.5">
                <span className="text-xs text-red-400 animate-pulse">★</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] tracking-[0.3em] text-red-500 font-semibold uppercase">Seven Star</span>
              </div>
              <span className="text-lg font-black tracking-widest uppercase text-white font-['Rajdhani'] leading-none group-hover:text-red-400 transition-colors">
                MASTERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12121c]/80 border border-red-900/30 rounded-full px-5 py-1.5 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => sound.playClick()}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white bg-red-600/90 shadow-[0_0_15px_rgba(239,68,68,0.6)] font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Audio FX Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? 'Unmute Futuristic UI Sounds' : 'Mute Futuristic UI Sounds'}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-red-600/60 text-zinc-400 hover:text-red-400 transition-colors"
              aria-label="Toggle UI Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-red-400" />}
            </button>

            {/* Squid Symbols Subtle Pill */}
            <div className="hidden xl:flex items-center px-2.5 py-1 rounded-full bg-zinc-950/70 border border-zinc-800">
              <SquidSymbols size="sm" />
            </div>

            {/* Join CTA */}
            <button
              onClick={() => {
                sound.playBassDrop();
                onOpenMembershipModal();
              }}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 animate-pulse-glow rounded-full"></span>
              <span className="relative flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300 transform group-hover:scale-[1.02]">
                <span>Join Arena</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu & Audio */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400"
              aria-label="Toggle audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-red-400" />}
            </button>

            <button
              onClick={() => {
                sound.playBassDrop();
                onOpenMembershipModal();
              }}
              className="px-3 py-1.5 text-xs font-bold uppercase bg-red-600 text-white rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]"
            >
              Join
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-red-900/40 text-gray-300 hover:text-white hover:border-red-600/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#09090f]/98 border-b border-red-900/40 backdrop-blur-xl transition-all duration-300 px-6 py-6 space-y-3">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-red-600/20 text-red-400 border border-red-600/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                      : 'text-gray-300 hover:bg-zinc-800/60 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-red-900/30 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-3 py-1">
              <SquidSymbols size="sm" />
            </div>

            <button
              onClick={() => {
                sound.playBassDrop();
                setIsOpen(false);
                onOpenMembershipModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(239,68,68,0.5)]"
            >
              <Flame className="w-4 h-4 text-red-200" />
              <span>Join Seven Star Masters</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
