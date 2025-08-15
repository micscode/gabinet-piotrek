import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
        © {new Date().getFullYear()} Gabinet Ortopedyczny Piotr Socha
      </footer>
    </div>
  );
}
