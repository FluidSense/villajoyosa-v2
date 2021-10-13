import { NextPageContext } from "next";
import BlockContentWithSerializers from "../components/BlockContentWithSerializers";
import client from "../sanityClient";
import { PageTitle, TextBlock } from "../types/local";
import styles from "../styles/Home.module.css";
import { getPageTitle } from "../sanityQueries";
import Head from "next/head";
import Header from "../components/Header";

type Props = {
  textContent: TextBlock[];
  pageTitle: PageTitle;
};

const Rent: React.FC<Props> = (props) => {
  const { textContent, pageTitle } = props;
  return (
    <>
      <Head>
        <meta
          key="seo-description"
          name="description"
          content="
            The penthouse apartment can be rented through various means, always through Allonis Homes, but soon also AirBnB.
            
            Leiligheten kan leies gjennom ulike kanaler. Den kan alltid gjennom Allonis Homes, men snart også AirBnB.
          "
        />
      </Head>

      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <section className={styles.section}>
        <BlockContentWithSerializers blocks={textContent[0].text} />
      </section>
    </>
  );
};

export default Rent;

export async function getStaticProps(
  context: NextPageContext
): Promise<{ props: Props }> {
  const pageTitle = await getPageTitle();

  const textContentQuery = '*[_type == "content" && displayPage == "rent"]';
  const textContent = await client.fetch(textContentQuery);

  return {
    props: {
      textContent,
      pageTitle,
    },
  };
}
