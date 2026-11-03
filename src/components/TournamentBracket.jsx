import { useState } from 'react';
import { Trophy, Flame, ChevronRight, Award, Shield } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function TournamentBracket() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const bracketData = {
    round1: [
      { id: 'm1', team1: 'Delhi Striker Kings', score1: 3, team2: 'Neon Wolves FC', score2: 1, sport: 'Football', winner: 'team1' },
      { id: 'm2', team1: 'Seven Star Titans', score1: 2, team2: 'Apex Gladiators', score2: 0, sport: 'Football', winner: 'team1' },
      { id: 'm3', team1: 'Viper Racquets Club', score1: 21, team2: 'Cyber Smashers', score2: 18, sport: 'Badminton', winner: 'team1' },
      { id: 'm4', team1: 'Red Phoenix CC', score1: 184, team2: 'Thunderbolts XI', score2: 172, sport: 'Cricket', winner: 'team1' },
    ],
    semis: [
      { id: 's1', team1: 'Delhi Striker Kings', score1: 2, team2: 'Seven Star Titans', score2: 3, sport: 'Football', winner: 'team2' },
      { id: 's2', team1: 'Viper Racquets Club', score1: 21, team2: 'Red Phoenix CC', score2: 16, sport: 'Multi-Sport', winner: 'team1' },
    ],
    finals: [
      { id: 'f1', team1: 'Seven Star Titans', score1: 4, team2: 'Viper Racquets Club', score2: 2, sport: 'Grand Championship Clash', winner: 'team1', champion: 'Seven Star Titans' }
    ]
  };

  const handleMatchClick = (match) => {
    sound.playClick();
    setSelectedMatch(match);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0b12] border border-red-600/40 shadow-[0_0_40px_rgba(239,68,68,0.2)] my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>Interactive Championship Bracket</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-['Rajdhani'] mt-1">
            SEVEN STAR TOURNAMENT KNOCKOUT TREE
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Click on any fixture to inspect scoreline telemetry, match MVP, and bracket progression.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-red-950/40 border border-red-500/40 px-3.5 py-1.5 rounded-full text-red-400 font-bold uppercase">
          <Flame className="w-3.5 h-3.5 text-red-500" />
          <span>Grand Prize: ₹5,00,000 Cash</span>
        </div>
      </div>

      {/* Bracket Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-['Rajdhani']">
        
        {/* Col 1: Quarter Finals */}
        <div className="space-y-4">
          <div className="text-center pb-2 border-b border-zinc-800 text-xs font-bold uppercase tracking-wider text-red-400">
            Round 1: Quarter-Finals
          </div>
          {bracketData.round1.map((m) => (
            <div
              key={m.id}
              onClick={() => handleMatchClick(m)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                selectedMatch?.id === m.id
                  ? 'bg-red-950/60 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-zinc-950/70 border-zinc-800/80 hover:border-red-600/50'
              }`}
            >
              <div className="text-[10px] text-zinc-500 uppercase font-semibold mb-1 flex justify-between">
                <span>{m.sport}</span>
                <span>MATCH #{m.id}</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className={`flex justify-between items-center ${m.winner === 'team1' ? 'text-white font-bold' : 'text-zinc-400'}`}>
                  <span>{m.team1}</span>
                  <span className="font-mono text-red-400 font-bold px-1.5 py-0.5 rounded bg-zinc-900">{m.score1}</span>
                </div>
                <div className={`flex justify-between items-center ${m.winner === 'team2' ? 'text-white font-bold' : 'text-zinc-400'}`}>
                  <span>{m.team2}</span>
                  <span className="font-mono text-red-400 font-bold px-1.5 py-0.5 rounded bg-zinc-900">{m.score2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Col 2: Semi Finals */}
        <div className="space-y-6 flex flex-col justify-around">
          <div className="text-center pb-2 border-b border-zinc-800 text-xs font-bold uppercase tracking-wider text-rose-400">
            Round 2: Semi-Finals
          </div>
          {bracketData.semis.map((m) => (
            <div
              key={m.id}
              onClick={() => handleMatchClick(m)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedMatch?.id === m.id
                  ? 'bg-red-950/60 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                  : 'bg-zinc-950/80 border-red-950 hover:border-red-600/60'
              }`}
            >
              <div className="text-[10px] text-zinc-500 uppercase font-semibold mb-1.5 flex justify-between">
                <span>{m.sport}</span>
                <span className="text-red-400 font-bold">SEMI-FINAL</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className={`flex justify-between items-center ${m.winner === 'team1' ? 'text-white font-bold' : 'text-zinc-400'}`}>
                  <span>{m.team1}</span>
                  <span className="font-mono text-red-400 font-bold px-2 py-0.5 rounded bg-zinc-900">{m.score1}</span>
                </div>
                <div className={`flex justify-between items-center ${m.winner === 'team2' ? 'text-white font-bold' : 'text-zinc-400'}`}>
                  <span>{m.team2}</span>
                  <span className="font-mono text-red-400 font-bold px-2 py-0.5 rounded bg-zinc-900">{m.score2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Col 3: Grand Final */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="text-center pb-2 border-b border-zinc-800 text-xs font-bold uppercase tracking-wider text-yellow-400">
            👑 Grand Championship Final
          </div>
          {bracketData.finals.map((m) => (
            <div
              key={m.id}
              onClick={() => handleMatchClick(m)}
              className="p-5 rounded-2xl bg-gradient-to-br from-red-950/80 via-zinc-950 to-zinc-950 border border-yellow-500/60 shadow-[0_0_25px_rgba(234,179,8,0.25)] cursor-pointer"
            >
              <div className="flex items-center justify-between text-[11px] text-yellow-400 font-bold uppercase mb-3">
                <span>Gold Cup Showdown</span>
                <Trophy className="w-4 h-4 text-yellow-400" />
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-white font-black text-base">
                  <span className="flex items-center gap-1.5">
                    <span>👑</span> {m.team1}
                  </span>
                  <span className="font-mono text-yellow-400 font-bold px-2.5 py-1 rounded bg-black border border-yellow-500/40">
                    {m.score1}
                  </span>
                </div>
                <div className="flex justify-between items-center text-zinc-400 font-medium text-sm">
                  <span>{m.team2}</span>
                  <span className="font-mono text-zinc-300 px-2.5 py-1 rounded bg-black">
                    {m.score2}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800 text-center">
                <span className="text-[10px] text-zinc-500 uppercase font-bold block">Champion Crowned</span>
                <span className="text-sm font-black text-yellow-400 tracking-wider uppercase text-glow-white">
                  {m.champion}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Selected Match Telemetry Drawer */}
      {selectedMatch && (
        <div className="mt-6 p-4 rounded-xl bg-zinc-950 border border-red-600/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="text-zinc-500 uppercase font-bold text-[10px] block">Fixture Telemetry Review</span>
            <span className="text-white font-bold text-sm">
              {selectedMatch.team1} vs {selectedMatch.team2} ({selectedMatch.sport})
            </span>
          </div>
          <div className="flex items-center gap-4 text-zinc-300">
            <span>Possession / Accuracy: <strong className="text-white">64% vs 36%</strong></span>
            <span>Speed Rating: <strong className="text-red-400">9.4/10</strong></span>
            <button
              onClick={() => setSelectedMatch(null)}
              className="text-xs text-red-400 hover:text-white uppercase font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
