import { useState } from 'react';
import { Activity, Zap, Shield, Flame, Award, ChevronRight } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function AthleteRadarChart() {
  const [activeProfile, setActiveProfile] = useState('football');

  const profiles = {
    cricket: {
      name: 'Cricket Pace & Swing Protocol',
      coach: 'Coach Kim',
      leadStat: '145 kmph Release Velocity',
      stats: [
        { label: 'Pace & Acceleration', value: 92, full: 100 },
        { label: 'Kinetic Power', value: 88, full: 100 },
        { label: 'Tactical Match IQ', value: 95, full: 100 },
        { label: 'Reflexes & Agility', value: 90, full: 100 },
        { label: 'Aerobic Endurance', value: 85, full: 100 },
        { label: 'Clutch Fortitude', value: 96, full: 100 }
      ]
    },
    football: {
      name: 'FIFA Futsal & Pressing Mastery',
      coach: 'Coach Marcus Reed',
      leadStat: '34.8 km/h Top Sprint Speed',
      stats: [
        { label: 'Pace & Acceleration', value: 96, full: 100 },
        { label: 'Kinetic Power', value: 91, full: 100 },
        { label: 'Tactical Match IQ', value: 94, full: 100 },
        { label: 'Reflexes & Agility', value: 93, full: 100 },
        { label: 'Aerobic Endurance', value: 98, full: 100 },
        { label: 'Clutch Fortitude', value: 89, full: 100 }
      ]
    },
    basketball: {
      name: 'FIBA Hardwood Vertical Dominance',
      coach: 'Coach Sarah Jenkins',
      leadStat: '38.5 Inch Vertical Leap',
      stats: [
        { label: 'Pace & Acceleration', value: 90, full: 100 },
        { label: 'Kinetic Power', value: 94, full: 100 },
        { label: 'Tactical Match IQ', value: 89, full: 100 },
        { label: 'Reflexes & Agility', value: 95, full: 100 },
        { label: 'Aerobic Endurance', value: 91, full: 100 },
        { label: 'Clutch Fortitude', value: 94, full: 100 }
      ]
    },
    badminton: {
      name: 'BWF Reflex & Smash Speed',
      coach: 'Coach David Chen',
      leadStat: '412 km/h Record Smash',
      stats: [
        { label: 'Pace & Acceleration', value: 97, full: 100 },
        { label: 'Kinetic Power', value: 86, full: 100 },
        { label: 'Tactical Match IQ', value: 93, full: 100 },
        { label: 'Reflexes & Agility', value: 99, full: 100 },
        { label: 'Aerobic Endurance', value: 94, full: 100 },
        { label: 'Clutch Fortitude', value: 92, full: 100 }
      ]
    },
    tennis: {
      name: 'Grand Slam Topspin & Baseline',
      coach: 'Coach Elena Rostova',
      leadStat: '198 km/h Flat Serve Ace',
      stats: [
        { label: 'Pace & Acceleration', value: 89, full: 100 },
        { label: 'Kinetic Power', value: 93, full: 100 },
        { label: 'Tactical Match IQ', value: 97, full: 100 },
        { label: 'Reflexes & Agility', value: 92, full: 100 },
        { label: 'Aerobic Endurance', value: 96, full: 100 },
        { label: 'Clutch Fortitude', value: 95, full: 100 }
      ]
    }
  };

  const current = profiles[activeProfile];

  // Hexagon math
  const center = 150;
  const radius = 105;
  const numAxes = 6;

  const getCoordinates = (value, index) => {
    const angle = (Math.PI * 2 / numAxes) * index - Math.PI / 2;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const polygonPoints = current.stats.map((s, idx) => {
    const { x, y } = getCoordinates(s.value, idx);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#0b0a12] border border-red-600/40 shadow-[0_0_40px_rgba(239,68,68,0.2)] my-16 font-['Rajdhani']">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
            <Activity className="w-4 h-4 text-red-500" />
            <span>Biomechanical Intelligence Radar</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white mt-1">
            ATHLETE ATTRIBUTE MATRIX
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
            Switch between sports disciplines to inspect target kinetic power, acceleration, tactical IQ, and clutch endurance profiles.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/60 border border-red-500/50 text-red-400 text-xs font-bold uppercase">
          <Zap className="w-3.5 h-3.5" />
          <span>{current.leadStat}</span>
        </div>
      </div>

      {/* Sport Selector Pills */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-8">
        {Object.keys(profiles).map((key) => (
          <button
            key={key}
            onClick={() => {
              sound.playClick();
              setActiveProfile(key);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeProfile === key
                ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-500'
                : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Radar SVG Polygon Visualization */}
        <div className="lg:col-span-6 flex justify-center py-4">
          <div className="relative w-72 sm:w-80 h-72 sm:h-80">
            <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
              
              {/* Background Concentric Hexagons */}
              {[0.25, 0.5, 0.75, 1].map((scale, i) => {
                const hexPoints = Array.from({ length: 6 }).map((_, idx) => {
                  const angle = (Math.PI * 2 / 6) * idx - Math.PI / 2;
                  const r = radius * scale;
                  return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
                }).join(' ');
                return (
                  <polygon
                    key={i}
                    points={hexPoints}
                    className="stroke-zinc-800/80 fill-none stroke-1"
                  />
                );
              })}

              {/* Axis lines */}
              {Array.from({ length: 6 }).map((_, idx) => {
                const angle = (Math.PI * 2 / 6) * idx - Math.PI / 2;
                const x2 = center + radius * Math.cos(angle);
                const y2 = center + radius * Math.sin(angle);
                return (
                  <line
                    key={idx}
                    x1={center}
                    y1={center}
                    x2={x2}
                    y2={y2}
                    className="stroke-zinc-800 stroke-1"
                  />
                );
              })}

              {/* Filled Attribute Polygon */}
              <polygon
                points={polygonPoints}
                className="fill-red-600/30 stroke-red-500 stroke-2 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.7)] transition-all duration-500"
              />

              {/* Data points */}
              {current.stats.map((s, idx) => {
                const { x, y } = getCoordinates(s.value, idx);
                return (
                  <circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r={4}
                    className="fill-white stroke-red-500 stroke-2 transition-all duration-500"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Stats Breakdown Column */}
        <div className="lg:col-span-6 space-y-3.5">
          <div className="border-b border-zinc-800 pb-3">
            <span className="text-[10px] text-zinc-500 uppercase font-mono block">Curated Discipline Program</span>
            <h4 className="text-xl sm:text-2xl font-black text-white uppercase">{current.name}</h4>
            <span className="text-xs text-red-400 font-semibold">Head Specialist: {current.coach}</span>
          </div>

          <div className="space-y-2.5">
            {current.stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-zinc-300 uppercase">{s.label}</span>
                  <span className="text-red-400 font-mono">{s.value} / 100</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-600 to-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-700"
                    style={{ width: `${s.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
