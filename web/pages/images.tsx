import { NextPageContext } from "next";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import client from "../sanityClient";
import { SanityImage } from "../types/sanityTypes";
import styles from "../styles/ImageGallery.module.css";
import { urlFor } from "../urlBuilder";

type Props = {
  images: SanityImage[];
};

const Images: FC<Props> = (props) => {
  const { images } = props;

  return (
    <Carousel
      className={styles.gallery}
      autoPlay={false}
      dynamicHeight={true}
      showIndicators={false}
    >
      {images
        .filter((image) => !!image.imageUrl)
        .map((image) => {
          const srcUrl = urlFor(image.imageUrl)
            .height(600)
            .fit("max")
            .quality(50)
            .url();
          return (
            <img
              src={srcUrl}
              alt={image.name}
              key={image._id}
              style={{ objectFit: "contain", maxHeight: "500px" }}
            />
          );
        })}
    </Carousel>
  );
};

export default Images;

export const getStaticProps = async (context: NextPageContext) => {
  const imagesQuery =
    '*[_type == "gallery" && displayPage == "images"]{images[]{"name": alt,"imageUrl": asset -> url, "_id": _key}}.images[]';
  const images = await client.fetch<SanityImage[]>(imagesQuery);
  return {
    props: {
      images,
    },
  };
};
