import { useState, useEffect } from 'react';
import { 
  Trophy, Calendar, MapPin, Users, ArrowRight, Shield, 
  Flame, Award, CheckCircle2, Clock 
} from 'lucide-react';
import { eventsData } from '../data/eventsData';
import EventCard from '../components/EventCard';
import TournamentBracket from '../components/TournamentBracket';
import { SquidSymbols } from '../components/SquidHudElements';
import { sound } from '../utils/soundEffects';

export default function Events({ onOpenEventModal }) {
  const [filter, setFilter] = useState('All');
  const [timeLeft, setTimeLeft] = useState({ days: 42, hours: 14, minutes: 28, seconds: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = ['All', 'Championship', 'Tournament', 'Open Tournament', 'All-Star Special'];

  const filteredEvents = eventsData.filter((event) => {
    if (filter === 'All') return true;
    return event.category === filter;
  });

  const flagshipEvent = eventsData[0];

  return (
    <div className="relative pt-24 pb-20 bg-[#060609] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <Trophy className="w-3.5 h-3.5" />
          <span>Championship Circuit</span>
          <SquidSymbols size="sm" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white font-['Rajdhani'] leading-none">
          EVENTS & TOURNAMENTS
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Step under the stadium floodlights. Register your squad for our high-stakes championships and test your mettle against top athletes.
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
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-red-500'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat === 'All' ? 'All Tournaments' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Event Banner with Live Countdown */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-red-950/90 via-[#140c14] to-zinc-950 border border-red-600/60 p-6 sm:p-10 shadow-[0_0_40px_rgba(239,68,68,0.35)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-600 text-white tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  Next Major Clash
                </span>
                <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" />
                  {flagshipEvent.prizePool}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani'] leading-tight">
                {flagshipEvent.title}
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
                {flagshipEvent.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2">
                <span className="flex items-center gap-1.5 text-zinc-200">
                  <Calendar className="w-4 h-4 text-red-500" />
                  {flagshipEvent.date}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-200">
                  <Clock className="w-4 h-4 text-red-500" />
                  {flagshipEvent.time}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-200">
                  <MapPin className="w-4 h-4 text-red-500" />
                  {flagshipEvent.venue}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => {
                    sound.playBassDrop();
                    onOpenEventModal(flagshipEvent);
                  }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center gap-2 transition-all"
                >
                  <span>Register Team For Championship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Live Countdown Clock */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Kickoff Countdown
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                {[
                  { label: 'DAYS', val: timeLeft.days },
                  { label: 'HOURS', val: timeLeft.hours },
                  { label: 'MINUTES', val: timeLeft.minutes },
                  { label: 'SECONDS', val: timeLeft.seconds },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="w-16 sm:w-20 p-2 sm:p-3 rounded-2xl bg-black/80 border border-red-600/50 text-center shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                  >
                    <span className="block text-2xl sm:text-3xl font-black text-white font-['Rajdhani'] leading-tight">
                      {unit.val < 10 ? `0${unit.val}` : unit.val}
                    </span>
                    <span className="block text-[9px] font-bold text-red-500 uppercase tracking-widest mt-0.5">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-zinc-500">
                Registration Closes: {flagshipEvent.deadline}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Tournament Bracket */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <TournamentBracket />
      </div>

      {/* Events Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-['Rajdhani'] mb-6 border-l-4 border-red-600 pl-3">
          All Scheduled Tournaments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegisterEvent={onOpenEventModal}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
