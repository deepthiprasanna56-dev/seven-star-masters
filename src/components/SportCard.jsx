import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Users, Award } from 'lucide-react';

export default function SportCard({ sport, onSelectSport }) {
  return (
    <div className="group relative bg-[#0e0e16] rounded-2xl border border-red-900/30 overflow-hidden hover:border-red-600/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.35)] flex flex-col justify-between">
      
      {/* Top Banner with Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={sport.image}
          alt={sport.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-[#0e0e16]/40 to-transparent"></div>

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/90 text-white backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.5)]">
            {sport.badge}
          </span>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 border border-zinc-700 text-zinc-300 backdrop-blur-md">
            {sport.category}
          </span>
        </div>

        {/* Sport Name at bottom of image */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Rajdhani'] tracking-wide group-hover:text-red-400 transition-colors drop-shadow-md">
            {sport.name}
          </h3>
          <p className="text-xs text-red-400 font-semibold tracking-wide">
            {sport.tagline}
          </p>
        </div>
      </div>

      {/* Body details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {sport.description}
        </p>

        {/* Specs highlights */}
        <div className="space-y-1.5 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
            <span className="truncate">{sport.timings}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
            <span className="truncate">{sport.arena}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
            <span className="text-zinc-300">{sport.activePlayers}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <Link
            to="/sports"
            className="flex-1 py-2 px-3 text-center rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-600/40 text-xs font-bold uppercase tracking-wider text-white transition-all"
          >
            Full Specs
          </Link>
          <button
            onClick={() => onSelectSport && onSelectSport(sport)}
            className="flex-1 py-2 px-3 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
          >
            <span>Book Court</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
