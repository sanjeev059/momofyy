import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, WA_NUMBER } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Momofy`,
    description: product.desc,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const waMsg = encodeURIComponent(
    `Hi Momofy! I'd like to order *${product.name}* (${product.weight}) at ₹${product.price}/${product.unit}. Please confirm and share delivery details.`
  );

  return (
    <>
      <section className="pt-28 pb-16 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-dm text-sm text-[#1A0A00]/50 hover:text-[#E8320A] transition-colors mb-8"
          >
            ← Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className={`absolute top-4 left-4 text-sm font-dm font-semibold px-4 py-1.5 rounded-full shadow-md ${product.tagColor}`}>
                {product.tag}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="font-syne font-extrabold text-4xl text-[#1A0A00]">{product.name}</h1>
                <p className="font-dm text-[#1A0A00]/40 mt-1">{product.weight}</p>
              </div>

              <p className="font-dm text-lg text-[#1A0A00]/70 leading-relaxed">{product.desc}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="font-syne font-extrabold text-4xl text-[#E8320A]">₹{product.price}</span>
                <span className="font-dm text-xl text-gray-400 line-through">₹{product.mrp}</span>
                <span className="font-dm text-base text-gray-400">/{product.unit}</span>
                <span className="ml-2 font-dm text-sm font-semibold bg-green-50 text-green-700 px-3 py-1 rounded-lg">
                  {product.margin} margin
                </span>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-syne font-bold text-lg py-4 rounded-2xl hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-lg shadow-green-200"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Buy Now on WhatsApp
              </a>

              <p className="font-dm text-xs text-center text-[#1A0A00]/40">
                MOQ ₹3,000 · {product.moq} · Pan India delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Ingredients */}
            <div className="bg-[#FFF8F0] rounded-2xl p-7 border border-orange-100">
              <h2 className="font-syne font-bold text-xl text-[#1A0A00] mb-5">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="font-dm text-sm bg-white border border-orange-100 text-[#1A0A00] px-3 py-1.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition */}
            <div className="bg-[#FFF8F0] rounded-2xl p-7 border border-orange-100">
              <h2 className="font-syne font-bold text-xl text-[#1A0A00] mb-5">
                Nutritional Info{" "}
                <span className="font-dm font-normal text-sm text-[#1A0A00]/40">per {product.nutrition.serving}</span>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Calories", value: `${product.nutrition.calories} kcal` },
                  { label: "Protein", value: product.nutrition.protein },
                  { label: "Carbohydrates", value: product.nutrition.carbs },
                  { label: "Fat", value: product.nutrition.fat },
                ].map((n) => (
                  <div key={n.label} className="bg-white rounded-xl p-3 text-center">
                    <p className="font-syne font-bold text-[#E8320A]">{n.value}</p>
                    <p className="font-dm text-xs text-[#1A0A00]/50 mt-0.5">{n.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage */}
            <div className="bg-[#1A0A00] rounded-2xl p-7 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">❄️</span>
                <h2 className="font-syne font-bold text-xl">Storage Instructions</h2>
              </div>
              <p className="font-dm text-sm text-white/70 leading-relaxed">{product.storage}</p>
            </div>

            {/* Steaming */}
            <div className="bg-[#E8320A] rounded-2xl p-7 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">♨️</span>
                <h2 className="font-syne font-bold text-xl">Cooking Instructions</h2>
              </div>
              <p className="font-dm text-sm text-white/80 leading-relaxed">{product.steamInstructions}</p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-[#E8320A] text-[#E8320A] font-syne font-bold px-8 py-4 rounded-full hover:bg-[#E8320A] hover:text-white transition-all"
            >
              ← View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
