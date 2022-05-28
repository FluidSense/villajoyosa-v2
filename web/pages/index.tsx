import { NextPageContext } from "next";
import React, { FC } from "react";
import client from "../sanityClient";
import { Amenity, PageTitle, TextBlock } from "../types/local";
import { SanityImage } from "../types/sanityTypes";
import Head from "next/head";
import { getPageTitle } from "../sanityQueries";
import styled from "@emotion/styled";
import Introduction from "components/NewDesign/Introduction";
import VaarLeilighet from "components/NewDesign/VaarLeilighet";
import LeilighetenHar from "components/NewDesign/LeilighetenHar";
import Bilder from "components/NewDesign/Bilder";
import { Page } from "components/NewDesign/common";

type Props = {
  pageTitle: PageTitle;
  amenities: Amenity[];
  textContent: TextBlock[];
  carouselImages: SanityImage[];
};

const SeparatorLine = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const LeilighetInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    & > * {
      width: 50%;
    }
  }
`;

const Home: FC<Props> = (props) => {
  const { textContent, amenities, carouselImages, pageTitle } = props;
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
      <main>
        <Page>
          <Introduction />
        </Page>
        <SeparatorLine />
        <Page>
          <LeilighetInfoWrapper>
            <VaarLeilighet />
            <LeilighetenHar />
          </LeilighetInfoWrapper>
        </Page>
        <Page>
          <Bilder />
        </Page>
      </main>
    </>
  );
};

export async function getStaticProps(
  context: NextPageContext
): Promise<{ props: Props }> {
  const pageTitle = await getPageTitle();

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
