import { SiteHeader } from "@/components/buprex/site-header"
import { HeroCarousel } from "@/components/buprex/hero-carousel"
import { ReliefFeatures } from "@/components/buprex/relief-features"
import { Portfolio } from "@/components/buprex/portfolio"
import { Products } from "@/components/buprex/products"
import { Malestars } from "@/components/buprex/malestars"
import { Articles } from "@/components/buprex/articles"
import { Faq } from "@/components/buprex/faq"
import { SiteFooter } from "@/components/buprex/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <HeroCarousel />
      <ReliefFeatures />
      <Portfolio />
      <Products />
      <Malestars />
      <Articles />
      <Faq />
      <SiteFooter />
    </main>
  )
}
