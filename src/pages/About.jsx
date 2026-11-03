import { Link } from 'react-router-dom';
import { 
  Trophy, Shield, Award, Sparkles, CheckCircle2, Flame, 
  MapPin, Clock, Users, ArrowRight 
} from 'lucide-react';
import { clubInfo } from '../data/clubData';
import StatsSection from '../components/StatsSection';

export default function About({ onOpenMembershipModal }) {
  return (
    <div className="relative pt-24 pb-20 bg-[#060609] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 blur-[130px] pointer-events-none"></div>

      {/* Header Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <Shield className="w-3.5 h-3.5" />
          <span>About Seven Star Masters</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white font-['Rajdhani'] leading-none">
          FORGING INDIA’S NEXT GENERATION OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 text-glow">
            WORLD CHAMPIONS.
          </span>
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Established in 2018, Seven Star Masters is a high-performance sports sanctuary built to international Olympic tolerances.
        </p>
      </div>

      {/* Stats Bar */}
      <StatsSection />

      {/* Showcase Image Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="relative rounded-3xl overflow-hidden border border-red-600/40 shadow-[0_0_40px_rgba(239,68,68,0.25)] h-72 sm:h-96">
          <img
            src="/images/seven-star-banner-2.jpg"
            alt="Seven Star Masters Training Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-6 sm:p-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500">The Sanctuary</span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani']">
                12 ACRES OF ELITE SPORTS EXCELLENCE
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm max-w-xl">
                Located in New Delhi, our sprawling complex houses FIFA certified turf pitches, BWF badminton arenas, FIBA basketball hardwood, laser-graded cricket nets, and Grand Slam tennis courts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#120f18] to-[#0d0d15] border border-red-900/40 hover:border-red-600/60 shadow-[0_0_25px_rgba(239,68,68,0.15)] transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase text-white font-['Rajdhani']">
              Our Mission
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {clubInfo.mission}
            </p>
            <div className="pt-2 text-xs text-red-400 font-semibold flex items-center gap-2">
              <span>★ High Performance Coaching</span>
              <span>•</span>
              <span>★ Zero-Injury Protocols</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#120f18] to-[#0d0d15] border border-red-900/40 hover:border-red-600/60 shadow-[0_0_25px_rgba(239,68,68,0.15)] transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black uppercase text-white font-['Rajdhani']">
              Our Vision
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {clubInfo.vision}
            </p>
            <div className="pt-2 text-xs text-red-400 font-semibold flex items-center gap-2">
              <span>★ Olympic Pipeline</span>
              <span>•</span>
              <span>★ Grassroots Scholarships</span>
            </div>
          </div>

        </div>
      </section>

      {/* The 7 Pillars of Seven Star Masters */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-red-500 text-xs font-bold uppercase tracking-widest mb-2">
            <span>★★★★★★★</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani']">
            THE SEVEN PILLARS OF MASTERY
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            The foundational philosophy that shapes every training session, athlete assessment, and tournament preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubInfo.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-2xl bg-[#0f0f18] border border-zinc-800 hover:border-red-600/60 transition-all duration-300 group"
            >
              <div className="text-3xl font-black text-red-500 font-['Rajdhani'] mb-3 group-hover:text-glow transition-all">
                {pillar.number}
              </div>
              <h4 className="text-lg font-black uppercase text-white font-['Rajdhani'] mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
          
          {/* 7th pillar / CTA card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-950/80 to-zinc-950 border border-red-600/70 shadow-[0_0_30px_rgba(239,68,68,0.3)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-2">Join the Elite</span>
              <h4 className="text-2xl font-black uppercase text-white font-['Rajdhani'] leading-tight">
                READY TO TRAIN LIKE A CHAMPION?
              </h4>
              <p className="text-xs text-zinc-300 mt-2">
                Get inducted into our high-performance batches with certified head coaches today.
              </p>
            </div>
            <button
              onClick={() => onOpenMembershipModal('premium')}
              className="mt-6 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Achievements & Trophies Timeline */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2">
            <Trophy className="w-4 h-4" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani']">
            OUR CHAMPIONSHIP TROPHY CABINET
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {clubInfo.achievements.map((ach) => (
            <div
              key={ach.year + ach.title}
              className="p-5 rounded-2xl bg-[#0f0f18] border border-red-950/60 hover:border-red-600/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-500/40 flex items-center justify-center font-black text-lg text-red-400 font-['Rajdhani'] flex-shrink-0">
                  {ach.year}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase">{ach.title}</h4>
                  <span className="text-xs text-red-400 font-medium block">{ach.org}</span>
                  <p className="text-xs text-zinc-400 mt-0.5">{ach.detail}</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 self-start sm:self-center font-medium">
                ★ Verified Title
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* High-Tech Facilities Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-red-950/40 via-zinc-950 to-zinc-950 border border-red-600/40 shadow-[0_0_35px_rgba(239,68,68,0.2)]">
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] mb-6">
            WORLD-CLASS INFRASTRUCTURE SPECIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubInfo.facilities.map((fac, idx) => (
              <div key={idx} id={fac.name.includes('Recovery') ? 'recovery' : undefined} className="scroll-mt-28 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <h5 className="text-xs font-bold text-white uppercase">{fac.name}</h5>
                </div>
                <p className="text-xs text-zinc-400 pl-6">{fac.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
