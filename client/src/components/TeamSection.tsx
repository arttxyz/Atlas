import { Team, Player } from '@/../../shared/types';
import { Link } from 'wouter';
import PlayerCard from './PlayerCard';

interface TeamSectionProps {
  team: Team;
  players: Player[];
}

export default function TeamSection({ team, players }: TeamSectionProps) {
  return (
    <Link href={`/vct-americas/${team.id}`}>
      <a className="block group">
        <div className="space-y-4">
          {/* Team Header */}
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 rounded border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 p-4">
            {/* Diagonal cut effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-cyan-500/5 transition-all duration-300" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-700 rounded border border-cyan-500/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-cyan-400 font-orbitron">
                    {team.tag}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-orbitron tracking-wider">
                    {team.name}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {players.length} jogadores
                  </p>
                </div>
              </div>
              <div className="text-cyan-400 text-2xl group-hover:translate-x-1 transition-transform">
                →
              </div>
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {players.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
