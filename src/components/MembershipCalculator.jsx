import { useState, useMemo } from 'react';
import { Calculator, Flame, CheckCircle2, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function MembershipCalculator({ onSelectPlan }) {
  const [weeklySessions, setWeeklySessions] = useState(4);
  const [coachSessions, setCoachSessions] = useState(2);
  const [guestPasses, setGuestPasses] = useState(2);
  const [recoverySpa, setRecoverySpa] = useState(true);

  // Calculate market value vs membership fee
  const calculations = useMemo(() => {
    // Standard pay-per-use court fee ~ ₹800 per 2-hour session
    const courtCost = weeklySessions * 4 * 800;
    // Private coach session ~ ₹1,500 each
    const coachCost = coachSessions * 1500;
    // Guest pass ~ ₹600 each
    const guestCost = guestPasses * 600;
    // Recovery spa session ~ ₹1,200/mo
    const spaCost = recoverySpa ? 3600 : 0;

    const totalMarketValue = courtCost + coachCost + guestCost + spaCost;

    let recommendedPlan = 'basic';
    let planPrice = 999;

    if (coachSessions >= 4 || recoverySpa || weeklySessions >= 5) {
      recommendedPlan = 'elite';
      planPrice = 3999;
    } else if (weeklySessions >= 3 || coachSessions >= 1) {
      recommendedPlan = 'premium';
      planPrice = 1999;
    }

    const monthlySavings = Math.max(0, totalMarketValue - planPrice);

    return {
      totalMarketValue,
      recommendedPlan,
      planPrice,
      monthlySavings
    };
  }, [weeklySessions, coachSessions, guestPasses, recoverySpa]);

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-[#0b0a12] border border-red-600/40 shadow-[0_0_40px_rgba(239,68,68,0.2)] my-16">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-4 h-4 text-red-500" />
            <span>Interactive ROI & Tier Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] mt-1">
            MEMBERSHIP VALUE CALCULATOR
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
            Adjust your weekly training habits below to see how much you save with an all-inclusive Seven Star Masters pass.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-400 text-xs font-bold uppercase">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Save up to ₹{calculations.monthlySavings.toLocaleString('en-IN')}/mo</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Input Column */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Weekly Sessions Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-zinc-300 uppercase tracking-wider">Weekly Arena Sessions</span>
              <span className="text-red-400 font-mono text-sm">{weeklySessions} Days / Week</span>
            </div>
            <input
              type="range"
              min="1"
              max="7"
              value={weeklySessions}
              onChange={(e) => {
                sound.playClick();
                setWeeklySessions(Number(e.target.value));
              }}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          {/* Coach Sessions Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-zinc-300 uppercase tracking-wider">1-on-1 Personal Coach Sessions</span>
              <span className="text-red-400 font-mono text-sm">{coachSessions} Sessions / Month</span>
            </div>
            <input
              type="range"
              min="0"
              max="8"
              value={coachSessions}
              onChange={(e) => {
                sound.playClick();
                setCoachSessions(Number(e.target.value));
              }}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          {/* Guest Passes Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-zinc-300 uppercase tracking-wider">Guest Passes Needed</span>
              <span className="text-red-400 font-mono text-sm">{guestPasses} Passes / Month</span>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              value={guestPasses}
              onChange={(e) => {
                sound.playClick();
                setGuestPasses(Number(e.target.value));
              }}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          {/* Recovery Spa Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase text-white block">Cryotherapy & Ice Bath Recovery</span>
              <span className="text-[11px] text-zinc-400">Sub-zero recovery chambers & hydrotherapy plunge pools</span>
            </div>
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setRecoverySpa(!recoverySpa);
              }}
              className={`w-12 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                recoverySpa ? 'bg-red-600 justify-end' : 'bg-zinc-800 justify-start'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-white shadow-md"></div>
            </button>
          </div>

        </div>

        {/* Calculation Result Summary Box */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-red-950/60 via-zinc-950 to-zinc-950 border border-red-600/70 shadow-[0_0_30px_rgba(239,68,68,0.3)] font-['Rajdhani'] text-center space-y-4">
          
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">
            Calculated Recommendation
          </span>

          <div>
            <h4 className="text-3xl sm:text-4xl font-black uppercase text-white">
              {calculations.recommendedPlan.toUpperCase()} PASS
            </h4>
            <div className="text-4xl font-black text-red-500 mt-1">
              ₹{calculations.planPrice.toLocaleString('en-IN')}
              <span className="text-xs text-zinc-400 font-normal"> / month</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/70 border border-zinc-800 text-left text-xs space-y-2">
            <div className="flex justify-between text-zinc-400">
              <span>Pay-as-you-go Market Value:</span>
              <span className="text-white line-through font-semibold">
                ₹{calculations.totalMarketValue.toLocaleString('en-IN')}/mo
              </span>
            </div>
            <div className="flex justify-between text-zinc-400 border-t border-zinc-800/80 pt-2">
              <span className="text-emerald-400 font-bold">Your Monthly Savings:</span>
              <span className="text-emerald-400 font-black text-sm">
                +₹{calculations.monthlySavings.toLocaleString('en-IN')}/mo
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playBassDrop();
              if (onSelectPlan) onSelectPlan(calculations.recommendedPlan);
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 transition-all"
          >
            <span>Activate {calculations.recommendedPlan.toUpperCase()} Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}
