"use client";
import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, BULK_PRICING } from "@/lib/constants";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";

function ProductDetailCard({ p, index }: { p: typeof PRODUCTS[0]; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-orange-100 hover:border-[#E8320A] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        {!imgError ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center gap-2`}>
            <span className="text-7xl drop-shadow-lg">{p.emoji}</span>
            <span className="text-white/70 text-xs font-dm font-medium tracking-wide uppercase">
              Photo coming soon
            </span>
          </div>
        )}
        <span className={`absolute top-3 left-3 text-xs font-dm font-semibold px-3 py-1 rounded-full shadow ${p.tagColor}`}>
          {p.tag}
        </span>
        <span className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-dm px-2.5 py-1 rounded-full">
          {p.weight}
        </span>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-syne font-bold text-xl text-[#1A0A00]">{p.name}</h3>
          <p className="font-dm text-sm text-[#1A0A00]/60 mt-1 leading-relaxed">{p.desc}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          {[
            { label: "Wholesale", value: `₹${p.price}/pack` },
            { label: "MRP", value: `₹${p.mrp}` },
            { label: "Margin", value: p.margin },
            { label: "MOQ", value: p.moq },
          ].map((r) => (
            <div key={r.label} className="bg-[#FFF8F0] rounded-xl p-3">
              <p className="font-dm text-xs text-[#1A0A00]/40 uppercase tracking-wide">{r.label}</p>
              <p className={`font-syne font-bold mt-0.5 ${r.label === "MRP" ? "line-through text-[#1A0A00]/40 text-sm" : r.label === "Margin" ? "text-green-600" : "text-[#E8320A]"}`}>
                {r.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
            No preservatives. Flash-frozen. MOQ ₹3,000. Pan India delivery.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <ProductDetailCard key={p.id} p={p} index={i} />
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
                    className={`border-t border-orange-50 ${i === BULK_PRICING.length - 1 ? "bg-[#E8320A]/5" : ""}`}
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
            Minimum order value ₹3,000. Prices per pack (25 pieces). Delivery charges extra.
          </p>
        </div>
      </section>

      {/* Wholesale Form */}
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
