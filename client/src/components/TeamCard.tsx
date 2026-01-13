import { Team } from '@/../../shared/types';
import { Link } from 'wouter';

interface TeamCardProps {
  team: Team;
  playerCount: number;
}

export default function TeamCard({ team, playerCount }: TeamCardProps) {
  return (
    <Link href={`/team/${team.id}`}>
      <a className="block group">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-6 h-full">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/0 transition-all duration-300" />

          <div className="relative z-10 space-y-4 h-full flex flex-col">
            {/* Logo Space */}
            <div className="w-16 h-16 bg-slate-700/50 rounded-lg border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <img
                src={team.logoUrl}
                alt={team.name}
                className="w-14 h-14 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Team Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-black text-white font-orbitron tracking-wider">
                {team.tag}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{team.name}</p>
            </div>

            {/* Stats */}
            <div className="space-y-2 border-t border-cyan-500/10 pt-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Jogadores</span>
                <span className="text-cyan-400 font-bold">{playerCount}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Status</span>
                <span className="text-green-400 font-bold">Ativo</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-cyan-400 text-lg group-hover:translate-x-1 transition-transform self-end">
              →
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
