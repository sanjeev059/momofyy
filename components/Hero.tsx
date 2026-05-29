"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "918867361454";
const WA_MSG = encodeURIComponent("Hi Momofy! I want to start a franchise. Please share details.");

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FFF8F0] overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#E8320A]/5" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-[#FFB347]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-[#E8320A]/10 text-[#E8320A] rounded-full px-4 py-1.5 text-sm font-medium font-dm">
            <span className="w-2 h-2 bg-[#E8320A] rounded-full animate-pulse" />
            India&apos;s Fastest Growing Momo Franchise
          </div>

          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[#1A0A00] leading-tight">
            Own a <span className="text-[#E8320A]">Momofy</span> Franchise.{" "}
            <span className="text-[#FFB347]">Profit</span> from Day One.
          </h1>

          <p className="font-dm text-lg text-[#1A0A00]/70 max-w-xl leading-relaxed">
            India&apos;s premium frozen momo brand supplies 2,400+ restaurants. Start your franchise or B2B
            partnership from ₹89,000 with guaranteed margins and pan India delivery.
          </p>

          {/* Stat Pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "₹60K+ monthly profit", icon: "💰" },
              { label: "40K pieces/day", icon: "🥟" },
              { label: "Starts ₹99/packet", icon: "📦" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 bg-white border border-orange-100 rounded-full px-4 py-2 shadow-sm font-dm text-sm font-medium text-[#1A0A00]"
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8320A] text-white font-dm font-medium text-base px-7 py-4 rounded-full hover:bg-[#c92a07] transition-all hover:shadow-lg hover:shadow-red-200 active:scale-95"
            >
              Start in ₹89,000 →
            </Link>
            <Link
              href="#products"
              className="font-dm font-medium text-base text-[#1A0A00] px-7 py-4 rounded-full border border-[#1A0A00]/20 hover:border-[#E8320A] hover:text-[#E8320A] transition-colors"
            >
              See Products ↓
            </Link>
          </div>
        </motion.div>

        {/* Right — Floating emoji */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center relative"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#E8320A]/10 blur-3xl scale-150" />
            <div className="animate-float text-[12rem] sm:text-[14rem] select-none leading-none">🥟</div>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 right-0 bg-white rounded-2xl px-4 py-3 shadow-lg border border-orange-100"
          >
            <p className="font-syne font-bold text-[#E8320A] text-lg">₹89K</p>
            <p className="font-dm text-xs text-[#1A0A00]/60">Franchise Fee</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-12 left-0 bg-[#E8320A] rounded-2xl px-4 py-3 shadow-lg text-white"
          >
            <p className="font-syne font-bold text-lg">2,400+</p>
            <p className="font-dm text-xs opacity-80">Restaurants</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
