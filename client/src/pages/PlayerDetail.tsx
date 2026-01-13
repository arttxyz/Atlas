import { useParams, Link } from 'wouter';
import RoleTag from '@/components/RoleTag';
import { americasPlayers, americasTeams, playerSettingsExamples } from '@/data/vctAmericasData';

export default function PlayerDetail() {
  const params = useParams();
  const playerId = params.id;

  const player = americasPlayers.find((p) => p.id === playerId);
  const team = player ? americasTeams.find((t) => t.id === player.teamId) : null;
  const settings = playerSettingsExamples.find((s) => s.playerId === playerId);

  if (!player || !team) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white font-orbitron">
            JOGADOR NÃO ENCONTRADO
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
          <Link href={`/team/${team.id}`}>
            <a className="text-cyan-400 hover:text-cyan-300 text-sm">← Voltar para {team.tag}</a>
          </Link>
        </div>
      </nav>

      {/* Player Header */}
      <section className="border-b border-cyan-500/10 py-12">
        <div className="container space-y-6">
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div className="space-y-2">
                <h1 className="text-5xl font-black text-white font-orbitron tracking-wider">
                  {player.nickname}
                </h1>
              </div>

              <div className="flex items-center gap-4">
                <RoleTag role={player.role} size="lg" />
                <div className="text-sm text-gray-400">
                  {player.country}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className={`w-3 h-3 rounded-full ${
                  player.status === 'Active' ? 'bg-green-400' : 'bg-gray-500'
                }`} />
                <span className="text-sm font-semibold text-gray-300">
                  {player.status === 'Active' ? 'Ativo' : 'Benched'}
                </span>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-cyan-500/20 rounded p-6 text-center">
              <div className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                Equipe
              </div>
              <Link href={`/team/${team.id}`}>
                <a className="block hover:text-cyan-300 transition-colors">
                  <div className="text-2xl font-bold text-cyan-400 font-orbitron">
                    {team.tag}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{team.name}</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Section */}
      {settings ? (
        <section className="py-12">
          <div className="container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white font-orbitron tracking-wider">
                CONFIGURAÇÕES
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mouse Settings */}
              <div className="bg-slate-800/30 border border-cyan-500/20 rounded p-6 space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 font-orbitron tracking-wider">
                  MOUSE
                </h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">DPI:</span>
                    <span className="text-white font-bold">{settings.mouse.dpi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sensibilidade:</span>
                    <span className="text-white font-bold">{settings.mouse.sensitivity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">eDPI:</span>
                    <span className="text-cyan-400 font-bold">{settings.mouse.edpi}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Hz:</span>
                    <span className="text-white font-bold">{settings.mouse.hz}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Raw Input:</span>
                    <span className={`font-bold ${settings.mouse.rawInput ? 'text-green-400' : 'text-red-400'}`}>
                      {settings.mouse.rawInput ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Video Settings */}
              <div className="bg-slate-800/30 border border-cyan-500/20 rounded p-6 space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 font-orbitron tracking-wider">
                  VÍDEO
                </h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Resolução:</span>
                    <span className="text-white font-bold">{settings.video.resolution}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Aspect Ratio:</span>
                    <span className="text-white font-bold">{settings.video.aspectRatio}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Refresh Rate:</span>
                    <span className="text-white font-bold">{settings.video.refreshRate}Hz</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Display Mode:</span>
                    <span className="text-white font-bold">{settings.video.displayMode}</span>
                  </div>
                </div>
              </div>

              {/* Crosshair */}
              <div className="bg-slate-800/30 border border-cyan-500/20 rounded p-6 space-y-4 md:col-span-2">
                <h3 className="text-lg font-bold text-cyan-400 font-orbitron tracking-wider">
                  CROSSHAIR
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-400">Código de Importação:</p>
                  <div className="bg-slate-900/50 border border-cyan-500/10 rounded p-3 font-mono text-sm text-cyan-300 break-all">
                    {settings.crosshair.code}
                  </div>
                </div>
              </div>


            </div>

            <div className="text-xs text-gray-500 text-center">
              Última atualização: {settings.lastUpdated}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12">
          <div className="container text-center space-y-4">
            <p className="text-gray-400">
              Configurações não disponíveis para este jogador no momento.
            </p>
            <p className="text-sm text-gray-500">
              As configurações estão sendo coletadas e verificadas.
            </p>
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
