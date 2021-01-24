import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import MapFooter from "../components/MapsFooter";
import Process from "../components/Process";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Testimonials />
      <MapFooter />
    </div>

  )
}
