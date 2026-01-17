import { Link } from 'wouter';

interface Region {
  id: string;
  name: string;
  displayName: string;
  logoUrl: string;
  active: boolean;
}

const regions: Region[] = [
  {
    id: 'americas',
    name: 'VCT Americas',
    displayName: 'Ativo',
    active: true,
    logoUrl: '/images/regions/vct-americas-logo.png',
  },
  {
    id: 'emea',
    name: 'VCT EMEA',
    displayName: 'Ativo',
    active: true,
    logoUrl: '/images/regions/vct-emea-logo.png',
  },
  {
    id: 'apac',
    name: 'VCT APAC',
    displayName: 'Ativo',
    active: true,
    logoUrl: '/images/regions/vct-apac-logo.png',
  },
  {
    id: 'china',
    name: 'VCT China',
    displayName: 'Ativo',
    active: true,
    logoUrl: '/images/regions/vct-china-logo.png',
  },
];

export default function RegionSelector() {
  return (
    <section className="py-8 border-b border-cyan-500/10">
      <div className="container space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white font-orbitron tracking-wider">
            REGIÕES
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-400" />
        </div>

        <div className="flex flex-wrap gap-4">
          {regions.map((region) => (
            <div key={region.id}>
              {region.active ? (
                <Link href={region.id === 'americas' ? '/' : `/region/${region.id}`}>
                  <a className="block group">
                    <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/40 rounded-full px-6 py-3 flex items-center gap-3 hover:border-cyan-500/70 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 cursor-pointer">
                      {/* Logo Space */}
                      <div className="w-8 h-8 bg-slate-700/50 rounded border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <img
                          src={region.logoUrl}
                          alt={region.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Text */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-cyan-400 font-orbitron tracking-wider text-sm">
                          {region.name}
                        </span>
                        <span className="text-xs text-green-400 font-semibold">
                          {region.displayName}
                        </span>
                      </div>

                      {/* Arrow */}
                      <span className="text-cyan-400 group-hover:translate-x-1 transition-transform ml-1">
                        →
                      </span>
                    </div>
                  </a>
                </Link>
              ) : (
                <div className="relative bg-slate-800/30 border border-gray-600/30 rounded-full px-6 py-3 flex items-center gap-3 opacity-60 cursor-not-allowed">
                  {/* Logo Space */}
                  <div className="w-8 h-8 bg-slate-700/30 rounded border border-gray-600/20 flex items-center justify-center flex-shrink-0">
                    <img
                      src={region.logoUrl}
                      alt={region.name}
                      className="w-6 h-6 object-contain opacity-50"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-400 font-orbitron tracking-wider text-sm">
                      {region.name}
                    </span>
                    <span className="text-xs text-gray-500 font-semibold">
                      {region.displayName}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 pt-2">
          Outras regiões em desenvolvimento
        </p>
      </div>
    </section>
  );
}
