"use client"

import Image from "next/image"
import { useState } from "react"

type Product = {
  img: string
  strength: string
  paragraphs: { heading?: string; body: string }[]
  registro: string
}

const PRODUCTS: Product[] = [
  {
    img: "/buprex/flash-200.png",
    strength: "200mg",
    paragraphs: [
      {
        body: "BUPREX FLASH MINI 200 MG DE IBUPROFENO EN CÁPSULAS BLANDAS. Indicado para el alivio rápido de dolor y fiebre asociados a procesos inflamatorios o infecciosos. Usos frecuentes: cefalea, dismenorrea, dolor musculoesquelético postraumático o postquirúrgico, dolor dental (incluyendo extracción), fiebre de cualquier origen excepto la causada por dengue.",
      },
      {
        heading: "DOSIS Y ADMINISTRACIÓN.",
        body: "Adultos y niños desde 15 años: 200–400 mg cada 6 horas según necesidad. Niños desde 12 años o ≥20 kg: pueden usar cápsulas de 200 mg si pueden deglutir sólidos. La dosis puede repetirse cada 6 horas.",
      },
      {
        heading: "CONTRAINDICACIONES:",
        body: "No debe utilizarse en pacientes con antecedentes de hipersensibilidad al ibuprofeno o a otros agentes antiinflamatorios no esteroidales.",
      },
      {
        heading: "ADVERTENCIAS Y PRECAUCIONES:",
        body: "Riesgos AINE: puede causar úlceras pépticas, sangrado gastrointestinal, descompensación de hipertensión, insuficiencia cardíaca, enfermedad coronaria o renal. Embarazo: Categoría C. Contraindicado en el último trimestre. Lactancia: no recomendado. No administrar por más de 2–3 días sin indicación médica. Si los síntomas persisten, consultar al médico.",
      },
    ],
    registro: "REGISTRO SANITARIO: BUPREX FLASH mini 200 mg cápsulas blandas, Reg. San: 9707-MEE-0125",
  },
  {
    img: "/buprex/flash-400.png",
    strength: "400mg",
    paragraphs: [
      {
        body: "BUPREX FLASH MINI 400 MG DE IBUPROFENO EN CÁPSULAS BLANDAS. Indicado para el alivio rápido de dolor y fiebre asociados a procesos inflamatorios o infecciosos. Usos frecuentes: cefalea, dismenorrea, dolor musculoesquelético postraumático o postquirúrgico, dolor dental (incluyendo extracción), fiebre de cualquier origen excepto la causada por dengue.",
      },
      {
        heading: "DOSIS Y ADMINISTRACIÓN.",
        body: "Adultos y niños desde 15 años o ≥20 kg: 400 mg cada 6 - 8 horas según necesidad.",
      },
      {
        heading: "CONTRAINDICACIONES:",
        body: "No debe utilizarse en pacientes con antecedentes de hipersensibilidad al ibuprofeno o a otros agentes antiinflamatorios no esteroidales.",
      },
      {
        heading: "ADVERTENCIAS Y PRECAUCIONES:",
        body: "Riesgos AINE: puede causar úlceras pépticas, sangrado gastrointestinal, descompensación de hipertensión, insuficiencia cardíaca, enfermedad coronaria o renal. Embarazo: Categoría C. Contraindicado en el último trimestre. Lactancia: no recomendado. No administrar por más de 2–3 días sin indicación médica. Si los síntomas persisten, consultar al médico.",
      },
    ],
    registro: "REGISTRO SANITARIO: BUPREX FLASH mini 400 mg cápsulas blandas, Reg. San: 9703-MEE-0125",
  },
]

export function Products() {
  const [active, setActive] = useState(0)
  const product = PRODUCTS[active]

  return (
    <section className="mx-auto max-w-[1100px] px-4 py-8 sm:px-6 sm:py-12">
      <h2 className="mb-6 text-center text-2xl font-extrabold uppercase tracking-wide text-navy sm:text-3xl">
        Productos
      </h2>

      {/* Dots */}
      <div className="mb-4 flex items-center justify-center gap-3">
        {PRODUCTS.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ver BUPREX FLASH MINI ${p.strength}`}
            aria-current={i === active}
            className={`h-4 w-4 rounded-full border-2 transition ${
              i === active ? "border-brand-red bg-brand-red" : "border-navy bg-transparent"
            }`}
          />
        ))}
      </div>

      <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: pack shot */}
          <div className="flex flex-col items-center justify-center gap-4 bg-white p-6 sm:p-8">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-brand-yellow drop-shadow-[1px_1px_0_rgba(10,27,107,0.35)] sm:text-5xl">
                BUPREX<sup className="text-lg">®</sup>
              </p>
              <p className="text-xs font-bold uppercase tracking-wide text-navy sm:text-sm">
                Rápido y efectivo alivio
              </p>
            </div>
            <div className="relative aspect-square w-full max-w-[340px]">
              <Image
                src={product.img || "/placeholder.svg"}
                alt={`Empaque BUPREX FLASH MINI ${product.strength}`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: info */}
          <div className="bg-white">
            <div className="bg-navy px-6 py-5 text-white sm:px-8">
              <h3 className="text-xl font-extrabold sm:text-2xl">
                BUPREX<sup className="text-xs">®</sup> FLASH MINI
              </h3>
              <p className="text-lg font-bold text-brand-yellow sm:text-xl">{product.strength}</p>
            </div>
            <div className="space-y-3 px-6 py-5 text-[13px] leading-relaxed text-muted-foreground sm:px-8">
              {product.paragraphs.map((para, i) => (
                <p key={i}>
                  {para.heading && <span className="font-bold text-navy">{para.heading} </span>}
                  {para.body}
                </p>
              ))}
              <p className="pt-1 text-xs font-semibold text-navy">{product.registro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
