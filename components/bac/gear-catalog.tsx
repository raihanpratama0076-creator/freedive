"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Eye,
  Plus,
  Search,
  ShoppingCart,
  Star,
  X,
  Waves,
  Check,
  RotateCcw,
} from "lucide-react";
import {
  GEAR_CATEGORIES,
  GEAR_PRODUCTS,
  type GearCategory,
  type GearProduct,
} from "@/data/gear";
import { formatIDR } from "@/lib/format";
import { useCartStore } from "@/lib/cart-store";
import { toast } from "sonner";
import { PackageSelector } from "@/components/bac/package-selector";
import { Reveal } from "@/components/ocean/reveal";
import { useEscapeKey } from "@/lib/use-escape-key";

type LevelFilter = "All" | "Beginner" | "Advanced";
type CategoryFilter = "All" | GearCategory;

// Custom line-art icons matching the user's freediving screenshot
function CategoryIcon({
  category,
  className = "h-5 w-5",
}: {
  category: "All" | GearCategory;
  className?: string;
}) {
  switch (category) {
    case "Masker":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4c0 3-2 5-4.5 5.5-1 .2-1.8.8-2.2 1.7a1 1 0 0 1-1.6 0c-.4-.9-1.2-1.5-2.2-1.7C7 16 5 14 5 11V7z" />
          <path d="M7 8h3v3H7zM14 8h3v3h-3z" />
        </svg>
      );
    case "Snorkel":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M15 3v11a4 4 0 0 1-4 4H7a2 2 0 0 1-2-2v-1" />
          <path d="M15 3h2" />
        </svg>
      );
    case "Fins":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4 14l3-6 13-2-3 8-13 0z" />
          <path d="M7 8v6" />
        </svg>
      );
    case "Wetsuit":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M6 4l3-1h6l3 1 2 4-3 2v10H7V10L4 8l2-4z" />
          <path d="M12 3v17" />
        </svg>
      );
    case "Pemberat":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="3" y="8" width="18" height="8" rx="2" />
          <rect x="8" y="6" width="8" height="12" rx="1" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case "Keselamatan":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M19 4L6 17l-3 1 1-3L17 2l2 2z" />
          <path d="M14 5l4 4" />
        </svg>
      );
    case "Elektronik":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="6" />
          <path d="M9 3h6v3H9zM9 18h6v3H9z" />
          <path d="M12 9v3l2 2" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
  }
}

