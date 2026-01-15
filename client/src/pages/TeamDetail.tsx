import { useParams, Link } from 'wouter';
import RoleTag from '@/components/RoleTag';
import { americasTeams, americasPlayers } from '@/data/vctAmericasData';
import { emeaTeams, emeaPlayers } from '@/data/vctEmeaData';
import { apacTeams, apacPlayers } from "@/data/vctApacData";


export default function TeamDetail() {
  const params = useParams();
  const teamId = params.id;

  // Procurar em ambas as regiões
  let team = americasTeams.find((t) => t.id === teamId);
  let teamPlayers: any[] = team ? americasPlayers.filter((p) => p.teamId === team?.id) : [];
  
  // Se não encontrar no Americas, procurar no EMEA
  if (!team) {
    team = emeaTeams.find((t) => t.id === teamId);
    teamPlayers = team ? emeaPlayers.filter((p) => p.teamId === team?.id) : [];
  }
   if (!team) {
    team = apacTeams.find((t) => t.id === teamId);
    teamPlayers = team ? apacPlayers.filter((p) => p.teamId === team?.id) : [];
  }
  const activePlayers = teamPlayers.filter((p) => p.status === 'Active');
  const benchedPlayers = teamPlayers.filter((p) => p.status === 'Benched');

  if (!team) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white font-orbitron">
            TIME NÃO ENCONTRADO
          </h1>
          <Link href="/">
            <a className="text-cyan-400 hover:text-cyan-300">← Voltar para Home</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-cyan-500/20">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="text-2xl font-black text-cyan-400 font-orbitron tracking-wider group-hover:text-cyan-300 transition-colors">
                ATLAS
              </div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Settings
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className="text-cyan-400 hover:text-cyan-300 text-sm">← Voltar</a>
          </Link>
        </div>
      </nav>

      {/* Team Header */}
      <section className="border-b border-cyan-500/10 py-12">
        <div className="container space-y-6">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="space-y-2">
                <h1 className="text-5xl font-black text-white font-orbitron tracking-wider">
                  {team.tag}
                </h1>
                <p className="text-xl text-gray-400">{team.name}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-400">
                  Fundado em {team.foundedYear}
                </div>
              </div>
            </div>

            <div className="w-24 h-24 bg-slate-800/50 border border-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <img
                src={team.logoUrl}
                alt={team.name}
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Active Players Section */}
      {activePlayers.length > 0 && (
        <section className="py-12 border-b border-cyan-500/10">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white font-orbitron tracking-wider">
                ESCALAÇÃO TITULAR ({activePlayers.length})
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-cyan-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {activePlayers.map((player) => (
                <Link key={player.id} href={`/player/${player.id}`}>
                  <a className="block group">
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 p-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/0 transition-all duration-300" />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white font-orbitron tracking-wider">
                              {player.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <RoleTag role={player.role} size="sm" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
                            {player.country}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="text-xs text-gray-400">Ativo</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benched Players Section */}
      {benchedPlayers.length > 0 && (
        <section className="py-12">
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white font-orbitron tracking-wider">
                BENCHED ({benchedPlayers.length})
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-orange-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {benchedPlayers.map((player) => (
                <Link key={player.id} href={`/player/${player.id}`}>
                  <a className="block group">
                    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded border border-gray-600/30 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 p-4 opacity-75">
                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-400 font-orbitron tracking-wider">
                              {player.nickname}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <RoleTag role={player.role} size="sm" />
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="text-xs bg-slate-700/50 px-2 py-1 rounded">
                            {player.country}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-500" />
                          <span className="text-xs text-gray-500">Benched</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-8 mt-16">
        <div className="container text-center text-sm text-gray-500">
          <p>
            Atlas Settings © 2026. Não afiliado com Riot Games.
          </p>
        </div>
      </footer>
    </div>
  );
}
