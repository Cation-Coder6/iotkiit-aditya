import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
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
