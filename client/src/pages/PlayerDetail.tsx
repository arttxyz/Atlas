import { useParams, Link } from "wouter";
import { americasPlayers, americasTeams, playerSettingsExamples as americasSettings } from "@/data/vctAmericasData";
import { emeaPlayers, emeaTeams, playerSettingsExamples as emeaSettings } from "@/data/vctEmeaData";
import { apacPlayers, apacTeams, playerSettingsExamples as apacSettings } from "@/data/vctApacData";
import { chinaPlayers, chinaTeams, playerSettingsExamples as chinaSettings } from "@/data/vctChinaData";
import RoleTag from "@/components/RoleTag";
import type { Player, Team, PlayerSettings } from "@../../shared/types";

export default function PlayerDetail() {
  const params = useParams();
  const playerId = params.id;

  // 1. Unificar todos os jogadores e times
  const allPlayers: Player[] = [...americasPlayers, ...emeaPlayers, ...apacPlayers, ...chinaPlayers];
  const allTeams: Team[] = [...americasTeams, ...emeaTeams, ...apacTeams, ...chinaTeams];

  // 2. Unificar todas as configurações com proteção contra valores nulos/undefined
  const allSettings: PlayerSettings[] = [
    ...(americasSettings || []),
    ...(emeaSettings || []),
    ...(apacSettings || []),
    ...(chinaSettings || [])
  ].filter(s => s && s.playerId); // Garante que só temos objetos válidos com playerId

  

  // --- DEBUG MOVE PARA CÁ (DEPOIS DE INICIALIZAR ALLSETTINGS) ---
  console.log("--- DEBUG PLAYER DETAIL ---");
  console.log("ID que estou buscando:", playerId);
  console.log("Total de configurações carregadas:", allSettings.length);
  console.log("IDs disponíveis nas configurações:", allSettings.map(s => s.playerId));
  console.log("---------------------------");

  // 3. Realizar a busca
  const player = allPlayers.find((p) => p.id === playerId);
  const team = player ? allTeams.find((t) => t.id === player.teamId) : null;
  const settings = allSettings.find((s) => s.playerId === playerId);

  // Caso o jogador ou time não existam na base de dados
  if (!player || !team) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white font-orbitron">JOGADOR NÃO ENCONTRADO</h1>
          <Link href="/"><a className="text-cyan-400 hover:text-cyan-300">← Voltar para Home</a></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* O restante do seu código JSX continua igual daqui para baixo... */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-cyan-500/20">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="text-2xl font-black text-cyan-400 font-orbitron tracking-wider group-hover:text-cyan-300 transition-colors">ATLAS</div>
              <div className="text-xs font-bold text-purple-400 font-orbitron mt-1">SETTINGS</div>
            </a>
          </Link>
        </div>
      </nav>

      <main className="container py-12 space-y-12">
        {/* Player Header */}
        <div className="bg-slate-900/40 border border-cyan-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-slate-800 rounded-2xl border border-cyan-500/20 flex items-center justify-center text-4xl font-black text-cyan-500 shadow-2xl shadow-cyan-500/10">
              {player.name[0]}
            </div>
            <div className="text-center md:text-left space-y-4">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <h1 className="text-4xl md:text-6xl font-black text-white font-orbitron tracking-tighter uppercase">{player.name}</h1>
                <RoleTag role={player.role} />
              </div>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500/50 uppercase text-xs font-bold">Time:</span>
                  <Link href={`/team/${team.id}`}><a className="text-white font-bold hover:text-cyan-400 transition-colors">{team.name}</a></Link>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500/50 uppercase text-xs font-bold">País:</span>
                  <span className="text-white font-bold">{player.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        {settings ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mouse Settings */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-black text-white font-orbitron tracking-wider flex items-center gap-3">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full" /> MOUSE
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">DPI</p>
                  <p className="text-2xl font-bold text-white">{settings.mouse.dpi}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sensibilidade</p>
                  <p className="text-2xl font-bold text-white">{settings.mouse.sensitivity}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">eDPI</p>
                  <p className="text-2xl font-bold text-cyan-400">{settings.mouse.edpi}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Polling Rate</p>
                  <p className="text-2xl font-bold text-white">{settings.mouse.hz}Hz</p>
                </div>
              </div>
            </div>

            {/* Video Settings */}
            <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-black text-white font-orbitron tracking-wider flex items-center gap-3">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full" /> VÍDEO
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Resolução</p>
                  <p className="text-2xl font-bold text-white">{settings.video.resolution}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Aspect Ratio</p>
                  <p className="text-2xl font-bold text-white">{settings.video.aspectRatio}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Refresh Rate</p>
                  <p className="text-2xl font-bold text-white">{settings.video.refreshRate}Hz</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Display Mode</p>
                  <p className="text-2xl font-bold text-white">{settings.video.displayMode}</p>
                </div>
              </div>
            </div>

            {/* Crosshair Section */}
            <div className="lg:col-span-2 bg-slate-900/40 border border-white/5 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-black text-white font-orbitron tracking-wider flex items-center gap-3">
                <span className="w-1.5 h-6 bg-green-500 rounded-full" /> CROSSHAIR
              </h3>
              <div className="bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Código de Importação</p>
                  <code className="text-cyan-400 font-mono text-sm break-all bg-slate-950 px-4 py-2 rounded border border-white/5 block">
                    {settings.crosshair.code}
                  </code>
                </div>
                <button 
                  onClick={() => navigator.clipboard.writeText(settings.crosshair.code)}
                  className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-bold text-sm hover:bg-cyan-500/20 transition-all whitespace-nowrap"
                >
                  COPIAR CÓDIGO
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Mensagem de Configurações não disponíveis */
          <div className="bg-slate-900/40 border border-cyan-500/10 rounded-3xl p-16 text-center space-y-6">
            <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20">
              <span className="text-3xl text-cyan-400 font-orbitron">!</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white font-orbitron tracking-wider uppercase">Configurações não disponíveis</h2>
              <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                As configurações para este jogador estão sendo coletadas e verificadas. Volte em breve para conferir os dados atualizados!
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}