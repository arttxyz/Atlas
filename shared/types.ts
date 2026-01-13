// Tipos compartilhados para o VALORANT Pro Settings Hub

export type VCTRegion = 'americas' | 'emea' | 'apac' | 'china';
export type PlayerRole = 'Duelist' | 'Controller' | 'Initiator' | 'Sentinel' | 'Flex';
export type PlayerStatus = 'Active' | 'Inactive' | 'Benched' | 'Free Agent';

export interface Region {
  id: VCTRegion;
  name: string;
  displayName: string;
  logoUrl: string;
}

export interface Team {
  id: string;
  name: string;
  tag: string;
  regionId: VCTRegion;
  logoUrl: string;
  active: boolean;
  foundedYear?: number;
}

export interface Player {
  id: string;
  nickname: string;
  fullName: string;
  teamId: string;
  role: PlayerRole;
  status: PlayerStatus;
  country: string;
  countryCode: string;
  joinedTeamDate?: string;
  socials?: {
    twitter?: string;
    twitch?: string;
    youtube?: string;
  };
}

export interface MouseSettings {
  dpi: number;
  sensitivity: number;
  edpi: number; // Calculated: dpi * sensitivity
  hz: number; // Polling rate
  rawInput: boolean;
}

export interface VideoSettings {
  resolution: string;
  aspectRatio: string;
  refreshRate: number;
  displayMode: 'Fullscreen' | 'Windowed' | 'Borderless';
}

export interface CrosshairSettings {
  code: string; // Official VALORANT crosshair code
  primary?: {
    color?: string;
    opacity?: number;
  };
  innerLines?: {
    show: boolean;
    length?: number;
    offset?: number;
    thickness?: number;
  };
  outerLines?: {
    show: boolean;
    length?: number;
    offset?: number;
    thickness?: number;
  };
  center?: {
    show: boolean;
    opacity?: number;
  };
}

export interface Peripherals {
  mouse?: string;
  keyboard?: string;
  headset?: string;
  monitor?: string;
  mousepad?: string;
}

export interface PlayerSettings {
  playerId: string;
  lastUpdated: string;
  mouse: MouseSettings;
  video: VideoSettings;
  crosshair: CrosshairSettings;
  peripherals: Peripherals;
  notes?: string;
}

export interface TeamRoster {
  teamId: string;
  players: Player[];
  coach?: {
    name: string;
    country: string;
  };
  lastUpdated: string;
}
