import { NextPageContext } from "next";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import client from "../sanityClient";
import { SanityImage } from "../types/sanityTypes";
import styles from "../styles/ImageGallery.module.css";

type Props = {
  images: SanityImage[];
};

const Images: FC<Props> = (props) => {
  const { images } = props;
  return (
    <Carousel className={styles.gallery}>
      {images.map((image) => (
        <img
          key={image._id || image.name}
          src={image.imageUrl}
          alt={image.name}
        />
      ))}
    </Carousel>
  );
};

export default Images;

export const getStaticProps = async (context: NextPageContext) => {
  const imagesQuery =
    '*[_type == "imageGallery"]{name,"imageUrl": image.asset->url}';
  const images = await client.fetch(imagesQuery);
  return {
    props: {
      images,
    },
  };
};
