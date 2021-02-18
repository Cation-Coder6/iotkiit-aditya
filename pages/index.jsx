import AboutUs from "../components/homePage/AboutUs";
import Hero from "../components/homePage/Hero";
import Process from "../components/homePage/Process";
import Services from "../components/homePage/Services";
import Showcase from "../components/homePage/Showcase";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <html lang="en" />
        <title>IoT Lab KiiT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Showcase />
    </div>
  );
}
