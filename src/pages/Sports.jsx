import { useState } from 'react';
import { 
  Flame, Clock, MapPin, Users, Award, Shield, CheckCircle2, 
  ArrowRight, Sparkles, Filter 
} from 'lucide-react';
import { sportsData } from '../data/sportsData';
import ArenaCourtSelector from '../components/ArenaCourtSelector';
import TiltCard from '../components/TiltCard';
import { SquidSymbols } from '../components/SquidHudElements';
import { sound } from '../utils/soundEffects';

export default function Sports({ onOpenMembershipModal, onOpenCoachModal }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Outdoor', 'Indoor', 'Racquet'];

  const filteredSports = sportsData.filter((sport) => {
    if (filter === 'All') return true;
    if (filter === 'Outdoor') return sport.category.includes('Outdoor');
    if (filter === 'Indoor') return sport.category.includes('Indoor');
    if (filter === 'Racquet') return sport.id === 'badminton' || sport.id === 'tennis';
    return true;
  });

  return (
    <div className="relative pt-24 pb-20 bg-[#060609] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <Flame className="w-3.5 h-3.5" />
          <span>Olympic-Grade Arenas</span>
          <SquidSymbols size="sm" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white font-['Rajdhani'] leading-none">
          SPORTS & ACTIVITIES
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Five championship-grade arenas built with international federation compliance: Cricket, Football, Basketball, Badminton, and Tennis.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-500'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat === 'All' ? 'All 5 Sports' : `${cat} Sports`}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Campus Sector Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ArenaCourtSelector onSelectCourt={() => onOpenMembershipModal('premium')} />
      </div>

      {/* Sports Detail List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredSports.map((sport, index) => {
          const isEven = index % 2 === 0;
          return (
            <TiltCard key={sport.id} className="rounded-3xl" glowColor="rgba(239, 68, 68, 0.25)">
              <div
                id={sport.id}
                className={`relative rounded-3xl bg-[#0e0e16]/95 backdrop-blur-md border border-red-950/70 hover:border-red-600/70 shadow-[0_0_35px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-stretch`}
              >
                
                {/* Media Section */}
                <div className={`lg:col-span-5 relative min-h-[320px] lg:min-h-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover object-center brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-transparent to-transparent lg:hidden"></div>
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                      {sport.badge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-zinc-300 border border-zinc-700 backdrop-blur-md">
                      {sport.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
                      <span>Active Athletes: <strong className="text-white">{sport.activePlayers}</strong></span>
                      <span className="text-yellow-400 font-bold">★ {sport.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Text & Specs Section */}
                <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-1 text-red-500 text-xs font-bold uppercase tracking-wider">
                      <span>Seven Star Arena Wing</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase text-white font-['Rajdhani']">
                      {sport.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-red-400 font-semibold mb-4">
                      {sport.tagline}
                    </p>
                    
                    <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                      {sport.description}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {sport.details}
                    </p>

                    {/* Highlights Grid */}
                    <div className="mt-6 pt-5 border-t border-zinc-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                        Arena Specifications & Facilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {sport.facilities.map((fac, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{fac}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta Details */}
                    <div className="mt-6 pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-zinc-500 block uppercase text-[10px] font-bold">Operating Timings</span>
                        <span className="text-zinc-200 font-medium">{sport.timings}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase text-[10px] font-bold">Complex Location</span>
                        <span className="text-zinc-200 font-medium">{sport.arena}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block uppercase text-[10px] font-bold">Head Coach</span>
                        <span className="text-red-400 font-semibold">{sport.coach}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => {
                        sound.playBassDrop();
                        onOpenMembershipModal('premium');
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Book Court & Membership</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        sound.playBassDrop();
                        if (onOpenCoachModal) onOpenCoachModal({
                          name: sport.coach,
                          role: `${sport.name} Head Specialist`,
                          sport: sport.name,
                          image: sport.image,
                          specialization: `${sport.name} Performance & Biomechanics`,
                          availableSlots: ['07:00 AM - 09:00 AM', '04:00 PM - 06:00 PM', '07:00 PM - 09:00 PM']
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white font-bold uppercase text-xs tracking-wider transition-all"
                    >
                      Coach Consultation
                    </button>
                  </div>

                </div>

              </div>
            </TiltCard>
          );
        })}
      </div>

    </div>
  );
}
