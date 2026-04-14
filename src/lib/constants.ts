export const IMG_BASE = "https://eurekaindia.com/wp-content/uploads";

export const PRODUCTS = [
  {
    id: "wooden",
    name: "Wooden Doors",
    category: "bedroom",
    price: "₹3,500 – ₹8,000",
    image: `${IMG_BASE}/2019/12/WOODEN-DOOR-768x635.jpg`,
    badge: "Bestseller",
    badgeColor: "bg-sky-500/90",
    categoryLabel: "Bedroom",
    description:
      "Laminate, Flush & Molded variants in Teak, Oak, Walnut & Rosewood. Premium finish with natural beauty.",
    tags: ["Flush", "Panel", "Carved"],
  },
  {
    id: "pvc",
    name: "Solid PVC Doors",
    category: "bathroom",
    price: "₹2,500 – ₹6,500",
    image: `${IMG_BASE}/2019/12/PVC-DOORS-768x635.jpg`,
    badge: "Industry First",
    badgeColor: "bg-amber-500/90",
    categoryLabel: "Bathroom",
    star: true,
    description:
      "Waterproof PVC Panel & Flush Doors — India's first! Premium paint, washable. Before TATA entered the market.",
    tags: ["Waterproof", "Washable", "Lightweight"],
  },
  {
    id: "theme",
    name: "Theme Doors",
    category: "bedroom",
    price: "₹4,500 – ₹10,000",
    image: `${IMG_BASE}/2020/02/theme-Door-768x635.jpg`,
    badge: "Designer",
    badgeColor: "bg-purple-500/90",
    categoryLabel: "Premium",
    description:
      "Designer patterns for statement entrances. Modern, Classical, Contemporary & Artistic styles.",
    tags: ["Modern", "Classical", "Custom"],
  },
  {
    id: "balcony",
    name: "Post Forming Doors",
    category: "allrooms",
    price: "₹3,800 – ₹7,200",
    image: `${IMG_BASE}/2020/02/POST-FORMING-DOORS-768x635.jpg`,
    badge: "",
    badgeColor: "",
    categoryLabel: "All Rooms",
    description:
      "Versatile interior solutions for all rooms, office partitions & commercial spaces with UV protection.",
    tags: ["Sliding", "Swing", "UV Protected"],
  },
  {
    id: "frp",
    name: "FRP Doors",
    category: "bathroom",
    price: "₹2,200 – ₹5,500",
    image: `${IMG_BASE}/2020/02/FRP-DOOR-768x635.jpg`,
    badge: "Value Pick",
    badgeColor: "bg-emerald-500/90",
    categoryLabel: "Bathroom",
    description:
      "Fibre Reinforced Polymer — durable, lightweight & waterproof. Ideal for wet areas & high-humidity spaces.",
    tags: ["Waterproof", "Lightweight", "Low Maintenance"],
  },
  {
    id: "frames",
    name: "Frames & Plywood",
    category: "allrooms",
    price: "₹2,000 – ₹5,000",
    image: `${IMG_BASE}/2020/01/FRAME-768x635.jpg`,
    badge: "",
    badgeColor: "",
    categoryLabel: "All Rooms",
    description:
      "Premium hardwood plywood. BWR, Marine & Fire-resistant variants. Quality certified with superior strength.",
    tags: ["BWR", "Marine", "Fire-resistant"],
  },
];

export const GALLERY_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `${IMG_BASE}/2020/02/${i + 1}.jpg`,
  alt: `Memory ${i + 1}`,
  label: `Memory ${String(i + 1).padStart(2, "0")}`,
}));

export const CLIENT_LOGOS = [
  `${IMG_BASE}/2019/09/aakar-logo-04.png`,
  `${IMG_BASE}/2019/09/AnandTara-Construction-logo.png`,
  `${IMG_BASE}/2019/09/Egale-Properties-logo..png`,
  `${IMG_BASE}/2019/09/DNVgrey-logo.png`,
  `${IMG_BASE}/2019/09/Gera-Developers-logo.png`,
  `${IMG_BASE}/2020/01/VASUDHA.png`,
  `${IMG_BASE}/2020/01/RAVIMA.jpg`,
  `${IMG_BASE}/2020/01/PHARANDE.png`,
];

export const AWARDS = [
  { title: "Best Businessman", subtitle: "— Medha Patkar", icon: "mdi:trophy", color: "amber" },
  { title: "Natrang Academy", subtitle: "— Min. Girish Bapat", icon: "mdi:trophy", color: "amber" },
  { title: "Udyogratna Award", subtitle: "Industry Excellence", icon: "mdi:trophy", color: "amber" },
  { title: "Veer Bharati Award", subtitle: "National Recognition", icon: "mdi:medal", color: "amber" },
  { title: "Lions Club Social Contribution", subtitle: "Community Service", icon: "mdi:hand-heart", color: "sky" },
  { title: "Dr. Radhakrishnan Award", subtitle: "Education Excellence", icon: "mdi:school", color: "sky" },
  { title: "Nayak Award", subtitle: "Business Leadership", icon: "mdi:medal", color: "amber" },
  { title: "Siddh Seva Award", subtitle: "— Swami Hardas", icon: "mdi:hand-heart", color: "sky" },
];

export const VALUES = [
  { title: "Dedication", desc: "Willingness first", icon: "mdi:fire" },
  { title: "Improvement", desc: "Always learning", icon: "mdi:trending-up" },
  { title: "Reliability", desc: "Ethics over rules", icon: "mdi:handshake" },
  { title: "Innovation", desc: "Set new trends", icon: "mdi:lightbulb-on" },
  { title: "Compassion", desc: "Action to help", icon: "mdi:heart" },
];

export const WHY_EUREKA = [
  { title: "Excellent Infrastructure", desc: "State-of-the-art manufacturing plant in Pune.", icon: "mdi:factory" },
  { title: "Best Quality Materials", desc: "Sourced from certified suppliers. Rigorously tested.", icon: "mdi:star-check" },
  { title: "Industry Standards", desc: "Full compliance with national quality benchmarks.", icon: "mdi:shield-check-outline" },
  { title: "Customized Designs", desc: "Bespoke solutions for every project.", icon: "mdi:pencil-ruler" },
  { title: "Timely Delivery", desc: "On-schedule supply chains for your timeline.", icon: "mdi:truck-fast" },
  { title: "After Sales Service", desc: "Dedicated support team for warranty and assistance.", icon: "mdi:headset" },
  { title: "Sustainability", desc: "Responsible sourcing and eco-friendly processes.", icon: "mdi:leaf-circle" },
  { title: "RERA Project Ready", desc: "Preferred partner for RERA-certified developers.", icon: "mdi:certificate" },
];
