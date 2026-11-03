import { Trophy, Users, Shield, Award, Sparkles } from 'lucide-react';
import { clubInfo } from '../data/clubData';

export default function StatsSection() {
  const icons = [Users, Trophy, Award, Shield, Sparkles];

  return (
    <section className="relative py-12 bg-gradient-to-r from-[#0a0a10] via-[#100c14] to-[#0a0a10] border-y border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {clubInfo.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={stat.label}
                className="relative group p-4 rounded-xl bg-[#12121a]/60 border border-red-950/40 hover:border-red-600/50 transition-all duration-300 text-center hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600/20 transition-all">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani'] tracking-tight group-hover:text-red-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-zinc-300 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
