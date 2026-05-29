"use client";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="bg-[#1A0A00] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-1"
            >
              <p className="font-syne font-bold text-xl sm:text-2xl text-[#FFB347]">{stat.value}</p>
              <p className="font-dm text-xs sm:text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
