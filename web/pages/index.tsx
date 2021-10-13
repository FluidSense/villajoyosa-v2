import { NextPageContext } from "next";
import React, { FC } from "react";
import client from "../sanityClient";
import styles from "../styles/Home.module.css";
import { Amenity, PageTitle, TextBlock } from "../types/local";
import Amenities from "../components/Amenities";
import { SanityImage } from "../types/sanityTypes";
import ImageCarousel from "../components/ImageCarousel";
import BlockContentWithSerializers from "../components/BlockContentWithSerializers";
import Head from "next/head";

type Props = {
  pageTitle: PageTitle;
  amenities: Amenity[];
  textContent: TextBlock[];
  carouselImages: SanityImage[];
};

const Home: FC<Props> = (props) => {
  const { textContent, amenities, carouselImages } = props;
  const [ingress, ...rest] = textContent;
  return (
    <>
      <Head>
        <meta
          key="seo-description"
          name="description"
          content="
            Rental information for a private penthouse apartment in Villajoyosa (La Vila Joiosa), Alicante, Spain. 
            With a view of the ocean, it is a hidden gem along Costa Blanca.

            Utleieinformasjon for en privat toppleilighet i Villajoyosa (La Vila Joiosa), Alicante, Spania.
            Med utsikt til havet er leiligheten en skjult perle langs Costa Blanca.
          "
        />
      </Head>
      <ImageCarousel images={carouselImages} />
      <section className={styles.section}>
        <BlockContentWithSerializers blocks={ingress.text} />
        <Amenities amenities={amenities} />
        {rest &&
          rest.map((textBlock) => (
            <BlockContentWithSerializers
              key={textBlock.name}
              blocks={textBlock.text}
            />
          ))}
      </section>
    </>
  );
};

export async function getStaticProps(
  context: NextPageContext
): Promise<{ props: Props }> {
  const pageTitleQuery = '*[_type == "pageTitle"][0]';
  const pageTitle = await client.fetch(pageTitleQuery);

  const amenityQuery = '*[_type == "amenity"]';
  const amenities = await client.fetch(amenityQuery);

  const textContentQuery =
    '*[_type == "content" && displayPage == "frontpage"]';
  const textContent = await client.fetch(textContentQuery);

  const carouselImagesQuery =
    '*[_type == "gallery" && displayPage == "frontpage"]{images[]{"name": alt,"imageUrl": asset -> url}}.images[]';
  const carouselImages = await client.fetch(carouselImagesQuery);

  return {
    props: {
      pageTitle,
      amenities,
      textContent,
      carouselImages,
    },
  };
}

export default Home;
