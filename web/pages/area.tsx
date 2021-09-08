import { NextPageContext } from "next";
import { FC, useMemo } from "react";
import { AmenityDisplay } from "../components/Amenities";
import client from "../sanityClient";
import { Amenity } from "../types/local";
import styles from "../styles/Home.module.css";
import AreaMap from "../components/AreaMap";
import dynamic from "next/dynamic";

type Props = {
  amenities: Amenity[];
};
const Area: FC<Props> = (props) => {
  const { amenities } = props;
  const Map = dynamic(() => import("../components/AreaMap"), {
    loading: () => <p>Loading map...</p>,
    ssr: false,
  });
  return (
    <section className={styles.section}>
      <Map />
      {amenities.map((amenity) => (
        <AmenityDisplay amenity={amenity} key={amenity._id} />
      ))}
    </section>
  );
};

export default Area;

export async function getStaticProps(context: NextPageContext) {
  const amenityQuery = '*[_type == "location"]';
  const amenities = await client.fetch(amenityQuery);
  return {
    props: {
      amenities,
    },
  };
}
