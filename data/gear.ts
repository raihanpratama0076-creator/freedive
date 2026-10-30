/** Data katalog peralatan — produk & paket freediving. */

export type GearCategory =
  | "Masker"
  | "Snorkel"
  | "Fins"
  | "Wetsuit"
  | "Pemberat"
  | "Keselamatan"
  | "Elektronik";

export type GearLevel = "Beginner" | "Advanced";

export interface GearProduct {
  id: string;
  name: string;
  category: GearCategory;
  image: string;
  imageAlt: string;
  /** Harga beli (IDR). */
  buyPrice: number;
  /** Harga sewa per hari (IDR) — null jika tidak tersedia. */
  rentPricePerDay: number | null;
  /** Stok untuk beli / untuk sewa (data contoh). */
  buyStock: number;
  rentStock: number;
  level: GearLevel;
  rating: number;
  reviews: number;
  /** Semakin tinggi = semakin populer. Data contoh. */
  popularity: number;
  description: string;
}

export interface GearPackage {
  id: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  items: string[];
  buyPrice: number;
  rentPricePerDay: number;
  /** Jumlah ketersediaan contoh untuk sewa. */
  rentStock: number;
  level: GearLevel;
  /** Durasi sewa yang disarankan. */
  rentDurationNote: string;
  description: string;
  featured?: boolean;
}

const G = (f: string) => `/images/gear/${f}`;

export const GEAR_PRODUCTS: GearProduct[] = [
  {
    id: "mask",
    name: "Masker low-volume",
    category: "Masker",
    image: G("mask.png"),
    imageAlt: "Masker freediving low volume lensa tempered glass",
    buyPrice: 750000,
    rentPricePerDay: 50000,
    buyStock: 14,
    rentStock: 20,
    level: "Beginner",
    rating: 4.8,
    reviews: 132,
    popularity: 95,
    description: "Ruang udara kecil, lebih mudah di-equalize.",
  },
  {
    id: "snorkel",
    name: "Snorkel simpel",
    category: "Snorkel",
    image: G("snorkel.png"),
    imageAlt: "Snorkel freediving fleksibel tanpa katup",
    buyPrice: 280000,
    rentPricePerDay: 20000,
    buyStock: 22,
    rentStock: 25,
    level: "Beginner",
    rating: 4.6,
    reviews: 98,
    popularity: 82,
    description: "Tabung ringan untuk bernapas di permukaan.",
  },
  {
    id: "long-fins",
    name: "Long fins",
    category: "Fins",
    image: G("fins.png"),
    imageAlt: "Long fins freediving bilah panjang fleksibel",
    buyPrice: 1350000,
    rentPricePerDay: 85000,
    buyStock: 16,
    rentStock: 22,
    level: "Beginner",
    rating: 4.7,
    reviews: 114,
    popularity: 90,
    description: "Bilah panjang, tendangan lebih hemat tenaga.",
  },
  {
    id: "fiber-carbon-fins",
    name: "Fiber / carbon fins",
    category: "Fins",
    image: G("fins.png"),
    imageAlt: "Bifins serat karbon freediving performa tinggi",
    buyPrice: 4200000,
    rentPricePerDay: 150000,
    buyStock: 8,
    rentStock: 12,
    level: "Advanced",
    rating: 4.9,
    reviews: 68,
    popularity: 88,
    description: "Bilah responsif untuk jarak dan kedalaman lebih jauh.",
  },
  {
    id: "wetsuit-freedive",
    name: "Wetsuit freedive",
    category: "Wetsuit",
    image: G("wetsuit.png"),
    imageAlt: "Wetsuit open-cell 3mm dua bagian",
    buyPrice: 2800000,
    rentPricePerDay: 120000,
    buyStock: 10,
    rentStock: 18,
    level: "Beginner",
    rating: 4.9,
    reviews: 85,
    popularity: 86,
    description: "Open-cell, hangat dan luwes saat bergerak.",
  },
  {
    id: "sabuk-pemberat",
    name: "Sabuk pemberat (karet)",
    category: "Pemberat",
    image: G("weight-belt.png"),
    imageAlt: "Sabuk pemberat karet elastis dengan gesper quick-release",
    buyPrice: 380000,
    rentPricePerDay: 20000,
    buyStock: 18,
    rentStock: 25,
    level: "Beginner",
    rating: 4.5,
    reviews: 55,
    popularity: 75,
    description: "Sabuk karet dengan quick release.",
  },
  {
    id: "neck-weight",
    name: "Neck weight",
    category: "Pemberat",
    image: G("weight-belt.png"),
    imageAlt: "Neck weight freediving pemberat leher fleksibel",
    buyPrice: 420000,
    rentPricePerDay: 25000,
    buyStock: 12,
    rentStock: 15,
    level: "Advanced",
    rating: 4.7,
    reviews: 42,
    popularity: 72,
    description: "Beban di leher agar posisi tubuh lebih lurus.",
  },
  {
    id: "pisau-lanyard",
    name: "Pisau dan lanyard",
    category: "Keselamatan",
    image: G("dry-bag.png"),
    imageAlt: "Safety lanyard dengan swivel lock dan pisau selam kompak",
    buyPrice: 490000,
    rentPricePerDay: 25000,
    buyStock: 20,
    rentStock: 25,
    level: "Beginner",
    rating: 4.8,
    reviews: 73,
    popularity: 80,
    description: "Pengaman saat tersangkut tali atau jaring.",
  },
  {
    id: "dive-buoy",
    name: "Pelampung / dive buoy",
    category: "Keselamatan",
    image: G("dry-bag.png"),
    imageAlt: "Pelampung dive buoy oranye cerah dengan tali penambat",
    buyPrice: 750000,
    rentPricePerDay: 35000,
    buyStock: 15,
    rentStock: 18,
    level: "Beginner",
    rating: 4.7,
    reviews: 46,
    popularity: 79,
    description: "Penanda posisi untuk kapal dan tempat tali.",
  },
  {
    id: "dive-computer",
    name: "Dive computer / watch",
    category: "Elektronik",
    image: G("dive-computer.png"),
    imageAlt: "Komputer jam selam freediving digital",
    buyPrice: 3800000,
    rentPricePerDay: 110000,
    buyStock: 8,
    rentStock: 12,
    level: "Advanced",
    rating: 4.9,
    reviews: 62,
    popularity: 85,
    description: "Catat kedalaman, waktu, dan interval permukaan.",
  },
];

