import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps, footerData }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer footerData={footerData} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const SERVER = "http://100.24.85.44:1337";

  //Getting FooterData from Server
  const footerRes = await fetch(`${SERVER}/footer-link`);
  const footerData = await footerRes.json();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, footerData, revalidate: 600 };
};

export default MyApp;
