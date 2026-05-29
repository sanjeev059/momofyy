"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";
import { FAQS, FRANCHISE_FEATURES, FRANCHISE_STEPS } from "@/lib/constants";

function ROICalculator() {
  const [plates, setPlates] = useState(100);
  const pricePerPlate = 150;
  const costPerPlate = 30;
  const monthlyProfit = (pricePerPlate - costPerPlate) * plates * 25;
  const breakeven = Math.ceil(89000 / monthlyProfit);

  return (
    <div className="bg-white rounded-3xl p-8 border border-orange-100 space-y-6">
      <h3 className="font-syne font-bold text-2xl text-[#1A0A00]">ROI Calculator</h3>
      <div>
        <label className="font-dm text-sm font-medium text-[#1A0A00] mb-3 block">
          Expected daily plates: <span className="text-[#E8320A] font-bold">{plates}</span>
        </label>
        <input
          type="range"
          min={20}
          max={500}
          step={10}
          value={plates}
          onChange={(e) => setPlates(Number(e.target.value))}
          className="w-full accent-[#E8320A]"
        />
        <div className="flex justify-between font-dm text-xs text-[#1A0A00]/40 mt-1">
          <span>20 plates</span>
          <span>500 plates</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Monthly Revenue", value: `₹${(pricePerPlate * plates * 25).toLocaleString("en-IN")}` },
          { label: "Monthly Profit", value: `₹${monthlyProfit.toLocaleString("en-IN")}` },
          { label: "Break-even", value: `${breakeven} month${breakeven > 1 ? "s" : ""}` },
          { label: "Cost per plate", value: "₹30" },
        ].map((r) => (
          <div key={r.label} className="bg-[#FFF8F0] rounded-xl p-4 text-center">
            <p className="font-syne font-bold text-[#E8320A] text-xl">{r.value}</p>
            <p className="font-dm text-xs text-[#1A0A00]/50 mt-0.5">{r.label}</p>
          </div>
        ))}
      </div>

      <p className="font-dm text-xs text-[#1A0A00]/40">
        * Estimates based on ₹150 avg selling price. Actual results may vary by location.
      </p>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => (
        <div key={i} className="border border-orange-100 rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-dm font-medium text-[#1A0A00] hover:bg-orange-50 transition-colors"
          >
            <span>{faq.q}</span>
            <span className="text-[#E8320A] text-xl ml-4 flex-shrink-0">{open === i ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 font-dm text-sm text-[#1A0A00]/60 leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function FranchisePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#2E1500] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="font-dm text-sm font-medium text-[#FFB347] tracking-widest uppercase">
            Franchise Opportunity
          </p>
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl">
            Own a <span className="text-[#E8320A]">Momofy</span> Franchise
          </h1>
          <p className="font-dm text-lg text-white/60 max-w-2xl mx-auto">
            Start your momo business from ₹89,000. Proven model, full support, and profit from day one.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00] text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRANCHISE_STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8320A] text-white font-syne font-bold text-lg flex items-center justify-center mx-auto">
                  {s.step}
                </div>
                <h3 className="font-syne font-bold text-[#1A0A00]">{s.title}</h3>
                <p className="font-dm text-sm text-[#1A0A00]/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator + Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <ROICalculator />
          <div className="space-y-6">
            <h3 className="font-syne font-bold text-2xl text-[#1A0A00]">What&apos;s Included</h3>
            <ul className="space-y-4">
              {FRANCHISE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 font-dm text-[#1A0A00]/70">
                  <span className="w-6 h-6 rounded-full bg-[#E8320A]/10 text-[#E8320A] flex items-center justify-center text-sm font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="bg-[#FFF8F0] rounded-2xl p-5 border border-orange-100">
              <p className="font-dm text-sm text-[#1A0A00]/60">
                <strong className="text-[#1A0A00]">Requirements:</strong> A kitchen space (min 100 sq ft), basic cooking equipment, and enthusiasm to get started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00]">Apply for Franchise</h2>
            <p className="font-dm text-[#1A0A00]/60 mt-2">
              Fill in your details. Our franchise team will call you within 24 hours.
            </p>
          </div>
          <LeadForm
            defaultEnquiryType="Franchise"
            heading="Franchise Application"
            subheading="Our franchise consultant will call you within 24 hours."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
