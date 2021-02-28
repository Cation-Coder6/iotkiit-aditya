import Head from "next/head";
import ContactButtons from "../../components/contactPage/Buttons";
import ContactUs from "../../components/contactPage/ContactUs";
import HandWave from "../../components/contactPage/HandWave";
import MapFooter from "../../components/contactPage/MapsFooter";
import Testimonials from "../../components/contactPage/Testimonials";

const Contact = (props) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta
          name="description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://iotkiit.in"></meta>
        <meta property="og:title" content="IoT Lab KiiT"></meta>
        <meta
          property="og:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:image" content="/images/logo_small.webp"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://iotkiit.in"></meta>
        <meta property="twitter:title" content="IoT Lab KiiT"></meta>
        <meta
          property="twitter:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="twitter:image" content="/images/logo_small.webp"></meta>
      </Head>
      <HandWave />
      <ContactButtons links={props.footerData} />
      <Testimonials />
      <ContactUs />
      <MapFooter />
    </div>
  );
};

export async function getStaticProps(context) {
  //Getting FooterData from Server
  const SERVER = "https://api.iotkiit.in";
  const footerRes = await fetch(`${SERVER}/footer-link`);
  const footerData = await footerRes.json();
  return {
    props: {
      footerData,
    },
  };
}

export default Contact;
