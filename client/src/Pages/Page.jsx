import About from "../Components/About"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Imprint from "../Components/Imprint"
import Navbar from "../Components/Navbar"
import Projects from "../Components/Projects"
import Initiatives from "../Components/Initiatives"

function Page() {
  return (
    <div className="relative w-full">
      <Navbar />

      <div id="Home">
        <Hero />
      </div>

      <div id="About">
        <About />
      </div>

        <div id="Initiatives">
            <Initiatives />
        </div>

        <div id="Project">
            <Projects />
        </div>

        <div id="Contact">
            <Footer />
        </div>

        <div className="">
            <Imprint />
        </div>


    </div>
  )
}

export default Page
