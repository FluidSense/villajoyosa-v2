import { NextPageContext } from "next";
import BlockContentWithSerializers from "../components/BlockContentWithSerializers";
import client from "../sanityClient";
import { TextBlock } from "../types/local";
import styles from "../styles/Home.module.css";

type Props = {
  textContent: TextBlock[];
};

const Transport: React.FC<Props> = (props) => {
  const { textContent } = props;
  return (
    <>
      <meta
        key="seo-description"
        name="description"
        content="
            There are many ways to get to and from the apartment, both by train, bus, taxi or car rental,
            and all of these services are available at both airport or within walking distance.
            
            Det er mange måter å komme seg både fra og til leiligheten, både med tog, buss, taxi eller billeie.
            Alle disse er tilgjengelige både rett fra flyplassen eller i byen innen gangavstand.
          "
      />
      <section className={styles.section}>
        <BlockContentWithSerializers blocks={textContent[0].text} />
      </section>
    </>
  );
};

export default Transport;

export async function getStaticProps(
  context: NextPageContext
): Promise<{ props: Props }> {
  const textContentQuery =
    '*[_type == "content" && displayPage == "transport"]';
  const textContent = await client.fetch(textContentQuery);

  return {
    props: {
      textContent,
    },
  };
}
