import { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function CoachBookingModal({ isOpen, onClose, coach }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedDate: '',
    selectedTime: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (coach && coach.availableSlots && coach.availableSlots.length > 0) {
      setFormData((prev) => ({
        ...prev,
        selectedTime: coach.availableSlots[0]
      }));
    }
  }, [coach]);

  if (!isOpen || !coach) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim() || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.selectedDate) {
      errs.selectedDate = 'Please select a session date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Generate next 7 dates for easy selection
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0d0d15] border border-red-600/50 rounded-2xl shadow-[0_0_40px_rgba(239,68,68,0.35)] overflow-hidden text-gray-100 my-8">
        
        {/* Glow accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 to-rose-600"></div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Appointment Confirmed</span>
              <h3 className="text-2xl font-black uppercase text-white mt-1 font-['Rajdhani']">
                Session Booked!
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Your 1-on-1 master session with <span className="text-white font-semibold">{coach.name}</span> is confirmed for <span className="text-red-400 font-semibold">{formData.selectedDate}</span> at <span className="text-red-400 font-semibold">{formData.selectedTime}</span>.
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-left text-xs space-y-1.5">
              <div className="text-zinc-400">Athlete: <span className="text-white font-medium">{formData.name}</span></div>
              <div className="text-zinc-400">Sport & Focus: <span className="text-white font-medium">{coach.sport} - {coach.specialization}</span></div>
              <div className="text-zinc-400">Venue: <span className="text-white font-medium">Seven Star Arena High Performance Center</span></div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold tracking-wider uppercase text-xs shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-7 space-y-5">
            {/* Coach mini profile */}
            <div className="flex items-center gap-4 pb-4 border-b border-zinc-800/80">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
              />
              <div>
                <span className="text-[11px] font-bold uppercase text-red-500 tracking-wider">Book 1-on-1 Masterclass</span>
                <h3 className="text-xl font-black uppercase text-white font-['Rajdhani'] leading-tight">
                  {coach.name}
                </h3>
                <p className="text-xs text-zinc-400">{coach.role}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Athlete Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Phone Number *
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
                    placeholder="athlete@email.com"
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Select Date *
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={formData.selectedDate}
                    onChange={(e) => setFormData({ ...formData, selectedDate: e.target.value })}
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                  {errors.selectedDate && <p className="text-xs text-red-400 mt-1">{errors.selectedDate}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.selectedTime}
                    onChange={(e) => setFormData({ ...formData, selectedTime: e.target.value })}
                    className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    {coach.availableSlots?.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                  Training Focus / Goals (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Bowling pace improvement, biomechanical action review, tactical defense..."
                  className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold tracking-wider uppercase text-sm shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all"
              >
                Confirm Private Master Session
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
