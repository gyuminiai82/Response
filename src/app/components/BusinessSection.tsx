import { useState } from "react";
import svgPaths from "../../imports/svg-bn98ks4rcq";

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill="white" fillRule="evenodd" />
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

// Company logo icons using SVG paths
function HerzIcon() {
  return (
    <div className="size-10 rounded overflow-hidden flex-shrink-0 bg-[#FFD100]">
      <svg className="size-full" viewBox="0 0 40 40" fill="none">
        <path d={svgPaths.p13ff1400} fill="#FFD100" />
        <path d={svgPaths.p3fc34380} fill="#FAFBFD" />
        <path d={svgPaths.p297e9680} fill="black" />
      </svg>
    </div>
  );
}

function URBNIcon() {
  return (
    <div className="size-10 rounded overflow-hidden flex-shrink-0 bg-black">
      <svg className="size-full" viewBox="0 0 40 40" fill="none">
        <path d={svgPaths.p7d2b7f0} fill="black" />
        <path clipRule="evenodd" d={svgPaths.p357fad00} fill="#FAFBFD" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function InstacartIcon() {
  return (
    <div className="size-10 rounded overflow-hidden flex-shrink-0 bg-[#FAF1E5]">
      <svg className="size-full" viewBox="0 0 40 40" fill="none">
        <path d={svgPaths.p7d2b7f0} fill="#FAF1E5" />
        <path d={svgPaths.p9718080} fill="#0AAD0A" />
        <path d={svgPaths.p21f25880} fill="#FF7009" />
      </svg>
    </div>
  );
}

function LeMondeIcon() {
  return (
    <div className="size-10 rounded overflow-hidden flex-shrink-0 bg-[#1A171B]">
      <svg className="size-full" viewBox="0 0 40 40" fill="none">
        <path d={svgPaths.p7d2b7f0} fill="#1A171B" />
        <path d={svgPaths.p33525b00} fill="white" />
        <path d={svgPaths.p39bc1180} fill="white" />
        <path d={svgPaths.p12964980} fill="white" />
        <path d={svgPaths.p12680900} fill="white" />
      </svg>
    </div>
  );
}

const caseStudies = [
  {
    id: 1,
    icon: HerzIcon,
    title: "Herz unifies commerce with Stripe",
  },
  {
    id: 2,
    icon: URBNIcon,
    title: "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
  },
  {
    id: 3,
    icon: InstacartIcon,
    title: "Instacart powers online grocery delivery with Stripe.",
  },
  {
    id: 4,
    icon: LeMondeIcon,
    title: "Le Monde improves local and international payments with Stripe.",
  },
];

function CaseStudyItem({ title, icon: Icon }: { title: string; icon: React.ComponentType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-dashed border-[#d0d5dd] py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Icon />
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-black tracking-tight leading-snug">
            {title}
          </p>
        </div>
        <div className="size-10 bg-[#e6e4ff] rounded flex items-center justify-center flex-shrink-0">
          <PlusIcon />
        </div>
      </button>
    </div>
  );
}

export function BusinessSection() {
  return (
    <section className="bg-white border-t border-[#d0d5dd]">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-4">
        {/* Header message */}
        <div className="py-12 sm:py-16 lg:py-20">
          <p className="text-[28px] sm:text-[40px] lg:text-[56px] font-semibold text-black tracking-tight leading-tight">
            <span>Powering businesses of all sizes. </span>
            <span className="text-[#707986] text-[20px] sm:text-[28px] lg:text-[32px] tracking-normal leading-snug">
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
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Case studies */}
        <div className="pb-8">
          {caseStudies.map((cs) => (
            <CaseStudyItem key={cs.id} title={cs.title} icon={cs.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
