import { FC } from "react";
import { Amenity } from "../types/local";
import styles from "../styles/Amenities.module.css";
import DynamicIcon from "./DynamicIcon";
import TextWithIcon from "./TextWithIcon";
import TextWithIconComponent from "./TextWithIcon";

type Props = {
  amenities: Amenity[];
};

const Amenities: FC<Props> = (props) => {
  const { amenities } = props;
  return (
    <div>
      <h3>Leiligheta har:</h3>
      <section className={styles.amenities}>
        {amenities.map((amenity) => (
          <AmenityDisplay amenity={amenity} key={amenity.name} />
        ))}
      </section>
    </div>
  );
};

type AmenityProps = {
  amenity: Amenity;
};

export const AmenityDisplay: FC<AmenityProps> = (props) => {
  const {
    amenity: {
      display: { text, icon },
    },
  } = props;
  return <TextWithIconComponent icon={icon} text={text} />;
};

export default Amenities;
