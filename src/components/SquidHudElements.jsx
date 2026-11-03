// Squid Game-inspired holographic HUD symbols: Circle (○), Triangle (△), Square (□)
// and cyberpunk arena status badges.

export function SquidSymbols({ className = '', size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10'
  };
  const s = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Circle: Frontline / Foundation */}
      <div className="relative group">
        <svg viewBox="0 0 100 100" className={`${s} stroke-rose-500 fill-none stroke-[9] filter drop-shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse`}>
          <circle cx="50" cy="50" r="42" />
        </svg>
      </div>

      {/* Triangle: Soldier / High Performance */}
      <div className="relative group">
        <svg viewBox="0 0 100 100" className={`${s} stroke-red-500 fill-none stroke-[9] filter drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]`}>
          <polygon points="50,10 92,88 8,88" />
        </svg>
      </div>

      {/* Square: Manager / Elite Master */}
      <div className="relative group">
        <svg viewBox="0 0 100 100" className={`${s} stroke-rose-400 fill-none stroke-[9] filter drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]`}>
          <rect x="12" y="12" width="76" height="76" rx="4" />
        </svg>
      </div>
    </div>
  );
}

// Futuristic Holographic Player Pass Badge
export function SquidPlayerBadge({ playerNumber = '456', playerName = 'CHAMPION', tier = 'VIP ELITE', rank = 'triangle' }) {
  return (
    <div className="relative p-5 rounded-2xl bg-gradient-to-br from-black via-[#160c14] to-black border border-red-500/70 shadow-[0_0_35px_rgba(239,68,68,0.35)] overflow-hidden text-left font-['Rajdhani']">
      
      {/* Corner brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-500"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-500"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-500"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-500"></div>

      {/* Background Hologram watermark */}
      <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none select-none">
        <span className="text-8xl font-black text-red-500">7</span>
      </div>

      <div className="flex items-center justify-between border-b border-red-900/50 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center font-black text-sm text-white shadow-[0_0_12px_rgba(239,68,68,0.7)]">
            7
          </div>
          <div>
            <span className="text-[10px] tracking-[0.25em] text-red-400 uppercase block font-semibold">SEVEN STAR</span>
            <span className="text-xs font-black tracking-widest text-white leading-none">MASTERS CLUB</span>
          </div>
        </div>

        <SquidSymbols size="sm" />
      </div>

      <div className="grid grid-cols-2 gap-3 my-2">
        <div>
          <span className="text-[10px] uppercase text-zinc-500 font-bold block">Assigned Athlete</span>
          <span className="text-base font-black text-white uppercase tracking-wider">{playerName}</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] uppercase text-zinc-500 font-bold block">Contender Tag</span>
          <span className="text-lg font-black text-red-400 tracking-widest text-glow">#{playerNumber}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="font-semibold uppercase tracking-wider">Access: {tier}</span>
        </div>
        <span className="text-zinc-500 font-mono text-[10px]">SECTOR 07 • ARENA PROTOCOL</span>
      </div>
    </div>
  );
}
