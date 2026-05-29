import type { Metadata } from "next";
import ProductList from "@/components/ProductList";
import FreshVsFrozen from "@/components/FreshVsFrozen";
import PartyOrders from "@/components/PartyOrders";
import FAQ from "@/components/FAQ";
import HygieneSection from "@/components/HygieneSection";
import LeadForm from "@/components/LeadForm";
import CTABand from "@/components/CTABand";
import { BULK_PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products — Momofy Frozen Momos",
  description:
    "Buy frozen momos wholesale from Momofy. MOQ ₹3,000. No preservatives. Veg, Chicken, Paneer, Corn Cheese and more.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-8 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-dm text-xs sm:text-sm font-medium text-[#E8320A] tracking-widest uppercase">
            Our Products
          </p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A0A00]">
            Premium <span className="text-[#E8320A]">Frozen Momos</span>
          </h1>
          <p className="font-dm text-base sm:text-lg text-[#1A0A00]/60 max-w-2xl mx-auto">
            No preservatives. Flash-frozen. MOQ ₹3,000. Bangalore delivery.
          </p>
        </div>
      </section>

      <ProductList />
      <FreshVsFrozen />
      <PartyOrders />

      {/* Bulk Pricing */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#1A0A00] text-center mb-8">
            Bulk Pricing Tiers
          </h2>
          <div className="rounded-2xl overflow-x-auto border border-orange-100 shadow-sm">
            <div className="min-w-[480px]">
            <div className="grid grid-cols-4 bg-[#1A0A00] text-white">
              {["Order Quantity", "Veg Momo", "Chicken Momo", "Paneer Momo"].map((h) => (
                <div key={h} className="px-4 py-4 font-syne font-bold text-sm">{h}</div>
              ))}
            </div>
            {BULK_PRICING.map((row, i) => (
              <div
                key={row.qty}
                className={`grid grid-cols-4 border-t border-orange-50 ${i === BULK_PRICING.length - 1 ? "bg-[#E8320A]/5 font-bold" : i % 2 === 1 ? "bg-[#FFF8F0]" : "bg-white"}`}
              >
                <div className="px-4 py-4 font-dm text-sm font-medium text-[#1A0A00]">{row.qty}</div>
                <div className="px-4 py-4 font-syne font-bold text-[#E8320A]">{row.veg}</div>
                <div className="px-4 py-4 font-syne font-bold text-[#E8320A]">{row.chicken}</div>
                <div className="px-4 py-4 font-syne font-bold text-[#E8320A]">{row.paneer}</div>
              </div>
            ))}
            </div>
          </div>
          <p className="font-dm text-xs text-[#1A0A00]/40 text-center mt-4">
            Minimum order value ₹3,000. Prices per pack (25 pieces). Delivery charges extra.
          </p>
        </div>
      </section>

      <HygieneSection />
      <FAQ />

      {/* Wholesale Form */}
      <section className="py-12 sm:py-16 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-syne font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#1A0A00]">Request Wholesale Pricing</h2>
            <p className="font-dm text-[#1A0A00]/60 mt-2 text-sm sm:text-base">Custom quotes for large volume orders.</p>
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
