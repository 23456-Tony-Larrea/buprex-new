import Image from "next/image"

const ARTICLES = [
  {
    img: "/buprex/art-menstrual.png",
    title: "DOLOR MENSTRUAL: CAUSAS Y SOLUCIONES",
  },
  {
    img: "/buprex/art-migrana.png",
    title: "¿MIGRAÑA U OTRO TIPO DE DOLOR DE CABEZA?",
  },
  {
    img: "/buprex/art-fiebre.png",
    title: "FIEBRE EN NIÑOS: CUIDADOS Y PREVENCIÓN",
  },
]

export function Articles() {
  return (
    <section className="bg-navy py-12 sm:py-16">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
          Artículos
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <article key={i} className="flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={a.img || "/placeholder.svg"}
                  alt={a.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 flex items-center">
                <button
                  type="button"
                  className="rounded-full bg-brand-red px-6 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow transition hover:brightness-110"
                >
                  Leer más
                </button>
              </div>
              <h3 className="mt-4 text-sm font-extrabold uppercase leading-snug text-white sm:text-base">
                {a.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
