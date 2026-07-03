"use client"

import Image from "next/image"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"

const NAV = [
  { label: "PRODUCTOS", active: true },
  { label: "SÍNTOMAS Y CONSEJOS" },
  { label: "BEBÉS Y NIÑOS" },
  { label: "SOBRE NOSOTROS" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-md">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-2.5 sm:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="BUPREX inicio">
          <Image
            src="/buprex/logo-buprex.png"
            alt="BUPREX"
            width={150}
            height={36}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Desktop nav pill */}
        <nav className="ml-2 hidden flex-1 items-center lg:flex">
          <div className="flex items-center gap-1 rounded-full bg-navy-deep px-2 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/10">
            {NAV.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`rounded-full px-4 py-2 transition-colors ${
                  item.active ? "font-extrabold text-brand-yellow" : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="ml-2 flex items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-[13px] font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-white/10">
            <Search className="h-4 w-4 text-brand-yellow" aria-hidden />
            <span className="text-white/80">BUSCAR......</span>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-navy px-4 py-3 text-white lg:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <Search className="h-4 w-4" aria-hidden />
            <input
              placeholder="Buscar..."
              className="w-full bg-transparent placeholder:text-white/60 focus:outline-none"
            />
          </div>
          <ul className="flex flex-col gap-1 text-sm font-semibold">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className={`block rounded-lg px-4 py-2.5 ${
                    item.active ? "bg-white text-navy" : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
