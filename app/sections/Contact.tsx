"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Kontakt i rejestracja
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Dane kontaktowe
            </h3>
            <dl className="mt-4 space-y-3 text-gray-700">
              <div>
                <dt className="text-sm">Telefon (rejestracja)</dt>
                <dd className="text-base font-semibold">
                  <a className="hover:underline" href="tel:75718288">
                    757 18 288
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm">Adres</dt>
                <dd className="text-base font-semibold">
                  CITO‑MED Sp. z o.o., 1 Maja 2A, 58‑530 Kowary
                </dd>
              </div>
              <div>
                <dt className="text-sm">Region</dt>
                <dd className="text-base">Kowary • Jelenia Góra • Karkonosze</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
          >
            <iframe
              title="Mapa dojazdu"
              src="https://www.google.com/maps?q=1%20Maja%202A%2C%2058-530%20Kowary&output=embed"
              className="h-[300px] w-full sm:h-[420px]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


