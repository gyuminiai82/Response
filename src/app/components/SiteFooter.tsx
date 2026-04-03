import svgPaths from "../../imports/svg-bn98ks4rcq";

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
      <path clipRule="evenodd" d={svgPaths.p3d033480} fill="#635BFF" fillRule="evenodd" />
    </svg>
  );
}

function EarthIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18.0011 17.9999" fill="none">
      <path d={svgPaths.p3f19ef00} fill="#635BFF" />
    </svg>
  );
}

function CopyrightIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d={svgPaths.p39763980} fill="#1D2939" />
    </svg>
  );
}

function StripeLogoFooter() {
  return (
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none">
      <path clipRule="evenodd" d={svgPaths.p3192ed80} fill="#061B31" fillRule="evenodd" />
    </svg>
  );
}

const footerColumns = [
  {
    heading: "Products and pricing",
    items: [
      "Pricing", "Atlas", "Authorization Boost", "Billing", "Capital", "Capital for platforms",
      "Checkout", "Climate", "Connect", "Crypto", "Data Pipeline", "Elements",
      "Financial Accounts", "Financial Accounts for platforms", "Financial Connections",
      "Global Payouts", "Identity", "Invoicing", "Issuing", "Link", "Managed Payments",
      "Payments", "Payment Links", "Payment methods", "Radar", "Revenue Recognition",
      "Stripe Sigma", "Tax", "Terminal", "Usage-based billing",
    ],
  },
  {
    heading: "Solutions",
    items: [
      "Enterprises", "Startups", "Agentic commerce", "Crypto", "Ecommerce",
      "Embedded finance", "Finance automation", "Global businesses", "In-app payments",
      "Marketplaces", "Platforms", "SaaS", "AI companies", "Creator economy",
      "Hospitality, travel, and leisure", "Insurance", "Media and entertainment", "Nonprofits", "Retail",
    ],
  },
  {
    heading: "Integrations and custom solutions",
    items: ["Stripe App Marketplace", "Stripe Partner ecosystem", "Agentic commerce"],
    secondHeading: "Resources",
    secondItems: [
      "Guides", "Customer stories", "Blog", "Sessions annual conference",
      "Privacy and terms", "Prohibited and restricted businesses", "Licenses",
      "Sitemap", "Cookie settings", "Your privacy choices", "More resources",
    ],
  },
  {
    heading: "Company",
    items: ["Jobs", "Newsroom", "Stripe Press", "Contact sales"],
    secondHeading: "Support",
    secondItems: ["Get support", "Managed support plans", "CA residents: +1 888 926 2289"],
    hasSignIn: true,
  },
  {
    heading: "Developers",
    items: ["Documentation", "API reference", "API status", "API changelog", "Libraries and SDKs", "Developer blog"],
  },
];

function FooterColumn({ heading, items, secondHeading, secondItems, hasSignIn }: {
  heading: string;
  items: string[];
  secondHeading?: string;
  secondItems?: string[];
  hasSignIn?: boolean;
}) {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-2">
        <h4 className="text-[15px] font-semibold text-[#1d2939] mb-1">{heading}</h4>
        <div className="flex flex-col gap-0.5">
          {items.map((item) => (
            <a key={item} href="#" className="text-[13px] text-[#707986] hover:text-[#0a2540] transition-colors py-0.5">
              {item}
            </a>
          ))}
        </div>
      </div>
      {secondHeading && secondItems && (
        <div className="flex flex-col gap-2">
          <h4 className="text-[15px] font-semibold text-[#1d2939] mb-1">{secondHeading}</h4>
          <div className="flex flex-col gap-0.5">
            {secondItems.map((item) => (
              <a key={item} href="#" className="text-[13px] text-[#707986] hover:text-[#0a2540] transition-colors py-0.5">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
      {hasSignIn && (
        <button className="flex items-center gap-1 text-[#635bff] text-[14px] font-medium hover:underline mt-2">
          Sign in <ArrowRight />
        </button>
      )}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-dashed border-[#d0d5dd]">
      <div className="max-w-[1197px] mx-auto px-4 sm:px-6 lg:px-4">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 border-b border-dashed border-[#d0d5dd]">
          {footerColumns.map((col, index) => (
            <FooterColumn
              key={index}
              heading={col.heading}
              items={col.items}
              secondHeading={col.secondHeading}
              secondItems={col.secondItems}
              hasSignIn={col.hasSignIn}
            />
          ))}
        </div>

        {/* Copyright row */}
        <div className="py-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <button className="flex items-center gap-1 text-[#635bff] text-[14px] font-medium hover:underline">
              <EarthIcon />
              United States (English)
            </button>
            <div className="flex items-center gap-1">
              <CopyrightIcon />
              <span className="text-[#1d2939] text-[14px] font-medium">2026 Stripe, LLC.</span>
            </div>
          </div>
          <StripeLogoFooter />
        </div>
      </div>
    </footer>
  );
}
