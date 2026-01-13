# Atlas Settings - VALORANT Pro Configurations

Uma plataforma especializada de referência de configurações competitivas utilizadas por jogadores profissionais de VALORANT. O site organiza dados técnicos por regiões competitivas oficiais da Riot Games, começando com o **VCT Americas** como MVP.

## 📋 Visão Geral

**Atlas Settings** é um hub centralizado para pesquisa e análise de configurações profissionais de VALORANT. O objetivo é servir como referência confiável para jogadores competitivos que buscam entender as escolhas técnicas dos melhores profissionais do mundo.

### Características Principais

- **Organização por Regiões**: Estrutura preparada para VCT Americas, EMEA, APAC e China
- **Dados Detalhados**: Informações completas sobre DPI, sensibilidade, resolução, refresh rate e crosshair
- **Escalações Atualizadas**: Jogadores ativos e benched com status claro
- **Design Cyberpunk**: Interface moderna com glow effects e tipografia agressiva
- **Navegação Intuitiva**: Grid de times → Escalação → Configurações individuais

## 🚀 Quick Start

### Pré-requisitos

- Node.js 18+
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# 1. Extraia o ZIP
unzip Atlas
cd Atlas-main

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev

# 4. Acesse no navegador
# http://localhost:3000
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Visualizar build localmente
pnpm preview
```

## 📁 Estrutura do Projeto

```
valorant-pro-settings-hub/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── regions/          # Logos dos VCTs (80x80px PNG)
│   │   │   │   ├── vct-americas-logo.png
│   │   │   │   ├── vct-emea-logo.png
│   │   │   │   ├── vct-apac-logo.png
│   │   │   │   └── vct-china-logo.png
│   │   │   └── teams/            # Logos dos times (200x200px PNG)
│   │   │       ├── envy-logo.png
│   │   │       ├── loud-logo.png
│   │   │       └── ... (12 times total)
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── RegionSelector.tsx # Seletor de regiões (4 botões pill)
│   │   │   ├── TeamCard.tsx       # Card individual de time
│   │   │   ├── PlayerCard.tsx     # Card individual de jogador
│   │   │   └── RoleTag.tsx        # Badge de função (Duelist, etc)
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Página inicial com grid de times
│   │   │   ├── TeamDetail.tsx     # Escalação de um time
│   │   │   ├── PlayerDetail.tsx   # Configurações de um jogador
│   │   │   └── NotFound.tsx       # Página 404
│   │   ├── data/
│   │   │   └── vctAmericasData.ts # Base de dados dos times/jogadores
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx   # Contexto de tema (dark mode)
│   │   ├── hooks/
│   │   │   ├── useMobile.tsx
│   │   │   └── useComposition.ts
│   │   ├── lib/
│   │   │   └── utils.ts           # Utilitários (cn, etc)
│   │   ├── App.tsx                # Roteador principal
│   │   ├── main.tsx               # Entry point React
│   │   └── index.css              # Estilos globais + Tailwind
│   └── index.html
├── server/
│   └── index.ts                   # Servidor Express (placeholder)
├── shared/
│   ├── types.ts                   # Tipos TypeScript compartilhados
│   └── const.ts                   # Constantes
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

### Paleta de Cores (Cyberpunk)

- **Primária**: Cyan (`#00D9FF`)
- **Secundária**: Purple (`#A855F7`)
- **Fundo**: Dark Navy (`#0F172A`)
- **Texto**: White/Gray

### Tipografia

- **Display**: Orbitron (bold, 900)
- **Body**: Inter (regular, 400-700)
- **Mono**: JetBrains Mono (código)

### Componentes Principais

- **Botões Pill**: Regiões com logos e status
- **Cards**: Times com contagem de jogadores
- **Badges**: Funções (Duelist, Controller, etc) com cores específicas
- **Glow Effects**: Efeitos de brilho em elementos interativos

## 📊 Estrutura de Dados

### Modelo de Dados

```typescript
// Região
interface Region {
  id: string;
  name: string;
  active: boolean;
}

// Time
interface Team {
  id: string;
  tag: string;
  name: string;
  founded: number;
  country: string;
  players: Player[];
}

// Jogador
interface Player {
  id: string;
  name: string;
  role: 'Duelist' | 'Initiator' | 'Controller' | 'Sentinel' | 'Flex';
  country: string;
  status: 'Ativo' | 'Benched';
  settings: PlayerSettings;
}

// Configurações do Jogador
interface PlayerSettings {
  mouse: {
    dpi: number;
    sensitivity: number;
    edpi: number;
    hz: number;
    rawInput: boolean;
  };
  video: {
    resolution: string;
    aspectRatio: string;
    refreshRate: number;
    displayMode: string;
  };
  crosshair: {
    code: string;
  };
  lastUpdated: string;
}
```

## 🔄 Rotas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Home - Grid de 12 times |
| `/team/:teamId` | Detalhes de um time (escalação) |
| `/player/:playerId` | Configurações de um jogador |
| `/404` | Página não encontrada |

## 📸 Adicionando Imagens

### Logos das Regiões

Coloque as imagens na pasta `client/public/images/regions/`:

- `vct-americas-logo.png` (80x80px, PNG transparente)
- `vct-emea-logo.png`
- `vct-apac-logo.png`
- `vct-china-logo.png`

