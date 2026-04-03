import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-bn98ks4rcq";
import sessionsEventImg from "../../assets/stripe_sessions_event.png";

const productsData = [
  {
    title: "Payments",
    line: "from-[#00d4ff] to-[#ff7b00]",
    items: [
      { name: "Payments", desc: "Online payments" },
      { name: "Managed Payments", desc: "Merchant of record solution" },
      { name: "Payment Links", desc: "No-code payments" },
      { name: "Checkout", desc: "Prebuilt payment form" },
      { name: "Elements", desc: "Flexible UI components" },
      { name: "Payment methods", desc: "Access to 100+" },
      { name: "Terminal", desc: "In-person payments" },
      { name: "Radar", desc: "Fraud prevention" },
      { name: "Authorization Boost", desc: "Acceptance optimizations" },
      { name: "Link", desc: "Accelerated checkout" },
    ]
  },
  {
    title: "Revenue",
    line: "from-[#635bff] to-[#ff7b00]",
    items: [
      { name: "Billing", desc: "Subscription management" },
      { name: "Usage-based billing", desc: "Metered billing" },
      { name: "Invoicing", desc: "One-time or recurring" },
      { name: "Tax", desc: "Sales tax & VAT automation" },
      { name: "Revenue Recognition", desc: "Accounting automation" },
      { name: "Stripe Sigma", desc: "Custom reports" },
      { name: "Data Pipeline", desc: "Data sync" },
    ]
  },
  {
    title: "Money Management",
    line: "from-[#00d4ff] to-[#ff00ff]",
    items: [
      { name: "Financial Accounts", desc: "Business finances" },
      { name: "Global Payouts", desc: "Payouts to third parties" },
      { name: "Capital", desc: "Business financing" },
      { name: "Crypto", desc: "Wallet, stablecoin issuing\nand card infrastructure" },
    ]
  },
  {
    title: "Platforms and marketplaces",
    line: "from-[#00d4ff] to-[#ff0055]",
    items: [
      { name: "Connect", desc: "Payments for platforms" },
      { name: "Capital for platforms", desc: "Customer financing" },
      { name: "Financial Accounts\nfor platforms", desc: "Embedded financial services" },
      { name: "Issuing", desc: "Physical and virtual cards" },
    ]
  }
];

const moreItems = [
  { name: "Atlas", desc: "Startup incorporation" },
  { name: "Climate", desc: "Carbon removal" },
  { name: "Identity", desc: "Online identity verification" },
  { name: "Financial Connections", desc: "Linked financial account data" },
];

const solutionsData = [
  {
    title: "By stage",
    items: [
      { name: "Enterprises" },
      { name: "Startups" },
    ]
  },
  {
    title: "By use case",
    items: [
      { name: "Agentic commerce" },
      { name: "Crypto" },
      { name: "Ecommerce" },
      { name: "Embedded finance" },
      { name: "Finance automation" },
      { name: "Global businesses" },
      { name: "In-app payments" },
      { name: "Marketplaces" },
      { name: "Platforms" },
      { name: "SaaS" },
    ]
  },
  {
    title: "By industry",
    items: [
      { name: "AI companies" },
      { name: "Creator economy" },
      { name: "Hospitality, travel, and leisure" },
      { name: "Insurance" },
      { name: "Media and entertainment" },
      { name: "Nonprofits" },
      { name: "Retail" },
    ]
  },
  {
    title: "Ecosystem",
    items: [
      { name: "Partners" },
      { name: "Stripe App Marketplace" },
    ]
  }
];

const developersData = [
  {
    title: "Documentation",
    items: [
      { name: "Stripe docs" },
      { name: "API reference" },
      { name: "Libraries and SDKs" },
      { name: "Stripe Apps" },
    ]
  },
  {
    title: "Guides",
    items: [
      { name: "Accept online payments" },
      { name: "Implement a prebuilt checkout" },
      { name: "Build a platform or marketplace" },
      { name: "Manage subscriptions" },
      { name: "Offer usage-based billing" },
      { name: "Issue stablecoin-backed cards" },
    ]
  },
  {
    title: "Resources",
    items: [
      { name: "App integrations" },
      { name: "Code samples" },
      { name: "Developer blog" },
      { name: "API status" },
    ]
  }
];

