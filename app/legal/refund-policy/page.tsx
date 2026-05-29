import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy — Momofy",
  description: "Momofy's refund and return policy for frozen momo orders.",
};

const LAST_UPDATED = "1 June 2025";

export default function RefundPolicyPage() {
  return (
    <>
      <section className="pt-24 pb-8 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-dm text-xs font-medium text-[#E8320A] tracking-widest uppercase">Legal</p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#1A0A00]">Refund Policy</h1>
          <p className="font-dm text-sm text-[#1A0A00]/50">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="bg-[#FFF8F0] rounded-2xl p-5 border border-orange-100">
            <p className="font-dm text-sm text-[#1A0A00]/70 leading-relaxed">
              <strong className="text-[#1A0A00]">Important:</strong> Momofy products are perishable frozen food items. Due to the nature of frozen food products and food safety regulations, our refund policy has specific conditions. Please read this policy carefully before placing an order.
            </p>
          </div>

          <Block title="1. Eligible Refund Situations">
            We will issue a full refund or replacement in the following cases:
            <ul className="list-disc list-inside space-y-1 mt-3 font-dm text-sm text-[#1A0A00]/70">
              <li><strong>Wrong product delivered:</strong> You received a product different from what was ordered.</li>
              <li><strong>Damaged packaging upon delivery:</strong> Packaging is visibly damaged or compromised at the time of delivery, reported immediately.</li>
              <li><strong>Quality issue at delivery:</strong> Product is visibly spoiled or has an off smell when received in sealed condition — must be reported within 24 hours of delivery with photo/video evidence.</li>
              <li><strong>Non-delivery:</strong> Order was confirmed but never delivered.</li>
              <li><strong>Short shipment:</strong> Fewer units delivered than ordered and paid for.</li>
            </ul>
          </Block>

          <Block title="2. Non-Refundable Situations">
            Refunds will NOT be issued in the following cases:
            <ul className="list-disc list-inside space-y-1 mt-3 font-dm text-sm text-[#1A0A00]/70">
              <li>Product has been opened, thawed, or cooked.</li>
              <li>Quality issue reported more than 24 hours after delivery.</li>
              <li>Improper storage after delivery (products must be stored at -18°C).</li>
              <li>Change of mind after order confirmation.</li>
              <li>Taste preference differences (our products meet standard quality benchmarks).</li>
              <li>Delays due to logistics, weather, or force majeure events beyond our control.</li>
              <li>Partial orders where a portion has been used.</li>
            </ul>
          </Block>

          <Block title="3. How to Raise a Refund Request">
            To raise a refund or replacement request:
            <ol className="list-decimal list-inside space-y-1 mt-3 font-dm text-sm text-[#1A0A00]/70">
              <li>Contact us within <strong>24 hours</strong> of delivery via WhatsApp: +91 63054 68471</li>
              <li>Share your order details (order number or the name/phone used to order)</li>
              <li>Provide clear photos or a short video showing the issue</li>
              <li>Our team will review and respond within 24–48 hours</li>
            </ol>
          </Block>

          <Block title="4. Refund Processing">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>Approved refunds are processed within 5–7 business days.</li>
              <li>Refunds are credited to the original payment method.</li>
              <li>For cash-on-delivery orders, refunds will be transferred via UPI/bank transfer.</li>
              <li>Replacement orders (where applicable) will be dispatched in the next available delivery cycle.</li>
            </ul>
          </Block>

          <Block title="5. Franchise and B2B Orders">
            Refund terms for franchise partners and B2B supply accounts are governed by the specific supply agreement signed between Momofy and the partner. In the absence of a specific agreement, this policy applies.
          </Block>

          <Block title="6. Contact Us">
            For refund-related queries, reach us at:
            <div className="mt-3 bg-[#FFF8F0] rounded-xl p-4 border border-orange-100 font-dm text-sm text-[#1A0A00]/70 space-y-1">
              <p>WhatsApp: +91 63054 68471 (fastest response)</p>
              <p>Email: hello@momofyy.com</p>
            </div>
          </Block>

          <div className="pt-4 border-t border-orange-100">
            <Link href="/" className="font-dm text-sm text-[#E8320A] hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-syne font-bold text-lg text-[#1A0A00]">{title}</h2>
      <div className="font-dm text-sm text-[#1A0A00]/70 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
