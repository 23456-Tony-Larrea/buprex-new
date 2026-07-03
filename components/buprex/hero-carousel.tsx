import Image from "next/image"

export function HeroCarousel() {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-navy-deep">
      <div className="relative aspect-[16/10] w-full sm:aspect-[2/1] lg:aspect-[16/6]">
        <Image
          src="/buprex/hero-1.png"
          alt="BUPREX FLASH: rápido y efectivo alivio del dolor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
