import { useState } from 'react';
import { X, Trophy, Calendar, MapPin, Users, CheckCircle2, ChevronRight, Shield } from 'lucide-react';

export default function EventRegisterModal({ isOpen, onClose, event }) {
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    email: '',
    phone: '',
    squadSize: '5',
    category: 'Open Division',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [registered, setRegistered] = useState(false);
  const [registrationPass, setRegistrationPass] = useState('');

  if (!isOpen || !event) return null;

  const validate = () => {
    const errs = {};
    if (!formData.teamName.trim()) errs.teamName = 'Team/Player name is required';
    if (!formData.captainName.trim()) errs.captainName = 'Captain / Participant name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid 10-digit mobile number required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const passCode = 'TICK-' + Math.floor(10000 + Math.random() * 90000);
    setRegistrationPass(passCode);
    setRegistered(true);
  };

  const handleClose = () => {
    setRegistered(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0c0c14] border border-red-600/50 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.35)] overflow-hidden text-gray-100 my-8">
        
        {/* Glow accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 to-rose-600"></div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {registered ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
              <Trophy className="w-8 h-8 text-white" />
            </div>

            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Entry Confirmed</span>
              <h3 className="text-2xl font-black uppercase text-white mt-1 font-['Rajdhani']">
                Tournament Slot Reserved!
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Team <span className="text-white font-semibold">{formData.teamName}</span> is officially drafted into <span className="text-red-400 font-semibold">{event.title}</span>!
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-red-900/40 rounded-xl text-left text-xs space-y-2">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Official Tournament Pass:</span>
                <span className="font-mono text-red-400 font-bold text-sm">{registrationPass}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Date & Time:</span>
                <span className="text-white">{event.date} • {event.time}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Venue:</span>
                <span className="text-white">{event.venue}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Prize Pool:</span>
                <span className="text-red-400 font-semibold">{event.prizePool}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              Back to Events
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-7 space-y-5">
            {event.image && (
              <div className="relative -mx-6 -mt-6 h-36 overflow-hidden sm:-mx-7 sm:-mt-7 sm:h-44">
                <img
                  src={event.image}
                  alt={`${event.title} tournament`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/seven-star-banner-2.jpg';
                  }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-black/20 to-transparent" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-1.5 text-red-500 text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-4 h-4" />
                <span>Tournament Enlistment</span>
              </div>
              <h3 className="text-2xl font-black uppercase text-white font-['Rajdhani'] mt-0.5">
                {event.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                <span>📅 {event.date}</span>
                <span>📍 {event.venue}</span>
                <span className="text-red-400 font-semibold">Entry: {event.entryFee}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Team / Squad Name *
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="e.g. Red Vipers FC / Apex Striker"
                  className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                />
                {errors.teamName && <p className="text-xs text-red-400 mt-1">{errors.teamName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Captain / Lead Athlete Name *
                </label>
                <input
                  type="text"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  placeholder="Enter captain full name"
                  className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                />
                {errors.captainName && <p className="text-xs text-red-400 mt-1">{errors.captainName}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Captain Phone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="captain@email.com"
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Squad Size
                  </label>
                  <select
                    value={formData.squadSize}
                    onChange={(e) => setFormData({ ...formData, squadSize: e.target.value })}
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="1">Solo Player (1)</option>
                    <option value="2">Doubles Pair (2)</option>
                    <option value="5">Squad of 5 (Cage / 3v3)</option>
                    <option value="7">Squad of 7</option>
                    <option value="11">Full Team of 11-15</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Division
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Open Division">Open Division (All Ages)</option>
                    <option value="Under-19">Youth Under-19</option>
                    <option value="Under-15">Junior Under-15</option>
                    <option value="Corporate / Veterans">Corporate & Masters</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold tracking-wider uppercase text-sm shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all mt-2"
              >
                Register Team & Reserve Spot
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
