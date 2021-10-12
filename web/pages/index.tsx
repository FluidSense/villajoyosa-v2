import { NextPageContext } from "next";
import React, { FC } from "react";
import client from "../sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import styles from "../styles/Home.module.css";
import { Amenity, PageTitle, TextBlock } from "../types/local";
import Amenities from "../components/Amenities";
import { SanityImage } from "../types/sanityTypes";
import ImageCarousel from "../components/ImageCarousel";
import TextWithIconComponent from "../components/TextWithIcon";

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
      <ImageCarousel images={carouselImages} />
      <section className={styles.section}>
        <BlockContent blocks={ingress.text} serializers={serializers} />
        <Amenities amenities={amenities} />
        {rest &&
          rest.map((textBlock) => (
            <BlockContent
              key={textBlock.name}
              blocks={textBlock.text}
              serializers={serializers}
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

const serializers = {
  types: {
    textWithIcon: (props) => (
      //<p>{JSON.stringify(props)}</p>
      <TextWithIconComponent icon={props.node.icon} text={props.node.text} />
    ),
  },
};
