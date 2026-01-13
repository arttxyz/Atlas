import { Link } from 'wouter';
import TeamCard from '@/components/TeamCard';
import RegionSelector from '@/components/RegionSelector';
import { emeaTeams, emeaPlayers } from '@/data/vctEmeaData';
import type { Team, Player } from '@/shared/types';

export default function EmeaDetail() {
  // Contar jogadores por time
  const playersByTeam: Record<string, number> = {};
  emeaTeams.forEach((team: Team) => {
    playersByTeam[team.id] = emeaPlayers.filter((p: Player) => p.teamId === team.id).length;
  });

  const activePlayersCount = emeaPlayers.filter((p: Player) => p.status === 'Active').length;
  const benchedPlayersCount = emeaPlayers.filter((p: Player) => p.status === 'Benched').length;

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
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-cyan-400 font-orbitron">
              VCT EMEA
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 border-b border-cyan-500/10 overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="container relative z-10 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-white font-orbitron tracking-wider leading-tight">
              PRO SETTINGS
            </h1>
            <p className="text-lg text-cyan-400 font-semibold">
              Configurações de profissionais
            </p>
          </div>
          <p className="text-gray-300 max-w-2xl text-base leading-relaxed">
            Explore as configurações técnicas utilizadas pelos melhores jogadores profissionais de VALORANT.
            DPI, sensibilidade, resolução e muito mais.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded p-4">
              <div className="text-2xl font-bold text-cyan-400 font-orbitron">
                {emeaTeams.length}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                Equipes
              </div>
            </div>
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded p-4">
              <div className="text-2xl font-bold text-cyan-400 font-orbitron">
                {activePlayersCount}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                Ativos
              </div>
            </div>
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded p-4">
              <div className="text-2xl font-bold text-cyan-400 font-orbitron">
                {benchedPlayersCount}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                Benched
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Region Selector Section */}
      <RegionSelector />

      {/* Teams Grid Section */}
      <section className="py-12">
        <div className="container space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-white font-orbitron tracking-wider">
              EQUIPES
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {emeaTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                playerCount={playersByTeam[team.id] || 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-8 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-cyan-400 font-orbitron mb-2">
                ATLAS SETTINGS
              </h3>
              <p className="text-sm text-gray-400">
                Plataforma de referência de configurações competitivas de VALORANT.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Regiões</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>VCT Americas (Ativo)</li>
                <li>VCT EMEA (Ativo)</li>
                <li>VCT APAC (Em breve)</li>
                <li>VCT China (Em breve)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-2">Informações</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Dados de 2026</li>
                <li>Atualizado regularmente</li>
                <li>Fonte: VCT Oficial</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/10 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>
              Atlas Settings © 2026. Não afiliado com Riot Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
