import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BrandStrip } from "./components/BrandStrip";
import { ProductCards } from "./components/ProductCards";
import { ConferenceSection } from "./components/ConferenceSection";
import { StatsSection } from "./components/StatsSection";
import { BusinessSection } from "./components/BusinessSection";
import { ExpertServices } from "./components/ExpertServices";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Logos Strip */}
      <BrandStrip />

      {/* Main content wrapper */}
      <div className="bg-[#f9fafb]">
        {/* Flexible Solutions Message */}
        <div className="max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-6 py-12 sm:py-16 lg:py-20">
          <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-semibold text-black tracking-tight leading-snug max-w-[900px]">
            <span>Flexible solutions for every business model. </span>
            <span className="text-[#707986] font-normal">
              Grow your business with the most comprehensive set of payments and financial tools⁠—⁠designed to work individually or together.
            </span>
          </p>
        </div>

        {/* Product Feature Cards */}
        <ProductCards />

        {/* Conference Section */}
        <ConferenceSection />
      </div>

      {/* Stats / Backbone Section */}
      <StatsSection />

      {/* Business / Case Studies Section */}
      <BusinessSection />

      {/* Expert Services + Case Study Cards */}
      <ExpertServices />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}