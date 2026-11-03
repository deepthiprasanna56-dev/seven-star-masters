import { useState } from 'react';
import { 
  Flame, Shield, Award, CheckCircle2, XCircle, ArrowRight, 
  Sparkles, CreditCard, ChevronRight, Check, HelpCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { membershipPlans, planComparisonFeatures } from '../data/membershipData';
import { sound } from '../utils/soundEffects';
import TiltCard from '../components/TiltCard';
import { SquidPlayerBadge, SquidSymbols } from '../components/SquidHudElements';
import AthleteCardStudio from '../components/AthleteCardStudio';
import MembershipCalculator from '../components/MembershipCalculator';

export default function Membership({ onOpenMembershipModal }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activePlan, setActivePlan] = useState('premium');
  const [playerNumber, setPlayerNumber] = useState('456');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    primarySport: 'Cricket',
    skillLevel: 'Intermediate',
    emergencyContact: '',
    emergencyPhone: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [membershipId, setMembershipId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim() || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid 10-digit mobile number is required';
    }
    if (!formData.age || Number(formData.age) < 6 || Number(formData.age) > 85) {
      errs.age = 'Age must be between 6 and 85';
    }
    if (!formData.emergencyContact.trim()) {
      errs.emergencyContact = 'Emergency contact person is required';
    }
    if (!formData.emergencyPhone.trim()) {
      errs.emergencyPhone = 'Emergency phone number is required';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must accept the club safety rules & code of conduct';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newId = 'SSM-' + Math.floor(100000 + Math.random() * 900000);
    const assignedPlayer = String(Math.floor(100 + Math.random() * 899));
    setPlayerNumber(assignedPlayer);
    setMembershipId(newId);
    setIsSuccess(true);

    sound.playSuccess();

    try {
      confetti({
        particleCount: 140,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#f43f5e', '#ffffff', '#fbbf24']
      });
    } catch {
      // fallback
    }
  };

  const selectedPlanData = membershipPlans.find((p) => p.id === activePlan) || membershipPlans[1];

  return (
    <div className="relative pt-24 pb-20 bg-[#060609] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <Flame className="w-3.5 h-3.5" />
          <span>Transparent Pricing</span>
          <SquidSymbols size="sm" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white font-['Rajdhani'] leading-none">
          MEMBERSHIP PLANS & PRICING
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Choose the tier that matches your athletic goals. Enjoy world-class arenas, recovery suites, and certified coaching panels.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className={`text-xs font-bold uppercase tracking-wider ${billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => {
              sound.playClick();
              setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
            }}
            className="w-14 h-7 rounded-full bg-zinc-900 border border-red-600/60 p-1 flex items-center transition-colors relative"
            aria-label="Toggle Billing Cycle"
          >
            <div
              className={`w-5 h-5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)] transition-transform duration-300 ${
                billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${billingCycle === 'annual' ? 'text-white' : 'text-zinc-500'}`}>
              Annual Billing
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-600/30 text-red-400 border border-red-500/50">
              Save 20%
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid with 3D Tilt */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => {
            const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;

            return (
              <TiltCard key={plan.id} className="rounded-3xl" glowColor={plan.popular ? 'rgba(239, 68, 68, 0.35)' : 'rgba(255, 255, 255, 0.1)'}>
                <div
                  className={`relative rounded-3xl bg-[#0e0e16]/95 backdrop-blur-md border flex flex-col justify-between transition-all duration-300 p-6 sm:p-8 h-full ${
                    plan.popular
                      ? 'border-red-500 glow-red'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Rajdhani']">
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
                        ₹{currentPrice}
                      </span>
                      <span className="text-zinc-400 text-xs">/month</span>
                      {billingCycle === 'annual' && (
                        <span className="text-[11px] text-zinc-500 ml-2">billed yearly</span>
                      )}
                    </div>

                    {/* Included features */}
                    <div className="space-y-3 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                        Included Privileges:
                      </span>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Not included items */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="space-y-2 mb-8 pt-4 border-t border-zinc-800/80">
                        {plan.notIncluded.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-500">
                            <XCircle className="w-4 h-4 text-zinc-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setActivePlan(plan.id);
                        document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                          : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white'
                      }`}
                    >
                      <span>Select {plan.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* ===================== INTERACTIVE 3D ATHLETE PASS STUDIO ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AthleteCardStudio
          onClaimPass={(passData) => {
            setFormData((prev) => ({
              ...prev,
              fullName: passData.athleteName,
              primarySport: passData.sport
            }));
            setPlayerNumber(passData.playerNumber);
            document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* ===================== INTERACTIVE MEMBERSHIP VALUE CALCULATOR ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <MembershipCalculator
          onSelectPlan={(planKey) => {
            setActivePlan(planKey);
            document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani']">
            TIER COMPARISON MATRIX
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">
            Compare access, personal coaching, and arena privileges side-by-side.
          </p>
        </div>

        <div className="rounded-3xl bg-[#0e0e16]/95 backdrop-blur-md border border-zinc-800 overflow-x-auto shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
            <thead className="bg-zinc-950/80 border-b border-zinc-800 text-white uppercase text-xs font-bold">
              <tr>
                <th className="p-4 sm:p-5">Feature</th>
                <th className="p-4 sm:p-5 text-center">Basic (₹999)</th>
                <th className="p-4 sm:p-5 text-center text-red-400">Premium (₹1,999)</th>
                <th className="p-4 sm:p-5 text-center">Elite (₹3,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80">
              {planComparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-white">{row.name}</td>
                  <td className="p-4 sm:p-5 text-center text-zinc-400">{row.basic}</td>
                  <td className="p-4 sm:p-5 text-center font-semibold text-red-400 bg-red-950/10">{row.premium}</td>
                  <td className="p-4 sm:p-5 text-center text-zinc-200">{row.elite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== EMBEDDED REGISTRATION FORM ===================== */}
      <section id="registration-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0d0d16] border border-red-600/60 p-6 sm:p-10 shadow-[0_0_50px_rgba(239,68,68,0.25)] overflow-hidden">
          
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700 absolute top-0 left-0 right-0"></div>

          {isSuccess ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center border-2 border-red-400 shadow-[0_0_35px_rgba(239,68,68,0.7)] animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>

              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <SquidSymbols size="sm" />
                  <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Registration Successful</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-wider text-white mt-1 font-['Rajdhani']">
                  Welcome to Seven Star Masters!
                </h3>
                <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto">
                  Your athlete profile has been generated. You have been drafted as <strong className="text-red-400 font-bold">PLAYER #{playerNumber}</strong>.
                </p>
              </div>

              {/* Digital Holographic Pass */}
              <div className="max-w-md mx-auto">
                <SquidPlayerBadge
                  playerNumber={playerNumber}
                  playerName={formData.fullName}
                  tier={`${selectedPlanData.name.toUpperCase()} MEMBER`}
                />
              </div>

              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold uppercase tracking-wider text-white"
              >
                Register Another Athlete
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
                    <Flame className="w-4 h-4" />
                    <span>Official Club Enlistment Form</span>
                  </div>
                  <SquidSymbols size="sm" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                  MEMBER REGISTRATION
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                  Selected Tier: <span className="text-red-400 font-bold uppercase">{selectedPlanData.name} (₹{billingCycle === 'monthly' ? selectedPlanData.monthlyPrice : selectedPlanData.annualPrice}/mo)</span>
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Aryan Malhotra"
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="athlete@example.com"
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Age (Years) *
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder="e.g. 22"
                      min="6"
                      max="85"
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                    {errors.age && <p className="text-xs text-red-400 mt-1">{errors.age}</p>}
                  </div>

                  {/* Primary Sport */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Primary Sport
                    </label>
                    <select
                      value={formData.primarySport}
                      onChange={(e) => setFormData({ ...formData, primarySport: e.target.value })}
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Cricket">Cricket (Turf Nets & Simulator)</option>
                      <option value="Football">Football (FIFA Turf & Cage)</option>
                      <option value="Basketball">Basketball (FIBA Hardwood)</option>
                      <option value="Badminton">Badminton (BWF Synthetic)</option>
                      <option value="Tennis">Tennis (Red Clay & Hard Court)</option>
                      <option value="Multi-Sport">Multi-Sport Cross Training</option>
                    </select>
                  </div>

                  {/* Skill Level */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Skill Level
                    </label>
                    <select
                      value={formData.skillLevel}
                      onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value })}
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Beginner">Beginner (Foundations)</option>
                      <option value="Intermediate">Intermediate (Regular Player)</option>
                      <option value="Advanced">Advanced (Tournament Ready)</option>
                      <option value="Elite Pro">State / National Competitive</option>
                    </select>
                  </div>

                  {/* Emergency Contact Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Emergency Contact Person *
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      placeholder="e.g. Ramesh Malhotra (Father)"
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                    {errors.emergencyContact && <p className="text-xs text-red-400 mt-1">{errors.emergencyContact}</p>}
                  </div>

                  {/* Emergency Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                      Emergency Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                      placeholder="+91 98111 22334"
                      className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                    {errors.emergencyPhone && <p className="text-xs text-red-400 mt-1">{errors.emergencyPhone}</p>}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-0.5 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-500"
                    />
                    <span>
                      I certify that I am medically fit for athletic training and agree to abide by the Seven Star Masters Club Code of Conduct and Arena Regulations.
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="text-xs text-red-400 mt-1">{errors.agreeTerms}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Flame className="w-4 h-4" />
                  <span>Submit Registration & Activate Pass</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
