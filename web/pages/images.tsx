import { NextPageContext } from "next";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import client from "../sanityClient";
import { SanityImage } from "../types/sanityTypes";
import styles from "../styles/ImageGallery.module.css";
import { urlFor } from "../urlBuilder";
import Header from "../components/Header";
import Head from "next/head";
import { PageTitle } from "../types/local";
import { getPageTitle } from "../sanityQueries";

type Props = {
  images: SanityImage[];
  pageTitle: PageTitle;
};

const Images: FC<Props> = (props) => {
  const { images, pageTitle } = props;

  return (
    <>
      <Head>
        <meta
          key="seo-description"
          name="description"
          content="
            Images of the apartment and surrounding area, showing the beach, bars and the cozy rental penthouse.

            Bilder av leiligheten og omegn - området rundt, som viser stranda, barer og den koselige toppleiligheten.
          "
        />
      </Head>

      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
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
    </>
  );
};

export default Images;

export const getStaticProps = async (context: NextPageContext) => {
  const pageTitle = await getPageTitle();

  const imagesQuery =
    '*[_type == "gallery" && displayPage == "images"]{images[]{"name": alt,"imageUrl": asset -> url, "_id": _key}}.images[]';
  const images = await client.fetch<SanityImage[]>(imagesQuery);
  return {
    props: {
      images,
      pageTitle,
    },
  };
};
