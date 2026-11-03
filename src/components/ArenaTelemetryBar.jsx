import { Shield, Activity, Flame, Radio, Zap, Wind } from 'lucide-react';
import { SquidSymbols } from './SquidHudElements';

export default function ArenaTelemetryBar() {
  return (
    <div className="w-full bg-[#09070d]/95 border-b border-red-950/80 backdrop-blur-md py-1.5 px-4 text-[11px] text-zinc-400 font-['Rajdhani'] font-semibold tracking-wider overflow-x-auto select-none">
      <div className="w-full flex items-center justify-between gap-6 whitespace-nowrap">
        
        {/* Left: Status beacon */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-red-500">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="uppercase font-bold text-white tracking-widest text-[10px]">ARENA LIVE STATUS: OPTIMAL</span>
          </div>
          <span className="text-zinc-700">|</span>
          <div className="hidden sm:flex items-center gap-1 text-zinc-400">
            <Radio className="w-3.5 h-3.5 text-red-400" />
            <span>SECTOR: 07-COLISEUM</span>
          </div>
        </div>

        {/* Center: Squid Game Symbols */}
        <div className="hidden md:flex items-center gap-3 text-zinc-300">
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">PROTOCOL:</span>
          <SquidSymbols size="sm" />
          <span className="text-red-400 uppercase text-[10px] font-bold">STAGE 07 ACTIVE</span>
        </div>

        {/* Right: Metrics */}
        <div className="flex items-center gap-4 text-zinc-400">
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-yellow-500" />
            <span>LIGHTS: 1,400 LUX</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <Wind className="w-3 h-3 text-cyan-400" />
            <span>TEMP: 21°C</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <Activity className="w-3 h-3" />
            <span>MATCHES LIVE: 4</span>
          </div>
        </div>

      </div>
    </div>
  );
}
