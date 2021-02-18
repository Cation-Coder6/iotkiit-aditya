import Head from "next/head";
import ContactButtons from "../../components/contactPage/Buttons";
import ContactUs from "../../components/contactPage/ContactUs";
import HandWave from "../../components/contactPage/HandWave";
import MapFooter from "../../components/contactPage/MapsFooter";
import Testimonials from "../../components/contactPage/Testimonials";

const Contact = () => {
  return (
    <div>
      <Head>
        <html lang="en" />
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HandWave />
      <ContactButtons />
      <Testimonials />
      <ContactUs />
      <MapFooter />
    </div>
  );
};

export default Contact;
