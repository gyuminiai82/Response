import { useState } from "react";
import svgPaths from "../../imports/svg-bn98ks4rcq";

function ArrowRight({ color = "#635BFF" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
      <path d={svgPaths.p32794500} fill="#635BFF" />
    </svg>
  );
}

// Company logo icons using pure HTML/CSS and inline SVG
export function HerzIcon() {
  return (
    <div className="size-10 rounded overflow-hidden flex-shrink-0 bg-[#FFD100] flex flex-col items-center justify-center relative border border-[#e5e7eb]">
      <span className="text-black font-extrabold italic text-[22px] leading-none mb-[2px]">H</span>
      <div className="absolute bottom-[6px] w-[18px] h-[3px] bg-white"></div>
    </div>
  );
}

export function URBNIcon() {
  return (
    <div className="size-10 rounded-lg overflow-hidden flex-shrink-0 bg-black flex items-center justify-center p-[6px] border border-[#e5e7eb]">
      <div className="w-full h-full border-[1.5px] border-white rounded-[2px] flex flex-col items-center justify-center px-0.5">
        <div className="text-white font-bold text-[10px] leading-[9px] tracking-widest mt-0.5 pointer-events-none select-none">UR</div>
        <div className="text-white font-bold text-[10px] leading-[9px] tracking-widest pointer-events-none select-none">BN</div>
      </div>
    </div>
  );
}

export function InstacartIcon() {
  return (
    <div className="size-10 rounded overflow-hidden flex-shrink-0 bg-[#FFF5EA] flex flex-col items-center justify-end relative border border-[#e5e7eb]">
      {/* Leaves */}
      <div className="absolute top-[8px]">
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none">
          <path d="M10 12 L10 5" stroke="#0AAD0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 10 L5 4" stroke="#0AAD0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 10 L15 4" stroke="#0AAD0A" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      {/* Carrot body */}
      <div className="w-[20px] h-[10px] bg-[#FF7009] rounded-t-[10px] rounded-b-[2px] absolute bottom-[2px]"></div>
    </div>
  );
}

export function LeMondeIcon() {
  return (
    <div className="size-10 rounded flex-shrink-0 bg-[#1A171B] flex flex-col items-center justify-center border border-[#e5e7eb]">
       <span className="text-white font-['Georgia'] font-bold text-[24px] leading-none mb-1 pointer-events-none select-none">M</span>
    </div>
  );
}

const caseStudies = [
  {
    id: 1,
    icon: HerzIcon,
    title: "Herz unifies commerce with Stripe.",
    colorTheme: "bg-yellow-50/50",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { bold: "160", text: " countries" },
      { bold: "11K+", text: " locations globally" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Radar, and Stripe Sigma" },
    ],
  },
  {
    id: 2,
    icon: URBNIcon,
    title: "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    colorTheme: "bg-slate-100/50",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { bold: "5+", text: " consumer brands in retailer portfolio" },
      { bold: "700+", text: " store locations" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Stripe Sigma, and Radar" },
    ],
  },
  {
    id: 3,
    icon: InstacartIcon,
    title: "Instacart powers online grocery delivery with Stripe.",
    colorTheme: "bg-orange-50/50",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { bold: "5+", text: " consumer brands in retailer portfolio" },
      { bold: "700+", text: " store locations" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Stripe Sigma, and Radar" },
    ],
  },
  {
    id: 4,
    icon: LeMondeIcon,
    title: "Le Monde improves local and international payments with Stripe.",
    colorTheme: "bg-blue-50/50",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { bold: "5+", text: " consumer brands in retailer portfolio" },
      { bold: "700+", text: " store locations" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Stripe Sigma, and Radar" },
    ],
  },
];

