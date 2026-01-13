import { Player } from '@/../../shared/types';
import { Link } from 'wouter';
import RoleTag from './RoleTag';

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link href={`/player/${player.id}`}>
      <a className="block group">
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-4">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/0 transition-all duration-300" />

          <div className="relative z-10 space-y-3">
            {/* Player Name */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white font-orbitron tracking-wider">
                  {player.nickname}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{player.fullName}</p>
              </div>
            </div>

            {/* Role Badge */}
            <div className="flex items-center gap-2">
              <RoleTag role={player.role} size="sm" />
            </div>

            {/* Country */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
                {player.country}
              </span>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                player.status === 'Active' ? 'bg-green-400' : 'bg-gray-500'
              }`} />
              <span className="text-xs text-gray-400">{player.status}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
