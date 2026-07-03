import Image from "next/image"

const FEATURES = [
  {
    icon: "/buprex/icon-heart.png",
    title: "ALIVIO RÁPIDO",
    text: "Cápsula blanda, rapidez de acción",
  },
  {
    icon: "/buprex/icon-shield.png",
    title: "PIONEROS",
    text: "32 años tratando el dolor, fiebre e inflamación",
  },
]

const PAINS = [
  { icon: "/buprex/pain-menstrual.png", label: "CÓLICOS MENSTRUALES" },
  { icon: "/buprex/pain-cabeza.png", label: "DOLOR DE CABEZA" },
  { icon: "/buprex/pain-fiebre.png", label: "FIEBRE" },
  { icon: "/buprex/pain-garganta.png", label: "DOLOR DE GARGANTA" },
  { icon: "/buprex/pain-dental.png", label: "DOLOR DENTAL" },
  { icon: "/buprex/pain-muscular.png", label: "DOLOR MUSCULAR" },
]

export function ReliefFeatures() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 sm:py-12">
      {/* Feature cards */}
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-2xl border-2 border-brand-blue/40 bg-navy px-4 py-3 text-white shadow-md"
          >
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <Image src={f.icon || "/placeholder.svg"} alt="" fill className="object-contain" />
            </div>
            <div>
              <p className="text-sm font-extrabold uppercase text-brand-yellow sm:text-base">{f.title}</p>
              <p className="text-xs leading-snug text-white/85 sm:text-sm">{f.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Alivia el dolor de */}
      <div className="mt-6 rounded-3xl border-2 border-brand-yellow bg-cream px-4 py-6 sm:mt-8 sm:px-8">
        <h2 className="text-center text-base font-extrabold uppercase tracking-wide text-navy sm:text-xl">
          Alivia el dolor de
        </h2>
        <ul className="mt-5 grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-6">
          {PAINS.map((p) => (
            <li key={p.label} className="flex flex-col items-center gap-2 text-center">
              <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                <Image src={p.icon || "/placeholder.svg"} alt={p.label} fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold uppercase leading-tight text-navy sm:text-xs">
                {p.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