// Product detail modal dialog
function ProductDetailModal({
  product,
  onClose,
}: {
  product: GearProduct | null;
  onClose: () => void;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const setOpen = useCartStore((s) => s.setOpen);
  const canRent = product?.rentPricePerDay !== null;
  const [mode, setMode] = useState<"buy" | "rent">("buy");
  useEscapeKey(onClose, !!product);

  if (!product) return null;

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      mode,
      unitPrice: mode === "rent" ? (product.rentPricePerDay ?? 0) : product.buyPrice,
      quantity: 1,
    });
    toast.success(`${product.name} ditambahkan ke keranjang`, {
      description:
        mode === "rent"
          ? "Mode sewa — tentukan tanggalmu di keranjang."
          : "Mode beli — milikmu selamanya.",
      action: { label: "Lihat keranjang", onClick: () => setOpen(true) },
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-abyss-950/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.35, ease: [0.21, 0.65, 0.26, 0.99] }}
        className="fixed inset-x-4 top-1/2 z-[90] mx-auto w-[calc(100%-1.5rem)] max-w-[24rem] -translate-y-1/2 overflow-hidden rounded-2xl border border-foam-50/15 bg-abyss-900 shadow-[0_20px_60px_-20px_rgba(2,10,18,0.9)] max-h-[76vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={`Detail produk: ${product.name}`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 hidden h-10 w-10 place-items-center rounded-full bg-abyss-950/70 text-foam-50 backdrop-blur transition-colors hover:bg-abyss-950 sm:grid"
          aria-label="Tutup detail produk"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden bg-abyss-850 p-4">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="480px"
            className="object-contain p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss-900 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider ${
                product.level === "Beginner"
                  ? "bg-lagoon-400 text-abyss-950"
                  : "bg-coral-500 text-white"
              }`}
            >
              {product.level === "Beginner" ? "PEMULA" : "LANJUT"}
            </span>
            <span className="rounded-full bg-abyss-950/80 px-2 py-1 text-[10px] font-semibold text-foam-100/80 backdrop-blur">
              {product.category}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="font-display text-xl font-bold text-foam-50">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foam-100/75">
            {product.description}
          </p>

          {/* Pricing mode selection */}
          {canRent ? (
            <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl border border-foam-50/10 bg-abyss-850/80 p-1.5">
              <button
                onClick={() => setMode("buy")}
                aria-pressed={mode === "buy"}
                className={`rounded-xl px-3 py-2.5 text-left transition-all ${
                  mode === "buy"
                    ? "bg-abyss-950 ring-1 ring-lagoon-300/40"
                    : "hover:bg-abyss-950/50 text-foam-100/60"
                }`}
              >
                <span className="block text-[9px] font-bold tracking-wider text-foam-100/50">
                  BELI
                </span>
                <span className="mt-0.5 block font-display text-base font-bold text-lagoon-300">
                  {formatIDR(product.buyPrice)}
                </span>
              </button>
              <button
                onClick={() => setMode("rent")}
                aria-pressed={mode === "rent"}
                className={`rounded-xl px-3 py-2.5 text-left transition-all ${
                  mode === "rent"
                    ? "bg-abyss-950 ring-1 ring-lagoon-300/40"
                    : "hover:bg-abyss-950/50 text-foam-100/60"
                }`}
              >
                <span className="block text-[9px] font-bold tracking-wider text-foam-100/50">
                  SEWA
                </span>
                <span className="mt-0.5 block font-display text-base font-bold text-reef-300">
                  {formatIDR(product.rentPricePerDay ?? 0)}
                  <span className="text-[10px] text-foam-100/50 font-normal">/hari</span>
                </span>
              </button>
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-foam-50/10 bg-abyss-850/80 p-3 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-wider text-foam-100/60">
                HARGA
              </span>
              <span className="font-display text-lg font-bold text-lagoon-300">
                {formatIDR(product.buyPrice)}
              </span>
            </div>
          )}

          <div className="mt-3 flex items-center justify-between text-[10px] text-foam-100/50 px-1">
            <span>
              {product.rentStock > 0
                ? `${product.rentStock} unit sewa siap`
                : `${product.buyStock} unit stok`}
            </span>
            <span>Garansi resmi</span>
          </div>

          <div className="mt-4 space-y-2">
            <button
              onClick={handleAdd}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-lagoon-400 py-3 text-sm font-bold text-abyss-950 transition-all hover:bg-lagoon-300 hover:shadow-[0_0_22px_-6px_rgba(45,217,199,0.6)]"
            >
              <ShoppingCart className="h-4 w-4" />
              Tambah ke Keranjang
            </button>
            <button
              onClick={onClose}
              className="flex w-full items-center justify-center rounded-full border border-foam-50/10 bg-abyss-850 py-2.5 text-sm font-semibold text-foam-50 transition-all hover:bg-abyss-800"
            >
              Tutup
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function GearCatalog() {
  const [level, setLevel] = useState<LevelFilter>("All");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<GearProduct | null>(null);

  const addItem = useCartStore((s) => s.addItem);
  const setOpenCart = useCartStore((s) => s.setOpen);

  const quickAdd = (p: GearProduct) => {
    addItem({
      productId: p.id,
      name: p.name,
      image: p.image,
      category: p.category,
      mode: "buy",
      unitPrice: p.buyPrice,
      quantity: 1,
    });
    toast.success(`${p.name} ditambahkan ke keranjang`, {
      description: "Item ditambahkan — kamu bisa beralih ke sewa di keranjang.",
      action: { label: "Lihat keranjang", onClick: () => setOpenCart(true) },
    });
  };

  // Filter products
  const filtered = useMemo(() => {
    let list = [...GEAR_PRODUCTS];
    if (level !== "All") list = list.filter((p) => p.level === level);
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    return list;
  }, [level, category, search]);

  // Counts per category for the sidebar badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: GEAR_PRODUCTS.length };
    GEAR_CATEGORIES.forEach((cat) => {
      counts[cat] = GEAR_PRODUCTS.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  const resetFilters = () => {
    setLevel("All");
    setCategory("All");
    setSearch("");
  };

  return (
    <section
      id="gear"
      className="relative overflow-hidden bg-abyss-950 py-24 sm:py-32"
      aria-label="Katalog peralatan"
    >
      {/* Ambient background depth glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss-950 via-abyss-900/60 to-abyss-950" />
      <div className="pointer-events-none absolute -right-48 top-40 h-[480px] w-[480px] rounded-full bg-lagoon-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-40 h-[420px] w-[420px] rounded-full bg-ocean-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.42em] text-lagoon-300">
            <span className="h-px w-10 bg-lagoon-300/70" />
            KATALOG PERALATAN
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-foam-50 sm:text-5xl lg:text-6xl">
            Peralatan <span className="text-gradient-lagoon">freediving.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foam-100/70">
            Beli sekali atau sewa per hari — setiap peralatan dirawat secara
            profesional, disesuaikan oleh kru kami, dan siap untuk penyelaman
            berikutnya.
          </p>
        </Reveal>

        {/* ── Starter Packages Showcase ── */}
        <div className="mt-14 mb-16">
          <div className="mb-6 flex items-center justify-between border-b border-foam-50/10 pb-4">
            <h3 className="font-display text-xl font-bold tracking-wide text-foam-50">
              Paket Starter Pilihan
            </h3>
            <span className="text-xs text-lagoon-300/80">
              Beli atau sewa — siap pakai
            </span>
          </div>
          <PackageSelector />
        </div>

        {/* ── Main Layout: Sidebar (Left) + Product Cards (Right) ── */}
        <div className="mt-14 flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* ── Left Sidebar (Filters) ── */}
          <aside className="w-full shrink-0 lg:w-72 xl:w-80 space-y-4">
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foam-100/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari gear, misalnya fins"
                className="w-full rounded-2xl border border-foam-50/10 bg-abyss-900/90 py-3 pl-10 pr-4 text-sm text-foam-50 placeholder:text-foam-100/35 focus:border-lagoon-300/60 focus:bg-abyss-900 focus:outline-none transition-all shadow-inner"
                aria-label="Cari peralatan"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-foam-100/40 hover:text-foam-50"
                  aria-label="Hapus pencarian"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category List */}
            <nav
              className="overflow-hidden rounded-2xl border border-foam-50/10 bg-abyss-900/80 p-2 backdrop-blur space-y-1 shadow-lg shadow-abyss-950/50"
              aria-label="Kategori peralatan"
            >
              {/* Semua Option */}
              <button
                onClick={() => setCategory("All")}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  category === "All"
                    ? "bg-lagoon-400 text-abyss-950 shadow-md font-bold"
                    : "text-foam-100/70 hover:bg-foam-50/5 hover:text-foam-50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <CategoryIcon category="All" className="h-4 w-4" />
                  Semua
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    category === "All"
                      ? "bg-abyss-950/20 text-abyss-950"
                      : "bg-foam-50/10 text-foam-100/60"
                  }`}
                >
                  {categoryCounts["All"]}
                </span>
              </button>

              {/* Individual Categories */}
              {GEAR_CATEGORIES.map((cat) => {
                const isActive = category === cat;
                const count = categoryCounts[cat] ?? 0;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-lagoon-400 text-abyss-950 shadow-md font-bold"
                        : "text-foam-100/70 hover:bg-foam-50/5 hover:text-foam-50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <CategoryIcon category={cat} className="h-4 w-4" />
                      {cat}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        isActive
                          ? "bg-abyss-950/20 text-abyss-950"
                          : "bg-foam-50/10 text-foam-100/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Level Filter Segmented Control */}
            <div
              className="grid grid-cols-3 rounded-2xl border border-foam-50/10 bg-abyss-900/90 p-1.5 backdrop-blur"
              role="group"
              aria-label="Filter berdasarkan level"
            >
              {(
                [
                  { key: "All", label: "Semua" },
                  { key: "Beginner", label: "Pemula" },
                  { key: "Advanced", label: "Lanjut" },
                ] as const
              ).map((lvl) => {
                const active = level === lvl.key;
                return (
                  <button
                    key={lvl.key}
                    onClick={() => setLevel(lvl.key)}
                    className={`relative rounded-xl py-2 text-xs font-bold transition-all duration-200 ${
                      active
                        ? "bg-foam-50/15 text-foam-50 shadow-sm"
                        : "text-foam-100/50 hover:text-foam-100/80"
                    }`}
                  >
                    {lvl.label}
                  </button>
                );
              })}
            </div>

            {/* Reset Button if active filters */}
            {(level !== "All" || category !== "All" || search !== "") && (
              <button
                onClick={resetFilters}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-foam-50/10 bg-foam-50/5 py-2.5 text-xs font-semibold text-foam-100/60 hover:text-foam-50 hover:bg-foam-50/10 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Semua Filter
              </button>
            )}
          </aside>

          {/* ── Right Main Area (Product Grid) ── */}
          <main className="flex-1 min-w-0">
            {/* Top Counter Bar */}
            <div className="mb-5 flex items-center justify-between border-b border-foam-50/10 pb-3">
              <span className="text-sm font-semibold text-foam-100/70">
                {filtered.length} gear
              </span>
              <span className="text-xs text-foam-100/40">
                Klik kartu atau tombol mata untuk detail
              </span>
            </div>

            {/* Cards Grid — 2 columns matching the reference screenshot */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <AnimatePresence mode="popLayout">
                  {filtered.map((product) => (
                    <motion.article
                      layout
                      key={product.id}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                      onClick={() => setSelectedProduct(product)}
                      className="group cursor-pointer rounded-2xl border border-foam-50/10 bg-abyss-900/80 hover:border-lagoon-400/40 hover:bg-abyss-850 p-4 transition-all duration-300 flex items-center justify-between gap-3.5 shadow-sm hover:shadow-[0_10px_30px_-10px_rgba(2,10,18,0.8)]"
                    >
                      {/* Left: Product Image in rounded container */}
                      <div className="relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl bg-abyss-800/80 border border-lagoon-400/20 p-1.5 transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          sizes="80px"
                          className="object-contain p-1"
                        />
                      </div>

                      {/* Center: Title, Description, Level & Price */}
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate font-display text-base font-bold text-foam-50 group-hover:text-lagoon-300 transition-colors">
                          {product.name}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-foam-100/60">
                          {product.description}
                        </p>
                        <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                          {/* Level Dot Badge */}
                          <span className="flex items-center gap-1.5 font-semibold text-foam-100/80">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                product.level === "Beginner"
                                  ? "bg-lagoon-400 shadow-[0_0_8px_rgba(45,217,199,0.7)]"
                                  : "bg-coral-400 shadow-[0_0_8px_rgba(244,63,94,0.7)]"
                              }`}
                            />
                            {product.level === "Beginner" ? "Pemula" : "Lanjut"}
                          </span>

                          {/* Price Tag */}
                          <span className="font-semibold text-lagoon-300">
                            {formatIDR(product.buyPrice)}
                          </span>
                        </div>
                      </div>

                      {/* Right: Detail button & Quick Add (+) button */}
                      <div
                        className="flex items-center gap-1.5 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Detail Modal Trigger Button */}
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="grid h-9 w-9 place-items-center rounded-full border border-foam-50/15 text-foam-100/70 hover:border-lagoon-300 hover:text-lagoon-300 hover:bg-lagoon-400/10 transition-colors"
                          title="Lihat detail produk"
                          aria-label={`Lihat detail ${product.name}`}
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        {/* Circular (+) Quick Add Button */}
                        <button
                          onClick={() => quickAdd(product)}
                          className="grid h-9 w-9 place-items-center rounded-full border border-lagoon-400 text-lagoon-300 hover:bg-lagoon-400 hover:text-abyss-950 transition-all shadow-[0_0_12px_-3px_rgba(45,217,199,0.3)] hover:scale-105 active:scale-95"
                          title="Tambah ke keranjang"
                          aria-label={`Tambah ${product.name} ke keranjang`}
                        >
                          <Plus className="h-4 w-4" strokeWidth={2.2} />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              /* Empty state */
              <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-foam-50/10 bg-abyss-900/40 p-12 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-foam-50/5 text-foam-100/40">
                  <Waves className="h-6 w-6" />
                </span>
                <p className="font-display font-bold text-foam-50">
                  Tidak ada gear yang cocok
                </p>
                <p className="max-w-xs text-xs text-foam-100/50">
                  Coba gunakan kata kunci lain atau klik tombol reset di bawah.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-2 rounded-full bg-lagoon-400 px-5 py-2 text-xs font-bold text-abyss-950 hover:bg-lagoon-300 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
