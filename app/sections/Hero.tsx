"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden min-h-[calc((100dvh-var(--header-h,64px))*2/3)]"
    >
      {/* background image */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/header.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/10" />
      </div>
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 z-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 z-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-28 sm:py-32 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-3xl rounded-2xl bg-white/60 p-6 shadow-lg ring-1 ring-black/10 backdrop-blur-sm sm:p-8"
        >
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-900">
            Gabinet Ortopedyczny
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Piotr Socha
          </h1>
          <p className="mt-3 text-lg/8 text-gray-600 sm:mt-5">
            Specjalista ortopedii i traumatologii narządu ruchu. Diagnostyka,
            leczenie zachowawcze i operacyjne, USG narządu ruchu oraz iniekcje
            dostawowe. <br />
            Kowary • Jelenia Góra • Kapacz • Karkonosze.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="tel:75718299"
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Zadzwoń i umów wizytę
            </motion.a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Dane kontaktowe
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


