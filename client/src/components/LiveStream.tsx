import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Twitch } from 'lucide-react';

interface LiveStreamProps {
  regionId: string;
  defaultChannel: string;
}

/**
 * Componente LiveStream
 * Resolve o erro 'does not provide an export named default'
 * Implementa o player da Twitch com suporte a domínios dinâmicos (localhost/produção)
 */
const LiveStream: React.FC<LiveStreamProps> = ({ regionId, defaultChannel }) => {
  // Captura o domínio atual para o parâmetro 'parent' da Twitch (obrigatório para o embed funcionar)
  const parentDomain = typeof window !== 'undefined' ? window.location.hostname : 'localhost';
  const twitchEmbedUrl = `https://player.twitch.tv/?channel=${defaultChannel}&parent=${parentDomain}&autoplay=true&muted=false`;

  return (
    <Card className="bg-slate-900/50 border border-cyan-500/20 shadow-xl overflow-hidden">
      <CardHeader className="border-b border-cyan-500/10 bg-slate-900/80">
        <CardTitle className="text-cyan-400 font-orbitron flex items-center gap-2 text-lg tracking-wider">
          <Twitch className="size-5 animate-pulse" />
          LIVE STREAM - {regionId.toUpperCase( )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' /* Proporção 16:9 */ }}>
          <iframe
            src={twitchEmbedUrl}
            allowFullScreen={true}
            title={`Twitch Stream: ${defaultChannel}`}
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
        <div className="p-4 bg-slate-900/90">
          <div className="flex items-start gap-3 text-xs text-gray-400 leading-relaxed">
            <AlertTriangle className="size-4 text-yellow-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-300 mb-1">Nota de Integração:</p>
              <p>
                O player acima está configurado para o canal <span className="text-cyan-400">"{defaultChannel}"</span>. 
                Para a lógica de tempo real com PandaScore, certifique-se de que seu backend está enviando o 
                ID do canal ativo via props.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveStream;
