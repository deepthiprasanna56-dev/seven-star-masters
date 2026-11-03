import { useState, useEffect } from 'react';
import { X, Play, Volume2, Shield, Flame, RotateCcw, ExternalLink, Film, Check } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChannel, setActiveChannel] = useState(0);

  // High-adrenaline sports anthems and championship trailers
  const channels = [
    {
      id: 'n2rVnOfp7xs',
      title: 'Seven Star Masters Club Anthem (4K)',
      subtitle: 'Official Championship Documentary & Hype Reel',
      duration: '1:30',
      poster: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '26U_seo0a1g',
      title: 'High-Performance Athlete Training Reel',
      subtitle: 'Unseen Hours of Sweat, Grit & Biomechanics',
      duration: '2:15',
      poster: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: 'V1yK-c_zPco',
      title: 'Seven Star Stadium Arena Showcase',
      subtitle: 'Olympic Infrastructure, Turf, Courts & Coliseum',
      duration: '1:45',
      poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80'
    }
  ];

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentChannel = channels[activeChannel];

  const handlePlayClick = () => {
    sound.playBassDrop();
    setIsPlaying(true);
  };

  const handleChannelSwitch = (index) => {
    sound.playClick();
    setActiveChannel(index);
    setIsPlaying(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#09090f] border border-red-600/70 rounded-3xl shadow-[0_0_70px_rgba(239,68,68,0.4)] overflow-hidden font-['Rajdhani']">
        
        {/* Glow Header Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700 animate-pulse-glow"></div>

        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-red-950 flex items-center justify-between bg-black/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/50 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
              <Film className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-red-400 block leading-none">
                SEVEN STAR CINEMATIC THEATER
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wider mt-0.5 leading-none truncate max-w-xs sm:max-w-md">
                {currentChannel.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isPlaying && (
              <button
                onClick={() => {
                  sound.playClick();
                  setIsPlaying(false);
                }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold uppercase text-zinc-300 transition-colors"
                title="Return to Cover Screen"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Cover</span>
              </button>
            )}

            <a
              href={`https://www.youtube.com/watch?v=${currentChannel.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-800 transition-colors"
              title="Open Video in Fullscreen"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-red-600/40 rounded-full border border-zinc-800 transition-colors"
              aria-label="Close Video Player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Screen / Player Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          
          {isPlaying ? (
            /* Active Live Responsive YouTube Iframe */
            <iframe
              key={currentChannel.id}
              src={`https://www.youtube-nocookie.com/embed/${currentChannel.id}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
              title={currentChannel.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            /* Cover Mockup with Interactive Click-to-Play */
            <div 
              onClick={handlePlayClick}
              className="absolute inset-0 w-full h-full cursor-pointer group flex items-center justify-center select-none"
            >
              {/* Background Poster Image */}
              <img
                src={currentChannel.poster}
                alt={currentChannel.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 filter contrast-125"
              />

              {/* Gradient Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>

              {/* Central Glowing Click-to-Open Play Button & Content */}
              <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center p-4 sm:p-6 space-y-4">
                
                {/* Big Glowing Pulsing Play Button */}
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute -inset-4 rounded-full bg-red-600/40 blur-xl animate-pulse"></div>
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-800 border-2 border-red-300/80 flex items-center justify-center text-white shadow-[0_0_45px_rgba(239,68,68,0.95)]">
                    <Play className="w-10 sm:w-12 h-10 sm:h-12 fill-white ml-1.5 text-white filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
                  </div>
                </div>
                
                {/* Text Labels */}
                <div className="space-y-1.5 max-w-lg mx-auto">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/60 text-red-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                    <span>Click Play to Watch 4K Film</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] tracking-wide">
                    BEYOND LIMITS. BEYOND VICTORY.
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm font-['Outfit'] line-clamp-2 px-4">
                    A cinematic documentary through 6 years of sweat, sacrifice, and championship glory at India's highest-standard athletic facility.
                  </p>
                </div>

                {/* Click CTA Pill */}
                <div className="pt-1">
                  <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(239,68,68,0.8)] transition-all">
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Launch 4K Reel ({currentChannel.duration})</span>
                  </span>
                </div>
              </div>

              {/* Bottom Info HUD Bar */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-zinc-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                  <span className="font-semibold text-white tracking-wider">4K ULTRA HD • 60 FPS</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Volume2 className="w-4 h-4 text-red-400" />
                  <span>Dolby Atmos Stadium Audio</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Video Channel Selector Bar */}
        <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-900">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">
              SELECT VIDEO CHAPTER / HYPE REEL:
            </span>
            <span className="text-[11px] text-red-400 font-bold uppercase">
              {isPlaying ? '● Video Playing' : 'Click a reel to open & play'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {channels.map((chan, idx) => (
              <button
                key={chan.id}
                onClick={() => handleChannelSwitch(idx)}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  activeChannel === idx
                    ? 'bg-red-950/70 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-red-400 font-mono font-bold uppercase mb-0.5">
                  <span>CHAPTER 0{idx + 1}</span>
                  <span>{chan.duration}</span>
                </div>
                <div className="text-xs sm:text-sm font-black uppercase text-white truncate">
                  {chan.title}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5 font-['Outfit']">
                  {chan.subtitle}
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
