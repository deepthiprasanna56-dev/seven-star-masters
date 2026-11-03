import { Calendar, MapPin, Trophy, Users, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import { sound } from '../utils/soundEffects';

export default function EventCard({ event, onRegisterEvent }) {
  return (
    <TiltCard className="rounded-3xl" glowColor="rgba(234, 179, 8, 0.2)">
      <div className="group relative bg-[#0e0e16]/95 backdrop-blur-md rounded-3xl border border-red-950/70 overflow-hidden hover:border-red-600/80 transition-all duration-300 hover:shadow-[0_0_35px_rgba(239,68,68,0.35)] flex flex-col justify-between h-full">
        
        {/* Event Header with Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/50 to-transparent"></div>

          {/* Date Box Top-Left */}
          <div className="absolute top-3.5 left-3.5 bg-black/85 border border-red-600/70 rounded-xl px-3 py-1.5 text-center shadow-[0_0_15px_rgba(239,68,68,0.5)] backdrop-blur-md">
            <span className="block text-xl font-black text-white font-['Rajdhani'] leading-none">
              {event.day}
            </span>
            <span className="block text-[10px] font-bold text-red-500 uppercase tracking-widest leading-none mt-0.5">
              {event.month}
            </span>
          </div>

          {/* Status Badge Top-Right */}
          <div className="absolute top-3.5 right-3.5">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-600/90 text-white backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              {event.status}
            </span>
          </div>

          {/* Sport Category bottom */}
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-0.5">
              {event.sport}
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-['Rajdhani'] tracking-wide group-hover:text-red-400 transition-colors">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Event Info */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          <div className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-zinc-800/80">
            <div className="flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
              <span className="font-semibold text-yellow-400">{event.prizePool}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400 pt-1">
              <span>Entry: <span className="text-white font-semibold">{event.entryFee}</span></span>
              <span>Slots: <span className="text-red-400 font-semibold">{event.teamsRegistered}/{event.maxTeams}</span></span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                sound.playBassDrop();
                if (onRegisterEvent) onRegisterEvent(event);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 transition-all"
            >
              <span>Register Team / Solo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </TiltCard>
  );
}
