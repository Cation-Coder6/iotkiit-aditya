import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import MapFooter from "../components/MapsFooter";
import Process from "../components/Process";
import Services from "../components/Services";
import Showcase from "../components/Showcase";


export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Showcase />
      <MapFooter />
    </div>

  )
}
