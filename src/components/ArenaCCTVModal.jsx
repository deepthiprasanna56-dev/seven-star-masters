import { useState, useEffect } from 'react';
import { X, Video, Radio, Activity, Eye, Maximize2, Shield, Flame } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ArenaCCTVModal({ isOpen, onClose }) {
  const [activeCam, setActiveCam] = useState('cam-01');
  const [currentTime, setCurrentTime] = useState('');

  const cameras = [
    {
      id: 'cam-01',
      title: 'CAM 01: MAIN STADIUM TURF',
      location: 'Sector 01-A • FIFA Pitch',
      status: 'MATCH IN PROGRESS',
      fps: '60.0 FPS',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
      feedInfo: 'Floodlights: 1,400 Lux • Spectators: 1,280'
    },
    {
      id: 'cam-02',
      title: 'CAM 02: FIBA HARDWOOD COLISEUM',
      location: 'Sector 03-C • Maple Court A',
      status: 'TEAM SHOOTAROUND',
      fps: '60.0 FPS',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
      feedInfo: 'Shot Clocks: Synced • Temp: 21°C'
    },
    {
      id: 'cam-03',
      title: 'CAM 03: CRICKET 22-YARD PAVILION',
      location: 'Sector 01-B • Bio Net 04',
      status: 'RADAR SPEED TESTING',
      fps: '240.0 FPS SLOW-MO',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80',
      feedInfo: 'Bola Machine: 142 kmph • Biomech Active'
    },
    {
      id: 'cam-04',
      title: 'CAM 04: BWF BADMINTON PLEX',
      location: 'Sector 04-D • Court 02',
      status: 'DOUBLES NATIONAL TRIAL',
      fps: '60.0 FPS',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
      feedInfo: 'Zero-Drift Airflow: Verified 0.0 m/s'
    },
    {
      id: 'cam-05',
      title: 'CAM 05: CRYO & HYDRO RECOVERY',
      location: 'Sector 06-F • Sub-Zero Pods',
      status: 'RECOVERY BATCH 07',
      fps: '30.0 FPS IR',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
      feedInfo: 'Pod Temp: -110°C • Heart-rate Telemetry: Normal'
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(now.getMilliseconds() / 100));
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  const currentCam = cameras.find((c) => c.id === activeCam) || cameras[0];

  const handleSwitchCam = (id) => {
    sound.playClick();
    setActiveCam(id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#09080e] border border-red-600/70 rounded-3xl shadow-[0_0_60px_rgba(239,68,68,0.35)] overflow-hidden font-['Rajdhani']">
        
        {/* Glow Header */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700"></div>

        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-red-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-red-500">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                LIVE ARENA CCTV TELEMETRY
              </span>
            </div>
            <span className="text-zinc-600">|</span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">
              SERVER: DEL-07 • {currentTime}
            </span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-zinc-800 transition-colors"
            aria-label="Close CCTV Feed"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Feed Viewport */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={currentCam.image}
            alt={currentCam.title}
            className="w-full h-full object-cover brightness-90 filter contrast-110 transition-all duration-300"
          />

          {/* CRT Scanline Filter Simulation */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40"></div>

          {/* Corner targeting brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-red-500 pointer-events-none"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-red-500 pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-red-500 pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-red-500 pointer-events-none"></div>

          {/* HUD Overlay Top */}
          <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-xs text-white pointer-events-none">
            <div className="flex items-center gap-2 bg-black/70 px-3 py-1 rounded-lg backdrop-blur-md border border-red-900/60">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-bold tracking-wider">{currentCam.title}</span>
            </div>
            <div className="font-mono text-red-400 bg-black/70 px-3 py-1 rounded-lg backdrop-blur-md border border-zinc-800">
              {currentCam.fps}
            </div>
          </div>

          {/* HUD Overlay Bottom */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white pointer-events-none">
            <div className="bg-black/70 px-3 py-1 rounded-lg backdrop-blur-md border border-zinc-800 text-zinc-300">
              {currentCam.location} • <span className="text-emerald-400 font-bold">{currentCam.status}</span>
            </div>
            <div className="bg-black/70 px-3 py-1 rounded-lg backdrop-blur-md border border-zinc-800 text-zinc-400 font-mono text-[11px]">
              {currentCam.feedInfo}
            </div>
          </div>
        </div>

        {/* Camera Channel Switcher Bar */}
        <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-900">
          <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">
            SELECT SURVEILLANCE CHANNEL:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {cameras.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSwitchCam(c.id)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  activeCam === c.id
                    ? 'bg-red-950/70 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono text-red-400 font-bold uppercase">{c.id.toUpperCase()}</div>
                <div className="text-xs font-black uppercase truncate mt-0.5">{c.title.split(': ')[1]}</div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