function CaseStudyItem({ 
  title, 
  icon: Icon, 
  colorTheme,
  imageUrl,
  stats,
  isOpen,
  onToggle
}: { 
  title: string; 
  icon: React.ComponentType; 
  colorTheme: string;
  imageUrl?: string;
  stats: { bold: string; text: string }[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-dashed border-[#d0d5dd] py-4 sm:py-6">
      {/* 
        Mobile Header (No button behavior, just layout) 
      */}
      <div className="sm:hidden flex items-center gap-3">
        <div className="scale-75 origin-left w-10">
          <Icon />
        </div>
        <p className="text-[14px] font-semibold text-black leading-snug">
          {title}
        </p>
      </div>

      {/* 
        Desktop/Tablet Interactive Header 
      */}
      <div className="hidden sm:flex w-full items-center justify-between gap-4">
        <button
          onClick={onToggle}
          className="flex items-center gap-3 flex-1 min-w-0 text-left cursor-pointer group"
        >
          <Icon />
          <p className="text-[20px] lg:text-[24px] font-medium text-black tracking-tight leading-snug group-hover:text-[#635bff] transition-colors">
            {title}
          </p>
        </button>

        {isOpen ? (
          <button className="flex items-center gap-1 text-[#635bff] text-[14px] font-medium border border-[#e6e4ff] px-4 py-2 rounded hover:bg-[#f9fafb] transition-colors flex-shrink-0 cursor-pointer">
            Read the story <ArrowRight />
          </button>
        ) : (
          <button 
            onClick={onToggle}
            className="size-10 bg-[#e6e4ff] rounded flex items-center justify-center flex-shrink-0 hover:bg-[#d9d6ff] transition-colors cursor-pointer"
          >
            <PlusIcon />
          </button>
        )}
      </div>

      {/* 
        Content Body 
        - Always fully expanded on Mobile
        - Toggled seamlessly with CSS grid transition on Desktop/Tablet
      */}
      <div 
        className={`
          flex flex-col gap-4 sm:gap-0
          sm:grid sm:transition-[grid-template-rows] sm:duration-500 sm:ease-out
          ${isOpen ? 'sm:grid-rows-[1fr]' : 'sm:grid-rows-[0fr]'}
        `}
      >
        <div className="sm:overflow-hidden">
          <div className={`
            flex flex-col gap-4 sm:gap-6 
            sm:transition-opacity sm:duration-500 sm:ease-out
            mt-4 sm:mt-0 sm:pt-6 sm:pb-8
            ${isOpen ? 'sm:opacity-100' : 'sm:opacity-0'}
          `}>
          
            {/* Background Image / CSS Substitute */}
            <div className={`relative w-full h-[180px] sm:h-[400px] lg:h-[500px] bg-[#fdfdfd] pointer-events-none rounded sm:rounded-lg overflow-hidden border border-[#e5e7eb]/50`}>
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  {/* Add a specific soft tint based on the colorTheme prop */}
                  <div className={`absolute top-1/4 left-1/4 w-[60%] h-[60%] ${colorTheme} rounded-full blur-[80px]`}></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40"></div>
                </>
              )}
            </div>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 lg:gap-16 mt-1 sm:mt-0">
              {stats.map((stat, i) => (
                <p key={i} className="text-[12px] sm:text-[14px] text-[#707986] max-w-[280px]">
                  <span className="text-[#1d2939] font-medium">{stat.bold}</span>
                  {stat.text}
                </p>
              ))}
            </div>

            {/* Mobile ONLY "Read the story" button (Desktop renders this up in the header) */}
            <div className="sm:hidden mt-2">
              <button className="self-start flex items-center gap-1 text-[#635bff] text-[13px] font-medium border border-[#e6e4ff] px-3 py-1.5 rounded hover:bg-[#f9fafb] transition-colors cursor-pointer">
                Read the story <ArrowRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export function BusinessSection() {
  // Use state to keep track of the currently open case study, null means all are closed.
  const [openId, setOpenId] = useState<number | null>(null);
  return (
    <section className="bg-white border-t border-[#d0d5dd]">
      <div className="max-w-[1197px] mx-auto border-x border-[#e5e7eb] px-4 sm:px-6">
        {/* Header message */}
        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-[28px] sm:text-[40px] lg:text-[56px] font-semibold text-black tracking-tight leading-tight">
            <span className="block mb-2 sm:mb-0 sm:inline">Powering businesses of all sizes. </span>
            <span className="block sm:inline text-[#707986] text-[20px] sm:text-[28px] lg:text-[32px] tracking-normal leading-snug">
              Run your business on a reliable platform that adapts to your needs.
            </span>
          </p>
        </div>

        {/* Enterprise message */}
        <div className="border-t border-[#d0d5dd] py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="lg:max-w-[500px]">
              <h3 className="text-[22px] sm:text-[28px] font-semibold text-black tracking-tight leading-snug">
                Transform your enterprise with agile financial infrastructure
              </h3>
            </div>
            <div className="lg:max-w-[700px]">
              <p className="text-[#707986] text-[16px] sm:text-[18px] leading-relaxed">
                50% of Fortune 100 companies have used Stripe to grow their businesses—from expanding internationally to reimagining the customer experience.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#635bff] text-white px-6 py-2.5 rounded flex items-center gap-2 hover:bg-[#4f46e5] transition-colors">
              Stripe for enterprise
              <ArrowRight color="white" />
            </button>
          </div>
        </div>

        {/* Case studies */}
        <div className="pb-8">
          {caseStudies.map((cs) => (
            <CaseStudyItem 
              key={cs.id} 
              title={cs.title} 
              icon={cs.icon} 
              colorTheme={cs.colorTheme} 
              imageUrl={cs.imageUrl}
              stats={cs.stats} 
              isOpen={openId === cs.id}
              onToggle={() => setOpenId(openId === cs.id ? null : cs.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
