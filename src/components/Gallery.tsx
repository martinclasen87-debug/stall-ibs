import { useScrollAnimation } from "../hooks/useScrollAnimation";

const base = import.meta.env.BASE_URL;

const images = [
  {
    src: `${base}images/4.png`,
    alt: "Hof von Stall Ibs",
    caption: "Hof",
  },
  {
    src: `${base}images/6.png`,
    alt: "Paddocks von Stall Ibs",
    caption: "Paddocks",
  },
  {
    src: `${base}images/7.png`,
    alt: "Strohlager von Stall Ibs",
    caption: "Strohlager",
  },
  {
    src: `${base}images/8.png`,
    alt: "Reithalle von Stall Ibs",
    caption: "Reithalle",
  },
  {
    src: `${base}images/9.png`,
    alt: "Neue Halle von Stall Ibs",
    caption: "Offenstall",
  },
  {
    src: `${base}images/10.png`,
    alt: "Koppel von Stall Ibs",
    caption: "Koppel",
  },
  {
    src: `${base}images/11.png`,
    alt: "Alte Halle von Stall Ibs",
    caption: "Alte Halle",
  },
  {
    src: `${base}images/13.png`,
    alt: "Impression von Stall Ibs",
    caption: "innen",
  },
  {
    src: `${base}images/14.png`,
    alt: "Futterkammer von Stall Ibs",
    caption: "Futterkammer",
  },
  {
    src: `${base}images/15.png`,
    alt: "Putzplatz von Stall Ibs",
    caption: "Putzplatz",
  },
  {
    src: `${base}images/16.png`,
    alt: "Waschbox von Stall Ibs",
    caption: "Waschbox",
  },
  {
    src: `${base}images/17.png`,
    alt: "Impression von Stall Ibs",
    caption: "Stallgasse",
  },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="impressionen"
      className="py-16 sm:py-24 bg-gradient-to-b from-forest-900 to-forest-950"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-warm-300 font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-3">
            Galerie
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6">
            Einblicke auf unseren <span className="text-warm-300">Hof</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-warm-300 to-earth-400 mx-auto rounded-full mb-5 sm:mb-6" />
          <p className="text-white/75 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Erleben Sie die Atmosphäre von Stall Ibs – unser Hof, unsere Pferde
            und unsere Leidenschaft.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {images.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl shadow-black/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[220px] sm:h-[260px] xl:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {img.caption && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white font-heading text-base sm:text-lg font-semibold">
                      {img.caption}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
