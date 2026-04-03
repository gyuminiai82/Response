import svgPaths from "../../imports/svg-bn98ks4rcq";

function ExpandIcon() {
  return (
    <div className="size-10 bg-[#e6e4ff] group-hover/product:bg-[#635BFF] transition-colors duration-300 rounded flex items-center justify-center flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={svgPaths.p1c49a180} fill="currentColor" className="text-[#635BFF] group-hover/product:text-white transition-colors duration-300" />
      </svg>
    </div>
  );
}

interface ProductCardProps {
  title: string;
  tint?: string;
  patternType?: 'dots' | 'grid' | 'lines';
  heightClass?: string;
}

function ProductCard({ 
  title, 
  tint = "from-white to-blue-50",
  patternType = "grid",
  heightClass = "h-[320px] sm:h-[420px] lg:h-[500px]" 
}: ProductCardProps) {
  
  const getPattern = () => {
    switch(patternType) {
      case 'dots':
        return "bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:16px_16px]";
      case 'lines':
        return "bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#f3f4f6_10px,#f3f4f6_11px)]";
      case 'grid':
      default:
        return "bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:24px_24px]";
    }
  };

  return (
    <div className="bg-white rounded-[10px] border border-[#d0d5dd] overflow-hidden relative group/product cursor-pointer transition-shadow hover:shadow-lg">
      {/* Container Area */}
      <div className={`${heightClass} relative overflow-hidden bg-white`}>
        {/* Base Pastel Tint Background (Gradient) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tint} opacity-60`}></div>

        {/* CSS Pattern Background */}
        <div className={`absolute inset-0 ${getPattern()} opacity-[0.6]`}></div>
        
        {/* White soft blur glow behind the text for readability */}
        <div className="absolute -top-[50px] -left-[50px] w-[350px] h-[350px] bg-white rounded-full blur-[60px] z-10 pointer-events-none"></div>
        
        {/* Expand button */}
        <div className="absolute top-4 right-4 z-20">
          <ExpandIcon />
        </div>
        
        {/* Title overlay */}
        <div className="absolute top-6 left-7 z-20">
          <p className="text-[17px] sm:text-[18px] font-medium text-black tracking-tight whitespace-pre-line drop-shadow-sm group-hover/product:text-[#635bff] transition-colors duration-300">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProductCards() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="max-w-[1197px] mx-auto border-x border-[#e5e7eb] px-2 sm:px-4 py-4 sm:py-8">
        {/* Desktop: 3-col grid with special layout */}
        <div className="hidden lg:grid grid-cols-3 gap-4 sm:gap-6">
          {/* Row 1: Small card (col 1) + Large card (cols 2-3) */}
          <div className="col-span-1">
            <ProductCard
              title="Enable any billing model"
              tint="from-white via-white to-blue-100"
              patternType="dots"
            />
          </div>
          <div className="col-span-2">
            <ProductCard
              title={`Accept and optimize\npayments globally--\nonline and in person`}
              tint="from-white via-white to-orange-100"
              patternType="grid"
            />
          </div>

          {/* Row 2: 3 equal cards */}
          <div className="col-span-1">
            <ProductCard
              title={`Monetize through\nagentic commerce`}
              tint="from-white via-white to-emerald-100"
              patternType="lines"
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              title={`Create a card\nissuing program`}
              tint="from-white via-white to-slate-200"
              patternType="grid"
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              title={`Access borderless\nmoney movement with\nstablecoins and crypto`}
              tint="from-white via-white to-indigo-100"
              patternType="dots"
            />
          </div>
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          <ProductCard
            title="Enable any billing model"
            tint="from-white via-white to-blue-100"
            patternType="dots"
          />
          <ProductCard
            title={`Accept and optimize\npayments globally--\nonline and in person`}
            tint="from-white via-white to-orange-100"
            patternType="grid"
          />
          <ProductCard
            title={`Monetize through\nagentic commerce`}
            tint="from-white via-white to-emerald-100"
            patternType="lines"
          />
          <ProductCard
            title={`Create a card\nissuing program`}
            tint="from-white via-white to-slate-200"
            patternType="grid"
          />
          <div className="col-span-2">
            <ProductCard
              title={`Access borderless\nmoney movement with\nstablecoins and crypto`}
              tint="from-white via-white to-indigo-100"
              patternType="dots"
            />
          </div>
        </div>

        {/* Mobile: 1-col stack */}
        <div className="sm:hidden flex flex-col gap-4">
          {[
            { title: "Enable any billing model", tint: "from-white via-white to-blue-100", patternType: "dots" as const },
            { title: `Accept and optimize\npayments globally--\nonline and in person`, tint: "from-white via-white to-orange-100", patternType: "grid" as const },
            { title: `Monetize through\nagentic commerce`, tint: "from-white via-white to-emerald-100", patternType: "lines" as const },
            { title: `Create a card\nissuing program`, tint: "from-white via-white to-slate-200", patternType: "grid" as const },
            { title: `Access borderless\nmoney movement with\nstablecoins and crypto`, tint: "from-white via-white to-indigo-100", patternType: "dots" as const },
          ].map((card) => (
            <ProductCard
              key={card.title}
              title={card.title}
              tint={card.tint}
              patternType={card.patternType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
