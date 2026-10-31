"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircleQuestion, Plus } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { fadeUp, staggerParent, EASE_OUT } from "@/lib/motion";
import { Reveal } from "@/components/ocean/reveal";
import { toast } from "sonner";

function FaqItem({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${open
          ? "border-lagoon-300/30 bg-abyss-850/80"
          : "border-foam-50/10 bg-abyss-850/40 hover:border-foam-50/20"
        }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`font-display text-[15px] font-bold leading-snug transition-colors duration-300 sm:text-base ${open ? "text-lagoon-300" : "text-foam-50"
            }`}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${open
              ? "border-lagoon-300/50 bg-lagoon-400/15 text-lagoon-300"
              : "border-foam-50/15 text-foam-100/60"
            }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-foam-100/70">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const talkToTeam = () => {
    toast.success("Tim kami siap membantu — demo", {
      description:
        "Di website operasional, tombol ini akan membuka obrolan langsung dengan kru BAC. Untuk saat ini, kirimkan email ke hello@blueabyss. dan tim kami akan membalas dalam 1 hari.",
    });
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-abyss-900 py-24 sm:py-32"
      aria-label="Pertanyaan yang sering diajukan"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-abyss-950 via-abyss-900 to-abyss-950" />
      <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-ocean-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          {/* Sticky intro */}
          <Reveal className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.42em] text-lagoon-300">
                <span className="h-px w-10 bg-lagoon-300/70" />
                FAQ
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-tight text-foam-50 sm:text-5xl">
                Semua yang perlu
                <br />
                kamu <span className="text-gradient-lagoon">ketahui.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foam-100/70">
                Jawaban singkat dan jujur untuk pertanyaan yang paling sering
                kami dengar di atas kapal, di kolam renang, dan di setiap pesan
                masuk.
              </p>
              <button
                onClick={talkToTeam}
                className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-foam-50/12 bg-abyss-850/70 px-5 py-4 text-left transition-all duration-300 hover:border-lagoon-300/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lagoon-400/15 text-lagoon-300">
                  <MessageCircleQuestion className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foam-50">
                    Masih ada pertanyaan?
                  </span>
                  <span className="block text-xs text-foam-100/60">
                    Hubungi tim kami — kami membalas cepat.
                  </span>
                </span>
              </button>
            </div>
          </Reveal>

          {/* Accordion */}
          <motion.div
            variants={staggerParent(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-3.5 lg:col-span-3"
          >
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
