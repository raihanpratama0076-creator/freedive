import { COURSE_PHOTOS } from "@/data/images";

export type CourseLevel = "Beginner" | "Advanced";

export interface Course {
  id: string;
  name: string;
  level: CourseLevel;
  duration: string;
  location: string;
  price: number;
  image: string;
  imageAlt: string;
  description: string;
  requirements: string[];
  skills: string[];
  /** Catatan sertifikasi — konten yang dapat dikonfigurasi, bukan klaim terverifikasi. */
  certification: string;
  featured?: boolean;
}

export const COURSES: Course[] = [
  // ============ BEGINNER ============
  {
    id: "intro-freediving",
    image: COURSE_PHOTOS.beginner[0],
    name: "Pengenalan Freediving",
    level: "Beginner",
    duration: "1 hari · sesi kolam",
    location: "Kolam Latihan BAC",
    price: 650000,
    imageAlt: "Peserta freediving pertama kali berlatih menahan napas di kolam renang",
    description:
      "Pengalaman pertamamu menyelam hanya dengan satu tarikan napas — tanpa pengalaman sebelumnya. Sesi santai di kolam dangkal bersama instruktur yang mendampingimu setiap saat.",
    requirements: [
      "Usia minimal 12 tahun",
      "Bisa berenang dasar",
      "Kondisi kesehatan baik — isi kuesioner medis",
    ],
    skills: [
      "Teknik pernapasan diafragma",
      "Equalisasi telinga (Frenzel)",
      "Relaksasi di dalam air",
      "Sinyal tangan dasar",
    ],
    certification: "Sesi pengalaman — bukan kursus sertifikasi, dapat dilanjutkan ke AIDA 2.",
    featured: true,
  },
  {
    id: "aida2",
    image: COURSE_PHOTOS.beginner[1],
    name: "AIDA 2 — Freediver",
    level: "Beginner",
    duration: "3 hari · kolam + laut",
    location: "Kolam + Laut Terbuka",
    price: 3500000,
    imageAlt: "Freediver pemula menyelam di sepanjang lereng karang dalam air biru jernih",
    description:
      "Program entry-level freediving paling populer di dunia. Kuasai teori dasar, latih teknik esensial di kolam, lalu selesaikan selam laut terbuka untuk meraih sertifikat pertamamu.",
    requirements: [
      "Usia minimal 12 tahun",
      "Mampu berenang 200 m",
      "Surat keterangan medis jika diperlukan",
    ],
    skills: [
      "Pernapasan & relaksasi pre-dive",
      "Teknik finning & streamlining",
      "Equalisasi Frenzel",
      "Prosedur keselamatan buddy",
    ],
    certification:
      "Mempersiapkanmu untuk sertifikasi AIDA 2 yang diakui secara internasional bersama instruktur mitra kami.",
    featured: true,
  },
  {
    id: "static-fundive",
    image: COURSE_PHOTOS.beginner[2],
    name: "Latihan Fun Dive Statis",
    level: "Beginner",
    duration: "Setengah hari · kolam",
    location: "Kolam Latihan BAC",
    price: 450000,
    imageAlt: "Peserta latihan menahan napas statis di permukaan kolam dengan buddy mendampingi",
    description:
      "Latihan khusus menahan napas statis di permukaan air. Ideal untuk membangun fondasi mental dan fisik sebelum mengikuti kursus penuh — cocok untuk semua usia.",
    requirements: [
      "Usia minimal 10 tahun",
      "Nyaman di air dangkal",
    ],
    skills: [
      "Latihan relaksasi & meditasi",
      "Teknik pernapasan purge & recovery",
      "Mengenali kontraksi diafragma",
      "Prosedur buddy statis",
    ],
    certification: "Sesi pengalaman — bukan kursus sertifikasi.",
  },

  // ============ ADVANCED ============
  {
    id: "aida3",
    image: COURSE_PHOTOS.advanced[0],
    name: "AIDA 3 — Advanced Freediver",
    level: "Advanced",
    duration: "3 hari · 6 selam laut",
    location: "Laut Terbuka · Berbagai Lokasi",
    price: 4200000,
    imageAlt: "Advanced freediver menyelam vertikal ke kedalaman biru gelap",
    description:
      "Langkah berikutnya: target kedalaman 24 m dan waktu statis 2:45. Enam selam laut yang membangun kepercayaan diri nyata — teknik freefall, mouthfill equalization, dan manajemen kontraksi.",
    requirements: [
      "Sertifikasi AIDA 2 atau setara",
      "Minimal 20 selam terdokumentasi",
      "Kebugaran fisik untuk selam",
    ],
    skills: [
      "Freefall & teknik descent pasif",
      "Mouthfill equalization",
      "Manajemen kontraksi diafragma",
      "No-fins & monofin dasar",
    ],
    certification: "Pelatihan tingkat lanjut sesuai standar AIDA internasional.",
    featured: true,
  },
  {
    id: "deep-freediving",
    image: COURSE_PHOTOS.advanced[1],
    name: "Spesialisasi Selam Dalam",
    level: "Advanced",
    duration: "2 hari · 4 selam",
    location: "Deep Wall & Offshore Sites",
    price: 3200000,
    imageAlt: "Freediver menyelam di sepanjang dinding bawah laut yang dalam",
    description:
      "Menyelam lebih dalam dengan aman dan metodis. Pelajari fisiologi tekanan, manajemen freefall, ekualisasi mouthfill, dan prosedur cadangan yang membuat selam dalam menjadi disiplin, bukan risiko.",
    requirements: [
      "Sertifikasi AIDA 3 atau setara",
      "Minimal 30 selam terdokumentasi",
      "Pengalaman selam dalam dikaji instruktur",
    ],
    skills: [
      "Freefall & passive descent lanjutan",
      "Mouthfill di kedalaman",
      "Manajemen squeeze & narcosis",
      "Briefing & navigasi lokasi dalam",
    ],
    certification: "Pelatihan spesialisasi sesuai standar selam dalam internasional.",
  },
  {
    id: "monofin",
    image: COURSE_PHOTOS.advanced[2],
    name: "Teknik Monofin",
    level: "Advanced",
    duration: "1 hari · 3 sesi",
    location: "Kolam & Lereng Dangkal",
    price: 1900000,
    imageAlt: "Freediver menggunakan monofin dengan teknik tubuh bergelombang yang sempurna",
    description:
      "Kuasai monofin — fin paling efisien dan elegan di dunia freediving. Sempurnakan teknik undulating body, dolphin kick, dan streamlining untuk kecepatan dan efisiensi maksimal.",
    requirements: [
      "Sertifikasi AIDA 2",
      "10+ selam terdokumentasi",
    ],
    skills: [
      "Teknik undulating body",
      "Dolphin kick & timing",
      "Streamlining & postur air",
      "Teknik start & turn di kolam",
    ],
    certification: "Mencakup dua modul spesialisasi sesuai standar internasional.",
  },
  {
    id: "rescue-buddy",
    image: COURSE_PHOTOS.advanced[3],
    name: "Rescue & Buddy Safety",
    level: "Advanced",
    duration: "2 hari · kolam + laut",
    location: "Kolam Latihan + Laut Terbuka",
    price: 3800000,
    imageAlt: "Latihan penyelamatan freediving di permukaan dengan dua orang",
    description:
      "Kursus paling penting dalam freediving. Pelajari cara mencegah masalah sebelum terjadi dan tangani situasi darurat seperti samba dan blackout dengan tenang dan terstruktur — sebagian besar freediver menyebutnya kursus favorit mereka.",
    requirements: [
      "Sertifikasi AIDA 2 atau setara",
      "Pelatihan pertolongan pertama dalam 24 bulan",
      "Minimal 20 selam terdokumentasi",
    ],
    skills: [
      "Mengenali LMC (samba) & blackout",
      "Prosedur penyelamatan permukaan",
      "Recovery breathing & positioning",
      "Prosedur darurat & exit",
    ],
    certification:
      "Mempersiapkanmu untuk sertifikasi rescue level yang diakui secara internasional.",
  },
];
