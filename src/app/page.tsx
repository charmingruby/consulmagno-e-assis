import { Hero } from './components/hero'
import { Areas } from './components/areas'
import { WhyUs } from './components/why-us'
import { Blog } from './components/blog'
import { Contact } from './components/contact'

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
