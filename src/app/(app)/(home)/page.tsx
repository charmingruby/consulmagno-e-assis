import { Areas } from '@/components/pages/home/areas'
import { Attractive } from '@/components/pages/home/attractive'
import { Contact } from '@/components/pages/home/contact'
import { Hero } from '@/components/pages/home/hero'
import { Insights } from '@/components/pages/home/insights'
import { WhyUs } from '@/components/pages/home/why-us'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Attractive />
      <Areas />
      <Insights />
      <Contact />
    </>
  )
}
