import { useState, useEffect } from 'react';
import { X, CheckCircle2, Flame, Shield, Award, Sparkles, CreditCard, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { membershipPlans } from '../data/membershipData';
import { sound } from '../utils/soundEffects';
import { SquidPlayerBadge, SquidSymbols } from './SquidHudElements';

export default function MembershipModal({ isOpen, onClose, preselectedPlan = 'premium' }) {
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [playerNumber, setPlayerNumber] = useState('456');
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [membershipId, setMembershipId] = useState('');

  useEffect(() => {
    if (preselectedPlan) {
      setSelectedPlan(preselectedPlan);
    }
  }, [preselectedPlan]);

  if (!isOpen) return null;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const randomId = 'SSM-' + Math.floor(100000 + Math.random() * 900000);
    const assignedPlayer = String(Math.floor(100 + Math.random() * 899));
    setPlayerNumber(assignedPlayer);
    setMembershipId(randomId);
    setIsSubmitted(true);

    sound.playSuccess();

    try {
      confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#f43f5e', '#ffffff', '#fbbf24']
      });
    } catch {
      // fallback
    }
  };

  const activePlanData = membershipPlans.find((p) => p.id === selectedPlan) || membershipPlans[1];
  const price = billingCycle === 'monthly' ? activePlanData.monthlyPrice : activePlanData.annualPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c0c14] border border-red-600/60 rounded-3xl shadow-[0_0_60px_rgba(239,68,68,0.35)] my-8 overflow-hidden text-gray-100">
        
        {/* Glow Header bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700"></div>

        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-red-600/30 rounded-full border border-zinc-800 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation State with Holographic Squid Badge */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center border-2 border-red-400 shadow-[0_0_35px_rgba(239,68,68,0.7)] animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <SquidSymbols size="sm" />
                <span className="text-xs uppercase tracking-widest text-red-500 font-bold">Arena Induction Complete</span>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-wider text-white mt-1 font-['Rajdhani']">
                Player Credentials Issued!
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-md mx-auto">
                Welcome, <span className="text-white font-semibold">{formData.fullName}</span>. You have been drafted as <strong className="text-red-400">PLAYER #{playerNumber}</strong>.
              </p>
            </div>

            {/* Futuristic Holographic Player Pass Badge */}
            <div className="max-w-md mx-auto">
              <SquidPlayerBadge
                playerNumber={playerNumber}
                playerName={formData.fullName}
                tier={`${activePlanData.name.toUpperCase()} TIER`}
              />
            </div>

            <p className="text-xs text-zinc-500 max-w-sm mx-auto">
              Digital biometric arena entry pass and locker allocation confirmation has been transmitted to <span className="text-zinc-300">{formData.email}</span>.
            </p>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all"
            >
              Enter Seven Star Arena
            </button>
          </div>
        ) : (
          /* Registration Form */
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-red-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Official Enlistment</span>
                </div>
                <SquidSymbols size="sm" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-white mt-1 font-['Rajdhani']">
                Join Seven Star Masters
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Select tier, claim your official Player Tag, and unlock Olympic-standard arenas.
              </p>
            </div>

            {/* Plan Tier Selector */}
            <div className="grid grid-cols-3 gap-2.5">
              {membershipPlans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedPlan(plan.id);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all relative ${
                    selectedPlan === plan.id
                      ? 'border-red-500 bg-red-950/40 shadow-[0_0_20px_rgba(239,68,68,0.35)]'
                      : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2 right-2 text-[8px] font-bold uppercase bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                      Hot
                    </span>
                  )}
                  <div className="text-xs font-bold text-white uppercase">{plan.name}</div>
                  <div className="text-sm sm:text-base font-black text-red-400 mt-0.5">
                    ₹{plan.monthlyPrice}
                    <span className="text-[10px] text-zinc-400 font-normal">/mo</span>
                  </div>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Athlete Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aryan Malhotra"
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
                    placeholder="e.g. 21"
                    min="6"
                    max="85"
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
                    <option value="Cricket">Cricket (Turf Nets & Stadium)</option>
                    <option value="Football">Football (FIFA Turf & Cage)</option>
                    <option value="Basketball">Basketball (FIBA Hardwood)</option>
                    <option value="Badminton">Badminton (BWF Synthetic)</option>
                    <option value="Tennis">Tennis (Hard Court & Clay)</option>
                    <option value="Multi-Sport">Multi-Sport All-Rounder</option>
                  </select>
                </div>

                {/* Skill Level */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Current Skill Level
                  </label>
                  <select
                    value={formData.skillLevel}
                    onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value })}
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Beginner">Beginner (Foundational)</option>
                    <option value="Intermediate">Intermediate (Club Level)</option>
                    <option value="Advanced">Advanced (Tournament Player)</option>
                    <option value="Pro">State / National Competitive</option>
                  </select>
                </div>

                {/* Emergency Contact */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                    placeholder="e.g. Ramesh Malhotra (Father)"
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
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
                    className="w-full bg-[#13131e] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                  {errors.emergencyPhone && <p className="text-xs text-red-400 mt-1">{errors.emergencyPhone}</p>}
                </div>
              </div>

              {/* Agreement checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-zinc-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-0.5 rounded border-zinc-700 bg-zinc-900 text-red-600 focus:ring-red-500"
                  />
                  <span>
                    I agree to the Seven Star Masters Code of Athletic Conduct, safety regulations, and arena equipment guidelines.
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-xs text-red-400 mt-1">{errors.agreeTerms}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all"
                >
                  <Flame className="w-4 h-4" />
                  <span>Enlist Athlete • Claim Pass (₹{price}/mo)</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-zinc-500 mt-2">
                  🔒 Zero registration fee. Instant access badge issued on completion.
                </p>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
