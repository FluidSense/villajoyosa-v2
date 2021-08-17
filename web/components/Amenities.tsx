import { FC } from "react";
import { Amenity } from "../types/local";
import styles from "../styles/Amenities.module.css";
import DynamicIcon from "./DynamicIcon";

type Props = {
  amenities: Amenity[];
};

const Amenities: FC<Props> = (props) => {
  const { amenities } = props;
  return (
    <>
      <h3 className={styles.amenityHeader}>Leiligheta har:</h3>
      <section className={styles.amenities}>
        {amenities.map((amenity) => (
          <AmenityDisplay amenity={amenity} key={amenity.name} />
        ))}
      </section>
    </>
  );
};

type AmenityProps = {
  amenity: Amenity;
};

const AmenityDisplay: FC<AmenityProps> = (props) => {
  const {
    amenity: {
      display: { text, icon },
    },
  } = props;
  return (
    <article className={styles.amenity} key={text}>
      <DynamicIcon name={icon.name} provider={icon.provider} />
      <p>{text}</p>
    </article>
  );
};

export default Amenities;
