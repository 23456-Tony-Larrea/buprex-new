import Image from "next/image"

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5H17V3.6c-.28-.04-1.25-.12-2.38-.12-2.36 0-3.97 1.44-3.97 4.08v2.27H8v3.1h2.65V21h2.85Z" />
  </svg>
)
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23 12s0-3.3-.42-4.88a2.55 2.55 0 0 0-1.8-1.8C19.2 4.9 12 4.9 12 4.9s-7.2 0-8.78.42a2.55 2.55 0 0 0-1.8 1.8C1 8.7 1 12 1 12s0 3.3.42 4.88a2.55 2.55 0 0 0 1.8 1.8C4.8 19.1 12 19.1 12 19.1s7.2 0 8.78-.42a2.55 2.55 0 0 0 1.8-1.8C23 15.3 23 12 23 12ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
  </svg>
)

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/buprex/logo-buprex.png"
              alt="BUPREX"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Rápido y efectivo alivio del dolor, la fiebre y la inflamación. 32 años tratando el dolor.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-red"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Productos"
            links={["Buprex Forte", "Buprex Flash Mini", "Buprex Gotas", "Malestars Pediátrico"]}
          />
          <FooterCol title="Compañía" links={["Sobre nosotros", "Laboratorios LIFE", "Artículos", "Contacto"]} />
          <FooterCol
            title="Legal"
            links={["Términos y condiciones", "Política de privacidad", "Farmacovigilancia", "Uso adecuado"]}
          />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>© {new Date().getFullYear()} BUPREX® — Laboratorios LIFE. Todos los derechos reservados.</p>
          <p className="mt-2">Si los síntomas persisten, consulte a su médico. Medicamento de venta libre.</p>
        </div>
      </div>

      {/* Large BUPREX brand wordmark */}
      <div className="border-t border-white/5 py-6 text-center">
        <Image
          src="/buprex/logo-buprex.png"
          alt="BUPREX"
          width={320}
          height={80}
          className="mx-auto h-14 w-auto opacity-30"
        />
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wide text-brand-yellow">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-white/70 transition hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
