"use client";
import { motion } from "framer-motion";
import { INGREDIENTS } from "@/lib/constants";

const HYGIENE_PRACTICES = [
  "All ingredients cleaned with RO water before processing",
  "Machinery sanitized with hot water and RO water after every batch",
  "Bluestar deep freezers used for storage at -18°C",
];

const GUIDE_CARDS = [
  {
    icon: "❄️",
    title: "Storage",
    points: ["Store at -18°C in a deep freezer only", "Do not store in regular fridge", "Up to 3 months shelf life"],
  },
  {
    icon: "♨️",
    title: "Steam Process",
    points: ["Steam 5–8 min after water is hot", "Cook directly from the freezer", "Use silicone momo net with light oil"],
  },
  {
    icon: "🍽️",
    title: "Serving",
    points: ["Serve hot, immediately after steaming", "Best with Momofy spicy chutney", "Can also be lightly fried post-steam"],
  },
];

export default function HygieneSection() {
  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            Quality Inside Out
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            How We Make the{" "}
            <span className="text-[#E8320A]">Healthiest & Most Hygienic</span> Momos
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-syne font-bold text-2xl text-[#1A0A00] mb-6">Key Ingredients</h3>
            <div className="space-y-3">
              {INGREDIENTS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 border border-orange-100"
                >
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-syne font-bold text-[#1A0A00] text-sm">{item.name}</p>
                    <p className="font-dm text-xs text-[#1A0A00]/50 mt-0.5">{item.source}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hygiene Practices */}
            <div className="mt-8">
              <h3 className="font-syne font-bold text-xl text-[#1A0A00] mb-4">Hygienic Practices</h3>
              <ul className="space-y-3">
                {HYGIENE_PRACTICES.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-dm text-sm text-[#1A0A00]/70">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="font-syne font-bold text-2xl text-[#1A0A00] mb-6">Usage Guidelines</h3>
            {GUIDE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-orange-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{card.icon}</span>
                  <h4 className="font-syne font-bold text-lg text-[#1A0A00]">{card.title}</h4>
                </div>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 font-dm text-sm text-[#1A0A00]/65">
                      <span className="text-[#E8320A] font-bold flex-shrink-0">→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
