"use client";
import { motion } from "framer-motion";
import { FRANCHISE_STEPS, FRANCHISE_FEATURES } from "@/lib/constants";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "918867361454";
const WA_MSG = encodeURIComponent("Hi Momofy! I want to apply for a franchise. Please share the details and next steps.");

export default function Franchise() {
  return (
    <section
      id="franchise"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#2E1500" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#E8320A]/10" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#FFB347]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <p className="font-dm text-sm font-medium text-[#FFB347] tracking-widest uppercase mb-3">
                Franchise Model
              </p>
              <h2 className="font-syne font-extrabold text-4xl sm:text-5xl leading-tight">
                India&apos;s Fastest Growing{" "}
                <span className="text-[#E8320A]">Momo Franchise</span>
              </h2>
              <p className="mt-4 font-dm text-lg text-white/60">
                Low investment. Quick setup. Proven model. Join 2,400+ businesses already profiting with Momofy.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-5">
              {FRANCHISE_STEPS.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E8320A] flex items-center justify-center font-syne font-bold text-white text-sm">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-white">{s.title}</h4>
                    <p className="font-dm text-sm text-white/60 mt-0.5">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6"
          >
            {/* Investment */}
            <div className="text-center pb-4 border-b border-white/10">
              <p className="font-dm text-sm text-white/50 mb-1">One-time Franchise Fee</p>
              <p className="font-syne font-extrabold text-5xl text-[#FFB347]">₹89,000</p>
            </div>

            {/* ROI Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Monthly Profit", value: "₹60K+" },
                { label: "Break-even", value: "2 months" },
                { label: "Cost/plate", value: "₹30" },
                { label: "Hours/day", value: "5 hrs" },
              ].map((r) => (
                <div key={r.label} className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="font-syne font-bold text-[#E8320A] text-xl">{r.value}</p>
                  <p className="font-dm text-xs text-white/50 mt-0.5">{r.label}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {FRANCHISE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 font-dm text-sm text-white/80">
                  <span className="text-[#E8320A] font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#FFB347] text-[#1A0A00] font-syne font-bold text-lg px-6 py-4 rounded-full hover:bg-[#ffa020] transition-all hover:shadow-lg hover:shadow-yellow-900/20 active:scale-95"
            >
              Apply for Franchise →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
