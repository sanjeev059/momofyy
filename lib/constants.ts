export const BRAND = {
  name: "Momofy",
  tagline: "India's Fastest Growing Momo Franchise",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "918867361454",
  waNumber: process.env.NEXT_PUBLIC_WA_NUMBER ?? "918867361454",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@momofyy.com",
  address: "Bangalore, Karnataka, India",
  fssai: "FSSAI Certified",
  gstin: "29XXXXXXXXXXXXX",
};

export const WA_MESSAGE = encodeURIComponent(
  "Hi Momofy! I'm interested in your franchise/B2B supply. Please share more details."
);

export const PRODUCTS = [
  {
    id: "veg-momo",
    name: "Veg Momo",
    emoji: "🥟",
    desc: "Classic vegetable filling with fresh herbs and spices. Perfect crowd-pleaser.",
    price: 99,
    mrp: 300,
    tag: "Bestseller",
    tagColor: "bg-brand-red text-white",
    margin: "67%",
    moq: "Min 30 packs",
  },
  {
    id: "chicken-momo",
    name: "Chicken Momo",
    emoji: "🍗",
    desc: "Juicy chicken mince with aromatics. Top seller on Zomato & Swiggy.",
    price: 129,
    mrp: 350,
    tag: "High Margin",
    tagColor: "bg-brand-yellow text-brand-dark",
    margin: "63%",
    moq: "Min 30 packs",
  },
  {
    id: "paneer-momo",
    name: "Paneer Momo",
    emoji: "🧀",
    desc: "Creamy paneer with bell peppers and cheese. Premium segment favourite.",
    price: 129,
    mrp: 400,
    tag: "Premium",
    tagColor: "bg-purple-600 text-white",
    margin: "68%",
    moq: "Min 30 packs",
  },
  {
    id: "mix-veg-momo",
    name: "Mix Veg Momo",
    emoji: "🥦",
    desc: "Colorful medley of seasonal vegetables. Health-conscious bestseller.",
    price: 123,
    mrp: 299,
    tag: "Fan Favourite",
    tagColor: "bg-green-600 text-white",
    margin: "59%",
    moq: "Min 30 packs",
  },
  {
    id: "corn-cheese-momo",
    name: "Corn Cheese Momo",
    emoji: "🌽",
    desc: "Sweet corn with melted cheese. Kids love it. High repeat orders.",
    price: 149,
    mrp: 500,
    tag: "Kids Fave",
    tagColor: "bg-orange-400 text-white",
    margin: "70%",
    moq: "Min 30 packs",
  },
  {
    id: "chicken-strips",
    name: "Chicken Strips",
    emoji: "🍖",
    desc: "Crispy golden chicken strips. Perfect snack and upsell item.",
    price: 299,
    mrp: 399,
    tag: "New",
    tagColor: "bg-blue-600 text-white",
    margin: "25%",
    moq: "Min 20 packs",
  },
];

export const WHY_CARDS = [
  {
    icon: "🏭",
    title: "Direct from Factory",
    desc: "No middlemen. You buy directly from our Bangalore facility at factory prices.",
  },
  {
    icon: "🏷️",
    title: "Private Labeling",
    desc: "Launch your own brand. We manufacture, you brand. White-label ready.",
  },
  {
    icon: "🚚",
    title: "Pan India Delivery",
    desc: "Cold-chain logistics to every major city. Orders dispatched within 48 hrs.",
  },
  {
    icon: "🤝",
    title: "Distribution Network",
    desc: "Become an exclusive distributor in your city. 11.11% guaranteed margin.",
  },
  {
    icon: "📱",
    title: "Zomato & Swiggy Ready",
    desc: "Products are cloud-kitchen optimised with listing support included.",
  },
  {
    icon: "🌿",
    title: "No Preservatives",
    desc: "100% natural ingredients. Flash-frozen at source. FSSAI certified.",
  },
];

export const STATS = [
  { label: "Restaurants Supplied", value: "2,400+" },
  { label: "Pieces Per Day", value: "40,000" },
  { label: "FSSAI Certified", value: "✓" },
  { label: "In Business Since", value: "2022" },
  { label: "Delivery Coverage", value: "Pan India" },
];