export const GEAR_PACKAGES: GearPackage[] = [
  {
    id: "starter-kit",
    name: "Paket Pemula Freediving",
    tagline: "Semua yang dibutuhkan freediver baru",
    image: G("pkg-essential.png"),
    imageAlt: "Tampilan atas peralatan freediving dasar: masker, snorkel, dan bifins",
    items: ["Masker low-volume", "Snorkel simpel", "Long fins", "Sabuk pemberat (karet)"],
    buyPrice: 2400000,
    rentPricePerDay: 170000,
    rentStock: 8,
    level: "Beginner",
    rentDurationNote: "Ideal untuk trip 1–3 hari",
    description:
      "Perlengkapan pribadi dalam satu paket praktis — masker, snorkel, dan fins yang sesuai dengan wajah dan kakimu. Tiga item yang sebaiknya dimiliki setiap freediver.",
    featured: true,
  },
  {
    id: "explorer-package",
    name: "Paket Explorer Freediving",
    tagline: "Kit lengkap untuk freediver serius",
    image: G("pkg-explorer.png"),
    imageAlt: "Tampilan atas kit freediving lengkap dengan wetsuit dan komputer",
    items: [
      "Wetsuit freedive",
      "Dive computer / watch",
      "Long fins",
      "Masker + Snorkel",
      "Pelampung / dive buoy",
    ],
    buyPrice: 9800000,
    rentPricePerDay: 450000,
    rentStock: 5,
    level: "Beginner",
    rentDurationNote: "Ideal untuk trip 2–5 hari",
    description:
      "Sewa atau miliki setup lengkap yang terpelihara secara profesional. Sempurna jika kamu berkomitmen pada olahraga ini sebelum berinvestasi satu per satu.",
  },
  {
    id: "pro-package",
    name: "Paket Pro Freediver",
    tagline: "Setup advanced untuk selam kompetitif",
    image: G("pkg-pro.png"),
    imageAlt: "Kit freediving profesional dengan monofin karbon dan komputer",
    items: [
      "Fiber / carbon fins",
      "Dive computer / watch",
      "Wetsuit freedive",
      "Pisau dan lanyard",
      "Pelampung / dive buoy",
    ],
    buyPrice: 10800000,
    rentPricePerDay: 390000,
    rentStock: 3,
    level: "Advanced",
    rentDurationNote: "Ideal untuk workshop & kompetisi",
    description:
      "Stack presisi dan keselamatan: bilah karbon, data selam real-time, dan peralatan sinyal untuk sesi selam dalam, kompetisi, atau liveaboard.",
  },
];

export const GEAR_CATEGORIES: GearCategory[] = [
  "Masker",
  "Snorkel",
  "Fins",
  "Wetsuit",
  "Pemberat",
  "Keselamatan",
  "Elektronik",
];
