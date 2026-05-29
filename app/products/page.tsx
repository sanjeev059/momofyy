import type { Metadata } from "next";
import { motion } from "framer-motion";
import { PRODUCTS, BULK_PRICING } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Products — Momofy Frozen Momos",
  description:
    "Buy frozen momos wholesale from Momofy. MOQ ₹3,000. FSSAI certified. Veg, Chicken, Paneer, Corn Cheese and more.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase">
            Our Products
          </p>
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-[#1A0A00]">
            Premium <span className="text-[#E8320A]">Frozen Momos</span>
          </h1>
          <p className="font-dm text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            FSSAI certified. No preservatives. Flash-frozen. MOQ ₹3,000. Pan India delivery.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.id}
                className="group bg-[#FFF8F0] rounded-2xl p-7 border border-orange-100 hover:border-[#E8320A] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-6xl">{p.emoji}</span>
                  <span className={`text-xs font-dm font-medium px-3 py-1 rounded-full ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-xl text-[#1A0A00] mb-2">{p.name}</h3>
                <p className="font-dm text-sm text-[#1A0A00]/60 leading-relaxed mb-4">{p.desc}</p>
                <hr className="border-orange-100 mb-4" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-dm text-sm text-[#1A0A00]/50">Wholesale Price</span>
                    <span className="font-syne font-bold text-[#E8320A]">₹{p.price}/pack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-dm text-sm text-[#1A0A00]/50">MRP</span>
                    <span className="font-dm text-sm text-[#1A0A00]/40 line-through">₹{p.mrp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-dm text-sm text-[#1A0A00]/50">Your Margin</span>
                    <span className="font-syne font-bold text-green-600">{p.margin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-dm text-sm text-[#1A0A00]/50">MOQ</span>
                    <span className="font-dm text-sm text-[#1A0A00]">{p.moq}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Pricing Table */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00] text-center mb-10">
            Bulk Pricing Tiers
          </h2>
          <div className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#1A0A00] text-white">
                <tr>
                  {["Order Quantity", "Veg Momo", "Chicken Momo", "Paneer Momo"].map((h) => (
                    <th key={h} className="px-5 py-4 font-syne font-bold text-sm text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BULK_PRICING.map((row, i) => (
                  <tr
                    key={row.qty}
                    className={`border-t border-orange-50 ${i === 0 ? "" : i === BULK_PRICING.length - 1 ? "bg-[#E8320A]/5" : ""}`}
                  >
                    <td className="px-5 py-4 font-dm text-sm font-medium text-[#1A0A00]">{row.qty}</td>
                    <td className="px-5 py-4 font-syne font-bold text-[#E8320A]">{row.veg}</td>
                    <td className="px-5 py-4 font-syne font-bold text-[#E8320A]">{row.chicken}</td>
                    <td className="px-5 py-4 font-syne font-bold text-[#E8320A]">{row.paneer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-dm text-xs text-[#1A0A00]/40 text-center mt-4">
            Minimum order value ₹3,000. Prices per pack (15 pieces). Delivery charges extra.
          </p>
        </div>
      </section>

      {/* Wholesale CTA + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-syne font-extrabold text-3xl text-[#1A0A00]">
              Request Wholesale Pricing
            </h2>
            <p className="font-dm text-[#1A0A00]/60 mt-2">
              Custom quotes for large volume orders. Share your requirements below.
            </p>
          </div>
          <LeadForm
            defaultEnquiryType="B2B Supply"
            heading="Wholesale Enquiry"
            subheading="Tell us your volume and we'll share custom pricing within 24 hours."
          />
        </div>
      </section>

      <CTABand />
    </>
  );
}
