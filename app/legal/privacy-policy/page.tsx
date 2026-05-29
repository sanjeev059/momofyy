import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Momofy",
  description: "Momofy's privacy policy — how we collect, use, and protect your information.",
};

const LAST_UPDATED = "1 June 2025";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-24 pb-8 bg-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <p className="font-dm text-xs font-medium text-[#E8320A] tracking-widest uppercase">Legal</p>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#1A0A00]">Privacy Policy</h1>
          <p className="font-dm text-sm text-[#1A0A00]/50">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <Block title="1. Who We Are">
            Momofy (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a home-made frozen momo brand and franchise company headquartered in Bangalore, Karnataka, India. We operate the website momofyy.com and supply frozen momos to restaurants, franchisees, and B2B partners across India.
          </Block>

          <Block title="2. Information We Collect">
            We collect information you voluntarily provide when you:
            <ul className="list-disc list-inside space-y-1 mt-3 font-dm text-sm text-[#1A0A00]/70">
              <li>Submit an enquiry form (name, phone, email, city, business type)</li>
              <li>Place an order via WhatsApp (message content and phone number)</li>
              <li>Contact us directly by phone or email</li>
            </ul>
            <p className="mt-3">We do not collect payment card details. All payments are handled separately and securely outside our website.</p>
          </Block>

          <Block title="3. How We Use Your Information">
            We use the information we collect to:
            <ul className="list-disc list-inside space-y-1 mt-3 font-dm text-sm text-[#1A0A00]/70">
              <li>Process and fulfill your orders</li>
              <li>Contact you about your enquiry or order</li>
              <li>Send follow-up communications about your franchise or B2B partnership</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            We will never sell, rent, or trade your personal information to third parties.
          </Block>

          <Block title="4. WhatsApp Communication">
            When you communicate with us via WhatsApp, your messages are subject to WhatsApp&apos;s own Privacy Policy (whatsapp.com/legal/privacy-policy). We use WhatsApp to process orders and provide customer support. We do not store WhatsApp messages on our servers beyond what is necessary to fulfill your order.
          </Block>

          <Block title="5. Data Storage and Security">
            Your information is stored securely in our database hosted on MongoDB Atlas (cloud infrastructure with encryption at rest). We implement industry-standard technical and organizational measures to protect your data against unauthorized access, loss, or misuse.
          </Block>

          <Block title="6. Data Retention">
            We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Order records are retained for a minimum of 7 years for tax and accounting purposes.
          </Block>

          <Block title="7. Your Rights">
            You have the right to:
            <ul className="list-disc list-inside space-y-1 mt-3 font-dm text-sm text-[#1A0A00]/70">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            To exercise any of these rights, contact us at hello@momofyy.com or WhatsApp +91 63054 68471.
          </Block>

          <Block title="8. Cookies">
            Our website may use essential cookies to ensure basic functionality. We do not use tracking cookies or third-party advertising cookies. You can control cookie settings through your browser.
          </Block>

          <Block title="9. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will post the updated version on this page with a revised &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated policy.
          </Block>

          <Block title="10. Contact Us">
            For any privacy-related questions, contact us at:
            <div className="mt-3 bg-[#FFF8F0] rounded-xl p-4 border border-orange-100 font-dm text-sm text-[#1A0A00]/70 space-y-1">
              <p>Email: hello@momofyy.com</p>
              <p>WhatsApp: +91 63054 68471</p>
              <p>Address: Bangalore, Karnataka, India</p>
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
