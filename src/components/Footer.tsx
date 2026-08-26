import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-white">

      {/* ✅ Main Footer (dunkelgrün bleibt komplett erhalten) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <img
                src={`${import.meta.env.BASE_URL}images/wappen.png`}
                alt="Familienwappen Stall Ibs"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <div>
                <h4 className="font-heading text-lg font-bold">Stall Ibs</h4>
                <p className="text-forest-400 text-xs uppercase tracking-wider">
                  Seit 1890
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Familiärer Pferdehof in Helse, Dithmarschen. Pferdepension,
              Stallplätze und Reitmöglichkeiten mit Herz und Tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-bold text-white mb-4">
              Schnellzugriff
            </h5>
            <ul className="space-y-2.5">
              {[
                { href: "#start", label: "Start" },
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#angebote", label: "Angebote" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-warm-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-white mb-4">
              Leistungen
            </h5>
            <ul className="space-y-2.5">
              {[
                "Paddockboxen",
                "Reithalle",
                "Koppeln",
                "Futterversorgung",
              ].map((s) => (
                <li key={s} className="text-gray-400 text-sm leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading font-bold text-white mb-4">Kontakt</h5>
            <ul className="space-y-2.5 text-gray-400 text-sm leading-relaxed">
              <li>Stall Ibs</li>
              <li>25709 Helse</li>
              <li>Schleswig-Holstein</li>
            </ul>
          </div>

        </div>
      </div>

      {/* SEO Content Block */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-gray-500 text-xs leading-relaxed text-center max-w-4xl mx-auto">
            Stall Ibs – Ihr Pferdehof in Helse, Dithmarschen,
            Schleswig-Holstein. Familienbetrieb seit 1890 mit moderner
            Pferdehaltung und herzlicher Atmosphäre.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-gray-500 text-xs leading-relaxed">
              © {currentYear} Stall Ibs – Pferdehof in Helse, Dithmarschen.
              Alle Rechte vorbehalten.
            </p>
            <p className="flex items-center gap-1 text-gray-500 text-xs">
              Mit <Heart size={12} className="text-red-400 fill-red-400" /> für
              Pferde gemacht
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}