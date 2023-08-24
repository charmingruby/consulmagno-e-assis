import { Areas } from '@/components/pages/home/areas'
import { Blog } from '@/components/pages/home/blog'
import { Contact } from '@/components/pages/home/contact'
import { Hero } from '@/components/pages/home/hero'
import { WhyUs } from '@/components/pages/home/why-us'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Areas />
      <Blog />
      <Contact />
    </>
  )
}
