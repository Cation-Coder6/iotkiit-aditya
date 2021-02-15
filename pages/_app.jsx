import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

import 'swiper/swiper-bundle.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
