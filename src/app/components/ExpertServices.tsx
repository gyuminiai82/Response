import { LayoutGrid, Users, LifeBuoy } from "lucide-react";
import svgPaths from "../../imports/svg-bn98ks4rcq";
// Images now moved to BusinessSection
function ArrowRight({ color = "#635BFF" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill={color} fillRule="evenodd" />
    </svg>
  );
}

const services = [
  {
    label: "Professional services.",
    description: "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
    linkText: "View services",
    Icon: LayoutGrid,
  },
  {
    label: "Stripe-certified experts.",
    description: "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
    linkText: "View partners",
    Icon: Users,
  },
  {
    label: "Support plans.",
    description: "Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
    linkText: "View plans",
    Icon: LifeBuoy,
  },
];

export function ExpertServices() {
  return (
    <section className="bg-[#f9fafb]">
      <div className="max-w-[1197px] mx-auto border-x border-[#e5e7eb] px-4 sm:px-6 lg:px-4">
        {/* Expert services */}
        <div className="pt-8 pb-12 sm:pt-12 sm:pb-16">
          <p className="text-[16px] sm:text-[18px] font-medium text-black mb-6">
            Realize value faster with dedicated experts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div key={service.label} className="flex flex-col gap-3">
                <div className="size-10 sm:size-12 rounded border border-[#e6e4ff] bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <service.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#635BFF]" strokeWidth={1.5} />
                </div>
                <p className="text-[15px] sm:text-[17px] text-black leading-snug">
                  <span className="font-medium">{service.label}</span>{" "}
                  <span className="text-[#707986]">{service.description}</span>
                </p>
                <button className="flex items-center gap-1 text-[#635bff] text-[14px] sm:text-[15px] font-medium hover:underline mt-auto group/ext">
                  {service.linkText} <ArrowRight color="#635BFF" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
