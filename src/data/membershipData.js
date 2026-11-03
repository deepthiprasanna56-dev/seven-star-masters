export const membershipPlans = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Perfect for passionate beginners & fitness enthusiasts',
    monthlyPrice: 999,
    annualPrice: 799,
    badge: null,
    popular: false,
    color: 'border-zinc-700 hover:border-red-500/50',
    headerBg: 'bg-zinc-900/60',
    buttonText: 'Get Started',
    buttonVariant: 'secondary',
    features: [
      'Access to 2 chosen sports arenas (Mon-Fri)',
      'Standard locker room & shower access',
      'Free high-speed arena WiFi & drinking water',
      'Community tournament spectator passes',
      'Monthly fitness & BMI health checkup',
      'Access to sports cafe & lounge (10% off)'
    ],
    notIncluded: [
      'Weekend prime-time court booking',
      '1-on-1 Certified Coach personal training',
      'Cryotherapy & ice bath recovery suites',
      'Biomechanical 240fps video analysis'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'For dedicated athletes aiming for competitive mastery',
    monthlyPrice: 1999,
    annualPrice: 1599,
    badge: 'Most Popular',
    popular: true,
    color: 'border-red-600 glow-red',
    headerBg: 'bg-gradient-to-b from-red-950/80 to-zinc-950',
    buttonText: 'Join Premium Today',
    buttonVariant: 'primary',
    features: [
      'Unlimited 7-day all-arena access (Cricket, Football, Tennis, Badminton, Basketball)',
      '2 Complimentary 1-on-1 coaching sessions / month',
      'Prime-time 72-hour priority court reservation',
      'Full modern gym & Olympic free-weight access',
      'Biomechanical camera swing / bowling video capture',
      'Direct entry to Seven Star Club Tournaments (50% off)',
      'Guest pass privilege (2 passes per month)',
      'Club jersey kit & welcome sports bag'
    ],
    notIncluded: [
      'Unlimited private cryotherapy recovery suite sessions',
      'Dedicated private VIP locker with nameplate'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    subtitle: 'For national circuit athletes & VIP members who demand the absolute best',
    monthlyPrice: 3999,
    annualPrice: 3199,
    badge: 'VIP Ultimate',
    popular: false,
    color: 'border-red-500/80 hover:border-red-400',
    headerBg: 'bg-zinc-900/90',
    buttonText: 'Claim Elite VIP',
    buttonVariant: 'primary-outline',
    features: [
      'All-inclusive 24/7 unlimited VIP access across all sports facilities',
      '6 Dedicated 1-on-1 personal coaching sessions per month with Head Coaches',
      'Unlimited Cryotherapy, Infrared Sauna & Ice Bath hydro-recovery suites',
      'Personalized sports nutrition meal blueprints & monthly bloodwork tracking',
      'Private dedicated executive locker with custom monogram plate',
      'Full free entry to all Seven Star Tournaments & Championships',
      'Unlimited guest passes & VIP spectator lounge access',
      'Complimentary Yonex / Wilson equipment stringing and racket care'
    ],
    notIncluded: []
  }
];

export const planComparisonFeatures = [
  { name: 'Access to All 5 Sports Arenas', basic: '2 Sports', premium: 'All 5 Sports', elite: 'All 5 Sports (VIP Prioritized)' },
  { name: 'Court Booking Advance Window', basic: '24 Hours', premium: '72 Hours', elite: '7 Days Advance Priority' },
  { name: 'Gym & High-Intensity Conditioning Zone', basic: 'Off-Peak Only', premium: 'Unlimited Access', elite: 'Unlimited + VIP Rig' },
  { name: '1-on-1 Personal Master Coaching', basic: 'Paid Extra', premium: '2 Sessions/Month', elite: '6 Sessions/Month' },
  { name: 'Video Biomechanics & Speed Radar', basic: 'No', premium: 'Monthly Analysis', elite: 'Weekly AI Feedback' },
  { name: 'Cryotherapy & Recovery Pods', basic: 'No', premium: '1 Session/Mo', elite: 'Unlimited Recovery' },
  { name: 'Tournament & League Entry', basic: 'Standard Fee', premium: '50% Discount', elite: '100% Free Entry' },
  { name: 'Guest Passes per Month', basic: 'None', premium: '2 Passes', elite: 'Unlimited' },
  { name: 'Exclusive Club Pro Kit & Bag', basic: 'No', premium: 'Yes', elite: 'Yes (Custom Monogram)' }
];
