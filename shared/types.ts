// Tipos compartilhados para o VALORANT Pro Settings Hub

export type VCTRegion = 'americas' | 'emea' | 'apac' | 'china';
export type PlayerRole = 'Duelist' | 'Controller' | 'Initiator' | 'Sentinel' | 'Flex';
export type PlayerStatus = 'Active' | 'Inactive' | 'Benched' | 'Free Agent';

export interface Region {
  id: string;
  name: string;
  displayName: string;
  logoUrl: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  regionId: string;
  logoUrl: string;
  active: boolean;
  foundedYear: number;
}

export interface Player {
  id: string;
  name: string; // Garantindo que o campo se chama 'name'
  teamId: string;
  role: PlayerRole; // Usa o tipo fixo que definimos acima
  country: string;
  status: PlayerStatus; // Usa o tipo fixo que definimos acima
}

export interface PlayerSettings {
  playerId: string;
  lastUpdated: string;
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
  peripherals: {
    mouse: string;
    keyboard: string;
    headset: string;
    monitor: string;
    mousepad: string;
  };
}
