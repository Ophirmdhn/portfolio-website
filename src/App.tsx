import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

import TechStack from './sections/TechStack'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <TechStack />

        <Projects />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App