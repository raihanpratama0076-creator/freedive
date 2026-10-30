"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
  Waves,
} from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { toast } from "sonner";
import { Bubbles } from "@/components/ocean/bubbles";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      toast.error("Email tidak valid", {
        description: "Periksa kembali dan coba lagi.",
      });
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("done");
      setEmail("");
      toast.success("Berlangganan — demo", {
        description: "Tidak ada data yang dikirimkan. Di website operasional kamu akan menerima info jadwal dan trip bulanan.",
      });
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  return (
    <form onSubmit={submit} className="mt-4">
      {status === "done" ? (
        <p className="flex items-center gap-2 rounded-full border border-lagoon-300/30 bg-lagoon-400/10 px-4 py-3 text-sm font-semibold text-lagoon-200">
          <CheckCircle2 className="h-4.5 w-4.5" />
          Kamu sudah terdaftar. Sampai jumpa di permukaan.
        </p>
      ) : (
        <div className="flex overflow-hidden rounded-full border border-foam-50/15 bg-abyss-850/80 p-1.5 backdrop-blur focus-within:border-lagoon-300/50">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email kamu untuk info trip"
            aria-label="Email untuk newsletter"
            className="min-w-0 flex-1 bg-transparent px-4 text-sm text-foam-50 placeholder:text-foam-100/35 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lagoon-400 text-abyss-950 transition-all hover:bg-lagoon-300 disabled:opacity-60"
            aria-label="Berlangganan newsletter"
          >
            {status === "sending" ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-abyss-950/30 border-t-abyss-950" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
    </form>
  );
}

const SOCIAL_ICONS: Record<string, typeof Instagram> = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
  music: Send,
};

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-abyss-950">
      {/* wave transition from the section above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 text-abyss-900" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-12 w-[calc(100%+2px)] -translate-x-px fill-abyss-900 sm:h-16"
        >
          <path d="M0,48 C240,88 480,8 720,32 C960,56 1200,88 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <Bubbles count={8} seed={99} className="opacity-40" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-ocean-600/15 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-lagoon-300/40 bg-lagoon-400/10 text-lagoon-300">
                <Waves className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="font-display leading-none">
                <span className="block text-base font-bold tracking-[0.22em] text-foam-50">
                  BLUE ABYSS
                </span>
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.5em] text-lagoon-300/90">
                  FREEDIVING · BAC
                </span>
              </span>
            </div>
            <p className="mt-5 font-display text-xl font-bold leading-snug text-foam-50">
              Selami batasmu.
              <br />
              <span className="text-lagoon-300">Jaga lautnya.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foam-100/60">
              Komunitas freediving untuk pemula dan penyelam berpengalaman —
              kursus, peralatan, dan ekspedisi yang dibangun di atas keselamatan
              dan konservasi.
            </p>
            <div className="mt-6">
              <p className="text-[10px] font-bold tracking-[0.28em] text-foam-100/45">
                NEWSLETTER
              </p>
              <Newsletter />
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <nav aria-label="Jelajahi">
              <p className="text-[10px] font-bold tracking-[0.28em] text-lagoon-300">
                JELAJAHI
              </p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-foam-100/65 transition-colors hover:text-lagoon-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Kursus dan peralatan">
              <p className="text-[10px] font-bold tracking-[0.28em] text-lagoon-300">
                BELAJAR & PERALATAN
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: "Pengenalan Freediving", href: "#learn" },
                  { label: "AIDA 2 — Freediver", href: "#learn" },
                  { label: "Kursus Lanjutan", href: "#learn" },
                  { label: "Paket Peralatan", href: "#gear" },
                  { label: "Sewa Peralatan", href: "#gear" },
                  { label: "Panduan Keselamatan", href: "#safety" },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-foam-100/65 transition-colors hover:text-lagoon-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Kontak">
              <p className="text-[10px] font-bold tracking-[0.28em] text-lagoon-300">
                KONTAK
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foam-100/65">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-300/70" />
                  <span>{CONTACT.address}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-2.5 transition-colors hover:text-lagoon-300"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-300/70" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-2.5 transition-colors hover:text-lagoon-300"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-300/70" />
                    {CONTACT.phone}
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                {[
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                  { icon: Facebook, label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toast(`${s.label} — link demo`, {
                        description: "Profil media sosial adalah contoh dalam demo ini.",
                      });
                    }}
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-foam-50/12 text-foam-100/60 transition-all hover:border-lagoon-300/50 hover:text-lagoon-300"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Dive in card */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-lagoon-300/20 bg-gradient-to-b from-abyss-850 to-abyss-900 p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lagoon-400/10 blur-2xl" />
              <p className="font-display text-lg font-bold text-foam-50">
                Siap menyelam dengan satu napas?
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-foam-100/60">
                Kursus pertamamu dimulai dari satu percakapan. Tanpa tekanan,
                tanpa jargon — hanya laut yang menanti.
              </p>
              <a
                href="#learn"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-lagoon-400 px-5 py-2.5 text-xs font-bold text-abyss-950 transition-all hover:bg-lagoon-300"
              >
                Mulai Freediving-mu
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-foam-50/8 pt-7 sm:flex-row">
          <p className="text-xs text-foam-100/45">
            © {new Date().getFullYear()} Blue Abyss Club. Website demo — kursus,
            harga, acara, dan stok adalah data contoh.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toast("Kebijakan Privasi — contoh", { description: "Halaman demo." });
              }}
              className="text-foam-100/45 transition-colors hover:text-lagoon-300"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toast("Syarat & Ketentuan — contoh", { description: "Halaman demo." });
              }}
              className="text-foam-100/45 transition-colors hover:text-lagoon-300"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
