import imgSection5 from "../../asset/b230a1c9826c6c1724876ac5b89d161e0c02ce47.png";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1e2948] to-[#a97f7f]">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={imgSection5}
          alt=""
          className="absolute w-[182%] h-[174%] max-w-none top-[-2%] left-[-39%] object-cover"
        />
      </div>

      <div className="relative max-w-[1880px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-[28px] sm:text-[40px] lg:text-[52px] font-semibold text-white text-center tracking-tight mb-10 sm:mb-14">
          The backbone<br />of global commerce
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-[rgba(75,123,200,0.2)]">
          {stats.map((stat, index) => (
            <div
              key={stat.number}
              className={`py-6 px-4 text-center border-[rgba(75,123,200,0.2)] ${
                index < stats.length - 1 ? "border-r" : ""
              } ${index >= 2 ? "border-t lg:border-t-0" : ""}`}
            >
              <p className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-white tracking-tight mb-2">
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
