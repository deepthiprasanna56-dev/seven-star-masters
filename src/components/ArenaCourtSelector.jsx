import { useState } from 'react';
import { MapPin, Users, Clock, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ArenaCourtSelector({ onSelectCourt }) {
  const [activeSector, setActiveSector] = useState('cricket');

  const sectors = [
    {
      id: 'cricket',
      name: 'Cricket Oval & Nets',
      sector: 'Sector 01-A',
      badge: '6 Turf Pitches',
      status: 'Occupied 4/6',
      statusColor: 'text-yellow-400',
      lighting: '1,200 Lux Floodlit',
      surface: 'Natural English Willow Turf',
      summary: '6 natural clay turf wickets, programmable Bola bowling machines, and 240fps biomechanical capture nets.'
    },
    {
      id: 'football',
      name: 'FIFA Pro Turf Arena',
      sector: 'Sector 02-B',
      badge: 'FIFA Quality Pro',
      status: 'Cage Match Live',
      statusColor: 'text-red-400',
      lighting: '1,400 Lux Stadium Night LEDs',
      surface: 'Shockpad Monofilament Turf',
      summary: 'Full 105m x 68m FIFA-standard pitch and two 5v5 floodlit caged arenas with Catapult GPS telemetry.'
    },
    {
      id: 'basketball',
      name: 'FIBA Maple Hardwood',
      sector: 'Sector 03-C',
      badge: 'FIBA Certified',
      status: '2 Slots Open',
      statusColor: 'text-emerald-400',
      lighting: 'Zero-Glare Overhead Array',
      surface: 'Grade-1 Canadian Maple Wood',
      summary: 'Dual shock-absorbing maple courts, Dr. Dish shooting trainers, and hydraulic glass backboards.'
    },
    {
      id: 'badminton',
      name: 'BWF Skyline Plex',
      sector: 'Sector 04-D',
      badge: '8 Olympic Courts',
      status: '6/8 In Play',
      statusColor: 'text-yellow-400',
      lighting: '800 Lux Vertical Array',
      surface: 'Yonex High-Grip Synthetic Mat',
      summary: 'Zero-drift climate-controlled indoor arena with anti-glare vertical illumination and electronic restringing.'
    },
    {
      id: 'tennis',
      name: 'Grand Slam Courts',
      sector: 'Sector 05-E',
      badge: 'Plexipave & Clay',
      status: 'Open for Booking',
      statusColor: 'text-emerald-400',
      lighting: 'Shadowless Night Floodlights',
      surface: 'French Open Red Clay + Acrylic Hard',
      summary: '4 cushioned Plexipave hard courts and 2 authentic Roland Garros red clay courts with PlaySight ball cameras.'
    }
  ];

  const current = sectors.find((s) => s.id === activeSector) || sectors[0];

  const handleSelect = (id) => {
    sound.playClick();
    setActiveSector(id);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0c14] border border-red-600/50 shadow-[0_0_40px_rgba(239,68,68,0.25)] my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
            <Zap className="w-4 h-4 text-red-500" />
            <span>Interactive Arena Floorplan & Availability</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Rajdhani'] mt-1">
            SEVEN STAR CAMPUS SECTOR SELECTOR
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Click on any sports arena sector below to view live telemetry, occupancy, and surface specs.
          </p>
        </div>
      </div>

      {/* Sector Selection Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {sectors.map((sec) => (
          <button
            key={sec.id}
            onClick={() => handleSelect(sec.id)}
            className={`p-3 rounded-2xl border text-left transition-all ${
              activeSector === sec.id
                ? 'bg-red-950/60 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                : 'bg-zinc-950/70 border-zinc-800 hover:border-red-900'
            }`}
          >
            <div className="text-[10px] text-zinc-500 uppercase font-mono">{sec.sector}</div>
            <div className="text-sm font-black uppercase text-white font-['Rajdhani'] mt-0.5 truncate">
              {sec.name}
            </div>
            <div className={`text-[11px] font-bold mt-1 ${sec.statusColor}`}>
              ● {sec.status}
            </div>
          </button>
        ))}
      </div>

      {/* Active Sector Display */}
      <div className="rounded-2xl bg-zinc-950/90 border border-zinc-800/80 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-red-400 px-2 py-0.5 rounded bg-red-950/60 border border-red-900/50">
              {current.sector}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 uppercase font-semibold">
              {current.badge}
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Rajdhani']">
            {current.name}
          </h4>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {current.summary}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-zinc-800 text-xs">
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-bold">Surface Spec</span>
              <span className="text-white font-medium">{current.surface}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-bold">Lighting Level</span>
              <span className="text-yellow-400 font-medium">{current.lighting}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase text-[10px] font-bold">Live Status</span>
              <span className={`font-bold ${current.statusColor}`}>{current.status}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center gap-3">
          <button
            onClick={() => onSelectCourt && onSelectCourt(current)}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 transition-all"
          >
            <span>Book Court in {current.sector}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-[11px] text-center text-zinc-500">
            Complimentary equipment and ball boy assistance included
          </span>
        </div>
      </div>
    </div>
  );
}
