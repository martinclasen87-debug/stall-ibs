import { TreePine, Warehouse, Fence, Wheat } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: Fence,
    title: "Paddockboxen",
    description:
      "Befestigte Paddocks für frische Luft – bei fast jedem Wetter.",
    features: ["Befestigter Boden", "Ganzjährig nutzbar", "Sicherer Zaun"],
  },
  {
    icon: Warehouse,
    title: "Reithalle",
    description:
      "Unsere überdachte Reithalle ermöglicht wetterunabhängiges Training.",
    features: ["Wetterunabhängig", "Optimale Beleuchtung"],
  },
  {
    icon: TreePine,
    title: "Koppeln",
    description:
      "Weitläufige, gepflegte Weideflächen für artgerechte Haltung mit täglichem Freigang in der Gruppe.",
    features: ["Großflächig", "Gepflegtes Grünland", "Herdenauslauf"],
  },
  {
    icon: Wheat,
    title: "Futterversorgung",
    description:
      "Hochwertige Futterversorgung mit regionalem Heu und Stroh – individuell abgestimmt auf Ihr Pferd.",
    features: [
      "Regionales Heu",
      "Individuell abgestimmte Fütterung",
      "Qualitätskontrolle",
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="angebote" className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-forest-600 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Unser Angebot
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-6">
            Alles für Ihr <span className="text-earth-500">Pferd</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-earth-400 mx-auto rounded-full mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Auf unserem Hof bieten wir verschiedene Haltungs­möglichkeiten für
            Ihr Pferd an – von Paddockboxen über weitläufige Koppeln bis hin zur
            modernen Reithalle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`group bg-warm-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-transparent hover:border-forest-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-forest-100 group-hover:bg-forest-600 flex items-center justify-center mb-6 mx-auto transition-colors duration-300">
                <service.icon
                  size={28}
                  className="text-forest-600 group-hover:text-white transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl font-bold text-forest-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mt-2 mx-auto max-w-[220px] text-left">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-forest-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-earth-400 shrink-0 mt-[7px]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 sm:mt-16">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-forest-600 hover:bg-forest-700 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-forest-600/20"
          >
            Jetzt anfragen
          </a>

          <p className="text-gray-400 text-sm mt-3">
            Wir beraten Sie gerne persönlich zu freien Plätzen
          </p>
        </div>
      </div>
    </section>
  );
}
