import { useState } from "react";
import svgPaths from "../../imports/svg-bn98ks4rcq";

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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#d0d5dd]">
      <div className="max-w-[1880px] mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <a href="#" className="font-bold text-[#1d2939] text-2xl tracking-tight">stripe</a>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {["Products", "Solutions", "Developers", "Resources", "Pricing"].map((item) => (
              <button key={item} className="flex items-center gap-1 text-[15px] text-black hover:text-[#635bff] transition-colors">
                {item}
                {item !== "Pricing" && <ChevronDown />}
              </button>
            ))}
          </nav>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-4 py-2 rounded text-[#635bff] text-[15px] border border-[#f2f4f7] bg-white hover:border-[#635bff] transition-colors">
            Sign in
          </button>
          <button className="px-4 py-2 rounded bg-[#635bff] text-white text-[15px] hover:bg-[#4f46e5] transition-colors flex items-center gap-1">
            Contact sales
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path clipRule="evenodd" d={svgPaths.p3d033480} fill="white" fillRule="evenodd" />
            </svg>
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