import { useState } from 'react';
import { 
  Award, Star, Calendar, ChevronRight, Shield, CheckCircle2, 
  Flame, Sparkles, Filter 
} from 'lucide-react';
import { coachesData } from '../data/coachesData';
import CoachCard from '../components/CoachCard';

export default function Coaches({ onOpenCoachModal }) {
  const [filter, setFilter] = useState('All');

  const sportsFilter = ['All', 'Cricket', 'Football', 'Tennis', 'Badminton', 'Strength & Conditioning', 'Multi-Sport Leadership'];

  const filteredCoaches = coachesData.filter((coach) => {
    if (filter === 'All') return true;
    return coach.sport === filter;
  });

  return (
    <div className="relative pt-24 pb-20 bg-[#060609] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <Award className="w-3.5 h-3.5" />
          <span>Learn From Masters</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white font-['Rajdhani'] leading-none">
          COACHES & HIGH-PERFORMANCE DIRECTORS
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Our coaching staff comprises former international athletes, Olympian conditioning directors, and biomechanical analysts dedicated to sharpening your game.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 flex-wrap">
          {sportsFilter.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === f
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-500'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Coaches Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoaches.map((coach) => (
            <CoachCard
              key={coach.id}
              coach={coach}
              onBookCoach={onOpenCoachModal}
            />
          ))}
        </div>
      </div>

      {/* Coaching Methodology Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-red-950/50 via-zinc-950 to-zinc-950 border border-red-600/40 shadow-[0_0_35px_rgba(239,68,68,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                The Seven Star Coaching Standard
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani']">
                1-ON-1 BIOMECHANICAL & TACTICAL ANALYSIS
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Every athlete at Seven Star Masters receives personalized data feedback: 240fps slow-motion kinetic analysis, speed radar tracking, force-plate balance maps, and individualized drills tailored to your body type.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onOpenCoachModal(coachesData[0])}
                className="px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Coach Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
