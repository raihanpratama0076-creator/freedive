import { EVENT_PHOTOS } from "@/data/images";

export type EventLevel = "Beginner" | "Advanced" | "All Levels";
export type EventCategory =
  | "Discovery"
  | "Exploration"
  | "Training"
  | "Conservation";

export interface DiveEvent {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  /** Tanggal ISO jadwal (contoh). */
  date: string;
  endDate?: string;
  location: string;
  level: EventLevel;
  category: EventCategory;
  duration: string;
  /** Harga dalam IDR; null = acara gratis. */
  price: number | null;
  spotsLeft: number;
  spotsTotal: number;
  description: string;
  highlights: string[];
}

/** Data contoh — tanggal, lokasi, dan kuota adalah placeholder yang perlu diperbarui. */
export const EVENTS: DiveEvent[] = [
  {
    id: "weekend-intro-freediving",
    name: "Weekend Intro Freediving",
    image: EVENT_PHOTOS[0],
    imageAlt: "Peserta freediving pemula menikmati selam dangkal di akhir pekan",
    date: "2026-11-14",
    endDate: "2026-11-15",
    location: "Blue Lagoon Bay",
    level: "Beginner",
    category: "Discovery",
    duration: "2 hari · 1 malam",
    price: 650000,
    spotsLeft: 6,
    spotsTotal: 12,
    description:
      "Pengenalan freediving dua hari yang menyenangkan untuk pemula. Sesi kolam di hari pertama, dua selam dangkal di terumbu karang hari kedua — dengan instruktur yang menemanimu setiap saat.",
    highlights: [
      "Tidak perlu pengalaman sebelumnya",
      "Semua perlengkapan disediakan & disesuaikan",
      "2 selam terpandu dangkal",
      "Briefing pantai & BBQ malam",
    ],
  },
  {
    id: "reef-exploration-trip",
    name: "Reef Exploration Freediving",
    image: EVENT_PHOTOS[1],
    imageAlt: "Freediver menjelajahi lereng terumbu karang yang berwarna-warni",
    date: "2026-12-05",
    endDate: "2026-12-06",
    location: "Coral Gardens Marine Park",
    level: "All Levels",
    category: "Exploration",
    duration: "2 hari · 4 selam",
    price: 1850000,
    spotsLeft: 4,
    spotsTotal: 10,
    description:
      "Dua hari menjelajahi beberapa terumbu karang tersehat di kawasan ini. Empat selam di lokasi berbeda — dinding, taman karang, dan stasiun pembersihan tempat manta sering melintas.",
    highlights: [
      "4 selam di 3 lokasi berbeda",
      "Stasiun pembersihan manta (musiman)",
      "Akomodasi perahu",
      "Sesi foto bawah laut",
    ],
  },
  {
    id: "freediving-camp",
    name: "Freediving Training Camp",
    image: EVENT_PHOTOS[2],
    imageAlt: "Grup freediver berlatih di kolam dalam training camp intensif",
    date: "2027-01-09",
    endDate: "2027-01-11",
    location: "BAC Training Center",
    level: "Beginner",
    category: "Training",
    duration: "3 hari · 2 malam",
    price: 4900000,
    spotsLeft: 8,
    spotsTotal: 12,
    description:
      "Camp tiga hari imersif yang membawamu dari nol hingga level sertifikasi entry. Pagi di kolam, siang di kelas, malam bersama komunitas BAC.",
    highlights: [
      "Kurikulum entry-level lengkap",
      "Kolam + 4 selam laut",
      "Sewa perlengkapan termasuk",
      "Malam komunitas api unggun",
    ],
  },
  {
    id: "deep-freediving-workshop",
    name: "Workshop Selam Dalam Advanced",
    image: EVENT_PHOTOS[3],
    imageAlt: "Advanced freediver menyelam secara vertikal di dinding bawah laut yang dalam",
    date: "2027-02-06",
    endDate: "2027-02-07",
    location: "The Deep Wall",
    level: "Advanced",
    category: "Training",
    duration: "2 hari · 4 selam",
    price: 3400000,
    spotsLeft: 3,
    spotsTotal: 8,
    description:
      "Workshop terfokus untuk freediver advanced bersertifikat: protokol selam dalam, latihan freefall, mouthfill equalization, dan descent bertahap di dinding 40 m nyata.",
    highlights: [
      "4 selam dalam 30–40 m",
      "Workshop equalisasi & freefall",
      "Latihan lanyard & prosedur darurat",
      "Video debrief setiap malam",
    ],
  },
  {
    id: "ocean-cleanup",
    name: "Bersih Laut & Konservasi",
    image: EVENT_PHOTOS[4],
    imageAlt: "Freediver sukarela mengumpulkan sampah saat bersih-bersih laut",
    date: "2026-12-19",
    location: "House Reef & Area Dermaga",
    level: "All Levels",
    category: "Conservation",
    duration: "1 hari · 2 selam",
    price: null,
    spotsLeft: 15,
    spotsTotal: 20,
    description:
      "Selam dengan tujuan nyata. Dua selam bersih-bersih di house reef kami plus sesi pembibitan fragmen karang. Gratis untuk semua freediver bersertifikat — sewa perlengkapan setengah harga untuk peserta.",
    highlights: [
      "2 selam bersih-bersih",
      "Sesi pembibitan karang",
      "Survei data sampah",
      "Makan siang gratis & bilas perlengkapan",
    ],
  },
];

export const EVENT_CATEGORIES: EventCategory[] = [
  "Discovery",
  "Exploration",
  "Training",
  "Conservation",
];
