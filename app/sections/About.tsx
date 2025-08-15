"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="o-mnie" className="min-h-[calc((100dvh-var(--header-h,64px))/3)] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          O mnie
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 space-y-4 text-base/7 text-gray-700"
        >
          <p>
            Lek. <strong>Piotr Socha</strong> — specjalista ortopedii i
            traumatologii narządu ruchu.
          </p>
          <p>
            Absolwent Wydziału Wojskowo-Lekarskiego Uniwersytetu Medycznego w Łodzi.
            Doświadczenie zdobywał w Dolnośląskim Centrum Rehabilitacji i
            Ortopedii w Kamiennej Górze, gdzie nadal pełni obowiązki starszego asystenta.
          </p>
          <p>
            Regularnie poszerza swoje umiejętności na konferencjach i kursach.
            W kręgu jego szczególnych zainteresowań znajduje się chirurgia
            maloinwazyjna stopy oraz techniki artroskopowe(kolano, bark, staw skokowy).
          </p>
          <p>
            Zajmuję się diagnostyką i leczeniem operacyjnym oraz zachowawczym
            schorzeń narządu ruchu, ze szczególnym uwzględnieniem urazów
            sportowych i zmian przeciążeniowych.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


