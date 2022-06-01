import { NextPageContext } from "next";
import React, { FC } from "react";
import client from "../sanityClient";
import {
  Amenity,
  ImageAtStaticPosition,
  ImagePosition,
  PageTitle,
  TextBlock,
} from "../types/local";
import { SanityImage } from "../types/sanityTypes";
import Head from "next/head";
import styled from "@emotion/styled";
import Introduction from "components/NewDesign/Introduction";
import VaarLeilighet from "components/NewDesign/VaarLeilighet";
import LeilighetenHar from "components/NewDesign/LeilighetenHar";
import Bilder from "components/NewDesign/Bilder";
import { Page } from "components/NewDesign/common";
import KontaktOss from "components/NewDesign/KontaktOss";

type Props = {
  amenities: Amenity[];
  carouselImages: SanityImage[];
  imagesAtStaticPositions: ImageAtStaticPosition[];
};

const SeparatorLine = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const LeilighetInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    & > * {
      width: 50%;
    }
  }
`;

const Home: FC<Props> = (props) => {
  const { amenities, carouselImages, imagesAtStaticPositions } = props;
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
        <title>Leilighet i Villajoyosa</title>
        <meta
          name="favicon-source"
          content="Holiday icon by Icons8 https://icons8.com/icons/set/favicon-beach"
        />
      </Head>
      <main>
        <Page>
          <Introduction
            bannerImage={imagesAtStaticPositions.find(
              (img) => img.position === ImagePosition.Banner
            )}
            actionImage={imagesAtStaticPositions.find(
              async (img) => img.position === ImagePosition.ActionButtons
            )}
          />
        </Page>
        <SeparatorLine />
        <Page>
          <LeilighetInfoWrapper>
            <VaarLeilighet
              image={imagesAtStaticPositions.find(
                (img) => img.position === ImagePosition.VaarLeilighet
              )}
            />
            <LeilighetenHar />
          </LeilighetInfoWrapper>
        </Page>
        <Page>
          <Bilder images={carouselImages} />
        </Page>
        <Page>
          <KontaktOss />
        </Page>
      </main>
    </>
  );
};

export async function getStaticProps(
  context: NextPageContext
): Promise<{ props: Props }> {
  const amenityQuery = '*[_type == "amenity"]';
  const amenities = await client.fetch(amenityQuery);

  const carouselImagesQuery =
    '*[_type == "gallery" && name == "Beta"]{images[]{"url": asset->url, "dimensions": asset->metadata.dimensions, "lqip": asset->metadata.lqip}}.images[]';
  const carouselImages = await client.fetch(carouselImagesQuery);

  const imageAtStaticPositionsQuery =
    '*[_type == "imagePosition"]{...@, "image": { "imageUrl": image.asset -> url, "name": image.caption }}';
  const imagesAtStaticPositions = await client.fetch(
    imageAtStaticPositionsQuery
  );

  return {
    props: {
      amenities,
      carouselImages,
      imagesAtStaticPositions,
    },
  };
}

export default Home;
