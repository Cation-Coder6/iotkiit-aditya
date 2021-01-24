import AboutUs from "../components/AboutUs";
import EventAim from "../components/EventAim";
import Hero from "../components/Hero";
import MapFooter from "../components/MapsFooter";
import Process from "../components/Process";
import ProjectCard from "../components/ProjectCard";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <EventAim />
      <Testimonials />
      <MapFooter />
      <ProjectCard />
    </div>

  )
}
