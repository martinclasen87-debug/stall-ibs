import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { id: "start", label: "Start" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "angebote", label: "Angebote" },
  { id: "impressionen", label: "Impressionen" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const base = import.meta.env.BASE_URL;

  const getAnchorLink = (id: string) => {
    if (isHome) return `#${id}`;
    return `${base}#${id}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 group min-w-0"
          >
            <img
              src={`${base}images/wappen.png`}
              alt="Familienwappen Stall Ibs"
              className="h-12 sm:h-16 w-auto object-contain"
            />

            <div>
              <h1
                className={`font-heading text-lg sm:text-xl font-bold transition-colors ${
                  isScrolled || !isHome ? "text-forest-800" : "text-white"
                }`}
              >
                Stall Ibs
              </h1>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
                  isScrolled || !isHome ? "text-earth-600" : "text-warm-200"
                }`}
              >
                Pferdehof seit 1980
              </p>
            </div>
          </Link>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={getAnchorLink(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled || !isHome
                    ? "text-gray-700 hover:text-forest-700 hover:bg-forest-50"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* ✅ Impressum */}
            <Link
              to="/impressum"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled || !isHome
                  ? "text-gray-700 hover:text-forest-700 hover:bg-forest-50"
                  : "text-white/90 hover:text-white hover:bg-white/15"
              }`}
            >
              Impressum
            </Link>
          </nav>

          {/* ✅ Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHome
                ? "text-forest-800 hover:bg-forest-50"
                : "text-white hover:bg-white/15"
            }`}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen
              ? "max-h-[520px] opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 space-y-1 border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={getAnchorLink(link.id)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-forest-50 hover:text-forest-700 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/impressum"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-gray-700 font-medium hover:bg-forest-50 hover:text-forest-700 transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
