/** Konfigurasi global situs — nav, kontak, sosial. */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "#home" },
  { label: "Belajar", href: "#learn" },
  { label: "Peralatan", href: "#gear" },
  { label: "Keselamatan", href: "#safety" },
  { label: "Komunitas", href: "#community" },
  { label: "Acara", href: "#events" },
  { label: "FAQ", href: "#faq" },
];

export const CONTACT = {
  email: "hello@blueabyss.club",
  phone: "+62 812 0000 8888",
  address: "Jl. Pantai Selatan 08, Blue Harbor, Indonesia",
  whatsapp: "+62 812 0000 8888",
};

export const SOCIALS: { label: string; href: string; icon: string }[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "TikTok", href: "#", icon: "music" },
];

export const STATS = [
  { value: 2400, suffix: "+", label: "Freediver terlatih" },
  { value: 38, suffix: "", label: "Spot selam dijelajahi" },
  { value: 4.9, suffix: "/5", label: "Rating rata-rata", decimals: 1 },
  { value: 120, suffix: "+", label: "Aksi bersih laut" },
];
