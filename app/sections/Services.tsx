"use client";

import { motion } from "framer-motion";

const services: Array<{ title: string; description: string }> = [
  {
    title: "Badania i diagnostyka",
    description: "Schorzeń narządu ruchu, w tym USG narządu ruchu.",
  },
  {
    title: "Urazy i przeciążenia sportowe",
    description: "Kompleksowa opieka nad osobami aktywnymi.",
  },
  {
    title: "Zmiany zwyrodnieniowe",
    description: "Indywidualnie dobrane metody leczenia.",
  },
  {
    title: "Iniekcje dostawowe",
    description: "Nowoczesne terapie oraz blokady sterydowe.",
  },
  {
    title: "Kwalifikacje do leczenia",
    description:
      "Przygotowanie do leczenia operacyjnego i leczenia zachowawczego.",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Zakres usług
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


