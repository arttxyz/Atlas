import { PlayerRole } from '@/../../shared/types';

interface RoleTagProps {
  role: PlayerRole;
  size?: 'sm' | 'md' | 'lg';
}

const roleConfig: Record<PlayerRole, { bg: string; text: string; label: string }> = {
  Duelist: {
    bg: 'bg-red-900/30',
    text: 'text-red-400',
    label: 'Duelista',
  },
  Controller: {
    bg: 'bg-purple-900/30',
    text: 'text-purple-400',
    label: 'Controlador',
  },
  Initiator: {
    bg: 'bg-cyan-900/30',
    text: 'text-cyan-400',
    label: 'Iniciador',
  },
  Sentinel: {
    bg: 'bg-green-900/30',
    text: 'text-green-400',
    label: 'Sentinela',
  },
  Flex: {
    bg: 'bg-yellow-900/30',
    text: 'text-yellow-400',
    label: 'Flex',
  },
};

const sizeConfig = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
};

export default function RoleTag({ role, size = 'md' }: RoleTagProps) {
  const config = roleConfig[role];
  const sizeClass = sizeConfig[size];

  return (
    <span
      className={`inline-block ${config.bg} ${config.text} ${sizeClass} rounded border border-current/30 font-semibold tracking-wider`}
    >
      {config.label}
    </span>
  );
}
