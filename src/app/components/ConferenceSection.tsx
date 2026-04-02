import svgPaths from "../../imports/svg-bn98ks4rcq";
import imgSection4 from "figma:asset/3458706c2ea2f57e32e0542516ea9d97818837bf.png";

function ArrowRight({ color = "#635BFF" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill={color} fillRule="evenodd" />
    </svg>
  );
}

export function ConferenceSection() {
  return (
    <section className="bg-[#f9fafb] px-4 sm:px-6 lg:px-4 py-4">
      <div className="max-w-[1880px] mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={imgSection4}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 rounded-lg" />
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
                  <button className="bg-white px-4 py-2 rounded border border-[#635bff] flex items-center gap-1 hover:bg-gray-50 transition-colors">
                    <span className="text-[#635bff] text-[15px] font-medium">Join us at Sessions</span>
                    <ArrowRight />
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
