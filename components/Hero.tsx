"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "916305468471";
const WA_MSG = encodeURIComponent("Hi Momofy! I want to start a franchise. Please share details.");

function HeroImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-400 to-[#E8320A] flex flex-col items-center justify-center gap-4">
        <div className="animate-float text-[10rem] drop-shadow-2xl select-none leading-none">🥟</div>
        <p className="text-white/60 text-sm font-dm tracking-wide">Add your product photo here</p>
      </div>
    );
  }

  return (
    <Image
      src="https://i.ibb.co/1rK1nVG/heror-1.jpg"
      alt="Momofy — Premium Frozen Momos"
      fill
      priority
      className="object-cover"
      onError={() => setImgError(true)}
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FFF8F0] overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-7 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#E8320A]/10 text-[#E8320A] rounded-full px-4 py-1.5 text-sm font-medium font-dm">
              <span className="w-2 h-2 bg-[#E8320A] rounded-full animate-pulse" />
              India&apos;s Fastest Growing Momo Franchise
            </div>

            <h1 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-6xl text-[#1A0A00] leading-tight">
              The Future of{" "}
              <span className="text-[#E8320A]">Frozen Momos</span>{" "}
              is Here.
            </h1>

            <p className="font-dm text-base sm:text-lg text-[#1A0A00]/65 max-w-xl leading-relaxed">
              Start your Momofy franchise or B2B supply partnership. Home-made frozen momos
              supplying 2,400+ restaurants across India — with margins that make business sense.
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#E8320A] text-white font-syne font-bold text-base px-8 py-4 rounded-full hover:bg-[#c92a07] transition-all hover:shadow-lg hover:shadow-red-200 active:scale-95"
              >
                Start in ₹89,000 →
              </a>
              <Link
                href="#products"
                className="text-center font-dm font-medium text-base text-[#1A0A00] px-8 py-4 rounded-full border border-[#1A0A00]/20 hover:border-[#E8320A] hover:text-[#E8320A] transition-colors"
              >
                See Products ↓
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-5 pt-2">
              {["2,400+ Restaurants", "Bangalore Delivery", "No Preservatives"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 font-dm text-sm text-[#1A0A00]/50">
                  <span className="text-[#E8320A] font-bold text-base">✓</span>
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — food image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
              <HeroImage />
              {/* Overlay gradient at bottom for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating price badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-5 left-5 bg-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="font-dm text-xs text-[#1A0A00]/50 uppercase tracking-wide">Starting at</p>
                <p className="font-syne font-extrabold text-2xl text-[#E8320A]">₹99<span className="text-base font-normal text-[#1A0A00]/40">/pack</span></p>
              </motion.div>

              {/* Floating franchise badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute top-5 right-5 bg-[#E8320A] text-white rounded-2xl px-4 py-3 shadow-xl text-center"
              >
                <p className="font-syne font-bold text-xl">₹89K</p>
                <p className="font-dm text-xs opacity-80">Franchise Fee</p>
              </motion.div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#FFB347]/20 blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#E8320A]/10 blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
