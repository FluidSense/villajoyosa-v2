import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import client from "../sanityClient";
import App, { AppContext } from "next/app";

function MyApp({ Component, pageProps, props }) {
  const {
    pageTitle: { title, subtitle },
  } = props;
  return (
    <>
      <Head>
        <title>Villajoyosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </header>
        <div id="carousel-holder" />
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

//@ts-ignore
MyApp.getInitialProps = async (context: AppContext) => {
  const pageTitleQuery = '*[_type == "pageTitle"][0]';
  const pageTitle = await client.fetch(pageTitleQuery);
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
    props: {
      pageTitle,
    },
  };
};
