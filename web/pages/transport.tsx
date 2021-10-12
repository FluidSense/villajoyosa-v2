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
    <section className={styles.section}>
      <BlockContentWithSerializers blocks={textContent[0].text} />
    </section>
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