### Logos dos Times

Coloque as imagens na pasta `client/public/images/teams/`:

```
envy-logo.png
loud-logo.png
kru-logo.png
lev-logo.png
mibr-logo.png
sen-logo.png
furia-logo.png
nrg-logo.png
g2-logo.png
c9-logo.png
100t-logo.png
eg-logo.png
```

**Dimensão recomendada**: 200x200px, PNG com fundo transparente

As imagens aparecerão automaticamente nos cards dos times após serem adicionadas.

## 📝 VCT Americas 2026 - Dados Inclusos

### 12 Equipes Ativas

| Time | Sigla | Jogadores | Benched |
|------|-------|-----------|---------|
| ENVY | ENVY | 5 | 2 |
| LOUD | LOUD | 5 | 0 |
| KRÜ Esports | KRÜ | 5 | 0 |
| Leviatán | LEV | 5 | 1 |
| MIBR | MIBR | 5 | 0 |
| Sentinels | SEN | 5 | 0 |
| FURIA | FURIA | 5 | 0 |
| NRG | NRG | 5 | 0 |
| G2 Esports | G2 | 5 | 0 |
| Cloud9 | C9 | 5 | 0 |
| 100 Thieves | 100T | 5 | 0 |
| Evil Geniuses | EG | 5 | 0 |

**Total**: 60 jogadores ativos + 3 benched

### Funções (Roles)

- **Duelist**: Agressivo, busca kills
- **Initiator**: Suporte com info
- **Controller**: Controle de mapa
- **Sentinel**: Defesa e suporte
- **Flex**: Versátil, múltiplas funções

## 🔧 Tecnologias Utilizadas

### Frontend

- **React 19**: Framework UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Estilos utilitários
- **Wouter**: Roteamento leve
- **shadcn/ui**: Componentes UI prontos
- **Vite**: Build tool rápido

### Desenvolvimento

- **pnpm**: Gerenciador de pacotes
- **Prettier**: Formatação de código
- **TypeScript Compiler**: Verificação de tipos

## 🎯 Funcionalidades Atuais (MVP)

✅ Listagem de 12 times do VCT Americas  
✅ Visualização de escalação por time (ativos + benched)  
✅ Página de configurações por jogador (DPI, sensibilidade, resolução, crosshair)  
✅ Seletor de regiões (apenas Americas funcional)  
✅ Design responsivo (mobile, tablet, desktop)  
✅ Dark mode por padrão  
✅ Navegação fluida com Wouter  

## 🚧 Roadmap Futuro

### Curto Prazo

- [ ] Adicionar logos dos times e regiões
- [ ] Implementar busca global de jogadores
- [ ] Criar filtros por função/país
- [ ] Sistema de comparação de configurações (até 3 jogadores)

### Médio Prazo

- [ ] Expandir para VCT EMEA
- [ ] Expandir para VCT APAC
- [ ] Expandir para VCT China
- [ ] Histórico de reformulações de elenco
- [ ] Sistema de "Nível de Credibilidade" dos dados

### Longo Prazo

- [ ] Backend com banco de dados
- [ ] Sistema de autenticação
- [ ] Upload de configurações por usuários
- [ ] Análise estatística (DPI médio, sensibilidade comum, etc)
- [ ] API pública para integração
- [ ] Aplicativo mobile

## 📖 Guia de Desenvolvimento

### Adicionar um Novo Jogador

Edite `client/src/data/vctAmericasData.ts`:

```typescript
{
  id: 'novo-jogador',
  name: 'Nome do Jogador',
  role: 'Duelist',
  country: 'País',
  status: 'Ativo',
  settings: {
    mouse: {
      dpi: 800,
      sensitivity: 0.45,
      edpi: 360,
      hz: 8000,
      rawInput: true,
    },
    video: {
      resolution: '1920x1440',
      aspectRatio: '4:3',
      refreshRate: 360,
      displayMode: 'Fullscreen',
    },
    crosshair: {
      code: '0;s;1;P;c;5;o;2;0t;3;0l;4;0a;0.25;0f;0;s;0;1t;2;0l;2;0a;0;0f;0',
    },
    lastUpdated: '2026-01-10',
  },
}
```

### Adicionar uma Nova Função (Role)

1. Edite `shared/types.ts` para adicionar a função
2. Edite `client/src/components/RoleTag.tsx` para adicionar a cor
3. Use a nova função nos dados dos jogadores

### Estender para Outra Região

1. Crie `client/src/data/vctEmeaData.ts`
2. Crie `client/src/pages/RegionDetail.tsx`
3. Adicione rota em `client/src/App.tsx`
4. Ative o botão de região em `RegionSelector.tsx`

## 🐛 Troubleshooting

### Porta 3000 já está em uso

```bash
# Use outra porta
pnpm dev -- --port 3001
```

### Erro de módulos não encontrados

```bash
# Limpe cache e reinstale
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Imagens não aparecem

Verifique:
1. Arquivo está em `client/public/images/`
2. Nome do arquivo está correto (case-sensitive)
3. Extensão é `.png`
4. Servidor foi reiniciado após adicionar imagem

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

## 👤 Autor

Desenvolvido como plataforma especializada de referência de configurações competitivas de VALORANT

---

**Última atualização**: Janeiro 2026  
*Versão*: 1.0.0 (MVP)
