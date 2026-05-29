import type { Metadata } from "next";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "About Momofy — India's Premium Frozen Momo Brand",
  description:
    "Learn about Momofy — India's premium frozen momo brand based in Bangalore. Our story, supply chain, and team.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-dm text-xs sm:text-sm font-medium text-[#E8320A] tracking-widest uppercase">
            Our Story
          </p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A0A00]">
            About <span className="text-[#E8320A]">Momofy</span>
          </h1>
          <p className="font-dm text-base sm:text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            From a Bangalore kitchen to 2,400+ restaurants — the Momofy story.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-[#FFF8F0] rounded-3xl p-10 border border-orange-100 space-y-5">
              <div className="text-5xl">🥟</div>
              <h2 className="font-syne font-bold text-3xl text-[#1A0A00] m-0">
                Born in Bangalore, 2022
              </h2>
              <p className="font-dm text-[#1A0A00]/70 leading-relaxed m-0">
                Momofy was founded with a simple belief: India deserves premium, consistent, restaurant-quality
                frozen momos that entrepreneurs can build profitable businesses around. Starting from a single
                cloud kitchen in Bangalore, we&apos;ve grown to supply over 2,400 restaurants, cafés, cloud
                kitchens, and food trucks across India.
              </p>
              <p className="font-dm text-[#1A0A00]/70 leading-relaxed m-0">
                Our secret? We never compromise on ingredients. Every batch is made fresh, flash-frozen at
                source, and delivered cold-chain all the way to your door. No preservatives. No shortcuts.
                Just real momos that customers love and businesses profit from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#1A0A00] text-center mb-8">
            Our Supply Chain
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {[
              { step: "Farm Fresh Ingredients", icon: "🌾" },
              { step: "Bangalore Kitchen", icon: "🍳" },
              { step: "Flash Frozen", icon: "❄️" },
              { step: "Cold Chain Logistics", icon: "🚚" },
              { step: "Your Kitchen", icon: "👨‍🍳" },
            ].map((s, i) => (
              <div key={s.step} className="flex items-center gap-4">
                <div className="text-center space-y-2">
                  <div className="text-4xl">{s.icon}</div>
                  <p className="font-dm text-xs text-[#1A0A00]/60 max-w-[100px] text-center">{s.step}</p>
                </div>
                {i < 4 && (
                  <span className="text-[#E8320A] text-2xl hidden sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-syne font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#1A0A00]">The Team</h2>
          <p className="font-dm text-[#1A0A00]/60">
            A passionate team of food entrepreneurs, supply chain experts, and franchise builders — all united
            by a love for momos and a mission to help Indian entrepreneurs succeed.
          </p>
          <div className="mt-8 bg-white rounded-3xl border-2 border-dashed border-orange-200 h-48 flex items-center justify-center">
            <p className="font-dm text-[#1A0A00]/30 text-sm">Team photo coming soon</p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
