import { useState } from 'react';
import { Shield, Sparkles, Flame, Check, RefreshCw, Download, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import { SquidSymbols } from './SquidHudElements';
import { sound } from '../utils/soundEffects';

export default function AthleteCardStudio({ onClaimPass }) {
  const [athleteName, setAthleteName] = useState('Aryan Malhotra');
  const [playerNumber, setPlayerNumber] = useState('456');
  const [sport, setSport] = useState('Cricket');
  const [rank, setRank] = useState('triangle'); // circle, triangle, square, master
  const [foil, setFoil] = useState('crimson'); // crimson, gold, rose, void

  const foils = {
    crimson: {
      name: 'Neon Crimson',
      border: 'border-red-500/80',
      glow: 'rgba(239, 68, 68, 0.45)',
      gradient: 'from-black via-[#1a080d] to-black',
      textAccent: 'text-red-400',
      badgeBg: 'bg-red-600/30 border-red-500/60'
    },
    gold: {
      name: 'VIP Gold',
      border: 'border-yellow-500/80',
      glow: 'rgba(234, 179, 8, 0.45)',
      gradient: 'from-black via-[#1a1408] to-black',
      textAccent: 'text-yellow-400',
      badgeBg: 'bg-yellow-600/30 border-yellow-500/60'
    },
    rose: {
      name: 'Squid Pink',
      border: 'border-rose-500/80',
      glow: 'rgba(244, 63, 94, 0.45)',
      gradient: 'from-black via-[#1a0914] to-black',
      textAccent: 'text-rose-400',
      badgeBg: 'bg-rose-600/30 border-rose-500/60'
    },
    void: {
      name: 'Obsidian Stealth',
      border: 'border-zinc-500/80',
      glow: 'rgba(255, 255, 255, 0.25)',
      gradient: 'from-zinc-950 via-[#121216] to-black',
      textAccent: 'text-zinc-300',
      badgeBg: 'bg-zinc-800/50 border-zinc-600/60'
    }
  };

  const currentFoil = foils[foil];

  const randomize = () => {
    sound.playClick();
    const numbers = ['001', '456', '007', '218', '067', '199', '212', '111', '777'];
    const sports = ['Cricket', 'Football', 'Basketball', 'Badminton', 'Tennis'];
    const ranks = ['circle', 'triangle', 'square', 'master'];
    const foilKeys = ['crimson', 'gold', 'rose', 'void'];

    setPlayerNumber(numbers[Math.floor(Math.random() * numbers.length)]);
    setSport(sports[Math.floor(Math.random() * sports.length)]);
    setRank(ranks[Math.floor(Math.random() * ranks.length)]);
    setFoil(foilKeys[Math.floor(Math.random() * foilKeys.length)]);
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#090810] border border-red-600/40 shadow-[0_0_50px_rgba(239,68,68,0.2)] my-16">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-red-400 animate-pulse" />
            <span>Interactive 3D Holographic Studio</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] mt-1">
            VIP CONTENDER PASS GENERATOR
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
            Customize your athlete credentials, select your clearance mask, and generate your holographic VIP Pass.
          </p>
        </div>

        <button
          onClick={randomize}
          className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-red-500 text-xs font-bold text-zinc-300 hover:text-white transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Randomize Tag</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-4 font-['Outfit']">
          
          {/* Athlete Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
              Athlete Name
            </label>
            <input
              type="text"
              value={athleteName}
              onChange={(e) => setAthleteName(e.target.value)}
              placeholder="Enter your name"
              maxLength={24}
              className="w-full bg-[#13121d] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Contender Number & Sport Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Contender Number
              </label>
              <input
                type="text"
                value={playerNumber}
                onChange={(e) => setPlayerNumber(e.target.value.replace(/\D/g, '').slice(0, 3))}
                placeholder="456"
                className="w-full bg-[#13121d] border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white font-mono font-bold focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                Primary Sport
              </label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="w-full bg-[#13121d] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
              >
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Basketball">Basketball</option>
                <option value="Badminton">Badminton</option>
                <option value="Tennis">Tennis</option>
              </select>
            </div>
          </div>

          {/* Mask Rank Clearance */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
              Clearance Mask Rank
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'circle', label: '○ Frontline', symbol: '○' },
                { id: 'triangle', label: '△ Contender', symbol: '△' },
                { id: 'square', label: '□ Manager', symbol: '□' },
                { id: 'master', label: '★ Master 7', symbol: '★' },
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setRank(r.id);
                  }}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                    rank === r.id
                      ? 'bg-red-600/30 border-red-500 text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="text-base leading-none mb-0.5">{r.symbol}</div>
                  <div className="text-[10px] uppercase truncate">{r.label.split(' ')[1]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Hologram Foil Palette */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
              Holographic Foil Finish
            </label>
            <div className="grid grid-cols-4 gap-2">
              {Object.keys(foils).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setFoil(key);
                  }}
                  className={`py-2 px-2 rounded-xl border text-[11px] font-bold uppercase transition-all truncate ${
                    foil === key
                      ? 'bg-zinc-900 border-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {foils[key].name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                sound.playBassDrop();
                if (onClaimPass) onClaimPass({ athleteName, playerNumber, sport, rank, foil });
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 transition-all"
            >
              <span>Enlist with this Holographic Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* 3D Interactive Card Preview Column */}
        <div className="lg:col-span-6 flex justify-center py-4">
          <TiltCard className="w-full max-w-sm rounded-3xl" glowColor={currentFoil.glow}>
            <div className={`relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br ${currentFoil.gradient} border ${currentFoil.border} shadow-[0_0_40px_${currentFoil.glow}] font-['Rajdhani'] overflow-hidden select-none`}>
              
              {/* Corner targeting reticles */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-red-500"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-red-500"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-red-500"></div>

              {/* Watermark 7 in background */}
              <div className="absolute -right-6 -bottom-8 opacity-15 pointer-events-none">
                <span className="text-9xl font-black text-white">7</span>
              </div>

              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center font-black text-lg text-white shadow-[0_0_15px_rgba(239,68,68,0.8)]">
                    7
                  </div>
                  <div>
                    <span className="text-[10px] tracking-[0.3em] text-red-500 uppercase block font-semibold leading-none">SEVEN STAR</span>
                    <span className="text-sm font-black tracking-widest text-white leading-none">MASTERS</span>
                  </div>
                </div>

                <div className={`px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${currentFoil.badgeBg} ${currentFoil.textAccent}`}>
                  {rank === 'master' ? '★ MASTER 7' : `${rank.toUpperCase()} PASS`}
                </div>
              </div>

              {/* Hologram Chip Simulation */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-7 rounded-md bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-600 border border-yellow-300/60 shadow-inner flex flex-col justify-around p-1">
                  <div className="h-[1px] bg-yellow-900/60"></div>
                  <div className="h-[1px] bg-yellow-900/60"></div>
                </div>

                <span className="text-[10px] font-mono text-zinc-500 tracking-widest">
                  NFC • BIOMETRIC VERIFIED
                </span>
              </div>

              {/* Card Body */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-[10px] uppercase text-zinc-500 font-bold block">Contender Name</span>
                  <span className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider block truncate">
                    {athleteName || 'CHAMPION'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-bold block">Assigned Tag</span>
                    <span className={`text-2xl font-black ${currentFoil.textAccent} font-mono tracking-widest`}>
                      #{playerNumber || '456'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 font-bold block">Discipline</span>
                    <span className="text-sm font-bold text-white uppercase tracking-wide block truncate">
                      {sport}
                    </span>
                  </div>
                </div>
              </div>

              {/* Barcode and Protocol Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                {/* Barcode SVG simulation */}
                <div className="flex items-center gap-0.5 h-6">
                  {[2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 5, 2, 1, 4, 3, 2].map((w, i) => (
                    <div key={i} className="bg-zinc-400 h-full" style={{ width: `${w}px` }}></div>
                  ))}
                </div>

                <div className="text-right">
                  <span className="text-[9px] text-zinc-500 uppercase font-mono block">CLEARANCE STATUS</span>
                  <span className="text-emerald-400 text-[11px] font-bold uppercase">GRANTED • STAGE 07</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </div>

      </div>

    </div>
  );
}
