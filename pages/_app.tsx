import App from "next/app";
import React from "react";
import GlobalContextProvider from "../context/GlobalContext";
import Loader from "../components/global/Loader";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ModalVideo from "../components/ModalVideo";
import SocialWidget from "../components/SocialWidget";
import PageLoader from "../components/global/PageLoader";

class IndexApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <GlobalContextProvider {...pageProps} locale={this.props.router.locale}>
        <Loader />
        <SocialWidget />
        <PageLoader />
        <ModalVideo />
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </GlobalContextProvider>
    );
  }
}

// function MyApp({ Component, pageProps }: AppProps) {
//   <GlobalContextProvider {...pageProps} locale={"tr"}>
//     <Loader />
//     <SocialWidget />
//     <ModalVideo />
//     <Nav />
//     <Component {...pageProps} />
//     <Footer />
//   </GlobalContextProvider>;
// }

// export default MyApp;
export default IndexApp;