export const B2B_CARDS = [
  {
    icon: "🍽️",
    title: "Restaurant & Café Supply",
    desc: "Bulk frozen momo supply with consistent quality. MOQ ₹3,000. 48-hr delivery across Bangalore and major cities.",
  },
  {
    icon: "📦",
    title: "Distributorship",
    desc: "Become Momofy's city distributor. 11.11% guaranteed margin on every order. Exclusive territory rights available.",
  },
  {
    icon: "🏷️",
    title: "Private Labeling",
    desc: "Launch your own momo brand. We handle manufacturing, packaging, and FSSAI. You handle sales.",
  },
  {
    icon: "✈️",
    title: "Export",
    desc: "We supply to Indian restaurants globally. APEDA registered. Food safety documentation provided.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Nair",
    role: "Café Owner, Bangalore",
    text: "Been ordering from Momofy for 8 months. Quality is absolutely consistent — our customers can't tell the difference from fresh. Margins are excellent and delivery is always on time.",
    rating: 5,
    avatar: "RN",
  },
  {
    name: "Aishwarya Menon",
    role: "Restaurant Owner, Chennai",
    text: "Private label was a game changer. We launched 'Chennai Momos' under our own brand and it's our top seller on Swiggy. Momofy handles everything behind the scenes.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Vinod Kumar",
    role: "City Distributor, Hyderabad",
    text: "The distributorship model is solid. I cover 40+ restaurants in Hyderabad now with the 11.11% margin. ROI in 2 months. The support team is extremely responsive.",
    rating: 5,
    avatar: "VK",
  },
];

export const FRANCHISE_STEPS = [
  { step: "01", title: "Apply Online", desc: "Fill the enquiry form. Our team calls within 24 hours." },
  { step: "02", title: "Pay & Confirm", desc: "One-time franchise fee of ₹89,000. Fully documented." },
  { step: "03", title: "Setup & Train", desc: "Equipment, recipes, SOPs, and 3-day hands-on training." },
  { step: "04", title: "Launch & Earn", desc: "Go live with marketing support. Profit from day one." },
];

export const FRANCHISE_FEATURES = [
  "Complete recipe & SOP manual",
  "Branded packaging & signage",
  "Zomato/Swiggy listing support",
  "WhatsApp marketing templates",
  "Dedicated relationship manager",
  "Ongoing product R&D access",
];

export const FAQS = [
  {
    q: "What is the total investment required?",
    a: "The franchise fee is ₹89,000 (one-time). Additional setup costs for equipment and space are typically ₹30,000–₹60,000 depending on your location and existing setup.",
  },
  {
    q: "How soon can I start making profit?",
    a: "Most franchisees break even within 2 months. Monthly profits typically range from ₹40,000 to ₹80,000+ depending on volume and location.",
  },
  {
    q: "Do I need a commercial kitchen?",
    a: "You need a basic cloud kitchen setup or a counter-service space. We provide the frozen momos — you just need a steamer or fryer and a point of sale.",
  },
  {
    q: "What is the minimum order quantity for B2B?",
    a: "MOQ is ₹3,000 per order. For distributors, minimum monthly purchase commitment applies based on territory.",
  },
  {
    q: "Do you offer private labeling?",
    a: "Yes! We offer full private labeling — custom packaging, your brand name, and FSSAI-compliant labels. Minimum order is 500 units per SKU.",
  },
  {
    q: "Is delivery available across India?",
    a: "Yes — we use cold-chain logistics partners to deliver pan India. Most metros receive delivery within 48–72 hours.",
  },
];

export const BULK_PRICING = [
  { qty: "30–99 packs", veg: "₹99", chicken: "₹129", paneer: "₹129" },
  { qty: "100–299 packs", veg: "₹90", chicken: "₹118", paneer: "₹118" },
  { qty: "300–999 packs", veg: "₹82", chicken: "₹109", paneer: "₹109" },
  { qty: "1000+ packs", veg: "₹75", chicken: "₹99", paneer: "₹99" },
];
