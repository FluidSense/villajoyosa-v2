import { NextPageContext } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import client from '../sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import styles from '../styles/Home.module.css';
import { Amenity, PageTitle } from '../types/local';
import Navbar from '../components/Navbar';
import Amenities from '../components/Amenities';
import { SanityImage } from '../types/sanityTypes';
import ImageCarousel from '../components/ImageCarousel';

type Props = {
  pageTitle: PageTitle;
  amenities: Amenity[];
  ingress: any;
  carouselImages: SanityImage[];
};

const Home: FC<Props> = (props) => {
  const {
    pageTitle: { title, subtitle },
    ingress,
    amenities,
    carouselImages
  } = props;
  return (
    <>
      <Head>
        <title>Villajoyosa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </header>
          <ImageCarousel images={carouselImages} />
        <Navbar />
        <section className={styles.section}>
          <BlockContent blocks={ingress.text} />
          <Amenities amenities={amenities} />
        </section>
      </main>
    </>
  );
};

export async function getStaticProps(context: NextPageContext) {
  const pageTitleQuery = '*[_type == "pageTitle"][0]';
  const pageTitle = await client.fetch(pageTitleQuery);

  const amenityQuery = '*[_type == "amenity"]{display}';
  const amenities = await client.fetch(amenityQuery);

  const pageContentQuery =
    '*[_type == "content" && displayPage == "frontpage"]';
  const pageContent = await client.fetch(pageContentQuery);

  const carouselImagesQuery = '*[_type == "imageCarousel"]{name,"imageUrl": image.asset->url}'
  const carouselImages = await client.fetch(carouselImagesQuery);

  return {
    props: {
      pageTitle,
      amenities,
      ingress: pageContent[0],
      carouselImages
    },
  };
}

export default Home;
