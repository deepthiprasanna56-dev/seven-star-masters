import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Flame, 
  MessageSquare, ChevronDown, ChevronUp, Shield, Sparkles 
} from 'lucide-react';
import { clubInfo } from '../data/clubData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: 'Cricket',
    subject: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Can I book a trial session before committing to a membership plan?',
      a: 'Yes, absolutely! We offer a 1-day All-Arena Discovery Pass for ₹499 (which is 100% credited toward your first month’s fee when you activate a membership). You get full access to the turf, courts, and gym.'
    },
    {
      q: 'What equipment do I need to bring?',
      a: 'For Cricket, players can use their personal bats and pads, or borrow our Gray-Nicolls club kits. For Badminton and Tennis, we provide complimentary demo rackets (Yonex / Wilson) and tournament-grade shuttles/balls.'
    },
    {
      q: 'Are coaching sessions included in the monthly fee?',
      a: 'The Premium tier includes 2 complimentary 1-on-1 coaching sessions per month, while the Elite tier includes 6 private masterclass sessions. Basic members can book coaching separately at discounted member rates.'
    },
    {
      q: 'What are the operating hours and peak timings?',
      a: 'Our facilities are open from 05:00 AM to 11:30 PM on weekdays, and until 12:00 Midnight on weekends. Peak hours are generally 06:00 AM - 09:00 AM and 05:30 PM - 09:30 PM.'
    },
    {
      q: 'Do you offer hostel accommodation or intensive summer training camps?',
      a: 'Yes, for outstation athletes and national circuit contenders, Seven Star Masters operates residential high-performance training camps with sports nutrition boarding and recovery suites.'
    }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = 'Full name must be at least 3 characters';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || !/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Valid 10-digit mobile number required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="relative pt-24 pb-20 bg-[#060609] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-red-600/10 blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase text-white font-['Rajdhani'] leading-none">
          CONTACT & CLUB ARENA HQ
        </h1>
        <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Have questions about memberships, tournament registrations, or coaching consultations? Our sports directors are on standby.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e16] border border-red-900/40 shadow-[0_0_30px_rgba(239,68,68,0.15)] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-950 border border-red-500/60 flex items-center justify-center font-black text-xl text-white">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase text-white font-['Rajdhani']">
                    SEVEN STAR MASTERS ARENA
                  </h3>
                  <span className="text-xs text-red-400 font-semibold uppercase">Official Headquarters</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/80 pt-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase text-[10px] font-bold">Complex Address</span>
                    <span className="text-zinc-200">{clubInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase text-[10px] font-bold">Direct Phone Lines</span>
                    <span className="text-white font-medium block">{clubInfo.phone}</span>
                    <span className="text-zinc-400 text-xs block">{clubInfo.secondaryPhone} (Academy Reception)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase text-[10px] font-bold">Email Inquiries</span>
                    <span className="text-white font-medium block">{clubInfo.email}</span>
                    <span className="text-zinc-400 text-xs block">{clubInfo.supportEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block uppercase text-[10px] font-bold">Operating Hours</span>
                    <span className="text-zinc-200 block">Mon - Fri: {clubInfo.workingHours.weekdays}</span>
                    <span className="text-zinc-200 block">Sat - Sun: {clubInfo.workingHours.weekends}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Stadium Locator Card */}
            <div className="p-6 rounded-3xl bg-[#0e0e16] border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Arena Campus Navigation
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 uppercase font-bold">
                  Sector 23 Metro: 500m
                </span>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center text-center p-4 group">
                <div className="absolute inset-0 bg-stadium-grid opacity-30"></div>
                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.7)] animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white uppercase">Seven Star Sports Coliseum</div>
                  <p className="text-[11px] text-zinc-400">Gate 1: Cricket & Football • Gate 2: Racquet Plex</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0e0e16] border border-red-600/50 shadow-[0_0_40px_rgba(239,68,68,0.2)] relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700 absolute top-0 left-0 right-0"></div>

              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Message Dispatched</span>
                    <h3 className="text-2xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
                      Your inquiry regarding <span className="text-white font-semibold">{formData.sport}</span> has been assigned to our lead coordinator. We will reach out via <span className="text-red-400 font-semibold">{formData.phone}</span> within 2 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Flame className="w-4 h-4" />
                      Direct Inquiry Form
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Rajdhani'] mt-1">
                      CONNECT WITH OUR SPORTS DIRECTORS
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Fill out the form below and our team will get in touch with arena schedules and induction details.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Singhania"
                          className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                        />
                        {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
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
                          placeholder="vikram@example.com"
                          className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>

                      {/* Phone */}
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

                      {/* Sport of Interest */}
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                          Sport of Interest
                        </label>
                        <select
                          value={formData.sport}
                          onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                          className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                        >
                          <option value="Cricket">Cricket (Turf Pitches & Nets)</option>
                          <option value="Football">Football (FIFA Quality Turf)</option>
                          <option value="Basketball">Basketball (FIBA Hardwood)</option>
                          <option value="Badminton">Badminton (BWF Synthetic)</option>
                          <option value="Tennis">Tennis (Clay & Hard Courts)</option>
                          <option value="General Club Pass">General Club Pass / All Sports</option>
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                      >
                        <option value="General Inquiry">General Club Inquiry</option>
                        <option value="Membership Tiers">Membership Tiers & Pricing</option>
                        <option value="Coach 1-on-1 Booking">Coach 1-on-1 Consultation</option>
                        <option value="Tournament Entry">Tournament / Championship Entry</option>
                        <option value="Corporate / School Bookings">Corporate Sports League Booking</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your sporting background, requirements, or desired visit date..."
                        className="w-full bg-[#141420] border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                      ></textarea>
                      {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold tracking-wider uppercase text-sm shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Inquiry to Club HQ</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <section className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              Common Inquiries
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Rajdhani'] mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0e0e16] border border-zinc-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-zinc-900/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-zinc-900 text-red-400 flex-shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>

    </div>
  );
}
