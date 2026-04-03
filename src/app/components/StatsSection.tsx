

const stats = [
  {
    number: "135+",
    description: "currencies and payment\nmethods supported",
  },
  {
    number: "$1.9T",
    description: "in payments volume\nprocessed in 2025",
  },
  {
    number: "99.999%",
    description: "historical uptime\nfor Stripe services",
  },
  {
    number: "200M+",
    description: "active subscriptions\nmanaged on Stripe Billing",
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a]">
      {/* Background CSS geometry */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a] opacity-80"></div>
        <div className="absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#635bff30] to-transparent"></div>
        <div className="absolute right-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#635bff30] to-transparent"></div>
      </div>

      <div className="relative max-w-[1197px] mx-auto border-x border-white/10 px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[52px] font-semibold text-white text-center tracking-tight mb-10 sm:mb-14">
          The backbone<br />of global commerce
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-[rgba(75,123,200,0.2)]">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className={`group relative py-6 px-4 text-center border-[rgba(75,123,200,0.2)] transition-colors duration-300 ${
                index < stats.length - 1 ? "border-r" : ""
              } ${index >= 2 ? "border-t lg:border-t-0" : ""}`}
            >
              {/* Hover gradient borders (Top and Bottom) fade out on both sides */}
              <div className="absolute top-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e52cb1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e52cb1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <p className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-white tracking-tight mb-2 relative z-20">
                {stat.number}
              </p>
              <p className="text-[#f2f4f7] text-[13px] sm:text-[14px] whitespace-pre-line leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
