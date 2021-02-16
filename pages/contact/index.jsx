import Head from "next/head";
import ContactUs from "../../components/contactPage/ContactUs";
import HandWave from "../../components/contactPage/HandWave";
import MapFooter from "../../components/contactPage/MapsFooter";
import Testimonials from "../../components/contactPage/Testimonials";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HandWave />
      <Testimonials />
      <ContactUs />
      <MapFooter />
    </div>
  );
};

export default Contact;
