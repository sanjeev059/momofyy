import Link from "next/link";

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? "918867361454";
const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "918867361454";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? "hello@momofy.in";

export default function Footer() {
  return (
    <footer className="bg-[#1A0A00] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-syne text-2xl font-extrabold">
              <span className="text-[#E8320A]">momo</span>
              <span className="text-white">fy</span>
            </div>
            <p className="font-dm text-sm text-white/50 leading-relaxed">
              India&apos;s fastest growing frozen momo franchise. FSSAI certified. 2,400+ restaurant partners.
              Bangalore-based, pan India delivery.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors text-sm"
              >
                W
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8320A] transition-colors text-xs"
              >
                @
              </a>
              <a
                href={`tel:+${PHONE}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFB347] hover:text-[#1A0A00] transition-colors text-xs"
              >
                ☎
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Franchise", href: "/franchise" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-dm text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {["Veg Momo", "Chicken Momo", "Paneer Momo", "Mix Veg Momo", "Corn Cheese", "Chicken Strips"].map((p) => (
                <li key={p}>
                  <Link href="/products" className="font-dm text-sm text-white/50 hover:text-white transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-syne font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Refund Policy", href: "#" },
                { label: "Franchise Agreement", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-dm text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-xl">
              <p className="font-dm text-xs text-white/40">FSSAI License</p>
              <p className="font-dm text-xs text-white/60 font-medium mt-0.5">21220002003XXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-dm text-xs text-white/40">
            © {new Date().getFullYear()} Momofy. All rights reserved.
          </p>
          <p className="font-dm text-xs text-white/40">
            FSSAI Certified | Made in Bangalore 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
