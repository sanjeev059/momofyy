import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact — Momofy",
  description: "Contact Momofy for franchise enquiries, B2B supply, distributorship, or export. Call or WhatsApp +91 63054 68471.",
};

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "916305468471";
const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "916305468471";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "hello@momofyy.com";
const WA_MSG = encodeURIComponent("Hi Momofy! I'd like to get in touch.");

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="font-dm text-sm font-medium text-[#E8320A] tracking-widest uppercase">
            Get in Touch
          </p>
          <h1 className="font-syne font-extrabold text-5xl sm:text-6xl text-[#1A0A00]">
            Contact <span className="text-[#E8320A]">Momofy</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="font-syne font-bold text-2xl text-[#1A0A00]">Reach Us Directly</h2>

            {[
              {
                icon: "💬",
                label: "WhatsApp",
                value: "+91 63054 68471",
                href: `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
                desc: "Fastest response — usually within 1 hour",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+91 63054 68471",
                href: `tel:+${PHONE}`,
                desc: "Mon–Sat, 9 AM to 7 PM IST",
              },
              {
                icon: "✉️",
                label: "Email",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
                desc: "Response within 24 hours",
              },
              {
                icon: "📍",
                label: "Address",
                value: "Bangalore, Karnataka",
                href: "#",
                desc: "Momofy HQ — visit by appointment only",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-5 bg-[#FFF8F0] rounded-2xl border border-orange-100 hover:border-[#E8320A] transition-colors group"
              >
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <p className="font-dm text-xs text-[#1A0A00]/40 uppercase tracking-wide">{c.label}</p>
                  <p className="font-syne font-bold text-[#1A0A00] group-hover:text-[#E8320A] transition-colors mt-0.5">
                    {c.value}
                  </p>
                  <p className="font-dm text-xs text-[#1A0A00]/50 mt-0.5">{c.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <LeadForm
            heading="Send an Enquiry"
            subheading="Fill the form and we'll call you back within 24 hours."
          />
        </div>
      </section>
    </>
  );
}
