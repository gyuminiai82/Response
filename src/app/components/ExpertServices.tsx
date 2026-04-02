import svgPaths from "../../imports/svg-bn98ks4rcq";
import imgDescImage from "figma:asset/a73fc8227efea76964cc5d100bdeb554737a2bee.png";
import imgDescImage1 from "figma:asset/7aa7d8c3ba9bf6633cdaabb7eb952183ea36e58c.png";
import imgDescImage2 from "figma:asset/ece32c42fbdc5534f53d3be26704fb3ba9937728.png";
import imgDescImage3 from "figma:asset/7706f1fa806623bcf88f62698a8f41d83d84867b.png";

function ArrowRight({ color = "#635BFF" }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <div className="size-12 rounded border border-[#e6e4ff] bg-white flex items-center justify-center flex-shrink-0">
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
        <path d={svgPaths.p22ea5980} fill="#635BFF" />
      </svg>
    </div>
  );
}

const services = [
  {
    label: "Professional services.",
    description: "Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.",
    linkText: "View services",
  },
  {
    label: "Stripe-certified experts.",
    description: "Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.",
    linkText: "View partners",
  },
  {
    label: "Support plans.",
    description: "Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.",
    linkText: "View plans",
  },
];

const caseStudyCards = [
  {
    img: imgDescImage,
    company: "Herz unifies commerce with Stripe",
    stats: [
      { bold: "160", text: " countries" },
      { bold: "11K+", text: " locations globally" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Radar, and Stripe Sigma" },
    ],
  },
  {
    img: imgDescImage1,
    company: "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    stats: [
      { bold: "5+", text: " consumer brands in retailer portfolio" },
      { bold: "700+", text: " store locations" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Stripe Sigma, and Radar" },
    ],
  },
  {
    img: imgDescImage2,
    company: "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    stats: [
      { bold: "5+", text: " consumer brands in retailer portfolio" },
      { bold: "700+", text: " store locations" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Stripe Sigma, and Radar" },
    ],
  },
  {
    img: imgDescImage3,
    company: "URBN consolidates $5 billion in online and in-store revenue onto Stripe.",
    stats: [
      { bold: "5+", text: " consumer brands in retailer portfolio" },
      { bold: "700+", text: " store locations" },
      { bold: "Products used", text: " Payments, Terminal, Connect, Stripe Sigma, and Radar" },
    ],
  },
];

export function ExpertServices() {
  return (
    <section className="bg-white">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-4">
        {/* Case study cards */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {caseStudyCards.map((card, index) => (
              <div key={index} className="bg-white border border-[#d0d5dd] rounded-lg overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-[160px] object-cover pointer-events-none"
                />
                <div className="p-4 flex flex-col gap-3">
                  <p className="text-[13px] font-medium text-black leading-snug">
                    {card.company}
                  </p>
                  <div className="flex flex-col gap-2">
                    {card.stats.map((stat, i) => (
                      <p key={i} className="text-[12px] text-[#707986]">
                        <span className="text-[#1d2939] font-medium">{stat.bold}</span>
                        {stat.text}
                      </p>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-[#635bff] text-[13px] font-medium mt-1 hover:underline">
                    Read the story <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert services */}
        <div className="border-t border-[#d0d5dd] pt-8 pb-12">
          <p className="text-[16px] sm:text-[18px] font-medium text-black mb-6">
            Realize value faster with dedicated experts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div key={service.label} className="flex flex-col gap-3">
                <ServiceIcon />
                <p className="text-[15px] sm:text-[17px] text-black leading-snug">
                  <span className="font-medium">{service.label}</span>{" "}
                  <span className="text-[#707986]">{service.description}</span>
                </p>
                <button className="flex items-center gap-1 text-[#635bff] text-[14px] sm:text-[15px] font-medium hover:underline mt-auto">
                  {service.linkText} <ArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
