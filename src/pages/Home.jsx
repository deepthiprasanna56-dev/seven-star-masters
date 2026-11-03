import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, ChevronRight, Play, Trophy, Shield, Award, Calendar, 
  MapPin, CheckCircle2, ArrowRight, Star, Users, Zap, Clock, Video, Sparkles 
} from 'lucide-react';
import { sportsData } from '../data/sportsData';
import { coachesData } from '../data/coachesData';
import { eventsData } from '../data/eventsData';
import { membershipPlans } from '../data/membershipData';
import { clubInfo } from '../data/clubData';
import { testimonialsData } from '../data/testimonialsData';
import SportCard from '../components/SportCard';
import CoachCard from '../components/CoachCard';
import EventCard from '../components/EventCard';
import StatsSection from '../components/StatsSection';
import TiltCard from '../components/TiltCard';
import ArenaTelemetryBar from '../components/ArenaTelemetryBar';
import TournamentBracket from '../components/TournamentBracket';
import ArenaCourtSelector from '../components/ArenaCourtSelector';
import AthleteRadarChart from '../components/AthleteRadarChart';
import { SquidSymbols } from '../components/SquidHudElements';
import { sound } from '../utils/soundEffects';

export default function Home({ 
  onOpenMembershipModal, 
  onOpenCoachModal, 
  onOpenEventModal, 
  onOpenVideoModal,
  onOpenCCTVModal 
}) {
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

  return (
    <div className="relative overflow-hidden pt-16">
      
      {/* ===================== ARENA TELEMETRY TICKER ===================== */}
      <ArenaTelemetryBar />

      {/* ===================== CINEMATIC HERO SECTION ===================== */}
      <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#060609]">
        
        {/* Mockup banner as high-res atmospheric background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/seven-star-banner-1.jpg"
            alt="Seven Star Masters Hero Arena"
            className="w-full h-full object-cover object-center opacity-75 filter contrast-110"
          />
          {/* Dynamic Red and Obsidian Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060609]/75 via-[#060609]/35 to-[#060609]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060609]/35 via-transparent to-[#060609]/35"></div>
          
          {/* Atmospheric Red Spotlights */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-red-600/10 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-rose-600/5 blur-[100px] pointer-events-none"></div>
        </div>

        {/* Floating Squid Game Geometric Holograms in Background */}
        <div className="absolute top-24 left-8 lg:left-20 opacity-30 pointer-events-none hidden md:block animate-float">
          <svg viewBox="0 0 100 100" className="w-16 h-16 stroke-rose-500 fill-none stroke-[6] filter drop-shadow-[0_0_12px_rgba(244,63,94,0.9)]">
            <polygon points="50,10 92,88 8,88" />
          </svg>
        </div>
        <div className="absolute top-36 right-8 lg:right-24 opacity-30 pointer-events-none hidden md:block animate-float" style={{ animationDelay: '1.5s' }}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 stroke-red-500 fill-none stroke-[6] filter drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]">
            <rect x="12" y="12" width="76" height="76" rx="4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          
          {/* Top Brand Pill with 7 Stars and Squid Game Symbols */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-500/50 text-red-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-[0_0_25px_rgba(239,68,68,0.4)] backdrop-blur-md">
            <span className="text-red-400">★★★★★★★</span>
            <span className="text-white">Seven Star Masters</span>
            <SquidSymbols size="sm" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-['Rajdhani'] leading-[0.92] mb-4">
            BEYOND LIMITS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600 hero-title-glow">
              BEYOND VICTORY.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-2xl text-zinc-300 font-light max-w-3xl mx-auto tracking-wide mb-3">
            A Premium Sports Club for Champions
          </p>
          <p className="text-xs sm:text-sm text-red-400 font-bold tracking-[0.25em] uppercase mb-10">
            PLAY • TRAIN • COMPETE • ACHIEVE
          </p>

          {/* Call to Actions with Sound Feedback */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-lg mx-auto">
            <button
              onClick={() => {
                sound.playBassDrop();
                onOpenMembershipModal('premium');
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold tracking-wider uppercase text-xs sm:text-sm shadow-[0_0_18px_rgba(239,68,68,0.35)] flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              <Flame className="w-4 h-4" />
              <span>Join Now</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                sound.playBassDrop();
                onOpenVideoModal();
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-red-600/50 hover:border-red-500 text-white font-bold tracking-wider uppercase text-xs sm:text-sm shadow-[0_0_20px_rgba(239,68,68,0.25)] flex items-center justify-center gap-2.5 transition-all backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-full bg-red-600/40 flex items-center justify-center text-red-400">
                <Play className="w-3.5 h-3.5 fill-red-400 ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>

            <button
              onClick={() => {
                sound.playBassDrop();
                if (onOpenCCTVModal) onOpenCCTVModal();
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-red-950/50 hover:bg-red-900/40 border border-red-600/60 text-red-400 hover:text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_15px_rgba(239,68,68,0.3)] flex items-center justify-center gap-2 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <Video className="w-4 h-4" />
              <span>Live Cams</span>
            </button>
          </div>

          {/* Fast Navigation Chips to Required Sports */}
          <div className="mt-14 pt-8 border-t border-zinc-800/60 max-w-4xl mx-auto">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">
              Explore Our Olympic-Grade Arenas
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { name: 'Cricket', icon: '🏏', badge: 'Turf Nets' },
                { name: 'Football', icon: '⚽', badge: 'FIFA Turf' },
                { name: 'Basketball', icon: '🏀', badge: 'FIBA Hardwood' },
                { name: 'Badminton', icon: '🏸', badge: 'BWF Synthetic' },
                { name: 'Tennis', icon: '🎾', badge: 'Red Clay & Hard' },
              ].map((sport) => (
                <Link
                  key={sport.name}
                  to="/sports"
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-red-600/60 text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(239,68,68,0.35)] backdrop-blur-sm"
                >
                  <span className="text-base">{sport.icon}</span>
                  <span>{sport.name}</span>
                  <span className="text-[10px] text-red-400 font-bold bg-red-950/70 px-1.5 py-0.5 rounded border border-red-900/50">
                    {sport.badge}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ===================== LIVE STATS BAR ===================== */}
      <StatsSection />

      {/* ===================== OUR SPORTS SECTION ===================== */}
      <section className="py-20 relative bg-[#07070c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                <Flame className="w-4 h-4" />
                <span>Choose Your Passion</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                OUR SPORTS & ARENAS
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl mt-2">
                Five Olympic and international federation-certified sports built with precision turf, shock-absorption hardwood, and broadcast-grade floodlights.
              </p>
            </div>
            <Link
              to="/sports"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
            >
              <span>View All 5 Arenas & Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sports Grid with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsData.map((sport) => (
              <SportCard
                key={sport.id}
                sport={sport}
                onSelectSport={() => onOpenMembershipModal('premium')}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ===================== INTERACTIVE CAMPUS ARENA SELECTOR ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArenaCourtSelector onSelectCourt={() => onOpenMembershipModal('premium')} />
      </div>

      {/* ===================== ATHLETE RADAR ATTRIBUTE MATRIX ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AthleteRadarChart />
      </div>

      {/* ===================== ABOUT US & TROPHY SHOWCASE ===================== */}
      <section className="py-20 relative bg-gradient-to-b from-[#07070c] via-[#0f0b14] to-[#07070c] border-y border-red-900/30 overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-600/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                <span>Our History • Our Mission</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani'] leading-tight">
                MORE THAN A SPORTS CLUB — <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 text-glow">
                  A COMMUNITY OF CHAMPIONS.
                </span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Founded in 2018 in New Delhi, <strong className="text-white">Seven Star Masters</strong> was engineered to bridge the gap between Indian athletic talent and Olympic-grade standards. We believe greatness is forged through high-precision data, relentless discipline, and world-class guidance.
              </p>

              {/* 3 Pillars highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <div className="text-red-500 font-black text-xl mb-1 font-['Rajdhani']">01 / TECH</div>
                  <h4 className="text-white text-xs font-bold uppercase mb-1">Biomechanics</h4>
                  <p className="text-[11px] text-zinc-400">240fps slow-motion kinetic analysis for every shot and stride.</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <div className="text-red-500 font-black text-xl mb-1 font-['Rajdhani']">02 / MASTERS</div>
                  <h4 className="text-white text-xs font-bold uppercase mb-1">Elite Coaches</h4>
                  <p className="text-[11px] text-zinc-400">Former Olympians, UEFA, and BCCI certified trainers.</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800">
                  <div className="text-red-500 font-black text-xl mb-1 font-['Rajdhani']">03 / RECOVERY</div>
                  <h4 className="text-white text-xs font-bold uppercase mb-1">Cryo Suites</h4>
                  <p className="text-[11px] text-zinc-400">Sub-zero recovery chambers & hydro plunge therapy.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  onClick={() => sound.playClick()}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center gap-2 transition-all"
                >
                  <span>Read Full Club Story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/membership"
                  onClick={() => sound.playClick()}
                  className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-bold uppercase text-xs tracking-wider transition-all"
                >
                  Membership Tiers
                </Link>
              </div>
            </div>

            {/* Right: Golden Trophy Card with Tilt */}
            <div className="lg:col-span-5 relative">
              <TiltCard className="rounded-3xl" glowColor="rgba(234, 179, 8, 0.25)">
                <div className="relative rounded-3xl bg-gradient-to-b from-red-950/60 via-zinc-950 to-zinc-950 p-6 sm:p-8 border border-red-600/60 shadow-[0_0_40px_rgba(239,68,68,0.35)] text-center overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl"></div>
                  
                  {/* Trophy graphic */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 via-red-600/20 to-transparent border border-yellow-500/40 flex items-center justify-center text-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.3)] mb-4 animate-float">
                    <Trophy className="w-12 h-12 text-yellow-400" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Championship Heritage</span>
                  <h3 className="text-3xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                    CHAMPIONS ARE MADE HERE
                  </h3>
                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                    Home to 48 State and National championship cups across Cricket, Football, Badminton, Basketball, and Tennis tournaments.
                  </p>

                  <div className="mt-6 pt-4 border-t border-zinc-800/80 grid grid-cols-2 gap-4 text-left">
                    <div>
                      <span className="text-[10px] uppercase text-zinc-500 font-bold block">Next Big Clash</span>
                      <span className="text-sm font-bold text-white">Seven Star Championship</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-zinc-500 font-bold block">Grand Prize Pool</span>
                      <span className="text-sm font-bold text-yellow-400">₹5,00,000 Cash</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/events"
                      onClick={() => sound.playClick()}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 transition-all"
                    >
                      <span>View All Tournaments</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== OUR COACHES TEASER ===================== */}
      <section className="py-20 relative bg-[#07070c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>Learn From the Best</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                MEET OUR MASTER COACHES
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl mt-2">
                Certified high-performance directors, Olympian strength specialists, and tacticians who have prepared athletes for national caps.
              </p>
            </div>
            <Link
              to="/coaches"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
            >
              <span>Explore All Coaches</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Coaches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coachesData.slice(0, 3).map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onBookCoach={onOpenCoachModal}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ===================== UPCOMING EVENTS & COUNTDOWN ===================== */}
      <section className="py-20 relative bg-gradient-to-b from-[#07070c] via-[#0d0912] to-[#07070c] border-y border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                <Calendar className="w-4 h-4" />
                <span>Be a Part of Our Exciting Events</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                UPCOMING TOURNAMENTS
              </h2>
            </div>
            <Link
              to="/events"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
            >
              <span>Full Events Calendar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Countdown Feature Banner */}
          <div className="relative rounded-3xl bg-gradient-to-r from-red-950/80 via-zinc-950 to-zinc-950 border border-red-600/60 p-6 sm:p-8 shadow-[0_0_35px_rgba(239,68,68,0.3)] mb-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-600 text-white tracking-wider">
                  Championship Countdown
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani']">
                  Seven Star Championship 2026
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 flex items-center gap-3">
                  <span>📅 April 25, 2026</span>
                  <span>•</span>
                  <span>📍 Seven Star Main Coliseum</span>
                  <span>•</span>
                  <span className="text-yellow-400 font-semibold">Prize: ₹5,00,000</span>
                </p>
              </div>

              {/* Live Countdown Clock */}
              <div className="lg:col-span-5 flex items-center justify-start lg:justify-end gap-2 sm:gap-3">
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
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.slice(0, 3).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegisterEvent={onOpenEventModal}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ===================== INTERACTIVE TOURNAMENT BRACKET ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TournamentBracket />
      </div>

      {/* ===================== MEMBERSHIP PLANS TEASER ===================== */}
      <section className="py-20 relative bg-[#07070c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-widest mb-2">
              <Flame className="w-4 h-4" />
              <span>Choose Your Plan</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani']">
              MEMBERSHIP PLANS
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Transparent, athlete-first membership with full arena access, personal coaching allocations, and zero hidden costs.
            </p>
          </div>

          {/* Plans Grid with Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {membershipPlans.map((plan) => (
              <TiltCard key={plan.id} className="rounded-3xl" glowColor={plan.popular ? 'rgba(239, 68, 68, 0.35)' : 'rgba(255, 255, 255, 0.1)'}>
                <div
                  className={`relative rounded-3xl bg-[#0e0e16]/95 backdrop-blur-md border flex flex-col justify-between transition-all duration-300 p-6 sm:p-8 h-full ${
                    plan.popular
                      ? 'border-red-500 glow-red'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-black uppercase text-white font-['Rajdhani']">
                        {plan.name}
                      </h3>
                      {plan.popular ? (
                        <Flame className="w-6 h-6 text-red-500" />
                      ) : (
                        <Shield className="w-6 h-6 text-zinc-600" />
                      )}
                    </div>

                    <p className="text-xs text-zinc-400 mb-6">
                      {plan.subtitle}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-zinc-800">
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Rajdhani']">
                        ₹{plan.monthlyPrice}
                      </span>
                      <span className="text-zinc-400 text-xs">/month</span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                        Included Privileges
                      </span>
                      {plan.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      sound.playBassDrop();
                      onOpenMembershipModal(plan.id);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                        : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/membership"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
            >
              <span>View Full Feature Comparison Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ===================== TESTIMONIALS SPOTLIGHT ===================== */}
      <section className="py-20 relative bg-gradient-to-b from-[#07070c] via-[#0e0a13] to-[#07070c] border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-widest mb-2">
              <Star className="w-4 h-4 fill-red-500" />
              <span>Voices of Champions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani']">
              TRIUMPH STORIES
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Hear from state athletes, junior national players, and weekend warriors who train at Seven Star Masters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map((t) => (
              <TiltCard key={t.id} className="rounded-2xl" glowColor="rgba(239, 68, 68, 0.2)">
                <div className="p-6 rounded-2xl bg-[#0f0f18]/95 backdrop-blur-md border border-red-950 hover:border-red-600/50 transition-all flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-red-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                      ))}
                    </div>
                    <p className="text-xs text-zinc-300 italic leading-relaxed">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/80">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-red-500/50"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase">{t.name}</h4>
                      <span className="text-[10px] text-red-400 block">{t.badge}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* ===================== JOIN CTA BANNER ===================== */}
      <section className="py-16 relative bg-[#060609] border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-red-950 via-[#180a10] to-black border border-red-600/50 p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(239,68,68,0.3)] overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 flex items-center justify-center gap-2">
                <SquidSymbols size="sm" />
                <span>Are You Ready to Step Into the Arena?</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Rajdhani'] leading-tight">
                JOIN SEVEN STAR MASTERS TODAY
              </h2>
              <p className="text-sm text-zinc-300">
                Unlock 5 Olympic sports arenas, train under international coaches, and claim your spot on the podium.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => {
                    sound.playBassDrop();
                    onOpenMembershipModal('premium');
                  }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all"
                >
                  Claim Membership Pass
                </button>
                <Link
                  to="/contact"
                  onClick={() => sound.playClick()}
                  className="px-8 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold uppercase text-xs tracking-wider transition-all"
                >
                  Book Arena Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
