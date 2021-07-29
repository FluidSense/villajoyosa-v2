import { FC } from 'react';
import { TextWithIcon } from '../types/pageTitle';
import Image from 'next/image';
import styles from '../styles/Amenities.module.css';

type Props = {
  amenities: TextWithIcon[];
};

const Amenities: FC<Props> = (props) => {
  const { amenities } = props;
  return (
    <section className={styles.amenities}>
      {amenities.map((amenity) => (
        <Amenity key={amenity.text} amenity={amenity} />
      ))}
    </section>
  );
};

type AmenityProps = {
  amenity: TextWithIcon;
};

const Amenity: FC<AmenityProps> = (props) => {
  const { amenity } = props;
  return (
    <article className={styles.amenity}>
      <Image src={amenity.icon} alt={''} layout='fill' />
      <p>{amenity.text}</p>
    </article>
  );
};

export default Amenities;
