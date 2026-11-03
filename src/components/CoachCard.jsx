import { Star, Award, Calendar, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';
import { sound } from '../utils/soundEffects';

export default function CoachCard({ coach, onBookCoach }) {
  return (
    <TiltCard className="rounded-3xl" glowColor="rgba(244, 63, 94, 0.25)">
      <div className="group relative bg-[#0e0e16]/95 backdrop-blur-md rounded-3xl border border-red-950/70 overflow-hidden hover:border-red-600/80 transition-all duration-300 hover:shadow-[0_0_35px_rgba(239,68,68,0.35)] flex flex-col justify-between h-full">
        
        {/* Coach Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-950">
          <img
            src={coach.image}
            alt={coach.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/30 to-transparent"></div>

          {/* Experience Badge */}
          <div className="absolute top-3.5 right-3.5">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 border border-red-500/60 text-red-400 backdrop-blur-md">
              {coach.experience} Exp
            </span>
          </div>

          {/* Sport Category */}
          <div className="absolute top-3.5 left-3.5">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              {coach.sport}
            </span>
          </div>

          {/* Name & Stars overlay */}
          <div className="absolute bottom-3 left-4 right-4">
            <div className="flex items-center gap-1 text-red-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
              ))}
            </div>
            <h3 className="text-2xl font-black uppercase text-white font-['Rajdhani'] tracking-wide group-hover:text-red-400 transition-colors">
              {coach.name}
            </h3>
            <p className="text-xs text-red-400 font-medium">
              {coach.role}
            </p>
          </div>
        </div>

        {/* Coach Details */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block mb-0.5">
                Core Specialization
              </span>
              <p className="text-xs font-semibold text-zinc-200">
                {coach.specialization}
              </p>
            </div>

            <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
              {coach.bio}
            </p>

            {/* Credentials Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {coach.credentials?.slice(0, 2).map((cred, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 font-medium"
                >
                  ✓ {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3 border-t border-zinc-800/80">
            <button
              onClick={() => {
                sound.playBassDrop();
                if (onBookCoach) onBookCoach(coach);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 transition-all group-hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book 1-on-1 Session</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </TiltCard>
  );
}
