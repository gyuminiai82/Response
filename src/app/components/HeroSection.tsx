import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../../imports/svg-bn98ks4rcq";

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

function AnimatedDigit({ digit, delayIdx }: { digit: string, delayIdx: number }) {
  return (
    <span className="relative inline-flex justify-center w-[0.62em] h-[1.3em] overflow-hidden align-middle">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          // 오른쪽 끝자리부터 왼쪽으로 갈수록 delay가 생겨 순차적으로 굴러가도록 처리 
          transition={{ duration: 0.3, ease: "easeOut", delay: delayIdx * 0.08 }}
          className="absolute"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function HeroSection() {
  const [gdpPercentage, setGdpPercentage] = useState(1.62765471);

  useEffect(() => {
    // 2.5초(2500ms) 간격으로 갱신
    const intervalId = setInterval(() => {
      // 1 ~ 3 사이의 아주 작은 랜덤 증가폭으로 수정
      const randomIncrement = Math.floor(Math.random() * 3) + 1;
      setGdpPercentage(prev => prev + (randomIncrement * 0.00000001));
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  const gdpString = gdpPercentage.toFixed(8);
  // 고정될 앞부분 (소수점 4자리까지)
  const head = gdpString.slice(0, -4);
  // 개별적으로 애니메이션 될 뒷부분 (소수점 마지막 4자리)
  const tailArray = gdpString.slice(-4).split('');

  return (
    <section className="relative overflow-hidden bg-[#fbfbfd]">
      {/* Dynamic CSS Mesh Background (Stripe Ribbon Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[100%] h-[160%] lg:w-[80%] transform origin-center rotate-[-15deg] opacity-90 blur-3xl">
          <div className="absolute top-[20%] right-[15%] w-[800px] h-[800px] bg-gradient-to-bl from-transparent via-[#635BFF] to-transparent rounded-[40%] mix-blend-multiply opacity-30 transform rotate-12 scale-x-50"></div>
          <div className="absolute top-[15%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-tl from-[#ff4d4d] via-[#d946ef] to-transparent rounded-[30%] mix-blend-multiply opacity-50 transform rotate-45"></div>
          <div className="absolute top-[0%] right-[5%] w-[700px] h-[700px] bg-gradient-to-b from-[#ffb43a] via-[#ff733a] to-transparent rounded-[50%] mix-blend-multiply opacity-60 transform -rotate-12 scale-x-[0.3] translate-x-20"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbfbfd] via-[#fbfbfd]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1197px] mx-auto border-x border-[#e5e7eb] px-4 sm:px-8 pt-[113px] pb-16 sm:pt-[129px] sm:pb-24 lg:pt-[161px] lg:pb-32">
        <div className="max-w-[700px] lg:max-w-[850px]">
          <p className="text-[13px] text-[#475467] font-medium mb-3 flex items-center">
            <span className="text-[#1d2939] font-semibold mr-1">Global GDP running on Stripe: </span>
            <span className="flex items-center">
              <span>{head}</span>
              <span className="flex items-center">
                {tailArray.map((digit, idx) => (
                  <AnimatedDigit 
                    key={idx} 
                    digit={digit} 
                    delayIdx={tailArray.length - 1 - idx} 
                  />
                ))}
              </span>
              <span>%</span>
            </span>
          </p>
          
          <h1 className="text-[40px] sm:text-[56px] lg:text-[76px] font-bold tracking-tight leading-[1.05] mb-5">
            <span className="text-[#0a2540]">Financial infrastructure to </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] to-[#7928ca]">grow your revenue.</span>
          </h1>
          
          <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium tracking-tight leading-[1.3] mb-8 max-w-[780px]">
             <span className="text-[#3a5a78]">Accept payments, offer finan</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#635bff] via-[#d946ef] to-[#ff6b6b]">cial services, and implement custom revenue mod</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#635bff] opacity-90">els—from your first transaction to your billionth.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#635bff] text-white px-5 py-2.5 rounded-md hover:bg-[#4f46e5] font-medium text-[15px] transition-colors flex items-center justify-center gap-1.5 shadow-sm group/btn overflow-hidden">
              Get started
              <div className="relative w-3 h-3 flex items-center justify-center">
                {/* Default Chevron */}
                <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="absolute transition-all duration-300 transform group-hover/btn:translate-x-3 group-hover/btn:opacity-0">
                  <path clipRule="evenodd" d="M4.22 1.396a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06L8.189 6.425 4.22 2.457a.75.75 0 010-1.06z" fill="white" fillRule="evenodd" />
                </svg>
                {/* Hover Full Arrow */}
                <svg viewBox="0 0 20 20" fill="currentColor" className="absolute w-[14px] h-[14px] transition-all duration-300 transform -translate-x-3 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            <button className="bg-white text-[#635bff] border border-[#d0d5dd] px-5 py-2.5 rounded-md hover:bg-[#f9fafb] font-medium text-[15px] transition-colors flex items-center justify-center gap-2 shadow-sm">
              <GoogleIcon />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
