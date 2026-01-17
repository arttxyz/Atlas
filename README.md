### Atlas Settings - VALORANT Pro Configurations (Final Version)
  Atlas Settings é uma plataforma de alta performance dedicada à referência de configurações competitivas de jogadores profissionais de VALORANT. O sistema consolida dados técnicos de todas as regiões oficiais do VCT (Americas, EMEA, APAC e China), oferecendo uma interface cyberpunk imersiva integrada com transmissões ao vivo via Twitch API.

### 📋 Visão Geral
  O projeto foi desenvolvido para ser o hub definitivo de análise técnica. Ele permite que jogadores competitivos comparem DPIs, sensibilidades, resoluções e crosshairs dos melhores atletas do mundo, mantendo a contextualização regional através de hubs dedicados e streams em tempo real.

  Características Principais
  Cobertura Global Completa: Hubs funcionais para VCT Americas, EMEA, APAC e China.

  Integração Twitch Live: Player dinâmico integrado em cada página regional para acompanhar os torneios oficiais enquanto navega pelos dados.

  Motor de Busca Unificado: Lógica avançada de busca que localiza jogadores e configurações em todas as bases de dados simultaneamente.

  Arquitetura de Dados Técnica: Detalhamento profundo incluindo eDPI, Hz de polling rate, Raw Input e especificações de vídeo (Aspect Ratio e Refresh Rate).

  Design High-End: Interface responsiva com estética Cyberpunk, utilizando efeitos de glow neon, tipografia Orbitron e componentes shadcn/ui.

## 🚀 Quick Start
  Pré-requisitos
  Node.js 18+

  pnpm ou npm

  Instalação e Execução
  # 1. Instale as dependências
  pnpm install

# 2. Inicie o ambiente de produção local
  pnpm dev

# 3. Acesse no navegador
 http://localhost:3000

### 📁 Estrutura do Projeto Consolidada   
  Atlas-main/
├── client/
│   ├── public/
│   │   └── images/
│   │       ├── regions/          # Logos VCT (Americas, EMEA, APAC, China)
│   │       └── teams/            # Logos das equipes globais
│   ├── src/
│   │   ├── components/
│   │   │   ├── LiveStream.tsx    # Player Twitch com suporte a domínios dinâmicos
│   │   │   ├── RegionSelector.tsx # Navegação entre os 4 hubs globais
│   │   │   ├── TeamCard.tsx      # Cards com contagem dinâmica de jogadores
│   │   │   └── PlayerCard.tsx    # Display de status e função do pro
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Hub Americas (Landing)
│   │   │   ├── EmeaDetail.tsx    # Hub EMEA
│   │   │   ├── ApacDetail.tsx    # Hub APAC
│   │   │   ├── ChinaDetail.tsx   # Hub China
│   │   │   ├── PlayerDetail.tsx  # Página técnica individual (Busca global)
│   │   ├── data/
│   │   │   ├── vctAmericasData.ts # Base de dados Americas
│   │   │   ├── vctEmeaData.ts     # Base de dados EMEA
│   │   │   ├── vctApacData.ts     # Base de dados APAC
│   │   │   └── vctChinaData.ts    # Base de dados China
│   │   ├── App.tsx               # Roteador centralizado (Wouter)
│   │   └── main.tsx              # Ponto de entrada React 19
├── shared/
│   └── types.ts                  # Interfaces TypeScript unificadas
├── vite.config.ts                # Configurações de Build e Alias
└── package.json

### 🎨 Design System
Paleta: Fundo em Dark Navy (#0F172A), destaques em Cyan (#00D9FF) e acentos em Purple (#A855F7).

Tipografia: Orbitron para títulos e elementos de interface futuristas; Inter para legibilidade de dados numéricos.

Componentes: Utilização de Cards com bordas semitransparentes e Glow Effects ativos em interações de hover.

### 📊 Especificações Técnicas de Dados
O modelo de dados suporta a análise completa da performance do jogador:

-Mouse: DPI, Sensitivity, eDPI (calculado), Polling Rate (Hz) e Raw Input status.
-Vídeo: Resolução nativa/esticada, Aspect Ratio (16:9, 4:3, 5:4), Refresh Rate (Hz) e Modo de Exibição.
-Crosshair: Códigos oficiais de importação direta para o jogo.
-Status: Diferenciação visual entre jogadores Ativos e Benched.

### 🔄 Rotas e Navegação

| Rota | Destino | Conteúdo Principal |
| :--- | :--- | :--- |
| `/` | **Hub Americas** | Grid das 12 organizações do VCT Americas e Live Stream regional. |
| `/region/emea` | **Hub EMEA** | Grid das equipes europeias e player integrado da Twitch. |
| `/region/apac` | **Hub APAC** | Grid das equipes da Ásia-Pacífico e Live Stream da região. |
| `/region/china` | **Hub China** | Grid das organizações da liga chinesa e transmissão dedicada. |
| `/team/:id` | **Escalação de Time** | Lista detalhada de jogadores ativos e benched por     organização. |
| `/player/:id` | **Settings Pro** | Ficha técnica completa com DPI, sensibilidade, resolução e crosshair. |

### 🔧 Tecnologias Core
-React 19 & TypeScript: Base sólida para gerenciamento de estado e tipagem.
-Tailwind CSS 4: Estilização utilitária de última geração.
-Wouter: Sistema de roteamento minimalista e veloz.
-Twitch Embed API: Integração de vídeo com suporte a parâmetros de parent domain.
-Lucide React: Biblioteca de ícones consistente.