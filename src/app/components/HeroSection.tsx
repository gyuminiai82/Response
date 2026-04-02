import svgPaths from "../../imports/svg-bn98ks4rcq";
import imgSection1 from "../../asset/6115d94a01a94ad18b0fcb49ec48c0b12b43ee4b.png";

function ArrowRight({ color = "white" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="inline-block flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p2ab4c380} fill="#F44336" fillRule="evenodd" opacity="0.987" />
      <path clipRule="evenodd" d={svgPaths.p2a42a530} fill="#FFC107" fillRule="evenodd" opacity="0.997" />
      <path clipRule="evenodd" d={svgPaths.p3ed87600} fill="#448AFF" fillRule="evenodd" opacity="0.999" />
      <path clipRule="evenodd" d={svgPaths.p11eeb520} fill="#43A047" fillRule="evenodd" opacity="0.993" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f9fafb]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={imgSection1}
          alt=""
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1880px] mx-auto px-4 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-[1050px]">
          <p className="text-sm text-black mb-2 font-medium">
            Global GDP running on Stripe: 1.62519760%
          </p>
          <h1 className="text-[32px] sm:text-[48px] lg:text-[61px] font-semibold text-black tracking-tight leading-tight mb-4">
            Financial infrastructure to grow your revenue.{" "}
            <span className="text-[#5a7e8f]">
              Accept payments, offer financial services, and implement custom revenue models—from your first transaction to your billionth.
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <button className="bg-[#635bff] text-white px-6 py-2.5 rounded flex items-center gap-2 justify-center hover:bg-[#4f46e5] transition-colors">
              Get started
              <ArrowRight color="white" />
            </button>
            <button className="bg-white text-[#635bff] border border-[#635bff] px-6 py-2.5 rounded flex items-center gap-2 justify-center hover:bg-[#f5f5ff] transition-colors">
              <GoogleIcon />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
