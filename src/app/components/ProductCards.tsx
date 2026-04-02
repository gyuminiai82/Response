import svgPaths from "../../imports/svg-bn98ks4rcq";
import imgProductImage from "figma:asset/cd8a5c336ba1c87fe7fa2e269822870a77ba3592.png";
import imgImage1 from "figma:asset/bbe5f08fb22b89432833050893cda46300b2318f.png";
import imgProductImage1 from "figma:asset/f4d0e827aa29e204b2f9441d26f6933510e62600.png";
import imgProductImage2 from "figma:asset/f8286689f9715c03e8489a3bdee365c282f6538b.png";
import imgImage2 from "figma:asset/099edb99409c17d1f669b48012e3ba2f0f7b73c3.png";
import imgImage3 from "figma:asset/5d7b19ed7c3d8add6cd5768581d762d5aec00716.png";
import imgImage4 from "figma:asset/7140ac9ef4ed7ee8b39099827f07cd4d6b7f1049.png";

function ExpandIcon() {
  return (
    <div className="size-10 bg-[#e6e4ff] rounded flex items-center justify-center flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d={svgPaths.p1c49a180} fill="#635BFF" />
      </svg>
    </div>
  );
}

interface ProductCardProps {
  title: string;
  bgImage: string;
  overlayImage?: string;
  overlayStyle?: string;
  bgImageStyle?: string;
}

function ProductCard({ title, bgImage, overlayImage, overlayStyle, bgImageStyle }: ProductCardProps) {
  return (
    <div className="bg-white rounded border border-[#d0d5dd] overflow-hidden relative">
      {/* Image area */}
      <div className="h-[280px] sm:h-[360px] lg:h-[420px] relative overflow-hidden">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={bgImageStyle ? { objectPosition: bgImageStyle } : undefined}
        />
        {overlayImage && (
          <img
            src={overlayImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: overlayStyle || "center" }}
          />
        )}
        {/* Expand button */}
        <div className="absolute top-4 right-4">
          <ExpandIcon />
        </div>
        {/* Title overlay */}
        <div className="absolute top-6 left-7">
          <p className="text-[17px] sm:text-[18px] font-medium text-black tracking-tight whitespace-pre-line">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProductCards() {
  return (
    <section className="bg-[#f9fafb] py-4 px-4 sm:px-6 lg:px-4">
      <div className="max-w-[1880px] mx-auto">
        {/* Desktop: 3-col grid with special layout */}
        <div className="hidden lg:grid grid-cols-3 gap-4">
          {/* Row 1: Small card (col 1) + Large card (cols 2-3) */}
          <div className="col-span-1">
            <ProductCard
              title="Enable any billing model"
              bgImage={imgProductImage1}
            />
          </div>
          <div className="col-span-2">
            <ProductCard
              title={`Accept and optimize\npayments globally--\nonline and in person`}
              bgImage={imgProductImage}
              overlayImage={imgImage1}
            />
          </div>

          {/* Row 2: 3 equal cards */}
          <div className="col-span-1">
            <ProductCard
              title={`Monetize through\nagentic commerce`}
              bgImage={imgProductImage2}
              overlayImage={imgImage2}
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              title={`Create a card\nissuing program`}
              bgImage={imgProductImage}
              overlayImage={imgImage3}
            />
          </div>
          <div className="col-span-1">
            <ProductCard
              title={`Access borderless\nmoney movement with\nstablecoins and crypto`}
              bgImage={imgProductImage}
              overlayImage={imgImage4}
            />
          </div>
        </div>

        {/* Tablet: 2-col grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
          <ProductCard
            title="Enable any billing model"
            bgImage={imgProductImage1}
          />
          <ProductCard
            title={`Accept and optimize\npayments globally--\nonline and in person`}
            bgImage={imgProductImage}
            overlayImage={imgImage1}
          />
          <ProductCard
            title={`Monetize through\nagentic commerce`}
            bgImage={imgProductImage2}
            overlayImage={imgImage2}
          />
          <ProductCard
            title={`Create a card\nissuing program`}
            bgImage={imgProductImage}
            overlayImage={imgImage3}
          />
          <div className="col-span-2">
            <ProductCard
              title={`Access borderless\nmoney movement with\nstablecoins and crypto`}
              bgImage={imgProductImage}
              overlayImage={imgImage4}
            />
          </div>
        </div>

        {/* Mobile: 1-col stack */}
        <div className="sm:hidden flex flex-col gap-4">
          {[
            { title: "Enable any billing model", bg: imgProductImage1 },
            { title: `Accept and optimize\npayments globally--\nonline and in person`, bg: imgProductImage, overlay: imgImage1 },
            { title: `Monetize through\nagentic commerce`, bg: imgProductImage2, overlay: imgImage2 },
            { title: `Create a card\nissuing program`, bg: imgProductImage, overlay: imgImage3 },
            { title: `Access borderless\nmoney movement with\nstablecoins and crypto`, bg: imgProductImage, overlay: imgImage4 },
          ].map((card) => (
            <ProductCard
              key={card.title}
              title={card.title}
              bgImage={card.bg}
              overlayImage={card.overlay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
