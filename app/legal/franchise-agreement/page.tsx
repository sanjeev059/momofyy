import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchise Agreement Overview — Momofy",
  description: "Key terms and overview of the Momofy franchise agreement for prospective franchise partners.",
};

const LAST_UPDATED = "1 June 2025";

export default function FranchiseAgreementPage() {
  return (
    <>
      <section className="pt-24 pb-8 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-dm text-xs font-medium text-[#E8320A] tracking-widest uppercase">Legal</p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#1A0A00]">Franchise Agreement</h1>
          <p className="font-dm text-sm text-[#1A0A00]/50">Overview — Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="bg-[#1A0A00] rounded-2xl p-5 text-white">
            <p className="font-dm text-sm text-white/80 leading-relaxed">
              <strong className="text-[#FFB347]">Note:</strong> This page provides an overview of key franchise terms. The full Franchise Agreement is a legally binding document signed between Momofy and the franchisee. Prospective partners should review the complete agreement with legal counsel before signing. To receive a copy of the full agreement, apply via WhatsApp: +91 63054 68471.
            </p>
          </div>

          <Block title="1. Parties">
            The Franchise Agreement is entered between <strong>Momofy</strong> (Franchisor), a company headquartered in Bangalore, Karnataka, and the <strong>Franchisee</strong> (the individual or entity applying for the franchise license).
          </Block>

          <Block title="2. Franchise Fee">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>One-time Franchise Fee: <strong>₹89,000</strong> (inclusive of onboarding, training, and starter kit)</li>
              <li>The fee is payable upfront upon signing of the agreement.</li>
              <li>The fee is non-refundable once the onboarding process has commenced.</li>
              <li>There are no hidden royalty fees or monthly charges imposed by Momofy.</li>
            </ul>
          </Block>

          <Block title="3. What's Included in the Franchise Package">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>Brand license to operate under the Momofy name</li>
              <li>Starter inventory of frozen momos (as per package terms)</li>
              <li>Complete recipe and preparation training</li>
              <li>Branding materials (banners, packaging, menus)</li>
              <li>Ongoing product supply at franchise pricing</li>
              <li>WhatsApp and phone-based business support</li>
              <li>Marketing collateral and social media assistance</li>
            </ul>
          </Block>

          <Block title="4. Franchisee Obligations">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>Operate within the Momofy brand standards and quality guidelines</li>
              <li>Maintain cold storage at -18°C as per food safety requirements</li>
              <li>Source all Momofy-branded products exclusively from Momofy</li>
              <li>Maintain a minimum monthly order volume (as agreed in the individual agreement)</li>
              <li>Not engage in activities that may damage the Momofy brand reputation</li>
              <li>Comply with all applicable local food safety and business regulations</li>
              <li>Not sub-franchise or assign the agreement without written permission</li>
            </ul>
          </Block>

          <Block title="5. Territory">
            Each franchise agreement specifies a geographic territory within which the franchisee operates. Momofy endeavors not to appoint competing franchisees within the same territory. Territory exclusivity, if any, is defined in the individual agreement.
          </Block>

          <Block title="6. Term and Renewal">
            <ul className="list-disc list-inside space-y-1 font-dm text-sm text-[#1A0A00]/70">
              <li>Initial term: 1 year from the date of signing</li>
              <li>Renewable annually subject to performance and mutual agreement</li>
              <li>Renewal terms and fees will be communicated at least 30 days before expiry</li>
            </ul>
          </Block>

          <Block title="7. Termination">
            Either party may terminate the agreement with 30 days' written notice. Momofy may terminate immediately in cases of:
            <ul className="list-disc list-inside space-y-1 mt-2 font-dm text-sm text-[#1A0A00]/70">
              <li>Breach of food safety standards</li>
              <li>Reputational damage to the Momofy brand</li>
              <li>Non-payment of outstanding dues for more than 60 days</li>
              <li>Unauthorized sub-franchising or brand misuse</li>
            </ul>
          </Block>

          <Block title="8. Intellectual Property">
            The Momofy brand name, logo, recipes, and proprietary processes remain the exclusive property of Momofy. The franchisee is granted a limited, non-exclusive license to use the brand during the term of the agreement only.
          </Block>

          <Block title="9. Dispute Resolution">
            Any disputes arising from this agreement shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes will be referred to arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration in Bangalore, Karnataka. The agreement is governed by the laws of India.
          </Block>

          <Block title="10. Get the Full Agreement">
            To receive a copy of the complete Franchise Agreement or to ask questions before applying:
            <div className="mt-3 bg-[#FFF8F0] rounded-xl p-4 border border-orange-100 font-dm text-sm text-[#1A0A00]/70 space-y-2">
              <p>WhatsApp: +91 63054 68471</p>
              <p>Email: hello@momofyy.com</p>
              <p className="mt-3">
                <Link href="/franchise" className="text-[#E8320A] font-medium hover:underline">
                  → Apply for a Franchise
                </Link>
              </p>
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
