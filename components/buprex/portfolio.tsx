import Image from "next/image"

const ITEMS = [
  { logo: "/buprex/logo-flashmini.png", caption: "Ibuprofeno 200 mg / 5 ml" },
  { name: "BUPREX FORTE", caption: "Ibuprofeno 200 mg / 5 ml" },
  { logo: "/buprex/logo-gotas.png", caption: "Ibuprofeno 40 mg / 1 ml" },
  { name: "BUPREX", caption: "Ibuprofeno 100 mg / 5 ml" },
]

export function Portfolio() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-6 sm:px-6">
      <h2 className="mb-5 text-center text-2xl font-extrabold uppercase tracking-wide text-navy sm:text-3xl">
        Portafolio
      </h2>

      <div className="rounded-3xl bg-navy px-6 py-8 shadow-lg sm:px-10 sm:py-10">
        <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-2 text-center">
              {item.logo ? (
                <div className="relative h-10 w-full max-w-[140px] sm:h-12">
                  <Image src={item.logo || "/placeholder.svg"} alt={item.caption} fill className="object-contain" />
                </div>
              ) : (
                <span className="text-xl font-extrabold text-brand-yellow sm:text-2xl">
                  {item.name}
                  <sup className="text-[0.6em]">®</sup>
                </span>
              )}
              <span className="text-[10px] font-medium text-white/70 sm:text-xs">{item.caption}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-full bg-brand-red px-10 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition hover:brightness-110"
          >
            Ver más
          </button>
        </div>
      </div>
    </section>
  )
}
