"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const FAQS = [
  {
    q: "¿Para qué tipo de dolores sirve el ibuprofeno?",
    a: "El ibuprofeno ayuda a aliviar dolores leves y moderados, reducir la inflamación y bajar la fiebre. Es útil para dolor de cabeza, muscular, dental, menstrual y molestias por resfriados o lesiones.",
  },
  {
    q: "¿Se puede tomar ibuprofeno en el embarazo?",
    a: "No se recomienda tomar ibuprofeno durante el embarazo sin indicación médica. A partir de las 20 semanas de gestación puede causar problemas en el bebé y reducir el líquido amniótico.",
  },
  {
    q: "¿Me puse la vacuna de la gripe, puedo tomar ibuprofeno?",
    a: "Sí. Si presenta dolor, fiebre o molestias después de vacunarse, puede tomar ibuprofeno siguiendo las indicaciones de uso. No se recomienda tomarlo antes de la vacuna para prevenir síntomas.",
  },
  {
    q: "¿Cada cuántas horas puedo tomar ibuprofeno 400 mg?",
    a: "La dosis habitual para adultos es 400 mg cada 6 a 8 horas, según necesidad. No exceda la dosis recomendada ni lo use por varios días sin consultar a un profesional de la salud.",
  },
  {
    q: "¿Cada cuánto puedo darle ibuprofeno pediátrico a un niño?",
    a: "La dosis depende de la edad y el peso del niño. Generalmente se administra cada 6 a 8 horas y no más de 3 dosis al día, salvo indicación médica.",
  },
  {
    q: "¿La cápsula blanda tiene el mismo efecto que el comprimido?",
    a: "Sí. Ambos contienen el mismo principio activo y ofrecen el mismo efecto terapéutico. La diferencia principal es que la cápsula blanda puede absorberse un poco más rápido.",
  },
  {
    q: "¿A partir de qué temperatura se considera fiebre?",
    a: "Generalmente se considera fiebre cuando la temperatura corporal es igual o superior a 38 °C.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-navy pb-14 pt-4 sm:pb-20">
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* Left column */}
        <div>
          <h2 className="text-3xl font-extrabold uppercase leading-none text-white sm:text-4xl">
            Preguntas
            <br />
            frecuentes
          </h2>

          <div className="mt-8 rounded-2xl bg-white/5 p-5 text-white/85">
            <p className="text-sm leading-relaxed">
              Si considera que uno de nuestros productos ha generado un evento adverso, repórtelo a través del
              Formulario de Farmacovigilancia.
            </p>
            <p className="mt-2 text-sm font-semibold text-white">Reportar evento adverso – Laboratorios LIFE</p>
            <button
              type="button"
              className="mt-4 w-full rounded-full bg-brand-red px-6 py-2.5 text-sm font-extrabold uppercase tracking-wide text-white shadow transition hover:brightness-110"
            >
              Llenar formulario
            </button>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="overflow-hidden rounded-2xl bg-brand-sky">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-extrabold text-navy sm:text-base">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-red text-white transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}

          <p className="pt-2 text-[11px] leading-relaxed text-white/50">
            Referencias: 1. FDA (Administración de Alimentos y Medicamentos de EE. UU.). 2. CDC y MD Anderson Cancer
            Center. 3. NHS y NICE (Reino Unido). 4. NHS. 5. Información farmacológica de ibuprofeno (NHS y prospectos
            oficiales). 6. FDA – Programa de farmacovigilancia MedWatch. 7. NHS.
          </p>
        </div>
      </div>
    </section>
  )
}
