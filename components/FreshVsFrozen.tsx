"use client";
import { motion } from "framer-motion";
import { COMPARISON_TABLE } from "@/lib/constants";

export default function FreshVsFrozen() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase mb-3">
            The Science of Freshness
          </p>
          <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-[#1A0A00]">
            Freshness Locked,{" "}
            <span className="text-[#E8320A]">Health Unlocked</span>
          </h2>
          <p className="mt-4 font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto leading-relaxed">
            Flash-frozen momos keep taste, texture and nutrition intact — without any added
            preservatives. Just steam and serve in minutes.
          </p>
        </motion.div>

        {/* Three badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: "❄️", label: "Flash Frozen at -18°C" },
            { icon: "🧪", label: "No Added Preservatives" },
            { icon: "🧼", label: "Hygienic, Food-Grade Packaging" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2.5 bg-[#FFF8F0] border border-orange-100 rounded-full px-5 py-2.5"
            >
              <span className="text-xl">{b.icon}</span>
              <span className="font-dm font-medium text-sm text-[#1A0A00]">{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Myth vs Truth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5 mb-12"
        >
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4">
            <span className="text-3xl flex-shrink-0">🚫</span>
            <div>
              <p className="font-syne font-bold text-red-700 mb-1">Myth</p>
              <p className="font-dm text-sm text-red-600 leading-relaxed">
                Frozen foods lose nutrients and need chemicals to stay fresh.
              </p>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex gap-4">
            <span className="text-3xl flex-shrink-0">✅</span>
            <div>
              <p className="font-syne font-bold text-green-700 mb-1">Truth</p>
              <p className="font-dm text-sm text-green-700 leading-relaxed">
                Nutrients are retained and shelf-life extends via temperature control — no chemicals needed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-orange-100 shadow-sm mb-10"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-[#1A0A00] text-white">
            <div className="px-5 py-4 font-syne font-bold text-sm">Criteria</div>
            <div className="px-5 py-4 font-syne font-bold text-sm text-center border-l border-white/10">
              Fresh (Street)
            </div>
            <div className="px-5 py-4 font-syne font-bold text-sm text-center border-l border-white/10 text-[#FFB347]">
              Momofy Frozen
            </div>
          </div>
          {COMPARISON_TABLE.map((row, i) => (
            <div
              key={row.criteria}
              className={`grid grid-cols-3 border-t border-orange-50 ${i % 2 === 1 ? "bg-[#FFF8F0]" : "bg-white"}`}
            >
              <div className="px-5 py-4 font-dm font-medium text-sm text-[#1A0A00]">{row.criteria}</div>
              <div className="px-5 py-4 font-dm text-sm text-[#1A0A00]/50 text-center border-l border-orange-50 flex items-center justify-center">
                {row.fresh}
              </div>
              <div className="px-5 py-4 font-dm text-sm text-green-700 font-medium text-center border-l border-orange-50 flex items-center justify-center gap-1.5">
                <span className="text-green-500">✓</span> {row.momofy}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: "🌡️", label: "Flash Freezing at -18°C" },
            { icon: "🧼", label: "Hygienic Production" },
            { icon: "🧪", label: "No Preservatives" },
            { icon: "⏱️", label: "Ready in Minutes" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-2 bg-[#1A0A00] text-white rounded-full px-5 py-2.5 font-dm text-sm font-medium"
            >
              <span>{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