const resourcesData = [
  {
    title: "Learn",
    items: [
      { name: "Blog" },
      { name: "Customer stories" },
      { name: "Guides" },
    ]
  },
  {
    title: "Support",
    items: [
      { name: "Get support" },
      { name: "Managed support plans" },
      { name: "Professional services" },
    ]
  },
  {
    title: "Company",
    items: [
      { name: "Sessions annual conference" },
      { name: "Jobs" },
      { name: "Newsroom" },
      { name: "Stripe Press" },
    ]
  },
  {
    title: "Contact",
    items: [
      { name: "Contact sales" },
      { name: "Become a partner" },
    ]
  }
];

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline-block">
      <path d={svgPaths.p1d627880} fill="black" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <rect y="0" width="16" height="2" rx="1" fill="#635BFF"/>
      <rect y="5" width="16" height="2" rx="1" fill="#635BFF"/>
      <rect y="10" width="16" height="2" rx="1" fill="#635BFF"/>
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-[65px] transition-colors duration-300 ${isScrolled ? 'bg-white border-b border-[#d0d5dd]' : 'bg-transparent border-b border-[#e5e7eb]/50'}`}>
      <div className="max-w-[1197px] h-full mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-6 h-full">
          <a href="#" className="font-bold text-[#1d2939] text-2xl tracking-tight">stripe</a>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 h-full">
            {["Products", "Solutions", "Developers", "Resources", "Pricing"].map((item) => {
              if (item === "Products") {
                return (
                  <div key={item} className="group flex items-center h-full">
                    <button className="flex items-center gap-1 text-[15px] text-[#29323c] group-hover:text-black transition-colors font-medium">
                      {item} 
                      <span className="transition-transform duration-200 group-hover:-rotate-180">
                        <ChevronDown />
                      </span>
                    </button>
                    {/* Mega menu dropdown - Fixed pill behind the header */}
                    <div className="fixed top-[5px] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[1180px] -z-10 cursor-default">
                      <div className="bg-white shadow-[0_45px_100px_rgba(0,0,0,0.2)] border border-[#e5e7eb] flex flex-col overflow-hidden">
                        
                        {/* Empty Spacer to sit perfectly behind the header text */}
                        <div className="h-[52px] w-full border-b border-[#e5e7eb]"></div>

                        {/* TOP SECTION: 4 Columns Data */}
                        <div className="flex px-8 pt-[60px] pb-8 gap-8">
                          {productsData.map((col) => (
                            <div key={col.title} className="flex-1">
                              <h3 className="text-[#475467] font-medium text-[13px] mb-2">{col.title}</h3>
                              <div className={`h-[2px] w-full mb-5 bg-gradient-to-r ${col.line}`}></div>
                              <ul className="flex flex-col gap-4">
                                {col.items.map((subItem) => (
                                  <li key={subItem.name} className="group/item cursor-pointer">
                                    <p className="text-[#635bff] font-medium text-[14px] group-hover/item:text-[#4f46e5] leading-snug">{subItem.name}</p>
                                    <p className="text-[#475467] text-[13px] leading-[1.3] mt-0.5 whitespace-pre-line">{subItem.desc}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className="bg-[#f9fafb] p-8 border-t border-[#e5e7eb] flex justify-between gap-10">
                          {/* More Links */}
                          <div className="flex-1">
                            <h3 className="text-[#475467] font-medium text-[13px] mb-5">More</h3>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                              {moreItems.map((subItem) => (
                                <div key={subItem.name} className="group/item cursor-pointer">
                                  <p className="text-[#635bff] font-medium text-[14px] group-hover/item:text-[#4f46e5] leading-snug">{subItem.name}</p>
                                  <p className="text-[#475467] text-[13px] leading-[1.3] mt-0.5 whitespace-pre-line">{subItem.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Horizontal Promotional Card */}
                          <div className="w-[480px] bg-white border border-[#e5e7eb] rounded-lg shadow-sm flex overflow-hidden group/card cursor-pointer">
                            <div className="w-[200px] h-full overflow-hidden flex-shrink-0 relative">
                              <img src={sessionsEventImg} alt="Sessions" className="absolute inset-0 w-full h-[150%] object-cover group-hover/card:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-5 flex flex-col justify-center flex-1">
                              <h4 className="text-[#1d2939] font-medium text-[14px] mb-1">Join us at Sessions</h4>
                              <p className="text-[#475467] text-[12px] leading-snug mb-3">Register to attend our annual conference in San Francisco April 29–30.</p>
                              <span className="text-[#635bff] text-[13px] font-medium group-hover/card:text-[#4f46e5] transition-colors flex items-center gap-1">
                                Register now 
                                <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="rotate-0 group-hover/card:translate-x-0.5 transition-transform">
                                  <path clipRule="evenodd" d={svgPaths.p3d033480} fill="currentColor" fillRule="evenodd" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }
              if (item === "Solutions") {
                return (
                  <div key={item} className="group flex items-center h-full">
                    <button className="flex items-center gap-1 text-[15px] text-[#29323c] group-hover:text-black transition-colors font-medium">
                      {item} 
                      <span className="transition-transform duration-200 group-hover:-rotate-180">
                        <ChevronDown />
                      </span>
                    </button>
                    {/* Mega menu dropdown - Fixed pill behind the header */}
                    <div className="fixed top-[5px] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[1180px] -z-10 cursor-default">
                      <div className="bg-white shadow-[0_45px_100px_rgba(0,0,0,0.2)] border border-[#e5e7eb] flex flex-col overflow-hidden">
                        
                        {/* Empty Spacer to sit perfectly behind the header text */}
                        <div className="h-[52px] w-full border-b border-[#e5e7eb]"></div>

                        {/* TOP SECTION: 4 Columns Data */}
                        <div className="flex px-4 pt-[50px] pb-10">
                          {solutionsData.map((col, index) => (
                            <div key={col.title} className={`flex-1 ${index !== 0 ? 'border-l border-[#e5e7eb] pl-8' : ''} ${index !== solutionsData.length - 1 ? 'pr-8' : ''}`}>
                              <h3 className="text-[#1d2939] font-medium text-[13px] mb-6">{col.title}</h3>
                              <ul className="flex flex-col gap-4">
                                {col.items.map((subItem) => (
                                  <li key={subItem.name} className="group/item cursor-pointer">
                                    <p className="text-[#635bff] font-medium text-[14px] group-hover/item:text-[#4f46e5] leading-snug">{subItem.name}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }
              if (item === "Developers") {
                return (
                  <div key={item} className="group flex items-center h-full">
                    <button className="flex items-center gap-1 text-[15px] text-[#29323c] group-hover:text-black transition-colors font-medium">
                      {item} 
                      <span className="transition-transform duration-200 group-hover:-rotate-180">
                        <ChevronDown />
                      </span>
                    </button>
                    {/* Mega menu dropdown - Fixed pill behind the header */}
                    <div className="fixed top-[5px] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[1180px] -z-10 cursor-default">
                      <div className="bg-white shadow-[0_45px_100px_rgba(0,0,0,0.2)] border border-[#e5e7eb] flex flex-col overflow-hidden">
                        
                        {/* Empty Spacer to sit perfectly behind the header text */}
                        <div className="h-[52px] w-full border-b border-[#e5e7eb]"></div>

                        {/* TOP SECTION: 3 Columns Data */}
                        <div className="flex px-4 pt-[50px] pb-10">
                          {developersData.map((col, index) => (
                            <div key={col.title} className={`flex-1 ${index !== 0 ? 'border-l border-[#e5e7eb] pl-8' : ''} ${index !== developersData.length - 1 ? 'pr-8' : ''}`}>
                              <h3 className="text-[#1d2939] font-medium text-[13px] mb-6">{col.title}</h3>
                              <ul className="flex flex-col gap-4">
                                {col.items.map((subItem) => (
                                  <li key={subItem.name} className="group/item cursor-pointer">
                                    <p className="text-[#635bff] font-medium text-[14px] group-hover/item:text-[#4f46e5] leading-snug">{subItem.name}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }
              if (item === "Resources") {
                return (
                  <div key={item} className="group flex items-center h-full">
                    <button className="flex items-center gap-1 text-[15px] text-[#29323c] group-hover:text-black transition-colors font-medium">
                      {item} 
                      <span className="transition-transform duration-200 group-hover:-rotate-180">
                        <ChevronDown />
                      </span>
                    </button>
                    {/* Mega menu dropdown - Fixed pill behind the header */}
                    <div className="fixed top-[5px] left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[1180px] -z-10 cursor-default">
                      <div className="bg-white shadow-[0_45px_100px_rgba(0,0,0,0.2)] border border-[#e5e7eb] flex flex-col overflow-hidden">
                        
                        {/* Empty Spacer to sit perfectly behind the header text */}
                        <div className="h-[52px] w-full border-b border-[#e5e7eb]"></div>

                        {/* TOP SECTION: 4 Columns Data */}
                        <div className="flex px-4 pt-[50px] pb-10">
                          {resourcesData.map((col, index) => (
                            <div key={col.title} className={`flex-1 ${index !== 0 ? 'border-l border-[#e5e7eb] pl-8' : ''} ${index !== resourcesData.length - 1 ? 'pr-8' : ''}`}>
                              <h3 className="text-[#1d2939] font-medium text-[13px] mb-6">{col.title}</h3>
                              <ul className="flex flex-col gap-4">
                                {col.items.map((subItem) => (
                                  <li key={subItem.name} className="group/item cursor-pointer">
                                    <p className="text-[#635bff] font-medium text-[14px] group-hover/item:text-[#4f46e5] leading-snug">{subItem.name}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <button key={item} className="flex items-center h-full gap-1 text-[15px] text-[#29323c] font-medium hover:text-black transition-colors group">
                  {item}
                  {item !== "Pricing" && (
                     <span className="transition-transform duration-200 group-hover:-rotate-180">
                        <ChevronDown />
                     </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-md border border-[#e5e7eb] text-[#635bff] text-[14px] font-medium hover:bg-gray-50 transition-colors">
            Sign in
          </button>
          <button className="px-4 py-1.5 rounded-md bg-[#635bff] text-white text-[14px] font-medium hover:bg-[#4f46e5] transition-colors flex items-center gap-1.5 group/btn overflow-hidden">
            Contact sales
            <div className="relative w-3 h-3 flex items-center justify-center">
              {/* Default Chevron (Slides Right and Fades Out) */}
              <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="absolute transition-all duration-300 transform group-hover/btn:translate-x-3 group-hover/btn:opacity-0">
                <path clipRule="evenodd" d={svgPaths.p3d033480} fill="white" fillRule="evenodd" />
              </svg>
              {/* Hover Full Arrow (Slides Right and Fades In) */}
              <svg viewBox="0 0 20 20" fill="currentColor" className="absolute w-[14px] h-[14px] transition-all duration-300 transform -translate-x-3 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile right */}
        <div className="lg:hidden flex items-center gap-4">
          <span className="text-[#635bff] text-[15px] font-medium">Contact sales</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#e6e4ff] p-2 rounded size-10 flex items-center justify-center"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#d0d5dd] px-4 py-4">
          <nav className="flex flex-col gap-3">
            {["Products", "Solutions", "Developers", "Resources", "Pricing"].map((item) => (
              <button key={item} className="flex items-center justify-between text-[15px] text-black py-2 border-b border-[#f2f4f7]">
                {item}
                {item !== "Pricing" && <ChevronDown />}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <button className="py-2 text-[#635bff] border border-[#635bff] rounded text-[15px]">Sign in</button>
              <button className="py-2 bg-[#635bff] text-white rounded text-[15px]">Get started</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}