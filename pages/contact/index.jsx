import Head from "next/head";
import ContactUs from "../../components/contactPage/ContactUs";
import MapFooter from "../../components/contactPage/MapsFooter";

const Contact = () =>{
  return(
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ContactUs/>
      <MapFooter />
    </div>
  )
}

export default Contact;