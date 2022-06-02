import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "leaflet/dist/leaflet.css";
import "yet-another-react-lightbox/styles.css";
import React from "react";
import splitbee from "@splitbee/web";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
  disableCookie: true,
});

splitbee.track("branch", { type: process.env.BRANCH || "rebrand-backup" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
