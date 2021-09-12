import { NextPageContext } from "next";
import { FC } from "react";
import { AmenityDisplay } from "../components/Amenities";
import client from "../sanityClient";
import { Amenity } from "../types/local";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

type Props = {
  amenities: Amenity[];
};

const Map = dynamic(() => import("../components/AreaMap"), {
  loading: function MapLoading() {
    return <p>Loading map...</p>;
  },
  ssr: false,
});

const Area: FC<Props> = (props) => {
  const { amenities } = props;
  return (
    <section className={styles.section}>
      <Map amenities={amenities} />
      {amenities.map((amenity) => (
        <AmenityDisplay amenity={amenity} key={amenity._id} />
      ))}
    </section>
  );
};

export default Area;

export const getStaticProps = async (context: NextPageContext) => {
  const amenityQuery = '*[_type == "location"]';
  const amenities = await client.fetch(amenityQuery);
  return {
    props: {
      amenities,
    },
  };
};
