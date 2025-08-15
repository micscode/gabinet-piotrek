"use client";

import { motion } from "framer-motion";

const prices = [
  {
    name: "Konsultacja + badanie",
    price: "300 zł",
    notes: "Wizyta podstawowa.",
  },
  {
    name: "Konsultacja + badanie + USG",
    price: "350 zł",
    notes: "Rozszerzona diagnostyka w gabinecie.",
  },
  {
    name: "Iniekcje dostawowe (2 wizyty)",
    price: "od 700 zł",
    notes: "Cena zależy od preparatu i zakresu leczenia.",
  },
  {
    name: "Blokady przeciwbólowe",
    price: "400 zł",
    notes: "Szczegóły po kwalifikacji lekarskiej.",
  },
];

export default function Pricing() {
  return (
    <section id="cennik" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Cennik
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {prices.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.notes}
                </p>
              </div>
              <div className="ml-4 shrink-0 text-right text-xl font-bold text-gray-900">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-6 text-sm text-gray-600"
        >
          Płatność gotówką lub kartą. Ceny mają charakter orientacyjny i mogą
          ulec zmianie; ostateczny koszt zależy od zakresu świadczenia.
        </motion.p>
      </div>
    </section>
  );
}


