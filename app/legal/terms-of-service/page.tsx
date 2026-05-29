import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Momofy",
  description: "Momofy's terms of service — ordering, delivery, and usage terms.",
};

const LAST_UPDATED = "1 June 2025";

export default function TermsOfServicePage() {
  return (
    <>
      <section className="pt-24 pb-8 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-dm text-xs font-medium text-[#E8320A] tracking-widest uppercase">Legal</p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#1A0A00]">Terms of Service</h1>
          <p className="font-dm text-sm text-[#1A0A00]/50">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <Block title="1. Acceptance of Terms">
            By accessing momofyy.com, placing an order, or entering into any business relationship with Momofy, you agree to these Terms of Service. If you do not agree, please do not use our services.
          </Block>

          <Block title="2. Products and Orders">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>All orders are subject to a minimum order value of ₹3,000.</li>
              <li>Prices are subject to change without prior notice. Confirmed order prices are locked at the time of order confirmation via WhatsApp.</li>
              <li>Product availability depends on current stock. We will notify you if any item is unavailable after order placement.</li>
              <li>Orders are confirmed only upon explicit confirmation from our team via WhatsApp or phone call.</li>
              <li>Momofy reserves the right to refuse or cancel any order at its discretion.</li>
            </ul>
          </Block>

          <Block title="3. Delivery">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>We offer pan India cold-chain delivery.</li>
              <li>Delivery timelines are estimated and not guaranteed. Delays due to weather, logistics, or force majeure events are not within our control.</li>
              <li>Delivery charges are calculated separately and communicated at the time of order confirmation.</li>
              <li>Risk of loss or damage transfers to the buyer upon handover to the courier/logistics partner.</li>
              <li>You must ensure proper cold storage (-18°C) is available at the delivery address to receive frozen goods.</li>
            </ul>
          </Block>

          <Block title="4. Food Safety and Storage">
            Momofy products are flash-frozen and must be maintained at -18°C throughout storage. Improper storage after delivery is the buyer's sole responsibility. Momofy is not liable for quality issues arising from improper storage, thawing, or mishandling after delivery.
          </Block>

          <Block title="5. Franchise and B2B Terms">
            Franchise and B2B partnerships are governed by separate agreements signed between the parties. These Terms of Service apply to general website use and do not override specific franchise or supply agreements.
          </Block>

          <Block title="6. Intellectual Property">
            All content on momofyy.com — including the Momofy logo, brand name, product images, and text — is the intellectual property of Momofy. You may not reproduce, distribute, or use any content without our prior written permission.
          </Block>

          <Block title="7. Limitation of Liability">
            To the maximum extent permitted by law, Momofy shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services, including but not limited to loss of profits, business interruption, or food safety claims beyond the scope of our direct negligence.
          </Block>

          <Block title="8. Governing Law">
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
          </Block>

          <Block title="9. Changes to Terms">
            We reserve the right to update these terms at any time. Continued use of our services after changes means you accept the revised terms.
          </Block>

          <Block title="10. Contact">
            For questions about these terms, contact us at hello@momofyy.com or WhatsApp +91 63054 68471.
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
