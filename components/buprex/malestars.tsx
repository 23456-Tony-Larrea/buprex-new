import Image from "next/image"

const KIDS = [
  {
    product: "/buprex/prod-forte.png",
    mascot: "/buprex/mascot-orange.png",
    name: "BUPREX FORTE",
    sub: "(SUSPENSIÓN)",
    text: "Contiene 200 mg de ibuprofeno por cada 5 ml de suspensión.",
  },
  {
    product: "/buprex/prod-forte.png",
    mascot: "/buprex/mascot-blue.png",
    name: "BUPREX",
    sub: "(SUSPENSIÓN PEDIÁTRICA)",
    text: "Contiene 100 mg de ibuprofeno por cada 5 ml de suspensión.",
  },
  {
    product: "/buprex/prod-gotas.png",
    mascot: "/buprex/mascot-red.png",
    name: "BUPREX",
    sub: "(GOTAS SUSPENSIÓN)",
    text: "Contiene 40 mg de ibuprofeno por 1 ml.",
  },
]

export function Malestars() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {/* starry dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 12% 18%, #fff, transparent), radial-gradient(1.5px 1.5px at 28% 62%, #fff, transparent), radial-gradient(1.5px 1.5px at 46% 32%, #fff, transparent), radial-gradient(1.5px 1.5px at 68% 74%, #fff, transparent), radial-gradient(1.5px 1.5px at 82% 22%, #fff, transparent), radial-gradient(1.5px 1.5px at 92% 58%, #fff, transparent), radial-gradient(1.5px 1.5px at 58% 88%, #fff, transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1100px] px-4 py-12 sm:px-6 sm:py-16">
        {/* Header with logo + mascots */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-end justify-center gap-2">
            <div className="relative hidden h-24 w-24 sm:block">
              <Image src="/buprex/mascot-blue.png" alt="" fill className="object-contain" />
            </div>
            <div className="relative h-16 w-64 sm:h-24 sm:w-96">
              <Image src="/buprex/malestars-logo.png" alt="MALESTARS" fill className="object-contain" priority={false} />
            </div>
            <div className="relative hidden h-24 w-24 sm:block">
              <Image src="/buprex/mascot-orange.png" alt="" fill className="object-contain" />
            </div>
          </div>
          <p className="mt-4 max-w-xl text-pretty text-sm text-white/85 sm:text-base">
            Si los <span className="font-extrabold text-brand-yellow">MALESTARS</span> hacen su aparición,{" "}
            <span className="font-bold">BUPREX®</span> los calma con su <span className="font-bold">TRIPLE ACCIÓN</span>.
          </p>
        </div>

        {/* Product rows */}
        <div className="mt-10 space-y-5">
          {KIDS.map((k, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-3xl bg-white/95 p-4 text-navy shadow-lg sm:flex-row sm:gap-6 sm:p-6"
            >
              <div className="relative h-28 w-32 shrink-0 sm:h-32 sm:w-40">
                <Image src={k.product || "/placeholder.svg"} alt={`${k.name} ${k.sub}`} fill className="object-contain" />
              </div>
              <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                <Image src={k.mascot || "/placeholder.svg"} alt="" fill className="object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl font-extrabold text-brand-blue sm:text-2xl">
                  {k.name}
                  <sup className="text-xs">®</sup> <span className="text-navy">{k.sub}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">{k.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[11px] leading-relaxed text-white/60">
          Posee propiedades analgésicas y antipiréticas, efectivo en caso de dolor de tipo periférico, injurias
          traumáticas de tejidos blandos, dismenorrea primaria y dolor postquirúrgico en intervenciones menores. Vía
          oral. En niños es de 10 mg/kg/dosis, se puede repetir hasta 3 o 4 veces al día. No administrar por más de 2–3
          días sin indicación médica. Si los síntomas persisten, consulte a su médico. REGISTRO SANITARIO: BUPREX®
          suspensión pediátrica N°: 01295-MAC-1-05-11, BUPREX® FORTE N°: 02490-MAC-03-03, BUPREX® Gotas N°:
          02491-MAC-03-03.
        </p>
      </div>
    </section>
  )
}
