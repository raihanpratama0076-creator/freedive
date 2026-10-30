import { PHOTOS } from "@/data/images";

export interface SafetyPillar {
  id: string;
  title: string;
  description: string;
}

export const SAFETY_PILLARS: SafetyPillar[] = [
  {
    id: "never-alone",
    title: "Jangan Pernah Selam Sendirian",
    description:
      "Ini adalah aturan nomor satu freediving. Blackout bisa terjadi tanpa peringatan — buddy yang siap di permukaan adalah satu-satunya perlindunganmu.",
  },
  {
    id: "buddy",
    title: "Sistem Buddy",
    description:
      "Kamu dan buddy sepakat tentang sinyal, kedalaman target, dan prosedur darurat sebelum setiap selam. Satu selam, satu buddy — bergantian mengawasi.",
  },
  {
    id: "equalization",
    title: "Equalisasi & Postur",
    description:
      "Equalisasi lebih awal dan sering saat descent. Postur streamline menjaga efisiensi dan keselamatan — jangan pernah memaksakan equalisasi.",
  },
  {
    id: "recovery",
    title: "Recovery Breathing",
    description:
      "Setelah setiap selam, lakukan setidaknya tiga recovery breath penuh sebelum menyelam kembali. Terburu-buru ke selam berikutnya adalah penyebab utama insiden.",
  },
  {
    id: "surface-interval",
    title: "Surface Interval",
    description:
      "Istirahat permukaan minimal dua kali durasi selam terakhirmu. CO2 harus turun ke level aman sebelum selam berikutnya dimulai.",
  },
  {
    id: "environment",
    title: "Tanggung Jawab Lingkungan",
    description:
      "Buoyancy sempurna melindungi terumbu karang. Tidak ada yang disentuh, diberi makan, atau dikejar. Kami meninggalkan setiap lokasi selam lebih bersih dari sebelumnya.",
  },
];

export interface ChecklistItem {
  id: string;
  label: string;
  phase: "gear" | "body" | "plan";
}

export const PRE_DIVE_CHECKLIST: ChecklistItem[] = [
  { id: "c1", label: "Masker, fins & snorkel sudah diperiksa dan terpasang", phase: "gear" },
  { id: "c2", label: "Weight belt terpasang benar & quick-release mudah dijangkau", phase: "gear" },
  { id: "c3", label: "Wetsuit tidak ada kerusakan, ritsleting berfungsi", phase: "gear" },
  { id: "c4", label: "Safety buoy & tali selam sudah terpasang", phase: "gear" },
  { id: "c5", label: "Lanyard keselamatan terkunci dengan benar", phase: "gear" },
  { id: "c6", label: "Istirahat cukup, terhidrasi, tidak konsumsi alkohol", phase: "body" },
  { id: "c7", label: "Equalisasi terasa normal, tidak ada nyeri", phase: "body" },
  { id: "c8", label: "Tidak ada perubahan kesehatan atau obat-obatan hari ini", phase: "body" },
  { id: "c9", label: "Kedalaman target & waktu selam disepakati bersama buddy", phase: "plan" },
  { id: "c10", label: "Sinyal tangan sudah direview", phase: "plan" },
  { id: "c11", label: "Prosedur surface interval disepakati", phase: "plan" },
  { id: "c12", label: "Prosedur darurat & recovery disetujui buddy", phase: "plan" },
];

export const SAFETY_STEPS = [
  {
    step: "01",
    title: "Periksa Peralatan",
    description:
      "Inspeksi lengkap bersama buddy — masker, fins, weight belt, buoy, lanyard. Dilakukan setiap selam tanpa pengecualian.",
    image: PHOTOS.buddy,
  },
  {
    step: "02",
    title: "Rencanakan Selammu",
    description:
      "Kedalaman target, durasi, dan prosedur darurat disepakati di permukaan. Tidak ada kejutan di bawah air.",
    image: PHOTOS.surface,
  },
  {
    step: "03",
    title: "Jaga Buddy di Permukaan",
    description:
      "Satu menyelam, satu mengawasi. Buddy siap di permukaan dengan mata di penyelam — siap beraksi dalam hitungan detik.",
    image: PHOTOS.reef1,
  },
  {
    step: "04",
    title: "Recovery Breathing",
    description:
      "Tiga napas pemulihan penuh setelah setiap selam. Tunggu surface interval dua kali durasi selam terakhir sebelum menyelam lagi.",
    image: PHOTOS.turtle,
  },
];

export const SAFETY_NOTICE =
  "Freediving memiliki risiko nyata termasuk blackout yang bisa terjadi tanpa peringatan. Panduan ini adalah ikhtisar, bukan pengganti pelatihan yang tepat — selalu belajar dan berlatih bersama instruktur kompeten dan ikuti standar pelatihan yang diakui.";
