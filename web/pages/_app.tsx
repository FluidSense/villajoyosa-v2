import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import splitbee from "@splitbee/web";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
});

splitbee.track("branch", { type: process.env.BRANCH || "main-backup" });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
