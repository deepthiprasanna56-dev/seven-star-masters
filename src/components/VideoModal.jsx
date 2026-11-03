import { X, Play, Volume2, Shield, Flame } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <div className="relative w-full max-w-4xl bg-[#09090f] border border-red-600/50 rounded-2xl shadow-[0_0_60px_rgba(239,68,68,0.4)] overflow-hidden">
        
        {/* Glow Header */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-black/60 rounded-full border border-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Mockup / Embed */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <img
            src="/images/seven-star-banner-1.jpg"
            alt="Seven Star Masters Arena Showcase"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* Central Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="w-20 h-20 rounded-full bg-red-600/80 border-2 border-red-400 flex items-center justify-center text-white shadow-[0_0_35px_rgba(239,68,68,0.8)] cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-9 h-9 fill-white ml-1 text-white" />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-widest">
                <Flame className="w-4 h-4" />
                <span>Seven Star Masters Official Club Anthem</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                BEYOND LIMITS. BEYOND VICTORY.
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm max-w-lg mx-auto">
                A documentary journey through 6 years of sweat, sacrifice, and championship glory at India's highest-standard athletic facility.
              </p>
            </div>
          </div>

          {/* Video bottom control bar simulation */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-zinc-300">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-semibold text-white tracking-wider">4K ULTRA HD • 60 FPS</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Volume2 className="w-4 h-4 text-red-400" />
              <span>Dolby Atmos Stadium Audio</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
