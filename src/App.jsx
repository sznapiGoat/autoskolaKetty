import { useReveal } from './hooks/useReveal'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { Why } from './components/Why'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="overflow-x-clip">
      <Nav />
      <Hero />
      <Courses />
      <Why />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
