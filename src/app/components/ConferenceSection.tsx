import svgPaths from "../../imports/svg-bn98ks4rcq";

function ArrowRight({ color = "#635BFF" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function ConferenceSection() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="max-w-[1197px] mx-auto border-x border-[#e5e7eb] px-4 sm:px-6 py-4">
        <div className="relative rounded-lg overflow-hidden bg-[#0a2540]">
          {/* Background CSS geometry */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#635bff20_0%,transparent_50%)]"></div>
          </div>

          {/* Content */}
          <div className="relative px-6 sm:px-8 lg:px-12 pt-8 pb-0">
            {/* Top: title + date/location on desktop */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-4">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-[28px] sm:text-[40px] lg:text-[52px] font-semibold text-white tracking-tight leading-tight max-w-[600px]">
                    The internet economy conference
                  </h2>
                </div>
                <div>
                  <button className="bg-white px-4 py-1.5 rounded-md text-[#0a2540] text-[15px] font-medium hover:bg-gray-50 transition-all duration-200 flex items-center gap-1.5 group/btn overflow-hidden border-transparent">
                    Join us at Sessions
                    <div className="relative w-3 h-3 flex items-center justify-center">
                      {/* Default Chevron */}
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="absolute transition-all duration-300 transform group-hover/btn:translate-x-3 group-hover/btn:opacity-0">
                        <path clipRule="evenodd" d={svgPaths.p3d033480} fill="currentColor" fillRule="evenodd" />
                      </svg>
                      {/* Hover Full Arrow */}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="absolute w-[14px] h-[14px] transition-all duration-300 transform -translate-x-3 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              {/* Date + location on desktop */}
              <div className="hidden lg:flex items-start gap-12 text-white">
                <div>
                  <p className="text-[18px] font-medium leading-relaxed">
                    April 29-30,<br />2026
                  </p>
                </div>
                <div>
                  <p className="text-[18px] font-medium leading-relaxed">
                    Moscone West,<br />San Francisco
                  </p>
                </div>
              </div>
            </div>

            {/* Stripe sessions branding */}
            <div className="flex items-center justify-between py-4 border-t border-white/20">
              <p className="text-[18px] sm:text-[24px] font-semibold text-white tracking-tight">
                <span className="font-extrabold">stripe</span>
                {" sessions"}
              </p>
              {/* Mobile date */}
              <div className="lg:hidden flex gap-6 text-white text-[14px] font-medium">
                <span>April 29-30, 2026</span>
                <span className="hidden sm:inline">Moscone West, SF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
